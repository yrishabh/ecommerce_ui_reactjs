import React, { Component } from 'react';

class logo extends Component {
    render(){
        return(
                <div className="site-branding-area">
                     <div className="container">
                            <div className="row">
                                 <div className="col-sm-6">
                                    <div className="logo">
                                        <h1><a href="./"><img src="img/logo.png" alt=""/></a></h1>
                                     </div>
                                </div>
                            </div>
                        </div>
                </div> 
        );
    }
}
export default logo;