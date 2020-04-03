import React, {useState, useEffect} from 'react';
import SimpleCard from '../shared/SimpleCard';
import { fetchUser } from '../utils/fetchData';

const WelcomeCard = () => {
    const [data, getData] = useState({});

    useEffect( () => {
        const res = async() => {
            let x = await fetchUser('reloj', 2);
            getData(x);

        }
        res();
    }, []);
    return (
        <SimpleCard
            messWelcome={ data.data ? data.data.welcome : null}
            messVersion={ data.data ? data.data.version : null}
            messButton="Continuar"
        />
    );
}
 
export default WelcomeCard;