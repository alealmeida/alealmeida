import React from 'react';
import {Contexto} from './SectionsContexto';

class Botao extends React.Component {
  render() {
    let props = this.props;
    let data = this.context;
    return (
      <button
        {...props}
        style={{backgroundColor: data.background}}
      />
    );
  }
}
Botao.contextType = Contexto;

export default Botao;