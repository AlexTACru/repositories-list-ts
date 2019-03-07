import * as React from "react";
import { ChangeEvent, FormEvent } from "react";

import { Form, Button, Input } from './styles';

interface IProps {
  handleSubmit: (value: string) => void;
}
interface IState {
  value: string;
}

export default class SearchRepositoriesList extends React.Component<IProps, IState> {
  public state = {
    value: "",
  };

  private updateValue = (ev: ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.currentTarget;
    this.setState({ value });
  };

  private handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    const { value } = this.state;
    const { handleSubmit } = this.props;

    ev.preventDefault();

    if (!value.trim()) return;

    handleSubmit(value);
  };

  render() {
    const { value } = this.state;
    const { handleSubmit, updateValue } = this;

    return (
      <Form onSubmit={handleSubmit}>
        <Input type="text" value={value} onChange={updateValue}/>
        <Button type="submit">Search</Button>
      </Form>
    );
  }
}
