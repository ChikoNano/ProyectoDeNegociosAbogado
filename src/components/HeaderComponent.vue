<template>

<header class="encabezado">
    <div class="caja">

       <nav>

                <ul  class="HeaderMenu">
                    <img alt="Vue logo" class="imagenHeader" src="assets/logo.png">
                    <li>
                        <RouterLink to="/" class="botonIndex">Index</RouterLink>
                        <!--<a  href="index.html">Home</a> -->
                    </li>
                    <li>
                        <RouterLink to="/productos" class="TextMenu">Productos</RouterLink>
    <!--                    <a href="productos.html">Productos</a>-->
                    </li>
                    <li>
                        <RouterLink to="/hello-world" class="TextMenu">Hello World</RouterLink>
                        <!--                    <a href="productos.html">Productos</a>-->
                    </li>
                    <li>
                        <RouterLink to="/Contacto" class="TextMenu">Contacto</RouterLink>
                    </li>
                    <button id="btnVoice">Contactanos Hoy</button>
                </ul>
            </nav>

    </div>
</header>
</template>

<script>
export default {
    name: 'HeaderComponent',
  }
</script>

<style scoped>
.encabezado{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: blue;
}
header{
    width: 100%;
    margin: 0 0 ;

}
.HeaderMenu{
   width: 100%;
    display: flex;
    flex-flow: row wrap;
    padding: 0;
    justify-content: center;
    margin-top: 2%;
    text-align: center;
   }


nav li{
    display: inline;
    margin: 0 0 0 2%;
}
.botonIndex{
    color: white;
    font-weight: bold;
    font-size: 1.3rem;
    cursor: pointer;
    background-color: #000002;
}
.botonIndex:hover{
    color: black;
    text-decoration: underline;
    text-decoration-color: black;
    background-color: white;
}
.TextMenu{
    color: #000002;
    font-weight: bold;
    font-size: 1.3rem;
    cursor: pointer;
}

.TextMenu:hover{
    color: gray;
    border-radius: 0% 100% 36% 64% / 100% 43% 57% 0%  ;
    background-color: #000002;
    /*text-decoration: underline;*/
    /*text-decoration-color: red;*/
}

.imagenHeader{
    height: 100%;
}
#btnVoice{
    padding: 7px 15px;
    border-radius: 68% 32% 38% 62% / 53% 69% 31% 47% ;
    margin-left: 15px;
    background-color:orange ;
    cursor: pointer;
    color: #000002;
    font-weight: bold;
    font-size: 1.3rem;
}

#btnVoice:hover {
    color: white;
    border-radius: 0% 100% 36% 64% / 100% 43% 57% 0%;
    background-color: #000002;
}
</style>