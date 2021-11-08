<template>
  <button type="button" class="navbar-toggler">
    <slot>
      <span class="navbar-toggler-icon" />
    </slot>
  </button>
</template>

<script>
export default {
  name: "VNavbarToggler",
};
</script>
