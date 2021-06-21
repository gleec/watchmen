import MovieDetail from '../../components/Movie/MovieDetail';
import getMovieDetail from '@/lib/api/services/getMovieDetail';

const Movie = ({ detail }) => {
  return <MovieDetail detail={detail} />;
};

export async function getServerSideProps(context) {
  const id = context.params.id;
  const detail = await getMovieDetail(id);

  return {
    props: {
      detail
    }
  };
}

export default Movie;
