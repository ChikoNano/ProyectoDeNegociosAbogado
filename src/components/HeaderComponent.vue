<template>
<header>
    <div class="caja">
       <nav>
                <ul  class="HeaderMenu">
                    <li>
                        <RouterLink to="/">Index</RouterLink>
                        <!--<a  href="index.html">Home</a> -->
                    </li>
                    <li>
                        <RouterLink to="/productos">Productos</RouterLink>
    <!--                    <a href="productos.html">Productos</a>-->
                    </li>
                    <li>
                        <RouterLink to="/hello-world">Hello World</RouterLink>
                        <!--                    <a href="productos.html">Productos</a>-->
                    </li>
                    <li>
                        <RouterLink to="/Contacto">Contacto</RouterLink>
                    </li>
                </ul>
            </nav>

    </div>
</header>
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>

<style scoped>
{
    background-color: #42b983;
}
.HeaderMenu{
   width: 100%;
    display: flex;
    flex-direction: row;
   }

nav li{
    display: inline;
    margin: 0 0 0 15px;
}

nav a{
    text-transform: uppercase;
    color: #000000;
    font-weight: bold;
    font-size: 22px;
    text-decoration: none;
}

nav a:hover{
    color: #c78c19;
    text-decoration: underline;
}

</style>