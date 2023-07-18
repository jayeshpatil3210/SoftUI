import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/sidebar/Hero/Footer';
// import Billing from './components/sidebar/billing/Billing';

export const Layout = (props) => {
    return (
        <div className={props.class}>
            <Sidebar />
            {props.children}
            <Footer />
        </div>
    )
}
