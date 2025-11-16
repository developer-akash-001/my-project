package com.myshop.myshop_backend.repository;

import com.myshop.myshop_backend.CartItem;
import com.myshop.myshop_backend.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartRepository extends JpaRepository<CartItem, Long> {
    List<CartItem> findByUser(User user);
}