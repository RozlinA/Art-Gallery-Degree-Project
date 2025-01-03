import { ArtworkImages } from "./ArtworkImages";

export interface Artwork {
  id: number;
  created_at: string;
  title: string;
  main_image: string;
  price?: string;
  category: string;
  size?: string;
  technique?: string;
  is_available: string;
  artwork_images?: ArtworkImages[];
}
