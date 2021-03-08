const Modal = ({ modal, handleClick }) => {
  return (
    <div
      className={` w-full p-8 bg-red-500 ${modal ? "block" : "hidden"}`}
      toggle={handleClick}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
        expedita assumenda, sunt mollitia quo blanditiis eos, voluptatem aperiam
        ullam deserunt eius, asperiores incidunt corporis rerum nulla excepturi.
        Error, aliquid? Quaerat.
      </p>
    </div>
  );
};

export default Modal;
