import React from 'react';
import Home from '../components/home';
import Resume from '../data/es/qds';

import { useLocalization } from 'gatsby-theme-i18n';

const IndexQDSPage = () => {
  const { locale } = useLocalization();

  return <Home resume={Resume} locale={'es'} />;
};

export default IndexQDSPage;
