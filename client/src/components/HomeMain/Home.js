import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useStoreContext } from '../../utils/GlobalState';
import { LOADING, UPDATE_EXCISE } from '../../utils/actions';
import API from '../../utils/API';
import { List, ListItem } from '../List/List';
import SideBar from '../SideBar/Nav';

function Home() {
    const [state, dispatch] = useStoreContext();

    // const removeExcise = id => {
    //     API.deleteExcise(id)
    //         .then(() => {
    //             dispatch({
    //                 type: REMOVE_EXCISE,
    //                 _id: id
    //             });
    //         })
    //         .catch(err => console.log(err));
    // };

    const getExcise = () => {
        dispatch({ type: LOADING });
        API.getExcise()
            .then(results => {
                dispatch({
                    type: UPDATE_EXCISE,
                    excises: results.data
                });
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getExcise();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>

            <List>
                {state.excises.map(excise => (
                    <ListItem key={excise._id}>
                        <Link to={"/api/excise" + excise._id}>
                            <strong>
                                {excise.product}
                            </strong>
                            <p>
                                {excise.vessel_id}
                            </p>
                            <p>
                                {excise.volume}
                            </p>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </div>
            
        
    )
}

export default Home;