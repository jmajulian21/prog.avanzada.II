import React, { Component } from 'react';

class Listado extends Component {
    render() {
        let { data } = this.props
        return (
            <div>
                <h1>Listado</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Area</th>
                            <th>Name</th>
                            <th>Capital</th>
                        </tr>
                        {data && data.map((row,index ) => (
                            <tr key={index}>
                                <td>{row.area}</td>
                                <td>{row.name}</td>
                                <td>{row.capital}</td>
                            </tr>))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Listado;