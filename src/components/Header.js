import React , {Component} from 'react';

export class Header extends Component {
    render(){
        return(
            <div className="mad-body--scheme-brown">
            <div className="mad-preloader"></div>
            <div id="mad-page-wrapper" className="mad-page-wrapper">
            <div className="mad-popup qv-popup">
                <div className="mad-popup-holder">
                <a href="#" className="mad-nav-prev"><i className="material-icons">keyboard_arrow_left</i></a>
                <a href="#" className="mad-nav-next"><i className="material-icons">keyboard_arrow_right</i></a>
                <div className="mad-popup-wrap">
                    <div className="mad-popup-inner">
                    <button type="button" className="mad-popup-close"><i className="material-icons">close</i></button>
                    <div className="mad-product mad-product-single">
                        <div className="row hr-size-2 vr-size-2 sticky-bar">
                        <div className="col-xl-6">
                            <div className="image-preview-container type-2">
                            {/* - - - - - - - - - - - - - Image Preview Container - - - - - - - - - - - - - - - - */}
                            <div className="image-preview">
                                <span className="mad-label">Sale! <br />-30%</span>
                                <a href="#">
                                <img id="zoom-qv-image" src="images/images-440x440_product1.jpg" alt="" />
                                </a>
                                <a href="images/440x440_product1.jpg" className="mad-zoom-img" data-fancybox="group"><i className="material-icons">fullscreen</i></a>
                            </div>
                            {/*/ .image-preview*/}
                            <div className="mad-thumb-holer">
                                {/* - - - - - - - - - - - - - Thumbnails - - - - - - - - - - - - - - - - */}
                                <div className="mad-product-thumbs" id="thumbnails-qv">
                                <div className="mad-grid-item">
                                    <a className="active" href="#" data-image="images/440x440_product1.jpg" data-qv-zoom-image="images/440x440_product1.jpg">
                                    <img src="images/images-104x104_product1.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="mad-grid-item">
                                    <a href="images/440x440_product2.jpg" data-image="images/440x440_product2.jpg" data-qv-zoom-image="images/440x440_product2.jpg" data-fancybox="group">
                                    <img src="images/images-104x104_product2.jpg" alt="" />
                                    </a>
                                </div>
                                </div>
                                {/* - - - - - - - - - - - - - End of Thumbnails - - - - - - - - - - - - - - - - */}
                            </div>
                            {/* - - - - - - - - - - - - - End of Image Preview Container - - - - - - - - - - - - - - - - */}
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <h3 className="mad-product-title">Blaster Keto-Fit Protein Shake 300g
                            </h3>
                            {/*/ product-info */}
                            <div className="mad-product-info">
                            <div className="mad-info-item">
                                <div className="mad-col">
                                <div className="mad-text-small content-element">By <a href="#" className="mad-link">Naturopanica</a>
                                </div>
                                <div data-estimate={5} className="mad-rating" /> <a href="#">(2 Reviews)</a>
                                </div>
                                <div className="mad-progress-bars mad-progress-bars--secondary">
                                <span>Availability</span>
                                <div className="mad-progress-bars-item">
                                    <div role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} className="mad-progress-bar">
                                    <div style={{width: '75%'}} className="mad-progress-bar-indicator" />
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="mad-info-item">
                                <div className="mad-product-price">$22.11 - $29.11 <span>$31.59 - $41.59</span></div>
                            </div>
                            <div className="mad-info-item">
                                <p className="mad-text-small">Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit.
                                Aenean
                                auctor
                                wisi et urna. Aliquam erat volutpat.</p>
                            </div>
                            <div className="mad-info-item">
                                <div>
                                <p className="content-element mad-text-small">Color</p>
                                <div className="btn-set mad-colors">
                                    <a href="#" className="mad-color-1 active" />
                                    <a href="#" className="mad-color-2" />
                                </div>
                                </div>
                            </div>
                            <div className="mad-info-item">
                                <div>
                                <p className="content-element mad-text-small">Flavor</p>
                                <div className="mad-custom-select">
                                    <select data-default-text="Please select">
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            <div className="mad-info-item">
                                <div>
                                <p className="mad-text-small content-element">Quantity</p>
                                <div className="btn-set">
                                    <div className="quantity size-2">
                                    <input type="text" defaultValue={1} readOnly />
                                    <button type="button" className="qty-plus"><i className="material-icons">add</i></button>
                                    <button type="button" className="qty-minus"><i className="material-icons">remove</i></button>
                                    </div>
                                    <a href="shop_cart.html" className="btn btn-big btn-style-3"><i className="material-icons-outlined">shopping_bag</i><span>Add
                                        to
                                        Cart</span></a>
                                </div>
                                </div>
                            </div>
                            <div className="mad-info-item">
                                <div className="btn-set mad-text-small mad-links">
                                <a href="#" className="mad-link-color"><i className="material-icons">favorite_border</i><span>Add to
                                    Wishlist</span></a>
                                <a href="#" className="mad-link-color"><i className="material-icons">compare_arrows</i><span>Add to
                                    Compare</span></a>
                                </div>
                            </div>
                            <div className="mad-info-item">
                                <ul className="product-meta">
                                <li><span>SKU:</span> 100396</li>
                                <li><span>Category:</span> <a href="#" className="mad-link">Weight Loss &amp; Fitness</a>, <a href="#" className="mad-link">Weight Management</a></li>
                                <li className="tags">
                                    <span>Tags:</span>
                                    <div className="tagcloud">
                                    <a href="#">keto</a>
                                    <a href="#">protein</a>
                                    <a href="#">slimming</a>
                                    </div>
                                </li>
                                <li className="tags">
                                    <span>Share:</span>
                                    <div className="mad-social-icons type-2">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                        <li><a href="#" className="color-2"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#" className="color-3"><i className="fa fa-envelope" /></a></li>
                                        <li><a href="#" className="color-4"><i className="fab fa-pinterest-p" /></a></li>
                                    </ul>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/*================ End of Quick View ================*/}
            {/*================ Newsletter ================*/}
            <div className="mad-popup show-popup">
                <div className="mad-popup-inner">
                <button type="button" className="mad-popup-close"><i className="material-icons">close</i></button>
                <h4 className="mad-nl-title"><span>Receive 10% Off</span> Your First Order</h4>
                <p>Subscribe today and get 10% off your next order. <br />
                    Just fill out the form below to receive your coupon code.</p>
                <form className="mad-newsletter-form one-line">
                    <input type="email" name="email" placeholder="Enter Your Email Address" />
                    <button type="submit" className="btn btn-big btn-style-4"><span>Sign Up</span></button>
                </form>
                {/*================ End of Search Form ================*/}
                <div className="mad-toggled-fields">
                    <input type="checkbox" name="checkbox-31" id="checkbox-31" />
                    <label htmlFor="checkbox-31" className="mad-label-checkbox">Do not show this popup again</label>
                </div>
                </div>
            </div>
            {/*================ End of Newsletter ================*/}
            {/*================ Header ================*/}
            <header id="mad-header" className="mad-header">
                <div className="mad-pre-header">
                <div className="container">
                    <div className="mad-header-items">
                    <div className="mad-header-item">
                        <div className="mad-our-info">
                        <div className="mad-info">Customer Support: <span>+1 800 559 6580</span></div>
                        <div className="mad-info">Email Us: <span>info@companyname.com</span></div>
                        </div>
                    </div>
                    <div className="mad-header-item">
                        <div className="mad-quick-links">
                        <a href="/about" className="mad-link">About</a> <span>&nbsp;|&nbsp;</span> <a href="pages_faq.html" className="mad-link">FAQ</a>
                        <span>&nbsp;|&nbsp;</span> <a href="/contact" className="mad-link">Contact</a>
                        </div>
                        <div className="mad-config">
                        <div className="mad-dropdown mad-lang">
                            <a href="#" className="mad-dropdown-title">English</a>
                            <ul className="mad-dropdown-element">
                            <li><a href="#">Français</a></li>
                            <li><a href="#">Deutsch</a></li>
                            </ul>
                        </div>
                        <div className="mad-dropdown mad-price">
                            <a href="#" className="mad-dropdown-title">USD</a>
                            <ul className="mad-dropdown-element">
                            <li><a href="#">EUR</a></li>
                            <li><a href="#">RUB</a></li>
                            <li><a href="#">CNY</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="mad-header-section">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-xl-3 col-lg-2 col-sm-6">
                        <a href="index.html" className="mad-logo"><img src="images/images-logo.png" alt="" /></a>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="mad-search-section">
                        <div className="mad-col">
                            <input type="text" placeholder="Search product" />
                        </div>
                        <div className="mad-col">
                            <div className="mad-custom-select">
                            <select data-default-text="All categories">
                                <option>Vitamins &amp; Supplements</option>
                                <option>Personal Care &amp; Beauty</option>
                                <option>Medicines</option>
                                <option>Health &amp; First Aids</option>
                                <option>Sexual Health</option>
                                <option>Weight Loss &amp; Fitness</option>
                                <option>Mum &amp; Baby</option>
                                <option>Organic &amp; Gluten Free</option>
                                <option>Home &amp; Pets</option>
                                <option>Travel</option>
                                <option>Parfumes &amp; Gifts</option>
                            </select>
                            </div>
                        </div>
                        <button type="submit"><i className="material-icons">search</i></button>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="mad-actions">
                        <div className="mad-col"><a href="#"><i className="material-icons">compare_arrows</i><span>2</span></a></div>
                        <div className="mad-col"><a href="#"><i className="material-icons">favorite_border</i><span>5</span></a></div>
                        <div className="mad-col"><a href="shop_account.html"><i className="material-icons">person_outline</i></a></div>
                        <div className="mad-col mad-dropdown-cart">
                            <a href="shop_cart.html" className="mad-dropdown-title"><i className="material-icons-outlined">shopping_bag<span>3</span></i><span className="price-text">$49.99</span></a>
                            <div className="shopping-cart mad-dropdown-element">
                            <div className="mad-products hr-type style-2">
                                <div className="mad-product">
                                <button className="mad-close-item"><i className="material-icons-outlined">close</i></button>
                                <div className="mad-product-image">
                                    <img src="images/images-96x96_product1.jpg" alt="" />
                                </div>
                                <div className="mad-col">
                                    {/* product-info */}
                                    <div className="mad-product-description">
                                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">John
                                        Plunkett Super­Fade Face
                                        Cream ...</a>
                                    </h6>
                                    </div>
                                    {/*/ product-info */}
                                    <div className="mad-product-info">
                                    <div className="mad-info-item">
                                        <div className="mad-product-price">1 x $17.99</div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="mad-product">
                                <button className="mad-close-item"><i className="material-icons-outlined">close</i></button>
                                <div className="mad-product-image">
                                    <img src="images/images-96x96_product2.jpg" alt="" />
                                </div>
                                <div className="mad-col">
                                    {/* product-info */}
                                    <div className="mad-product-description">
                                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Minea For
                                        Men Extra Moisturising
                                        ...</a>
                                    </h6>
                                    </div>
                                    {/*/ product-info */}
                                    <div className="mad-product-info">
                                    <div className="mad-info-item">
                                        <div className="mad-product-price">1 x $7.95</div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="mad-product">
                                <button className="mad-close-item"><i className="material-icons-outlined">close</i></button>
                                <div className="mad-product-image">
                                    <img src="images/images-96x96_product3.jpg" alt="" />
                                </div>
                                <div className="mad-col">
                                    {/* product-info */}
                                    <div className="mad-product-description">
                                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Posken
                                        Intensive Moisture Body
                                        ...</a>
                                    </h6>
                                    </div>
                                    {/*/ product-info */}
                                    <div className="mad-product-info">
                                    <div className="mad-info-item">
                                        <div className="mad-product-price">1 x $12.99</div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="sc-footer">
                                <div className="subtotal">Subtotal: $38.93</div>
                                <div className="btn-set">
                                <a href="#" className="btn btn-small btn-style-7">View Cart</a>
                                <a href="shop_checkout.html" className="btn btn-small">Checkout</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="mad-header-section--sticky-xl">
                <div className="container">
                    <div className="mad-header-items">
                    <div className="mad-header-item">
                        <div id="mad-browse-cat" className="mad-browse-cat">
                        <button id="mad-cat-toggle" className="mad-cat-toggle"><span>Browse</span> Categories</button>
                        <ul className="mad-cat-menu">
                            <li><a href="shop_grid_3c_sidebar.html"><b>Special Deals</b></a></li>
                            <li><a href="shop_grid_3c_sidebar.html"><b>Best Sellers</b></a></li>
                            <li><a href="shop_grid_3c_sidebar.html"><b>New Arrivals</b></a></li>
                            <li className="with-sub-menu"><a href="shop_filter_drawer.html">Vitamins &amp; Supplements</a>
                            <ul className="sub-menu" data-bg-image-src="images/suppliments.png">
                                <li>
                                <ul>
                                    <li><a href="#">Vitamins A-E</a></li>
                                    <li><a href="#">Multivitamins &amp; Minerals</a></li>
                                    <li><a href="#">Bone &amp; Joints Health</a></li>
                                    <li><a href="#">Magnesium</a></li>
                                    <li><a href="#">Probiotics</a></li>
                                    <li><a href="#">Fish Oil &amp; Omega 3, 6, 9</a></li>
                                    <li><a href="#">Homeopathy</a></li>
                                    <li><a href="#">Herbal</a></li>
                                    <li><a href="#">Antioxidants</a></li>
                                    <li><a href="#">Pregnancy &amp; Breast Feeding</a></li>
                                    <li><a href="#">Hair, Skin &amp; Nails</a></li>
                                    <li><a href="#">Liver &amp; Detox</a></li>
                                    <li><a href="#">Sexual Health</a></li>
                                    <li><a href="#">Organic</a></li>
                                </ul>
                                </li>
                                <li>
                                <div className="sub-title"><b>By Condition</b></div>
                                <ul>
                                    <li><a href="#">Arthritis &amp; Joints</a></li>
                                    <li><a href="#">Iron Deficiency</a></li>
                                    <li><a href="#">Cough, Cold &amp; Flu</a></li>
                                    <li><a href="#">Migraine</a></li>
                                    <li><a href="#">Stress &amp; Anxiety</a></li>
                                    <li><a href="#">Insomnia</a></li>
                                    <li><a href="#">Vein Care</a></li>
                                    <li><a href="#">Heart &amp; Cholesterol</a></li>
                                    <li><a href="#">Digestive Health</a></li>
                                    <li><a href="#">Hair Loss</a></li>
                                    <li><a href="#">Sugar Control</a></li>
                                    <li><a href="#">Memory &amp; Concentration</a></li>
                                    <li><a href="#">Water Retention</a></li>
                                </ul>
                                </li>
                                <li>
                                <div className="sub-title"><b>By Category</b></div>
                                <ul>
                                    <li><a href="#">For Children</a></li>
                                    <li><a href="#">For Men</a></li>
                                    <li><a href="#">For Women</a></li>
                                    <li><a href="#">For 50+</a></li>
                                </ul>
                                </li>
                            </ul>
                            </li>
                            <li className="with-sub-menu"><a href="shop_filter_drawer.html">Personal Care &amp; Beauty</a>
                            <ul className="sub-menu" data-bg-image-src="images/suppliments2.png">
                                <li>
                                <ul>
                                    <li><a href="#">Skin Care</a></li>
                                    <li><a href="#">Makeup &amp; Cosmetics</a></li>
                                    <li><a href="#">Hand &amp; Nail Care</a></li>
                                    <li><a href="#">Hair Care</a></li>
                                    <li><a href="#">Sun Care</a></li>
                                    <li><a href="#">Feminine Hygiene</a></li>
                                    <li><a href="#">Bath &amp; Body</a></li>
                                    <li><a href="#">Foot Care</a></li>
                                    <li><a href="#">Waxing &amp; Hair Removal</a></li>
                                    <li><a href="#">Lice</a></li>
                                    <li><a href="#">Hair Colours</a></li>
                                    <li><a href="#">Lip Care</a></li>
                                </ul>
                                </li>
                                <li>
                                <ul>
                                    <li><a href="#">Deodorants</a></li>
                                    <li><a href="#">Oral Hygiene</a></li>
                                    <li><a href="#">Incontinence</a></li>
                                    <li><a href="#">Essential Oils</a></li>
                                    <li><a href="#">Anti-aging &amp; Wrinkle Treatment</a></li>
                                    <li><a href="#">Family Planning</a></li>
                                    <li><a href="#">Organic</a></li>
                                </ul>
                                </li>
                                <li>
                                <div className="sub-title"><b>By Category</b></div>
                                <ul>
                                    <li><a href="#">For Children</a></li>
                                    <li><a href="#">For Men</a></li>
                                    <li><a href="#">For Women</a></li>
                                </ul>
                                </li>
                            </ul>
                            </li>
                            <li className="with-sub-menu"><a href="shop_filter_drawer.html">Medicines</a>
                            <ul className="sub-menu" data-bg-image-src="images/suppliments3.png">
                                <li>
                                <ul>
                                    <li><a href="#">Eye &amp; Ear</a></li>
                                    <li><a href="#">Nose &amp; Throat</a></li>
                                    <li><a href="#">Oral Health</a></li>
                                    <li><a href="#">Fever &amp; Pain Relief</a></li>
                                    <li><a href="#">Allergies &amp; Sinus</a></li>
                                    <li><a href="#">Cold, Cough &amp; Flu</a></li>
                                    <li><a href="#">Skin Conditions</a></li>
                                    <li><a href="#">Laxatives &amp; Fibres</a></li>
                                    <li><a href="#">Hair Treatments</a></li>
                                    <li><a href="#">Anti-Fungal</a></li>
                                </ul>
                                </li>
                                <li>
                                <ul>
                                    <li><a href="#">Worming</a></li>
                                    <li><a href="#">Haemorrhoids</a></li>
                                    <li><a href="#">Travel Sickness</a></li>
                                    <li><a href="#">Rehydration</a></li>
                                    <li><a href="#">Antacids &amp; Stomach Preparations</a></li>
                                    <li><a href="#">Pharmacist Advice Medicine</a></li>
                                </ul>
                                </li>
                                <li>
                                <div className="sub-title"><b>By Category</b></div>
                                <ul>
                                    <li><a href="#">For Children</a></li>
                                    <li><a href="#">For Men</a></li>
                                    <li><a href="#">For Women</a></li>
                                    <li><a href="#">For 50+</a></li>
                                </ul>
                                </li>
                            </ul>
                            </li>
                            <li className="with-sub-menu"><a href="shop_filter_drawer.html">Health &amp; First Aids</a>
                            <ul className="sub-menu" data-bg-image-src="images/suppliments4.png">
                                <li>
                                <div className="sub-title"><b>Health Aids</b></div>
                                <ul>
                                    <li><a href="#">Sleep &amp; Snoring Aids</a></li>
                                    <li><a href="#">Quit Smoking Aids</a></li>
                                    <li><a href="#">Supports &amp; Braces</a></li>
                                    <li><a href="#">Pregnancy Tests</a></li>
                                    <li><a href="#">Medical Devices</a></li>
                                    <li><a href="#">Walking Sticks</a></li>
                                    <li><a href="#">Mobility Aids</a></li>
                                    <li><a href="#">Weight Scales</a></li>
                                    <li><a href="#">Magnetic Therapy</a></li>
                                    <li><a href="#">Lifestyle Aids</a></li>
                                    <li><a href="#">NRT</a></li>
                                </ul>
                                </li>
                                <li>
                                <div className="sub-title"><b>First Aid</b></div>
                                <ul>
                                    <li><a href="#">First Aid Kits &amp; Supplies</a></li>
                                    <li><a href="#">Bandages &amp; Dressings</a></li>
                                    <li><a href="#">Antibacterial &amp; Antiseptics</a></li>
                                    <li><a href="#">Heat &amp; Anti-inflammatory Rubs</a></li>
                                    <li><a href="#">Syringes</a></li>
                                    <li><a href="#">Stings &amp; Bites</a></li>
                                </ul>
                                </li>
                                <li>
                                <ul>
                                    <li><a href="#">Thermometers</a></li>
                                    <li><a href="#">Pill Boxes</a></li>
                                    <li><a href="#">Plasters</a></li>
                                    <li><a href="#">Hot &amp; Cold Therapy</a></li>
                                    <li><a href="#">Compression Bandages</a></li>
                                    <li><a href="#">Sports</a></li>
                                </ul>
                                </li>
                            </ul>
                            </li>
                            <li className="with-sub-menu"><a href="shop_filter_drawer.html">Sexual Health</a>
                            <ul className="sub-menu" data-bg-image-src="images/suppliments5.png">
                                <li>
                                <ul>
                                    <li><a href="#">Condoms &amp; Contraceptives</a></li>
                                    <li><a href="#">Lubricants &amp; Creams</a></li>
                                    <li><a href="#">Vibrators</a></li>
                                    <li><a href="#">Adult Toys</a></li>
                                </ul>
                                </li>
                                <li>
                                <ul>
                                    <li><a href="#">Intimate Care</a></li>
                                    <li><a href="#">Mood Setters</a></li>
                                    <li><a href="#">Sexual Wellness Supplements</a></li>
                                    <li><a href="#">Pregnancy &amp; Fertility</a></li>
                                </ul>
                                </li>
                                <li>
                                <div className="sub-title"><b>By Category</b></div>
                                <ul>
                                    <li><a href="#">For Men</a></li>
                                    <li><a href="#">For Women</a></li>
                                </ul>
                                </li>
                            </ul>
                            </li>
                            <li className="with-sub-menu"><a href="shop_filter_drawer.html">Weight Loss &amp; Fitness</a>
                            <ul className="sub-menu" data-bg-image-src="images/suppliments6.png">
                                <li>
                                <div className="sub-title"><b>Weight Management</b></div>
                                <ul>
                                    <li><a href="#">Protein Powder</a></li>
                                    <li><a href="#">Weight Loss Supplements</a></li>
                                    <li><a href="#">Meal Replacements</a></li>
                                    <li><a href="#">Low Calorie Snacks</a></li>
                                    <li><a href="#">Bars &amp; Drinks</a></li>
                                </ul>
                                </li>
                                <li>
                                <div className="sub-title"><b>Sports Nutrition</b></div>
                                <ul>
                                    <li><a href="#">Muscle Building</a></li>
                                    <li><a href="#">Re-hydration</a></li>
                                    <li><a href="#">Weight Gain</a></li>
                                    <li><a href="#">Energy Supplements</a></li>
                                </ul>
                                </li>
                                <li>
                                <div className="sub-title"><b>By Category</b></div>
                                <ul>
                                    <li><a href="#">For Men</a></li>
                                    <li><a href="#">For Women</a></li>
                                    <li><a href="#">For 50+</a></li>
                                </ul>
                                </li>
                            </ul>
                            </li>
                            <li className="with-sub-menu hidden"><a href="#">Mum &amp; Baby</a>
                            <ul className="sub-menu" data-bg-image-src="images/suppliments7.png">
                                <li>
                                <div className="sub-title"><b>Feeding</b></div>
                                <ul>
                                    <li><a href="#">Bibs &amp; Smocks</a></li>
                                    <li><a href="#">Bottles</a></li>
                                    <li><a href="#">Breast Pumps</a></li>
                                    <li><a href="#">Trainer Cups</a></li>
                                    <li><a href="#">Baby Formula</a></li>
                                    <li><a href="#">Wind &amp; Reflux</a></li>
                                    <li><a href="#">Sterilisers</a></li>
                                    <li><a href="#">Teats &amp; Sealers</a></li>
                                    <li><a href="#">Organic</a></li>
                                    <li><a href="#">Baby Food</a></li>
                                    <li><a href="#">Feeding Systems</a></li>
                                    <li><a href="#">Bottle Warmers &amp; Sterilisers</a></li>
                                </ul>
                                </li>
                                <li>
                                <div className="sub-title"><b>Health Care</b></div>
                                <ul>
                                    <li><a href="#">Baby Pain &amp; Fever</a></li>
                                    <li><a href="#">Bathtime</a></li>
                                    <li><a href="#">Skin &amp; Hair Care</a></li>
                                    <li><a href="#">Powders &amp; Talcs</a></li>
                                    <li><a href="#">Cap &amp; Scalp Care</a></li>
                                    <li><a href="#">Organic Baby Care</a></li>
                                    <li><a href="#">Teething</a></li>
                                    <li><a href="#">Soothers</a></li>
                                    <li><a href="#">Thermometers</a></li>
                                    <li><a href="#">In-ear Thermometers</a></li>
                                </ul>
                                </li>
                                <li>
                                <div className="sub-title"><b>Maternity Needs</b></div>
                                <ul>
                                    <li><a href="#">Support Belts</a></li>
                                    <li><a href="#">Stretch Mark Creams</a></li>
                                    <li><a href="#">Nursing Accessories</a></li>
                                    <li><a href="#">Prenatal Supplements</a></li>
                                    <li><a href="#">Travel Accessories</a></li>
                                </ul>
                                </li>
                            </ul>
                            </li>
                            <li className="with-sub-menu hidden no-bg-img"><a href="#">Organic &amp; Gluten Free</a>
                            <ul className="sub-menu" data-bg-image-src="images/suppliments8.png">
                                <li>
                                <ul>
                                    <li><a href="#">Organic</a></li>
                                    <li><a href="#">Gluten Free</a></li>
                                    <li><a href="#">Sugar Free</a></li>
                                    <li><a href="#">Paleo</a></li>
                                    <li><a href="#">Vegan</a></li>
                                    <li><a href="#">Whole Foods</a></li>
                                    <li><a href="#">Super Foods</a></li>
                                    <li><a href="#">Personal Care</a></li>
                                </ul>
                                </li>
                            </ul>
                            </li>
                            <li className="with-sub-menu hidden"><a href="#">Home &amp; Pets</a>
                            <ul className="sub-menu" data-bg-image-src="images/suppliments9.png">
                                <li>
                                <div className="sub-title"><b>Snacks &amp; Drinks</b></div>
                                <ul>
                                    <li><a href="#">Snacks</a></li>
                                    <li><a href="#">Tea</a></li>
                                    <li><a href="#">Coffee</a></li>
                                    <li><a href="#">Beverages</a></li>
                                </ul>
                                </li>
                                <li>
                                <div className="sub-title"><b>Household Essentials</b></div>
                                <ul>
                                    <li><a href="#">Kitchen</a></li>
                                    <li><a href="#">Bathroom</a></li>
                                    <li><a href="#">Bedroom</a></li>
                                    <li><a href="#">Living room</a></li>
                                </ul>
                                </li>
                                <li>
                                <div className="sub-title"><b>Pet Care</b></div>
                                <ul>
                                    <li><a href="#">Dog Care</a></li>
                                    <li><a href="#">Cat Care</a></li>
                                    <li><a href="#">Horse Care</a></li>
                                    <li><a href="#">Pet Accessories</a></li>
                                </ul>
                                </li>
                            </ul>
                            </li>
                            <li className="with-sub-menu hidden no-bg-img"><a href="#">Travel</a>
                            <ul className="sub-menu" data-bg-image-src="images/suppliments10.png">
                                <li>
                                <ul>
                                    <li><a href="#">Sickness</a></li>
                                    <li><a href="#">Stockings</a></li>
                                    <li><a href="#">Accessories</a></li>
                                    <li><a href="#">Toiletries</a></li>
                                    <li><a href="#">Travel Kits</a></li>
                                    <li><a href="#">Travel Necessities</a></li>
                                </ul>
                                </li>
                            </ul>
                            </li>
                            <li className="with-sub-menu hidden no-bg-img"><a href="#">Parfumes &amp; Gifts</a>
                            <ul className="sub-menu" data-bg-image-src="images/suppliments11.png">
                                <li>
                                <div className="sub-title"><b>Fragrances</b></div>
                                <ul>
                                    <li><a href="#">Men</a></li>
                                    <li><a href="#">Women</a></li>
                                    <li><a href="#">Unisex</a></li>
                                    <li><a href="#">Kids</a></li>
                                </ul>
                                <div className="sub-title"><b>Giftsets</b></div>
                                <ul>
                                    <li><a href="#">Men</a></li>
                                    <li><a href="#">Women</a></li>
                                    <li><a href="#">Unisex</a></li>
                                </ul>
                                </li>
                            </ul>
                            </li>
                            <li><a id="mad-show-cat" href="#">Show More</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    {/*================ Navigation ================*/}
                    <nav className="mad-navigation-container">
                        <ul className="mad-navigation mad-navigation--vertical-sm">
                        <li className="menu-item menu-item-has-children home-menu mega-menu current-menu-item"><a href="#">Home</a>
                            {/*================ Sub Menu ================*/}
                            <ul className="sub-menu">
                            <li className="mad-home-title">
                                <div className="mad-home-menu-title">Choose Your Demo</div>
                            </li>
                            <li className="menu-item current-menu-item"><a href="index.html">
                                <div className="home-menu-img"><img src="images/images-197x200_home1.jpg" alt="" /></div>Home v1
                                </a>
                            </li>
                            <li className="menu-item"><a href="home_2.html">
                                <div className="home-menu-img"><img src="images/images-197x200_home2.jpg" alt="" /></div>Home v2
                                </a>
                            </li>
                            <li className="menu-item"><a href="home_3.html">
                                <div className="home-menu-img"><img src="images/images-197x200_home3.jpg" alt="" /></div>Home v3
                                </a>
                            </li>
                            <li className="menu-item"><a href="home_4.html">
                                <div className="home-menu-img"><img src="images/images-197x200_home4.jpg" alt="" /></div>Home v4
                                </a>
                            </li>
                            <li className="menu-item"><a href="pages_coming_soon.html">
                                <div className="home-menu-img"><img src="images/images-197x200_home5.jpg" alt="" /></div>Coming soon
                                </a>
                            </li>
                            </ul>
                            {/*================ End of Sub Menu ================*/}
                        </li>
                        <li className="menu-item menu-item-has-children mega-menu"><a href="#">Shop</a>
                            {/*================ Sub Menu ================*/}
                            <ul className="sub-menu">
                            <li className="menu-item menu-item-has-children"><a href="#" className="sub-title">With
                                Sidebar Layouts</a>
                                {/*================ Sub Menu ================*/}
                                <ul className="sub-menu">
                                <li className="menu-item"><a href="shop_grid_2c_sidebar.html">2 Column Grid</a></li>
                                <li className="menu-item"><a href="shop_grid_3c_sidebar.html">3 Column Grid</a></li>
                                <li className="menu-item"><a href="shop_grid_4c_sidebar.html">4 Column Grid</a></li>
                                <li className="menu-item"><a href="shop_list_sidebar.html">List View</a></li>
                                <li className="menu-item"><a href="shop_grid_3c_full_sidebar.html">3 Column Full Width Grid</a></li>
                                <li className="menu-item"><a href="shop_grid_4c_full_sidebar.html">4 Column Full Width Grid</a></li>
                                <li className="menu-item"><a href="shop_grid_5c_full_sidebar.html">5 Column Full Width Grid</a></li>
                                </ul>
                                {/*================ End of Sub Menu ================*/}
                            </li>
                            <li className="menu-item menu-item-has-children"><a href="#" className="sub-title">No Sidebar Layouts</a>
                                {/*================ Sub Menu ================*/}
                                <ul className="sub-menu">
                                <li className="menu-item"><a href="shop_grid_3c.html">3 Column Grid</a></li>
                                <li className="menu-item"><a href="shop_grid_4c.html">4 Column Grid</a></li>
                                <li className="menu-item"><a href="shop_grid_5c.html">5 Column Grid</a></li>
                                <li className="menu-item"><a href="shop_grid_4c_full.html">4 Column Full Width Grid</a></li>
                                <li className="menu-item"><a href="shop_grid_5c_full.html">5 Column Full Width Grid</a></li>
                                <li className="menu-item"><a href="shop_grid_6c_full.html">6 Column Full Width Grid</a></li>
                                </ul>
                                {/*================ End of Sub Menu ================*/}
                            </li>
                            <li className="menu-item menu-item-has-children"><a href="#" className="sub-title">Category Layouts</a>
                                {/*================ Sub Menu ================*/}
                                <ul className="sub-menu">
                                <li className="menu-item"><a href="shop_category.html">Only Categories</a></li>
                                <li className="menu-item"><a href="shop_grid_4c.html">Icon Categories</a></li>
                                <li className="menu-item"><a href="shop_grid_4c_full.html">Image Categories</a></li>
                                <li className="menu-item"><a href="shop_grid_5c.html">Background Image</a></li>
                                <li className="menu-item"><a href="shop_grid_3c_sidebar.html">Image Slider</a></li>
                                <li className="menu-item"><a href="shop_grid_4c_sidebar.html">Category Banner</a></li>
                                <li className="menu-item"><a href="shop_grid_5c_full.html">Special Deal Section</a></li>
                                </ul>
                                {/*================ End of Sub Menu ================*/}
                            </li>
                            <li className="menu-item menu-item-has-children"><a href="#" className="sub-title">Filter Positions</a>
                                {/*================ Sub Menu ================*/}
                                <ul className="sub-menu">
                                <li className="menu-item"><a href="shop_grid_3c_sidebar.html">Visible Filter</a></li>
                                <li className="menu-item"><a href="shop_filter_drawer.html">Filter Drawer</a></li>
                                <li className="menu-item"><a href="shop_filter_toggle.html">Toggle Filter</a></li>
                                <li className="menu-item"><a href="shop_filter_canvas.html">Filter Off Canvas</a></li>
                                </ul>
                                {/*================ End of Sub Menu ================*/}
                                <a href="#" className="sub-title">Pagination Variations</a>
                                {/*================ Sub Menu ================*/}
                                <ul className="sub-menu">
                                <li className="menu-item"><a href="shop_loading.html">Loading Infinity</a></li>
                                <li className="menu-item"><a href="shop_buttons.html">Load More Button</a></li>
                                </ul>
                                {/*================ End of Sub Menu ================*/}
                            </li>
                            <li className="menu-item menu-item-has-children"><a href="#" className="sub-title">Product Layouts</a>
                                {/*================ Sub Menu ================*/}
                                <ul className="sub-menu">
                                <li className="menu-item"><a href="shop_layout_default.html">Default</a></li>
                                <li className="menu-item"><a href="shop_layout_boxed.html">Boxed With Sidebar</a></li>
                                <li className="menu-item"><a href="shop_layout_info.html">Extended Info</a></li>
                                <li className="menu-item"><a href="shop_layout_gallery.html">Gallery</a></li>
                                <li className="menu-item"><a href="shop_layout_sticky_info.html">Sticky Info</a></li>
                                <li className="menu-item"><a href="shop_layout_full_sidebar.html">Full Width With Sidebar</a></li>
                                <li className="menu-item"><a href="shop_layout_full_grid.html">Full Width Grid</a></li>
                                </ul>
                                {/*================ End of Sub Menu ================*/}
                            </li>
                            <li className="menu-item menu-item-has-children"><a href="#" className="sub-title">Product Types</a>
                                {/*================ Sub Menu ================*/}
                                <ul className="sub-menu">
                                <li className="menu-item"><a href="shop_layout_default.html">Simple</a></li>
                                <li className="menu-item"><a href="shop_layout_sticky_info.html">Grouped</a></li>
                                <li className="menu-item"><a href="shop_layout_boxed.html">Variable</a></li>
                                <li className="menu-item"><a href="shop_layout_full_sidebar.html">External/Affiliate</a></li>
                                <li className="menu-item"><a href="shop_layout_gallery.html">On Sale</a></li>
                                <li className="menu-item"><a href="shop_layout_full_grid.html">Out Of Stock</a></li>
                                </ul>
                                {/*================ End of Sub Menu ================*/}
                            </li>
                            <li className="menu-item menu-item-has-children"><a href="#" className="sub-title">Shop Pages</a>
                                {/*================ Sub Menu ================*/}
                                <ul className="sub-menu">
                                <li className="menu-item"><a href="shop_cart.html">Cart</a></li>
                                <li className="menu-item"><a href="shop_checkout.html">Checkout</a></li>
                                <li className="menu-item"><a href="shop_wishlist.html">Wishlist</a></li>
                                <li className="menu-item"><a href="shop_account.html">My Account</a></li>
                                </ul>
                                {/*================ End of Sub Menu ================*/}
                            </li>
                            </ul>
                            {/*================ End of Sub Menu ================*/}
                        </li>
                        <li className="menu-item menu-item-has-children"><a href="#">Pages</a>
                            {/*================ Sub Menu ================*/}
                            <div className="sub-menu with-aside">
                            <ul>
                                <li className="menu-item"><a href="/about">About v1</a>
                                </li>
                                <li className="menu-item"><a href="/about">About v2</a>
                                </li>
                                <li className="menu-item"><a href="/contact">Contact v1</a>
                                </li>
                                <li className="menu-item"><a href="/contact">Contact v2</a>
                                </li>
                                <li className="menu-item"><a href="#">FAQs</a>
                                </li>
                                <li className="menu-item"><a href="/item">Item Page</a>
                                </li>
                                <li className="menu-item"><a href="pages_404.html">404 Page</a>
                                </li></ul>
                            <div className="sub-menu-aside">
                                <div className="mad-banners">
                                <a href="https://themeforest.net/user/monkeysan/portfolio" className="banner-link" target="_blank" />
                                <div className="mad-banner" data-bg-image-src="images/584x320_img1.jpg">
                                    <div className="content-element-4">
                                    <div className="content-element-3"><img src="images/images-life_ext.png" alt="" /></div>
                                    <h6 className="mad-title color-red style-3">Save Up To</h6>
                                    <h2 className="mad-title color-red style-3 big-title">25% OFF</h2>
                                    <h3 className="mad-title style-2">On Selected
                                        Products</h3>
                                    </div>
                                    <div className="content-element-4">
                                    <a href="#" className="btn btn-style-4">Shop Now!</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/*================ End of Sub Menu ================*/}
                        </li>
                        <li className="menu-item menu-item-has-children mega-menu"><a href="#">Elements</a>
                            {/*================ Sub Menu ================*/}
                            <ul className="sub-menu">
                            <li className="menu-item menu-item-has-children"><a href="#" className="sub-title">General Elements <span className="no-title">1</span></a>
                                {/*================ Sub Menu ================*/}
                                <ul className="sub-menu">
                                <li className="menu-item"><a href="elements_accordions_toggles.html">Accordions
                                    &amp; Toggles</a></li>
                                <li className="menu-item"><a href="elements_alert_boxes_buttons.html">Alert Boxes
                                    &amp; Buttons</a></li>
                                <li className="menu-item"><a href="elements_banners.html">Banners and Sliders</a></li>
                                <li className="menu-item"><a href="elements_call_to_actions.html">Call to Actions</a></li>
                                <li className="menu-item"><a href="elements_counters.html">Counters &amp; Countdowns</a></li>
                                <li className="menu-item"><a href="elements_icon_boxes.html">Icon With Text</a></li>
                                </ul>
                                {/*================ End of Sub Menu ================*/}
                            </li>
                            <li className="menu-item menu-item-has-children"><a href="#" className="sub-title no-title">General Elements
                                2</a>
                                {/*================ Sub Menu ================*/}
                                <ul className="sub-menu">
                                <li className="menu-item"><a href="elements_image_boxes.html">Image With Text</a></li>
                                <li className="menu-item"><a href="elements_pricing.html">Pricing Tables</a></li>
                                <li className="menu-item"><a href="elements_tables.html">Tables &amp; Progress Bars</a></li>
                                <li className="menu-item"><a href="elements_tabs.html">Tabs &amp; Tour Sections</a></li>
                                <li className="menu-item"><a href="elements_team.html">Team Members &amp; Partners</a></li>
                                <li className="menu-item"><a href="elements_testimonials.html">Testimonials</a></li>
                                </ul>
                                {/*================ End of Sub Menu ================*/}
                            </li>
                            <li className="menu-item menu-item-has-children"><a href="#" className="sub-title">Shop Elements</a>
                                {/*================ Sub Menu ================*/}
                                <ul className="sub-menu">
                                <li className="menu-item"><a href="elements_categories.html">Product Categories</a></li>
                                <li className="menu-item"><a href="elements_carousels.html">Product Carousels</a></li>
                                <li className="menu-item"><a href="elements_lists.html">Product Lists</a></li>
                                </ul>
                                {/*================ End of Sub Menu ================*/}
                            </li>
                            <li className="menu-item menu-item-has-children"><a href="#" className="sub-title">Typography</a>
                                {/*================ Sub Menu ================*/}
                                <ul className="sub-menu">
                                <li className="menu-item"><a href="elements_dropcaps_blockquotes.html">Dropcaps
                                    &amp; Blockquotes</a></li>
                                <li className="menu-item"><a href="elements_headings_and_paragraphs.html">Headings
                                    &amp; Paragraphs</a></li>
                                <li className="menu-item"><a href="elements_highlights_tooltips_listings.html">Highlights, Tooltips
                                    and
                                    Listings</a></li>
                                <li className="menu-item"><a href="index.html">RTL Version</a></li>
                                </ul>
                                {/*================ End of Sub Menu ================*/}
                            </li>
                            <li className="menu-item menu-item-has-children sub-wrap"><a href="#" className="sub-title">Header and
                                Footer
                                Layouts</a>
                                <div className="sub-menu">
                                <ul>
                                    <li className="menu-item"><a href="index.html">Header v1</a></li>
                                    <li className="menu-item"><a href="home_2.html">Header v2</a></li>
                                    <li className="menu-item"><a href="home_3.html">Header v3</a></li>
                                    <li className="menu-item"><a href="home_4.html">Header v4</a></li>
                                </ul>
                                <ul>
                                    <li className="menu-item"><a href="index.html">Footer v1</a></li>
                                    <li className="menu-item"><a href="home_2.html">Footer v2</a></li>
                                    <li className="menu-item"><a href="home_3.html">Footer v3</a></li>
                                    <li className="menu-item"><a href="home_4.html">Footer v4</a></li>
                                </ul>
                                </div>
                            </li>
                            </ul>
                            {/*================ End of Sub Menu ================*/}
                        </li>
                        <li className="menu-item menu-item-has-children"><a href="#">Blog</a>
                            {/*================ Sub Menu ================*/}
                            <ul className="sub-menu">
                            <li className="menu-item menu-item-has-children"><a href="#">Classic Blog</a>
                                {/*================ Sub Menu ================*/}
                                <ul className="sub-menu">
                                <li className="menu-item"><a href="blog_classic_sidebar.html">With Right Sidebar</a>
                                </li>
                                <li className="menu-item"><a href="blog_classic.html">Without Sidebar</a>
                                </li>
                                </ul>
                                {/*================ End of Sub Menu ================*/}
                            </li>
                            <li className="menu-item menu-item-has-children"><a href="blog_masonry.html">Masonry Blog</a>
                                {/*================ Sub Menu ================*/}
                                <ul className="sub-menu">
                                <li className="menu-item"><a href="blog_masonry_sidebar.html">With Right Sidebar</a>
                                </li>
                                <li className="menu-item"><a href="blog_masonry.html">Without Sidebar</a>
                                </li>
                                </ul>
                                {/*================ End of Sub Menu ================*/}
                            </li>
                            <li className="menu-item menu-item-has-children"><a href="#">Single Blog Post</a>
                                {/*================ Sub Menu ================*/}
                                <ul className="sub-menu">
                                <li className="menu-item"><a href="blog_single_sidebar.html">With Right Sidebar</a>
                                </li>
                                <li className="menu-item"><a href="blog_single.html">Without Sidebar</a>
                                </li>
                                </ul>
                                {/*================ End of Sub Menu ================*/}
                            </li>
                            </ul>
                            {/*================ End of Sub Menu ================*/}
                        </li>
                        </ul>
                    </nav>
                    {/*================ End of Navigation ================*/}
                    <div className="mad-header-item">
                        <div className="mad-shipping">
                        <i className="material-icons-outlined">local_shipping</i>
                        <span>Free Shipping</span> on US Orders Over $49
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </header>
            {/*================ End of Header ================*/}
            </div>
            </div>
        );
    }
}
