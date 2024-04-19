import React from 'react'

const Button = ({title}) => {
  return (
    // <button className="group relative h-12 w-48 overflow-hidden rounded-full bg-secondary text-lg font-bold text-white">
    //   {title}
    //   <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-white/20"></div>
    // </button>
    <button class="group relative h-12 w-40 overflow-hidden rounded-lg bg-secondary text-lg shadow">
      <div class="absolute inset-0 w-1 bg-white transition-all duration-300 ease-out group-hover:w-full"></div>
      <span class="relative text-white group-hover:text-primary"> {title} </span>
    </button>
  );
}

export default Button