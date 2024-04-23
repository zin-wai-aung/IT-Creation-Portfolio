import React from 'react'

const Button = ({title}) => {
  return (
    <button className="text-red hover:before:bg-redborder-secondary relative h-[50px] w-40 overflow-hidden border border-secondary px-3 text-secondary shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-secondary before:transition-all before:duration-500 hover:text-white hover:shadow-secondary hover:before:left-0 hover:before:w-full">
      <span className="relative z-10">{title}</span>
    </button>
  );
}

export default Button