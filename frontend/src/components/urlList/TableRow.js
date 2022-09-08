import axios from 'axios';
import React from 'react';
import DetailsModal from './modals/DetailsModal';
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

    this.setState({
      status: data.status,
      response: data.data,
    });
  }

  componentDidMount() {
    const twoMin = 120000;

    this.interval = setInterval(() => {
      this.script();
    }, twoMin)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { data: { url, id }, index } = this.props;
    const { status, response } = this.state;

      return (
        <tr>
        <th scope="row">{ index+1 }</th>
        <td>{ url }</td>
        <td>{ status }</td>
        <td>
        <button
              type="button"
              className="btn btn-info"
              data-bs-toggle="modal"
              data-bs-target={"#detailsModal"+id}
              // onClick={ () => this.getUrlDetails(urlId)}
            >
              Details
            </button>
            <DetailsModal details={ response } urlId={ id } />
        </td>
        <td>
          <TableActionButtons urlId={ id } url={url} />
        </td>
        </tr>
      );
  }
}

export default TableRow;
