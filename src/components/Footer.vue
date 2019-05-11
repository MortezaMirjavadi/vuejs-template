<template>
    <footer class="page-footer font-small blue pt-4">
        <div class="container-fluid text-center text-md-left">
            <div class="row">
                <div class="col-md-12 mt-md-0 mt-3 text-center">
                    <h5 class="" style="margin-top: 50px">Subscribe Out Newsletter</h5>
                    <small>Here you can use rows and columns to organize your footer content.</small>
                </div>
                <hr class="clearfix w-100 d-md-none pb-3">
            </div>
        </div>

        <div class="container align-content-center" style="width: 30%; margin-top: 25px;">
            <div class="row">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter Email Address"
                           style="border-radius: 30px">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2"
                                style="border-radius: 30px">
                            Subscriber >
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid" style="margin-top: 100px;">
            <div class="row">
                <div class="col-sm-6">
                    <span> Designed by Goldelayers | Powered by Vuejs </span>
                </div>
                <div class="col-sm-6">
                    <ul class="nav ustify-content-center">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"> ABOUT US </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"> PAGES </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true"> GALLERY </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"> BLOG </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"> CONTACT </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

</template>

<script>
    export default {}
</script>

<style scoped>

    .page-footer {
        background-image: linear-gradient(to bottom right, rgb(194, 103, 210), rgb(63, 41, 171));
        color: whitesmoke;
    }

</style>
