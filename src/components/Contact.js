import React from 'react';
import Status from './Status';



function Contact() {
  return (

    <div className="Contact">
        <div className="Avatar">
            <img src="https://randomuser.me/api/portraits/men/47.jpg" className="avatar"/>
        </div>
        <div>
            <h4 className="name">Harvey JEFF</h4>
            <Status />
            <div>
                
            </div>
        </div>
        
    </div>
  );
}

export default Contact;