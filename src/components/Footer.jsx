// Footer.js
import React from 'react';

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get current year

  return (
    <footer className="w-full text-center py-4">
      <p>
        &copy; {currentYear} Jashan Pratap Singh
      </p>
    </footer>
  );
};

export default Footer;
