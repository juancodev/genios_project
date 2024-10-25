import { ChakraProvider, Input, useToast, Button, InputRightElement, InputGroup } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { IoEyeSharp } from "react-icons/io5";
import { auth } from "../../Firebase/firebase.config";
import { useAuth } from "../../Hooks/useAuth";
import { useUserAuth } from "../../store/user";

interface FormProp {
  type: string;
}

interface User  {
  fullName?: string;
  email: string;
  password: string;
};

export const FormComponent = ({ type }: FormProp) => {
  const [userData, setUserData] = useState<User>({
    fullName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { fetchUserRegister } = useUserAuth();
  const [showPassword, setShowPassword] = useState(false);
  const { setUserSession } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const handleButtonLoginClick = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    try {
      if (userData.email === "" || userData.password === "") {
        toast({
          title: `Obligatoriamente debes colocar el correo o la contraseña`,
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        setLoading(false);
      } else {
        await signInWithEmailAndPassword(
          auth,
          userData.email,
          userData.password
        )
          .then((response) => {
            setUserSession(response.user);
          })
          .then(() => navigate("/", { replace: true }));
      }
    } catch (err) {
      if (err) {
        toast({
          title: `El correo o contraseña no son válidos`,
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      }
      setLoading(false);
    }
  };

    const handleButtonRegisterClick = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setLoading(true);

      try {
        if (userData.email === "" || userData.password === "") {
          toast({
            title: `Obligatoriamente debes colocar el correo o la contraseña`,
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
          setLoading(false);
        } else {
          await createUserWithEmailAndPassword(
            auth,
            userData.email,
            userData.password
          )
            .then((response) => {
              fetchUserRegister(userData.fullName, response.user);
              setUserSession(response.user);
            })
            .then(() => navigate("/", { replace: true }));
        }
      } catch (err) {
        if (err) {
          toast({
            title: `El correo o contraseña no son válidos`,
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
        }
        setLoading(false);
      }
    };

  if (type === "login"){
    return (
      <>
        <ChakraProvider>
          <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-3.5 lg:items-center lg:justify-start 2xl:mt-0">
            {/* Sign in section */}
            <form onSubmit={handleButtonLoginClick}>
              <label htmlFor="email">Correo electrónico*</label>
              <Input
                id="email"
                className="mt-1 mb-4"
                variant="filled"
                placeholder="admin@admin.com"
                type="email"
                onChange={(event) =>
                  setUserData({ ...userData, email: event.target.value })
                }
              />
              <label htmlFor="email">Contraseña*</label>
              <InputGroup>
                <Input
                  id="password"
                  className="mt-1 mb-3"
                  variant="filled"
                  placeholder="Min. 8 characters"
                  type={showPassword ? "text" : "password"}
                  onChange={(event) =>
                    setUserData({ ...userData, password: event.target.value })
                  }
                />
                <InputRightElement>
                  <IoEyeSharp
                    className="cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </InputRightElement>
              </InputGroup>

              {/* TODO: Add view of forget your password? */}
              <div className="mb-4 mt-2 flex items-center justify-start px-2">
                ¿No tienes una cuenta?{" "}
                <Link className="text-blue-500 ml-2" to={"/register"}>
                  Regístrate
                </Link>
              </div>
              <Button
                type="submit"
                isLoading={loading}
                loadingText="Ingresando..."
                colorScheme="whatsapp"
                className="linear mt-2 w-full rounded-xl py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
              >
                Iniciar Sesión
              </Button>
            </form>
          </div>
        </ChakraProvider>
      </>
    );
  } else {
    return (
      <>
        <ChakraProvider>
          <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-3.5 lg:items-center lg:justify-start 2xl:mt-0">
            <form onSubmit={handleButtonRegisterClick}>
              <label htmlFor="fullName">Nombre Completo*</label>
              <Input
                id="fullName"
                className="mt-1 mb-4"
                variant="filled"
                placeholder="Juan Montilla"
                type="text"
                onChange={(event) =>
                  setUserData({ ...userData, fullName: event.target.value })
                }
              />
              <label htmlFor="email">Correo electrónico*</label>
              <Input
                id="email"
                className="mt-1 mb-4"
                variant="filled"
                placeholder="admin@admin.com"
                type="email"
                onChange={(event) =>
                  setUserData({ ...userData, email: event.target.value })
                }
              />
              <label htmlFor="email">Contraseña*</label>
              <InputGroup>
                <Input
                  id="password"
                  className="mt-1 mb-3"
                  variant="filled"
                  placeholder="Min. 8 characters"
                  type={showPassword ? "text" : "password"}
                  onChange={(event) =>
                    setUserData({ ...userData, password: event.target.value })
                  }
                />
                <InputRightElement>
                  <IoEyeSharp
                    className="cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </InputRightElement>
              </InputGroup>

              {/* TODO: Add view of forget your password? */}
              <div className="mb-4 mt-2 flex items-center justify-start px-2">
                ¿Ya tienes una cuenta?{" "}
                <Link className="text-blue-500 ml-2" to={"/login"}>
                  Inicia sesión
                </Link>
              </div>
              <Button
                type="submit"
                isLoading={loading}
                loadingText="Ingresando..."
                colorScheme="whatsapp"
                className="linear mt-2 w-full rounded-xl py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
              >
                Registrarme
              </Button>
            </form>
          </div>
        </ChakraProvider>
      </>
    );
  }
};
