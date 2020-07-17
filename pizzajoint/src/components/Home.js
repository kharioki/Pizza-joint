import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="home container">
      <motion.h2 animate={{ fontSize: 50 }}>Welcome to Pizza Joint</motion.h2>
      <Link to="/base">
        <button>Create Your Pizza</button>
      </Link>
    </div>
  );
};

export default Home;
