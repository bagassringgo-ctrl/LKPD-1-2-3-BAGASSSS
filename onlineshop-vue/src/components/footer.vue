<script setup>
const tahun = new Date().getFullYear()
</script>
<template>
  <hr />
  <footer class="site-footer">
    <small>&copy; {{ tahun }} SMK Yadika Soreang — Onlineshop Sekolah</small>
  </footer>
</template>

<style scoped>
.site-footer {
  padding: 1.25rem 1rem;
  color: #786e68;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.5;
  background: #f8f3ed;
}

hr {
  border: none;
  height: 1px;
  background: #e9dfd5;
  margin: 0;
}
</style>