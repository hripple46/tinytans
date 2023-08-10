import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className={`flex w-full h-full justify-center items-center ${
          isHovered ? "bg-purple-700" : ""
        }`}
      >
        <img
          className="w-32 h-48"
          src="./src/assets/Jh_Jin_Jk_Jm/JH/JH_COLORS.png"
        ></img>
        <img
          className="w-32 h-48"
          src="./src/assets/Jh_Jin_Jk_Jm/JIN/JIN_COLORS.png"
        ></img>
        <img
          className="w-32 h-48"
          src="./src/assets/Jh_Jin_Jk_Jm/JK/JK_COLORS.png"
        ></img>
        <div className="relative">
          <img
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-32 h-48"
            src="./src/assets/Jh_Jin_Jk_Jm/JM/JM_COLORS.png"
          ></img>
          <h1 className="absolute -top-full right-2 text-white text-2xl">
            We Love You, Ashmita!
          </h1>
        </div>
        <img
          className="w-32 h-48"
          src="./src/assets/Rm_Sg_V/RM/RM_COLORS.png"
        ></img>
        <img
          className="w-32 h-48"
          src="./src/assets/Rm_Sg_V/SUGA/SUGA_COLORS.png"
        ></img>
        <img
          className="w-32 h-48"
          src="./src/assets/Rm_Sg_V/TH/TH_COLORS.png"
        ></img>
      </div>
    </>
  );
}

export default App;
