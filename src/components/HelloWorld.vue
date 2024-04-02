<template>
<div class="videosYoutube">
    <!-- Aquí colocaremos el video de YouTube -->
    <iframe class="video" src="https://www.youtube.com/embed/moZmJ8JaVwU?si=2ICFBdPOSZR5i26Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <div class="cajaTituloTexto">
        <h2>Titulo del producto</h2>
        <p>Los Angeles Legal Advocates son un equipo de expertos en inmigración certificados por la Junta de abogados que sirven a la comunidad de Los Ángeles como bufete de abogados de inmigración de servicio completo, somos capaces de ayudarle con sus asuntos de inmigración más complicados para que pueda resolverlos sin problemas.

            Fundados en 2020 por Frances Arroyo, abogada de inmigración en Los Ángeles con 12 años de experiencia.

            Ha sido distinguida como una de las “Top 100 Lawyers” y “Top 40 Under 40” por The National Advocates. Junto con un equipo calificado en derecho de inmigración y nacionalidad, hemos abordado casos desde la defensa de la deportación hasta las peticiones familiares – y estamos dispuestos a ayudar con su caso.
        </p>
    </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.videosYoutube{
    display: flex;
    flex-flow: wrap row;
    background-color: darkslategrey;
    margin-top: 2%;
}
.video{
    width: 50%;
    height: 300px;
    margin: 10px 20px;
    border-radius: 5%;
}
.cajaTituloTexto{
    width: 50%;
    color: white;
}

</style>
