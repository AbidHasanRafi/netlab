import React from 'react';
import Head from '../../components/header/Head';
import Cards from '../../components/cards/Cards';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div className='min-h-screen my-5'>
            <Helmet>
                <title>NetLab</title>
            </Helmet>
            <Head/>
            <Cards/>
        </div>
    );
};

export default Home;