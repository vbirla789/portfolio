import React from "react";

import Logo from "../assets/lqcpsqsm.png";

const Header = () => {
  return (
    <header className="py-8">
      <div className="flex justify-between ">
        <div class="mt-3 ml-3">
          <a href="#">
            {/* <img
              class=" object-contain-none h-48 w-96  object-center"
              src={Logo}
              alt=""
            /> */}
            <h1 class="italic text-2xl text-[#64ffda] font-bold"></h1>
          </a>
        </div>
        <div class="mr-10">
          <button className="btn btn-sm">
            <a
              href="https://drive.google.com/file/d/1qp3Ta6CfnYKlivl5culT9IMX8YvvqgH1/view?usp=sharing"
              target={"_blank"}
              role="button"
            >
              Resume
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
