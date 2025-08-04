package com.knockoutzone.backend.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggerUtil {
    private LoggerUtil() {
        throw new UnsupportedOperationException("This is a utility class and cannot be instantiated");
    }

    // --- Primary methods with explicit class parameter (better performance) ---

    public static void info(Class<?> clazz, String message) {
        Logger logger = LoggerFactory.getLogger(clazz);
        if (logger.isInfoEnabled()) {
            logger.info("[{}] {}", getCallingMethodName(), message);
        }
    }

    public static void info(Class<?> clazz, String message, Object... params) {
        Logger logger = LoggerFactory.getLogger(clazz);
        if (logger.isInfoEnabled()) {
            logger.info(prependMethodName(message), prependMethodNameToParams(params));
        }
    }

    public static void warn(Class<?> clazz, String message) {
        Logger logger = LoggerFactory.getLogger(clazz);
        if (logger.isWarnEnabled()) {
            logger.warn("[{}] {}", getCallingMethodName(), message);
        }
    }

    public static void warn(Class<?> clazz, String message, Object... params) {
        Logger logger = LoggerFactory.getLogger(clazz);
        if (logger.isWarnEnabled()) {
            logger.warn(prependMethodName(message), prependMethodNameToParams(params));
        }
    }

    public static void error(Class<?> clazz, String message) {
        Logger logger = LoggerFactory.getLogger(clazz);
        if (logger.isErrorEnabled()) {
            logger.error("[{}] {}", getCallingMethodName(), message);
        }
    }

    public static void error(Class<?> clazz, String message, Object... params) {
        Logger logger = LoggerFactory.getLogger(clazz);
        if (logger.isErrorEnabled()) {
            logger.error(prependMethodName(message), prependMethodNameToParams(params));
        }
    }

    public static void error(Class<?> clazz, String message, Throwable throwable) {
        Logger logger = LoggerFactory.getLogger(clazz);
        if (logger.isErrorEnabled()) {
            logger.error("[{}] {}", getCallingMethodName(), message, throwable);
        }
    }

    // --- Auto-detection methods (use with caution - performance impact) ---

    public static void info(String message) {
        Class<?> callingClass = getCallingClass();
        info(callingClass, message);
    }

    public static void info(String message, Object... params) {
        Class<?> callingClass = getCallingClass();
        info(callingClass, message, params);
    }

    public static void warn(String message) {
        Class<?> callingClass = getCallingClass();
        warn(callingClass, message);
    }

    public static void warn(String message, Object... params) {
        Class<?> callingClass = getCallingClass();
        warn(callingClass, message, params);
    }

    public static void error(String message) {
        Class<?> callingClass = getCallingClass();
        error(callingClass, message);
    }

    public static void error(String message, Object... params) {
        Class<?> callingClass = getCallingClass();
        error(callingClass, message, params);
    }

    public static void error(String message, Throwable throwable) {
        Class<?> callingClass = getCallingClass();
        error(callingClass, message, throwable);
    }

    // --- Helper methods for parameter manipulation ---

    private static String prependMethodName(String message) {
        return "[{}] " + message;
    }

    private static Object[] prependMethodNameToParams(Object... params) {
        Object[] newParams = new Object[params.length + 1];
        newParams[0] = getCallingMethodName();
        System.arraycopy(params, 0, newParams, 1, params.length);
        return newParams;
    }

    // --- Utility methods ---

    private static Class<?> getCallingClass() {
        StackTraceElement[] stackTrace = Thread.currentThread().getStackTrace();
        for (StackTraceElement element : stackTrace) {
            String className = element.getClassName();
            if (!className.equals(LoggerUtil.class.getName()) &&
                    !className.equals(Thread.class.getName())) {
                try {
                    return Class.forName(className);
                } catch (ClassNotFoundException e) {
                    return LoggerUtil.class;
                }
            }
        }
        return LoggerUtil.class;
    }

    private static String getCallingMethodName() {
        StackTraceElement[] stackTrace = Thread.currentThread().getStackTrace();
        for (StackTraceElement element : stackTrace) {
            String className = element.getClassName();
            if (!className.equals(LoggerUtil.class.getName()) &&
                    !className.equals(Thread.class.getName())) {
                return element.getMethodName();
            }
        }
        return "Unknown";
    }
}