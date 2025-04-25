'use client';

import React, { ReactNode } from 'react';
import Navbar from '@/components/Navbar';

interface ProjectLayoutProps {
  children: ReactNode;
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
} 