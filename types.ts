
// Fix: Import React to resolve 'Cannot find namespace React' error when using React.ReactNode
import React from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  features: string[];
}

export interface Niche {
  id: string;
  name: string;
  image: string;
  iconColor: string;
  icon: React.ReactNode;
}

export type Category = 'Web Gratis' | 'Marketing' | 'Gestión' | 'Automatización';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
