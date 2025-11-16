package com.myshop.myshop_backend.controller;

import com.myshop.myshop_backend.CartItem;
import com.myshop.myshop_backend.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {
    @Autowired
   private CartService cartService;

    @PostMapping("/add")
    public String addToCart(@RequestParam Long userId, @RequestParam Long productId){
        return cartService.addToCart(userId,productId);
    }

    @GetMapping("/{userId}")
    public List<CartItem> getUserCart(@PathVariable Long userId){
        return cartService.getUserCart(userId);
    }
}
