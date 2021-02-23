<template>
  <main class="form-signin text-center">
    <img class="mb-4" src="../../public/img/logo.png" width="72" height="72" />
    <h1 class="h3 mb-3 fw-normal h1-title-login">Faça seu login</h1>
    <label for="inputEmail" class="visually-hidden">E-Mail</label>
    <input
      type="email"
      id="inputEmail"
      class="form-control form-control-lg"
      placeholder="Email"
      required
      autofocus
    />
    <label for="inputPassword" class="visually-hidden">Senha</label>
    <input
      type="password"
      id="inputPassword"
      class="form-control form-control-lg"
      placeholder="Senha"
      required
    />
    <div class="checkbox mb-3">
      <label class="form-check-label" for="flexCheckDefault">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        Limbrar acesso
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-login" type="button">Entrar</button>
  </main>
</template>

<script>
export default {
  name: 'Login',
  beforeCreate() {
    document.title = '</ HFPSIS > - Login'
  }
}
</script>

<style lang="scss" scoped>
body {
  display: flex;
  align-items: center;
}
.form-signin {
  width: 100%;
  max-width: 330px;
  height: calc(100vh - 85px);
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type='email'] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type='password'] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.h1-title-login {
  color: #aaa !important;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
