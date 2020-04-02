import React, { useEffect, useState } from 'react';

import WelcomeCard from '../components/WelcomeCard';

import { fetchUser } from '../utils/fetchData';

const Home = () => {

    // const [user, loading] = useFetchHook();
    // const [data, getData] = useState({});

    // useEffect( () => {
    //     const res = async() => {
    //         let x = await fetchUser();
    //         getData(x);

    //     }
    //     res();
    // }, []);

    // console.log(data)
    // console.log(user);

    return (
        <>
            <h1>Iniciando prueba</h1>
            <WelcomeCard />
        </>
    );
}
 
export default Home;