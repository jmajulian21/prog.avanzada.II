import React, { Component } from 'react';
import Asistencias from './Asistencias';

class AsistenciasC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      especialidades: [],
      cursos: [],
      materias:[],
      fechas:[],
      alumnos:[]
    }
    this.getCursos = this.getCursos.bind(this);
    this.getMaterias = this.getMaterias.bind(this);
    this.getMateria = this.getMateria.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:8081/carreras")
      .then(response => response.json())
      .then(data => { this.setState({ especialidades: data }); })
  }

  getCursos(id) {
    if(id==0){
      this.setState({ cursos: [], materias:[],fechas:[],alumnos:[] });
    }else{
      fetch("http://localhost:8081/carreras/"+id+"/cursos")
      .then(response => response.json())
      .then(data => { this.setState({ cursos: data , materias:[],fechas:[],alumnos:[]}); })
    }
  }

  getMaterias(id) {
    fetch("http://localhost:8081/cursos/"+id+"/materias")
      .then(response => response.json())
      .then(data => { this.setState({ materias: data ,fechas:[],alumnos:[] }); })
  }

  getMateria(idCurso,idMateria) {
    fetch("http://localhost:8081/cursos/"+idCurso+"/materias/"+idMateria)
      .then(response => response.json())
      .then(data => { this.setState({ fechas: data.fechas , alumnos: data.alumnos }); })
  }


  render() {

    return (
      <Asistencias especialidades={this.state.especialidades} 
                   cursos={this.state.cursos} 
                   onCursos={this.getCursos}
                   materias={this.state.materias}
                   fechas={this.state.fechas}
                   alumnos={this.state.alumnos}
                   onMaterias={this.getMaterias}
                   onMateria={this.getMateria}/>
    );
  }
}

export default AsistenciasC;