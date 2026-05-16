# DocAppoint - Patient Portal

The **Patient Portal** is a sleek, modern React application serving as the primary interface for users to book and manage doctor appointments, manage their health profiles, and process online payments securely.

---

## Tech Stack

- **Framework:** React.js + Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **State Management:** React Context API (AppContext)
- **API Communication:** Axios
- **Payments:** Razorpay Checkout Integration
- **Notifications:** React Toastify

---

## Setup & Installation

### 1. Clone & Install Dependencies
```bash
cd frontend
npm install
```

### 2. Environment Configuration
Create a `.env` file in the root of the `frontend` directory:

```env
# Point to your local backend (http://localhost:3001) for development
# Or use the production URL:
VITE_BACKEND_URL=https://docappoint-server-eyak.onrender.com

# Razorpay Public Key
KEY_ID="rzp_test_uzoprBwiQG6EL5"
```

### 3. Start the Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

---

## Key Features

- **Secure Authentication:** JWT-based login and registration system.
- **Dynamic Doctor Directory:** Browse doctors, filter by specialization (General Physician, Gynecologist, Dermatologist, etc.).
- **Real-time Scheduling:** View doctor availability and book specific time slots.
- **Integrated Payments:** Seamless Razorpay integration for paying appointment fees.
- **Profile Management:** Update personal details and upload profile pictures.
- **Appointment Dashboard:** Track upcoming, completed, and cancelled appointments.

---

## Live Deployment

The frontend is configured to communicate with the production API deployed at:
https://docappoint-server-eyak.onrender.com

---

## License
MIT License
