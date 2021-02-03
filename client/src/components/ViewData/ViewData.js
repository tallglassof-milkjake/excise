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
        <table className='table table-striped'>  
            <thead>
                <tr>
                    {this.state.headings.map(({name, width}) => {
                        return (
                            <th
                                className='col'
                                key={name}
                                style={{width}}
                            >
                                {name}
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-th="Date">
                        {this.state.data.date}
                    </td>
                    <td>
                        {this.state.data.product}
                    </td>
                    <td>
                        {this.state.data.description}
                    </td>
                    <td>
                        {this.state.data.vessel_id}
                    </td>
                    <td>
                        {this.state.data.volume}
                    </td>
                    <td>
                        {this.state.data.abv}
                    </td>
                    <td>
                        {this.state.data.lals}
                    </td>
                    <td>
                        {this.state.data.employee}
                    </td>
                    <td>
                        {this.state.data.notes}
                    </td>
                </tr>
            </tbody>
        </table>
        </>
    )
    }
}

export default ViewData;