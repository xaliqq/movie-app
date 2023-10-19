const API_URL = "https://api.themoviedb.org/3";

export const fetchMovieApi = async (path, query = "") => {
  try {
    const res = await fetch(
      `${API_URL}${path}?api_key=${process.env.API_KEY}&${query}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getRatedMovies = async () => {
  return fetchMovieApi("/movie/top_rated");
};

export const getPopularMovies = async () => {
  return fetchMovieApi("/movie/popular");
};

export const getCategories = async () => {
  return fetchMovieApi("/genre/movie/list");
};
export const getSelectedCategory = async (id) => {
  return fetchMovieApi("/discover/movie", `with_genres=${id}`);
};

export const getMovieDetail = async (id) => {
  return fetchMovieApi(`/movie/${id}`);
};
