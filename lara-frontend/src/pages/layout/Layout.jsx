import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar.jsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="theme-layout">
                <Header/>
                <section>
                    <div className="gap gray-bg">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="row" id="page-contents">
                                        <LeftSidebar/>
                                        <Outlet/>
                                        <RightSidebar/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
            <div className="side-panel">
                <h4 className="panel-title">General Setting</h4>
                <form method="post">
                    <div className="setting-row">
                        <span>use night mode</span>
                        <input type="checkbox" id="nightmode1"/>
                        <label htmlFor="nightmode1" data-on-label="ON" data-off-label="OFF"/>
                    </div>
                    <div className="setting-row">
                        <span>Notifications</span>
                        <input type="checkbox" id="switch22"/>
                        <label htmlFor="switch22" data-on-label="ON" data-off-label="OFF"/>
                    </div>
                    <div className="setting-row">
                        <span>Notification sound</span>
                        <input type="checkbox" id="switch33"/>
                        <label htmlFor="switch33" data-on-label="ON" data-off-label="OFF"/>
                    </div>
                    <div className="setting-row">
                        <span>My profile</span>
                        <input type="checkbox" id="switch44"/>
                        <label htmlFor="switch44" data-on-label="ON" data-off-label="OFF"/>
                    </div>
                    <div className="setting-row">
                        <span>Show profile</span>
                        <input type="checkbox" id="switch55"/>
                        <label htmlFor="switch55" data-on-label="ON" data-off-label="OFF"/>
                    </div>
                </form>
                <h4 className="panel-title">Account Setting</h4>
                <form method="post">
                    <div className="setting-row">
                        <span>Sub users</span>
                        <input type="checkbox" id="switch66"/>
                        <label htmlFor="switch66" data-on-label="ON" data-off-label="OFF"/>
                    </div>
                    <div className="setting-row">
                        <span>personal account</span>
                        <input type="checkbox" id="switch77"/>
                        <label htmlFor="switch77" data-on-label="ON" data-off-label="OFF"/>
                    </div>
                    <div className="setting-row">
                        <span>Business account</span>
                        <input type="checkbox" id="switch88"/>
                        <label htmlFor="switch88" data-on-label="ON" data-off-label="OFF"/>
                    </div>
                    <div className="setting-row">
                        <span>Show me online</span>
                        <input type="checkbox" id="switch99"/>
                        <label htmlFor="switch99" data-on-label="ON" data-off-label="OFF"/>
                    </div>
                    <div className="setting-row">
                        <span>Delete history</span>
                        <input type="checkbox" id="switch101"/>
                        <label htmlFor="switch101" data-on-label="ON" data-off-label="OFF"/>
                    </div>
                    <div className="setting-row">
                        <span>Expose author name</span>
                        <input type="checkbox" id="switch111"/>
                        <label htmlFor="switch111" data-on-label="ON" data-off-label="OFF"/>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Layout
