import React from 'react';
import ReactDOM from 'react-dom';

class TableRow extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
      const { data: { url, id } } = this.props;
        return (
          <tr>
          <th scope="row">{ id }</th>
          <td>{ url }</td>
          <td>Response</td>
          <td>HTML</td>
          </tr>
        );
    }
}

export default TableRow;
