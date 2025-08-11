package com.knockoutzone.backend.serviceimpl;

import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;
import java.util.concurrent.TimeUnit;

@Service
public class TokenBlackListService {

    private final StringRedisTemplate redisTemplate;

    public TokenBlackListService(StringRedisTemplate redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    // Save token jti with TTL
    public void saveBlacklistToken(String jti, long ttlMillis) {
        redisTemplate.opsForValue().set(jti, "blacklisted", ttlMillis, TimeUnit.MILLISECONDS);
    }

    // Check if token jti is blacklisted
    public boolean isTokenBlacklisted(String jti) {
        return Boolean.TRUE.equals(redisTemplate.hasKey(jti));
    }
}
