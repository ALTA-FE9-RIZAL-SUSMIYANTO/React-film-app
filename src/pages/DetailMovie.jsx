import React, { Component } from 'react'
import axios  from "axios";
import Container from "../components/Layout"
import Loading from '../components/Loading'
import { WithRouter } from '../utils/Navigation'


 class DetailMovie extends Component {

  state ={
    data: {},
    Loading: true
  }
 
   
      componentDidMount (){
        this.fetchData();
      }


      fetchData() {
        const{id_movie} = this.props.params
        axios
          .get(`https://api.themoviedb.org/3/movie/${id_movie}?api_key=${process.env.REACT_APP_TMBD_KEY}`)
        .then((res) => {
           const {data} =res;
          this.setState({data})
       
      })
      .catch((err) => {
        alert(err.toString())
      })
      .finally(() => {this.setState({loading: false})})
      }


      render() {
        return (
        <Container>
          <div >
          <div className='flex justify-center p-20 font-bold text-4xl'>
            Details
          </div>
            <div class="flex justify-center p-20">
                <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-green-600 shadow-lg h-96 ">
                  <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={`https://image.tmdb.org/t/p/w500${this.state.data?.poster_path}`} alt={this.props.title} />
                  <div class="p-6 flex flex-col justify-center">
                    <h5 class="text-black text-xl font-medium mb-2">{this.state.data.title}</h5>
                    <p class="text-white text-base mb-4">
                      {this.state.data.overview}
                    </p>
                    <p class="text-black text-xs">Pupularity : {this.state.data.popularity}</p>
                  </div>
                </div>
              </div>
        </div>
          




         
        </Container> 
        )
      }
}

export default WithRouter (DetailMovie);


//  {/* <div className=' flex justify-center p-16'>
//             <div className='bg-zinc-500 max-w-sm rounded overflow-hidden shadow-lg border-black'>

            
//             <img src={`https://image.tmdb.org/t/p/w500${this.state.data?.poster_path}`} alt={this.props.title} />
//             </div>
//           </div> */}
      