import { logo, iconHamburger } from "./images";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setModal(!modal);
  };
  return (
    <>
      <div>
        {/* Header */}
        <header className="flex justify-between p-5 pt-8 bg-gray-500">
          {/* Logo and burger */}
          <a href="/">
            <img src={logo} alt="" />
          </a>
          <button onClick={handleClick}>
            <img src={iconHamburger} alt="" />
          </button>
        </header>
      </div>

      <Modal modal={modal} handleClick={handleClick} />
    </>
  );
}

export default App;
