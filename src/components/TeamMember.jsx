/**
 * Componente para mostrar la tarjeta de un miembro del equipo.
 * @param {string} name - Nombre del miembro.
 * @param {string} role - Rol o posición.
 * @param {string} image - URL de la foto.
 */
const TeamMember = ({ name, role, image }) => {
  return (
    <div className="flex items-start gap-0">
      <div className="flex-1">
        <img src={image} alt={name} className="w-full h-auto object-cover" />
        <h3 className="text-xl font-bold mt-2">{name}</h3>
      </div>

      <span
        className="text-xs font-bold uppercase whitespace-nowrap"
        style={{
          writingMode: "vertical-lr",
        }}
      >
        {role}
      </span>
    </div>
  );
};

export default TeamMember;
