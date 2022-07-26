import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { baseurl } from '../../../lib/settings';
import { CircularProgress, LinearProgress } from '@mui/material';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function Tabelaoperacoesconcluidas() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: 'phone', headerName: 'Celular', width: 130 },
    { field: 'date', headerName: 'Data', width: 140 },
    { field: 'trasantion_type', headerName: 'Operação', width: 370 }
  ];

  const getConsultas = async () => {
    setLoading(true)
    baseurl.get('api/auth/ussd').then((response) => {
      setRows(response.data);
      setLoading(false)
    });
  };

  useEffect(() => {
    getConsultas();
  }, []);
  return (
    <>

      <div style={{ height: 500, width: '100%', paddingBottom: '30px', paddingTop: '10px' }}>
        <h3>Operações concluídas</h3>
        <br />
        {loading && <CircularProgress /> || <>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={6}
            rowsPerPageOptions={[5]}
            checkboxSelection
            components={{
              Toolbar: CustomToolbar
            }}
          />
        </>}
      </div>


    </>

  );
}
