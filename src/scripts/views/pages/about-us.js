const AboutUs = {
  async render() {
    return `
    <section class="about-foodintake">
    <div class="foodintake-logo">
      <img src="foodintake.png" alt="logo foodintake">
    </div>
    <div class="foodintake-description">
      <h1>Tentang FoodIntake</h1>
      <p>FoodIntake adalah sebuah website yang dibangun untuk memberikan informasi mengenai resep dan detail kandungan 
      bahan dan produk makanan untuk membantu mengatur dan memenuhi kebutuhan nutrisi. Food Intake diharapkan mampu  
      membantu pengguna merencanakan asupan makanan yang dibutuhkan.
      </p>
      </div>
  </section>

  <section class="about-team">
    <div class="team-description">
      <h1>Team Kami</h1>
      <p>Kami adalah sekelompok mahasiswa - mahasiswi Indonesia yang berfokus dalam dunia software developer 
      khususnya dalam bidang Front-End dan Back End. Misi kami kali ini adalah untuk membantu sesama terutama 
      masyarakat disekitar kami. Harapan utama dibuatnya FoodIntake adalah agar dapat membantu masyarakat dalam 
      memberikan referensi menu makanan kepada masyarakat yang tidak hanya memberikan resep, namun juga kandungan 
      dan gizi dari menu makanan tersebut.
   </p> 
    </div>
    <div class="team-profile">
      <div class="card-profile">
        <img src="/user/ananta.png" alt="Seoarang mahasiswa">
        <h1>Ananta Dwi Prayoga Alwy</h1>
        <h2>UI/UX Designer | Developer</h2>
        <a href="https://www.linkedin.com/in/ananta-alwy/"><button>Connect</button></a>
      </div>

      <div class="card-profile">
        <img src="/user/zian.png" alt="Seoarang mahasiswa">
        <h1>Zianatul Muna</h1>
        <h2>Back-End | Developer</h2>
        <a href="https://www.linkedin.com/in/zianatul-muna"><button>Connect</button></a>
      </div>
      
      <div class="card-profile">
        <img src="/user/arif.jpg" alt="Seoarang mahasiswa">
        <h1>Muh. Arif</h1>
        <h2>Back-End | Developer</h2>
        <a href="https://www.linkedin.com/in/muh-arif-1254b619b"><button>Connect</button></a>
      </div>

      <div class="card-profile">
        <img src="/user/uccank.png" alt="Seoarang mahasiswa">
        <h1>Andi Muh. Yusran</h1>
        <h2>Front-End | Developer</h2>
        <a href="https://www.linkedin.com/in/andi-yusran/"><button>Connect</button></a>
      </div>
    </div>
  </section>
        `;
  },
};

export default AboutUs;
