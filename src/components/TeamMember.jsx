/**
 * Componente para mostrar la tarjeta de un miembro del equipo.
 * @param {string} name - Nombre del miembro.
 * @param {string} role - Rol o posición.
 * @param {string} image - URL de la foto.
 */
const TeamMember = ({ name, role, image }) => {
  return (
    <div className="relative group">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-auto object-cover"
      />
      <span className="writing-mode-vertical-lr absolute top-0 right-0 bg-white px-2 py-1 text-xs font-bold uppercase"
      style={{ writingMode: 'vertical-lr', transform: 'rotate(360deg)' }}>
        {role}
      </span>
      <h3 className="text-xl font-bold mt-2">{name}</h3>
    </div>
  );
};

export default TeamMember;