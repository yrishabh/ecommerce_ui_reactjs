import React, {Component} from 'react';

class latestproducts extends Component{
    render(){
        const Products = [
            {id: "1", productN: "Samsung Galaxy s5", img: "img/product-1.jpg", mrp: "$100", dis: "$700" },
            {id: "2", productN: "Nokia 360", img: "img/product-2.jpg", mrp: "$1000", dis: "$999" },
            {id: "3", productN: "LG 450", img: "img/product-3.jpg", mrp: "$1200", dis: "$11999" },
            {id: "4", productN: "HTC 1200", img: "img/product-4.jpg", mrp: "$1500", dis: "$1119" },
            {id: "5", productN: "iphone 5s 32gb", img: "img/product-5.jpg", mrp: "$1400", dis: "$1000" },
        ]
        const productslinks = Products.map(Product=>{
            return(
                    <div className="single-product" key={Product.id}>
                        <div className="product-f-image">
                            <img src={Product.img} alt="" />
                             <div className="product-hover">
                                 <a href="" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                 <a href="" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                </div>
                        </div>
                         <h2><a href="single-product.html">{Product.productN}</a></h2>
                        <div className="product-carousel-price">
                            <ins>{Product.dis}</ins> <del>{Product.mrp}</del>
                        </div> 
                     </div>
            )
        });
        return(
            <div className="maincontent-area">
            <div className="zigzag-bottom"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="latest-product">
                            <h2 className="section-title">Latest Products</h2>
                            <div className="product-carousel">
                                {productslinks}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        );
    }
}

export default latestproducts;