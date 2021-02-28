<template></template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data: () => ({
    dropdown: true
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
}
</style>
