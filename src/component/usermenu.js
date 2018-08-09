import React, { Component } from 'react';
class usermenu extends Component {
  render() {
      const pages = [
          {id: "1", name:"My Account", icon: "fa fa-user"},
          {id: "2", name:"Wishlist", icon: "fa fa-heart"},
          {id: "3", name:"My Cart", icon: "fa fa-user"},
          {id: "4", name:"Checkout", icon: "fa fa-user"},
          {id: "5", name:"Login", icon: "fa fa-user"},
      ]

      const userlinks = pages.map(page=>{
          return(
            <li key={page.id}><a href=""><i className={page.icon}></i>{page.name}</a></li>
          )
      });
    return (
      <div className="header-area">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="user-menu">
                        <ul>
                            {userlinks}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default usermenu;