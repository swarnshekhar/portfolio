import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import Contact from './models/Contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
// app.use(cors({
//   origin: ['http://localhost:5173', 'https://swarnshekhar.github.io/portfolio'], // Your frontend URLs
//   methods: ['POST', 'OPTIONS'], // Allow POST and OPTIONS methods
// }));

app.use(cors({
  origin: ['http://localhost:5173','https://swarnshekhar.github.io', 'https://swarnshekhar.github.io/portfolio'], // Your frontend URLs
  methods: ['POST', 'OPTIONS'], // Allow specific methods
}));



app.use((req, res, next) => {
  console.log(`Received ${req.method} request for ${req.url} from ${req.headers.origin}`);
  next();
});



// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Handle preflight requests
app.options('/api/contact', cors());

// POST endpoint to handle contact form submissions
app.post('/api/contact', async (req, res) => {
  console.log('Received request body:', req.body); // Log the incoming data
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact information saved successfully!' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Failed to save contact.', error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});




//mongoose is an odm(object data modeling) for mongodb and nodejs

//node js is an open source javascript runtime environment that allows u to execute javascript code to server side 
//node js was build on google v8 engine that convert javascript code to machine language