import React from 'react'

const PageTitle = ({title,subTitle}) => {
  return (
    <>
      <div className=" flex flex-col justify-start gap-3 w-1/2">
        <p className=" text-secondary text-2xl uppercase font-bold">{title}</p>
        <h1 className=" text-4xl text-white">{subTitle} </h1>
      </div>
    </>
  );
}

export default PageTitle