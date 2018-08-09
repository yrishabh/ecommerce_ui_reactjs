import React, {Component} from 'react';

class brand extends Component {
    render(){

        const brands = [
            {id: "1", brandImg:"img/brand1.png"},
            {id: "2", brandImg:"img/brand2.png"},
            {id: "3", brandImg:"img/brand3.png"},
            {id: "4", brandImg:"img/brand4.png"},
            {id: "5", brandImg:"img/brand5.png"},
            {id: "6", brandImg:"img/brand6.png"},
        ]
        const brandList = brands.map(brand=>{
            return(
                <img key={brand.id} src={brand.brandImg} alt=""/> 
            )
        });
        return (
            <div className="brands-area">
            <div className="zigzag-bottom"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="brand-wrapper">
                            <div className="brand-list">
                                {brandList}             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default brand ; 