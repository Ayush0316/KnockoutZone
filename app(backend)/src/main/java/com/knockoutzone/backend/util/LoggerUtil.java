package com.knockoutzone.backend.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggerUtil {

    public static Logger getLogger(Class<?> clazz) {
        return LoggerFactory.getLogger(clazz);
    }

    public static void info(Class<?> clazz, String message) {
        Logger logger = getLogger(clazz);
        String callingMethod = getCallingMethodName();
        logger.info("[{}] {}", callingMethod, message);
    }

    public static void info(Class<?> clazz, String message, Object... params) {
        Logger logger = getLogger(clazz);
        String callingMethod = getCallingMethodName();
        logger.info("[{}] " + message, prepend(callingMethod, params));
    }

    public static void warn(Class<?> clazz, String message) {
        Logger logger = getLogger(clazz);
        String callingMethod = getCallingMethodName();
        logger.warn("[{}] {}", callingMethod, message);
    }

    public static void warn(Class<?> clazz, String message, Object... params) {
        Logger logger = getLogger(clazz);
        String callingMethod = getCallingMethodName();
        logger.warn("[{}] " + message, prepend(callingMethod, params));
    }

    public static void error(Class<?> clazz, String message) {
        Logger logger = getLogger(clazz);
        String callingMethod = getCallingMethodName();
        logger.error("[{}] {}", callingMethod, message);
    }

    public static void error(Class<?> clazz, String message, Object... params) {
        Logger logger = getLogger(clazz);
        String callingMethod = getCallingMethodName();
        logger.error("[{}] " + message, prepend(callingMethod, params));
    }

    public static void error(Class<?> clazz, String message, Throwable throwable) {
        Logger logger = getLogger(clazz);
        String callingMethod = getCallingMethodName();
        logger.error("[{}] {}", callingMethod, message, throwable);
    }


    // Utility method to get the name of the calling method
    private static String getCallingMethodName() {
        StackTraceElement[] stackTrace = Thread.currentThread().getStackTrace();
        // Index 0: getStackTrace, 1: getCallingMethodName, 2: logging method, 3: actual caller
        if (stackTrace.length >= 4) {
            return stackTrace[3].getMethodName();
        }
        return "unknown";
    }

    // Utility method to prepend method name to log parameters
    private static Object[] prepend(String methodName, Object... params) {
        Object[] result = new Object[params.length + 1];
        result[0] = methodName;
        System.arraycopy(params, 0, result, 1, params.length);
        return result;
    }
}
