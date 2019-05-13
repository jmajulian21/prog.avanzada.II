import React, { Component } from 'react';
import Header from './header/HeaderC';
import { Table,TableBody,TableRow,TableCell, Grid,IconButton} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
class Tabla extends Component {   
    constructor(props){
        super(props);
        this.state = {
            idSeleccionado:0
        }
    }
    editarOnClick = (event, id) => {
        this.setState({ selected: id });
        this.props.history.push("/personas?id="+id);
      };

    eliminarOnClick = (event, id) => {
        this.setState({ selected: id });
      };

    render() {
        let{headers,rows} = this.props

        return(
            <Grid container>
                <Grid item xs={10}>
                    <Table>
                        <Header items={headers}/>
                        <TableBody>
                        {rows.map((row,index) => (
                            <TableRow key={index}  hover={true}>
                                <TableCell > {row.id}</TableCell>
                                <TableCell > {row.nombre}</TableCell>
                                <TableCell > {row.email}</TableCell>
                                <TableCell > {row.sueldo}</TableCell>
                                <TableCell onClick={event => this.editarOnClick(event, row.id)}> 
                                    <IconButton >
                                        <EditIcon fontSize="small" />
                                    </IconButton>
                                </TableCell>
                                <TableCell onClick={event => this.eliminarOnClick(event, row.id)}> 
                                    <IconButton >
                                        <DeleteIcon fontSize="small" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        )
    }
}

//Buscar la manera que la linea 15 a 18 sea dinamico. Preguntar Profesor.
export default Tabla;