import CardLogin from "../components/CardLogin/CardLogin";

function Login() {
  return (
    <div className="grid grid-cols-12 max-w-full">
      <section className="col-span-8  bg-orange-200 w-full h-screen">
        <div className="absolute top-0 left-0 "></div>
      </section>

      <section className="col-span-4 flex justify-center items-center">
        <CardLogin />
      </section>
    </div>
  );
}

export default Login;
