import React from 'react';
import Home from '../components/home';
import ResumeEN from '../data/en/resume';
import ResumeES from '../data/es/resume';

import { useLocalization } from 'gatsby-theme-i18n';

const IndexPage = () => {
  const { locale } = useLocalization();
  const resume = locale === 'es' ? ResumeES : ResumeEN;

  return <Home resume={resume} locale={locale} />;
};

export default IndexPage;
