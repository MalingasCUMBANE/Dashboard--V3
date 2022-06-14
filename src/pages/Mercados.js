// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {
    AppNewUsers,

} from '../sections/@dashboard/app';
import TabelaInfo from '../sections/@dashboard/mercados/tabelaoperacoes';
import CardAcessosMercados from 'src/sections/@dashboard/mercados/cardtotalacessos';
import CardValorTotalMercados from 'src/sections/@dashboard/mercados/cardtotalvalor';
import Tabelaoperacoesmercados from '../sections/@dashboard/mercados/topmercados';
import Totalvendedores from '../sections/@dashboard/mercados/total_vendedores';

// ----------------------------------------------------------------------
export default function Mercados() {
    return (
        <Page title="Dashboard | Mercados">
            <Container >
                <Box sx={{ pb: 10 }}>
                    <Typography variant="h4">Mercados</Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={2} sm={8} md={4}>
                        <CardAcessosMercados />
                    </Grid>
                    <Grid item xs={2} sm={8} md={4}>
                        <CardValorTotalMercados />
                    </Grid>
                    <Grid item xs={2} sm={8} md={16}>
                        <TabelaInfo />
                    </Grid>
                    <Grid item xs={2} sm={8} md={16}>
                        <Tabelaoperacoesmercados />
                    </Grid>
                    <Grid item xs={2} sm={8} md={16}>
                        <Totalvendedores />
                    </Grid>
                    <br />
                </Grid>
            </Container>
        </Page>

    );
}
