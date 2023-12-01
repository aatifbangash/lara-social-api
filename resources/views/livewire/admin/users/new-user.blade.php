<section class="content">
    <div class="body_scroll">
        <x-breadcrumb title="New User" />

        <div class="container-fluid">
            <!-- Basic Validation -->
            <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="card">
                        <div class="header">
                            <h2><strong>New</strong> User</h2>
                            <ul class="header-dropdown">
                                <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i class="zmdi zmdi-more"></i> </a>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another action</a></li>
                                        <li><a href="javascript:void(0);">Something else</a></li>
                                    </ul>
                                </li>
                                <li class="remove">
                                    <a role="button" class="boxs-close"><i class="zmdi zmdi-close"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div class="body">
                            <form id="form_validation" method="POST">
                                <div class="form-group form-float">
                                    <input type="text" class="form-control" placeholder="Name" name="name" >
                                </div>
                                <div class="form-group form-float">
                                    <input type="text" class="form-control" placeholder="Surname" name="surname" >
                                </div>
                                <div class="form-group form-float">
                                    <input type="email" class="form-control" placeholder="Email" name="email" >
                                </div>
                                <div class="form-group">
                                    <div class="radio inlineblock m-r-20">
                                        <input type="radio" name="gender" id="male" class="with-gap" value="option1">
                                        <label for="male">Male</label>
                                    </div>
                                    <div class="radio inlineblock">
                                        <input type="radio" name="gender" id="Female" class="with-gap" value="option2" checked="">
                                        <label for="Female">Female</label>
                                    </div>
                                </div>
                                <div class="form-group form-float">
                                    <textarea name="description" cols="30" rows="5" placeholder="Description" class="form-control no-resize" ></textarea>
                                </div>
                                <div class="form-group form-float">
                                    <input type="password" class="form-control" placeholder="Password" name="password" >
                                </div>
                                <div class="form-group">
                                    <div class="checkbox">
                                        <input id="checkbox" type="checkbox">
                                        <label for="checkbox">I have read and accept the terms</label>
                                    </div>
                                </div>
                                <button class="btn btn-raised btn-primary waves-effect" type="submit">SUBMIT</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
