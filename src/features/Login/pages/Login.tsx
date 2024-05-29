import CardLogin from "../components/CardLogin/CardLogin";

function Login() {
  return (
    <div className="grid grid-cols-12  max-w-full">
      <section className="col-span-8  bg-orange-200 w-full h-screen">
        <div className="w-full h-full relative">
          <img
            src="/hamburguesa-perfecta.jpeg"
            className="w-full h-full object-cover blur-[2.6px]"
            alt=""
          />

          <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50"></div>
        </div>
      </section>

      <section className="col-span-4 flex justify-center items-center">
        <CardLogin />
      </section>
    </div>
  );
}

export default Login;
