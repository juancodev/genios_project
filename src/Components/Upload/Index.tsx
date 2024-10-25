import { ChangeEvent, useState } from "react";
import { parse } from "csv-parse";
import { PhotoIcon, DocumentCheckIcon} from "@heroicons/react/24/solid";
import { Content } from "../Content/Index";

interface UploadProp {
  type: string;
}

const Upload = ({type}: UploadProp): JSX.Element => {
  const [records, setRecords] = useState<Array<string>>([]);
  const [fileData, setFileData] = useState<File>();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    setFileData(file);

    if (!file) return;

    if (!file.name.endsWith(".csv")) {
      console.log("Solo CSV");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const fileContent = reader.result as string;
      const recordsArray: Array<string> = [];

      const parser = parse(fileContent, {
        delimiter: ",",
        trim: true,
        columns: true,
      });

      parser
        .on("data", (row) => {
          recordsArray.push(row.text);
        })
        .on("end", () => {
          setRecords(recordsArray);
          console.log("Lectura de CSV Finalizada");
        });
    };
    reader.readAsText(file);
  };

  if (fileData) {
    return (
      <>
        <form>
          <div className="col-span-full">
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-4 lg:px-6 lg:py10">
              <div className="text-center">
                <DocumentCheckIcon
                  className="mx-auto h-7 w-7 text-gray-300 lg:h-12 lg:w-12"
                  aria-hidden="true"
                />
                <div className="mt-2 flex flex-col text-sm leading-6 text-white lg:flex-row lg:mt-4">
                  <p className="pl-1 mr-2">
                    El nombre del archivo cargo es:{" "}
                    <span className="font-bold">{fileData?.name}</span>
                  </p>{" "}
                  <span className="mr-2">{" - "}</span>
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-zinc-800  font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-gray-200 px-2 py-1 lg:px-2 lg:py-0.5"
                  >
                    <span> Subir otro archivo</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept=".csv"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
                <p className="text-xs leading-5 text-white">
                  ¡Anímate y comienza a analizar los datos!
                </p>
              </div>
            </div>
          </div>
        </form>
        <div>
          {records.length > 0 ? (
            <Content records={records} type={type} />
          ) : null}
        </div>
      </>
    );
  } else {
    return (
      <>
        <form>
          <div className="col-span-full">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-white xl:text-lg"
            >
              ¡Carga un .csv para que veas la magia 🎉!
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10 xl:py-5 xl:px-0">
              <div className="text-center">
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300 xl:h-8 xl:w-8"
                  aria-hidden="true"
                />
                <div className="mt-4 flex text-sm leading-6 text-white xl:mt-2">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-zinc-800 font-bold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-gray-200 px-2 py-0.5"

                  >
                    <span>Subir un archivo</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept=".csv"
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="pl-1">o arrastar y soltar</p>
                </div>
                <p className="text-xs leading-5 text-white">
                  .CSV hasta 10MB
                </p>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
};

export { Upload };
