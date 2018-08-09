import React, {Component} from 'react';

class footer1 extends Component {
    render(){

        const socialMedia = [
            {id: "1", MediaName: "fa fa-facebook"},
            {id: "2", MediaName: "fa fa-twitter"},
            {id: "3", MediaName: "fa fa-youtube"}
        ]
        const Categories =[
            {id: "1", CategorieName: "Mobile Phone"},
            {id: "2", CategorieName: "Home Accesseries"},
            {id: "3", CategorieName: "LED TV"},
            {id: "4", CategorieName: "Computer"},
            {id: "5", CategorieName: "Gadets"}
        ]

        const MediaList = socialMedia.map(media=>{
            return(
                <a key= {media.id} href="" target="_blank"><i className={media.MediaName}></i></a> 
            )
        });

        const CategorieList = Categories.map(Categorie=>{
            return(
                <li key={Categorie.id}><a href="">{Categorie.CategorieName}</a></li>
            )
        });
        return (
            <div className="footer-top-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="footer-about-us">
                        <h2>R<span>eCommerce_UI</span></h2>
                        <p></p>
                        <div className="footer-social">
                            {MediaList}
                        </div>
                    </div>
                </div>
                
                <div className="col-md-3 col-sm-6">
                    <div className="footer-menu">
                        <h2 className="footer-wid-title">User Navigation </h2>
                        <ul>
                            <li><a href="">My account</a></li>
                            <li><a href="">Order history</a></li>
                            <li><a href="">Wishlist</a></li>
                    
                        </ul>                        
                    </div>
                </div>
                
                <div className="col-md-3 col-sm-6">
                    <div className="footer-menu">
                        <h2 className="footer-wid-title">Categories</h2>
                        <ul>
                            {CategorieList}
                        </ul>                        
                    </div>
                </div>
                
                <div className="col-md-3 col-sm-6">
                    <div className="footer-newsletter">
                        <h2 className="footer-wid-title">Newsletter</h2>
                        <p>Sign up to our newsletter and get exclusive deals you wont find anywhere else straight to your inbox!</p>
                        <div className="newsletter-form">
                            <form action="">
                                <input type="email" placeholder="Type your email" />
                                <input type="submit" value="Subscribe" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        );
    }
}
export default footer1 ; 