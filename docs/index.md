---
layout: page
title: "Biblija-hrv"
---

<style>
  .post-header { display: none; }
  .page-content .wrapper { max-width: 100%; padding: 0; }
  .site-footer { margin-top: 0; border-top: 1px solid #e2e8f0; background-color: #f8fafc; }
</style>

<div class="hero-container">
  <h1>Biblija-hrv</h1>
  <p class="hero-subtitle">Aplikacija za čitanje i slušanje Katoličke Biblije na hrvatskom jeziku. Potpuno besplatna, bez reklama i funkcionalna u izvanmrežnom načinu rada.</p>
  <div class="availability-notice" role="note" aria-label="Dostupnost aplikacije">
    <strong>Trenutačna inačica: 4.9.0.0</strong>
    <p>Od 21. srpnja 2026. aplikacija je dostupna samo postojećim korisnicima prethodnih inačica</p>
  </div>
</div>

<div class="features-container">
  <h2 class="section-title">Osnovne značajke</h2>
  <p class="section-subtitle">Dizajnirana za čitanje i slušanje Božje riječi na uređajima sa sustavom Android.</p>

  <div class="features-grid">
    <div class="feature-card">
      <div class="feature-icon-wrapper">📶</div>
      <h3>Izvanmrežni rad</h3>
      <p>Čitajte cijelu Katoličku Bibliju bilo kada i bilo gdje, bez potrebe za aktivnom internetskom vezom.</p>
    </div>

    <div class="feature-card">
      <div class="feature-icon-wrapper">🎧</div>
      <h3>Slušanje (TTS)</h3>
      <p>Slušajte čitanje biblijskih poglavlja koristeći ugrađeni sustav sinteze govora (Text-To-Speech) na hrvatskom jeziku.</p>
    </div>

    <div class="feature-card">
      <div class="feature-icon-wrapper">🛡️</div>
      <h3>Bez reklama i praćenja</h3>
      <p>Aplikacija je u potpunosti besplatna, ne sadrži dosadne oglase i ne prikuplja nikakve podatke o korisnicima.</p>
    </div>

    <div class="feature-card">
      <div class="feature-icon-wrapper">📍</div>
      <h3>Oznake, bilješke i PDF</h3>
      <p>Postavljajte i uređujte knjižne oznake i bilješke, izvozite ih u PDF te izrađujte sigurnosnu kopiju svojih podataka.</p>
    </div>

    <div class="feature-card">
      <div class="feature-icon-wrapper">📅</div>
      <h3>Plan čitanja</h3>
      <p>Pratite ugrađeni dnevni program čitanja Katoličke Biblije raspoređen kroz 365 dana.</p>
    </div>

    <div class="feature-card">
      <div class="feature-icon-wrapper">🔍</div>
      <h3>Brza pretraga</h3>
      <p>Jednostavno i brzo pretražujte biblijski tekst prema pojmovima ili ključnim riječima.</p>
    </div>

  </div>
</div>

<div class="wrapper" style="max-width: 1000px; padding: 0 20px; margin: 0 auto;">
  <div class="showcase-container">
    <h2 class="section-title">Prilagodba izgleda</h2>
    <p class="section-subtitle">Odaberite ugrađene vizualne teme i veličinu slova za ugodno čitanje u svim uvjetima osvjetljenja.</p>
    
    <div class="showcase-wrapper">
      <div class="showcase-controls">
        <button class="theme-btn active" data-theme="day">
          <span class="theme-dot day"></span>
          <div class="theme-info">
            <h4>Dnevna tema</h4>
            <p>Klasični svijetli prikaz s čistim kontrastom za čitanje pri danjem svjetlu.</p>
          </div>
        </button>
        <button class="theme-btn" data-theme="sepia">
          <span class="theme-dot sepia"></span>
          <div class="theme-info">
            <h4>Sepia tema</h4>
            <p>Topli žućkasti tonovi koji smanjuju naprezanje očiju kod dužeg čitanja.</p>
          </div>
        </button>
        <button class="theme-btn" data-theme="night">
          <span class="theme-dot night"></span>
          <div class="theme-info">
            <h4>Noćna tema</h4>
            <p>Potpuno tamna tema idealna za tiho čitanje u mraku bez ometanja.</p>
          </div>
        </button>
        <button class="theme-btn" data-theme="wine">
          <span class="theme-dot wine"></span>
          <div class="theme-info">
            <h4>Vinska tema</h4>
            <p>Kombinacija dubokih crvenih tonova za profinjen i topao izgled.</p>
          </div>
        </button>
      </div>
      
      <div class="phone-mockup">
        <div id="phoneScreen" class="phone-screen theme-day">
          <div class="phone-header">Biblija-hrv</div>
          <div class="chapter-title">Evanđelje po Ivanu 1</div>
          <div class="verse"><span class="v-num">1</span>U početku bijaše Riječ i Riječ bijaše u Boga i Riječ bijaše Bog.</div>
          <div class="verse"><span class="v-num">2</span>Ona bijaše u početku u Boga.</div>
          <div class="verse"><span class="v-num">3</span>Sve po njoj posta i bez nje ne posta ništa što je postalo.</div>
          <div class="verse"><span class="v-num">4</span>U njoj bijaše život i život bijaše svjetlo ljudima.</div>
          <div class="verse"><span class="v-num">5</span><span class="highlight">I svjetlo u tami svijetli i tama ga ne obuze.</span></div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="changelog-card-wrapper">
  <div class="changelog-card">
    <h3>Povijest izmjena i inačice</h3>
    <p>Zanima vas što je novo u posljednjem izdanju? Pogledajte detaljan popis svih nadogradnji, ispravaka i novih mogućnosti.</p>
    <a href="./changelog.html" class="changelog-link-btn">
      Pregledaj popis inačica
    </a>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const themeButtons = document.querySelectorAll('.theme-btn');
    const phoneScreen = document.getElementById('phoneScreen');
    
    themeButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        themeButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Change phone screen theme class
        const selectedTheme = this.getAttribute('data-theme');
        phoneScreen.className = 'phone-screen theme-' + selectedTheme;
      });
    });
  });
</script>
