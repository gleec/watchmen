import React, { useState } from 'react';
import Header from '../../Header';
import Hero from '../Hero';
import OverViewMovie from '../OverViewMovie';
import Details from '../Details';
import ListOfMovieCastCards from '../ListOfMovieCastCards';
import ListOfMovieCards from '../ListOfMovieCards';
import { getRecommendations } from '@/lib/api/services/getMovies';

const MovieDetail = ({ detail }) => {
  console.log(detail);
  //const [movieDetail, setMovieDetail] = useState(null);
  const getter = () => getRecommendations(detail.id);

  return (
    <>
      <Header />
      <Hero
        producer={detail.production_companies[0].name}
        movieName={detail.original_title}
        movieGenres={detail.genres}
        movieRatting={detail.vote_average}
        backdropPath={detail.backdrop_path}
      />
      <OverViewMovie description={detail.overview} />
      <Details
        homepage={detail.homepage}
        releaseDate={detail.release_date}
        originalTitle={detail.original_title}
        budget={detail.budget}
        revenue={detail.revenue}
        productionCo={detail.production_companies}
        country={detail.production_countries}
        language={detail.spoken_languages}
      />
      <ListOfMovieCastCards id={detail.id} />
      <ListOfMovieCards title="RECOMMENDATIONS" getter={getter} />;
    </>
  );
};

export default MovieDetail;
