import { useState } from "react";
import "./App.css";
import curieImg from "./assets/Marie_Curie.jpg";
import ksaruImg from "./assets/Ksaru.jpg";

function Cientificos({ nombre, img,profesion, premios, Descubrio }) {
  return (
    <div className="cientifico">
      <h4 className='Texto'>{nombre}</h4>
      <img className='img' src={img} />
      <p className='Texto'>
        <b>Profesión:</b> {profesion}
      </p>
      <p className='Texto'>
        <b>Premios:</b> {premios.length} ({premios.join(", ")})
      </p>
      <p className='Texto'>
        <b>Descubrió:</b> {Descubrio.join(", ")}
      </p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2>Científicos Notables</h2>
      <Cientificos
        nombre="Maria Skłodowska-Curie"
        img={curieImg}
        profesion="física y química"
        premios={[
          "Premio Nobel de Física",
          "Premio Nobel de Química",
          "Medalla Davy",
          "Medalla Matteucci",
        ]}
        Descubrio={["polonio (elemento químico)"]}
      />
      <Cientificos
        nombre="Katsuko Saruhashi"
        img={ksaruImg}
        profesion="geoquímica"
        premios={["Premio Miyake de geoquímica", "Premio Tanaka"]}
        Descubrio={[
          "un método para medir el dióxido de carbono en el agua de mar",
        ]}
      />
    </div>
  );
}

export default App;
