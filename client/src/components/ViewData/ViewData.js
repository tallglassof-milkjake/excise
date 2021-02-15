import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../utils/API';
import './ViewData.css';

class ViewData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            data: {},
            headings: this.props.headings
        }
    }

    componentDidMount() {
        
        this.fetchData()
        
        console.log(this.state.data)
    }

    fetchData = () => {
        API.getExciseById(this.props.id.id)
        .then((response) => {
            console.log(response.data)
            this.setState({
                data: response.data
            })
        })
        console.log("hello out there")
        console.log(this.state.data)
    }

    

    render() {
        console.log(this.state.data)
    return (
        <div className='row'>
            <div className='col d-flex align-items-stretch'>
                <div className='card view-data-card'>
                    <h1 className='card-title'>
                        Product: {this.state.data.product}
                    </h1>
                    <p className='card-text'>
                        Date: {this.state.data.date}
                    </p>
                    <p className='card-text'>
                        Description: {this.state.data.description}
                    </p>
                </div>

                <div className='card view-data-card'>
                    <h1 className='card-title'>
                        Excise Numbers
                    </h1>
                    <p className='card-text'>
                        Vessel: {this.state.data.vessel_id}
                    </p>
                    <p className='card-text'>
                        Volume: {this.state.data.volume}L
                    </p>
                    <p className='card-text'>
                        Abv: {this.state.data.abv}%
                    </p>
                    <p className='card-text'>
                        LaLs: {this.state.data.lals}
                    </p>
                </div>

                <div className='card view-data-card'>
                    <h1 className='card-title'>
                        Other Information
                    </h1>
                    <p className='card-text'>
                        Employee: {this.state.data.employee}
                    </p>
                    <p className='card-text'>
                        Notes: {this.state.data.notes}
                    </p>
                </div>
            </div>
        </div>
    )
    }
}

export default ViewData;