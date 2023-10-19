import HomeContainer from "@/containers/home";
import {
  getCategories,
  getPopularMovies,
  getRatedMovies,
  getSelectedCategory,
} from "@/services/movie";

export default async function Home({ params: { category } }) {
  const [
    { results: ratedMovies },
    { results: popularMovies },
    { genres: categories },
  ] = await Promise.all([
    getRatedMovies(),
    getPopularMovies(),
    getCategories(),
  ]);

  let selectedCategory = null;

  if (category?.length > 0) {
    const { results } = await getSelectedCategory(category[0]);
    selectedCategory = results;
  }

  return (
    <HomeContainer
      ratedMovies={ratedMovies}
      popularMovies={popularMovies}
      categories={categories}
      selectedCategory={{
        id: selectedCategory ? category[0] : 0,
        movies: selectedCategory ? selectedCategory.slice(0, 7) : [],
      }}
    />
  );
}
