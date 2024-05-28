/* eslint-disable @typescript-eslint/no-unused-vars */
import {Outlet,Navigate} from "react-router-dom";

const AuthLayout = () => {
  const authUser:boolean=false;
  return (
    <>
      {authUser ? 
      (<Navigate to="/" />
      ):(
        <>
        <section className="flex flex-1 justify-center items-center py-10 flex-col ">
        <Outlet />
        </section>

        <img src="/assets/images/side-img.svg" alt="Side image"
         className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat" />
        </>
      )}

         
    </>
  )
}

export default AuthLayout

