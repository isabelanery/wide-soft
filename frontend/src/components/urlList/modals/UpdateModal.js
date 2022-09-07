import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import config from '../../../config.json';
import { validateUrl } from '../../../helpers/validate';

class UpdateModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          url: '',
          disableBtn: true,
        }
    }

    getInputValue = ({ target }) => {
      const { name, value } = target;

      this.setState({ [name]: value }, () => {
        const { url } = this.state;
        const isUrlValid = validateUrl(url);
        
        this.setState({ disableBtn: !isUrlValid });
      });
    }
    

    updateUrl = async (urlId) => {
      const { url } = this.state;

      await axios.put(config.API_URL+'api/urls/'+urlId, { url });
      
      toast.success("Url Updated Succesfully")

      setTimeout(() => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      }, 2500)

    }

    render() {
      const { url, urlId } = this.props;
      const { disableBtn } = this.state;

        return (
          <div className="modal fade" id={"updateModal"+urlId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Update</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">

                  <form>
                    <div className="form-group">
                      <label htmlFor={"inputUrl"+urlId}>URL address</label>
                      <input 
                        type="text"
                        name="url"
                        className="form-control"
                        id={"inputUrl"+urlId}
                        placeholder={ url } 
                        onChange={ this.getInputValue }
                      />
                    </div>
                  </form>
                </div>
                    
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={ disableBtn }
                    onClick={ () => this.updateUrl(urlId) }
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default UpdateModal;
