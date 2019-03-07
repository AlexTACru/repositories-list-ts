// import { FormEvent } from 'react';
import { connect } from 'react-redux';
// import { Dispatch } from 'redux';

import { getRepositoriesList } from '../selectors/repositories';
// import { toggleTodo, IToggleTodoAction } from '../actions/repositories';
import { IState } from '../reducers';
import RepositoriesList from '../components/RepositoriesList';

const mapStateToProps = (state: IState) => ({
  items: getRepositoriesList(state),
});

const mapDispatchStateToProps = (/*dispatch: Dispatch<IToggleTodoAction>*/) => ({
  onRepositoryClicked: {},
  // onRepositoryClicked: (event: FormEvent<HTMLElement>) => {
  //   const repositoryId: number = +(event.currentTarget.dataset.id || 0);
  //   dispatch(toggleTodo(repositoryId));
  // },
});

export default connect<any, any, any>(mapStateToProps, mapDispatchStateToProps)(RepositoriesList);
