import React from 'react';

function Status() {

    const stat = false;
  
    return (
        <div className="status">
            <div>
                <div className={stat ? 'status-online' : 'status-offline'}></div>
                <h5 className="status-text">{stat ? 'Online' : 'Offline'}</h5>
            </div>
        </div>
        
        
    );
}

export default Status;
