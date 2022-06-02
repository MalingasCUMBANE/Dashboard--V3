// material
import { Box, Grid, Container, Typography } from '@mui/material';
import VisitasporOperadoraPizza from '../sections/@dashboard/cardsoperacoesnaoconcluidas/VisitasporOperadoraPizza';
import * as echarts from 'echarts';

// components
import Page from '../components/Page';
import {
    AppNewUsers,

} from '../sections/@dashboard/app';
import Tabelaoperacoesconcluidas from '../sections/@dashboard/operacoes/Tabelaoperacoesconcluidas';

// ----------------------------------------------------------------------


export default function Mercados() {
    return (
        <Page title="Dashboard | Mercados">
            <Container maxWidth="xl">
                <Box sx={{ pb: 5 }}>
                    <Typography variant="h4">Mercados</Typography>
                </Box>
                <Grid container spacing={3}>

                    <Grid item xs={12} sm={6} md={3}>
                        <AppNewUsers />
                    </Grid>
                    <br />
                    <Grid item xs={12} sm={6} md={3}>
                        <AppNewUsers />
                    </Grid>
                    <br />
                </Grid>
            </Container>
        </Page>

    );
}
