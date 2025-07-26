package com.knockoutzone.backend.util;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

public class LoggerUtilTest {


    @Test
    public void testLogging() {
        // Test info level logging
        LoggerUtil.info(LoggerUtilTest.class, "This is an info test message");
        LoggerUtil.info(LoggerUtilTest.class, "This is an info test message with parameter: {}", "test-param");

        // Test warn level logging
        LoggerUtil.warn(LoggerUtilTest.class, "This is a warning test message");
        LoggerUtil.warn(LoggerUtilTest.class, "This is a warning test message with parameter: {}", "test-param");

        // Test error level logging
        LoggerUtil.error(LoggerUtilTest.class, "This is an error test message");
        LoggerUtil.error(LoggerUtilTest.class, "This is an error test message with parameter: {}", "test-param");

        try {
            // Simulate an exception
            throw new RuntimeException("Test exception");
        } catch (Exception e) {
            LoggerUtil.error(LoggerUtilTest.class, "This is an error test message with exception", e);
        }


        System.out.println("Test completed. Please check the log file at: Logs/application.log");
    }
}
