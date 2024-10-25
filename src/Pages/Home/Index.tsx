import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "@chakra-ui/react";
import Typed from "typed.js";
import { useAuth } from "../../Hooks/useAuth";
import { useUserAuth } from "../../store/user";

const Home = () => {
  const { user } = useUserAuth();
  const [animateClass, setAnimateClass] = useState<boolean>(false)
  const el = useRef(null);
  const navigate = useNavigate();
  const { userSession } = useAuth();
  console.log(userSession);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Esta aplicación permite subir o arrastrar un archivo CSV y, con un solo clic, obtener un análisis de sentimiento y emociones detallados para cada texto. Rápido, intuitivo y pensado para simplificar el proceso.",
      ],
      typeSpeed: 35,
      cursorChar: "/",
      shuffle: true,
      onComplete: () => {
        setAnimateClass(true);
      }
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handlePageSentiments = () => {
    navigate("/sentiments", { replace: true });
  }

    const handlePageEmotions = () => {
      navigate("/emotions", { replace: true });
    };

  return (
    <>
      <Container
        maxW={"95%"}
        className="absolute top-0 z-20 bottom-0 left-0 right-0 flex flex-col items-center justify-center"
      >
        <div>
          <h1 className="text-4xl text-center my-10 font-bold text-white animate-fade lg:text-6xl">
            Bienvenido, {user.fullName || "Usuario"} 👋🏼
          </h1>
        </div>
        <div className="px-10 py-10">
          <span
            className="text-md text-justify font-semibold italic text-white lg:text-2xl"
            ref={el}
          />
        </div>
        <div
          className={
            animateClass
              ? "w-3/4 flex flex-col gap-5 justify-evenly animate-fade_button lg:flex-row lg:gap-0"
              : "hidden"
          }
        >
          <Button
            className="p-1 lg:p-5"
            size="lg"
            variant="outline"
            colorScheme="yellow"
            onClick={handlePageSentiments}
          >
            😀 Sentimientos
          </Button>
          <Button
            className="p-5"
            size="lg"
            variant="outline"
            colorScheme="blue"
            onClick={handlePageEmotions}
          >
            😱 Emociones
          </Button>
        </div>
      </Container>
    </>
  );
};

export { Home };
