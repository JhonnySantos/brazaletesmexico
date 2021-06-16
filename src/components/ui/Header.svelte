<script>
    import Menu from './Menu.svelte';
    import {Link} from 'svelte-routing';
</script>

<header>

    <div class="container d-flex flex-wrap align-items-center justify-content-center justify-content-sm-center justify-content-md-between justify-content-lg-between">
        <Link class="d-flex align-items-center me-lg-auto my-2" to='/'>
            <img 
                src="https://www.brazaletesmexico.com/wp-content/uploads/logo-brazaletes-mexico.png" 
                width="150" 
                alt="Logo brazaletes mx" />
        </Link>
        <form class="col-12 col-md-6 col-lg-5 col-lg-auto my-2">
            <div class="input-group input-group-sm">
                <input type="text" class="form-control form-control-sm border-secondary" placeholder="Búsqueda" aria-label="Búsqueda" aria-describedby="button-addon-search">
                <button class="btn btn-sm btn-secondary" type="submit" id="button-addon-search">Buscar</button>
            </div>
        </form>
    </div>

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary py-2">
        <div class="container">
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarColor02"
                aria-controls="navbarColor02"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <Menu />

            <div class='social-media'>
                <a href="https://www.instagram.com/brazaletesmexico/" class="link-light text-decoration-none">
                    <i class="fab fa-facebook-square fa-lg"></i>
                </a>

                <a href="https://www.facebook.com/brazaletesmex/" class="link-light text-decoration-none">
                    <i class="fab fa-instagram-square fa-lg"></i>
                </a>
                
                <a href="https://twitter.com/BrazaletesMex" class="link-light text-decoration-none">
                    <i class="fab fa-twitter-square fa-lg"></i>
                </a>
                
                <a href="https://mx.linkedin.com/company/brazaletes-mexico" class="link-light text-decoration-none">
                    <i class="fab fa-youtube-square fa-lg"></i>
                </a>
                
                <a href="https://www.youtube.com/channel/UCljRrLXh0Ajd9ib0WYcb29A" class="link-light text-decoration-none">
                    <i class="fab fa-linkedin fa-lg"></i>
                </a>
            </div>
        </div>
    </nav>
</header>

<style>
    .container {
        max-width: 1200px;
    }

    .social-media a{
        margin-right: 5px !important;
        font-size: 16px !important;
    }
</style>