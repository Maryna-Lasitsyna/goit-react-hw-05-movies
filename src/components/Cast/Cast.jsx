import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { List, Text } from './Cast.styled';
import { fetchActors } from 'services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const onActors = () => {
      setLoading(true);

      fetchActors(movieId)
        .then(actors => {
          setActors(actors);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    onActors();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}

      <List>
        {actors.map(({ id, name, profile_path, character }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/0/0e/No_image.jpg`
              }
              alt=""
            />
            <Text>{name}</Text>
            <Text>Character: {character}</Text>
          </li>
        ))}
      </List>
    </div>
  );
};

export default Cast;
