import { useState } from 'react';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import Form from 'components/Form/Form';
import { fetchSearchByKeyword } from 'services/api';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMoviesText, setNoMoviesText] = useState(false);

  const searchMovies = queryMovie => {
    setLoading(true);

    fetchSearchByKeyword(queryMovie)
      .then(searchResult => {
        setSearchFilms(searchResult);
        setNoMoviesText(searchResult.length === 0);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <main>
      <Form searchMovies={searchMovies} />
      {loading && <Loader />}
      {noMoviesText && (
        <p> Nothing found</p>)}
      {searchFilms && <MovieList films={searchFilms} />}
    </main>
  );
};

export default Movies;
