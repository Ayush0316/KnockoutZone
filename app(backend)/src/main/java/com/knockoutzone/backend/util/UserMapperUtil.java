package com.knockoutzone.backend.util;

import com.knockoutzone.backend.dto.UserRegistrationRequest;
import com.knockoutzone.backend.entity.User;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class UserMapperUtil {

    public User toEntity(UserRegistrationRequest request, String hashedPassword) {
        User user = new User();
        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setPasswordHash(hashedPassword);
        user.setRole(request.getRole());
        user.setCreatedAt(LocalDateTime.now());
        user.setUpdatedAt(LocalDateTime.now());
        return user;
    }
}
