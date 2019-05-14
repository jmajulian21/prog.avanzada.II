import React, { Component } from 'react';
import { Grid, Paper, TextField, Button, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@material-ui/core';
import { materiasUNO, materiasDOS, materiasTRES, materiaCUATRO } from '../../../datos/datos';
import SearchIcon from '@material-ui/icons/Search';

const especialidad = [{ value: 'P', label: 'Tec. Sup. en Programacion' },
{ value: 'A', label: 'Tec. Sup. en Sistemas' }];

class Consulta extends Component {
  render() {
    return (
      <div>
        <Grid container direction="column">
          <Grid item xs={10}>
            <Paper style={{ border: '1px solid black', 'border-radius': '5px' }}>
              <Grid item xs>
                <h3>Filtos de Buesqueda</h3>
                <TextField variant='outlined' style={{ marginLeft: 10, marginRight: 10 }} select id="outlined-select-currency-native" label="Carrera" SelectProps={{ native: true }}>
                  {especialidad.map(option => (
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


        <Grid container direction="row">
          <Grid item xs={6}>
            <Grid container direction="column">
              <Grid item xs>
                <Grid item xs>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Legajo</TableCell>
                        <TableCell>Materia</TableCell>
                        <TableCell>Detalle</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {materiasUNO.map(row => (
                        <TableRow key={row.value}>
                          <TableCell > {row.value}</TableCell>
                          <TableCell >{row.label}</TableCell>
                          <TableCell >
                            <IconButton >
                              <SearchIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid container direction="column">
              <Grid item xs>
                <Grid item xs>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Legajo</TableCell>
                        <TableCell>Materia</TableCell>
                        <TableCell>Detalle</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {materiasDOS.map(row => (
                        <TableRow key={row.value}>
                          <TableCell > {row.value}</TableCell>
                          <TableCell >{row.label}</TableCell>
                          <TableCell ><SearchIcon /></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item xs={6}>
            <Grid container direction="column">
              <Grid item xs>
                <Grid item xs>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Legajo</TableCell>
                        <TableCell>Materia</TableCell>
                        <TableCell>Detalle</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {materiasTRES.map(row => (
                        <TableRow key={row.value}>
                          <TableCell > {row.value}</TableCell>
                          <TableCell >{row.label}</TableCell>
                          <TableCell ><SearchIcon /></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid container direction="column">
              <Grid item xs>
                <Grid item xs>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Legajo</TableCell>
                        <TableCell>Materia</TableCell>
                        <TableCell>Detalle</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {materiaCUATRO.map(row => (
                        <TableRow key={row.value}>
                          <TableCell > {row.value}</TableCell>
                          <TableCell >{row.label}</TableCell>
                          <TableCell ><SearchIcon /></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Consulta;