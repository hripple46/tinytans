import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  useEffect(() => {
    document.addEventListener("click", () => {
      console.log("clicked");
      if (isHovered) {
        setIsHovered(false);
      }
    });
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className={`flex w-full h-full justify-center items-center z-10 ${
          isHovered ? "bg-purple-700" : ""
        }`}
      >
        <div
          className={` fixed left-8 bottom-2 w-96 h-96 z-10 transition-transform transform duration-1000 ${
            isHovered ? "-translate-y-96 visible" : "invisible"
          }`}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            clipRule="evenodd"
            viewBox="0 0 3370.82 2384.24"
          >
            <defs>
              <linearGradient
                id="LinearGradient"
                x1="1260.62"
                x2="1579.9"
                y1="873.804"
                y2="873.804"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#ffd100"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
            </defs>
            <g strokeLinecap="butt">
              <path
                fill="none"
                stroke="#000"
                strokeWidth="6"
                d="M1428.57 1073.06c-91.46 162.06-71.78 192.76-37.67 229.06 34.1 36.3 4.35 99.84-14.37 118.06-18.71 18.21 78.09 76.36 40.14 120.35-37.96 43.98 39.65 181.8 37.16 204.46"
              ></path>
              <path
                fill="url(#LinearGradient)"
                stroke="#fff"
                d="M1260.62 848.32c0-123.146 71.47-222.975 159.64-222.975 88.17 0 159.64 99.829 159.64 222.975s-83.59 273.94-171.76 273.94c-88.16 0-147.52-150.794-147.52-273.94z"
              ></path>
            </g>
          </svg>
        </div>
        <img
          className="w-32 h-48"
          src="/dist/assets/Jh_Jin_Jk_Jm/JH/JH_COLORS.png"
        ></img>
        <img
          className="w-32 h-48"
          src="../dist/assets/Jh_Jin_Jk_Jm/JIN/JIN_COLORS.png"
        ></img>
        <img
          className="w-32 h-48"
          src="../dist/assets/Jh_Jin_Jk_Jm/JK/JK_COLORS.png"
        ></img>
        <div onClick={() => setIsHovered(!isHovered)} className="relative z-30">
          <img
            className={`hover:cursor-pointer relative w-32 h-48 z-40 ${
              isHovered ? "animate-bounce transition-translate translate" : ""
            }`}
            src="../dist/assets/Jh_Jin_Jk_Jm/JM/JM_COLORS.png"
          ></img>
          <h1 className="absolute -top-full right-2 text-white text-2xl">
            We Love You, Ashmita!
          </h1>
        </div>
        <div
          className={` fixed left-32 delay-100 bottom-0 w-96 h-96 z-20 transition-transform transform duration-1000 ${
            isHovered ? "-translate-y-96 visible" : "invisible"
          }`}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            clipRule="evenodd"
            viewBox="0 0 3370.82 2384.24"
          >
            <defs>
              <linearGradient
                id="LinearGradient"
                x1="1260.62"
                x2="1579.9"
                y1="873.804"
                y2="873.804"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#ffd100"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
            </defs>
            <g strokeLinecap="butt">
              <path
                fill="none"
                stroke="#000"
                strokeWidth="6"
                d="M1428.57 1073.06c-91.46 162.06-71.78 192.76-37.67 229.06 34.1 36.3 4.35 99.84-14.37 118.06-18.71 18.21 78.09 76.36 40.14 120.35-37.96 43.98 39.65 181.8 37.16 204.46"
              ></path>
              <path
                fill="url(#LinearGradient)"
                stroke="#fff"
                d="M1260.62 848.32c0-123.146 71.47-222.975 159.64-222.975 88.17 0 159.64 99.829 159.64 222.975s-83.59 273.94-171.76 273.94c-88.16 0-147.52-150.794-147.52-273.94z"
              ></path>
            </g>
          </svg>
        </div>
        <div
          className={` fixed left-96 bottom-2 w-96 h-96 z-10 transition-transform transform delay-75 duration-1000 ${
            isHovered ? "-translate-y-96 visible" : "invisible"
          }`}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            clipRule="evenodd"
            viewBox="0 0 3370.82 2384.24"
          >
            <defs>
              <linearGradient
                id="LinearGradient"
                x1="1260.62"
                x2="1579.9"
                y1="873.804"
                y2="873.804"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#ffd100"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
            </defs>
            <g strokeLinecap="butt">
              <path
                fill="none"
                stroke="#000"
                strokeWidth="6"
                d="M1428.57 1073.06c-91.46 162.06-71.78 192.76-37.67 229.06 34.1 36.3 4.35 99.84-14.37 118.06-18.71 18.21 78.09 76.36 40.14 120.35-37.96 43.98 39.65 181.8 37.16 204.46"
              ></path>
              <path
                fill="url(#LinearGradient)"
                stroke="#fff"
                d="M1260.62 848.32c0-123.146 71.47-222.975 159.64-222.975 88.17 0 159.64 99.829 159.64 222.975s-83.59 273.94-171.76 273.94c-88.16 0-147.52-150.794-147.52-273.94z"
              ></path>
            </g>
          </svg>
        </div>
        <img
          className="w-32 h-48"
          src="/dist/assets/Rm_Sg_V/RM/RM_COLORS.png"
        ></img>
        <img
          className="w-32 h-48"
          src="../dist/assets/Rm_Sg_V/SUGA/SUGA_COLORS.png"
        ></img>
        <div
          className={` fixed left-2/3 bottom-2 w-96 h-96 z-10 transition-transform transform duration-1000 ${
            isHovered ? "-translate-y-96 visible" : "invisible"
          }`}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            clipRule="evenodd"
            viewBox="0 0 3370.82 2384.24"
          >
            <defs>
              <linearGradient
                id="LinearGradient"
                x1="1260.62"
                x2="1579.9"
                y1="873.804"
                y2="873.804"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#ffd100"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
            </defs>
            <g strokeLinecap="butt">
              <path
                fill="none"
                stroke="#000"
                strokeWidth="6"
                d="M1428.57 1073.06c-91.46 162.06-71.78 192.76-37.67 229.06 34.1 36.3 4.35 99.84-14.37 118.06-18.71 18.21 78.09 76.36 40.14 120.35-37.96 43.98 39.65 181.8 37.16 204.46"
              ></path>
              <path
                fill="url(#LinearGradient)"
                stroke="#fff"
                d="M1260.62 848.32c0-123.146 71.47-222.975 159.64-222.975 88.17 0 159.64 99.829 159.64 222.975s-83.59 273.94-171.76 273.94c-88.16 0-147.52-150.794-147.52-273.94z"
              ></path>
            </g>
          </svg>
        </div>
        <img
          className="w-32 h-48"
          src="../dist/assets/Rm_Sg_V/TH/TH_COLORS.png"
        ></img>
      </div>
    </>
  );
}

export default App;
