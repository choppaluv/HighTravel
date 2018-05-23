import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
const ReactDataGrid = require('react-data-grid');

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

export class Budget extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.createRows();
    this._columns = [
      { key: 'id', name: 'ID' },
      { key: 'contents', name: 'Contents' },
      { key: 'money', name: 'Money' } ];

    this.state = null;
  }

  createRows = () => {
    let rows = [];
    var total = 0;
    for (let i = 1; i < 5; i++) {
      rows.push({
        id: i,
        contents: 'ticket'+i,
        money: i * 100000
      });
      total += i*100000;
    }
    rows.push({id:""});
    rows.push({id: 'Total', money: total});

    this._rows = rows;
  };

  rowGetter = (i) => {
    return this._rows[i];
  };

  render() {
    return  (
      <ReactDataGrid
        columns={this._columns}
        rowGetter={this.rowGetter}
        rowsCount={this._rows.length}
        minHeight={500} />);
  }
}

