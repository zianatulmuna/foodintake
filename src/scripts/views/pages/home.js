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
      <picture>
                <source media="(max-width: 650px)" srcset="./img/food-1-small.jpg"/>
                <img 
                    src='./img/food-1-large.jpg' 
                    alt="Semangkok Makanan"></img>
            </picture>
    </div>
  </section>

  <section class="second-main">
    <div class="tagline-heading">
      <h1>Kenapa Kita Harus Memenuhi <span>Gizi?</span></h1>
    </div>
    <div class="tagline-why">
      <div class="img-container">
        <picture>
                <source media="(max-width: 650px)" srcset="./img/food-2-small.jpg"/>
                <img 
                    src='./img/food-2-large.jpg' 
                    alt="Semangkok Makanan"></img>
            </picture>
      </div>
      <p>Gizi yang optimal sangat penting untuk pertumbuhan normal serta perkembangan fisik dan kecerdasan bayi, anak-anak, serta seluruh kelompok umur. Gizi baik membuat berat badan normal atau sehat, tubuh tidak mudah terkena penyakit infeksi, produktivitas kerja meningkat serta terlindung dari penyakit kronis dan kematian dini akibat penyakit.
        <br><br>
        Kondisi gizi yang tidak optimal berkaitan dengan gangguan kesehatan dan kondisi kesehatan yang buruk, serta meningkatkan risiko penyakit infeksi, dan Penyakit Tidak Menular seperti penyakit kardiovaskular (penyakit jantung dan pembuluh darah, hipertensi dan stroke), diabetes serta kanker.
      </p>
    </div>
  </section>

  <section class="third-main">
  <div class="tagline-heading">
    <h1>Rekomendasi Berdasarkan<br><span>Tipe Makanan</span></h1>
    <p>Food Intake memberikan rekomendasi sesuai tipe makanan untuk menu makanan mu hari ini. <br>Keep healthy!</p>
  </div>
  <div class="third-main-grid">
      <li>
        <a href="#/foodish">
        <picture>
          <source type="image/webp" srcset="./img/food-type/1.webp">
          <source type="image/png" srcset="./img/food-type/1.png">
          <img class="lazyload" data-src="./img/food-type/1.png" alt="main course">
        </picture>
        </a>
      </li>
      <li>
        <a href="#/foodish">
        <picture>
          <source type="image/webp" srcset="./img/food-type/2.webp">
          <source type="image/png" srcset="./img/food-type/2.png">
          <img class="lazyload" data-src="./img/food-type/2.png" alt="breakfast">
        </picture>
        </a>
      </li>
      
      <li>
        <a href="#/foodish">
        <picture>
          <source type="image/webp" srcset="./img/food-type/3.webp">
          <source type="image/png" srcset="./img/food-type/3.png">
          <img class="lazyload" data-src="./img/food-type/3.png" alt="Dessert menu">
        </picture>
        </a>
      </li>
      <li>
        <a href="#/foodish">
        <picture>
          <source type="image/webp" srcset="./img/food-type/4.webp">
          <source type="image/png" srcset="./img/food-type/4.jpg">
          <img class="lazyload" data-src="./img/food-type/4.png" alt="Snack menu">
        </picture>
        </a>
      </li>
      <li>
        <a href="#/foodish">
        <picture>
          <source type="image/webp" srcset="./img/food-type/5.webp">
          <source type="image/png" srcset="./img/food-type/5.png">
          <img class="lazyload" data-src="./img/food-type/5.png" alt="Salad menu">
        </picture>
        </a>
      </li>
      <li>
        <a href="#/foodish">
        <picture>
          <source type="image/webp" srcset="./img/food-type/6.webp">
          <source type="image/png" srcset="./img/food-type/6.jpg">
          <img class="lazyload" data-src="./img/food-type/6.png" alt="Drink menu">
        </picture>
        </a>
      </li>
     </div>
  </section>

  <section class="fourth-main">
    <div class="tagline-heading">
      <h1>Personalisasikan Dengan <br><span>Filter Nutrisi</span></h1>
      <p>Pastikan kamu memilih makanan sesuai dengan kebutuhan nutrisi ya!</p>
    </div>
    <picture>
                <source media="(max-width: 650px)" srcset="./img/information-small.jpg"/>
                <img class="lazyload"
                    data-src='./img/information-large.png' 
                    alt="Food Information"></img>
    </picture>    
  </section>

  <section class="fifth-main">
    <div class="tagline-heading">
      <h1>Periksa <span>Label Nutrisi</span></h1>
      <p>Mungkin sedikit menakutkan untuk mengetahui berapa banyak kalori atau berapa banyak gula dalam makanan favoritmu, 
      tetapi pastikan kamu memeriksa <span>Label Nutrisi</span> sebelum membuat makanan yang kamu suka.</p>
    </div>
    <picture>
                <source media="(max-width: 650px)" srcset="./img/nutrition-label-small.jpg"/>
                <img 
                    class="lazyload"
                    data-src='./img/nutrition-label-large.jpg' 
                    alt="Lutrition Label"></img>
    </picture>    
  </section>


  <section class="main-galery">
    <div class="galery-heading">
      <h1>Gallery</h1>
    </div>
    <div class="galery-grid">
    <picture class="galery-img-1">
                <source media="(max-width: 650px)" srcset="./img/food-3-small.jpg"/>
                <img 
                    src='./img/food-3-large.jpg' 
                    alt="Kumpulan buah dan sayuran"></img>
            </picture>
      <picture class="galery-img-2">
                <source media="(max-width: 650px)" srcset="./img/food-4-small.jpg"/>
                <img 
                    src='./img/food-4-large.jpg' 
                    alt="Kumpulan buah dan sayuran"></img>
            </picture>
      <picture class="galery-img-3 image-grid-col-2">
                <source media="(max-width: 650px)" srcset="./img/food-5-small.jpg"/>
                <img 
                    src='./img/food-5-large.jpg' 
                    alt="Kumpulan buah dan sayuran"></img>
            </picture>
      <picture class="galery-img-4 image-grid-col-2">
                <source media="(max-width: 650px)" srcset="./img/food-6-small.jpg"/>
                <img 
                    src='./img/food-6-large.jpg' 
                    alt="Kumpulan buah dan sayuran"></img>
            </picture>
      <picture class="galery-img-5">
                <source media="(max-width: 650px)" srcset="./img/food-7-small.jpg"/>
                <img 
                    src='./img/food-7-large.jpg' 
                    alt="Kumpulan buah dan sayuran"></img>
            </picture>
    </div>
  </section>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
