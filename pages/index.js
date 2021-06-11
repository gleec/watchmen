import Hero from '../components/Hero';
import Header from '../components/Header';
import ListOfMovieCards from '../components/ListOfMovieCards';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ListOfMovieCards title="Title Section 1" />
      <ListOfMovieCards title="Title Section 2" />
      <ListOfMovieCards title="Title Section 3" />
      <ListOfMovieCards title="Title Section 4" />
    </div>
  );
}
