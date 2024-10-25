/* eslint-disable @typescript-eslint/no-explicit-any */
import { MouseEvent, useState } from "react";
import { textClassification } from "@huggingface/inference";
import {
  Button,
  Spinner,
  Container,
  Input,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { TbDatabaseSearch } from "react-icons/tb";
import { FaTable, FaChartPie } from "react-icons/fa";
import { FixedSizeList as List } from "react-window";
import { TableData } from "../Table/Index";
import { ChartData } from "../Chart/index";

interface ContentProps {
  records: string[];
  type: string;
}

interface ErrorTry {
  message: string;
}

const Content = ({ records, type }: ContentProps): JSX.Element => {

  const toast = useToast();
  const tableModal = useDisclosure();
  const chartModal = useDisclosure();
  const [clickValue, setClickValue] = useState<string>("");
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showButtonsModal, setShowButtonsModal] = useState<boolean>(false);


  const handleClick = (event: MouseEvent<HTMLInputElement>) => {
    toast({
      title: `Haz seleccionado un texto para analizar.`,
      status: "info",
      duration: 3000,
      isClosable: true,
      position: "top",
    })
    setClickValue(event.currentTarget.value);
  };

  const handleOpenTableModal = () => {
    tableModal.onOpen();
  }

  const handleOpenChartModal = () => {
    chartModal.onOpen();
  }

  const handleShowData = async (): Promise<void> => {
    try {
      if (type === "sentiment") {
        setShowButtonsModal(false);
        setLoading(true);
        await textClassification({
          accessToken: import.meta.env.VITE_HF_TOKEN,
          model: "finiteautomata/beto-sentiment-analysis",
          inputs: `${clickValue}`,
        })
          .then((data: any) => {
            setLoading(false);
            setShowButtonsModal(true);
            setResponseData(data);
            toast({
              title: `El modelo de sentimientos ha sido ejecutado con éxito`,
              status: "success",
              duration: 3000,
              isClosable: true,
              position: "top",
            });
          })
          .catch((err) =>
            toast({
              title: `Error con el analizador de sentimientos de HugginFace ${err.message}`,
              status: "error",
              duration: 3000,
              isClosable: true,
              position: "top",
            })
          );
      } else if (type === "emotion"){
        setShowButtonsModal(false);
        setLoading(true);
        await textClassification({
          accessToken: import.meta.env.VITE_HF_TOKEN,
          model: "finiteautomata/beto-emotion-analysis",
          inputs: `${clickValue}`,
        })
          .then((data: any) => {
            setLoading(false);
            setShowButtonsModal(true);
            setResponseData(data);
            console.log('data', data)
            toast({
              title: `El modelo de emociones ha sido ejecutado con éxito`,
              status: "success",
              duration: 3000,
              isClosable: true,
              position: "top",
            });
          })
          .catch((err) =>
            toast({
              title: `Error con el analizador de emociones de HugginFace ${err.message}`,
              status: "error",
              duration: 3000,
              isClosable: true,
              position: "top",
            })
          );
      }
    } catch (err: unknown) {
      const error = err as ErrorTry
      toast({
        title: `Error con la ejecución del modelo ${error.message}`,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      console.log(err);
    }
  };

  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => (
    <div style={style} className="flex border-b border-slate-800 pl-0.5">
      <Input
        variant="unstyled"
        value={records[index]}
        className="border-none cursor-pointer"
        readOnly
        onClick={handleClick}
      />
    </div>
  );

  return (
    <>
      <div className="absolute top-20 right-[-12px] m-auto  text-center">
        {loading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#0284c7"
            size="md"
          />
        )}
      </div>
      <p className="my-3 text-center text-white lg:my-6 lg:text-start">
        Selecciona un elemento de la lista y después click al botón{" "}
        <span className="text-sky-600 font-bold">Consultar Datos.</span>{" "}
      </p>
      <Container maxW={"100%"} className="bg-white/80 rounded-lg">
        <div className="flex flex-col mb-4 lg:mb-10">
          <List height={300} itemCount={100} itemSize={43} width={"100%"}>
            {Row}
          </List>
        </div>
      </Container>
      <div className="flex flex-col justify-center gap-2 lg:flex-row lg:gap-10">
        <Button
          leftIcon={<TbDatabaseSearch />}
          color="#0284c7"
          onClick={handleShowData}
          isLoading={loading}
          isDisabled={clickValue === "" ? true : false}
        >
          Consultar Datos
        </Button>
        {showButtonsModal && (
          <>
            <Button
              leftIcon={<FaTable />}
              color="#22C35E"
              onClick={handleOpenTableModal}
            >
              Mostrar Tabla
            </Button>
            <Button
              leftIcon={<FaChartPie />}
              color="red"
              onClick={handleOpenChartModal}
            >
              Mostrar Gráfico
            </Button>
            {type === "sentiment" ? (
              <>
                <TableData
                  records={records}
                  clickValue={clickValue}
                  responseData={responseData}
                  isOpen={tableModal.isOpen}
                  onClose={tableModal.onClose}
                  title="Tabla de Resultados del Análisis de Sentimientos"
                />
                <ChartData
                  responseData={responseData}
                  title={" Analisis de Sentimientos en porcentaje"}
                  isOpen={chartModal.isOpen}
                  onClose={chartModal.onClose}
                  titleModal="Gráfico de Sentimientos"
                />
              </>
            ) : (
              <>
                <TableData
                  records={records}
                  clickValue={clickValue}
                  responseData={responseData}
                  isOpen={tableModal.isOpen}
                  onClose={tableModal.onClose}
                  title="Tabla de Resultados del Análisis de Emociones"
                />
                <ChartData
                  responseData={responseData}
                  title={" Analisis de Emociones en porcentaje"}
                  isOpen={chartModal.isOpen}
                  onClose={chartModal.onClose}
                  titleModal="Gráfico de Emociones"
                />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export { Content };
