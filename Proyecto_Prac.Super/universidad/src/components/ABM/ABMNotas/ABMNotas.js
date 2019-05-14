import React, { Component } from 'react';
import { Grid,Paper,TextField,Button,Table,TableHead,TableRow,TableCell,TableBody,Checkbox } from '@material-ui/core';
import "./style.css";
import {grado,especialidad,materia} from '../../datos/datos';

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
              
class Asistencias extends Component {
  render() { 
    return ( 
    <div>
        <Grid container direction="column">
           <Grid item xs={12}>
           <Paper >
             <Grid item xs>
               <h3>Filtos de Buesqueda</h3>
               <TextField variant='outlined' style={{ marginLeft: 10 ,marginRight: 10}} select id="outlined-select-currency-native" label="Carrera" SelectProps={{native: true}}>
                  {especialidad.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
              </TextField>
              <TextField variant='outlined' style={{ marginLeft: 10 ,marginRight: 10}} select id="outlined-select-currency-native" label="Grado" SelectProps={{native: true}}>
                  {grado.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
              </TextField>
               <TextField variant='outlined' style={{ marginLeft: 10 ,marginRight: 10}} select id="outlined-select-currency-native" label="Materia" SelectProps={{native: true}}>
                  {materia.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
              </TextField>
              <TextField variant='outlined' id="date" label="Fecha Materia" type="date"
        defaultValue="2019-05-07"
        InputLabelProps={{
          shrink: true,
        }}
      />
              <Button variant="contained">Buscar</Button>
               <Grid container direction="row">
                  <Grid item xs={6} style={{padding: 10 }}>
                    <Paper style={{ border: '1px solid black', 'borderRadius':'5px',"marginRight":"10px",padding: 10 }}>
                          <h5>Exportar Planillas</h5>
                          <Button variant="contained">Asistencias</Button>
                    </Paper>    
                  </Grid>
                </Grid>
              </Grid> 
            </Paper>
            </Grid>
           </Grid>



           <Grid container direction="column">
            <Grid item xs={12}>
                <Paper style={{ border: '1px solid black', 'borderRadius':'5px'}}>
                    <Grid item xs={12}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Legajo</TableCell>
                                    <TableCell>Apellido</TableCell>
                                    <TableCell>Nombres</TableCell>
                                    <TableCell>Grado</TableCell>
                                    <TableCell>Detalle</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell > {row.legajo}</TableCell>
              <TableCell >{row.apellido}</TableCell>
              <TableCell >{row.nombre}</TableCell>
              <TableCell >{row.grado}</TableCell>
              <TableCell ><Checkbox/></TableCell>
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

export default Asistencias;