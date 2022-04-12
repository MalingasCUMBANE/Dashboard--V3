import * as React from 'react';
import { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import { baseurl } from "../../lib/settings";
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { baseurl } from '../../../lib/settings';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function Tabelaoperacoesnaoconcluidas() {
  const [requisicoes, setRequisicoes] = useState([]);

  const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: 'phone', headerName: 'Celular', width: 130 },
    { field: 'date', headerName: 'Data', width: 140 },
    { field: 'trasantion_type', headerName: 'Operacao', width: 370 }
  ];

  const getRequisicoes = async () => {
    baseurl.get('api/auth/all_requests').then((response) => {
      setRequisicoes(response.data);
    });
  };

  useEffect(() => {
    getRequisicoes();
  }, []);

  return (
    <div style={{ height: 500, width: '100%', paddingBottom: '30px', paddingTop: '10px' }}>
      <h3>Operações nao concluídas</h3>
      <br />
      <DataGrid
        rows={requisicoes}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[5]}
        checkboxSelection
        components={{
          Toolbar: CustomToolbar
        }}
      />
    </div>
  );
}
