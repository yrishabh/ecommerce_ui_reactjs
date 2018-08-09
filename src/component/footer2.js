import React, {Component} from 'react';

class footer2 extends Component {
    render(){

        const cards = [
           {id: "1", cardName: "fa fa-cc-discover"},
           {id: "2", cardName: "fa fa-cc-mastercard"},
           {id: "3", cardName: "fa fa-cc-paypal"},
           {id: "4", cardName: "fa fa-cc-visa"}
        ]
        const cardList = cards.map(card=>{
            return(
                <i key={card.id} className={card.cardName}></i>
            )
        });
        return (
            <div className="footer-bottom-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                             <div className="copyright">
                                 <p>&copy; 2017 React.js eCommerce. All Rights Reserved.</p>
                            </div>
                            <div className="col-md-4">
                                <div className="footer-card-icon">
                                    {cardList}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default footer2 ;