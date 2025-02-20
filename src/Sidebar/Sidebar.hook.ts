import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAnimeListStore } from "../store/AnimeList";

const useSideForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const rating = watch("rating");
  const { fetchAnime, setAnimeList, setFetchAnimeList } = useAnimeListStore();
  useEffect(() => {
    const data = fetchAnime.data.filter((item) =>
      item.rating.toLowerCase().includes(rating?.toLowerCase())
    );
    console.log("data", data);
    setAnimeList({ data: data, loading: false, error: null });
  }, [rating]);
  return {
    fieldRating: register("rating"),
  };
};

export { useSideForm };
