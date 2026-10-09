<script setup>
import ProductCard from '../components/productcard.vue'

const daftarProduk = [
  { id: 1, nama: 'Kaos Sekolah', harga: 75000, gambar: 'https://placehold.co/150' },
  { id: 2, nama: 'Topi Sekolah', harga: 35000, gambar: 'https://placehold.co/150' },
  { id: 3, nama: 'Tas Sekolah', harga: 120000, gambar: 'https://placehold.co/150' },
]
</script>

<template>
  <main class="product-page">
    <h1>Produk Kami</h1>
    <div class="grid">
      <ProductCard
        v-for="produk in daftarProduk"
        :key="produk.id"
        :nama="produk.nama"
        :harga="produk.harga"
        :gambar="produk.gambar"
      />
    </div>
  </main>
</template>

<style scoped>
.product-page {
  min-height: 100vh;
  padding: 1.5rem;
  background: #e8f5fc;
}

h1 {
  margin: 0 0 1.5rem;
  padding: 1.25rem 1.5rem;
  background: #234568;
  color: #fff;
}

.grid {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
</style>
