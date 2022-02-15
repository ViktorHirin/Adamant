import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import FaucetSection from '../components/Faucet/AdamFaucet';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

class Faucet extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Breadcrumb title="Faucet" subpage="Pages" page="Faucet" />
                <FaucetSection />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default Faucet;