interface MedicosTableProps {
  data: any;
}

const MedicosTable: React.FC<MedicosTableProps> = ({ data }) => {
  return (
    <table className="w-full table-fixed border-collapse text-sm md:text-base table mt-16 pb-24">
      <thead>
        <tr className="bg-gray-200">
          <th className="py-2 text-center w-1/12 sm:w-1/12">Especialidad</th>
          <th className="py-2 text-center w-3/12 sm:w-3/12">Nombre</th>
          <th className="py-2 text-center w-2/12 sm:w-2/12">Dirección</th>
          <th className="py-2 text-center w-2/12 sm:w-2/12">Teléfono</th>
          <th className="py-2 text-center w-3/12 sm:w-3/12">Mail o website</th>
          <th className="py-2 text-center w-1/12 sm:w-1/12">Idioma</th>
        </tr>
      </thead>
      <tbody>
        {data.map((medico: any, index: number) =>
          medico.sys.contentType.sys.id === "medicoprofesionalDeLaSalud" ? (
            <tr
              key={medico.sys.id}
              className={index % 2 === 0 ? "bg-gray-100" : ""}
            >
              <td className="py-2 px-4">{medico.fields.especialidad}</td>
              <td className="py-2 px-4">{medico.fields.nombre}</td>
              <td className="py-2 px-4 hidden sm:table-cell">
                {medico.fields.direccion}
              </td>
              <td className="py-2 px-4">{medico.fields.telephone}</td>
              <td className="py-2 px-4">
                <a
                  className="underline break-all"
                  href={medico.fields.emailwebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {medico.fields.emailwebsite}
                </a>
              </td>
              <td className="py-2 px-4 hidden sm:table-cell">
                {medico.fields.idiomas}
              </td>
            </tr>
          ) : null
        )}
      </tbody>
    </table>
  );
};

export default MedicosTable;
