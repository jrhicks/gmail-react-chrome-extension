import React, { useState, useEffect } from 'react';

const App = (props) => {
    const { gmail } = props;
    const userEmail = gmail.get.user_email();
    const [userOpened, setUserOpened] = useState(true); 
    const [fromAddress, setFromAddress] = useState(''); 

    gmail.observe.on("view_email", (domEmail) => {
        const emailData = gmail.new.get.email_data(domEmail);
        setFromAddress(emailData.from.address);
    });

    const toggleUserOpened = () => {
        setUserOpened(!userOpened);
    };

    const panelStyle = {
        width: '300px', 
        height: (userOpened) ? '50vh' : 'auto', 
        position: 'fixed', 
        right: '0', 
        bottom: '0', 
        backgroundColor: '#f9f9f9', 
        border: '1px solid black', 
        overflowY: 'auto'
    }

    const headerStyle = {
        padding: '5px', 
        cursor: 'pointer',
        backgroundColor: 'black',
        color: 'white'
    }

    const bodyStyle = {
        padding: '5px'
    }

    return (
        <div id="sidePanel" style={panelStyle}>
            <div onClick={toggleUserOpened} style={headerStyle}>
                <b>My Extension</b>
            </div>          
            {
                userOpened && (
                    <div id="content" style={bodyStyle}>
                        {fromAddress && <span>From: {fromAddress}</span>}
                    </div>
                )
            }
        </div>
    );
}

export default App;

