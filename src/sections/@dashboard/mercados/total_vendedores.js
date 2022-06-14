import { React, useEffect, useState } from 'react';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Box, Card, CardHeader } from '@mui/material';

import { BaseOptionChart } from '../../../components/charts';

import { baseurl } from '../../../lib/settings';
// ----------------------------------------------------------------------

let MC = 3;
let MF = 420;
let FM = 321;
let VINTECINCODEJUNHO = 321;  
let JM = 227;
let SETETABRIL = 351;
let MZ = 201;

export default function Totalvendedores() {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        getConsultas();
    }, []);

    // const getConsultas = async () => {
    //     baseurl.get('api/auth/endpointmercados').then((response) => {
    //         setRows(response.data);
    //     });
    // };
    // {
    //     rows.map((requisi, index) => {
    //         if (requisi.codmercado === 'MC') {
    //             MC += 2;
    //         } else if (requisi.codmercado === 'MF') {
    //             MF += 2;
    //         } else if (requisi.codmercado === 'FM') {
    //             FM += 1;
    //         } else if (requisi.codmercado === 'JM') {
    //             JM += 2;
    //         } else if (requisi.codmercado === '7A') {
    //             SETETABRIL += 1;
    //         } else if (requisi.codmercado === 'MZ') {
    //             MZ += 15;
    //         } 
    //     });
    // }

    const grafico = [{ data: [MC,VINTECINCODEJUNHO, MF, FM, JM, SETETABRIL, MZ] }];

    const chartOptions = merge(BaseOptionChart(), {

        xaxis: {
            categories: [
                'Mercado Central (MC)',
                'Mercado Feira (MF)',
                '25 de Junho (25J)',
                'Francisco Manyamga (FM)',
                'Josina Machel (JM)',
                '7 de Abril (7A)',
                'Mercado Zagarto (MZ)',
            ]
        }
    });

    return (
        <>
            <br />
            <br />
            <br />
            <Card>
                <CardHeader title="Mercados " subheader="Total de vendedores por mercado" />
                <Box sx={{ mx: 3 }} dir="ltr">
                    <ReactApexChart type="bar" series={grafico} options={chartOptions} height={364} />
                </Box>
            </Card>
        </>

    );
}
