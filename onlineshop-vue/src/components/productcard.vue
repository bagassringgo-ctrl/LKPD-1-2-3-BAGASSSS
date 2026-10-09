<script setup>
import { ref } from 'vue'
const props = defineProps({ nama: String, harga: Number, gambar: String })
const emit = defineEmits(['add-to-cart'])

const gambarDipilih = ref(null)
function bukaPreview(src) {
    gambarDipilih.value = src
}
function tutupPreview() {
    gambarDipilih.value = null
}

// efek suara: reuse objek Audio dan tangani promise play
const audio = typeof window !== 'undefined' ? new Audio('/audio/notifikasi.mp3') : null
function tambahKeKeranjang() {
    if (audio) {
        audio.currentTime = 0
        audio.play().catch(() => {})
    }
    emit('add-to-cart', props.nama)
    alert(`${props.nama} ditambahkan ke keranjang!`)
}
</script>

<template>
    <div class="card">
        <img :src="props.gambar" :alt="props.nama" @click="bukaPreview(props.gambar)" />
        <h3>{{ props.nama }}</h3>
        <p>Rp {{ props.harga.toLocaleString('id-ID') }}</p>
        <button @click="tambahKeKeranjang">Tambah ke Keranjang</button>
    </div>

    <div v-if="gambarDipilih" class="preview-overlay" @click="tutupPreview">
        <img :src="gambarDipilih" class="preview-besar" />
    </div>
</template>
<style scoped>
button {
  margin-top: 12px;
  padding: 0.75rem 1rem;
  border: 1px solid #1f3f72;
  background: transparent;
  color: #1f3f72;
  cursor: pointer;
}

button:hover {
  background: rgba(46, 117, 182, 0.05);
}

.card {
  border: 1px solid #d7dde4;
  padding: 1rem;
  width: 220px;
  text-align: left;
}

.card img {
  width: 100%;
  border: none;
  cursor: pointer;
}

.card h3 {
  margin: 1rem 0 0.25rem;
  font-size: 1.05rem;
}

.card p {
  margin: 0;
  color: #4d5b72;
}

.preview-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.98);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
}

.preview-besar {
  max-width: 80%;
  max-height: 80%;
}
</style>