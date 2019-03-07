import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IGetRepositoriesAction, getRepositories } from "../actions/repositories";
import SearchRepositoriesList from '../components/SearchRepositories/index';

const mapDispatchToProps = (dispatch: Dispatch<IGetRepositoriesAction>) => ({
  handleSubmit: (name: string) => {
    dispatch(getRepositories(name));
  }
});

export default connect<any, any, any>(null, mapDispatchToProps)(SearchRepositoriesList);
