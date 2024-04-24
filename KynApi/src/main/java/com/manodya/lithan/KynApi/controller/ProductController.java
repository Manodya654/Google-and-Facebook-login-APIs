package com.manodya.lithan.KynApi.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.manodya.lithan.KynApi.dao.Product;
import com.manodya.lithan.KynApi.service.ProductService;


@RestController
@RequestMapping("/online")
public class ProductController {
	@Autowired
	private ProductService productService;
	
	@PostMapping(value="/save")
	public void saveCar(@RequestBody Product product){
		productService.saveProduct(product);
	}
	
	@GetMapping("/view")
	/* @PreAuthorize("hasRole('USER')") */
	public List<Product> viewProduct(){
		List<Product> products = productService.viewProduct();
		return products;
	}
	
	@GetMapping(value = "/key/{keyword}")
	public List<Product> searchByKey(@PathVariable String keyword){
		return productService.searchByKey(keyword);
	}
	
	@PutMapping(value="/key/{keyword}")
	public Product updateProduct(@PathVariable int keyword, @RequestBody Product product) {
		
		Optional<Product> oldProduct = productService.searchById(keyword);
		
		Product updateProduct = oldProduct.get();
		
		updateProduct.setProductName(product.getProductName());
		updateProduct.setProductPrice(product.getProductPrice());
		updateProduct.setProductRating(product.getProductRating());
		updateProduct.setProductDes(product.getProductDes());
		
		productService.saveProduct(updateProduct);
		
		return updateProduct;
	}
	
	@DeleteMapping(value ="/key/{keyword}")
	public void deleteById(@PathVariable int keyword) {
		productService.deleteById(keyword);
	}
	
}