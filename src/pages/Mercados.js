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

// ----------------------------------------------------------------------
export default function Mercados() {
    return (
        <Page title="Dashboard | Mercados">
            <Container >
                <Box sx={{ pb: 10 }}>
                    <Typography variant="h4">Mercados</Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={2} sm={8} md={5}>
                        <CardAcessosMercados />
                    </Grid>
                    <Grid item xs={2} sm={8} md={5}>
                        <CardValorTotalMercados />
                    </Grid>
                    <Grid item xs={2} sm={8} md={16}>
                        <TabelaInfo />
                    </Grid>
                    <br />
                </Grid>
            </Container>
        </Page>

    );
}
