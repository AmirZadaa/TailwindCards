import React from "react";
import combo from "../assets/combo.png"


export default function KfcCard() {
  return (
    <div className="bg-black min-h-screen flex items-center">
    <section className=' flex-col mx-auto w-80 items-center px-5 rounded-xl  bg-[#1c1816] relative'>
      <div className="flex gap-2 justify-center">
        <span className="  w-6 h-8 bg-red-600"></span>
        <span className="  w-6 h-8 bg-red-600"> </span>
        <span className="  w-6 h-8 bg-red-600"> </span>
      </div>
      <span className="absolute right-2 top-2"><i className="fa-regular fa-heart text-red-600 text-3xl hover:text-white"></i></span>
      <div  className="  overflow-hidden ">
         <img src={combo} alt="hello" height={220} width="auto" className="hover:scale-110 duration-75" />
      </div>
      <div className="flex flex-col gap-2 text-white">
        <h1 className="font-bold text-2xl mt-5">Zinger Stacker Combo</h1>
        <p className="text-md text-slate-50">1 Zinger Stacker + 1 Regular fries + 1 Regular drink</p>
        <h3 className="font-extrabold">Rs 920</h3>
      </div>
      <button className="py-2 px-4 font-extrabold text-white bg-red-600 rounded-md relative -bottom-4 left-14 hover:bg-slate-100 border border-red-600 hover:border-red-600  hover:text-red-600  hover:-bottom-3 duration-150 " >+ Add to bucket</button>
    </section>
    </div>
  );
}
