<template>
  <div class="btn-group" role="group" aria-label="Basic example">
    <span
      type="button"
      :class="['btn', layout == 'rtl' ? 'btn-primary' : 'btn-default']"
      @click="fnLayout('rtl')"
    >
      Esquerdo
    </span>
    <span
      type="button"
      :class="['btn', layout == 'rta' ? 'btn-primary' : 'btn-default']"
      @click="fnLayout('rta')"
    >
      Centro
    </span>
    <span
      type="button"
      :class="['btn', layout == 'rtr' ? 'btn-primary' : 'btn-default']"
      @click="fnLayout('rtr')"
    >
      Direito
    </span>
  </div>
  <main :class="['form-signin text-center', layout]">
    <div class="d-flex justify-content-end mb-3">
      <a
        href="javascript:"
        class="link-register"
        @click="fnAlert('Teste de cadastro de conta HFPSIS Bank')"
        >Criar nova conta</a
      >
    </div>
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
      :disabled="loading"
    />
    <label for="inputPassword" class="visually-hidden">Senha</label>
    <input
      type="password"
      id="inputPassword"
      class="form-control form-control-lg"
      placeholder="Senha"
      required
      :disabled="loading"
    />
    <div class="checkbox mb-3">
      <label class="form-check-label" for="flexCheckDefault">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          :disabled="loading"
        />
        Lembrar acesso
      </label>
    </div>
    <button
      class="w-100 btn btn-lg btn-login d-flex justify-content-center align-items-center"
      type="button"
      @click="fnSubmit"
      :disabled="loading"
    >
      <span class="spinner-border text-dark" v-if="loading" />
      <span v-else>Entrar</span>
    </button>
    <div class="mt-3">
      <Alert label="Teste de Alert" type="primary" />
      <!-- <Alert label="Teste de Alert" type="secondary" />
      <Alert label="Teste de Alert" type="success" />
      <Alert label="Teste de Alert" type="danger" />
      <Alert label="Teste de Alert" type="warning" />
      <Alert label="Teste de Alert" type="info" />
      <Alert label="Teste de Alert" type="light" />
      <Alert label="Teste de Alert" type="dark" /> -->
    </div>
  </main>
</template>

<script>
import Alert from '../components/Alert'

export default {
  name: 'Login',
  components: { Alert },
  data: () => ({
    layout: 'rta',
    loading: false
  }),
  beforeCreate() {
    document.title = '</ HFPSIS > - Login'
  },
  mounted() {
    if (localStorage.getItem('layout')) {
      this.layout = localStorage.getItem('layout')
    }
  },
  methods: {
    fnAlert(val) {
      alert(val)
    },
    fnLayout(val) {
      this.layout = val
      localStorage.setItem('layout', val)
    },
    fnSubmit() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 3000)
    }
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
  max-width: 450px;
  padding: 50px;
  background-color: #fff;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.05);

  &.rta {
    margin: auto;
    border-radius: 5px;
  }
  &.rtl {
    position: absolute;
    height: 100%;
    border-radius: 0px;
    left: 0;
    bottom: 0;
  }
  &.rtr {
    position: absolute;
    height: 100%;
    border-radius: 0px;
    right: 0;
    bottom: 0;
  }
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

.link-register {
  color: var(--color-primary);
  text-decoration: none;
  &:hover {
    color: var(--color-primary-active);
    text-decoration: underline;
  }
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
