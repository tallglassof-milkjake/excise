import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../utils/API';

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
        <>
        <div className='card'>
            <h1>
                Product: {this.state.data.product}
            </h1>
            <p>
                Date: {this.state.data.date}
            </p>
            <p>
                Description {this.state.data.description}
            </p>
        </div>
        <div className='card'>
            <h1>
                Excise Numbers
            </h1>
            <p>
                Vessel: {this.state.data.vessel_id}
            </p>
            <p>
                Volume: {this.state.data.volume}
            </p>
            <p>
                Abv: {this.state.data.abv}
            </p>
            <p>
                LaLs: {this.state.data.lals}
            </p>
        </div>
        <div className='card'>
            <h1>
                Other Information
            </h1>
            <p>
                {this.state.data.employee}
            </p>
            <p>
                {this.state.data.notes}
            </p>
        </div>
        </>
    )
    }
}

export default ViewData;