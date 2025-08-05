import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/platinum_academy';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running!', timestamp: new Date().toISOString() });
});

// Contact form route
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Here you would typically save to database
  console.log('Contact form submission:', { name, email, message });
  
  res.json({ 
    success: true, 
    message: 'Thank you for your message! We will get back to you soon.' 
  });
});

// Admission form route
app.post('/api/admission', (req, res) => {
  const { studentName, parentName, email, phone, grade, message } = req.body;
  
  // Here you would typically save to database
  console.log('Admission form submission:', { studentName, parentName, email, phone, grade, message });
  
  res.json({ 
    success: true, 
    message: 'Thank you for your admission inquiry! We will contact you soon.' 
  });
});

// News/announcements route
app.get('/api/news', (req, res) => {
  // Mock news data - replace with database query
  const news = [
    {
      id: 1,
      title: "New Academic Year 2025 Registration Open",
      excerpt: "Registration for the 2025 academic year is now open. Apply early to secure your spot.",
      date: "2025-01-15",
      category: "Admissions"
    },
    {
      id: 2,
      title: "Science Fair Winners Announced",
      excerpt: "Congratulations to all participants in our annual science fair. See the winning projects.",
      date: "2025-01-10",
      category: "Academics"
    },
    {
      id: 3,
      title: "New Sports Facilities Completed",
      excerpt: "Our new state-of-the-art sports complex is now open for student activities.",
      date: "2025-01-05",
      category: "Facilities"
    }
  ];
  
  res.json(news);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
