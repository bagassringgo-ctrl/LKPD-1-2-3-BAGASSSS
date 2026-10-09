<template>
	<main class="about-page">
		<section class="about-hero" aria-labelledby="about-title">
			<h1 id="about-title">Tentang Kami</h1>
		</section>

		<section class="story-section" aria-labelledby="story-title">
			<div class="story-copy">
				<h2 id="story-title">Cerita Kami</h2>
				<p>
					Onlineshop ini dikelola oleh siswa SMK Yadika Soreang jurusan PPLG,
					sebagai proyek belajar sekaligus membantu teman-teman mendapatkan
					perlengkapan sekolah dengan mudah dan harga terjangkau.
				</p>
				<p>
					Setiap produk dipilih dan dikelola oleh tim kecil kami dengan
					perhatian langsung di setiap prosesnya.
				</p>
			</div>
			<div class="story-image" role="img" aria-label="Ilustrasi toko online">
				<span>Foto ilustrasi toko</span>
			</div>
		</section>

		<section class="team-section" aria-labelledby="team-title">
			<h2 id="team-title">Tim Kami</h2>
			<div class="team-grid">
				<article class="team-card">
					<div class="avatar">A</div>
					<h3>RINGGO</h3>
					<p>Ketua Tim</p>
				</article>
				<article class="team-card">
					<div class="avatar">S</div>
					<h3>ZEIN ZEMPET</h3>
					<p>Desain &amp; UI</p>
				</article>
				<article class="team-card">
					<div class="avatar">R</div>
					<h3>AGASYA A NYA AGUS</h3>
					<p>Programming</p>
				</article>
			</div>
		</section>
	</main>
</template>

<style scoped>
.about-page {
	color: #263655;
}

.about-hero {
	display: grid;
	min-height: 125px;
	place-items: center;
	margin: 0 -2rem 2rem;
	padding: 2rem;
	background: #ebe7f0;
}

.about-hero h1 {
	color: #514b5e;
	font-size: 2rem;
	font-weight: 700;
}

.story-section {
	display: grid;
	grid-template-columns: minmax(0, 1.2fr) minmax(260px, 0.9fr);
	align-items: center;
	gap: 2rem;
	max-width: 850px;
	margin: 0 auto;
}

h2 {
	margin-bottom: 0.8rem;
	color: #263655;
	font-size: 1.45rem;
	font-weight: 700;
}

.story-copy p {
	margin-bottom: 0.9rem;
	color: #65718a;
	font-size: 0.9rem;
	line-height: 1.55;
}

.story-image {
	display: grid;
	min-height: 145px;
	place-items: center;
	border: 1px solid #e2dce9;
	border-radius: 8px;
	background: #f2eff5;
	color: #817990;
	font-size: 0.9rem;
	font-style: italic;
}

.team-section {
	margin: 2.2rem auto 0;
	padding: 2rem 1.5rem 2.2rem;
	background: #f7f3ee;
	text-align: center;
}

.team-section h2 {
	margin-bottom: 1.5rem;
}

.team-grid {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 0.5rem;
	max-width: 670px;
	margin: 0 auto;
}

.team-card {
	padding: 1rem 0.75rem 1.15rem;
	border-radius: 8px;
	background: #fff;
	box-shadow: 1px 2px 5px rgba(38, 54, 85, 0.12);
}

.avatar {
	display: grid;
	width: 48px;
	height: 48px;
	place-items: center;
	margin: 0 auto 0.6rem;
	border-radius: 50%;
	background: #aaa2b9;
	color: #fff;
	font-size: 1.25rem;
	font-weight: 700;
}

.team-card h3 {
	color: #263655;
	font-size: 0.95rem;
	font-weight: 700;
}

.team-card p {
	color: #8992a5;
	font-size: 0.78rem;
}

@media (max-width: 650px) {
	.about-hero {
		margin-right: -1.5rem;
		margin-left: -1.5rem;
	}

	.story-section {
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}

	.story-image {
		min-height: 140px;
	}

	.team-grid {
		gap: 0.6rem;
	}

	.team-card {
		padding-right: 0.4rem;
		padding-left: 0.4rem;
	}
}
</style>