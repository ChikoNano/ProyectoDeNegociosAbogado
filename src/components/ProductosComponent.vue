<template>
<h2>Productos Component</h2>
<div class="gallery">
    <img src="https://picsum.photos/id/1040/300/300" alt="a house on a mountain">
    <img src="https://picsum.photos/id/106/300/300" alt="sime pink flowers">
    <img src="https://picsum.photos/id/136/300/300" alt="big rocks with some trees">
    <img src="https://picsum.photos/id/110/300/300" alt="a cool landscape">
</div>
</template>

<script>
export default {
    name: 'ProductosComponent'
}
</script>

<style scoped>
.gallery {
    --s: 150px; /* control the size */
    display: grid;
    grid: auto-flow var(--s) / repeat(2,var(--s));
    gap: 10px;
    place-items: center;
    margin-top: 35%;
    transform: rotate(45deg);
}

.gallery > img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    transform: scale(var(--_t,1)) rotate(-45deg);
    cursor: pointer;
    transition: .2s linear;
    filter: grayscale(80%);

}
.gallery > img:hover {
    filter: grayscale(0);
    --_t: 1.15;

}

body {
    margin: 0;
    display: grid;
    place-content: center;
    background: #aabbfb;
}
</style>