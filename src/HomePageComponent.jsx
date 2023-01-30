const mplaceholder ="Escribe algo";

//Crea un component amb la informacio del grup
export const InfoComponent = () => {
  return <h1>Grup Kevin Sama y Raul Rufo</h1>;
};

//Crea un component per el input
export const InputComponent = () => {
  return (
    <div>
      <input type="text" placeholder={mplaceholder} />
    </div>
  );
};