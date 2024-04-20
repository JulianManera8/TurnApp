<template>

    <div class="form-container">

      <h3 class="title">Crear Cuenta</h3>

      <form class="form">
        <input type="text" class="input" placeholder="Nombre">
        <input type="text" class="input" placeholder="Apellido">

        <input type="email" class="input" placeholder="Email">

        <input type="text" class="input" placeholder="D.N.I">

        <input type="password" class="input" placeholder="Contraseña">
        <input type="password" class="input" placeholder="Repetir contraseña" toggleMask>
        
        <button class="form-btn">Entrar</button>

      </form>

      <p class="sign-up-label">
        ¿Ya tienes cuenta?<span class="sign-up-link">¡Inicia sesion!</span>
      </p>

    </div>

</template>

<script setup>
</script>

<style scoped>
    * {
        margin: auto;
    }
    .form-container {
      width: 350px;
      background-color: #fff;
      border: 1px solid black;
      border-radius: 10px;
      box-sizing: border-box;
      padding: 20px 30px;
    }

    .title {
      text-align: center;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      margin: 10px 0 30px 0;
      font-size: 28px;
      font-weight: 800;
    }

    .form {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 18px;
      margin-bottom: 15px;
    }

    .input {
      border-radius: 20px;
      border: 1px solid #c0c0c0;
      outline: 0 !important;
      box-sizing: border-box;
      padding: 12px 15px;
    }

    .input:focus {
        border: 3px solid teal;
    }

    .page-link {
      text-decoration: underline;
      margin: 0;
      text-align: end;
      color: #747474;
      text-decoration-color: #747474;
    }

    .page-link-label {
      cursor: pointer;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      font-size: 9px;
      font-weight: 700;
    }

    .page-link-label:hover {
      color: #000;
    }

    .form-btn {
      padding: 10px 15px;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      border-radius: 20px;
      border: 0 !important;
      outline: 0 !important;
      background: teal;
      color: white;
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      width: 150px;
      margin-top: 20px;
    }

    .form-btn:active {
      box-shadow: none;
    }

    .sign-up-label {
      margin: 30px 0;
      font-size: 10px;
      color: #747474;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }

    .sign-up-link {
      margin-left: 10px;
      font-size: 11px;
      text-decoration: underline;
      text-decoration-color: teal;
      color: teal;
      cursor: pointer;
      font-weight: 800;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }

    .check {
        scale: 150%;
        cursor: pointer;
    }

    .check-label {
        cursor: pointer;
        margin-right: 10px;
        font-size: 17px;
    }





</style>