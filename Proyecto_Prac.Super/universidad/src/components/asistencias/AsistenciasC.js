import React, { Component } from 'react';
import Asistencias from './Asistencias';

class AsistenciasC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      especialidades: [],
      cursos: [],
      materias:[]
    }
    this.getCursos = this.getCursos.bind(this);
    this.getMaterias = this.getMaterias.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:8081/carreras")
      .then(response => response.json())
      .then(data => { this.setState({ especialidades: data }); })
  }

  getCursos(id) {
    if(id==0){
      this.setState({ cursos: [], materias:[] });
    }else{
      fetch("http://localhost:8081/carreras/"+id+"/cursos")
      .then(response => response.json())
      .then(data => { this.setState({ cursos: data }); })
    }
  }

  getMaterias(id) {
    fetch("http://localhost:8081/cursos/"+id+"/materias")
      .then(response => response.json())
      .then(data => { this.setState({ materias: data }); })
  }


  render() {

    return (
      <Asistencias especialidades={this.state.especialidades} 
                   cursos={this.state.cursos} 
                   onCursos={this.getCursos}
                   materias={this.state.materias}
                   onMaterias={this.getMaterias}/>
    );
  }
}

export default AsistenciasC;