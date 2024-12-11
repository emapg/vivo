import { create } from 'zustand';
import type { Video, Comment } from '../types';

interface VideoState {
  videos: Video[];
  currentVideoIndex: number;
  setCurrentVideoIndex: (index: number) => void;
  likeVideo: (videoId: string) => void;
  addComment: (videoId: string, comment: Comment) => void;
  shareVideo: (videoId: string) => void;
  isLoading: boolean;
  hasMore: boolean;
  fetchMoreVideos: () => Promise<void>;
}

export const useVideoStore = create<VideoState>((set, get) => ({
  videos: [],
  currentVideoIndex: 0,
  isLoading: false,
  hasMore: true,

  setCurrentVideoIndex: (index) => set({ currentVideoIndex: index }),
  
  likeVideo: (videoId) =>
    set((state) => ({
      videos: state.videos.map((video) =>
        video.id === videoId
          ? { ...video, likes: video.likes + 1 }
          : video
      ),
    })),

  addComment: (videoId, comment) =>
    set((state) => ({
      videos: state.videos.map((video) =>
        video.id === videoId
          ? { ...video, comments: [comment, ...video.comments] }
          : video
      ),
    })),

  shareVideo: (videoId) =>
    set((state) => ({
      videos: state.videos.map((video) =>
        video.id === videoId
          ? { ...video, shares: video.shares + 1 }
          : video
      ),
    })),

  fetchMoreVideos: async () => {
    if (get().isLoading || !get().hasMore) return;

    set({ isLoading: true });
    try {
      // Simulated API call
      const newVideos = await new Promise<Video[]>((resolve) => 
        setTimeout(() => resolve([]), 1000)
      );
      
      set((state) => ({
        videos: [...state.videos, ...newVideos],
        hasMore: newVideos.length > 0,
        isLoading: false,
      }));
    } catch (error) {
      set({ isLoading: false });
      console.error('Failed to fetch videos:', error);
    }
  },
}));