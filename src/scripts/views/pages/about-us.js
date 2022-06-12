const AboutUs = {
  async render() {
    return `
    <section class="about-foodintake">
    <div class="foodintake-logo">
      <img src="foodintake.png" alt="logo foodintake">
    </div>
    <div class="foodintake-description">
      <h1>Tentang FoodIntake</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
  </section>

  <section class="about-team">
    <div class="team-description">
      <h1>Team Kami</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
    <div class="team-profile">
      <div class="card-profile">
        <img src="/user/ananta.png" alt="Seoarang mahasiswa">
        <h1>Ananta Dwi Prayoga Alwy</h1>
        <h2>UI/UX Designer | Developer</h2>
        <button><a href="https://www.linkedin.com/in/ananta-alwy/">Connect</a></button>
      </div>

      <div class="card-profile">
        <img src="/user/zian.png" alt="Seoarang mahasiswa">
        <h1>Zianatul Muna</h1>
        <h2>Back-End | Developer</h2>
        <button><a href="https://www.linkedin.com/">Connect</a></button>
      </div>
      
      <div class="card-profile">
        <img src="/icon/user.png" alt="Seoarang mahasiswa">
        <h1>Muh. Arif</h1>
        <h2>Back-End | Developer</h2>
        <button><a href="https://www.linkedin.com/">Connect</a></button>
      </div>

      <div class="card-profile">
        <img src="/user/uccank.png" alt="Seoarang mahasiswa">
        <h1>Andi Muh. Yusran</h1>
        <h2>Front-End | Developer</h2>
        <button><a href="https://www.linkedin.com/in/andi-yusran/">Connect</a></button>
      </div>
    </div>
  </section>
        `;
  },
};

export default AboutUs;
