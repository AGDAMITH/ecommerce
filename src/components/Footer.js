import React , {Component} from 'react';

export class Footer extends Component {
    render(){
        return(
            <div className="mad-body--scheme-brown">
                <div id="mad-page-wrapper" className="mad-page-wrapper">
                <footer id="mad-footer" className="mad-footer">
                {/*================ Footer row ================*/}
                <div className="mad-footer-main">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-2 col-md-4">
                        {/*================ Widget ================*/}
                        <section className="mad-widget">
                        <h6 className="mad-widget-title">About Us</h6>
                        <div className="mad-vr-list">
                            <ul>
                            <li><a href="index.html" className="mad-link">Home</a></li>
                            <li><a href="pages_about_v1.html" className="mad-link">About Us</a></li>
                            <li><a href="pages_faq.html" className="mad-link">Career</a></li>
                            <li><a href="blog_classic_sidebar.html" className="mad-link">Blog</a></li>
                            <li><a href="#" className="mad-link">Terms and Conditions</a></li>
                            <li><a href="#" className="mad-link">Privacy Policy</a></li>
                            <li><a href="pages_contact_v1.html" className="mad-link">Contact Us</a></li>
                            </ul>
                        </div>
                        </section>
                        {/*================ End of Widget ================*/}
                    </div>
                    <div className="col-xl-2 col-md-4">
                        {/*================ Widget ================*/}
                        <section className="mad-widget">
                        <h6 className="mad-widget-title">Categories</h6>
                        <div className="mad-vr-list">
                            <ul>
                            <li><a href="shop_category.html" className="mad-link">Vitamins &amp; Supplements</a></li>
                            <li><a href="shop_grid_2c_sidebar.html" className="mad-link">Personal Care &amp; Beauty</a></li>
                            <li><a href="shop_grid_3c.html" className="mad-link">Medicines</a></li>
                            <li><a href="shop_grid_3c_sidebar.html" className="mad-link">Health &amp; First Aids</a></li>
                            <li><a href="shop_grid_4c_full.html" className="mad-link">Sexual Health</a></li>
                            <li><a href="shop_grid_4c_sidebar.html" className="mad-link">Weight Loss &amp; Fitness</a></li>
                            <li><a href="shop_grid_5c_full.html" className="mad-link">Mum &amp; Baby</a></li>
                            <li><a href="shop_grid_6c_full.html" className="mad-link">Organic &amp; Gluten Free</a></li>
                            </ul>
                        </div>
                        </section>
                        {/*================ End of Widget ================*/}
                    </div>
                    <div className="col-xl-2 col-md-4">
                        {/*================ Widget ================*/}
                        <section className="mad-widget">
                        <h6 className="mad-widget-title">Customer Care</h6>
                        <div className="mad-vr-list">
                            <ul>
                            <li><a href="shop_account.html" className="mad-link">My Account</a></li>
                            <li><a href="#" className="mad-link">My Orders</a></li>
                            <li><a href="#" className="mad-link">Track Your Order</a></li>
                            <li><a href="#" className="mad-link">Wishlist</a></li>
                            <li><a href="pages_faq.html" className="mad-link">FAQs</a></li>
                            <li><a href="#" className="mad-link">Refunds/Return Policy</a></li>
                            </ul>
                        </div>
                        </section>
                        {/*================ End of Widget ================*/}
                    </div>
                    <div className="col-xl-2 col-md-6">
                        {/*================ Widget ================*/}
                        <section className="mad-widget">
                        <h6 className="mad-widget-title">Store Locations</h6>
                        <div className="mad-our-info">
                            <div className="mad-info">
                            <div>9863 - 9867 Mill Road, <br />
                                Cambridge, MG09 99HT</div>
                            <a href="https://bit.ly/2RNqbia" className="mad-link">Get Directions</a>
                            </div>
                            <div className="mad-info">
                            <div>9870 St Vincent Place, <br />
                                Glasgow, DC 45 Fr 45</div>
                            <a href="https://bit.ly/2RNqbia" className="mad-link">Get Directions</a>
                            </div>
                            <div className="mad-info">
                            <div>8901 Marmora Road, <br />
                                Glasgow, D04 89GR</div>
                            <a href="https://bit.ly/2RNqbia" className="mad-link">Get Directions</a>
                            </div>
                        </div>
                        </section>
                        {/*================ End of Widget ================*/}
                    </div>
                    <div className="col-xl-4 col-md-6">
                        {/*================ Widget ================*/}
                        <section className="mad-widget">
                        <h6 className="mad-widget-title">Customer Support</h6>
                        {/*================ Icon Boxes ================*/}
                        <div className="mad-icon-boxes our-info item-col-1">
                            <div className="mad-col">
                            {/*================ Icon Box ================*/}
                            <article className="mad-icon-box">
                                <i className="mad-icon-box-icon"><img className="svg" src="images/lekarna_svg_icons-support.svg" alt="" /></i>
                                <div className="mad-icon-box-content">
                                <span className="mad-icon-sub-title">24/7 Customer Service:</span>
                                <h4 className="mad-icon-box-title">+1 800 559 6580, +1 800 559 6588</h4>
                                </div>
                            </article>
                            {/*================ End of Icon Box ================*/}
                            </div>
                            <div className="mad-col">
                            {/*================ Icon Box ================*/}
                            <article className="mad-icon-box">
                                <i className="mad-icon-box-icon"><img className="svg" src="images/lekarna_svg_icons-email.svg" alt="" /></i>
                                <div className="mad-icon-box-content">
                                <span className="mad-icon-sub-title">Email Us:</span>
                                <h4 className="mad-icon-box-title">info@companyname.com</h4>
                                </div>
                            </article>
                            {/*================ End of Icon Box ================*/}
                            </div>
                        </div>
                        {/*================ End of Icon Boxes ================*/}
                        <div className="mad-social-icons">
                            <ul>
                            <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                            <li><a href="#"><i className="fab fa-twitter" /></a></li>
                            <li><a href="#"><i className="fab fa-instagram" /></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                            <li><a href="#"><i className="fab fa-youtube" /></a></li>
                            <li><a href="#"><i className="fab fa-pinterest-p" /></a></li>
                            </ul>
                        </div>
                        </section>
                        {/*================ End of Widget ================*/}
                    </div>
                    </div>
                    <div className="mad-footer-bottom">
                    <p className="copyrights">Copyright © 2021 <a href="#">Lekarna24 </a>. All Rights Reserved.</p>
                    <a href="#"><img src="images/images-payment.png" alt="" /></a>
                    </div>
                </div>
                </div>
                {/*================ End of Footer row ================*/}
            </footer>
            {/*================ End of Footer ================*/}
            </div>
            </div>
        );
    }
}