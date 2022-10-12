import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { WithRouter } from "utils/Navigation";
import { useTitle } from "utils/hooks/useTitle";

import Container from "components/Layout";
import Card from "components/Card";

function Favorites(props) {
  const favorites = useSelector((state) => state.data.favorites);
  const dispatch = useDispatch();
  useTitle("My Favorite Movies");

  function handleRemoveFav(id) {}

  return (
    <Container>
      <div className="flex justify-center font-bold text-2xl p-3">
        <div className=" pt-6 px-52 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {favorites.map((data) => (
            <Card
              key={data.id}
              image={data.poster_path}
              title={data.title}
              onNavigate={() => props.navigate(`/detail/${data.id}`)}
              removeFavorite={() => props.handleRemoveFav(data)}
            /> // <~ Self closing tag
          ))}
        </div>
      </div>
    </Container>
  );
}

export default WithRouter(Favorites);
