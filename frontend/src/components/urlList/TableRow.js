import React from 'react';
import TableActionButtons from './TableActionButtons';

class TableRow extends React.Component {
    render() {
      const { data: { url, id } } = this.props;
        return (
          <tr>
          <th scope="row">{ id }</th>
          <td>{ url }</td>
          <td>STATUS</td>
          <td>DETAILS</td>
          <td>
            <TableActionButtons urlId={ id } url={url} />
          </td>
          </tr>
        );
    }
}

export default TableRow;
