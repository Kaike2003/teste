import React, { useState } from "react";
import { useModalFingerPrint } from "../../../utils/store/Store";

function MenuFingerPrint() {
  const [setModal] = useModalFingerPrint((state) => [state.setModal]);
  const [command, setCommand] = useState("1");

  return (
    <React.Fragment>
      <div className="sm:mt-6 lg:mt-8 mt-12 lg:mb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row gap-5">
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-3">
          <div className="rounded-md shadow ">
            <button
              onClick={async () => {
                setModal(true);
              }}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
            >
              Cadastrar finger print
            </button>
          </div>
        </div>

        <div>
          <input
            type="text"
            name=""
            id=""
            onChange={(e) => setCommand(e.target.value)}
          />
          <button
            onClick={async () => {
              try {
                const response = await fetch("http://192.168.0.121", {
                  method: "POST",
                  headers: {
                    "Content-Type": "text/plain",
                  },
                  body: command,
                });

                console.log(response);
              } catch (error) {
                console.log(error);
              }
            }}
          >
            enviar
          </button>
        </div>

        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-3">
          <div className="rounded-md shadow ">
            <button
              onClick={() => {}}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
            >
              Verificar finger print
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MenuFingerPrint;
