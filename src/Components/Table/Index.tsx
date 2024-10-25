import { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { ModalContentComponent } from "../ModalContent";

interface tableProps {
  records?: string[];
  clickValue: string
  responseData?:
    {
      label: string;
      score: number;
    }[]
  ;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export function TableData({
  records,
  clickValue,
  responseData,
  isOpen,
  onClose,
  title,
}: tableProps) {
  const [text, setText] = useState<string[]>([""]);

  useEffect(() => {
    if (clickValue && records) {
      const filtered = records.filter((record) => {
        const recordAsString = String(record);
        const selectedOptionAsString = String(clickValue);
        return recordAsString.includes(selectedOptionAsString);
      });
      setText(filtered);
    }
  }, [clickValue]);

  return (
    <>
      <ModalContentComponent
        title={title}
        size="xl"
        onClose={onClose}
        isOpen={isOpen}
      >
        <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm mb-2">
          <dl className="-my-3 divide-y divide-gray-100 text-center text-sm lg:text-start">
            <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Texto</dt>
              <dd className="text-gray-700 sm:col-span-2 text-justify">{text || "Texto"}</dd>
            </div>

            {responseData?.map((data) => {
              let color = "#6a1b9a";

              if (data.label === "POS") {
                color = "#0070f3";
              } else if (data.label === "NEU") {
                color = "#2d3748";
              } else if (data.label === "NEG") {
                color = "#e53e3e";
              }
              return (
                <>
                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-2 sm:gap-4">
                    <dt className="font-medium text-gray-900">{data.label}</dt>
                    <ProgressBar
                      completed={Math.round(data?.score * 100)}
                      maxCompleted={100}
                      bgColor={color}
                    />
                  </div>
                </>
              );
            })}
          </dl>
        </div>
      </ModalContentComponent>
    </>
  );
}
