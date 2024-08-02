<template>

    <footer class="footer">
            <div class="logo-container">
                <router-link id="a" to="/">
                    <div class="imagen">
                        <img class="logo" alt="logo" src="../icons/LOGO.jpg" width="170px">
                    </div>
                </router-link>
            </div>
            
            <div class="nav-container">
                <h4>LINKS DE INTERÉS</h4>
                <ul>
                    <li><router-link id="a" class="link" to="/">Home</router-link></li>
                    <li><router-link id="a" class="link" to="/help">Help</router-link></li>
                </ul>
            </div>
    </footer>

</template>

<script setup>

</script>

<style lang="scss" scoped>
    
footer {
    background-color: rgba(255, 213, 0, 0.28);
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
}

ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    .link {
        text-decoration: none;
        color: black;
    }
}


</style>