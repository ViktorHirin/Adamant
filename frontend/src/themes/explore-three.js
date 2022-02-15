import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Explore from '../components/Explore/ExploreFour';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

class ExploreTwo extends Component {
    render() {
        return (
            <div className="main" style={{backgroundColor:"#13172b"}}>
                <Header />
                <Breadcrumb title="Explore" subpage="Explore" page="Explore Style 3" />
                <Explore />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default ExploreTwo;