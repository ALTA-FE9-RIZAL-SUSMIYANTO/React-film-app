import React, { Component } from 'react'
import "../style/App.css"
import Container from "../components/Layout"
import axios  from "axios";
import ButtonSelect from '../components/Button';
import { faker } from "@faker-js/faker";
import Loading from '../components/Loading';
import Card from "../components/Card";


class App extends Component {
  // ========= CONSTUCTOR  Start==========
    state = {
        title: "",
        datas: [],
        skeleton: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        loading: true,
    }
    // ========= CONSTUCTOR End ==========
  componentDidMount () {
    this.fetchData() ;
  }


  fetchData() {
    axios
    // mengambil api dari TMBD
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMBD_KEY}&page=${this.state.page}`
      )
      .then((res) => {
        const { results } = res.data; 
        // untuk nenambahkan  page 
        const newPage = this.state.page + 1;
        const temp = [...this.state.datas];
        temp.push(...results);
        this.setState({ datas: temp, page: newPage });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  


  render() {
    return (
        <Container>
            <div>
              <div className=" pt-6 px-52 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 " >
              {this.state.loading ? this.state.skeleton.map((item) => (
                <Loading key={item}/>
              )) 
            : this.state.datas.map((data) => (
              <Card
              key={data.id} image={data.poster_path} title={data.title} />
              
            ))}
              </div>
              <div>
              <button
        className="p-3 border rounded-lg bg-white text-black text-center font-bold cursor-pointer"
        onClick={this.props.onClick}
      > Load More
        {this.props.label}
      </button>

              </div>
            </div>
            
        </Container>
        

    );
  } 
}


export default App;