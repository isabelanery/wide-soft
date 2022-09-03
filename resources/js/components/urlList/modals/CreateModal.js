import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CreateModal extends React.Component {
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
        const expression = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
        const regex = new RegExp(expression);
        const isUrlValid = regex.test(url);
        
        this.setState({ disableBtn: !isUrlValid });
      });
    }
    

    createUrl = async () => {
      const { url } = this.state;

      await axios.post('api/urls/', { url });
      
      toast.success("Url Saved Succesfully")

      setTimeout(() => {
        location.reload();
      }, 2500)

    }

    render() {
      const { disableBtn } = this.state;

        return (
          <>
            <div className="row text-right mb-3 pb-3">
              <button 
                className="btn btn-info text-right col-3 offset-md-9"
                data-bs-toggle="modal"
                data-bs-target="#createModal">
                  Add new URL
                </button>
            </div>
            <div className="modal fade" id={"createModal"} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Create</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="modal-body">

                    <form>
                      <div className="form-group">
                        <label htmlFor="inputCreateUrl">URL address</label>
                        <input 
                          type="text"
                          name="url"
                          className="form-control"
                          id="inputCreateUrl"
                          placeholder="New URL" 
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
                      onClick={ () => this.createUrl() }
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    }
}

export default CreateModal;
