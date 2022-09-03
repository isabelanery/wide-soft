import React from 'react';
import UpdateModal from './modals/UpdateModal';
import DeleteModel from './modals/DeleteModel';

class TableActionButtons extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          urlDetails: undefined,
        }
    }

    getUrlDetails = async (urlId) => {
      const { data } = await axios.get('/api/urls/'+urlId);
      this.setState({ urlDetails: data[0] });
    }

    render() {
      const { urlId, url, updateList } = this.props;
      const { urlDetails } = this.state;

        return (
          <div className="btn-group" role="group">
            
            <button 
              type="button"
              className="btn btn-info"
              data-bs-toggle="modal"
              data-bs-target={"#updateModal"+urlId}
              onClick={ () => this.getUrlDetails(urlId)}
            >
              Update
            </button>
            <UpdateModal updateList={ updateList } url={ url } urlId={ urlId } />

            <button
              type="button"
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target={"#deleteModal"+urlId}
              onClick={ () => this.getUrlDetails(urlId)}
            >
              Delete
            </button>
            <DeleteModel />

          </div>
        );
    }
}

export default TableActionButtons;
