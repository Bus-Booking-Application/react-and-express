const express = require("express");
const connection = require("./config/connection");
const route = require("./route/routeIndex");
const logger = require("./config/logger");
const { successHandler, errorHandler } = require("./config/morgan");
const cors=require('cors')

const app = express();

// Initialize Database Connection
connection();

app.use(cors("*"))

app.use(express.json());

// Morgan Logging Middleware
app.use(successHandler);
app.use(errorHandler);

// API Routes
app.use("/v1", route);

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.log(err);
    
    res.locals.errorMessage = err.message; // Store error message for Morgan
    logger.error(err.message); // Log the error
    res.status(err.status || 500).json({ message: err.message });
});

const port = 7000;
app.listen(port, () => {
    logger.info(`Server is running on http://localhost:${port}`);
});
