

---

````markdown
# 🙋‍♂️ DocAppoint User Panel

The **User Panel** is a user-facing web application where patients can register, book doctor appointments, manage their profile, and make payments securely. Built with React.js, it integrates with the backend via RESTful APIs and Razorpay for online payments.

🌐 **Live URL**: [https://user.docappoint.com](https://user.docappoint.com)  

---

## 🧩 Tech Stack

- **React.js**
- **Tailwind CSS**
- **Axios** for API communication
- **JWT-based authentication**
- **Razorpay** for payments

---

## 🚀 Setup Instructions

```bash
git clone https://github.com/TarunPal0812/client-user.git
cd client-user
npm install
npm run dev
````

---

## 🔐 Environment Variables (.env)

```env
VITE_USER_API=http://localhost:5000/api/user
VITE_RAZORPAY_KEY=rzp_test_****************
```

---

## 📁 Suggested Folder Structure

```
user-panel/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── .env
└── README.md
```

---

## 🛠️ Key Features

### ✅ Authentication

* Register and Login with JWT
* Store token in localStorage
* Route protection

### 🧑‍💼 User Profile

* Upload profile picture
* Update personal details

### 🗓️ Appointment Management

* Book an appointment with available doctors
* View all your appointments
* Cancel appointments

### 💳 Payment Integration

* Razorpay payment before confirmation
* Handle refund flow
* Payment status verification

---

## 📡 Sample API Usage

```js
// services/userAPI.js
import axios from 'axios';

const userAPI = axios.create({ baseURL: import.meta.env.VITE_USER_API });

userAPI.interceptors.request.use((req) => {
  const token = localStorage.getItem('userToken');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const register = (data) => userAPI.post('/register', data);
export const login = (data) => userAPI.post('/login', data);
export const getProfile = () => userAPI.get('/get-profile');
export const bookAppointment = (data) => userAPI.post('/book-appointment', data);
```

---

## 💳 Razorpay Integration Flow

1. User clicks "Pay & Book"
2. `/payment-razorpay` generates an order
3. Razorpay modal opens
4. On success, response goes to `/verifyRazorpay`
5. If canceled, call `/refund-payment` (optional)

---

## 🧪 Postman Testing

Use the routes in `backend/README.md`. Add this header for protected user routes:

```
Authorization: Bearer <user_token>
```



## ⚙️ Deployment Notes

* Use Vercel/Netlify
* Set environment variables like `VITE_USER_API` and `VITE_RAZORPAY_KEY`

---

## 🛡️ Security Notes

* Always validate JWT tokens on each request
* Show only authenticated data
* Mask sensitive user data in responses

---

## 📞 Contact

* GitHub: [@TarunPal0812](https://github.com/TarunPal0812)
* Email: [support@docappoint.com](mailto:tarunpal0812@gmail.com)

---

