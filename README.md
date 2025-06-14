# DocAppoint - Doctor Appointment Management Frontend

DocAppoint is a modern, responsive web application for booking appointments with trusted doctors. This frontend project is built with React, Tailwind CSS, and Vite, providing a seamless and user-friendly experience for patients to browse doctors by speciality, view doctor profiles, and manage appointments.

---

## Features

- **Home Page:** Attractive landing page with call-to-action and featured doctors.
- **Doctor Directory:** Browse all doctors or filter by speciality.
- **Doctor Profiles:** View detailed information about each doctor, including experience, speciality, and availability.
- **Appointment Booking:** Select available slots and book appointments.
- **User Authentication:** Sign up and log in to manage appointments and profile.
- **My Appointments:** View and manage your upcoming appointments.
- **My Profile:** View and edit your personal information.
- **Responsive Design:** Fully responsive for mobile, tablet, and desktop.
- **Modern UI:** Built with Tailwind CSS for a clean and modern look.

---

## Tech Stack

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)

---

## Project Structure

```
frontend/
├── public/
│   └── _redirects
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## Getting Started

### Prerequisites

- Node.js (v16 or above)
- npm or yarn

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/doctor-management-system.git
    cd doctor-management-system/frontend
    ```
2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```
3. Start the development server:
    ```sh
    npm run dev
    # or
    yarn dev
    ```
4. Open [https://docappoint-client.netlify.app/](https://docappoint-client.netlify.app/) in your browser.

### Build for Production

```sh
npm run build
# or
yarn build
```

### Preview Production Build

```sh
npm run preview
# or
yarn preview
```

---

## Deployment

This project is ready for deployment on platforms like Netlify.  
For client-side routing support, a `_redirects` file is included in the `public` folder:

```
/*    /index.html   200
```

Set the build command to `npm run build` and the publish directory to `dist`.

---

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Lint the codebase

---

## Customization

- **Doctor Data:** Doctor and speciality data are located in `src/assets/assets_frontend/assets.js`.
- **Styling:** Tailwind CSS configuration is in `tailwind.config.js`.
- **Routing:** All routes are defined in `src/App.jsx`.

---

## Folder Overview

- **`src/components/`**: Reusable UI components (Navbar, Footer, Header, etc.)
- **`src/pages/`**: Main pages (Home, Doctors, Login, About, Contact, MyProfile, MyAppointments, Appointments)
- **`src/context/`**: React context for global state management
- **`src/assets/`**: Images and static assets

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

---

## License

This project is licensed under the MIT License.

---

**DocAppoint** - Book appointments with trusted doctors, anytime, anywhere.