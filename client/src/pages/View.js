import React from 'react';
import { useParams } from 'react-router-dom';
import View from '../components/View/View';
import SideBar from '../components/SideBar/Nav';

const ViewPage = ({ ...props }) => {

    // const idProps = props.match.params.id;
    console.log(props.match.params.id);

    // const [exciseId] = useState(idProps);
    // const [myExcise, setMyExcise] = useState()

    // useEffect(() => {
    //     const fetch = async () => {
    //         const res = await API.getExciseById(`/${newId}`);
    //         console.log(res);
    //         setMyExcise(res.data);
    //     }

    //     fetch();
    // }, [])

    // console.log(exciseId);
    // console.log(myExcise);

    const params = useParams();

    console.log(params);
    
        return (
            <>
                <div className='col-2 side-bar-col'>
                    <SideBar />
                </div>
                <div className='col-10 main-col'>
                    <div className='content-section'>
                        <View 
                            props={params}
                        />
                    </div>
                </div>
            </>
        )
    
}

export default ViewPage;