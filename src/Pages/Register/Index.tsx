import imageForm from "../../assets/eyes_ia.jpg";
import { FormComponent } from "../../Components/Form";

// interface childrenProp {
//   children: JSX.Element | JSX.Element[];
// }

const Register = (): JSX.Element => {
  return (
    <>
      <>
        <div className="relative float-right h-full min-h-screen w-full !bg-white dark:!bg-navy-900">
          <main className={`mx-auto min-h-screen`}>
            <div className="relative flex">
              <div className="mx-auto flex min-h-full w-full flex-col justify-start pt-12 md:max-w-[75%] lg:h-screen lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:h-[100vh] xl:max-w-[1383px] xl:px-0 xl:pl-[70px]">
                <div className="mb-auto flex flex-col pl-5 pr-5 md:pr-0 md:pl-12 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
                  <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-3.5 lg:items-center lg:justify-start xl:mt-6  2xl:mt-0">
                    <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px] 2xl:mt-[5vh]">
                      <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
                        Regístrate
                      </h4>
                      <p className="mb-9 ml-1 text-base text-gray-600">
                        Regístrate ahora para disfrutar de la AI para modelo de
                        sentimientos y emociones.
                      </p>
                      <FormComponent type="register"/>
                    </div>
                  </div>
                </div>
                <div className="absolute right-0 hidden h-full min-h-screen md:block lg:w-[49vw] 2xl:w-[44vw]">
                  <div className="absolute flex h-full w-full items-end justify-center bg-cover bg-center lg:rounded-bl-[120px] xl:rounded-bl-[200px]">
                    <img
                      src={imageForm}
                      alt="image_login"
                      className="h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
    </>
  );
};

export { Register };
