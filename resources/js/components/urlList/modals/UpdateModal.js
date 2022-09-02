import React from 'react';

class UpdateModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      const { url, urlId, updateList } = this.props;
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
                      />
                    </div>
                  </form>
                </div>
                    
                <div className="modal-footer">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={ () => {}}
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
