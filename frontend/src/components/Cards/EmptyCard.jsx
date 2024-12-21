import React from "react";

function EmptyCard({ imgSrc, message }) {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <img src={imgSrc} width={"300px"} height={"300px"} alt="" className="" />

      <p className=" w-2/3 text-lg font-medium text-slate-700 text-center leading-7 mt-5">
        {message}
      </p>
    </div>
  );
}

export default EmptyCard;
