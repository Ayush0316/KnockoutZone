package com.knockoutzone.backend.filters;

import com.knockoutzone.backend.dto.Constants;
import com.knockoutzone.backend.serviceimpl.TokenBlackListService;
import com.knockoutzone.backend.util.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;
import java.util.Collections;
import java.util.Date;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Value("${security.jwt.threshold.time}")
    private long thresholdTime;

    private final JwtUtil jwtUtil;
    private final TokenBlackListService tokenBlackListService;

    @Autowired
    public JwtAuthenticationFilter(JwtUtil jwtUtil, TokenBlackListService tokenBlackListService) {
        this.jwtUtil = jwtUtil;
        this.tokenBlackListService = tokenBlackListService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        final String authHeader = request.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        final String jwt = authHeader.substring(7);

        if(jwtUtil.isTokenValid(jwt)) {

            String jti = jwtUtil.extractJti(jwt);
            if(tokenBlackListService.isTokenBlacklisted(jti)) {
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                response.getWriter().write(Constants.TOKEN_REVOKED);
                return;
            }

            String userName = jwtUtil.extractUsername(jwt);

            if (userName != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userName, null, Collections.emptyList());

                SecurityContextHolder.getContext().setAuthentication(authToken);
            }

            checkIfTokenExpired(jwt, userName, response);
        }

        filterChain.doFilter(request, response);
    }

    public void checkIfTokenExpired(String token, String userName, HttpServletResponse response){

        Date expirationTime = jwtUtil.extractExpiration(token);
        long timeLeft = expirationTime.getTime() - System.currentTimeMillis();

        if (timeLeft < thresholdTime) {  // less than 5 minutes left
            // Generate new token with refreshed expiry
            String newToken = jwtUtil.generateToken(userName);

            // Send new token back in response header (or response body)
            response.setHeader("Authorization", "Bearer " + newToken);
        }
    }
}
