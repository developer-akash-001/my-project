import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1>About MyShop</h1>
      <p>
        Welcome to <strong>MyShop</strong>! We are your number one source for all things fashion, gadgets, and lifestyle. 
        We’re dedicated to giving you the very best products, with a focus on quality, customer service, and uniqueness.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to provide high-quality products at affordable prices and make online shopping a seamless and enjoyable experience.
      </p>

      <h2>Our Vision</h2>
      <p>
        We aim to become a leading online store globally, known for our reliability, quality products, and excellent customer service.
      </p>

      <h2>Why Choose Us?</h2>
      <ul>
        <li>Wide variety of products</li>
        <li>High-quality standards</li>
        <li>Fast and reliable delivery</li>
        <li>Secure online payments</li>
        <li>Excellent customer support</li>
      </ul>
    </div>
  );
}

export default About;
