// import React from "react";

// export const Desktop = () => {
//   return (
    
//       <div className="bg-white w-[1440px] h-[1024px]">
//         <div className="relative h-[1010px] top-3.5 bg-[url(/d16e11c8-26e1-49e1-be9d-27c7d7b3d020-1.png)] bg-cover bg-[50%_50%]">
//           <div className="absolute top-[370px] left-[703px] [font-family:'Abyssinica_SIL-Regular',Helvetica] font-normal text-black text-[40px] tracking-[0] leading-[normal]">
//             LOGIN
//           </div>

//           <div className="absolute w-[441px] h-[35px] top-[451px] left-[531px] bg-[#d9d9d9]">
//             <div className="absolute top-1 left-[18px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
//               User Name
//             </div>
//           </div>

//           <div className="absolute w-[445px] h-9 top-[512px] left-[531px] bg-[#d9d9d9]">
//             <div className="absolute top-[5px] left-3.5 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
//               Password
//             </div>
//           </div>

//           <div className="absolute w-[29px] h-[29px] top-[578px] left-[552px] bg-[#d9d9d9]" />

//           <div className="absolute top-[577px] left-[592px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
//             Remember Password
//           </div>

//           <div className="absolute w-[207px] h-9 top-[624px] left-[534px] bg-[#4e8af8]">
//             <div className="absolute top-[5px] left-[73px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
//               LOGIN
//             </div>
//           </div>

//           <div className="absolute w-[190px] h-9 top-[624px] left-[765px] bg-[#4e8af8]">
//             <div className="absolute top-[5px] left-[54px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
//               SIGN UP
//             </div>
//           </div>

//           <div className="absolute top-[692px] left-[649px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-[#df0202] text-2xl tracking-[0] leading-[normal]">
//             Forgot Password?
//           </div>

//           <div className="absolute w-[1057px] top-[134px] left-[216px] [font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica] font-normal text-black text-[80px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
//             AI SMART CLASSROOM ANALYTICS
//           </div>
//         </div>
//       </div>
//   );
// };

import React from "react";
import "./login.css";

const Desktop = () => {
  return (
    <div className="container">
      <div className="main-box">
        <div className="background-image">
          <div className="login-title">LOGIN</div>

          <input
            type="text"
            placeholder="User Name"
            className="input username"
          />

          <input
            type="password"
            placeholder="Password"
            className="input password"
          />

          <input type="checkbox" id="remember" className="checkbox" />
          <label htmlFor="remember" className="remember-label">
            Remember Password
          </label>

          <button className="btn login-btn">LOGIN</button>
          <button className="btn signup-btn">SIGN UP</button>

          <div className="forgot-password">Forgot Password?</div>

          <div className="header-text">AI SMART CLASSROOM ANALYTICS</div>
        </div>
      </div>
    </div>
  );
};

export default Desktop