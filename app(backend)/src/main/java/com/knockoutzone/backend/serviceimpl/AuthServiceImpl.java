package com.knockoutzone.backend.serviceimpl;

import com.knockoutzone.backend.dto.Constants;
import com.knockoutzone.backend.dto.UserLoginRequest;
import com.knockoutzone.backend.dto.UserRegistrationRequest;
import com.knockoutzone.backend.dto.UserRegistrationResponse;
import com.knockoutzone.backend.entity.User;
import com.knockoutzone.backend.repository.UserRepository;
import com.knockoutzone.backend.service.AuthService;
import com.knockoutzone.backend.util.JwtUtil;
import com.knockoutzone.backend.util.UserMapperUtil;
import com.knockoutzone.backend.util.ValidationUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Date;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final JwtUtil jwtUtil;
    private final TokenBlackListService tokenBlackListService;
    private final ValidationUtil validationUtil = new ValidationUtil();
    private final UserMapperUtil userMapperUtil = new UserMapperUtil();

    @Autowired
    public AuthServiceImpl(UserRepository userRepository,
                           BCryptPasswordEncoder bCryptPasswordEncoder, JwtUtil jwtUtil, TokenBlackListService tokenBlackListService) {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.jwtUtil = jwtUtil;
        this.tokenBlackListService = tokenBlackListService;
    }

    @Override
    public UserRegistrationResponse registerUser(UserRegistrationRequest userRegistrationRequest) {

        if (!validationUtil.isValidEmail(userRegistrationRequest.getEmail())) {
            throw new IllegalArgumentException(Constants.INVALID_EMAIL);
        }

        // Check if email is already taken
        if (userRepository.existsByEmail(userRegistrationRequest.getEmail())) {
            throw new IllegalArgumentException(Constants.EMAIL_ALREADY_USED);
        }

        // Validate password strength
        if (!validationUtil.isStrongPassword(userRegistrationRequest.getPassword())) {
            throw new IllegalArgumentException(Constants.WEAK_PASSWORD);
        }

        // Validate full name
        if (!validationUtil.isNotEmpty(userRegistrationRequest.getFullName())) {
            throw new IllegalArgumentException(Constants.FULL_NAME_REQUIRED);
        }

        // Hash password
        String hashedPassword = bCryptPasswordEncoder.encode(userRegistrationRequest.getPassword());
        User user = userMapperUtil.toEntity(userRegistrationRequest, hashedPassword);
        userRepository.save(user);

        return new UserRegistrationResponse(HttpStatus.CREATED.value(), Constants.REGISTRATION_SUCCESS);
    }

    @Override
    public String authenticateUser(UserLoginRequest userLoginRequest) {

        User user = userRepository.findByEmail(userLoginRequest.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException(Constants.USER_NOT_FOUND));

        if (!bCryptPasswordEncoder.matches(userLoginRequest.getPassword(), user.getPasswordHash())) {
            throw new BadCredentialsException(Constants.PASSWORD_MISMATCH);
        }

        //return jwt token
        return jwtUtil.generateToken(user.getEmail());
    }

    @Override
    public String logoutUser(String authHeader){
        String jti = jwtUtil.extractJti(authHeader.substring(7));
        Date expiration = jwtUtil.extractExpiration(authHeader.substring(7));
        long ttl = expiration.getTime() - System.currentTimeMillis();

        tokenBlackListService.saveBlacklistToken(jti, ttl);

        return Constants.USER_LOGOUT_SUCCESSFUL;
    }
}