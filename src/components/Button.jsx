import React, {Component} from "react";

export class ButtonSelect extends Component {
    render() {
        return(
            
            <div className='flex justify-center p-4'>
                <button class="bg-teal-500 text-white active:bg-teal-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150  " type="button">
                Tambah Favorite</button>
            </div>
         
        )
    }
}

export default ButtonSelect ;