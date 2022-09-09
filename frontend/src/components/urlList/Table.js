import React from 'react';
import TableRow from './TableRow';
import { ToastContainer /* , toast */ } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateModal from './modals/CreateModal';
import axios from 'axios';
import config from '../../config.json';
import AppContext from '../context/AppContext';

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            urlsList: [],
        }
    }

    getUrlList = async () => {
        const userId = localStorage.getItem('userId');

        const { data } = await axios.get(config.API_URL+'/users/'+userId);

        this.setState({ urlsList: data[0].urls })
    }

    componentDidMount() {
        this.getUrlList();
    }

    render() {
        const { urlsList } = this.state;

        return (
            <div className="container">
                <ToastContainer />
                <CreateModal />
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">URL</th>
                                <th scope="col">Status</th>
                                <th scope="col">Response</th>
                                <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    urlsList.map((url, i) => <TableRow key={ i } data={ url } index={ i } />)
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

CreateModal.contextType = AppContext;

export default Table;