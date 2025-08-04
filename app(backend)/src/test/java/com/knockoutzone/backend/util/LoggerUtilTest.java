package com.knockoutzone.backend.util;

import ch.qos.logback.classic.Level;
import ch.qos.logback.classic.Logger;
import ch.qos.logback.classic.spi.ILoggingEvent;
import ch.qos.logback.core.read.ListAppender;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.slf4j.LoggerFactory;

import static org.junit.jupiter.api.Assertions.*;

class LoggerUtilTest {

    private ListAppender<ILoggingEvent> listAppender;
    private Logger logger;

    @BeforeEach
    void setUp() {
        // Get the logger for this class and configure it with a list appender
        logger = (Logger) LoggerFactory.getLogger(LoggerUtilTest.class);
        listAppender = new ListAppender<>();
        listAppender.start();
        logger.addAppender(listAppender);
    }

    @AfterEach
    void tearDown() {
        // Clean up
        logger.detachAppender(listAppender);
    }

    @Test
    void testInfoLogWithClass() {
        // Test basic info logging
        LoggerUtil.info(LoggerUtilTest.class, "This is an info test message");

        // Verify log
        assertEquals(1, listAppender.list.size());
        ILoggingEvent event = listAppender.list.get(0);
        assertEquals(Level.INFO, event.getLevel());
        assertTrue(event.getFormattedMessage().contains("This is an info test message"));
        assertTrue(event.getFormattedMessage().contains("testInfoLogWithClass"));
    }

    @Test
    void testInfoLogWithClassAndParams() {
        // Test info logging with parameters
        LoggerUtil.info(LoggerUtilTest.class, "This is an info message with param: {}", "test-value");

        // Verify log
        assertEquals(1, listAppender.list.size());
        ILoggingEvent event = listAppender.list.get(0);
        assertEquals(Level.INFO, event.getLevel());
        assertTrue(event.getFormattedMessage().contains("This is an info message with param: test-value"));
        assertTrue(event.getFormattedMessage().contains("testInfoLogWithClassAndParams"));
    }

    @Test
    void testWarnLogWithClass() {
        // Test basic warn logging
        LoggerUtil.warn(LoggerUtilTest.class, "This is a warning test message");

        // Verify log
        assertEquals(1, listAppender.list.size());
        ILoggingEvent event = listAppender.list.get(0);
        assertEquals(Level.WARN, event.getLevel());
        assertTrue(event.getFormattedMessage().contains("This is a warning test message"));
        assertTrue(event.getFormattedMessage().contains("testWarnLogWithClass"));
    }

    @Test
    void testWarnLogWithClassAndParams() {
        // Test warn logging with parameters
        LoggerUtil.warn(LoggerUtilTest.class, "This is a warning message with param: {}", "test-value");

        // Verify log
        assertEquals(1, listAppender.list.size());
        ILoggingEvent event = listAppender.list.get(0);
        assertEquals(Level.WARN, event.getLevel());
        assertTrue(event.getFormattedMessage().contains("This is a warning message with param: test-value"));
        assertTrue(event.getFormattedMessage().contains("testWarnLogWithClassAndParams"));
    }

    @Test
    void testErrorLogWithClass() {
        // Test basic error logging
        LoggerUtil.error(LoggerUtilTest.class, "This is an error test message");

        // Verify log
        assertEquals(1, listAppender.list.size());
        ILoggingEvent event = listAppender.list.get(0);
        assertEquals(Level.ERROR, event.getLevel());
        assertTrue(event.getFormattedMessage().contains("This is an error test message"));
        assertTrue(event.getFormattedMessage().contains("testErrorLogWithClass"));
    }

    @Test
    void testErrorLogWithClassAndParams() {
        // Test error logging with parameters
        LoggerUtil.error(LoggerUtilTest.class, "This is an error message with param: {}", "test-value");

        // Verify log
        assertEquals(1, listAppender.list.size());
        ILoggingEvent event = listAppender.list.get(0);
        assertEquals(Level.ERROR, event.getLevel());
        assertTrue(event.getFormattedMessage().contains("This is an error message with param: test-value"));
        assertTrue(event.getFormattedMessage().contains("testErrorLogWithClassAndParams"));
    }

    @Test
    void testErrorLogWithException() {
        // Test error logging with exception
        Exception exception = new RuntimeException("Test exception");
        LoggerUtil.error(LoggerUtilTest.class, "This is an error with exception", exception);

        // Verify log
        assertEquals(1, listAppender.list.size());
        ILoggingEvent event = listAppender.list.get(0);
        assertEquals(Level.ERROR, event.getLevel());
        assertTrue(event.getFormattedMessage().contains("This is an error with exception"));
        assertTrue(event.getFormattedMessage().contains("testErrorLogWithException"));
        assertNotNull(event.getThrowableProxy());
        assertEquals("Test exception", event.getThrowableProxy().getMessage());
    }

