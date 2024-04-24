package com.manodya.lithan.KynApi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.manodya.lithan.KynApi.dao.Users;
import com.manodya.lithan.KynApi.exception.ResourceNotFoundException;
import com.manodya.lithan.KynApi.repository.UsersRepository;
import com.manodya.lithan.KynApi.service.UsersPrincipal;

@RestController
@RequestMapping(value="/online")
public class UsersController {
	@Autowired
    private UsersRepository userRepository;

	//Profile API <<Get Current User Profile>>
    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public Users getUser(@CurrentUser UsersPrincipal usersPrincipal) {
    	return userRepository.findById((usersPrincipal.getUserId())) 
                .orElseThrow(() -> new ResourceNotFoundException("Users", "userId", usersPrincipal.getUserId()));
    }
}