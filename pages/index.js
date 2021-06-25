import Hero from '../components/Movie/Hero';
import Layout from '@/components/layout';
import ListOfMovieCards from '../components/Movie/ListOfMovieCards';
import {
  getNowPlayingMovies,
  getPopularMovies,
  getUpcomingMovies,
  getRandomMovie
} from '@/lib/api/services/getMovies';

export default function Home({ random }) {
  return (
    <div>
      <Layout>
        <Hero
          producer={random.production_companies[0].name}
          movieName={random.original_title}
          movieGenres={random.genres}
          movieRatting={random.vote_average}
          backdropPath={random.backdrop_path}
        />
        <ListOfMovieCards title="Now Playing" getter={getNowPlayingMovies} />
        <ListOfMovieCards title="Popular" getter={getPopularMovies} />
        <ListOfMovieCards title="Upcoming" getter={getUpcomingMovies} />
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context) {
  const random = await getRandomMovie();

  return {
    props: {
      random
    }
  };
}
