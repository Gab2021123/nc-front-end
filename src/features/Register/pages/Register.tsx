import React from "react";
import CardRegister from "../../Login/components/CardRegister/CardRegister";
import "./Register.css";
function Register() {
  return (
    <React.Fragment>
      <div className=" grid grid-cols-12">
        <section className="col-span-8  bg-orange-200 w-full h-screen">
          <div className="w-full h-full relative">
            <img
              src="/pizza-perfecta2.jpeg"
              className="w-full h-full object-cover blur-[2.6px]"
              alt=""
            />

            <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50"></div>
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
