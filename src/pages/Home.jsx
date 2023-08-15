import React, { useEffect, useState } from 'react';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
import { fetchTrendingMovies } from 'services/api';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    const fetchTrendingFilms = () => {
      setLoading(true);

      fetchTrendingMovies()
        .then(trendingFilms => {
          setFilms(trendingFilms);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchTrendingFilms();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList films={films} />
      {loading && <Loader />}
    </main>
  );
};

export default Home;
