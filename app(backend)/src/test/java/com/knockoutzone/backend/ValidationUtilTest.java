package com.knockoutzone.backend;

import com.knockoutzone.backend.util.ValidationUtil;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class ValidationUtilTest {

    @Test
    void testValidEmail(){
        assertTrue(ValidationUtil.isValidEmail("test@gmail.com"));
        assertFalse(ValidationUtil.isValidEmail("invalid-email.com"));
    }

    @Test
    void testValidPhoneNumber(){
        assertTrue(ValidationUtil.isValidPhoneNumber("9780236712"));
        assertFalse(ValidationUtil.isValidPhoneNumber("23445"));
    }

    @Test
    void testValidSlug(){
        assertTrue(ValidationUtil.isValidSlug("knockout-zone123"));
        assertFalse(ValidationUtil.isValidSlug("KNOCKOUT-ZONE123!"));
    }

    @Test
    void testValidLength(){
        assertTrue(ValidationUtil.isValidLength("hello",3,10));
        assertFalse(ValidationUtil.isValidLength("hi",3,9));
        assertFalse(ValidationUtil.isValidLength("hey it is knckoutzone backend",3,10));
    }

    @Test
    void testMatchesRegex(){
        assertTrue(ValidationUtil.matchesRegex("^[A-Z0-9]+$", "ABC123"));
        assertFalse(ValidationUtil.matchesRegex("^[A-Z]+$", "Abc123"));
    }

    @Test
    void testIsAlpha(){
        assertTrue(ValidationUtil.isAlpha("Hello"));
        assertFalse(ValidationUtil.isAlpha("Hello123"));
        assertFalse(ValidationUtil.isAlpha("123"));
        assertFalse(ValidationUtil.isAlpha(" "));
    }

    @Test
    void testIsNotEmpty(){
        assertTrue(ValidationUtil.isNotEmpty("Hello"));
        assertFalse(ValidationUtil.isNotEmpty(" "));
        assertFalse(ValidationUtil.isNotEmpty(null));
    }

    @Test
    void isValidDate(){
        assertTrue(ValidationUtil.isValidDate("2023-12-31","yyyy-MM-dd"));
        assertFalse(ValidationUtil.isValidDate("2025-02-31","yyyy-MM-dd"));
        assertFalse(ValidationUtil.isValidDate("hello","yyyy-MM-dd"));
    }

    @Test
    void testIsPastDate(){
        assertTrue(ValidationUtil.isPastDate("2020-01-01", "yyyy-MM-dd"));
        assertFalse(ValidationUtil.isPastDate("2999-01-01", "yyyy-MM-dd"));
        assertFalse(ValidationUtil.isPastDate("invalid","yyyy-MM-dd"));
    }

    @Test
    void testIsFutureDate(){
        assertTrue(ValidationUtil.isFutureDate("2027-01-01","yyyy-MM-dd"));
        assertFalse(ValidationUtil.isFutureDate("2024-11-28","yyyy-MM-dd"));
        assertFalse(ValidationUtil.isFutureDate("invalid","yyyy-MM-dd"));
    }

    @Test
    void testIsEqualString(){
        assertTrue(ValidationUtil.isEqualString("Hello","hello"));
        assertFalse(ValidationUtil.isEqualString("Hello","World"));
        assertFalse(ValidationUtil.isEqualString(null, "test"));
    }

    @Test
    void testSanitize(){
        assertTrue(ValidationUtil.sanitize("<script>alert('XSS')</script>").contains("&lt;script&gt;alert(&#x27;XSS&#x27;)&lt;/script&gt;"));
        assertTrue(ValidationUtil.sanitize("   hello  ").equals("hello"));
        assertNull(ValidationUtil.sanitize(null));
    }


    @Test
    void testIsStrongPassword(){
        assertTrue(ValidationUtil.isStrongPassword("StrongP@ss1"));
        assertFalse(ValidationUtil.isStrongPassword("password"));
        assertFalse(ValidationUtil.isStrongPassword("PASS1!"));
        assertFalse(ValidationUtil.isStrongPassword("password1!"));
        assertFalse(ValidationUtil.isStrongPassword(null));
    }

}
