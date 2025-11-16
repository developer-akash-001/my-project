package com.myshop.myshop_backend.service;

import com.myshop.myshop_backend.CartItem;
import com.myshop.myshop_backend.Product;
import com.myshop.myshop_backend.User;
import com.myshop.myshop_backend.repository.CartRepository;
import com.myshop.myshop_backend.repository.ProductRepository;
import com.myshop.myshop_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ProductRepository productRepository;


    public String addToCart(Long userId, Long productId){
        User user = userRepository.findById(userId).orElse(null);
        Product product =productRepository.findById(productId).orElse(null);

        if (user == null || product == null){
            return "Invalid user or product";
        }
        CartItem item = new CartItem();
        item.setUser(user);
        item.setProduct(product);
        cartRepository.save(item);
        return "Product added to cart successfully";
    }

    public List<CartItem> getUserCart(Long userId){
        User user = userRepository.findById(userId).orElse(null);
        if (user == null)return List.of();
        return cartRepository.findByUser(user);
    }
}
