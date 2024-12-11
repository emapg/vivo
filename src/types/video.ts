export interface Video {
  id: string;
  url: string;
  thumbnail: string;
  title: string;
  description: string;
  creator: {
    id: string;
    username: string;
    avatar: string;
  };
  likes: number;
  comments: number;
  shares: number;
  effects: Effect[];
}

export interface Effect {
  id: string;
  type: '3d-filter' | 'animation' | 'transition';
  parameters: Record<string, unknown>;
}