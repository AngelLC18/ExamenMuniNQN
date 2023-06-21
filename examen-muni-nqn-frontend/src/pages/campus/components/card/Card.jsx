import React from "react";

const Card = (props) => {
  const { src, alt, h1, p } = props;
  return (
    <button className="min-w-[227px] h-[92.5px] sm:min-w-[327px] sm:h-[185px] relative shadow-lg ">
      <div className="absolute top-0 left-0 w-full h-[65.5px] sm:h-[131px] bg-slate-800 rounded-t-[15px] flex items-center justify-center">
        <img
          src={src}
          alt={alt}
          className="w-2/3 h-2/3 object-contain  rounded-t-[15px]"
        />
      </div>
      <div className="absolute bottom-0 h-[27px] sm:h-[54px] w-full  bg-white rounded-b-[15px] hover:bg-slate-200 transition-all p-1">
        <div className="flex flex-col justify-center max-h-full font-mono text-[9px]">
          <h1 className="font-bold">{h1}</h1>
          <p className="">{p}</p>
        </div>
      </div>
    </button>
  );
};

export default Card;
