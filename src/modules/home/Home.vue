<template>
    <div class="ui-div">
        <img class="ui-div-backImage" :src="homeImage" style="width: 100%">
    </div>
</template>

<script>
    import homeImage from '../../assets/homeImage.jpg'

    export default {
        name: "home",
        data() {
            return {
                homeImage
            }
        }
    }
</script>

<style scoped>
    .ui-div {
        width: 100%;
    }
</style>