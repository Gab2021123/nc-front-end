import CardLogin from "../components/CardLogin/CardLogin";
/* import { useAppStore } from "../../../store/appStore"; */
function Login() {
  /*   const { accessToken } = useAppStore(); //variable
  const { setToken } = useAppStore(); //funcion */
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
        <div className="animate-rotatePlus  left-[10px] bg-orange-600 rounded-[50%] w-[50px] h-[50px] absolute"></div>
        <div className="animate-rotatePlus  left-[20px] bg-orange-600 rounded-[50%] w-[50px] h-[50px] absolute"></div>
        <div className="animate-rotatePlus  left-[30px] bg-orange-600 rounded-[50%] w-[50px] h-[50px] absolute"></div>
        <div className="animate-rotatePlus  left-[40px] bg-orange-600 rounded-[50%] w-[50px] h-[50px] absolute"></div>
        <div className="animate-rotatePlus  left-[50px] bg-orange-600 rounded-[50%] w-[50px] h-[50px] absolute"></div>
        <div className="animate-rotatePlus  left-[60px] bg-orange-600 rounded-[50%] w-[50px] h-[50px] absolute"></div>
        <div className="animate-rotatePlus  left-[70px] bg-orange-600 rounded-[50%] w-[50px] h-[50px] absolute"></div>
      </section>
    </div>
  );
}

export default Login;
