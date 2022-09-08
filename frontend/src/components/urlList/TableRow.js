import axios from 'axios';
import React from 'react';
import TableActionButtons from './TableActionButtons';

class TableRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: undefined,
      response: undefined,
    }
  }

  script = async () => {
    const { data: { url } } = this.props;

    const data = await axios.get(url);
    console.log(url);
    console.log(data.status);

    this.setState({
      status: data.status,
      response: data.data,
    });
  }

  componentDidMount() {
    this.script();
  }

  render() {
    const { data: { url, id } } = this.props;
    const { status, response } = this.state;

      return (
        <tr>
        <th scope="row">{ id }</th>
        <td>{ url }</td>
        <td>{ status }</td>
        <td>DETAILS</td>
        <td>
          <TableActionButtons urlId={ id } url={url} />
        </td>
        </tr>
      );
  }
}

export default TableRow;
