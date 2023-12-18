const RightSidebar = () => {
    return (
        <>
            <div className="col-lg-3">
                <aside className="sidebar static">
                    <div className="widget">
                        <h4 className="widget-title">Your page</h4>
                        <div className="your-page">
                            <figure>
                                <a href="#" title="">
                                    <img
                                        src="assets/images/resources/friend-avatar9.jpg"
                                        alt=""
                                    />
                                </a>
                            </figure>
                            <div className="page-meta">
                                <a href="#" title="" className="underline">
                                    My page
                                </a>
                                <span>
                            <i className="ti-comment"/>
                            <a href="insight.html" title="">
                              Messages <em>9</em>
                            </a>
                          </span>
                                <span>
                            <i className="ti-bell"/>
                            <a href="insight.html" title="">
                              Notifications <em>2</em>
                            </a>
                          </span>
                            </div>
                            <div className="page-likes">
                                <ul className="nav nav-tabs likes-btn">
                                    <li className="nav-item">
                                        <a
                                            className="active"
                                            href="#link1"
                                            data-toggle="tab"
                                        >
                                            likes
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="" href="#link2" data-toggle="tab">
                                            views
                                        </a>
                                    </li>
                                </ul>
                                {/* Tab panes */}
                                <div className="tab-content">
                                    <div
                                        className="tab-pane active fade show "
                                        id="link1"
                                    >
                              <span>
                                <i className="ti-heart"/>
                                884
                              </span>
                                        <a href="#" title="weekly-likes">
                                            35 new likes this week
                                        </a>
                                        <div className="users-thumb-list">
                                            <a
                                                href="#"
                                                title="Anderw"
                                                data-toggle="tooltip"
                                            >
                                                <img
                                                    src="assets/images/resources/userlist-1.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="#" title="frank" data-toggle="tooltip">
                                                <img
                                                    src="assets/images/resources/userlist-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="#" title="Sara" data-toggle="tooltip">
                                                <img
                                                    src="assets/images/resources/userlist-3.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="#" title="Amy" data-toggle="tooltip">
                                                <img
                                                    src="assets/images/resources/userlist-4.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="#" title="Ema" data-toggle="tooltip">
                                                <img
                                                    src="assets/images/resources/userlist-5.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <a
                                                href="#"
                                                title="Sophie"
                                                data-toggle="tooltip"
                                            >
                                                <img
                                                    src="assets/images/resources/userlist-6.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="#" title="Maria" data-toggle="tooltip">
                                                <img
                                                    src="assets/images/resources/userlist-7.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="link2">
                              <span>
                                <i className="ti-eye"/>
                                440
                              </span>
                                        <a href="#" title="weekly-likes">
                                            440 new views this week
                                        </a>
                                        <div className="users-thumb-list">
                                            <a
                                                href="#"
                                                title="Anderw"
                                                data-toggle="tooltip"
                                            >
                                                <img
                                                    src="assets/images/resources/userlist-1.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="#" title="frank" data-toggle="tooltip">
                                                <img
                                                    src="assets/images/resources/userlist-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="#" title="Sara" data-toggle="tooltip">
                                                <img
                                                    src="assets/images/resources/userlist-3.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="#" title="Amy" data-toggle="tooltip">
                                                <img
                                                    src="assets/images/resources/userlist-4.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="#" title="Ema" data-toggle="tooltip">
                                                <img
                                                    src="assets/images/resources/userlist-5.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <a
                                                href="#"
                                                title="Sophie"
                                                data-toggle="tooltip"
                                            >
                                                <img
                                                    src="assets/images/resources/userlist-6.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="#" title="Maria" data-toggle="tooltip">
                                                <img
                                                    src="assets/images/resources/userlist-7.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* page like widget */}
                    <div className="widget">
                        <div className="banner medium-opacity bluesh">
                            <div
                                className="bg-image"
                                style={{
                                    backgroundImage:
                                        "url(assets/images/resources/baner-widgetbg.jpg)"
                                }}
                            />
                            <div className="baner-top">
                          <span>
                            <img alt="" src="assets/images/book-icon.png"/>
                          </span>
                                <i className="fa fa-ellipsis-h"/>
                            </div>
                            <div className="banermeta">
                                <p>create your own favourit page.</p>
                                <span>like them all</span>
                                <a data-ripple="" title="" href="#">
                                    start now!
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="widget friend-list stick-widget">
                        <h4 className="widget-title">Friends</h4>
                        <div id="searchDir"/>
                        <ul id="people-list" className="friendz-list">
                            <li>
                                <figure>
                                    <img
                                        src="assets/images/resources/friend-avatar.jpg"
                                        alt=""
                                    />
                                    <span className="status f-online"/>
                                </figure>
                                <div className="friendz-meta">
                                    <a href="time-line.html">bucky barnes</a>
                                    <i>
                                        <a
                                            href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                            className="__cf_email__"
                                            data-cfemail="f2859b9c869780819d9e969780b2959f939b9edc919d9f"
                                        >
                                            [email&nbsp;protected]
                                        </a>
                                    </i>
                                </div>
                            </li>
                            <li>
                                <figure>
                                    <img
                                        src="assets/images/resources/friend-avatar2.jpg"
                                        alt=""
                                    />
                                    <span className="status f-away"/>
                                </figure>
                                <div className="friendz-meta">
                                    <a href="time-line.html">Sarah Loren</a>
                                    <i>
                                        <a
                                            href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                            className="__cf_email__"
                                            data-cfemail="ea888b98848f99aa8d878b8386c4898587"
                                        >
                                            [email&nbsp;protected]
                                        </a>
                                    </i>
                                </div>
                            </li>
                            <li>
                                <figure>
                                    <img
                                        src="assets/images/resources/friend-avatar3.jpg"
                                        alt=""
                                    />
                                    <span className="status f-off"/>
                                </figure>
                                <div className="friendz-meta">
                                    <a href="time-line.html">jason borne</a>
                                    <i>
                                        <a
                                            href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                            className="__cf_email__"
                                            data-cfemail="2d474c5e42434f6d4a404c4441034e4240"
                                        >
                                            [email&nbsp;protected]
                                        </a>
                                    </i>
                                </div>
                            </li>
                            <li>
                                <figure>
                                    <img
                                        src="assets/images/resources/friend-avatar4.jpg"
                                        alt=""
                                    />
                                    <span className="status f-off"/>
                                </figure>
                                <div className="friendz-meta">
                                    <a href="time-line.html">Cameron diaz</a>
                                    <i>
                                        <a
                                            href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                            className="__cf_email__"
                                            data-cfemail="6802091b07060a280f05090104460b0705"
                                        >
                                            [email&nbsp;protected]
                                        </a>
                                    </i>
                                </div>
                            </li>
                            <li>
                                <figure>
                                    <img
                                        src="assets/images/resources/friend-avatar5.jpg"
                                        alt=""
                                    />
                                    <span className="status f-online"/>
                                </figure>
                                <div className="friendz-meta">
                                    <a href="time-line.html">daniel warber</a>
                                    <i>
                                        <a
                                            href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                            className="__cf_email__"
                                            data-cfemail="4e242f3d21202c0e29232f2722602d2123"
                                        >
                                            [email&nbsp;protected]
                                        </a>
                                    </i>
                                </div>
                            </li>
                            <li>
                                <figure>
                                    <img
                                        src="assets/images/resources/friend-avatar6.jpg"
                                        alt=""
                                    />
                                    <span className="status f-away"/>
                                </figure>
                                <div className="friendz-meta">
                                    <a href="time-line.html">andrew</a>
                                    <i>
                                        <a
                                            href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                            className="__cf_email__"
                                            data-cfemail="1872796b77767a587f75797174367b7775"
                                        >
                                            [email&nbsp;protected]
                                        </a>
                                    </i>
                                </div>
                            </li>
                            <li>
                                <figure>
                                    <img
                                        src="assets/images/resources/friend-avatar7.jpg"
                                        alt=""
                                    />
                                    <span className="status f-off"/>
                                </figure>
                                <div className="friendz-meta">
                                    <a href="time-line.html">amy watson</a>
                                    <i>
                                        <a
                                            href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                            className="__cf_email__"
                                            data-cfemail="711b10021e1f1331161c10181d5f121e1c"
                                        >
                                            [email&nbsp;protected]
                                        </a>
                                    </i>
                                </div>
                            </li>
                            <li>
                                <figure>
                                    <img
                                        src="assets/images/resources/friend-avatar5.jpg"
                                        alt=""
                                    />
                                    <span className="status f-online"/>
                                </figure>
                                <div className="friendz-meta">
                                    <a href="time-line.html">daniel warber</a>
                                    <i>
                                        <a
                                            href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                            className="__cf_email__"
                                            data-cfemail="234942504c4d4163444e424a4f0d404c4e"
                                        >
                                            [email&nbsp;protected]
                                        </a>
                                    </i>
                                </div>
                            </li>
                            <li>
                                <figure>
                                    <img
                                        src="assets/images/resources/friend-avatar2.jpg"
                                        alt=""
                                    />
                                    <span className="status f-away"/>
                                </figure>
                                <div className="friendz-meta">
                                    <a href="time-line.html">Sarah Loren</a>
                                    <i>
                                        <a
                                            href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                            className="__cf_email__"
                                            data-cfemail="d5b7b4a7bbb0a695b2b8b4bcb9fbb6bab8"
                                        >
                                            [email&nbsp;protected]
                                        </a>
                                    </i>
                                </div>
                            </li>
                        </ul>
                        <div className="chat-box">
                            <div className="chat-head">
                                <span className="status f-online"/>
                                <h6>Bucky Barnes</h6>
                                <div className="more">
                            <span>
                              <i className="ti-more-alt"/>
                            </span>
                                    <span className="close-mesage">
                              <i className="ti-close"/>
                            </span>
                                </div>
                            </div>
                            <div className="chat-list">
                                <ul>
                                    <li className="me">
                                        <div className="chat-thumb">
                                            <img
                                                src="assets/images/resources/chatlist1.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="notification-event">
                                <span className="chat-message-item">
                                  Hi James! Please remember to buy the food for
                                  tomorrow! I’m gonna be handling the gifts and
                                  Jake’s gonna get the drinks
                                </span>
                                            <span className="notification-date">
                                  <time
                                      dateTime="2004-07-24T18:18"
                                      className="entry-date updated"
                                  >
                                    Yesterday at 8:10pm
                                  </time>
                                </span>
                                        </div>
                                    </li>
                                    <li className="you">
                                        <div className="chat-thumb">
                                            <img
                                                src="assets/images/resources/chatlist2.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="notification-event">
                                <span className="chat-message-item">
                                  Hi James! Please remember to buy the food for
                                  tomorrow! I’m gonna be handling the gifts and
                                  Jake’s gonna get the drinks
                                </span>
                                            <span className="notification-date">
                                  <time
                                      dateTime="2004-07-24T18:18"
                                      className="entry-date updated"
                                  >
                                    Yesterday at 8:10pm
                                  </time>
                                </span>
                                        </div>
                                    </li>
                                    <li className="me">
                                        <div className="chat-thumb">
                                            <img
                                                src="assets/images/resources/chatlist1.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="notification-event">
                                <span className="chat-message-item">
                                  Hi James! Please remember to buy the food for
                                  tomorrow! I’m gonna be handling the gifts and
                                  Jake’s gonna get the drinks
                                </span>
                                            <span className="notification-date">
                                  <time
                                      dateTime="2004-07-24T18:18"
                                      className="entry-date updated"
                                  >
                                    Yesterday at 8:10pm
                                  </time>
                                </span>
                                        </div>
                                    </li>
                                </ul>
                                <form className="text-box">
                            <textarea
                                placeholder="Post enter to post..."
                                defaultValue={""}
                            />
                                    <div className="add-smiles">
                              <span
                                  title="add icon"
                                  className="em em-expressionless"
                              />
                                    </div>
                                    <div className="smiles-bunch">
                                        <i className="em em---1"/>
                                        <i className="em em-smiley"/>
                                        <i className="em em-anguished"/>
                                        <i className="em em-laughing"/>
                                        <i className="em em-angry"/>
                                        <i className="em em-astonished"/>
                                        <i className="em em-blush"/>
                                        <i className="em em-disappointed"/>
                                        <i className="em em-worried"/>
                                        <i className="em em-kissing_heart"/>
                                        <i className="em em-rage"/>
                                        <i className="em em-stuck_out_tongue"/>
                                    </div>
                                    <button type="submit"/>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* friends list sidebar */}
                </aside>
            </div>
        </>
    )
}

export default RightSidebar
