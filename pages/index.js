import Hero from '../components/Hero';
import Header from '../components/Header';
import ListOfMovieCards from '../components/ListOfMovieCards';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ListOfMovieCards title="Now Playing" endpoint="/movie/now_playing" />
      <ListOfMovieCards title="Popular" endpoint="/movie/popular" />
    </div>
  );
}
