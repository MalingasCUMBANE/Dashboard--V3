// material
import { Container, Grid } from '@mui/material';
// components
import Page from '../components/Page';
import Consultas from '../sections/@dashboard/cardsoperacoesnaoconcluidas/Consultas';
import VisitasporOperadoraPizza from '../sections/@dashboard/cardsoperacoesnaoconcluidas/VisitasporOperadoraPizza';
import Tabelaoperacoesnaoconcluidas from '../sections/@dashboard/operacoes/Tabelaoperacoesnaoconcluidas';

// ----------------------------------------------------------------------

export default function OperacoesNaoConcluidas() {
  return (
    <Page title="e-STM">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={2}>
            .
          </Grid>
          <Grid item xs={12} sm={10} md={7}>
            <Consultas />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            .
          </Grid>
        </Grid>
      </Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={8}>
          <Tabelaoperacoesnaoconcluidas />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <VisitasporOperadoraPizza />
        </Grid>
      </Grid>
    </Page>
  );
}
