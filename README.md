This project is a responsive Product Listing Page built as part of a company assignment.
The application demonstrates core frontend development skills including component-based architecture, state management, UI responsiveness, and basic e-commerce functionality.

The domain chosen for this assignment is Clothing – Innerwear.

🎯 Assignment Objectives

Display product data in a clean and structured UI

Implement filtering, sorting, and search functionality

Build a functional shopping cart

Ensure responsiveness across devices

Write clean, readable, and scalable code

🚀 Features Implemented
🔹 Product Listing

Displays multiple innerwear products

Product details include:

Image

Name

Price

Short description

Category (Men / Women / Kids)

🔹 Search & Filtering

🔍 Search by product name or description

🗂️ Filter products by category

💰 Sort products by price:

Low → High

High → Low

🔹 Cart Functionality

Add products to cart

Increase / decrease product quantity

Automatically removes product when quantity reaches zero

Cart count updates dynamically in the navbar

🔹 Billing & GST

Subtotal calculation based on quantity

GST calculated at 18%

Final total displayed clearly on cart page

🔹 Responsive Design

Mobile-first responsive layout

Optimized for desktop, tablet, and mobile devices

🛠️ Technology Stack
Layer	Technology
Frontend	React, HTML, CSS, JavaScript
Routing	React Router DOM
State Management	React Hooks (useState)
Styling	CSS (Flexbox & Grid)
Version Control	Git & GitHub
Backend	Optional (Not required for assignment)
📂 Project Structure
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── ProductCard.jsx
 │    └── FilterBar.jsx
 ├── pages/
 │    ├── Home.jsx
 │    └── Cart.jsx
 ├── data/
 │    └── products.js
 ├── App.jsx
 ├── main.jsx
 └── index.css

public/
 └── images/


This structure ensures scalability, readability, and separation of concerns.

🧮 Business Logic (GST Calculation)

Subtotal = Sum of (price × quantity)

GST = 18% of subtotal

Total Amount = Subtotal + GST

const subtotal = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);
const gst = subtotal * 0.18;
const total = subtotal + gst;

▶️ Running the Project Locally

Clone the repository

git clone https://github.com/your-username/innerwear-store.git


Navigate into the project folder

cd innerwear-store


Install dependencies

npm install


Start the development server

npm run dev

🧠 Key Concepts Demonstrated

Component-based UI development

React state handling and prop drilling

Array operations (map, filter, reduce)

Conditional rendering

Responsive design principles

Clean code and folder organization

🔮 Possible Enhancements

Backend API integration (Node.js + MongoDB)

Persistent cart using localStorage

User authentication

Pagination or lazy loading

Checkout flow

👨‍💻 Developer Information

Name: Shaik Ibrahim
Role: Frontend / Full Stack Developer (Fresher)
Skills: React, JavaScript, HTML, CSS, Node.js (Basics)
Purpose: Company Technical Assignment Submission