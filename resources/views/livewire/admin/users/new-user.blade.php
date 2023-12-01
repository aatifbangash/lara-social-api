<section class="content">
    <div class="body_scroll">
        <x-breadcrumb title="New User"/>

        <div class="container-fluid">
            <!-- Basic Validation -->
            <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="card">
                        <div class="header">
                            <h2><strong>New</strong> User</h2>
                        </div>
                        <div class="body">
                            <form id="form_validation" method="POST">
                                <div class="form-group form-float">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Name*"
                                        name="name"/>
                                </div>
                                <div class="form-group form-float">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Email*"
                                        autocomplete="off"
                                        name="email"/>
                                </div>
                                <div class="form-group form-float">
                                    <input
                                        type="password"
                                        class="form-control"
                                        placeholder="Password*"
                                        autocomplete="off"
                                        name="password"/>
                                </div>
                                <button
                                    class="btn btn-raised btn-primary waves-effect"
                                    type="submit">
                                    Add
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
