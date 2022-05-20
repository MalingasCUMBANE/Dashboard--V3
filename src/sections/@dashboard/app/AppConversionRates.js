import { React, useEffect, useState } from 'react';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Box, Card, CardHeader } from '@mui/material';

import { BaseOptionChart } from '../../../components/charts';

import { baseurl } from '../../../lib/settings';
// ----------------------------------------------------------------------

let ControlNIC = 0;
let ControlInfoUteis = 0;
let ControlDenuncias = 0;
let ControlFiscalizacao = 0;
let ControlDadosEstatisticos = 0;
let ControlPagamentosDiarios = 0;
let ControlNotarios = 0;
let validateNIC = 0;

export default function AppConversionRates() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    getConsultas();
  }, []);

  const getConsultas = async () => {
    baseurl.get('api/auth/all_requests').then((response) => {
      setRows(response.data);
    });
  };
  {
    rows.map((requisi, index) => {
      if (requisi.trasantion_type === 'validateNIC') {
        validateNIC += 1;
      } else if (
        requisi.trasantion_type === 'ControlNIC'
      ) {
        ControlNIC += 1;
      } else if (
        requisi.validateNIC === 'ControlInfoUteis'
      ) {
        ControlInfoUteis += 1;
      } else if (
        requisi.validateNIC === 'ControlDenuncias'
      ) {
        ControlDenuncias += 1;
      } else if (
        requisi.trasantion_type === 'ControlFiscalizacao'
      ) {
        ControlFiscalizacao += 1;
      } else if (
        requisi.trasantion_type === 'ControlDadosEstatisticos'
      ) {
        ControlDadosEstatisticos += 1;
      }
      else if (
        requisi.trasantion_type === 'ControlPagamentosDiarios'
      ) {
        ControlPagamentosDiarios += 1;
      } else if (
        requisi.trasantion_type === 'ControlNotarios'
      ) {
        ControlNotarios += 1;
      }
      else if (
        requisi.trasantion_type === 'validateNIC'
      ) {
        validateNIC += 1;
      }
    });
  }

  const CHART_DATA = [{ data: [ControlNIC, ControlInfoUteis, ControlDenuncias, ControlFiscalizacao, ControlDadosEstatisticos, ControlPagamentosDiarios, validateNIC] }];

  const chartOptions = merge(BaseOptionChart(), {

    xaxis: {
      categories: [
        'Esqueci NIC',
        'Informações Úteis',
        'Denúncias',
        'Fiscalização',
        'Dados Estatísticos',
        'Pagamentos Diários',
        'Operações com NIC',
      ]
    }
  });

  return (
    <Card>
      <CardHeader title="MENU INICIAL " subheader="OPERAÇÕES REALIZADAS" />
      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart type="bar" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
