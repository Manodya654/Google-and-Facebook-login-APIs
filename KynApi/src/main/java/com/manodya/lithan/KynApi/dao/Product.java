package com.manodya.lithan.KynApi.dao;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int productId;
	
	@Column(nullable = false)
	private String productName;
	
	@Column(nullable = false)
	private String productPrice;
	
	private String productRating;
	
	private String productDes;
	
	public int getProductId() {
		return productId;
	}
	
	public void setProductId(int productId) {
		this.productId = productId;
	}
	
	public String getProductName() {
		return productName;
	}
	
	public void setProductName(String productName) {
		this.productName = productName;
	}
	
	public String getProductPrice() {
		return productPrice;
	}
	
	public void setProductPrice(String productPrice) {
		this.productPrice = productPrice;
	}
	
	public String getProductRating() {
		return productRating;
	}
	
	public void setProductRating(String productRating) {
		this.productRating = productRating;
	}
	
	public String getProductDes() {
		return productDes;
	}
	
	public void setProductDes(String productDes) {
		this.productDes = productDes;
	}
	
	
}
