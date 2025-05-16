export interface Author {
    name: string;
    avatar: string;
  }
  
  export interface Story {
    id: string;
    title: string;
    category: string;
    imageUrl: string;
    excerpt: string;
    date: string;
    author: Author;
    content: string;
  }
  
  export interface Category {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
  }
  
  export interface Podcast {
    id: string;
    title: string;
    artist: string;
    imageUrl: string;
    duration: string;
    description: string;
  }