// Safe environment variable access
export const env = {
  VITE_API_URL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  VITE_APP_TITLE: import.meta.env.VITE_APP_TITLE || 'Skyline Innovation',
  VITE_APP_VERSION: import.meta.env.VITE_APP_VERSION || '1.0.0',
  IS_DEV: import.meta.env.DEV || process.env.NODE_ENV === 'development',
  IS_PROD: import.meta.env.PROD || process.env.NODE_ENV === 'production',
}

// Use like: env.VITE_API_URL