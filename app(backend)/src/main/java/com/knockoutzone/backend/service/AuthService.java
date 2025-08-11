package com.knockoutzone.backend.service;

import com.knockoutzone.backend.dto.UserLoginRequest;
import com.knockoutzone.backend.dto.UserRegistrationRequest;
import com.knockoutzone.backend.dto.UserRegistrationResponse;

public interface AuthService {

    UserRegistrationResponse registerUser(UserRegistrationRequest userRegistrationRequest);

    String authenticateUser(UserLoginRequest userLoginRequest);

    String logoutUser(String authHeader);
}
