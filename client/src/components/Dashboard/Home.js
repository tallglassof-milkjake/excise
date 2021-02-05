import React, { useEffect, useState } from 'react';
import API from '../../utils/API';
import Search from '../Search/Search';
import DashTable from '../DashTable/DashTable';


import './Home.css';

const Home = () => {

    const [excise, setExcise] = useState([]);
    const [filteredItems, setFilteredItems] = useState({});
    const [order, setOrder] = useState('descend')

    const headings = [
        { name: 'Date', width: '10%' },
        { name: 'Product', width: '10%' },
        { name: 'Volume', width: '10%' },
        { name: 'Abv %', width: '10%' },
    ]

    useEffect(() => {
        const fetch = async () => {
            const res = await API.getExcise();
            setExcise(res.data);
        }
        
       fetch();
    }, []);
    
    return (
      <div className='row head-row'>
        <div className='col'>
          <div className='row dash-main'>
              <div className='col dash-message'>
                  <h1 className='display-4 dash-title'>Dashboard</h1>
                  <i className="fas fa-tachometer-alt fa-4x"></i>
                  <p>
                    View and Edit product details
                  </p>
                  {/* <Search handleSearchChange={handleSearchChange}/> */}
              </div>
              
              <div className='row dash-table-row'>
                  <div className='col dash-table-col justify-content-center'>
                      <DashTable 
                          headings={headings}
                          excise={excise}
                      />
                  </div>
              </div>
          </div>
        </div>
      </div>
    )
    
}

export default Home;