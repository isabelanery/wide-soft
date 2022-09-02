import React from 'react';

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
        const expression = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
        const regex = new RegExp(expression);
        const isUrlValid = regex.test(url);
        
        console.log(isUrlValid);
        this.setState({ disableBtn: !isUrlValid });
      });
    }
    

    updateUrl = async (urlId) => {
      const { url } = this.state;

      await axios.put('api/urls/'+urlId, { url });
      
      location.reload();
    }

    render() {
      const { url, urlId, updateList } = this.props;
      const { disableBtn } = this.state;

        return (
          <div className="modal fade" id="updateModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
