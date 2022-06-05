const Home = {
  async render() {
    return `
    <section class="first-main">  
    <div class="tagline">
      <h1>HIDUP SEHAT BERNUTRISI</h1>
      <h2>Ingin tahu nutrisi yang ada pada makanan mu?</h2>
      <p>Kini dengan FoodIntake kamu dapat mengetahui berbagai<br>
        <strong>Nutrisi</strong> pada setiap makanan kesukaan mu.</p>
      <button onclick="window.location.href='#/foodish'">Menu</button>
    </div>
    <div class="tagline-img">
      <img src="/img/food-1.png">
    </div>
  </section>

  <section class="second-main">
    <div class="tagline-heading">
      <h1>Kenapa Kita Harus Memenuhi Gizi</h1>
    </div>
    <div class="tagline-why">
      <div class="img-container">
        <img src="/img/food-2.png">
      </div>
      <p>Gizi yang optimal sangat penting untuk pertumbuhan normal serta perkembangan fisik dan kecerdasan bayi, anak-anak, serta seluruh kelompok umur. Gizi baik membuat berat badan normal atau sehat, tubuh tidak mudah terkena penyakit infeksi, produktivitas kerja meningkat serta terlindung dari penyakit kronis dan kematian dini akibat penyakit.
        <br><br>
        Kondisi gizi yang tidak optimal berkaitan dengan gangguan kesehatan dan kondisi kesehatan yang buruk, serta meningkatkan risiko penyakit infeksi, dan Penyakit Tidak Menular seperti penyakit kardiovaskular (penyakit jantung dan pembuluh darah, hipertensi dan stroke), diabetes serta kanker.
      </p>
    </div>
  </section>
  <section class="main-galery">
    <div class="galery-heading">
      <h1>Galery</h1>
    </div>
    <div class="galery-grid">
      <img class="galery-img-1" src="/img/food-3.png">
      <img class="galery-img-2" src="/img/food-4.png">
      <img class="galery-img-3" class="image-grid-col-2" src="/img/food-5.png">
      <img class="galery-img-4" class="image-grid-col-2" src="/img/food-6.png">
      <img class="galery-img-5" src="/img/food-7.png">
    </div>
  </section>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
