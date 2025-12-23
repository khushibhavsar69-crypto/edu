
import React from 'react';

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Destination {
  country: string;
  image: string;
  universities: number;
  visaSuccess: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
  // Added React namespace via import to fix line 18/19 errors
  icon: React.ReactNode;
}

export interface Service {
  title: string;
  description: string;
  // Added React namespace via import to fix line 24/25 errors
  icon: React.ReactNode;
}