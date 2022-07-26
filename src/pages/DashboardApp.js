// material
import { React, useEffect, useState } from 'react';
import { Box, Grid, Container, Typography, LinearProgress } from '@mui/material';
import VisitasporOperadoraPizza from '../sections/@dashboard/cardsoperacoesnaoconcluidas/VisitasporOperadoraPizza';
import * as echarts from 'echarts';

// components
import Page from '../components/Page';
import {
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppNewsUpdate,
  AppWeeklySales,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppCurrentSubject,
  AppConversionRates
} from '../sections/@dashboard/app';
import Tabelaoperacoesconcluidas from '../sections/@dashboard/operacoes/Tabelaoperacoesconcluidas';
import Tabelaoperacoesnaoconcluidas from '../sections/@dashboard/operacoes/Tabelaoperacoesnaoconcluidas';
import Plano2022 from '../sections/@dashboard/plano2022/plano2022';
import { baseurl } from 'src/lib/settings';
// ----------------------------------------------------------------------


export default function DashboardApp() {
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setLoading(true)
    baseurl.get('api/auth/payments/').then((response) => {
      setRows(response.data);
      setLoading(false)
    });
    
  }, []);

  const TOTAL = rows.length;


  return (
    <>
      {loading && <><LinearProgress /></> || <>
        <Page title="Dashboard | Minimal-UI">
          <Container maxWidth="xl">


            <Box sx={{ pb: 5 }}>
              <Typography variant="h4">Resumo Geral</Typography>
            </Box>
            <Grid container spacing={3}>

              <Grid item xs={12} sm={6} md={3}>
                <AppWeeklySales total={TOTAL} />
              </Grid>
              <br />
              <Grid item xs={12} sm={6} md={3}>
                <AppNewUsers />
              </Grid>
              <br />
              <Grid item xs={12} sm={6} md={3}>
                <AppItemOrders />
              </Grid>
              <br />
              {/* <Grid item xs={12} sm={6} md={3}>
            <AppBugReports />
          </Grid> */}
              <br />
              <Grid item xs={12} md={6} lg={8}>
                <Tabelaoperacoesconcluidas />
              </Grid>
              <br />
              <Grid item xs={12} md={6} lg={4}>
                <AppCurrentVisits />
              </Grid>
              <br />
              <Grid item xs={12} md={6} lg={8}>
                <Tabelaoperacoesnaoconcluidas />
              </Grid>
              <br />
              <Grid item xs={12} md={6} lg={4}>
                <VisitasporOperadoraPizza />
              </Grid>
            </Grid>
          </Container>

          <Container maxWidth="xl">
            <br />
            <br />
            <br />
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={8}>
                <AppConversionRates />
              </Grid>
              {/* <Grid item xs={12} sm={6} md={12}>
            <Plano2022 />
          </Grid> */}
              <br />
            </Grid>
          </Container>
          {/* <Container maxWidth="xl">
        <Box sx={{ pb: 5, pt: 10 }}>
          <Typography variant="h4">Graficos abaixo em desenvolvimento</Typography>
        </Box>
        <Grid container spacing={3}>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid>
        </Grid>
      </Container> */}
        </Page>
      </>}
    </>


  );
}
