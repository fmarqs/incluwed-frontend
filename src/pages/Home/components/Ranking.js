import React from 'react';
import './style.css';
import { Paper } from '@mui/material';
import { TableContainer } from '@material-ui/core';
import { Table } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import StarIcon from '@mui/icons-material/Star';
import { yellow } from '@material-ui/core/colors';

function createData(name, rank) {
  return { name, rank};
}

const rows = [
  createData('Centro de Informática', 5.0),
  createData('Shopping', 4.3),
  createData('Praça da Paz', 4.0),
  createData('UFPB', 3.9),
  createData('UNIPE', 3.8),
  createData('Centro de Informática', 5.0),
  createData('Shopping', 4.3),
  createData('Praça da Paz', 4.0),
  createData('UFPB', 3.9),
  createData('UNIPE', 3.8),
];

function Ranking() {

  return (
    <div>
    <div className='rankingHeader'>
    <h className='rankingName'> Ranking </h>
    </div>
    <Paper className='ranking'>
    <TableContainer> 
      <Table sx={{ minWidth: 300 }}  aria-label='simple table'>
        <TableBody >
          {rows.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell>
                {row.rank}
                <StarIcon sx={{ color: yellow[300], fontSize: 15 }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
    </div>
  );
}

export default Ranking;
