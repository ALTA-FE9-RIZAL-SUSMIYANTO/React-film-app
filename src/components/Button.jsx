import React from "react";

function ButtonPrimary(props) {
  return (
    <div className="flex justify-center p-4 pt-4">
      <button
        class="bg-teal-500 text-white active:bg-teal-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150  "
        type="button"
        onClick={props.onClick}
      >
        {props.label}
      </button>
    </div>
  );
}

function ButtonSecondary(props) {
  return (
    <div className="flex justify-center p-4 pt-4">
      <button
        class="bg-neutral-500 text-white active:bg-teal-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150  "
        type="button"
        onClick={props.onClick}
      >
        {props.label}
      </button>
    </div>
  );
}
export { ButtonPrimary, ButtonSecondary };
