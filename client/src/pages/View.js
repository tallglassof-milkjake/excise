import React, { Component } from 'react';
import View from '../components/View/View';
import SideBar from '../components/SideBar/Nav';
import API from '../utils/API';

class ViewPage extends Component {

    state = {
        result: {},
    }

    componentDidMount() {
        this.getExcise()
    }

    getExcise = () => {
        API.getExcise()
            .then(res => {
                this.setState({ result: res.data})
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <div className='col-2 side-bar-col'>
                    <SideBar />
                </div>
                <div className='col-10 main-col'>
                    <div className='content-section'>
                        <View 
                            excise={this.state.result._id}
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default ViewPage;