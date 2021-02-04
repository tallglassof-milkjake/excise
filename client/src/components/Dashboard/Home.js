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

    const handleSort = headings => {
        if (order === "descend") {
          setOrder({
            order: "ascend"
          })
        } else {
            setOrder({
            order: "descend"
          })
        }
    
        const compare = (a, b) => {
          if (order === "ascend") {
            
            if (a[headings] === undefined) {
              return 1;
            } else if (b[headings] === undefined) {
              return -1;
            }
            
            else if (headings === "name") {
              return a[headings].first.localeCompare(b[headings].first);
            } else {
              return a[headings] - b[headings];
            }
          } else {
            
            if (a[headings] === undefined) {
              return 1;
            } else if (b[headings] === undefined) {
              return -1;
            }
            
            else if (headings === "name") {
              return b[headings].first.localeCompare(a[headings].first);
            } else {
              return b[headings] - a[headings];
            }
           }
    
        }
        const sortedItems = filteredItems.sort(compare);
        setOrder({ filteredItems: sortedItems });
      }
    

    const handleSearchChange = event => {
        console.log(excise);
        const filter = event.target.value;
        const filterList = excise.filter(item => {
            let values = Object.values(item).join("").toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        setFilteredItems({ filteredItems: filterList });
    }

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
                          handleSort={handleSort}
                      />
                  </div>
              </div>
          </div>
        </div>
      </div>
    )
    
}

export default Home;