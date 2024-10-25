import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { ModalContentComponent } from "../ModalContent"

interface ChartDataProps {
  responseData: {
    label: string;
    score: number;
  }[];
  title: string;
  isOpen: boolean;
  onClose: () => void;
  titleModal: string;
}

Chart.register(CategoryScale)

export const ChartData = ({ responseData, title, isOpen, onClose, titleModal }: ChartDataProps) => {
  return (
    <>
      <ModalContentComponent
        title={titleModal}
        size="xl"
        onClose={onClose}
        isOpen={isOpen}
      >
        <div className="w-full bg-slate-100 rounded-md p-5 mb-2">
          <p className="text-center mb-3">
            {titleModal} del Texto Elegido en Gráfica de Rosquilla.
          </p>
          <Doughnut
            data={{
              labels: responseData.map((data) => data.label),
              datasets: [
                {
                  label: title,
                  data: responseData.map((data) => Math.ceil(data.score * 100)),
                },
              ],
            }}
          />
        </div>
      </ModalContentComponent>
    </>
  );
};
