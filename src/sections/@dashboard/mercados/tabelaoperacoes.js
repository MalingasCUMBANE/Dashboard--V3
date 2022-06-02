import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
// material
import { Container, Grid } from '@mui/material';
import Page from '../../../components/Page';
import { baseurl } from '../../../lib/settings';

function CustomToolbar() {
    return (
        <GridToolbarContainer>
            <GridToolbarExport />
        </GridToolbarContainer>
    );
}
// ----------------------------------------------------------------------
export default function Tabelaoperacoesmercados() {
    const [rows, setRows] = useState([]);

    const columns = [
        { field: 'phone', headerName: 'Celular', width: 130 },
        { field: 'date', headerName: 'Data', width: 120 },
        { field: 'amout', headerName: 'Valor (MT)', width: 100 },
        { field: 'trasantion_type', headerName: 'Operação', width: 270 },
        { field: 'codmercado', headerName: 'Cod. Mercado', width: 150 },
    ];

    const getConsultas = async () => {
        baseurl.get('api/auth/payments/mercados/all').then((response) => {
            setRows(response.data);
        });
    };

    useEffect(() => {
        getConsultas();
    }, []);

    return (
        <Page title="e-STM">
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={12}>
                    <div style={{ height: 500, width: '100%', paddingBottom: '30px', paddingTop: '10px' }}>
                        <h3>Operações Concluídas</h3>
                        <br />
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            components={{
                                Toolbar: CustomToolbar
                            }}
                        />
                    </div>
                </Grid>
            </Grid>
        </Page>
    );
}