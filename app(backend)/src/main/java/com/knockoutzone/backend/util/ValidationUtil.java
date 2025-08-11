package com.knockoutzone.backend.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.regex.Pattern;

public class ValidationUtil {

    private static final Pattern EMAIL_PATTERN=Pattern.compile("^[\\w.-]+@[\\w.-]+\\.[A-Za-z]{2,}$");
    private static final Pattern PHONE_PATTERN=Pattern.compile("^[6-9]\\d{9}$");
    private static final Pattern SLUG_PATTERN=Pattern.compile("^[a-z0-9]+(?:-[a-z0-9]+)*$");
    private static final Pattern ALPHA_PATTERN=Pattern.compile("^[A-Za-z]+$");
    private static final Pattern STRONG_PASSWORD_PATTERN = Pattern.compile("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");


    private ValidationUtil(){

    }

    public static boolean isValidEmail(String email){
        return email!=null && EMAIL_PATTERN.matcher(email).matches();
    }

    public static boolean isValidPhoneNumber(String phone){
        return phone!=null && PHONE_PATTERN.matcher(phone).matches();
    }

    public static boolean isValidSlug(String slug){
        return slug!=null && SLUG_PATTERN.matcher(slug).matches();
    }

    public static boolean isValidLength(String value,int min,int max){
        return value != null
                && !value.trim().isEmpty()
                && value.trim().length() >= min
                && value.trim().length() <= max;
    }

    public static boolean matchesRegex(String regex,String value){
        return value!=null && Pattern.matches(regex,value);
    }

    public static boolean isAlpha(String value){
        return value!=null && ALPHA_PATTERN.matcher(value).matches();
    }

    public static boolean isNotEmpty(String value){
        return value!=null && !value.trim().isEmpty();
    }

    public static boolean isValidDate(String dateStr,String format){
        try{
            SimpleDateFormat sdf=new SimpleDateFormat(format);
            sdf.setLenient(false);
            sdf.parse(dateStr);
            return true;
        }
        catch(ParseException e){
            return false;
        }
    }

    public static boolean isPastDate(String dateStr,String format){
        try{
            SimpleDateFormat sdf=new SimpleDateFormat(format);
            Date date=sdf.parse(dateStr);
            return date.before(new Date());
        }catch (ParseException e){
            return false;
        }
    }

    public static boolean isFutureDate(String dateStr,String format){
        try{
            SimpleDateFormat sdf=new SimpleDateFormat(format);
            Date date=sdf.parse(dateStr);
            return date.after(new Date());
        }
        catch(ParseException e){
            return false;
        }
    }

    public static boolean isEqualString(String str1,String str2){
        return str1!=null && str2 !=null && str1.trim().equalsIgnoreCase(str2.trim());
    }

    public static String sanitize(String input){
        if(input==null)return null;
        return input.trim()
                .replaceAll("<","&lt;")
                .replaceAll(">","&gt;")
                .replaceAll("\"","&quot;")
                .replaceAll("'","&#x27;");
    }

    public static boolean isStrongPassword(String password){
        return password!=null && STRONG_PASSWORD_PATTERN.matcher(password).matches();
    }

}

