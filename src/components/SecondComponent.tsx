import * as React from 'react';

export interface IAppProps {

    name: string

}

export default function SecondComponent (props: IAppProps) {
  return (
    <div>
      <p>Meu segundo componente</p>
      <p>O nome dele é {props.name}</p>
    </div>
  );
}
