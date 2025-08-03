package com.knockoutzone.backend.aspect;

import java.util.Enumeration;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.util.ContentCachingRequestWrapper;

import com.knockoutzone.backend.util.LoggerUtil;

import jakarta.servlet.http.HttpServletRequest;

@Aspect
@Component
public class LoggingAspect {

    @Autowired
    private HttpServletRequest request;

    @Before("@annotation(com.knockoutzone.backend.annotation.LogRequest)")
    public void logRequestDetails(JoinPoint joinPoint) {
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        Class<?> clazz = signature.getDeclaringType();

        LoggerUtil.info(clazz, "===== Incoming HTTP Request =====");
        LoggerUtil.info(clazz, "Method: {}", signature.getName());
        LoggerUtil.info(clazz, "Class: {}", clazz.getSimpleName());
        LoggerUtil.info(clazz, "HTTP Method: {}", request.getMethod());
        LoggerUtil.info(clazz, "URL Path: {}", request.getRequestURI());

        LoggerUtil.info(clazz, "Headers:");
        Enumeration<String> headerNames = request.getHeaderNames();
        while (headerNames.hasMoreElements()) {
            String header = headerNames.nextElement();
            LoggerUtil.info(clazz, "{}: {}", header, request.getHeader(header));
        }

        LoggerUtil.info(clazz, "Request Body: {}", extractRequestBody());

        LoggerUtil.info(clazz, "==================================");
    }

    private String extractRequestBody() {
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
