import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class nav extends Component {
    render(){

        const pages = [
            {id: "1", name:"Home", class: "active", link: ""},
            {id: "2", name:"Mobile", class: "", link: "/shop"},
            {id: "3", name:"Fashion street", class: "", link: "/fashion"},
            {id: "4", name:"Cart", class: "", link: ""},
            {id: "5", name:"Checkout", class: "", link: ""},
            {id: "6", name:"Contact", class: "", link: ""},
        ]
        const navlinks = pages.map(page=>{
            return(
                <li className={page.class} key={page.id}><Link to={page.link}>{page.name}</Link></li>
            )
        });
        return (
            <div className="mainmenu-area">
                <div className="container">
                    <div className="row">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div> 
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                {navlinks}
                            </ul>
                        </div>  
                    </div>
                </div>
            </div>
        );
    }
}
export default nav; 