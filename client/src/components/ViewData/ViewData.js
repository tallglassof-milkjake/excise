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
        <div className='background'>
        <div className='row w-100'>
            <div className='col'>
                <h1 className='display-4'>Data View</h1>
            </div>
        </div>
        <div className='row w-100'>
            <div className='col align-items-stretch'>
                <div className='card view-data-card'>
                    <h1 className='card-heading'>
                        <strong>Product:</strong> {this.state.data.product}
                    </h1>
                    <p className='card-text'>
                        <strong>Date:</strong> {this.state.data.date}
                    </p>
                    <p className='card-text'>
                        <strong>Description:</strong> {this.state.data.description}
                    </p>
                </div>
            </div>
        </div>
        <div className='row w-100'>
            <div className='col align-items-stretch'>
                <div className='card view-data-card'>
                    <h1 className='card-heading'>
                        <strong>Excise Numbers</strong>
                    </h1>
                    <p className='card-text'>
                        <strong>Vessel:</strong> {this.state.data.vessel_id}
                    </p>
                    <p className='card-text'>
                        <strong>Volume:</strong> {this.state.data.volume}L
                    </p>
                    <p className='card-text'>
                        <strong>Abv:</strong> {this.state.data.abv}%
                    </p>
                    <p className='card-text'>
                        <strong>LaLs:</strong> {this.state.data.lals}
                    </p>
                </div>
            </div>
        </div>
        <div className='row w-100'>
            <div className='col align-items-stretch'>
                <div className='card view-data-card'>
                    <h1 className='card-heading'>
                        <strong>Other Information</strong>
                    </h1>
                    <p className='card-text'>
                        <strong>Employee:</strong> {this.state.data.employee}
                    </p>
                    <p className='card-text'>
                        <strong>Notes:</strong> {this.state.data.notes}
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
    }
}

export default ViewData;