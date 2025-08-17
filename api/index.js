// Vercel serverless function entry point
const app = require('../backend/app');

// Export the Express app as a Vercel serverless function
module.exports = app;

// Add this line for Vercel serverless functions
module.exports.default = app;