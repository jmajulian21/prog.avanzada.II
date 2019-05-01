import React, { Component } from 'react';
import { Grid,Paper,TextField,Button,Table,TableHead,TableRow,TableCell,TableBody } from '@material-ui/core';

const grado = [{value: 1 , label: '1A'},
               {value: 2 , label: '1B'},
               {value: 3 , label: '2A'},
               {value: 4 , label: '2B'},
               {value: 5 , label: '3A'},
               {value: 6 , label: '3B'},
               {value: 7 , label: '4A'}];

let id = 0;
function createData(legajo, apellido, nombre, grado) {
    id += 1;
return { id, legajo, apellido, nombre, grado  };
}
const rows = [createData(123, "Moreno", "Julian","1A"),
              createData(124, "Perez", "Juan","1A"),
              createData(125, "Torres", "Ana Maria","1A"),
              createData(126, "Ibañez", "Brian","1A"),
              createData(127, "Peralta", "Rosa","1A")];

class Consulta extends Component {
  render() {
    return (
    <div style={{ padding: 10}}>
        <Grid container direction="column">
           <Grid item xs='10'>
           <Paper style={{ border: '1px solid black', 'border-radius':'5px'}}>
             <Grid item xs={11}>
               <h3>Filtos de Buesqueda</h3>
               <TextField style={{ marginLeft: 10 ,marginRight: 10}} id="standard-uncontrolled" label="Legajo Alumno"/>
               <TextField style={{ marginLeft: 10 ,marginRight: 10}} select id="outlined-select-currency-native" label="Grado" SelectProps={{native: true}}>
                  {grado.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
              </TextField>
               <Button variant="contained">Buscar</Button>
             </Grid> 
            </Paper>
            </Grid>
           </Grid>
           <Grid container direction="column">
            <Grid item xs='10'>
                <Paper style={{ border: '1px solid black', 'border-radius':'5px'}}>
                    <Grid item xs={11}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Legajo</TableCell>
                                    <TableCell>Apellido</TableCell>
                                    <TableCell>Nombres</TableCell>
                                    <TableCell>Grado</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell > {row.legajo}</TableCell>
              <TableCell >{row.apellido}</TableCell>
              <TableCell >{row.nombre}</TableCell>
              <TableCell >{row.grado}</TableCell>
            </TableRow>
          ))}
        </TableBody>
                        </Table>
                    </Grid> 
                </Paper>
                </Grid>
           </Grid>
       </div>
    );
  }
}

export default Consulta;