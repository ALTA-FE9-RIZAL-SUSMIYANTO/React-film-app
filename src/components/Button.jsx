import React, {Component} from "react";


export class ButtonSelect extends Component {
    render() {
      return (
        <button
          className="p-3 bg border rounded-md bg-green-600 text-black text-center font-bold cursor-pointer"
          onClick={this.props.onClick}
        >
          {this.props.label}
        </button>
      );
    }
  }
export default ButtonSelect;