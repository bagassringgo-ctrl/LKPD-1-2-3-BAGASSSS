<script setup>
import { ref } from 'vue'

const sent = ref(false)

function submitMessage() {
	sent.value = true
}
</script>

<template>
	<main class="contact-page">
		<section class="contact-hero" aria-labelledby="contact-title">
			<h1 id="contact-title">Hubungi Kami</h1>
		</section>

		<section class="contact-content">
			<div class="contact-info">
				<h2>Info Kontak</h2>
				<div class="info-item">
					<strong>Alamat</strong>
					<p>Jl. Pendidikan No. 1, Soreang, Kab. Bandung</p>
				</div>
				<div class="info-item">
					<strong>Telepon</strong>
					<p>022 123 4567</p>
				</div>
				<div class="info-item">
					<strong>Email</strong>
					<p>onlineshop@smkyadika.sch.id</p>
				</div>
			</div>

			<form class="message-form" @submit.prevent="submitMessage">
				<h2>Kirim Pesan</h2>
				<label for="name">Nama</label>
				<input id="name" type="text" placeholder="Nama kamu" required />
				<label for="email">Email</label>
				<input id="email" type="email" placeholder="email@kamu.com" required />
				<label for="message">Pesan</label>
				<textarea id="message" rows="3" placeholder="Tulis pesanmu..." required></textarea>
				<button type="submit">Kirim</button>
				<p v-if="sent" class="success-message">Pesan berhasil disiapkan.</p>
			</form>
		</section>
	</main>
</template>

<style scoped>
.contact-page {
	color: #263655;
}

.contact-hero {
	display: grid;
	min-height: 110px;
	place-items: center;
	margin: 0 -2rem 2rem;
	padding: 2rem;
	background: #ebe7f0;
}

.contact-hero h1 {
	color: #514b5e;
	font-size: 1.8rem;
	font-weight: 700;
}

.contact-content {
	display: grid;
	grid-template-columns: minmax(0, 1fr) minmax(280px, 1fr);
	gap: 2rem;
	max-width: 850px;
	margin: 0 auto 2.5rem;
}

h2 {
	margin-bottom: 1rem;
	color: #263655;
	font-size: 1.45rem;
	font-weight: 700;
}

.info-item {
	margin-bottom: 1.15rem;
}

.info-item strong,
.message-form label {
	display: block;
	margin-bottom: 0.2rem;
	color: #263655;
	font-size: 0.85rem;
	font-weight: 700;
}

.info-item p {
	color: #65718a;
	font-size: 0.85rem;
}

.message-form {
	padding: 1rem 1.1rem;
	background: #f7f3ee;
}

.message-form h2 {
	font-size: 1.15rem;
}

.message-form label {
	margin-top: 0.75rem;
}

input,
textarea {
	width: 100%;
	border: 1px solid #e2dce9;
	border-radius: 2px;
	padding: 0.55rem 0.6rem;
	color: #263655;
	background: #fff;
	font: inherit;
	font-size: 0.8rem;
}

textarea {
	resize: vertical;
}

button {
	margin-top: 1rem;
	border: 0;
	border-radius: 14px;
	padding: 0.45rem 1.1rem;
	color: #fff;
	background: #817790;
	font: inherit;
	font-size: 0.8rem;
	cursor: pointer;
}

button:hover {
	background: #70677f;
}

.success-message {
	margin-top: 0.7rem;
	color: #668675;
	font-size: 0.78rem;
}

@media (max-width: 650px) {
	.contact-hero {
		margin-right: -1.5rem;
		margin-left: -1.5rem;
	}

	.contact-content {
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}
}
</style>
