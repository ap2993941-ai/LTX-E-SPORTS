
import type { IconType } from 'react-icons';

export interface Feature {
  icon: IconType;
  title: string;
}

export interface Screenshot {
  id: number;
  src: string;
  alt: string;
}

export interface Review {
  id: number;
  name: string;
  username: string;
  comment: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}