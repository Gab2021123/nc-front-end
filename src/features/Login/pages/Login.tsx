import CardLogin from "../components/CardLogin/CardLogin";

function Login() {
  return (
    <div className="grid grid-cols-12 place-items-center place-content-center   max-w-full">
      <section className="hidden sm:col-span-8 sm:flex bg-orange-200 w-full h-screen">
        <div className="w-full h-full ">
          <img
            src="/hamburguesa-perfecta.jpeg"
            className="w-full h-full object-cover blur-[2.6px] "
            alt=""
          />
        </div>
      </section>

      <section className="col-span-12 sm:col-span-4 flex justify-center items-center">
        <CardLogin />
      </section>
    </div>
  );
}

export default Login;
