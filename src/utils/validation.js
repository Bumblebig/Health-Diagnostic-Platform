export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Invalid email address';
    }
    return '';
  };
  
  export const validatePassword = (password) => {
    if (password.length < 6) {
      return 'Password must be at least 6 characters';
    }
    return '';
  };
  