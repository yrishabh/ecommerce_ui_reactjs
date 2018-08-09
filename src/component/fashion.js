import React, {Component} from 'react';

class fashion extends Component {
    render(){

        const fproducts = [
            {id: "1", productN: "Samsung Galaxy s5", img: "img/f1.jpeg", mrp: "$100", dis: "$700" },
            {id: "2", productN: "Nokia 360", img: "img/f2.jpeg", mrp: "$1000", dis: "$999" },
            {id: "3", productN: "LG 450", img: "img/f3.jpeg", mrp: "$1200", dis: "$11999" },
            {id: "4", productN: "HTC 1200", img: "img/f4.jpeg", mrp: "$1500", dis: "$1119" },
            {id: "5", productN: "iphone 5s 32gb", img: "img/f9.jpeg", mrp: "$1400", dis: "$1000" }
        ]
        const fproductist = fproducts.map(fproduct=>{
            return(
                <div key={fproduct.id} className="col-md-3 col-sm-6">
                        <div className="single-shop-product">
                            <div className="product-upper fd">
                                <img src={fproduct.img} alt="" />
                            </div>
                            <h2><a href="single-product.html">{fproduct.productN}</a></h2>
                            <div className="product-carousel-price">
                                <ins>{fproduct.dis}</ins> <del>{fproduct.mrp}</del>
                            </div>  
                            <div className="product-option-shop">
                                <a className="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="">Add to cart</a>
                            </div>                       
                        </div>
                 </div> 
            )
        });
        return (
            <div className="single-product-area">
            <div className="zigzag-bottom"></div>
            <div className="container">
                <div className="row">
                    {fproductist}
                </div>
                
                <div className="row">
                    <div className="col-md-12">
                        <div className="product-pagination text-center">
                            <nav>
                              <ul className="pagination">
                                <li>
                                  <a href="" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                  </a>
                                </li>
                                <li><a href="">1</a></li>
                                <li><a href="">2</a></li>
                                <li><a href="">3</a></li>
                                <li><a href="">4</a></li>
                                <li><a href="">5</a></li>
                                <li>
                                  <a href="" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                  </a>
                                </li>
                              </ul>
                            </nav>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        );
    }
}
export default fashion; 