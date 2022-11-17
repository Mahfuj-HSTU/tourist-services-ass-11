import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Banner from './Banner/Banner';
import Client from './Client/Client';
import Services from './Services/Services';
import Support from './Supoort/Support';

const Home = () => {
    useTitle( 'Home' )
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Client></Client>
            <Support></Support>
        </div>
    );
};

export default Home;
