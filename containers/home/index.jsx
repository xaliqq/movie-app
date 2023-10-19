import { Categories } from "@/components/categories";
import { FeaturedMovie } from "@/components/featured-movie";
import { MoviesSection } from "@/components/movies-section";

const HomeContainer = ({
  ratedMovies = [],
  popularMovies = [],
  categories = [],
  selectedCategory,
}) => {
  return (
    <div>
      <FeaturedMovie movie={ratedMovies?.[0]} />
      <Categories categories={categories.slice(5, 10)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            categories.find((genre) => genre.id == selectedCategory.id)?.name
          }
          movies={selectedCategory.movies}
        />
      )}

      <MoviesSection title="Popular Films" movies={ratedMovies.slice(0, 7)} />
      <MoviesSection
        title="Your Favorites"
        movies={popularMovies.slice(0, 7)}
      />
    </div>
  );
};

export default HomeContainer;
