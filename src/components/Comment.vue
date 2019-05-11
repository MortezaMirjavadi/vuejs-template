<template>
    <div class="mb-5">
        <h4 class="comment"> Comments </h4>
        <div class="media comment">
            <img src="https://picsum.photos/id/400/70/70" class="mr-3" alt="...">
            <div class="media-body">
                <h5 class="mt-0"> Kanina Smith </h5>
                <small class="text-muted"> 3 Hours Age</small>
                <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
                    purus.
                </p>
                <button class="btn btn-primary rounded-pill btnCustom">
                    <span style="padding: 10px"> Reply </span>
                </button>

                <div class="media mt-3">
                    <a class="mr-3" href="#">
                        <img src="https://picsum.photos/id/410/70/70" class="mr-3" alt="...">
                    </a>
                    <div class="media-body">
                        <h5 class="mt-0"> Kanina Smith </h5>
                        <small class="text-muted"> 3 Hours Age</small>
                        <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                            Cras
                            purus.
                        </p>
                        <button class="btn btn-primary rounded-pill btnCustom">
                            <span style="padding: 10px"> Reply </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <h4 class="comment"> Write Your Comment </h4>
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <input type="text" class="form-control" id="inputEmail4" placeholder="Name">
                </div>
                <div class="form-group col-md-6">
                    <input type="email" class="form-control" id="inputPassword4" placeholder="Email">
                </div>
            </div>
            <div class="mt-1">
                <textarea class="form-control" id="validationTextarea" placeholder="Message"></textarea>
                <div class="invalid-feedback">
                    Please enter a message in the textarea.
                </div>
            </div>
            <div class="form-row mt-3" style="margin-top: 10px">
                <div class="col-3">
                    <button class="btn btn-primary rounded-pill btnCustom">
                        <span style="padding: 10px"> Submit </span>
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>

    .comment {
        margin-top: 50px;
    }

    .btnCustom {
        background-color: rgb(51, 41, 169);
    }

</style>
