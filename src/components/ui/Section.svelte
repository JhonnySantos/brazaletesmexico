<script>
    export let name = "";
</script>

<div class="container section-title-container my-5">
    <h3 class="section-title section-title-center">
        <b></b>
            <span class="section-title-main text-uppercase">{name}</span>
        <b></b>
    </h3>
</div>

<style>
    .section-title-container {
        margin-bottom: 1.5em;
    }

    .section-title {
        position: relative;
        -js-display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-flow: row wrap;
        flex-flow: row wrap;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        width: 100%;
    }

    .section-title b {
        display: block;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        height: 2px;
        opacity: .1;
        background-color: currentColor;
    }

    .section-title-center span {
        text-align: center;
    }

    .section-title-center span {
        margin: 0 15px;
    }

    .section-title span {
        text-transform: uppercase;
    }
</style>