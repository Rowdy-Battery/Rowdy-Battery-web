# Lab 3 — Creating the Frontend (React)

**Name:** Yusef Lamadanie, Jessica Chen, Benjamin Persinger, William Makaudze  
**Course:** ACCTMIS 4630 — Business Systems Application Development  
**Lab:** #3 — Frontend Development with React

--- 

## 🧭 Overview

This project implements a simple e-commerce frontend built with **React** and **React Router**.  
It follows the official Lab 3 instructions and includes navigation, dynamic product rendering, mock orders, a payment flow with props, a security placeholder, and an optional fulfillment feature.

---

## ✨ Features Implemented

- 🏡 **Home Page**
- 🛍️ **Catalog Page** – Displays products dynamically with `.map()` and placeholder images
- 📦 **Orders Page** – Displays mock order table
- 💳 **Payment Page** – Shows checkout steps using props
- 🧭 **Navigation Menu** – Hamburger/flyout menu to access all pages
- 🚚 **Fulfillment Page** – Shipped vs. pending status
- 🔐 **Security Page** – Placeholder page to demonstrate routing structure

---

## 🧭 Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Landing page |
| `/products` | Catalog | Product listing |
| `/orders` | Orders | Mock order data |
| `/payment` | Payment | Checkout step flow |
| `/fulfillment` | Fulfillment | Order fulfillment status |
| `/security` | Security | Placeholder for future security/authentication features |

---

## 🧰 Tech Stack

- React + TypeScript
- React Router
- JSX/TSX Components
- Inline styling + CSS
- Placeholder product images

---

## 🪄 How to Run the Project

```bash
# 1. Go to frontend folder
cd frontend

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
