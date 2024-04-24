package com.manodya.lithan.KynApi.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.manodya.lithan.KynApi.dao.Users;
import com.manodya.lithan.KynApi.exception.ResourceNotFoundException;
import com.manodya.lithan.KynApi.repository.UsersRepository;


@Service
@Transactional
public class UsersServiceImpl implements UserDetailsService{

	@Autowired
	private UsersRepository userRepo;
	
	//Override Method for load user by username 
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Users users = userRepo.findByEmail(email)
		.orElseThrow( () -> new UsernameNotFoundException("This email cannot be found" + email));
		
		return UsersPrincipal.createUser(users);
	}
	
	//It is used for JWT Authentication Filter
	public UserDetails loadUserById(long userId){
		Users users = userRepo.findById(userId)
		.orElseThrow( () -> new ResourceNotFoundException("Users", "userId", userId));
		
		return UsersPrincipal.createUser(users);
	}


}
