import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const { h1, p, src, alt } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/personasCursos");
  };

  return (
    <div>
      <button
        className="min-w-[327px] h-[185px] relative shadow-lg rounded-b-[15px] "
        onClick={handleClick}
      >
        <div className="absolute top-0 left-0 w-full h-[131px] bg-slate-800 rounded-t-[15px] flex items-center justify-center">
          <img src={src} alt={alt} className="w-2/3 h-2/3 object-contain " />
        </div>
        <div className="absolute bottom-0 h-[54px] w-full  bg-white rounded-b-[15px] hover:bg-slate-200 transition-all p-1">
          <div className="flex flex-col justify-center max-h-full font-mono text-[9px]">
            <h1 className="font-bold">{h1}</h1>
            <p className="">{p}</p>
          </div>
        </div>
      </button>
    </div>
  );
};

Card.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  h1: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
};

export default Card;
