import React, { useState, useEffect } from "react";

import { WithRouter } from "utils/Navigation";
import { useTitle } from "utils/hooks/useTitle";
import { useFetchGet } from "utils/hooks/useFetchGet";

import Container from "components/Layout";

const DetailMovie = (props) => {
  const { id_movie } = props.params;
  const [data] = useFetchGet(
    `https://api.themoviedb.org/3/movie/${id_movie}?api_key=${process.env.REACT_APP_TMDB_KEY}&append_to_response=videos`
  );
  const [videos, setVideos] = useState([]);
  useTitle(data.title);

  useEffect(() => {
    data.videos !== undefined && setVideos(data.videos.results);
  }, [data]);

  return (
    <Container>
      <img
        src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
        alt={props.title}
      />
      <p>{data?.title}</p>
      <p>{data?.overview}</p>
      <div>
        {videos.map((video) => (
          <iframe
            id={video.id}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.key}`}
            title={video.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ))}
      </div>
    </Container>
  );
};

export default WithRouter(DetailMovie);
