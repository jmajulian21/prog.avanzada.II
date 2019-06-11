import React, { Component } from 'react';
import { ExcelExport} from '@progress/kendo-react-excel-export';
import { Grid, Paper, TextField, Button, Table, TableHead, TableRow, TableCell, TableBody, Checkbox } from '@material-ui/core';
import { fecha,grado, especialidad, materia } from '../../datos/datos';
import { withStyles } from '@material-ui/core/styles';
import {styles} from '../utils/css/styles'

let id = 0;
function createData(legajo, apellido, nombre, grado) {
  id += 1;
  return { id, legajo, apellido, nombre, grado };
}

const rows = [createData(123, "Moreno", "Julian", "1A"),
createData(124, "Perez", "Juan", "1A"),
createData(125, "Torres", "Ana Maria", "1A"),
createData(126, "Ibañez", "Brian", "1Av"),
createData(127, "Peralta", "Rosa", "1A")];

class Asistencias extends Component {
  _exporter;
  export = () => {
    this._exporter.save();
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container direction="column" className={classes.container}>
          <Grid item xs={11}>
            <Paper >
              <Grid item xs>
                <h3>Filtos de Buesqueda</h3>
                <TextField variant='outlined' select label="Carrera" className={classes.textFieldAnchorMas} SelectProps={{ native: true }}>
                  {especialidad.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <TextField variant='outlined' select label="Grado" className={classes.textFieldAnchorMinus} SelectProps={{ native: true }}>
                  {grado.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <TextField variant='outlined' select label="Materia" className={classes.textFieldAnchorMas} SelectProps={{ native: true }}>
                  {materia.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <TextField variant='outlined' select label="Fecha" className={classes.textField} SelectProps={{ native: true }}>
                  {fecha.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                
                <Button variant="contained" margin="normal" className={classes.button}>Buscar</Button>
                <Grid container direction="row">
                  <Grid item xs={6}>
                    <Paper className={classes.button}>
                      <h5>Exportar Planillas</h5>
                      <Button variant='contained' margin="normal" className={classes.button} onClick={this.export}>Asistencias</Button>
                      <ExcelExport
                        data={rows}
                        fileName="Asistencia.xlsx"
                        ref={(exporter) => { this._exporter = exporter; }}>
                      </ExcelExport>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>



        <Grid container direction="column">
          <Grid item xs={11}>
            <Paper style={{ border: '1px solid black', 'borderRadius': '5px' }}>
              <Grid item xs>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Legajo</TableCell>
                      <TableCell>Apellido</TableCell>
                      <TableCell>Nombres</TableCell>
                      <TableCell>Asistencia</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow key={row.id}>
                        <TableCell > {row.legajo}</TableCell>
                        <TableCell >{row.apellido}</TableCell>
                        <TableCell >{row.nombre}</TableCell>
                        <TableCell ><Checkbox /></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Grid>
            </Paper>
            <Grid item xs={12} align="right">
            <Button variant="contained" className={classes.button}>Reiniciar</Button>
              <Button variant="contained" className={classes.button}>Aceptar</Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Asistencias);