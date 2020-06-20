import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx'
import { SearchBox } from './components/search-box/search-box.component.jsx'

class App extends Component{
  // Aquí va código javascript si es que necesito antes de renderear
  myPromise;
  constructor(){ //Aquí el super llama al constructor y permite acceder a this.state
    super();
    this.state = {
      searchField: "", //Usamos comas para separar atributos
      monsters: []
    }

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  //Tenemos dos posibilidades para que la función handleChange esté unida a this:
  //1)
  // this.handleChange = this.handleChange.bind(this)

  //2)
  // Usando arrow functions (como aparece en el ejemplo), pues la flecha toma el "contexto" en el que estoy y hace el bind de forma automática

  // Luego, llamamos a la función como this.handleChick

  // OJO: Si defino la función como :
  // handleChange(e) {
  //   this.setState({searchField: e.target.value})
  // }
  // Entonces puedo llamarla pero no usando this, sino que simplemente handleChange

  render(){
    const {searchField, monsters} = this.state // Con esto puedo tomar los state como constantes y almacenarlos
    const filteredMonsters = monsters.filter(mon => mon.name.toLowerCase().includes(this.state.searchField.toLowerCase())) //El filtro podría haberlo hecho abajo también, solo se hizo para que fuese más entendible

    return(
      <div className="App">
      <h1 className="title-monster"> Monster Rolodex </h1>
      <SearchBox placeholder="Search monsters" handleChange={(e) => this.setState({searchField: e.target.value})} />
      <CardList monsters = {filteredMonsters}/>
    </div>
    )
  }
}

export default App;
