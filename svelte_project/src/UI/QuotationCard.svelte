<script>
    export let id = null;
    export let category = null;
    export let subcategory = null;
    export let url = null;
</script>

<div id={id} class="col">
    <div class="card quotation-card">    
        <div class="card-body">
            <h5 class="card-title text-center">{category}</h5>
            <h6 class="card-subtitle text-center text-muted">{subcategory}</h6>
        </div>
    
        <img src="{url}" alt="{subcategory}">
    </div>
</div>

<style>
    .quotation-card{
        min-height: 300px;
        cursor: pointer;
    }
</style>