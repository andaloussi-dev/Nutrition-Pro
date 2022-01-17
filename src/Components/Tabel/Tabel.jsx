import React from 'react';
import {Table ,TableBody ,TableCell,TableContainer ,TableHead , TableRow , Paper } from '@mui/material';
import styles from './Tabel.module.css';
const TabelComponent = ({data}) => {

    return (
        <div className={styles.container}>
        <TableContainer sx={{width:'70%'}} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Food</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat_total_g}</TableCell>
                <TableCell align="right">{row.carbohydrates_total_g}</TableCell>
                <TableCell align="right">{row.protein_g}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    );
}

export default TabelComponent;
