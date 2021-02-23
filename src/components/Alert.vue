<template>
  <div
    :class="['alert alert-dismissible fade show', `alert-${type}`]"
    role="alert"
  >
    <span>{{ label }}</span>
    <span
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></span>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: ['label', 'type']
}
</script>

<style lang="scss" scoped>
.alert {
  text-align: left;
}
</style>
