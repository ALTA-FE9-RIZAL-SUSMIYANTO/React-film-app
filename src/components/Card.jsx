import React from "react";

import { ButtonPrimary, ButtonSecondary } from "./Button";

/*
Kalau bisa reusable component hanya menampilkan kumpulan element yang mana datanya diambil/diumpan dari parent, jadi jangan taruh sebuah proses didalam reusable component
*/
function Card(props) {
  return (
    <div className="bg-stone-300 max-w-sm rounded overflow-hidden shadow-lg border-black">
      <div onClick={props.onNavigate} className="  cursor-pointer ">
        <img
          className="pr-3 px-3 pt-3  "
          src={`https://image.tmdb.org/t/p/w500${props.image}`}
          alt={props.title}
        />
        <p className="text-center pt-2 text-lg font-bold "> {props.title}</p>
      </div>

      <ButtonSecondary label="Tambah Favorite" onClick={props.addFavorite} />
    </div>
  );
}

export default Card;
