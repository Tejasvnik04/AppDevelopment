package PlantsCareAssistant.services;

//package com.iamneo.ecom.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import PlantsCareAssistant.entities.User;
import PlantsCareAssistant.entities.enumerate.Role;
//import PlantsCareAssistant.entities.User;
import PlantsCareAssistant.repositories.UserRepository;
import PlantsCareAssistant.request.AuthenticationRequest;
import PlantsCareAssistant.request.RegisterRequest;
import PlantsCareAssistant.response.AuthenticationResponse;
import PlantsCareAssistant.util.JwtUtil;

//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import com.iamneo.ecom.dto.request.AuthenticationRequest;
//import com.iamneo.ecom.dto.request.RegisterRequest;
//import com.iamneo.ecom.dto.response.AuthenticationResponse;
//import com.iamneo.ecom.model.User;
//import com.iamneo.ecom.model.enumerate.Role;
//import com.iamneo.ecom.repository.UserRepository;
//import com.iamneo.ecom.service.AuthService;
//import com.iamneo.ecom.util.JwtUtil;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class AuthService  
{
	@Autowired 
    UserRepository userRepository;
	
    PasswordEncoder passwordEncoder;
    AuthenticationManager authenticationManager;
    JwtUtil jwtUtil;

    public boolean userRegistration(RegisterRequest request) {
        Optional<User> isUserExists = userRepository.findByEmail(request.getEmail());
        if (!isUserExists.isPresent()) {
            var user = User.builder()
                    .name(request.getName())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .isEnabled(true)
                    .role(Role.valueOf(request.getRole().toUpperCase()))
                    .build();
            userRepository.save(user);
            return true;
        } else {
            return false;
        }
    }

    public AuthenticationResponse userAuthentication(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var token = jwtUtil.generateToken(user);
        return AuthenticationResponse.builder()
                .token(token)
                .uid(user.getUid())
                .build();
    }
}