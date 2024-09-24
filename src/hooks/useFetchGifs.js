import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  // Si las dependencias son vacias [], significa que solo se dispara una sóla vez
  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
