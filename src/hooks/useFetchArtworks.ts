import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import { Artwork } from "../models/Artwork";

export const useFetchArtworks = (category?: string) => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [fetchError, setFetchError] = useState<string>("");

  useEffect(() => {
    const fetchArtworks = async () => {
      if (!category) return;
      setArtworks([]);
      setFetchError("");

      try {
        const { data, error } = await supabase
          .from("artworks")
          .select()
          .eq("category", category || null);

        if (error) {
          setFetchError("Kunde inte hämta konstverk");
        } else {
          setArtworks(data || []);
        }
      } catch {
        setFetchError("Ett oväntat fel inträffade");
      }
    };

    fetchArtworks();
  }, [category]);

  return { artworks, fetchError };
};
