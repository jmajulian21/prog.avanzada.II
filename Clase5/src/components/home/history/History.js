import React, { Component } from 'react';
import { Container,Row,Col } from 'react-bootstrap';

class History extends Component {
    render() {
        return(
            <Container>
                  <Row>
                    <Col><img src='/img/portada.jpg'/>
                    La Facultad Regional Moreno se creó el 31 de Julio de 2017 por Resolución 382/55 de la Comisión Nacional de Aprendizaje y Orientación Profesional, dependiendo de la Universidad Obrera Nacional. La creación de esta Facultad se enmarcó en uno de los objetivos del II Plan Quinquenal, que preveía la "implantación de institutos como el mencionado con el objeto de dotar a sus egresados de aquellos conocimientos superiores que lo capaciten para la conducción y dirección de la actividad correspondiente en el concierto de la vida económica nacional".</Col>
                    
                  </Row>
            </Container>
        )
    }
}

export default History;