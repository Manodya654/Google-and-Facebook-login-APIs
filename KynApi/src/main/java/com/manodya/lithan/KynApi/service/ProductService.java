package com.manodya.lithan.KynApi.service;

import java.util.List;
import java.util.Optional;

import com.manodya.lithan.KynApi.dao.Product;


public interface ProductService {
	public List<Product> viewProduct();

	public void saveProduct(Product product);

	public List<Product> searchByKey(String keyword);

	public Optional<Product> searchById(int keyword);

	public void deleteById(int keyword);
	
}
