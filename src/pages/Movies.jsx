import React, { useState, useEffect, useCallback } from 'react';
import MovieList from 'components/MovieList/MovieList';
import Form from 'components/Form/Form';
import Loader from 'components/Loader/Loader';
import { fetchSearchByKeyword } from 'services/api';
import { useLocation, useNavigate } from 'react-router-dom';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMoviesText, setNoMoviesText] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryParamValue = queryParams.get('query');

 const navigate = useNavigate();

  const searchMovies = useCallback(
    queryMovie => {
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

      const newSearchParams = new URLSearchParams();
      newSearchParams.append('query', queryMovie);
      navigate({ search: newSearchParams.toString() });
    },
    [navigate]);

  useEffect(() => {
    if (queryParamValue) {
      searchMovies(queryParamValue);
    }
  }, [queryParamValue, searchMovies]);

  return (
    <main>
      <Form searchMovies={searchMovies} initialQuery={queryParamValue} />
      {loading && <Loader />}
      {noMoviesText && <p>Nothing found</p>}
      {searchFilms && <MovieList films={searchFilms} />}
    </main>
  );
};

export default Movies;