    @Test
    void testAutoDetectClass() {
        // Test automatic class detection
        LoggerUtil.info("This is an auto-detected class test");

        // Verify log
        assertEquals(1, listAppender.list.size());
        ILoggingEvent event = listAppender.list.get(0);
        assertEquals(Level.INFO, event.getLevel());
        assertTrue(event.getFormattedMessage().contains("This is an auto-detected class test"));
        assertTrue(event.getFormattedMessage().contains("testAutoDetectClass"));
        assertEquals(LoggerUtilTest.class.getName(), event.getLoggerName());
    }

    @Test
    void testAutoDetectClassWithParams() {
        // Test automatic class detection with parameters
        LoggerUtil.info("This is an auto-detected class test with param: {}", "auto-value");

        // Verify log
        assertEquals(1, listAppender.list.size());
        ILoggingEvent event = listAppender.list.get(0);
        assertEquals(Level.INFO, event.getLevel());
        assertTrue(event.getFormattedMessage().contains("This is an auto-detected class test with param: auto-value"));
        assertTrue(event.getFormattedMessage().contains("testAutoDetectClassWithParams"));
        assertEquals(LoggerUtilTest.class.getName(), event.getLoggerName());
    }

    @Test
    void testMultipleParameters() {
        // Test multiple parameter replacement
        LoggerUtil.info(LoggerUtilTest.class, "Testing with multiple params: {}, {} and {}", "first", "second", "third");

        // Verify log
        assertEquals(1, listAppender.list.size());
        ILoggingEvent event = listAppender.list.get(0);
        assertEquals(Level.INFO, event.getLevel());
        assertTrue(event.getFormattedMessage().contains("Testing with multiple params: first, second and third"));
    }

    @Test
    void testAutoDetectWarnLog() {
        // Test auto-detection with warn level
        LoggerUtil.warn("This is an auto-detected warning");

        // Verify log
        assertEquals(1, listAppender.list.size());
        ILoggingEvent event = listAppender.list.get(0);
        assertEquals(Level.WARN, event.getLevel());
        assertTrue(event.getFormattedMessage().contains("This is an auto-detected warning"));
        assertTrue(event.getFormattedMessage().contains("testAutoDetectWarnLog"));
        assertEquals(LoggerUtilTest.class.getName(), event.getLoggerName());
    }

    @Test
    void testAutoDetectWarnLogWithParams() {
        // Test auto-detection with warn level and parameters
        LoggerUtil.warn("This is an auto-detected warning with param: {}", "warn-value");

        // Verify log
        assertEquals(1, listAppender.list.size());
        ILoggingEvent event = listAppender.list.get(0);
        assertEquals(Level.WARN, event.getLevel());
        assertTrue(event.getFormattedMessage().contains("This is an auto-detected warning with param: warn-value"));
        assertTrue(event.getFormattedMessage().contains("testAutoDetectWarnLogWithParams"));
        assertEquals(LoggerUtilTest.class.getName(), event.getLoggerName());
    }

    @Test
    void testAutoDetectErrorLog() {
        // Test auto-detection with error level
        LoggerUtil.error("This is an auto-detected error");

        // Verify log
        assertEquals(1, listAppender.list.size());
        ILoggingEvent event = listAppender.list.get(0);
        assertEquals(Level.ERROR, event.getLevel());
        assertTrue(event.getFormattedMessage().contains("This is an auto-detected error"));
        assertTrue(event.getFormattedMessage().contains("testAutoDetectErrorLog"));
        assertEquals(LoggerUtilTest.class.getName(), event.getLoggerName());
    }

    @Test
    void testAutoDetectErrorLogWithParams() {
        // Test auto-detection with error level and parameters
        LoggerUtil.error("This is an auto-detected error with param: {}", "error-value");

        // Verify log
        assertEquals(1, listAppender.list.size());
        ILoggingEvent event = listAppender.list.get(0);
        assertEquals(Level.ERROR, event.getLevel());
        assertTrue(event.getFormattedMessage().contains("This is an auto-detected error with param: error-value"));
        assertTrue(event.getFormattedMessage().contains("testAutoDetectErrorLogWithParams"));
        assertEquals(LoggerUtilTest.class.getName(), event.getLoggerName());
    }

    @Test
    void testAutoDetectErrorLogWithException() {
        // Test auto-detection with error level and exception
        Exception exception = new RuntimeException("Auto-detected exception");
        LoggerUtil.error("This is an auto-detected error with exception", exception);

        // Verify log
        assertEquals(1, listAppender.list.size());
        ILoggingEvent event = listAppender.list.get(0);
        assertEquals(Level.ERROR, event.getLevel());
        assertTrue(event.getFormattedMessage().contains("This is an auto-detected error with exception"));
        assertTrue(event.getFormattedMessage().contains("testAutoDetectErrorLogWithException"));
        assertNotNull(event.getThrowableProxy());
        assertEquals("Auto-detected exception", event.getThrowableProxy().getMessage());
        assertEquals(LoggerUtilTest.class.getName(), event.getLoggerName());
    }

    @Test
    void testLoggerFormat() {
        // Test exact format of the log message
        LoggerUtil.info(LoggerUtilTest.class, "Format test");

        ILoggingEvent event = listAppender.list.get(0);
        assertEquals("[testLoggerFormat] Format test", event.getFormattedMessage());
    }
}