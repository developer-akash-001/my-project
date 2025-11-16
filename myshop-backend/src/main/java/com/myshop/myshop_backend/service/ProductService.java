package com.myshop.myshop_backend.service;

import com.myshop.myshop_backend.Product;
import com.myshop.myshop_backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;


    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }


    public Product addProduct(Product product) {
        return productRepository.save(product);
    }
}
