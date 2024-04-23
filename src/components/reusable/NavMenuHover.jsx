import React from "react";

const NavMenuHover = () => {
  return (
    <span
      className={`hover:before:bg-redborder-secondary relative h-1 w-10 overflow-hidden px-2 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-secondary before:transition-all before:duration-500 group-hover:shadow-secondary group-hover:before:left-0 group-hover:before:w-full `}
    ></span>
  );
};

export default NavMenuHover;
