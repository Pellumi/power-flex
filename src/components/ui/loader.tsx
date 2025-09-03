// make sure to import styled-components library
import { SpinnerStyle } from "./styles";

// export const Loader = () => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-100 z-[10000] !m-0 h-screen">
//       <div className="relative w-40 h-20 flex items-end justify-center">
//         <img
//           src={darkLogoLong}
//           alt="image-dark"
//           className="absolute h-auto z-[60]"
//         />
//         <img
//           src={lightLogoShort}
//           alt="image-light"
//           className="absolute bottom-0 right-[22px] h-auto animate-slide-in-out"
//         />
//       </div>
//     </div>
//   );
// };

// export const SecondLoader = () => {
//   return (
//     <SecondLoaderStyle>
//       <div className="loader">
//         <span>
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
//             <path
//               fill="#FFFFFF"
//               d="M158 77c6 23-8 48-28 63-21 16-49 21-68 8-19-12-28-43-20-68s33-45 58-45c26 0 52 20 58 42z"
//             />
//           </svg>
//         </span>
//         <span>
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
//             <path
//               fill="#FFFFFF"
//               d="M158 77c6 23-8 48-28 63-21 16-49 21-68 8-19-12-28-43-20-68s33-45 58-45c26 0 52 20 58 42z"
//             />
//           </svg>
//         </span>
//         <span>
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
//             <path
//               fill="#FFFFFF"
//               d="M158 77c6 23-8 48-28 63-21 16-49 21-68 8-19-12-28-43-20-68s33-45 58-45c26 0 52 20 58 42z"
//             />
//           </svg>
//         </span>
//       </div>
//     </SecondLoaderStyle>
//   );
// };

export const Spinner = () => {
  return (
    <SpinnerStyle>
      <div className="spinner center">
        <div className="spinner-blade" />
        <div className="spinner-blade" />
        <div className="spinner-blade" />
        <div className="spinner-blade" />
        <div className="spinner-blade" />
        <div className="spinner-blade" />
        <div className="spinner-blade" />
        <div className="spinner-blade" />
        <div className="spinner-blade" />
        <div className="spinner-blade" />
        <div className="spinner-blade" />
        <div className="spinner-blade" />
      </div>
    </SpinnerStyle>
  );
};

export const LineLoader = () => {
  return <div className="loader"></div>;
};
