package com.knockoutzone.backend.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ApiResponse<T> {

    private boolean success = true;
    private int statusCode = 200;
    private String message = null;
    private T data = null;
}

