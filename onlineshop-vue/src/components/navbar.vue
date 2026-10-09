<template>
  <nav class="site-nav">
    <div class="nav-brand">
      <h2>🎶 SMK Yadika Soreang</h2>
    </div>
    <div class="nav-links">
      <RouterLink to="/">Landing</RouterLink>
      <RouterLink to="/product">Product</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </div>
  </nav>
  <hr />
</template>

<style scoped>
.site-nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0;
}

.nav-brand h2 {
  margin: 0;
  font-size: 1.1rem;
  color: #302a2c;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.nav-links a {
  color: #302a2c;
  position: relative;
  padding-bottom: 0.15rem;
}

.nav-links a.router-link-active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 1px;
  background: #ef7095;
}

hr {
  border: none;
  height: 1px;
  background: #d7dde4;
  margin: 0;
}
</style>