import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Contacts from '../Contacts/Contacts';
import PatientReview from '../PatientReview/PatientReview';
import Services from '../Services/Services';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Services />
            <Treatment />
            <AppointmentBanner></AppointmentBanner>
            <PatientReview></PatientReview>
            <Contacts />
            <Footer></Footer>
        </div>
    );
};

export default Home;