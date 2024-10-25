import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "../Components/Header/Index";
import bgVideo from "../assets/fondo.mp4";

type childrenProp = {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: childrenProp) => {
  return (
    <>
      <ChakraProvider>
        <Header />
        <div className="w-full h-screen flex flex-col items-center justify-around relative transition duration-[0.5s]">
          <video
            className="h-[105vh] w-full absolute top-0 z-[-1] object-cover md:h-screen min-[1300px]:h-[123vh]"
            src={bgVideo}
            autoPlay
            loop
            muted
          />
          <div className="h-[105vh] w-full bg-black/60 absolute top-0 z-0 md:h-screen min-[1300px]:h-[123vh]"></div>
        </div>
        {children}
      </ChakraProvider>
    </>
  );
};

export { Layout };
