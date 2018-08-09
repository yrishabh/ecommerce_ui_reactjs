import React, { Component } from "react";

class service extends Component {
    render(){

        const services = [
            {id: "1", serviceName:"30 Days Return",d1:"single-promo promo1", icon: "fa fa-refresh"},
            {id: "2", serviceName:"Free Shipping",d1:"single-promo promo2", icon: "fa fa-truck"},
            {id: "3", serviceName:"Secure Payments",d1:"single-promo promo3", icon: "fa fa-lock"},
            {id: "4", serviceName:"New Products",d1:"single-promo promo4", icon: "fa fa-gift"},
        ]

        const servicelist = services.map(service=>{
            return(
                <div className="col-md-3 col-sm-6" key={service.id}>
                    <div className={service.d1}>
                        <i className={service.icon}></i>
                            <p>{service.serviceName}</p>
                    </div>
                 </div>
            )
        });
        return(
            <div className="promo-area">
                <div className="zigzag-bottom"></div>
                    <div className="container">
                         <div className="row">
                          {servicelist}
                        </div>
                    </div>
                </div>
        );
    }
}

export default service ;