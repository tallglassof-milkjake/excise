import React, { Component } from 'react';
import View from '../components/View/View';
import SideBar from '../components/SideBar/Nav';
import API from '../utils/API';

class ViewPage extends Component {

    state = {
        excise: {},
    }

    componentDidMount() {
        
    }

    getExcise = id => {
        API.getExciseById(id)
            .then(res => this.setState({ excise: res.data}))
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
                            excise={this.excise}
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default ViewPage;