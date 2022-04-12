import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { baseurl } from '../../../lib/settings';

export default function Tabelaoperacoesconcluidas() {
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
  );
}
