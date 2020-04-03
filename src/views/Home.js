import React, { useEffect, useState } from 'react';

import WelcomeCard from '../components/WelcomeCard';

const Home = () => {

    return (
        <section style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px'}}>
            <WelcomeCard />
        </section>
    );
}
 
export default Home;