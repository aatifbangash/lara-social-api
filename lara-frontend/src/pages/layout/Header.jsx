import {Outlet} from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="responsive-header">
                <div className="mh-head first Sticky">
        <span className="mh-btns-left">
          <a className="" href="#menu">
            <i className="fa fa-align-justify"/>
          </a>
        </span>
                    <span className="mh-text">
          <a href="newsfeed.html" title="">
            <img src="assets/images/logo2.png" alt=""/>
          </a>
        </span>
                    <span className="mh-btns-right">
          <a className="fa fa-sliders" href="#shoppingbag"/>
        </span>
                </div>
                <div className="mh-head second">
                    <form className="mh-form">
                        <input placeholder="search"/>
                        <a href="#/" className="fa fa-search"/>
                    </form>
                </div>
                <nav id="menu" className="res-menu">
                    <ul>
                        <li>
                            <span>Home</span>
                            <ul>
                                <li>
                                    <a href="index-2.html" title="">
                                        Home Social
                                    </a>
                                </li>
                                <li>
                                    <a href="index2.html" title="">
                                        Home Social 2
                                    </a>
                                </li>
                                <li>
                                    <a href="index-company.html" title="">
                                        Home Company
                                    </a>
                                </li>
                                <li>
                                    <a href="landing.html" title="">
                                        Login page
                                    </a>
                                </li>
                                <li>
                                    <a href="logout.html" title="">
                                        Logout Page
                                    </a>
                                </li>
                                <li>
                                    <a href="newsfeed.html" title="">
                                        news feed
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>Time Line</span>
                            <ul>
                                <li>
                                    <a href="time-line.html" title="">
                                        timeline
                                    </a>
                                </li>
                                <li>
                                    <a href="timeline-friends.html" title="">
                                        timeline friends
                                    </a>
                                </li>
                                <li>
                                    <a href="timeline-groups.html" title="">
                                        timeline groups
                                    </a>
                                </li>
                                <li>
                                    <a href="timeline-pages.html" title="">
                                        timeline pages
                                    </a>
                                </li>
                                <li>
                                    <a href="timeline-photos.html" title="">
                                        timeline photos
                                    </a>
                                </li>
                                <li>
                                    <a href="timeline-videos.html" title="">
                                        timeline videos
                                    </a>
                                </li>
                                <li>
                                    <a href="fav-page.html" title="">
                                        favourit page
                                    </a>
                                </li>
                                <li>
                                    <a href="groups.html" title="">
                                        groups page
                                    </a>
                                </li>
                                <li>
                                    <a href="page-likers.html" title="">
                                        Likes page
                                    </a>
                                </li>
                                <li>
                                    <a href="people-nearby.html" title="">
                                        people nearby
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>Account Setting</span>
                            <ul>
                                <li>
                                    <a href="create-fav-page.html" title="">
                                        create fav page
                                    </a>
                                </li>
                                <li>
                                    <a href="edit-account-setting.html" title="">
                                        edit account setting
                                    </a>
                                </li>
                                <li>
                                    <a href="edit-interest.html" title="">
                                        edit-interest
                                    </a>
                                </li>
                                <li>
                                    <a href="edit-password.html" title="">
                                        edit-password
                                    </a>
                                </li>
                                <li>
                                    <a href="edit-profile-basic.html" title="">
                                        edit profile basics
                                    </a>
                                </li>
                                <li>
                                    <a href="edit-work-eductation.html" title="">
                                        edit work educations
                                    </a>
                                </li>
                                <li>
                                    <a href="messages.html" title="">
                                        message box
                                    </a>
                                </li>
                                <li>
                                    <a href="inbox.html" title="">
                                        Inbox
                                    </a>
                                </li>
                                <li>
                                    <a href="notifications.html" title="">
                                        notifications page
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>forum</span>
                            <ul>
                                <li>
                                    <a href="forum.html" title="">
                                        Forum Page
                                    </a>
                                </li>
                                <li>
                                    <a href="forums-category.html" title="">
                                        Fourm Category
                                    </a>
                                </li>
                                <li>
                                    <a href="forum-open-topic.html" title="">
                                        Forum Open Topic
                                    </a>
                                </li>
                                <li>
                                    <a href="forum-create-topic.html" title="">
                                        Forum Create Topic
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>Our Shop</span>
                            <ul>
                                <li>
                                    <a href="shop.html" title="">
                                        Shop Products
                                    </a>
                                </li>
                                <li>
                                    <a href="shop-masonry.html" title="">
                                        Shop Masonry Products
                                    </a>
                                </li>
                                <li>
                                    <a href="shop-single.html" title="">
                                        Shop Detail Page
                                    </a>
                                </li>
                                <li>
                                    <a href="shop-cart.html" title="">
                                        Shop Product Cart
                                    </a>
                                </li>
                                <li>
                                    <a href="shop-checkout.html" title="">
                                        Product Checkout
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>Our Blog</span>
                            <ul>
                                <li>
                                    <a href="blog-grid-wo-sidebar.html" title="">
                                        Our Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="blog-grid-right-sidebar.html" title="">
                                        Blog with R-Sidebar
                                    </a>
                                </li>
                                <li>
                                    <a href="blog-grid-left-sidebar.html" title="">
                                        Blog with L-Sidebar
                                    </a>
                                </li>
                                <li>
                                    <a href="blog-masonry.html" title="">
                                        Blog Masonry Style
                                    </a>
                                </li>
                                <li>
                                    <a href="blog-list-wo-sidebar.html" title="">
                                        Blog List Style
                                    </a>
                                </li>
                                <li>
                                    <a href="blog-list-right-sidebar.html" title="">
                                        Blog List with R-Sidebar
                                    </a>
                                </li>
                                <li>
                                    <a href="blog-list-left-sidebar.html" title="">
                                        Blog List with L-Sidebar
                                    </a>
                                </li>
                                <li>
                                    <a href="blog-detail.html" title="">
                                        Blog Post Detail
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>Portfolio</span>
                            <ul>
                                <li>
                                    <a href="portfolio-2colm.html" title="">
                                        Portfolio 2col
                                    </a>
                                </li>
                                <li>
                                    <a href="portfolio-3colm.html" title="">
                                        Portfolio 3col
                                    </a>
                                </li>
                                <li>
                                    <a href="portfolio-4colm.html" title="">
                                        Portfolio 4col
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>Support &amp; Help</span>
                            <ul>
                                <li>
                                    <a href="support-and-help.html" title="">
                                        Support &amp; Help
                                    </a>
                                </li>
                                <li>
                                    <a href="support-and-help-detail.html" title="">
                                        Support &amp; Help Detail
                                    </a>
                                </li>
                                <li>
                                    <a href="support-and-help-search-result.html" title="">
                                        Support &amp; Help Search Result
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>More pages</span>
                            <ul>
                                <li>
                                    <a href="careers.html" title="">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="career-detail.html" title="">
                                        Career Detail
                                    </a>
                                </li>
                                <li>
                                    <a href="404.html" title="">
                                        404 error page
                                    </a>
                                </li>
                                <li>
                                    <a href="404-2.html" title="">
                                        404 Style2
                                    </a>
                                </li>
                                <li>
                                    <a href="faq.html" title="">
                                        faq's page
                                    </a>
                                </li>
                                <li>
                                    <a href="insights.html" title="">
                                        insights
                                    </a>
                                </li>
                                <li>
                                    <a href="knowledge-base.html" title="">
                                        knowledge base
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="about.html" title="">
                                about
                            </a>
                        </li>
                        <li>
                            <a href="about-company.html" title="">
                                About Us2
                            </a>
                        </li>
                        <li>
                            <a href="contact.html" title="">
                                contact
                            </a>
                        </li>
                        <li>
                            <a href="contact-branches.html" title="">
                                Contact Us2
                            </a>
                        </li>
                        <li>
                            <a href="widgets.html" title="">
                                Widgts
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav id="shoppingbag">
                    <div>
                        <div className="">
                            <form method="post">
                                <div className="setting-row">
                                    <span>use night mode</span>
                                    <input type="checkbox" id="nightmode"/>
                                    <label
                                        htmlFor="nightmode"
                                        data-on-label="ON"
                                        data-off-label="OFF"
                                    />
                                </div>
                                <div className="setting-row">
                                    <span>Notifications</span>
                                    <input type="checkbox" id="switch2"/>
                                    <label
                                        htmlFor="switch2"
                                        data-on-label="ON"
                                        data-off-label="OFF"
                                    />
                                </div>
                                <div className="setting-row">
                                    <span>Notification sound</span>
                                    <input type="checkbox" id="switch3"/>
                                    <label
                                        htmlFor="switch3"
                                        data-on-label="ON"
                                        data-off-label="OFF"
                                    />
                                </div>
                                <div className="setting-row">
                                    <span>My profile</span>
                                    <input type="checkbox" id="switch4"/>
                                    <label
                                        htmlFor="switch4"
                                        data-on-label="ON"
                                        data-off-label="OFF"
                                    />
                                </div>
                                <div className="setting-row">
                                    <span>Show profile</span>
                                    <input type="checkbox" id="switch5"/>
                                    <label
                                        htmlFor="switch5"
                                        data-on-label="ON"
                                        data-off-label="OFF"
                                    />
                                </div>
                            </form>
                            <h4 className="panel-title">Account Setting</h4>
                            <form method="post">
                                <div className="setting-row">
                                    <span>Sub users</span>
                                    <input type="checkbox" id="switch6"/>
                                    <label
                                        htmlFor="switch6"
                                        data-on-label="ON"
                                        data-off-label="OFF"
                                    />
                                </div>
                                <div className="setting-row">
                                    <span>personal account</span>
                                    <input type="checkbox" id="switch7"/>
                                    <label
                                        htmlFor="switch7"
                                        data-on-label="ON"
                                        data-off-label="OFF"
                                    />
                                </div>
                                <div className="setting-row">
                                    <span>Business account</span>
                                    <input type="checkbox" id="switch8"/>
                                    <label
                                        htmlFor="switch8"
                                        data-on-label="ON"
                                        data-off-label="OFF"
                                    />
                                </div>
                                <div className="setting-row">
                                    <span>Show me online</span>
                                    <input type="checkbox" id="switch9"/>
                                    <label
                                        htmlFor="switch9"
                                        data-on-label="ON"
                                        data-off-label="OFF"
                                    />
                                </div>
                                <div className="setting-row">
                                    <span>Delete history</span>
                                    <input type="checkbox" id="switch10"/>
                                    <label
                                        htmlFor="switch10"
                                        data-on-label="ON"
                                        data-off-label="OFF"
                                    />
                                </div>
                                <div className="setting-row">
                                    <span>Expose author name</span>
                                    <input type="checkbox" id="switch11"/>
                                    <label
                                        htmlFor="switch11"
                                        data-on-label="ON"
                                        data-off-label="OFF"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="topbar stick">
                <div className="logo">
                    <a title="" href="newsfeed.html">
                        <img src="assets/images/logo.png" alt=""/>
                    </a>
                </div>
                <div className="top-area">
                    <ul className="main-menu">
                        <li>
                            <a href="#" title="">
                                Home
                            </a>
                            <ul>
                                <li>
                                    <a href="index-2.html" title="">
                                        Home Social
                                    </a>
                                </li>
                                <li>
                                    <a href="index2.html" title="">
                                        Home Social 2
                                    </a>
                                </li>
                                <li>
                                    <a href="index-company.html" title="">
                                        Home Company
                                    </a>
                                </li>
                                <li>
                                    <a href="landing.html" title="">
                                        Login page
                                    </a>
                                </li>
                                <li>
                                    <a href="logout.html" title="">
                                        Logout Page
                                    </a>
                                </li>
                                <li>
                                    <a href="newsfeed.html" title="">
                                        news feed
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" title="">
                                timeline
                            </a>
                            <ul>
                                <li>
                                    <a href="time-line.html" title="">
                                        timeline
                                    </a>
                                </li>
                                <li>
                                    <a href="timeline-friends.html" title="">
                                        timeline friends
                                    </a>
                                </li>
                                <li>
                                    <a href="timeline-groups.html" title="">
                                        timeline groups
                                    </a>
                                </li>
                                <li>
                                    <a href="timeline-pages.html" title="">
                                        timeline pages
                                    </a>
                                </li>
                                <li>
                                    <a href="timeline-photos.html" title="">
                                        timeline photos
                                    </a>
                                </li>
                                <li>
                                    <a href="timeline-videos.html" title="">
                                        timeline videos
                                    </a>
                                </li>
                                <li>
                                    <a href="fav-page.html" title="">
                                        favourit page
                                    </a>
                                </li>
                                <li>
                                    <a href="groups.html" title="">
                                        groups page
                                    </a>
                                </li>
                                <li>
                                    <a href="page-likers.html" title="">
                                        Likes page
                                    </a>
                                </li>
                                <li>
                                    <a href="people-nearby.html" title="">
                                        people nearby
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" title="">
                                account settings
                            </a>
                            <ul>
                                <li>
                                    <a href="create-fav-page.html" title="">
                                        create fav page
                                    </a>
                                </li>
                                <li>
                                    <a href="edit-account-setting.html" title="">
                                        edit account setting
                                    </a>
                                </li>
                                <li>
                                    <a href="edit-interest.html" title="">
                                        edit-interest
                                    </a>
                                </li>
                                <li>
                                    <a href="edit-password.html" title="">
                                        edit-password
                                    </a>
                                </li>
                                <li>
                                    <a href="edit-profile-basic.html" title="">
                                        edit profile basics
                                    </a>
                                </li>
                                <li>
                                    <a href="edit-work-eductation.html" title="">
                                        edit work educations
                                    </a>
                                </li>
                                <li>
                                    <a href="messages.html" title="">
                                        message box
                                    </a>
                                </li>
                                <li>
                                    <a href="inbox.html" title="">
                                        Inbox
                                    </a>
                                </li>
                                <li>
                                    <a href="notifications.html" title="">
                                        notifications page
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" title="">
                                more pages
                            </a>
                            <ul>
                                <li>
                                    <a href="404.html" title="">
                                        404 error page
                                    </a>
                                </li>
                                <li>
                                    <a href="about.html" title="">
                                        about
                                    </a>
                                </li>
                                <li>
                                    <a href="contact.html" title="">
                                        contact
                                    </a>
                                </li>
                                <li>
                                    <a href="faq.html" title="">
                                        faq's page
                                    </a>
                                </li>
                                <li>
                                    <a href="insights.html" title="">
                                        insights
                                    </a>
                                </li>
                                <li>
                                    <a href="knowledge-base.html" title="">
                                        knowledge base
                                    </a>
                                </li>
                                <li>
                                    <a href="widgets.html" title="">
                                        Widgts
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="setting-area">
                        <li>
                            <a href="#" title="Home" data-ripple="">
                                <i className="ti-search"/>
                            </a>
                            <div className="searched">
                                <form method="post" className="form-search">
                                    <input type="text" placeholder="Search Friend"/>
                                    <button data-ripple="">
                                        <i className="ti-search"/>
                                    </button>
                                </form>
                            </div>
                        </li>
                        <li>
                            <a href="newsfeed.html" title="Home" data-ripple="">
                                <i className="ti-home"/>
                            </a>
                        </li>
                        <li>
                            <a href="#" title="Notification" data-ripple="">
                                <i className="ti-bell"/>
                                <span>20</span>
                            </a>
                            <div className="dropdowns">
                                <span>4 New Notifications</span>
                                <ul className="drops-menu">
                                    <li>
                                        <a href="notifications.html" title="">
                                            <img src="assets/images/resources/thumb-1.jpg" alt=""/>
                                            <div className="mesg-meta">
                                                <h6>sarah Loren</h6>
                                                <span>Hi, how r u dear ...?</span>
                                                <i>2 min ago</i>
                                            </div>
                                        </a>
                                        <span className="tag green">New</span>
                                    </li>
                                    <li>
                                        <a href="notifications.html" title="">
                                            <img src="assets/images/resources/thumb-2.jpg" alt=""/>
                                            <div className="mesg-meta">
                                                <h6>Jhon doe</h6>
                                                <span>Hi, how r u dear ...?</span>
                                                <i>2 min ago</i>
                                            </div>
                                        </a>
                                        <span className="tag red">Reply</span>
                                    </li>
                                    <li>
                                        <a href="notifications.html" title="">
                                            <img src="assets/images/resources/thumb-3.jpg" alt=""/>
                                            <div className="mesg-meta">
                                                <h6>Andrew</h6>
                                                <span>Hi, how r u dear ...?</span>
                                                <i>2 min ago</i>
                                            </div>
                                        </a>
                                        <span className="tag blue">Unseen</span>
                                    </li>
                                    <li>
                                        <a href="notifications.html" title="">
                                            <img src="assets/images/resources/thumb-4.jpg" alt=""/>
                                            <div className="mesg-meta">
                                                <h6>Tom cruse</h6>
                                                <span>Hi, how r u dear ...?</span>
                                                <i>2 min ago</i>
                                            </div>
                                        </a>
                                        <span className="tag">New</span>
                                    </li>
                                    <li>
                                        <a href="notifications.html" title="">
                                            <img src="assets/images/resources/thumb-5.jpg" alt=""/>
                                            <div className="mesg-meta">
                                                <h6>Amy</h6>
                                                <span>Hi, how r u dear ...?</span>
                                                <i>2 min ago</i>
                                            </div>
                                        </a>
                                        <span className="tag">New</span>
                                    </li>
                                </ul>
                                <a href="notifications.html" title="" className="more-mesg">
                                    view more
                                </a>
                            </div>
                        </li>
                        <li>
                            <a href="#" title="Messages" data-ripple="">
                                <i className="ti-comment"/>
                                <span>12</span>
                            </a>
                            <div className="dropdowns">
                                <span>5 New Messages</span>
                                <ul className="drops-menu">
                                    <li>
                                        <a href="notifications.html" title="">
                                            <img src="assets/images/resources/thumb-1.jpg" alt=""/>
                                            <div className="mesg-meta">
                                                <h6>sarah Loren</h6>
                                                <span>Hi, how r u dear ...?</span>
                                                <i>2 min ago</i>
                                            </div>
                                        </a>
                                        <span className="tag green">New</span>
                                    </li>
                                    <li>
                                        <a href="notifications.html" title="">
                                            <img src="assets/images/resources/thumb-2.jpg" alt=""/>
                                            <div className="mesg-meta">
                                                <h6>Jhon doe</h6>
                                                <span>Hi, how r u dear ...?</span>
                                                <i>2 min ago</i>
                                            </div>
                                        </a>
                                        <span className="tag red">Reply</span>
                                    </li>
                                    <li>
                                        <a href="notifications.html" title="">
                                            <img src="assets/images/resources/thumb-3.jpg" alt=""/>
                                            <div className="mesg-meta">
                                                <h6>Andrew</h6>
                                                <span>Hi, how r u dear ...?</span>
                                                <i>2 min ago</i>
                                            </div>
                                        </a>
                                        <span className="tag blue">Unseen</span>
                                    </li>
                                    <li>
                                        <a href="notifications.html" title="">
                                            <img src="assets/images/resources/thumb-4.jpg" alt=""/>
                                            <div className="mesg-meta">
                                                <h6>Tom cruse</h6>
                                                <span>Hi, how r u dear ...?</span>
                                                <i>2 min ago</i>
                                            </div>
                                        </a>
                                        <span className="tag">New</span>
                                    </li>
                                    <li>
                                        <a href="notifications.html" title="">
                                            <img src="assets/images/resources/thumb-5.jpg" alt=""/>
                                            <div className="mesg-meta">
                                                <h6>Amy</h6>
                                                <span>Hi, how r u dear ...?</span>
                                                <i>2 min ago</i>
                                            </div>
                                        </a>
                                        <span className="tag">New</span>
                                    </li>
                                </ul>
                                <a href="messages.html" title="" className="more-mesg">
                                    view more
                                </a>
                            </div>
                        </li>
                        <li>
                            <a href="#" title="Languages" data-ripple="">
                                <i className="fa fa-globe"/>
                            </a>
                            <div className="dropdowns languages">
                                <a href="#" title="">
                                    <i className="ti-check"/>
                                    English
                                </a>
                                <a href="#" title="">
                                    Arabic
                                </a>
                                <a href="#" title="">
                                    Dutch
                                </a>
                                <a href="#" title="">
                                    French
                                </a>
                            </div>
                        </li>
                    </ul>
                    <div className="user-img">
                        <img src="assets/images/resources/admin.jpg" alt=""/>
                        <span className="status f-online"/>
                        <div className="user-setting">
                            <a href="#" title="">
                                <span className="status f-online"/>
                                online
                            </a>
                            <a href="#" title="">
                                <span className="status f-away"/>
                                away
                            </a>
                            <a href="#" title="">
                                <span className="status f-off"/>
                                offline
                            </a>
                            <a href="#" title="">
                                <i className="ti-user"/> view profile
                            </a>
                            <a href="#" title="">
                                <i className="ti-pencil-alt"/>
                                edit profile
                            </a>
                            <a href="#" title="">
                                <i className="ti-target"/>
                                activity log
                            </a>
                            <a href="#" title="">
                                <i className="ti-settings"/>
                                account setting
                            </a>
                            <a href="#" title="">
                                <i className="ti-power-off"/>
                                log out
                            </a>
                        </div>
                    </div>
                    <span className="ti-menu main-menu" data-ripple=""/>
                </div>
            </div>
        </>
    )
}

export default Header
