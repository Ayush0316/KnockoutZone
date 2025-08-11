package com.knockoutzone.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserRegistrationResponse {
    int statusCode;
    String message;
}
