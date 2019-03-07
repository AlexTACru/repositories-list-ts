import * as React from 'react';

import SearchRepositories from '../../containers/SearchRepositories';
import RepositoriesList from '../../containers/RepositoriesList';

import { Container, H1 } from './styles';

const App = () => {
  return (
    <Container>
      <H1>Repositories list</H1>
      <SearchRepositories />
      <RepositoriesList />
    </Container>
  );
};

export default App;
