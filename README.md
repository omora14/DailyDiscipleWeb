# Daily Disciple Web

![Daily Disciple Logo](public/img/svg/logo.svg)

Daily Disciple is a web application designed to help users set spiritual and personal goals, create structured plans, and stay consistent with daily progress. The app integrates to-do lists, messaging, and calendar support to guide users toward meaningful growth.

> **Note:** This project is currently under development. We're working on finalizing the product and aim to have a fully functional version by the end of the year.

---

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [Contact](#contact)

---

## Features

- **Goal Setting:** Easily create personal and spiritual goals.
- **Task Management:** Add tasks and track your daily progress.
- **Calendar Integration:** Plan your days with a built-in calendar view.
- **Contact Form:** Reach out to the team directly from the app.
- **Multi-language Support:** Supports English and Spanish with i18n.
- **Notifications:** Receive clear and user-friendly messages for actions like form submissions.

---

## Demo

Currently, the app is in development. Once deployed, you’ll be able to access it online. For now, you can run it locally.

---

## Tech Stack

- **Frontend:** React, TypeScript, Ant Design, Styled Components
- **Backend:** Node.js, Express, Nodemailer
- **Internationalization:** i18next
- **State Management:** React Hooks (`useState`, `useForm` custom hook)
- **Notifications:** Ant Design notification system
- **Deployment (planned):** Render, GitHub Pages or similar

---

## Getting Started

Follow these steps to run the project locally:

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/omora14/DailyDiscipleWeb.git
```

## Folder Structure

│
├─ public/ # Static assets (images, fonts, icons)
├─ server/ # Express backend server
│ └─ server.ts
├─ src/ # React frontend
│ ├─ components/ # Reusable UI components
│ ├─ common/ # Shared components, hooks, utils
│ ├─ content/ # JSON content for app sections
│ ├─ locales/ # Translation files
│ ├─ pages/ # React pages
│ └─ router/ # Routing configuration
├─ package.json
├─ tsconfig.json
└─ README.md
