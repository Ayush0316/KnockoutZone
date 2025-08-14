package com.knockoutzone.backend.aspect;

import java.util.Enumeration;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.util.ContentCachingRequestWrapper;

import com.knockoutzone.backend.util.LoggerUtil;

import jakarta.servlet.http.HttpServletRequest;

@Aspect
@Component
public class LoggingAspect {

    @Before("@annotation(com.knockoutzone.backend.annotation.LogRequest)")
    public void logRequestDetails(JoinPoint joinPoint) {
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        Class<?> clazz = signature.getDeclaringType();

        HttpServletRequest request =
            ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();

        StringBuilder logMessage = new StringBuilder();
        logMessage.append("\n===== Incoming HTTP Request =====\n");
        logMessage.append("Method: ").append(signature.getName()).append("\n");
        logMessage.append("Class: ").append(clazz.getSimpleName()).append("\n");
        logMessage.append("HTTP Method: ").append(request.getMethod()).append("\n");
        logMessage.append("URL Path: ").append(request.getRequestURI()).append("\n");
        logMessage.append("Headers:\n");

        Enumeration<String> headerNames = request.getHeaderNames();
        while (headerNames.hasMoreElements()) {
            String headerName = headerNames.nextElement();
            String headerValue = request.getHeader(headerName);
            logMessage.append(headerName).append(": ").append(headerValue).append("\n");
        }

        String body = getRequestBody(request);
        logMessage.append("Request Body: ").append(body).append("\n");
        logMessage.append("==================================");

        LoggerUtil.info(clazz, logMessage.toString());
    }

    private String getRequestBody(HttpServletRequest request) {
        if (request instanceof ContentCachingRequestWrapper) {
            ContentCachingRequestWrapper wrapper = (ContentCachingRequestWrapper) request;
            byte[] buf = wrapper.getContentAsByteArray();
            if (buf.length > 0) {
                return new String(buf);
            } else {
                return "[empty]";
            }
        }
        return "[Request body not cached – make sure to use ContentCachingRequestWrapper]";
    }
}
