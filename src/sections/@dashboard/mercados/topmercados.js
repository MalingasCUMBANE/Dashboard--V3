import { React, useEffect, useState } from 'react';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Box, Card, CardHeader } from '@mui/material';

import { BaseOptionChart } from '../../../components/charts';

import { baseurl } from '../../../lib/settings';
// ----------------------------------------------------------------------

let MC = 0;
let MF = 0;
let FM = 0;
let JM = 0;
let SETETABRIL = 0;
let MZ = 0;
var amout = 0;

export default function AppConversionRates() {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        getConsultas();
    }, []);

    const getConsultas = async () => {
        baseurl.get('api/auth/endpointmercados').then((response) => {
            setRows(response.data);
        });
    };
    {
        rows.map((requisi, index) => {
            if (requisi.codmercado === 'MC') {
                MC += 1;
            } else if (requisi.codmercado === 'MF') {
                MF += 1;
            } else if (requisi.codmercado === 'FM') {
                FM += 1;
            } else if (requisi.codmercado === 'JM') {
                JM += 1;
            } else if (requisi.codmercado === '7A') {
                SETETABRIL += 1;
            } else if (requisi.codmercado === 'MZ') {
                MZ += 1;
            } 
        });
    }

    const grafico = [{ data: [MC, MF, FM, JM, SETETABRIL,MZ] }];

    const chartOptions = merge(BaseOptionChart(), {

        xaxis: {
            categories: [
                'Mercado Central (MC)',
                'Mercado Feira (MF)',
                'Francisco Manyamga (FM)',
                'Josina Machel (JM)',
                '7 de Abril (7A)',
                'Mercado (MZ)',
            ]
        }
    });

    return (
        <>
            <br />
            <br />
            <br />
            <Card>
                <CardHeader title="Mercados " subheader="Transações " />
                <Box sx={{ mx: 3 }} dir="ltr">
                    <ReactApexChart type="bar" series={grafico} options={chartOptions} height={364} />
                </Box>
            </Card>
        </>

    );
}
