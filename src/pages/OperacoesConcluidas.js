import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';

// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  Box,
  Grid
} from '@mui/material';
import { baseurl } from '../lib/settings';

// components
import Page from '../components/Page';

import Consultas from '../sections/@dashboard/cardsoperacoesconcluidas/Consultas';
import TotalPagamentos from '../sections/@dashboard/cardsoperacoesconcluidas/TotalPagamentos';
import ValorTotal from '../sections/@dashboard/cardsoperacoesconcluidas/ValorTotal';
import { AppCurrentVisits } from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
export default function OperacoesConcluidas() {
  const [rows, setRows] = useState([]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'phone', headerName: 'Celular', width: 130 },
    { field: 'date', headerName: 'Data', width: 140 },
    { field: 'trasantion_type', headerName: 'Operação', width: 370 }
  ];

  const getConsultas = async () => {
    baseurl.get('api/auth/ussd').then((response) => {
      setRows(response.data);
    });
  };

  useEffect(() => {
    getConsultas();
  }, []);

  return (
    <Page title="User | Minimal-UI">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Consultas />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TotalPagamentos />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ValorTotal />
          </Grid>
        </Grid>
      </Container>
      <br />
      <br />

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={8}>
          <div style={{ height: 400, width: '100%' }}>
            <h3>Operações Concluídas</h3>
            <br />
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AppCurrentVisits />
        </Grid>
      </Grid>
    </Page>
  );
}
