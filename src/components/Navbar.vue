<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="javascript:">HFPSIS BANK</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsExample04"
      aria-controls="navbarsExample04"
      aria-expanded="true"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-collapse collapse show" id="navbarsExample04" style="">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="javascript:">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="javascript:">Disabled</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="javascript:"
            id="dropdown04"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            @click="showDropdown"
            >Dropdown</a
          >
          <div
            class="dropdown-menu show"
            aria-labelledby="dropdown04"
            v-if="dropdown"
          >
            <a class="dropdown-item" href="javascript:" @click="handleClose"
              ><router-link class="links" to="/">Home</router-link></a
            >
            <a class="dropdown-item" href="javascript:" @click="handleClose"
              ><router-link class="links" to="/login">Login</router-link></a
            >
            <a class="dropdown-item" href="javascript:" @click="handleClose"
              ><router-link class="links" to="/about">About</router-link></a
            >
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data: () => ({
    dropdown: false
  }),
  beforeCreate() {
    document.title = '</ HFPSIS > - Home'
  },
  methods: {
    showDropdown() {
      this.dropdown = !this.dropdown
    },
    handleClose() {
      this.dropdown = false
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown-menu {
  margin-top: 7px;
  border-radius: 0px 0px 4px 4px;
  .links {

  }
}
</style>
