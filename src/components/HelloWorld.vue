<template>
<div class="videosYoutube">
    <!-- Aquí colocaremos el video de YouTube -->
    <iframe class="video" src="https://www.youtube.com/embed/moZmJ8JaVwU?si=2ICFBdPOSZR5i26Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <iframe class="video" src="https://www.youtube.com/embed/kHTGpg-jxMk?si=J0moBgUQjdwfEEmW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <iframe class="video" src="https://www.youtube.com/embed/4JkIs37a2JE?si=9_2YtbJDIYb88O4V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
    flex-direction: row;
    background-color: darkslategrey;
    margin-top: 2%;
}
.video{
    width: 30%;
    height: 300px;
    margin: 10px auto;
    border-radius: 5%;
}

</style>
