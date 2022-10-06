import React, { Component } from 'react'
import ButtonSelect from './Button'




// kalao bisa reusable component hanya menampilkan kumoulan elemet yang mana 
// datanya yang di ambil / di umpan dari parent , jangan menggunakan fungsi disini, 
class Card extends Component {
  render() {
    return (
      <div className=" bg-stone-300 max-w-sm rounded overflow-hidden shadow-lg border-black">
                <img className="pr-3 px-3 pt-3 " src={`https://image.tmdb.org/t/p/w500${this.props.image}`} alt={this.props.title} />
                <p className="text-center pt-2 text-lg font-bold "> {this.props.title}</p>
                <ButtonSelect label="Tambah Favorite"/>
      </div>
    )
  }
}

export default Card;