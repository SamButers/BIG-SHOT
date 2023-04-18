import React from 'react';

import Navbar from './Navbar';

class FixedNavbar extends React.Component {
    render() {
        return !this.props.noNavbar && <Navbar position="fixed" />;
    }
}

export default FixedNavbar;
