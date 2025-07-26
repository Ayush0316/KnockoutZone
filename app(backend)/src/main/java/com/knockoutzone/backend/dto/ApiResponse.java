package com.knockoutzone.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApiResponse<T> {
    private boolean success = true;
    private int statusCode = 200;
    private String message = null;
    private T data = null;
}

