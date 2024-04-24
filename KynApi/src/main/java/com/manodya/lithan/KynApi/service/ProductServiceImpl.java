package com.manodya.lithan.KynApi.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.manodya.lithan.KynApi.dao.Product;
import com.manodya.lithan.KynApi.repository.ProductRepository;

@Service
@Transactional
public class ProductServiceImpl implements ProductService{

	@Autowired
	private ProductRepository productRepo;
	
	@Override
	public List<Product> viewProduct() {
		return productRepo.findAll();
	}

	@Override
	public void saveProduct(Product product) {
		productRepo.save(product);
	}

	@Override
	public List<Product> searchByKey(String keyword) {
		return productRepo.searchByKey(keyword);
	}

	@Override
	public Optional<Product> searchById(int keyword) {
		return productRepo.findById(keyword);
	}

	@Override
	public void deleteById(int keyword) {
		productRepo.deleteById(keyword);
		
	}

}
