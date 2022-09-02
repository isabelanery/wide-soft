import React from 'react';
import ReactDOM from 'react-dom';
import TableRow from './TableRow';

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            urlsList: [],
        }
    }

    getUrlList = async () => {
        const { data } = await axios.get('/api/urls');

        this.setState({ urlsList: data })
    }

    componentDidMount() {
        this.getUrlList();
    }

    render() {
        const { urlsList } = this.state;

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
                                {
                                    urlsList.map((url) => <TableRow data={url} />)
                                }
                                
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
