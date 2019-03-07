import * as React from 'react';
import { FormEvent } from 'react';

import Repositories from '../../models/Repositories';

import { Item } from './styles';

interface IProps {
  items: Repositories[];
  onRepositoryClicked: (event: FormEvent<HTMLElement>) => void;
}

interface IState {}

export default class RepositoriesList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const {
      items,
      // onRepositoryClicked,
    } = this.props;

    return (
      <ul>
        {(items.length > 0) && items.map((item) => (
          <Item
            key={item.id}
            data-id={item.id}
          >
            {item.name}
          </Item>
        ))}
        {!items.length && (
          <div>No result</div>
        )}
      </ul>
    );
  }
}
