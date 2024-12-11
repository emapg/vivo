export interface User {
  id: string;
  username: string;
  avatar: string;
  followers: number;
  following: number;
  bio: string;
  verified: boolean;
}

export interface Comment {
  id: string;
  user: User;
  content: string;
  likes: number;
  timestamp: string;
  replies: Comment[];
}

export interface Video {
  id: string;
  url: string;
  thumbnail: string;
  title: string;
  description: string;
  creator: User;
  likes: number;
  comments: Comment[];
  shares: number;
  views: number;
  effects: Effect[];
  sound: Sound;
  hashtags: string[];
  duration: number;
}

export interface Effect {
  id: string;
  type: '3d-filter' | 'animation' | 'transition';
  parameters: Record<string, unknown>;
}

export interface Sound {
  id: string;
  name: string;
  artist: string;
  duration: number;
  url: string;
  usageCount: number;
}