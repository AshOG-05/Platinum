import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const apiService = {
  // Health check
  healthCheck: () => api.get('/health'),

  // Contact form
  submitContact: (data: {
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
  }) => api.post('/contact', data),

  // Admission form
  submitAdmission: (data: {
    studentName: string;
    parentName: string;
    email: string;
    phone: string;
    grade: string;
    previousSchool?: string;
    address?: {
      street?: string;
      city?: string;
      state?: string;
      zipCode?: string;
    };
    emergencyContact?: {
      name?: string;
      phone?: string;
      relationship?: string;
    };
    medicalInfo?: {
      allergies?: string;
      medications?: string;
      specialNeeds?: string;
    };
    message?: string;
  }) => api.post('/admission', data),

  // News and announcements
  getNews: () => api.get('/news'),
  
  // Future endpoints for full MERN functionality
  // getStudents: () => api.get('/students'),
  // getTeachers: () => api.get('/teachers'),
  // getCourses: () => api.get('/courses'),
  // getEvents: () => api.get('/events'),
};

export default api;
