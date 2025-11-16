package com.myshop.myshop_backend.controller;

import com.myshop.myshop_backend.User;
import com.myshop.myshop_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService ;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.registerUser(user);
    }

   @PostMapping("/login")
    public String login(@RequestBody User user){
        return userService.loginUser(user.getEmail(), user.getPassword());
   }


}