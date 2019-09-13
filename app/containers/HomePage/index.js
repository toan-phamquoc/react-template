/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import Header from 'components/Header';
import HeaderAndSearch from 'components/HeaderAndSearch';
import messages from './messages';

export default function HomePage() {
  return (
    <Fragment>
      <Header />
      <HeaderAndSearch />
    </Fragment>
  );
}
