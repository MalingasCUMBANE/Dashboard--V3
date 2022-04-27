/* eslint-disable */
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function Blog() {
  return (
    <Page title="Dashboard: Blog | Minimal-UI">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Relatorios
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          <Typography variant="h4" gutterBottom>
            Área em desenvolvimento
          </Typography>
        </Grid>
      </Container>
    </Page>
  );
}
