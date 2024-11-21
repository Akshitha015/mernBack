const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://shivanimoparthi:ShIvAnI1234@inotebook.gt2zu.mongodb.net/?retryWrites=true&w=majority&appName=inotebook";

// Function to connect to MongoDB
const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully!");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
  }
};

module.exports = connectToMongo; // Export the function
