# Daily Disciple Web

Daily Disciple Web is a simple, interactive web app designed to help users set goals, create plans, and track daily progress. The app includes a contact form that allows users to send messages, with validation to ensure proper input. It combines a React frontend with a Node/Express backend for handling form submissions.

## Instructions for Build and Use

**Steps to build and/or run the software:**

1. Clone the repository:  
   `git clone https://github.com/omora14/DailyDiscipleWeb.git`
2. Install dependencies for both frontend and backend:  
   `npm install`
3. Start the backend server:  
   `npm run start:server`
4. Start the frontend:  
   `npm start`

**Instructions for using the software:**

1. Open the app in your browser at `http://localhost:3000` (or the deployed URL).
2. Navigate through the homepage to learn about Daily Disciple.
3. Use the Contact Form to send a message by entering your name, email, and message. Validation ensures emails are formatted correctly and messages are at least 5 words.
4. After submitting, a notification will confirm whether your message was successfully sent.

## Development Environment

To recreate the development environment, you need the following software and/or libraries with the specified versions:

- Node.js 18.x or later
- npm 9.x or later
- React 18.x
- TypeScript 5.x
- Ant Design 4.x
- Express 5.x
- Styled-components 5.x

## Useful Websites to Learn More

I found these websites useful in developing this software:

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Ant Design Docs](https://ant.design/docs/react/introduce)
- [Styled Components](https://styled-components.com/docs)

## Future Work

The following items I plan to fix, improve, and/or add to this project in the future:

- [ ] Deploy backend and frontend together on Render or another hosting service
- [ ] Improve form submission design and notifications
- [ ] Add user authentication and profiles
