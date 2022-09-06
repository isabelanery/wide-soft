import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import config from '../../../../config.json';

class DeleteModal extends React.Component {
    deleteUrl = async (urlId) => {
      await axios.delete(config.API_URL+'api/urls/'+urlId);
      
      toast.error("Url Deleted Succesfully")

      setTimeout(() => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      }, 2500)
    }

    render() {
      const { url, urlId } = this.props;

        return (
          <div className="modal fade" id={"deleteModal"+urlId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Delete</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  Are you sure you want to delete this? 
                  { url }
                </div>
                    
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  
                  <button
                    type="submit"
                    className="btn btn-danger"
                    onClick={ () => this.deleteUrl(urlId) }
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default DeleteModal;
