import React from "react";
import Formulario from "./Formulario";
import Lista from "./Lista";

class FormularioContainer extends React.Component {

    listado = [1,2,3,4];

    Cargar = datos =>{
        console.log(datos);
    }

    render() {

        return (
            <div>
                <Formulario clave={true} onCargar={this.Cargar}/>
                <Lista listado={this.listado}/>
            </div>
        )
    }
}

export default FormularioContainer;