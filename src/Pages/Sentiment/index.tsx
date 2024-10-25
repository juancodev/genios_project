import { Container} from "@chakra-ui/react";
import { Upload } from "../../Components/Upload/Index";

export const Sentiment = () => {
  return (
    <>
      <Container
        maxW={"95%"}
        className="absolute top-0 z-20 bottom-0 left-0 right-0 flex flex-col items-center justify-start"
      >
        <div className="mt-10 md:mt-16">
          <h1 className="text-3xl  mt-10 mb-3 font-bold text-white animate-fade md:text-6xl lg:mt-10 lg:mb-10 xl:my-5 xl:text-5xl">
            <span>😀</span> Sentimientos
          </h1>
        </div>
        <div className="w-full">
          <Upload type="sentiment" />
        </div>
      </Container>
    </>
  );
};
