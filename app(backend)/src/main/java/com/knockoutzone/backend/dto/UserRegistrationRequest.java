package com.knockoutzone.backend.dto;

import com.knockoutzone.backend.entity.enums.Role;
import lombok.Data;

@Data
public class UserRegistrationRequest {

    private String fullName;
    private String email;
    private String password;
    private Role role;
}
