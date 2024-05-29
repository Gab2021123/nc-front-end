import React from "react";

import CardRegister from "../../Login/components/CardRegister/CardRegister";

function Register() {
  return (
    <React.Fragment>
      <div className=" grid grid-cols-12">
        <section className="col-span-8  bg-orange-200 w-full h-screen">
          <div className="absolute top-0 left-0 ">
            <div className="w-[50px] h-[50px] bg-orange-400 animate-rotatePlus  fixed rounded-full left-[250px] right-[-150px]"></div>
            <div className="w-[50px] h-[50px] bg-orange-400 animate-rotateMinus   fixed rounded-full left-[250px] right-[150px] "></div>{" "}
          </div>
        </section>

        <section className="col-span-4 flex justify-center items-center">
          <CardRegister />
        </section>
      </div>
    </React.Fragment>
  );
}

export default Register;
