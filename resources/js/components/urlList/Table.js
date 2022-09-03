import React from 'react';
import TableRow from './TableRow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
                <ToastContainer />
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">URL</th>
                                <th scope="col">Response</th>
                                <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    urlsList.map((url, i) => <TableRow key={ i } data={ url } updateList={ this.getUrlList } />)
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
