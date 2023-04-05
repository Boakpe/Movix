import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <AiOutlineLoading3Quarters className="loading-icon" />;
    </div>
  );
};

export default Loading;
