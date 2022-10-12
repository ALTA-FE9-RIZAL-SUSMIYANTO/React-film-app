import { useNavigate, useParams } from "react-router-dom";
import React from "react";

/*
WithRouter disini adalah High Order Component (HOC), HOC merupakan sebuah komponen yang mana hirarki lebih tinggi daripada komponen biasa
*/
export const WithRouter = (Component) => {
  const Wrapper = (props) => {
    const params = useParams();
    const navigate = useNavigate();

    return <Component {...props} navigate={navigate} params={params} />;
  };

  return Wrapper;
};
