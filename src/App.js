// routes
import React, { useEffect, useState } from 'react';
import Router from './routes';

// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
import apirequest, { baseurl } from './lib/settings';
// ----------------------------------------------------------------------

export default function App() {
  const [rows, setRows] = useState([]);

  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <Router />
    </ThemeConfig>
  );
}
