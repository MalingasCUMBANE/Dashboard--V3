/* eslint-disable */

import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { useTheme, styled } from '@mui/material/styles';
import { Card, CardHeader } from '@mui/material';
// utils
import { baseurl } from '../../../lib/settings';
import { React, useEffect, useState } from 'react';
import { fNumber } from '../../../utils/formatNumber';
//
import { BaseOptionChart } from '../../../components/charts';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 372;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(5),
  '& .apexcharts-canvas svg': { height: CHART_HEIGHT },
  '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
    overflow: 'visible'
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    alignContent: 'center',
    position: 'relative !important',
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`
  }
}));

// ----------------------------------------------------------------------

export default function AppCurrentVisits() {
  useEffect(() => {
    getConsultas();
  }, []);

  const theme = useTheme();
  const [rows, setRows] = useState([]);
  var contMovitel = 0;
  var contVodacom = 0;
  var contTmcel = 0;
  const getConsultas = async () => {
    baseurl.get('api/auth/ussd').then((response) => {
      setRows(response.data);
    });
  };

  {
    rows.map((requisi, index) => {
      console.log('Inicio');
      if (requisi.phone.substring(0, 5) == '25887' || requisi.phone.substring(0, 5) == '25886') {
        contMovitel++;
        console.log('Resultado Cont contMovitel-->', contMovitel);
      } else if (
        requisi.phone.substring(0, 5) == '25884' ||
        requisi.phone.substring(0, 5) == '25885'
      ) {
        contVodacom++;
        console.log('Resultado Cont contVodacom-->', contVodacom);
      } else if (
        requisi.phone.substring(0, 5) == '25882' ||
        requisi.phone.substring(0, 5) == '25883'
      ) {
        contTmcel++;
        console.log('Resultado Cont contTmcel-->', contTmcel);
      }
    });
  }

  let a = contMovitel;
  let b = contVodacom;
  let c = contTmcel;
  const CHART_DATA = [a, b, c];

  const chartOptions = merge(BaseOptionChart(), {
    colors: [
      theme.palette.primary.main,
      theme.palette.info.main,
      theme.palette.warning.main,
      theme.palette.error.main
    ],
    labels: ['Movitel', 'Vodacom', 'Tmcel'],
    stroke: { colors: [theme.palette.background.paper] },
    legend: { floating: true, horizontalAlign: 'center' },
    dataLabels: { enabled: true, dropShadow: { enabled: false } },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: (seriesName) => `#${seriesName}`
        }
      }
    },
    plotOptions: {
      pie: { donut: { labels: { show: false } } }
    }
  });

  return (
    <Card>
      <CardHeader title="Operações por Operadora" />
      <ChartWrapperStyle dir="ltr">
        <ReactApexChart type="pie" series={CHART_DATA} options={chartOptions} height={280} />
      </ChartWrapperStyle>
    </Card>
  );
}
