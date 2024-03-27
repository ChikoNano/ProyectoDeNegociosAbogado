<template>
<div class="indexObject">
    <h2>Index Component 1</h2>
    <h2>Index Component 2</h2>
    <h2>Index Component 3</h2>
</div>
</template>

<script>
export default {
    name: 'IndexComponent'
}
</script>

<style scoped>
.indexObject{
    display: flex;
    flex-direction: row;
    height: 250px;
    width: 100%;
    background-color: orange;
 }
h2{
    width: 100%;
    background-color: #42b983;
    margin: 10px;
    color: #000002;
    text-align: center;
    align-self: center;
    justify-content: center;
}
</style>