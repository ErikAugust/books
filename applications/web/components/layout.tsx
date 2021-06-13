import React from 'react';
import Navbar from './navbar';

const Layout = ({list, children}) => {
    return (
        <>
            <Navbar list={list} />
            <main role="main" className="container">
                {children}
            </main>
        </>
    );
}

export default Layout;