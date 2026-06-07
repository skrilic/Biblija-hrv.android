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
  <img class="hero-logo" src="./pngwing.com.png" width="140" height="140" alt="Biblija-hrv Logo">
  <h1>Biblija-hrv</h1>
  <p class="hero-subtitle">Aplikacija za čitanje i slušanje Katoličke Biblije na hrvatskom jeziku. Potpuno besplatna, bez reklama i dostupna izvan mreže.</p>
  
  <div class="cta-buttons">
    <a href="https://play.google.com/store/apps/details?id=com.sks.biblija" class="cta-btn primary" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24" width="20" height="20">
        <path d="M5,3.23c-0.29,0.32-0.45,0.86-0.45,1.57v14.41c0,0.7,0.16,1.25,0.45,1.57l0.08,0.07L13.1,12.8v-0.15L5.08,3.15L5,3.23z"/>
        <path d="M15.77,15.48l-2.67-2.68v-0.15l2.67-2.68l0.08,0.05l3.16,1.8c0.9,0.51,0.9,1.35,0,1.86l-3.16,1.8L15.77,15.48z"/>
        <path d="M13.18,12.65L10.5,9.97L5.32,4.07c0.23-0.08,0.54-0.03,0.9,0.17l9.64,5.49L13.18,12.65z"/>
        <path d="M13.18,12.95l2.67,2.68l-9.64,5.49c-0.36,0.2-0.67,0.25-0.9,0.17L13.18,12.95z"/>
      </svg>
      Google Play Trgovina
    </a>
    <a href="https://biblija-hrv.vercel.app" class="cta-btn secondary" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24" width="20" height="20">
        <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1,14.5H11V11h2Zm0-7H11V7h2Z"/>
      </svg>
      Pokreni PWA Web Aplikaciju
    </a>
  </div>
</div>

<div class="features-container">
  <h2 class="section-title">Osnovne Značajke</h2>
  <p class="section-subtitle">Dizajnirana s ciljem da pruži najbolje moguće iskustvo čitanja i proučavanja Božje Riječi na vašem mobilnom uređaju ili računalu.</p>

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
      <h3>Knjižne oznake</h3>
      <p>Postavljajte i uređujte knjižne oznake, te uvozite ili izvozite svoje podatke za sigurnosnu kopiju.</p>
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
    <h2 class="section-title">Prilagodba Izgleda</h2>
    <p class="section-subtitle">Odaberite ugrađene vizualne teme i veličinu slova za ugodno čitanje u svim uvjetima osvjetljenja.</p>
    
    <div class="showcase-wrapper">
      <div class="showcase-controls">
        <button class="theme-btn active" data-theme="day">
          <span class="theme-dot day"></span>
          <div class="theme-info">
            <h4>Dnevna Tema</h4>
            <p>Klasični svijetli prikaz s čistim kontrastom za čitanje pri danjem svjetlu.</p>
          </div>
        </button>
        <button class="theme-btn" data-theme="sepia">
          <span class="theme-dot sepia"></span>
          <div class="theme-info">
            <h4>Sepia Tema</h4>
            <p>Topli žućkasti tonovi koji smanjuju naprezanje očiju kod dužeg čitanja.</p>
          </div>
        </button>
        <button class="theme-btn" data-theme="night">
          <span class="theme-dot night"></span>
          <div class="theme-info">
            <h4>Noćna Tema</h4>
            <p>Potpuno tamna tema idealna za tiho čitanje u mraku bez ometanja.</p>
          </div>
        </button>
        <button class="theme-btn" data-theme="wine">
          <span class="theme-dot wine"></span>
          <div class="theme-info">
            <h4>Vinska Tema (Vino)</h4>
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
    <h3>Povijest Izmjena i Verzije</h3>
    <p>Zanima vas što je novo u posljednjem izdanju? Pogledajte detaljan popis svih nadogradnji, ispravaka i novih mogućnosti.</p>
    <a href="./changelog.html" class="changelog-link-btn">
      Pregledaj Popis Inačica (Changelog)
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
