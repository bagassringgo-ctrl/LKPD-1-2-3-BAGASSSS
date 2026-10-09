<template>
  <main class="landing-page">
    <section class="intro">
      <p class="shop-name">SMK YADIKA SOREANG - ONLINESHOP</p>
      <RouterLink to="/product" class="top-link">Lihat Produk</RouterLink>
    </section>

    <section class="hero-section">
      <div class="hero-copy">
        <h1>Belanja Perlengkapan Sekolah, Mudah dan Terpercaya</h1>
        <p>Dari kaos, topi, sampai tas sekolah, semuanya ada di satu tempat.</p>
        <RouterLink to="/product" class="primary-btn">Lihat Produk</RouterLink>
      </div>
    </section>

    <section class="benefits">
      <article class="benefit-card">
        <div class="benefit-icon"></div>
        <h2>Kualitas Terjamin</h2>
        <p>Barang dipilih dengan baik untuk kebutuhan sekolah.</p>
      </article>
      <article class="benefit-card">
        <div class="benefit-icon">$</div>
        <h2>Harga Bersahabat</h2>
        <p>Harga ramah untuk kantong siswa dan orang tua.</p>
      </article>
      <article class="benefit-card last-card">
        <div class="benefit-icon">▣</div>
        <h2>Ambil di Sekolah</h2>
        <p>Pesanan dapat diambil langsung di sekolah.</p>
      </article>
    </section>

    <p class="copyright">© {{ new Date().getFullYear() }} SMK Yadika Soreang — Onlineshop Sekolah</p>
  </main>
</template>

<style scoped>
.landing-page {
  min-height: 100vh;
  padding-bottom: 1.5rem;
  background: #f4faff;
  color: #29445e;
}

.intro {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.2rem 0 0.7rem;
  border-bottom: 1px solid #dceaf3;
}

.shop-name,
.top-link {
  margin: 0;
  color: #365a76;
  font-size: 0.72rem;
}

.shop-name {
  font-weight: bold;
}

.top-link {
  text-decoration: underline;
}

.hero-section {
  display: flex;
  justify-content: center;
  margin-top: 0.2rem;
  padding: 3rem 1.5rem 3.5rem;
  background: linear-gradient(135deg, #d7edf9, #c5e1f2);
  text-align: center;
}

.hero-copy {
  max-width: 700px;
}

h1 {
  margin: 0;
  color: #29475f;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: bold;
  line-height: 1.1;
}

.hero-copy p {
  margin: 0.8rem auto 1.2rem;
  color: #506f85;
  font-size: 1rem;
}

.primary-btn {
  display: inline-block;
  padding: 0.55rem 1.25rem;
  border-radius: 20px;
  background: #fff;
  color: #3d6c8b;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: bold;
}

.benefits {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
  max-width: 760px;
  margin: 1.6rem auto 0;
}

.benefit-card {
  width: min(100%, 225px);
  min-height: 125px;
  padding: 1.2rem 1rem;
  border: 1px solid #e1edf4;
  border-radius: 5px;
  background: white;
  box-shadow: 0 2px 8px rgba(64, 103, 130, 0.08);
  text-align: center;
}

.benefit-card.last-card {
  margin-top: -0.1rem;
}

.benefit-icon {
  color: #6b9fbd;
  font-size: 1.2rem;
  font-weight: bold;
}

.benefit-card h2 {
  margin: 0.35rem 0 0;
  color: #304f67;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 0.9rem;
}

.benefit-card p {
  margin: 0.15rem 0 0;
  color: #788d9c;
  font-size: 0.72rem;
  line-height: 1.3;
}

.copyright {
  margin: 1.5rem 0 0;
  color: #627d91;
  font-size: 0.72rem;
  text-align: center;
}

@media (max-width: 520px) {
  .intro {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.25rem;
  }

  .benefit-card {
    width: min(100%, 280px);
  }
}
</style>
