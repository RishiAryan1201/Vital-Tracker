# Vital-Tracker

Vital-Tracker is a comprehensive fitness tracking application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The application allows users to track their fitness activities, set goals, and monitor their progress over time.

## Features

- User authentication and authorization
- Track various fitness activities
- Set and monitor fitness goals
- View progress over time with graphs and charts
- Responsive design for mobile and desktop users

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/vital-tracker.git
   cd vital-tracker
   ```

2. Install the necessary packages for both the client and server:

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Create a `.env` file in the `server` directory and add your environment variables. For example:

   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/vitaltracker
   JWT_SECRET=your_jwt_secret
   ```

4. Start the MongoDB server if it's not already running:

   ```bash
   mongod
   ```

## Usage

1. Start the server:

   ```bash
   cd server
   npm start
   ```

2. Start the client:

   ```bash
   cd client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
