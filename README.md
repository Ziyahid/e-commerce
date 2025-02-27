# E-Commerce App

A full-stack e-commerce application built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js). This project enables users to browse products, add them to a cart, and make purchases securely.

## Features

- User authentication (Signup/Login)
- Product browsing and search
- Add to cart and checkout functionality
- Secure payment gateway integration
- Order tracking
- Admin dashboard for product and order management

## Tech Stack

### Frontend:
- React.js (Vite)
- Tailwind CSS
- React Router

### Backend:
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication

### Additional Tools:
- Stripe (for payments)
- Cloudinary (for image uploads)

## Installation and Setup

### Prerequisites:
Make sure you have the following installed on your machine:
- Node.js
- MongoDB

### Steps to Run Locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Ziyahid/e-commerce.git
   cd e-commerce
   ```

2. **Install Dependencies:**
   ```bash
   # Backend dependencies
   cd server
   npm install
   
   # Frontend dependencies
   cd ../client
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the `server` directory and add the required environment variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET=your_stripe_secret
   ```

4. **Start the Application:**
   ```bash
   # Start the backend
   cd server
   npm start
   
   # Start the frontend
   cd ../client
   npm run dev
   ```

5. Open the application in your browser at `http://localhost:5173`


## API Endpoints
| Method | Endpoint       | Description |
|--------|--------------|-------------|
| POST   | /api/auth/register | Register a new user |
| POST   | /api/auth/login | User login |
| GET    | /api/products | Get all products |
| GET    | /api/products/:id | Get product details |
| POST   | /api/cart | Add item to cart |
| POST   | /api/order | Place an order |
| GET    | /api/order/:id | Get order details |

## Future Enhancements
- Implement real-time order tracking using WebSockets
- Add user reviews and ratings for products
- Improve UI/UX with better animations and transitions
- Add multi-vendor support

## License
This project is licensed under the MIT License.

---
Developed with ❤️ by Mohammed Ziyahid

