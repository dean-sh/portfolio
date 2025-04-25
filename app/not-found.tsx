'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-accent">404</h1>
          <h2 className="text-3xl font-semibold text-primary mt-4">Page Not Found</h2>
          <p className="text-secondary mt-4 mb-8">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <Link 
            href="/"
            className="btn btn-primary"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 