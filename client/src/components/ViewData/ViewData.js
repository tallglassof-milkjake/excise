import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../utils/API';

class ViewData extends Component {

    constructor(props) {
        super(props);
        this.state = {id: this.props.id}
    }

    componentDidMount() {
        console.log(this.state.id)

        const getData = async () => {
            const data = await API.getExciseById('/' + this.state.id);

            console.log(data)
        }

        getData();
    }

    getParams = () => {
        const params = useParams();

        console.log(params);
    }

    render() {
    return (
        <tbody>
            <tr>
                {/* <td>
                    {data.date}
                </td>
                <td>
                    {data.product}
                </td>
                <td>
                    {data.description}
                </td>
                <td>
                    {data.vessel_id}
                </td>
                <td>
                    {data.volume}
                </td>
                <td>
                    {data.abv}
                </td>
                <td>
                    {data.lals}
                </td>
                <td>
                    {data.employee}
                </td>
                <td>
                    {data.notes}
                </td> */}
            </tr>
            
        </tbody>
    )
    }
}

export default ViewData;