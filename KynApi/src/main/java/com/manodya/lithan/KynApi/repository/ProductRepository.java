package com.manodya.lithan.KynApi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.manodya.lithan.KynApi.dao.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{

	@Query(value="SELECT p FROM Product p WHERE productName LIKE '%' || :keyword || '%' " +  
			"OR productPrice LIKE '%' || :keyword || '%' " +  "OR productDes LIKE '%' || :keyword || '%' ")
	public List<Product> searchByKey(@Param("keyword")String keyword);

}