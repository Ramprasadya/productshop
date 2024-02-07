import React from "react";
const Footer = () => {
  return (
    <>
      <div className="bg-black">
        <div className="flex p-[50px] justify-around  ">
          <div className="flex flex-col text-white gap-[20px]">
            <h1 className="text-[20px] font-extrabold ">RAMPRASAD YADAV</h1>
          </div>
        </div>
        <hr className="text-gray-500 mx-[10%]  " />
        <div className="text-white h-[4rem] ">
          <p className="text-center my-[30px] ">
            &#169;Copyright 2024. Made by Ramprasad yadav
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
