interface MedicosTableProps {
  data: any;
}

const MedicosTable: React.FC<MedicosTableProps> = ({ data }) => {
  return (
    <div className="w-full pb-24 flex flex-col items-center">
      <table className="medicos-table w-full table-auto sm:table-fixed border-collapse text-sm md:text-base mt-16 max-w-[1200px]">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 text-center sm:w-2/12">Especialidad</th>
            <th className="py-2 text-center sm:w-2/12">Nombre</th>
            <th className="py-2 text-center sm:w-2/12">Dirección</th>
            <th className="py-2 text-center sm:w-2/12">Teléfono</th>
            <th className="py-2 text-center sm:w-2/12">
              Mail o website
            </th>
            <th className="py-2 text-center w-1/12 sm:w-2/12">Idioma</th>
          </tr>
        </thead>
        <tbody>
          {data.map((medico: any, index: number) =>
            medico.sys.contentType.sys.id === "medicoprofesionalDeLaSalud" ? (
              <tr
                key={medico.sys.id}
                className={index % 2 === 0 ? "bg-gray-100" : ""}
              >
                <td className="py-2 sm:px-4 break-all">{medico.fields.especialidad}</td>
                <td className="py-2 sm:px-4 break-all">{medico.fields.nombre}</td>
                <td className="py-2 sm:px-4 break-all hidden sm:table-cell">
                  {medico.fields.direccion}
                </td>
                <td className="py-2 sm:px-4 break-all">{medico.fields.telephone}</td>
                <td className="py-2 sm:px-4 break-all">
                  <a
                    className="underline break-all"
                    href={medico.fields.emailwebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {medico.fields.emailwebsite}
                  </a>
                </td>
                <td className="py-2 sm:px-4 break-all hidden sm:table-cell">
                  {medico.fields.idiomas}
                </td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MedicosTable;
