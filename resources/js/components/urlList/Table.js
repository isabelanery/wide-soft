import React from 'react';
import ReactDOM from 'react-dom';

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            urls: [],
        }
    }

    getUrlList = async () => {
        const { data } = await axios.get('/api/urls');

        console.log(data);
    }

    componentDidMount() {
        this.getUrlList();
    }

    render() {
        return (
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">URL</th>
                                <th scope="col">Response</th>
                                <th scope="col">HTML</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Table;
