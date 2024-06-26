package com.manodya.lithan.KynApi.payload;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

//Local or Google or Facebook Register
public class Register {
	@NotBlank
	private String userName;
	
	@Email
	@NotBlank
	private String email;
	
	@NotBlank
	private String password;

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}

