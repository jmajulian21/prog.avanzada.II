import React, { Component } from 'react';

class Listado extends Component {
    render() {
        return (
            <div>
                <h1>Listado</h1>
                <table class="egt">
                    <tr>
                        <th>Hoy</th>
                        <th>Mañana</th>
                        <th>Viernes</th>
                    </tr>
                    <tr>
                        <td>Soleado</td>
                        <td>Mayormente soleado</td>
                        <td>Parcialmente nublado</td>
                    </tr>
                    <tr>
                        <td>19°C</td>
                        <td>17°C</td>
                        <td>12°C</td>
                    </tr>
                    <tr>
                        <td>E 13 km/h</td>
                        <td>E 11 km/h</td>
                        <td>S 16 km/h</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Listado;