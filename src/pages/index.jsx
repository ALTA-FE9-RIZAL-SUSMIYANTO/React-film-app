import React, { Component } from 'react'
import "../style/App.css"
import Container from "../components/Layout"
import ButtonSelect from '../components/Button';
import { faker } from "@faker-js/faker";
import Loading from '../components/Loading';



class App extends Component {
  // ========= CONSTUCTOR  Start==========
    state = {
        title: "Welcome",
        datas: [],
        skeleton: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        loading: true,
    }
    // ========= CONSTUCTOR End ==========
  componentDidMount () {
    this.fecthData() ;
  }


  fecthData () {
    // Loading
    this.setState({loading: true});
    // mapping card
  let dataTemp = []
   for (let i = 0; i < 10; i++) {
    const temp = {
      id : i + 1,
      title : faker.name.fullName(),
      image: "https://images.unsplash.com/photo-1524481905007-ea072534b820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    }
    dataTemp.push(temp)
   }
   this.setState({datas: dataTemp})
   setTimeout(() =>  {
    this.setState({ loading: false});
   },3000)

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
              <div className=" bg-stone-300 max-w-sm rounded overflow-hidden shadow-lg border-black"
              
              key={data.id}>
                <img className="pr-3 px-3 pt-3 " src={data.image} alt={data.title} />
                <p className="text-center pt-2 text-lg "> {data.title}</p>
                <ButtonSelect />
              </div>
            ))}
              {}
              </div>
            </div>
            
        </Container>
        

    )
  }
}


export default App;