import React , {Component} from 'react';

export class Item extends Component {
    render(){
      return (
        <div className="mad-body--scheme-brown">
            <div className="mad-preloader"></div>
            <div id="mad-page-wrapper" className="mad-page-wrapper">
                <div className="mad-content no-pd">
                    <div className="container">
                    <div className="mad-section">
                        <div className="row hr-size-2 vr-size-2 sticky-bar">
                        <main id="main" className="col-xl-9 col-lg-8">
                            <div className="content-element-10">
                            <div className="mad-product mad-product-single">
                                <div className="row hr-size-2 vr-size-2 sticky-bar">
                                <div className="col-xl-6">
                                    <div className="image-preview-container type-2">
                                    {/* - - - - - - - - - - - - - Image Preview Container - - - - - - - - - - - - - - - - */}
                                    <div className="image-preview">
                                        <span className="mad-label">Sale! <br />-30%</span>
                                        <a href="#">
                                        <img id="zoom-image" src="images/images-440x440_product1.jpg" alt="" />
                                        </a>
                                        <a href="images/440x440_product1.jpg" className="mad-zoom-img" data-fancybox="group"><i className="material-icons">fullscreen</i></a>
                                    </div>
                                    {/*/ .image-preview*/}
                                    <div className="mad-thumb-holer">
                                        {/* - - - - - - - - - - - - - Thumbnails - - - - - - - - - - - - - - - - */}
                                        <div className="mad-product-thumbs" id="thumbnails">
                                        <div className="mad-grid-item">
                                            <a className="active" href="#" data-image="images/440x440_product1.jpg" data-zoom-image="images/440x440_product1.jpg">
                                            <img src="images/images-104x104_product1.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="mad-grid-item">
                                            <a href="images/440x440_product2.jpg" data-image="images/440x440_product2.jpg" data-zoom-image="images/440x440_product2.jpg" data-fancybox="group">
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
                                    <h3 className="mad-product-title">FakeBlaster Keto-Fit Protein Shake 300g
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
                                        Aenean auctor wisi et urna. Aliquam erat volutpat.</p>
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
                            <div className="content-element-10">
                            {/*================ Tabs ================*/}
                            <div className="mad-tabs mad-tabs--style-2">
                                {/*================ Tabs Navigation ================*/}
                                <div role="tablist" aria-label="Tabs v1" className="mad-tabs-nav">
                                <span className="mad-active"><a id="tab-4-link" href="#tab-4" role="tab" aria-selected="true" aria-controls="tab-4" className="mad-tab-link">Description</a>
                                </span>
                                <span><a id="tab-5-link" href="#tab-5" role="tab" aria-selected="false" aria-controls="tab-5" className="mad-tab-link">Additional Information</a>
                                </span>
                                <span><a id="tab-6-link" href="#tab-6" role="tab" aria-selected="false" aria-controls="tab-6" className="mad-tab-link">Reviews (2)</a>
                                </span>
                                <span><a id="tab-7-link" href="#tab-7" role="tab" aria-selected="false" aria-controls="tab-7" className="mad-tab-link">Shipping and Returns</a>
                                </span>
                                </div>
                                {/*================ End of Tabs Navigation ================*/}
                                {/*================ Tabs Container ================*/}
                                <div className="mad-tabs-container">
                                {/*================ Tab ================*/}
                                <div id="tab-4" tabIndex={0} role="tabpanel" aria-labelledby="tab-4-link" className="mad-tab">
                                    <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                                    elementum vel, cursus
                                    eleifend,
                                    elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu
                                    lacus.
                                    Vestibulum libero
                                    nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh. Etiam cursus leo vel
                                    metus. Nulla
                                    facilisi.
                                    Aenean nec eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                                    cubilia Curae.</p>
                                    <ul className="mad-list--icon">
                                    <li>Suspendisse sollicitudin velit sed leo.<i className="icon material-icons">arrow_forward</i></li>
                                    <li>Ut pharetra augue nec augue<i className="icon material-icons">arrow_forward</i></li>
                                    <li>Nam elit agna, endrerit sit amet, tincidunt ac, viverra sed, nulla<i className="icon material-icons">arrow_forward</i></li>
                                    <li>Donec porta diam eu massa<i className="icon material-icons">arrow_forward</i></li>
                                    <li>Quisque diam lorem, interdum vitae, dapibus ac.<i className="icon material-icons">arrow_forward</i></li>
                                    </ul>
                                </div>
                                {/*================ End of Tab ================*/}
                                {/*================ Tab ================*/}
                                <div id="tab-5" tabIndex={0} role="tabpanel" aria-labelledby="tab-5-link" className="mad-tab">
                                    <div className="mad-table-wrap">
                                    <table className="mad-table mad-table--vertical">
                                        <tbody>
                                        <tr>
                                            <th>Ingredients</th>
                                            <td>Pea protein 78%, Medium Chain Triglyceride (MCT) Powder 17%, Cocoa Powder, Collagen
                                            Powder, Natural
                                            Chocolate Flavour,
                                            Organic Hemp Seed Protein, Thaumatin.</td>
                                        </tr>
                                        <tr>
                                            <th>Size</th>
                                            <td>300g</td>
                                        </tr>
                                        <tr>
                                            <th>Serving Size</th>
                                            <td>30g scoop with 1 cup (250mL) of water</td>
                                        </tr>
                                        <tr>
                                            <th>Servings Per Pack</th>
                                            <td>10</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                                {/*================ End of Tab ================*/}
                                {/*================ Tab ================*/}
                                <div id="tab-6" tabIndex={0} role="tabpanel" aria-labelledby="tab-6-link" className="mad-tab">
                                    <div className="content-element-10">
                                    <h5 className="mad-page-title">2 Reviews For FakeBlaster Keto-Fit Protein Shake 300g</h5>
                                    <ol className="comments-list">
                                        <li className="comment comment-has-children">
                                        <div className="comment-body clearfix">
                                            <div className="comment-author-avatar"><a href="#"><img src="images/images-80x80_photo1.jpg" alt="Caroline Beek" /></a></div>
                                            <div className="comment-author-info">
                                            <cite className="fn">Caroline Beek</cite>
                                            <div className="comment-meta">
                                                <time dateTime="2021-10-17">October 17, 2021 at 2:41 pm</time>
                                                <div data-estimate={5} className="mad-rating size-small" />
                                            </div>
                                            <div className="comment-content">
                                                <p>Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit
                                                amet, euismod
                                                in, auctor ut, ligula. </p>
                                            </div>
                                            </div>
                                        </div>
                                        </li>
                                        <li className="comment comment-has-children">
                                        <div className="comment-body clearfix">
                                            <div className="comment-author-avatar"><a href="#"><img src="images/images-80x80_photo2.jpg" alt="John Smith" /></a>
                                            </div>
                                            <div className="comment-author-info">
                                            <cite className="fn">John Smith</cite>
                                            <div className="comment-meta">
                                                <time dateTime="2021-10-17">October 13, 2020 at 2:41 pm</time>
                                                <div data-estimate={5} className="mad-rating size-small" />
                                            </div>
                                            <div className="comment-content">
                                                <p>Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis.</p>
                                            </div>
                                            </div>
                                        </div>
                                        </li>
                                    </ol>
                                    </div>
                                    <div className="content-element-10">
                                    <h5 className="mad-page-title">Add a Review</h5>
                                    <div className="content-element-2">
                                        <div className="mad-share-wrap">
                                        <span>Social Connect:</span>
                                        <div className="mad-social-icons type-2">
                                            <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                            <li><a href="#" className="color-2"><i className="fab fa-twitter" /></a></li>
                                            <li><a href="#" className="color-4"><i className="fab fa-pinterest-p" /></a></li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="content-element-3">
                                        <p>Your email address will not be published. Required fields are marked <span className="req">*</span></p>
                                    </div>
                                    <form className="mad-contact-form">
                                        <div className="row">
                                        <div className="col-12">
                                            <div className="row">
                                            <div className="col-sm-4">
                                                <label className="content-element-2">Your Rating <span>*</span></label>
                                                <div data-estimate={0} className="mad-rating size-big" />
                                            </div>
                                            <div className="col-sm-4">
                                                <label>Name <span>*</span></label>
                                                <input type="email" placeholder="Name" />
                                            </div>
                                            <div className="col-sm-4">
                                                <label>Email address</label>
                                                <input type="email" placeholder="Email address" />
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label>Your Review <span>*</span></label>
                                            <textarea rows={6} placeholder="Your review" defaultValue={""} />
                                        </div>
                                        <div className="col-12">
                                            <div style={{display: 'block'}} className="mad-toggled-fields">
                                            <input type="checkbox" name="checkbox-1" id="checkbox-1" />
                                            <label htmlFor="checkbox-1" className="mad-label-checkbox">Save my name, email, and website in
                                                this browser
                                                for the next time I comment.</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="align-right"><a href="#" className="btn btn-big">Add Review</a></div>
                                        </div>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                                {/*================ End of Tab ================*/}
                                {/*================ Tab ================*/}
                                <div id="tab-7" tabIndex={0} role="tabpanel" aria-labelledby="tab-7-link" className="mad-tab">
                                    <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                                    elementum vel, cursus
                                    eleifend,
                                    elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu
                                    lacus.
                                    Vestibulum libero
                                    nisl, porta vel, scelerisque eget.</p>
                                </div>
                                {/*================ End of Tab ================*/}
                                </div>
                                {/*================ End of Tabs Container ================*/}
                            </div>
                            {/*================ End of Tabs ================*/}
                            </div>
                            <h3 className="mad-page-title with-carousel">You May Be Interested In…
                            </h3>
                            <div className="mad-products owl-carousel mad-grid mad-grid--cols-3 no-dots nav-top">
                            {/* owl item */}
                            <div className="mad-grid-item">
                                {/* Product */}
                                <div className="mad-product">
                                <div className="mad-product-image">
                                    <span className="mad-label">Sale! <br />-20%</span>
                                    <img src="images/images-264x264_product11.jpg" alt="" />
                                    <div className="mad-actions">
                                    <a href="#"><i className="material-icons">compare_arrows</i></a>
                                    <a href="#"><i className="material-icons">favorite_border</i></a>
                                    <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                                    </div>
                                </div>
                                {/* product-info */}
                                <div className="mad-product-description">
                                    <a href="#" className="mad-product-cat">Fish Oil &amp; Omega 3, 6, 9</a>
                                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Nature's Road
                                        Odourless Fish Oil 1000mg Cap X 450</a>
                                    </h6>
                                </div>
                                {/*/ product-info */}
                                <div className="mad-product-info">
                                    <div data-estimate={5} className="mad-rating" />
                                    <div className="mad-info-item">
                                    <div className="mad-product-price">$24.79 <span>$30.99</span></div>
                                    <a href="shop_cart.html" className="mad-cart"><i className="material-icons-outlined">shopping_bag</i></a>
                                    </div>
                                    <div className="mad-info-item">
                                    <span>Stock Level</span>
                                    <div className="mad-progress-bars mad-progress-bars--secondary">
                                        <div className="mad-progress-bars-item">
                                        <div role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} className="mad-progress-bar">
                                            <div style={{width: '75%'}} className="mad-progress-bar-indicator" />
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                {/* End of Product */}
                            </div>
                            {/* / owl item */}
                            {/* owl item */}
                            <div className="mad-grid-item">
                                {/* Product */}
                                <div className="mad-product">
                                <div className="mad-product-image">
                                    <img src="images/images-264x264_product12.jpg" alt="" />
                                    <div className="mad-actions">
                                    <a href="#"><i className="material-icons">compare_arrows</i></a>
                                    <a href="#"><i className="material-icons">favorite_border</i></a>
                                    <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                                    </div>
                                </div>
                                {/* product-info */}
                                <div className="mad-product-description">
                                    <a href="#" className="mad-product-cat">Bone &amp; Joints Health</a>
                                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Caltrain Bone
                                        Health Tab X 100</a></h6>
                                </div>
                                {/*/ product-info */}
                                <div className="mad-product-info">
                                    <div className="mad-info-item">
                                    <div className="mad-product-price">$17.99 </div>
                                    <a href="shop_cart.html" className="mad-cart"><i className="material-icons-outlined">shopping_bag</i></a>
                                    </div>
                                    <div className="mad-info-item">
                                    <span>Stock Level</span>
                                    <div className="mad-progress-bars mad-progress-bars--secondary">
                                        <div className="mad-progress-bars-item">
                                        <div role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} className="mad-progress-bar">
                                            <div style={{width: '40%'}} className="mad-progress-bar-indicator" />
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                {/* End of Product */}
                            </div>
                            {/* / owl item */}
                            {/* owl item */}
                            <div className="mad-grid-item">
                                {/* Product */}
                                <div className="mad-product">
                                <div className="mad-product-image">
                                    <img src="images/images-264x264_product13.jpg" alt="" />
                                    <div className="mad-actions">
                                    <a href="#"><i className="material-icons">compare_arrows</i></a>
                                    <a href="#"><i className="material-icons">favorite_border</i></a>
                                    <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                                    </div>
                                </div>
                                {/* product-info */}
                                <div className="mad-product-description">
                                    <a href="#" className="mad-product-cat">Antioxidants</a>
                                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Nature's Road
                                        Super
                                        Foods Super Greens + Reds 100g</a>
                                    </h6>
                                </div>
                                {/*/ product-info */}
                                <div className="mad-product-info">
                                    <div data-estimate={5} className="mad-rating" />
                                    <div className="mad-info-item">
                                    <div className="mad-product-price">$24.29 </div>
                                    <a href="shop_cart.html" className="mad-cart"><i className="material-icons-outlined">shopping_bag</i></a>
                                    </div>
                                    <div className="mad-info-item">
                                    <span>Stock Level</span>
                                    <div className="mad-progress-bars mad-progress-bars--secondary">
                                        <div className="mad-progress-bars-item">
                                        <div role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} className="mad-progress-bar">
                                            <div style={{width: '75%'}} className="mad-progress-bar-indicator" />
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                {/* End of Product */}
                            </div>
                            {/* / owl item */}
                            </div>
                        </main>
                        <aside id="sidebar" className="col-xl-3 col-lg-4 mad-sidebar">
                            <div className="mad-widget">
                            <div className="content-element">
                                <a href="#" className="btn w-100"><i className="material-icons">help_outline</i><span>Ask About This
                                    Product</span></a>
                            </div>
                            <div className="mad-widget-bg">
                                {/*================ Icon Boxes ================*/}
                                <div className="mad-icon-boxes size-2 hr-type item-col-1">
                                <div className="mad-col">
                                    {/*================ Icon Box ================*/}
                                    <article className="mad-icon-box">
                                    <i className="mad-icon-box-icon"><img className="svg" src="images/lekarna_svg_icons-delivery.svg" alt="" /></i>
                                    <div className="mad-icon-box-content">
                                        <h6 className="mad-icon-box-title">Fast Delivery</h6>
                                        <p>Within 1-4 business days</p>
                                    </div>
                                    </article>
                                    {/*================ End of Icon Box ================*/}
                                </div>
                                <div className="mad-col">
                                    {/*================ Icon Box ================*/}
                                    <article className="mad-icon-box">
                                    <i className="mad-icon-box-icon"><img className="svg" src="images/lekarna_svg_icons-refund.svg" alt="" /></i>
                                    <div className="mad-icon-box-content">
                                        <h6 className="mad-icon-box-title">Return &amp; Refund</h6>
                                        <p>30 days return policy</p>
                                    </div>
                                    </article>
                                    {/*================ End of Icon Box ================*/}
                                </div>
                                <div className="mad-col">
                                    {/*================ Icon Box ================*/}
                                    <article className="mad-icon-box">
                                    <i className="mad-icon-box-icon"><img className="svg" src="images/lekarna_svg_icons-cards.svg" alt="" /></i>
                                    <div className="mad-icon-box-content">
                                        <h6 className="mad-icon-box-title">Safe Shopping</h6>
                                        <p>100% secure payment</p>
                                    </div>
                                    </article>
                                    {/*================ End of Icon Box ================*/}
                                </div>
                                <div className="mad-col">
                                    {/*================ Icon Box ================*/}
                                    <article className="mad-icon-box">
                                    <i className="mad-icon-box-icon"><img className="svg" src="images/lekarna_svg_icons-shop.svg" alt="" /></i>
                                    <div className="mad-icon-box-content">
                                        <h6 className="mad-icon-box-title">Click &amp; Collect</h6>
                                        <p>In any of our stores</p>
                                    </div>
                                    </article>
                                    {/*================ End of Icon Box ================*/}
                                </div>
                                <div className="mad-col">
                                    <div className="btn-set mad-paycards">
                                    <a href="#"><img src="images/images-72x40_pay1.jpg" alt="" /></a>
                                    <a href="#"><img src="images/images-72x40_pay2.jpg" alt="" /></a>
                                    <a href="#"><img src="images/images-72x40_pay3.jpg" alt="" /></a>
                                    <a href="#"><img src="images/images-72x40_pay4.jpg" alt="" /></a>
                                    <a href="#"><img src="images/images-72x40_pay5.jpg" alt="" /></a>
                                    <a href="#"><img src="images/images-72x40_pay6.jpg" alt="" /></a>
                                    </div>
                                </div>
                                </div>
                                {/*================ End of Icon Boxes ================*/}
                            </div>
                            </div>
                            <div className="mad-widget">
                            <div className="mad-products-with-countdown">
                                <h6 className="mad-page-title with-carousel">Special Deal</h6>
                                <div className="mad-products style-2 owl-carousel mad-grid mad-grid--cols-1 no-dots nav-top">
                                {/* owl item */}
                                <div className="mad-grid-item">
                                    {/* Product */}
                                    <div className="mad-product">
                                    <div className="mad-product-image">
                                        <span className="mad-label">Sale! <br />-20%</span>
                                        <img src="images/images-288x288_product1.jpg" alt="" />
                                        <div className="mad-actions">
                                        <a href="#"><i className="material-icons">compare_arrows</i></a>
                                        <a href="#"><i className="material-icons">favorite_border</i></a>
                                        <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                                        </div>
                                    </div>
                                    {/* product-info */}
                                    <div className="mad-product-description">
                                        <a href="#" className="mad-product-cat">Vitamins &amp; Supplements</a>
                                        <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Nature's Road
                                            Kids Smart Vita
                                            Gummies Immune Defence...</a></h6>
                                    </div>
                                    {/*/ product-info */}
                                    <div className="mad-product-info">
                                        <div className="mad-info-item">
                                        <div className="mad-product-price">$19.99 <span>$27.99</span></div>
                                        <a href="shop_cart.html" className="mad-cart"><i className="material-icons-outlined">shopping_bag</i></a>
                                        </div>
                                        <div className="mad-info-item">
                                        <div className="mad-info-title">Hurry Up! Offer ends in:</div>
                                        <div data-year={2021} data-month={11} data-day={6} data-hours={15} data-minutes={0} data-seconds={0} className="mad-countdown size-2" />
                                        </div>
                                    </div>
                                    </div>
                                    {/* End of Product */}
                                </div>
                                {/* / owl item */}
                                {/* owl item */}
                                <div className="mad-grid-item">
                                    {/* Product */}
                                    <div className="mad-product">
                                    <div className="mad-product-image">
                                        <span className="mad-label">Sale! <br />-35%</span>
                                        <img src="images/images-288x288_product2.jpg" alt="" />
                                        <div className="mad-actions">
                                        <a href="#"><i className="material-icons">compare_arrows</i></a>
                                        <a href="#"><i className="material-icons">favorite_border</i></a>
                                        <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                                        </div>
                                    </div>
                                    {/* product-info */}
                                    <div className="mad-product-description">
                                        <a href="#" className="mad-product-cat">Weight Loss &amp; Fitness</a>
                                        <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Otlins Endulge
                                            Milk Choco­late Mint Crisp
                                            Bar
                                            30g X 5</a></h6>
                                    </div>
                                    {/*/ product-info */}
                                    <div className="mad-product-info">
                                        <div className="mad-info-item">
                                        <div className="mad-product-price">$11.69 <span>$17.99</span></div>
                                        <a href="shop_cart.html" className="mad-cart"><i className="material-icons-outlined">shopping_bag</i></a>
                                        </div>
                                        <div className="mad-info-item">
                                        <div className="mad-info-title">Hurry Up! Offer ends in:</div>
                                        <div data-year={2021} data-month={11} data-day={6} data-hours={15} data-minutes={0} data-seconds={0} className="mad-countdown size-2" />
                                        </div>
                                    </div>
                                    </div>
                                    {/* End of Product */}
                                </div>
                                {/* / owl item */}
                                {/* owl item */}
                                <div className="mad-grid-item">
                                    {/* Product */}
                                    <div className="mad-product">
                                    <div className="mad-product-image">
                                        <span className="mad-label">Sale! <br />-22%</span>
                                        <img src="images/images-288x288_product3.jpg" alt="" />
                                        <div className="mad-actions">
                                        <a href="#"><i className="material-icons">compare_arrows</i></a>
                                        <a href="#"><i className="material-icons">favorite_border</i></a>
                                        <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                                        </div>
                                    </div>
                                    {/* product-info */}
                                    <div className="mad-product-description">
                                        <a href="#" className="mad-product-cat">COVID-19 Essentials</a>
                                        <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">AirPio
                                            Mucus Clearance &amp; Lung Expansion
                                            Device</a></h6>
                                    </div>
                                    {/*/ product-info */}
                                    <div className="mad-product-info">
                                        <div className="mad-info-item">
                                        <div className="mad-product-price">$218.39 <span>$279.99</span></div>
                                        <a href="shop_cart.html" className="mad-cart"><i className="material-icons-outlined">shopping_bag</i></a>
                                        </div>
                                        <div className="mad-info-item">
                                        <div className="mad-info-title">Hurry Up! Offer ends in:</div>
                                        <div data-year={2021} data-month={11} data-day={6} data-hours={15} data-minutes={0} data-seconds={0} className="mad-countdown size-2" />
                                        </div>
                                    </div>
                                    </div>
                                    {/* End of Product */}
                                </div>
                                {/* / owl item */}
                                </div>
                            </div>
                            </div>
                            <div className="mad-widget">
                            <h5 className="mad-widget-title">Recent Products</h5>
                            <div className="mad-products hr-type style-2">
                                <div className="mad-product">
                                <div className="mad-product-image">
                                    <img src="images/images-144x144_product4.jpg" alt="" />
                                </div>
                                <div className="mad-col">
                                    {/* product-info */}
                                    <div className="mad-product-description">
                                    <a href="#" className="mad-product-cat">Skin Care</a>
                                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Jack Phunkett
                                        Super­Fade Face Cream ...</a>
                                    </h6>
                                    </div>
                                    {/*/ product-info */}
                                    <div className="mad-product-info">
                                    <div className="mad-info-item">
                                        <div className="mad-product-price">$17.99</div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="mad-product">
                                <div className="mad-product-image">
                                    <img src="images/images-176x176_product8.jpg" alt="" />
                                </div>
                                <div className="mad-col">
                                    {/* product-info */}
                                    <div className="mad-product-description">
                                    <a href="#" className="mad-product-cat">Waxing &amp; Hair Removal</a>
                                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Minea For Men
                                        Extra Moisturising ...</a>
                                    </h6>
                                    </div>
                                    {/*/ product-info */}
                                    <div className="mad-product-info">
                                    <div className="mad-info-item">
                                        <div className="mad-product-price">$7.95</div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="mad-product">
                                <div className="mad-product-image">
                                    <img src="images/images-144x144_product8.jpg" alt="" />
                                </div>
                                <div className="mad-col">
                                    {/* product-info */}
                                    <div className="mad-product-description">
                                    <a href="#" className="mad-product-cat">Bath &amp; Body</a>
                                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Posken Intensive
                                        Moisture Body ...</a>
                                    </h6>
                                    </div>
                                    {/*/ product-info */}
                                    <div className="mad-product-info">
                                    <div className="mad-info-item">
                                        <div className="mad-product-price">$12.99</div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </aside>
                        </div>
                    </div>
                    <div className="mad-section no-pd mad-section--stretched mad-colorizer--scheme-color-2">
                        <div className="mad-sub-wrap">
                        <h5 className="mad-page-title">Get Our Best Deals Straight to Your Inbox!</h5>
                        <div className="mad-col">
                            <form className="mad-newsletter-form one-line">
                            <input type="email" name="email" placeholder="Enter Your Email Address" />
                            <button type="submit" className="btn btn-big btn-style-3"><span>Sign Up</span></button>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}