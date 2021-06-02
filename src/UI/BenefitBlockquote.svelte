<script>
    export let id       = '';
    export let icon     = '';
    export let title    = '';
    export let text     = '';
</script>

<figure {id} class='text-center'>
    <img src="{icon}" alt="{title}" class='mb-3' width='50'>

    <blockquote class="blockquote text-center">
        <p class="mb-0">{title}</p>
    </blockquote>

    <figcaption class="blockquote-footer text-center">
        {text}
    </figcaption>
</figure>

<style>
    .blockquote-footer::before {
        content: "";
    }
</style>