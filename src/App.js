import react, { Component, component } from "react";
import fruta from "./img/fruta.jpg";

export default class App extends Component {
  state = {
    nome: "Ana",
    idade: "16",
    comidaFavorita: "tapioca de camarão",
    musica: [
      "Lana del rey-cherry",
      "Marilyn Manson-The beautiful people",
      "maneva-saudades do tempo"
    ]
  };

  render() {
    return (
      <div>
        <h1>{this.state.nome}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comidaFavorita}</h3>
        <ul>
          <li>{this.state.musica[0]}</li>
          <li>{this.state.musica[1]}</li>
          <li>{this.state.musica[2]}</li>
        </ul>
        <img src={fruta} alt="Maça" />
      </div>
    );
  }
}
