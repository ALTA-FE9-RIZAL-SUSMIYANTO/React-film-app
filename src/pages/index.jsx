/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import "styles/App.css";

import { setFavorites } from "utils/redux/reducers/reducer";
import { WithRouter } from "utils/Navigation";

import { ButtonPrimary } from "components/Button";
import Container from "components/Layout";
import Loading from "components/Loading";
import Card from "components/Card";

function App(props) {
  // ---=== CONSTRUCTOR START ===---
  const dispatch = useDispatch();
  // const [state, setState] = useState(initialState)
  const [datas, setDatas] = useState([]);
  const [skeleton] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  // ---=== CONSTRUCTOR END ===---

  useEffect(() => {
    fetchData();
  }, []);

  /*
  Ketika ada perubahan state pada saat useEffect berjalan, maka terjadi sebuah re-render component

  mirip dengan componentDidMount, artinya dia hanya dipanggil sekali setelah component dimuat/render (menambahkan empty scope)
  useEffect(() => {
    // ...
  }, [])

  tanpa penulisan scope ([]), dia bakal dipanggil selalu atau jalan terus
  useEffect(() => {
    // ...
  })

  seperti componentDidMount + componentDidUpdate, dijalankan sekali pada saat component sudah dimuat, lalu dia akan jalan kembali ketika ada perubahan nilai dari suatu state
  useEffect(() => {
    // ...
  }, [state1, state2, state3])

  mirip componentDidUpdate + componentDidMount + componentWillUnmount, dia bakal dijalankan setiap waktu (mirip dengan penulisan useEffect tanpa scope), namun dia bakal unsubscribe ketika kita meninggalkan halaman agar performa dari web terjaga, implementasinya seperti OTP (ada perhitungan mundur yang dijalankan setiap detik), status online
  useEffect(() => {
    // ...
    return () => {
      // ...
    }
  })
  */

  function fetchData() {
    // axios.get(URL, config)
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}`
      )
      .then((res) => {
        const { results } = res.data; // destructuring
        // const results = res.data.results;
        const newPage = page + 1;
        const temp = [...datas]; // spread operator
        temp.push(...results); // spread operator
        setDatas(temp);
        setPage(newPage);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function fetchPopular() {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}`
    )
      .then((response) => response.json())
      .then((res) => {
        const { results } = res; // destructuring
        // const results = res.data.results;
        const newPage = page + 1;
        const temp = [...datas]; // spread operator
        temp.push(...results); // spread operator
        setDatas(temp);
        setPage(newPage);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleFav(movie) {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      const parsedMovies = JSON.parse(getMovies);
      /*
      cek film yang diinputkan ada di local storage atau tidak (saran menggunakan method .find)
      if movie.id === data.id

      - kalau gak ada, push ke parsedMovies
      - kalau ada, kasih alert (film sudah ditambahkan sebelumnya)
      */
      parsedMovies.push(movie);
      const temp = JSON.stringify(parsedMovies);
      dispatch(setFavorites(parsedMovies));
      localStorage.setItem("favMovies", temp);
    } else {
      const temp = JSON.stringify([movie]);
      dispatch(setFavorites([movie]));
      localStorage.setItem("favMovies", temp);
    }
    alert("Added to favorite");
  }

  return (
    <>
      {/* Fragment */}
      <Container>
        <div className="w-full flex flex-col">
          <h1 className="flex justify-center font-bold text-2xl p-3">
            List Movie
          </h1>
          <div className="pt-6 px-52 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {loading
              ? skeleton.map(
                  (item) => <Loading key={item} /> // Self Closing tag
                )
              : datas.map((data) => (
                  <Card
                    key={data.id}
                    image={data.poster_path}
                    title={data.title}
                    onNavigate={() => props.navigate(`/detail/${data.id}`)}
                    addFavorite={() => handleFav(data)}
                  /> // <~ Self closing tag
                ))}
          </div>
          <ButtonPrimary label="Load More" onClick={() => fetchData()} />
        </div>
      </Container>
    </>
  );
}

export default WithRouter(App);
