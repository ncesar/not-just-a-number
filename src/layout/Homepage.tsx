import React from 'react';
import { Header } from '../components/Header';
import { People } from '../components/PeopleComponent';

export const Homepage = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <People />
    </React.Fragment>
  );
};
