// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react';
import apirequest, { baseurl } from '../../../lib/settings';

// component
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.info.darker,
  backgroundColor: theme.palette.info.lighter
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
  color: theme.palette.info.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.info.dark, 0)} 0%, ${alpha(
    theme.palette.info.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

const TOTAL = 135;

export default function AppNewUsers() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    baseurl.get('api/auth/all_requests').then((response) => {
      setRows(response.data);
    });
  }, []);

  console.log(rows.length);

  const TOTAL = rows.length;

  return (
    <RootStyle>
      <IconWrapperStyle>
        {/* <Iconify icon="ant-design:apple-filled" width={24} height={24} /> */}
        <SearchIcon />
      </IconWrapperStyle>
      <Typography variant="h3">{TOTAL}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Acessos ao 744
      </Typography>
    </RootStyle>
  );
}
