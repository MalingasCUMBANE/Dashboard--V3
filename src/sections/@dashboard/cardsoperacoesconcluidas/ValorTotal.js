// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
import PaymentsIcon from '@mui/icons-material/Payments';
// utils

import { React, useEffect, useState } from 'react';
import { baseurl } from '../../../lib/settings';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.warning.darker,
  backgroundColor: theme.palette.warning.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.warning.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.warning.dark, 0)} 0%, ${alpha(
    theme.palette.warning.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

export default function AppItemOrders() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    baseurl.get('api/auth/ussd/').then((response) => {
      setRows(response.data);
    });
  }, []);

  let a = rows.length;

  console.log(a);

  a *= 3;
  // armazena o valor da variavel TOTAL
  return (
    <RootStyle>
      <IconWrapperStyle>
        <PaymentsIcon />
      </IconWrapperStyle>
      <Typography variant="h3">{a} MT</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Valor Total
      </Typography>
    </RootStyle>
  );
}
