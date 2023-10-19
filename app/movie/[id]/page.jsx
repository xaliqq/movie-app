import MovieContainer from "@/containers/movie";
import { getMovieDetail } from "@/services/movie";
import { notFound } from "next/navigation";

const Movie = async ({ params, searchParams }) => {
  const movie = await getMovieDetail(params.id);
  if (!movie) {
    notFound();
  }
  if (searchParams.error == "true") {
    throw new Error("Test");
  }
  return <MovieContainer movie={movie} />;
};

export default Movie;
