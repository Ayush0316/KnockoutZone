package com.knockoutzone.backend.controller;


import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.knockoutzone.backend.annotation.LogRequest;

@RestController
@RequestMapping("/test")
public class TestController {
	  @LogRequest
	    @PostMapping(value="/ping",  consumes = MediaType.TEXT_PLAIN_VALUE)
	    public ResponseEntity<String> ping(@RequestBody String body) {
	        return ResponseEntity.ok("pong");
	    }
}
