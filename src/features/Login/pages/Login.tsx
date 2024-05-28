import CardLogin from "../components/CardLogin/CardLogin";

function Login() {
  return (
    <div className="grid grid-cols-12 max-w-full">
      <section className="col-span-8  bg-orange-200 w-full h-screen">
        <div className="absolute top-0 left-0 ">
          {/*  <div className="w-[554.5px] h-[563.95px] bg-slate-800 animate-rotateColor  fixed rounded-full left-[+250px] right-[-150px]"></div>
          <div className="w-[554.5px] h-[563.95px] bg-slate-800 border-neutral-700 border-solid fixed rounded-full left-[-170px] right-[-130px]"></div> */}
        </div>
      </section>

      <section className="col-span-4 flex justify-center items-center">
        <CardLogin />
      </section>
    </div>
  );
}

export default Login;
