---
layout: page
title: "Popis izmjena i novosti"
---

<style>
  .post-header { display: none; }
  .page-content .wrapper { max-width: 100%; padding: 0; }
  .site-footer { margin-top: 0; border-top: 1px solid #e2e8f0; background-color: #f8fafc; }
</style>

<div class="changelog-header-section">
  <a href="./" class="back-link">
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 4px;"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
    Povratak na početnu stranicu
  </a>
  <h1>Popis izmjena i novosti</h1>
  <p>Pregled cjelokupne povijesti izdanja, promjena i novih mogućnosti u aplikaciji <strong>Biblija-hrv</strong>.</p>
</div>

<div class="changelog-container">
  <div class="changelog-timeline">

    <div class="changelog-item">
      <h2>Biblija-hrv 4.9.0.0 <span class="badge">srpanj 2026.</span></h2>
      <ul>
        <li>Dodano je generiranje PDF dokumenata iz knjižnih oznaka i bilježaka, uz prilagođeni stil i podršku za hrvatske znakove.</li>
        <li>Android aplikacija usklađena je sa sustavom Android 16: ciljana i kompilacijska API razina postavljene su na 36.</li>
        <li>Inačica 4.9.0.0 dostupna je samo postojećim korisnicima aplikacije</li>
      </ul>
    </div>

    <div class="changelog-item">
      <h2>Biblija-hrv 4.0.0.6 <span class="badge">lipanj 2026.</span></h2>
      <ul>
        <li>Ispravljena pogreška (beskonačna petlja iscrtavanja) u Čitanju dana koja je uzrokovala neželjeno gašenje ekrana tijekom slušanja.</li>
        <li>Otklanjanje pogrešaka i poboljšanje prikaza vizualnog sučelja aplikacije.</li>
      </ul>
    </div>

    <div class="changelog-item">
      <h2>Biblija-hrv 4.0.0.5 <span class="badge">lipanj 2026</span></h2>
      <ul>
        <li>Riješen problem s prikazom od ruba do ruba (edge-to-edge) za Android 15.</li>
        <li>Ispravljena logika prepoznavanja nadogradnje aplikacije pri prikazu početnog ekrana verzije.</li>
        <li>Redizajnirana glavna zaglavlja (toolbars) i donji izbornik u moderni, čišći MD3 stil.</li>
        <li>Uveden novi plutajući audio izvođač na dnu ekrana koji omogućuje slobodno čitanje i listanje teksta tijekom slušanja.</li>
        <li>Omogućeno sinkronizirano isticanje stihova (karaoke-style) i automatsko glatko pomicanje stihova na sredinu ekrana (kako u samostalnim poglavljima, tako i u Dnevnom planu čitanja s više poglavlja).</li>
        <li>Moderniziran i vizualno osvježen izgled dijaloga "Postavke" i "O aplikaciji".</li>
        <li>Riješen problem s neispravnim pozicioniranjem audio izvođača na dugim poglavljima izvan vidnog polja (viewporta) korištenjem React Portala.</li>
        <li>Riješen problem s neispravnim bojama fonta i gumba audio izvođača pri promjeni vizualne teme te spriječeno automatsko vraćanje i ponavljanje reprodukcije (looping) na kraju poglavlja.</li>
      </ul>
    </div>

    <div class="changelog-item">
      <h2>Biblija-hrv 4.0.0.4 <span class="badge">lipanj 2026</span></h2>
      <ul>
        <li>Interaktivno mijenjanje postavki glasa (glasnoća, brzina i visina).</li>
        <li>Omogućen postupak "select-copy-bookmark-paste" unutar poglavlja.</li>
        <li>Riješeno gubljenje lijeve margine i skakanje teksta pri listanju.</li>
        <li>Ispravljena pogreška u planu čitanja.</li>
      </ul>
      <div class="instructions-box">
        <strong>Upute za ispravljanje pogreške u planu čitanja:</strong><br>
        Na donjoj traci izbornika gumb <em>"Plan čitanja" => Srednji gumb na gornjoj traci izbornika => Dolje na dnu padajućeg izbornika odaberite opciju "Potpuni reset plana"</em>. Time će se pokrenuti ispravno popunjavanje plana čitanja.
      </div>
    </div>

    <div class="changelog-item">
      <h2>Biblija-hrv 4.0.0.0 <span class="badge">kolovoz 2025</span></h2>
      <ul>
        <li>Bolja integracija s Ionic okružjem.</li>
        <li>Dodana uvoz/izvoz funkcionalnost knjižnih oznaka i plana čitanja za Android.</li>
        <li>Dodana funkcionalnost podjele rezultata pretrage na više stranica.</li>
      </ul>
    </div>

    <div class="changelog-item">
      <h2>Biblija-hrv 3.9.0.7 <span class="badge">srpanj 2025</span></h2>
      <ul>
        <li>Ispravljena pogreška preklapanja navigacijske trake aplikacije s navigacijskom trakom mobilnog OS-a na nekim uređajima.</li>
      </ul>
    </div>

    <div class="changelog-item">
      <h2>Biblija-hrv 3.9.0.6 <span class="badge">srpanj 2025</span></h2>
      <ul>
        <li>Ažurirano za Android 15 (API level 35).</li>
        <li>Usklađivanje s novim Google Play zahtjevima.</li>
      </ul>
    </div>

    <div class="changelog-item">
      <h2>Biblija-hrv 3.9.0.5 <span class="badge">ožujak 2025</span></h2>
      <ul>
        <li>Ispravka pogrešaka u funkcionalnosti pretrage.</li>
      </ul>
    </div>

    <div class="changelog-item">
      <h2>Biblija-hrv 3.9.0.4 <span class="badge">prosinac 2024</span></h2>
      <ul>
        <li>Izmjena vizualnih detalja aplikacije i optimizacija sučelja.</li>
      </ul>
    </div>

    <div class="changelog-item">
      <h2>Biblija-hrv 3.9.0.2 <span class="badge">studeni 2024</span></h2>
      <ul>
        <li>Ispravljena pogreška višestrukih upisa u planu čitanja.</li>
      </ul>
    </div>

    <div class="changelog-item">
      <h2>Biblija-hrv 3.9.0.1 <span class="badge">studeni 2024</span></h2>
      <ul>
        <li>Ispravke uočenih pogrešaka i poboljšanje stabilnosti aplikacije.</li>
      </ul>
    </div>

    <div class="changelog-item">
      <h2>Biblija-hrv 3.9.0 <span class="badge">studeni 2024</span></h2>
      <ul>
        <li>Dodano više naprednih opcija pretrage.</li>
        <li>Poboljšano upravljanje i prikaz plana čitanja.</li>
        <li>Dodana tekst-u-govor (TTS) funkcionalnost u dnevni plan čitanja.</li>
        <li>U WEB (PWA) inačici dodane su funkcionalnosti kreiranja i obnove pričuvnih kopija (backup/restore) knjižnih oznaka i plana čitanja.</li>
      </ul>
    </div>

    <div class="changelog-item">
      <h2>Biblija-hrv 3.1.0 <span class="badge">rujan 2024</span></h2>
      <ul>
        <li>Poboljšano upravljanje vizualnim temama aplikacije.</li>
        <li>Dodana nova vizualna tema "Vino" (Wine).</li>
        <li>U funkcionalnosti pretrage dodane nove opcije filtriranja.</li>
      </ul>
    </div>

    <div class="changelog-item">
      <h2>Biblija-hrv 3.0.0.1 <span class="badge">srpanj 2024</span></h2>
      <ul>
        <li>Ciljna API razina (Android SDK) podignuta na 34 u skladu s novim uvjetima Google trgovine (Google Play).</li>
      </ul>
    </div>

    <div class="changelog-item">
      <h2>Biblija-hrv 3.0.0 <span class="badge">rujan 2023</span></h2>
      <ul>
        <li>Dodana funkcionalnost slušanja Biblije korištenjem ugrađene TTS (Text-to-Speech) funkcije na hrvatskom jeziku.</li>
      </ul>
    </div>

    <div class="changelog-item">
      <h2>Biblija-hrv 2.0.4 <span class="badge">kolovoz 2023</span></h2>
      <ul>
        <li>Promijenjena minimalna API razina na 33 zbog novih zahtjeva Google Play trgovine.</li>
      </ul>
    </div>

    <div class="changelog-item">
      <h2>Biblija-hrv 2.0.2 <span class="badge">svibanj 2023</span></h2>
      <ul>
        <li>Optimiziran i poboljšan sustav plana čitanja Biblije.</li>
      </ul>
    </div>

    <div class="changelog-item">
      <h2>Biblija-hrv 2.0.0 <span class="badge">travanj 2023</span></h2>
      <ul>
        <li>Dodana nova značajka: raspored dnevnog čitanja Katoličke Biblije u 365 dana.</li>
        <li>Dodana nova tema s većim kontrastom za ugodnije noćno čitanje.</li>
      </ul>
    </div>

    <div class="changelog-item">
      <h2>Biblija-hrv 1.2.3 <span class="badge">kolovoz 2022</span></h2>
      <ul>
        <li>Male izmjene korisničkog sučelja radi bolje čitljivosti.</li>
        <li>Popravak uočenih sitnijih pogrešaka.</li>
      </ul>
    </div>

    <div class="changelog-item">
      <h2>Biblija-hrv 1.2.2 <span class="badge">srpanj 2022</span></h2>
      <ul>
        <li>Optimiziranje performansi i sitne vizualne korekcije sučelja.</li>
      </ul>
    </div>

    <div class="changelog-item">
      <h2>Biblija-hrv 1.2.0 <span class="badge">srpanj 2022</span></h2>
      <ul>
        <li>Nova značajka: postavljanje i uređivanje knjižnih oznaka (bookmarka).</li>
        <li>Pojednostavljeno postavljanje oznaka.</li>
      </ul>
    </div>

  </div>
</div>
