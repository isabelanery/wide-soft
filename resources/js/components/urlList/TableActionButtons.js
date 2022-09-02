import React from 'react';
import UpdateModal from './modals/UpdateModal';

class TableActionButtons extends React.Component {
    constructor(props) {
        super(props);
    }

    getUrlDetails = async () => {

    }

    render() {
      const { urlId } = this.props;
        return (
          <div className="btn-group" role="group">
            
            <button 
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#updateModal"
              onClick={ () => this.getUrlDetails(urlId)}
            >
              Update
            </button>
            <UpdateModal />

            <button type="button" className="btn btn-danger">Delete</button>
          </div>
        );
    }
}

export default TableActionButtons;
