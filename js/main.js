/**
 * FIXRAL Industrial Engineering - Interactive Client Script
 * Handles live HUD micro-scanner simulation, language toggle (EN/TR),
 * quote modal, and smooth UI enhancements.
 */

document.addEventListener('DOMContentLoaded', () => {
  initLiveScannerHUD();
  initLanguageSwitcher();
  initQuoteModal();
  initSmoothScroll();
  initMobileMenu();
});

/* --------------------------------------------------------------------------
   1. Live HUD Laser Scanning Simulation
   Simulates precision measurement coordinates (X, Y, Z) jittering micro-units
   -------------------------------------------------------------------------- */
function initLiveScannerHUD() {
  const coordXEl = document.getElementById('hudCoordX');
  const coordYEl = document.getElementById('hudCoordY');
  const coordZEl = document.getElementById('hudCoordZ');

  if (!coordXEl || !coordYEl || !coordZEl) return;

  let baseX = 184.230;
  let baseY = 742.812;
  let baseZ = 42.159;

  setInterval(() => {
    // Generate subtle micro-jitter (±0.005 mm)
    const jitterX = (Math.random() * 0.01 - 0.005);
    const jitterY = (Math.random() * 0.01 - 0.005);
    const jitterZ = (Math.random() * 0.008 - 0.004);

    coordXEl.textContent = (baseX + jitterX).toFixed(3);
    coordYEl.textContent = (baseY + jitterY).toFixed(3);
    coordZEl.textContent = (baseZ + jitterZ).toFixed(3);
  }, 450);
}

/* --------------------------------------------------------------------------
   2. Interactive Language Switcher (EN default, TR toggle)
   -------------------------------------------------------------------------- */
const translations = {
  en: {
    nav_home: "Home",
    nav_portfolio: "Portfolio",
    nav_services: "Services",
    nav_news: "News",
    nav_contact: "Contact",
    nav_videos: "Videos",
    btn_get_quote: "Get Quote",
    
    hero_tol: "TOLERANCE ±0.05 MM",
    hero_res: "RESOLUTION 20 µm",
    hero_format: "FORMAT STL / STEP / OBJ",
    hero_title: "Limitless Precision in Engineering",
    hero_desc: "Fixral transforms your ideas into physical reality with millimeter accuracy using advanced 3D scanning, reverse engineering, and precision prototyping technologies.",
    hero_cta1: "Explore Projects",
    hero_cta2: "Our Services",
    
    sec_services_tag: "OUR SERVICES",
    sec_services_title: "Our Engineering Solutions",
    sec_services_desc: "From the physical world to digital models, from precision manufacturing to intelligent software systems—integrated industrial engineering processes.",
    
    sec_process_tag: "OUR WORKFLOW",
    sec_process_title: "From Scanning to Production",
    sec_process_desc: "We transform your ideas and physical parts into final products with certified engineering discipline.",
    
    sec_portfolio_tag: "PORTFOLIO",
    sec_portfolio_title: "Featured Projects",
    sec_portfolio_desc: "High-end restoration and parts engineering success stories brought to life in Fixral laboratories.",
    btn_view_all: "View All Projects",
    
    stat_founded: "Foundation Year",
    stat_projects: "Completed Projects",
    stat_tol: "Dimensional Tolerance",
    stat_res: "Scanning Resolution",
    
    sec_news_tag: "TECHNOLOGY & INSIGHTS",
    sec_news_title: "Latest Developments",
    sec_news_desc: "The latest trends, 3D printing innovations, and technical engineering articles from the world of industrial design.",
    
    cta_title: "Let's Bring Your Project to Life",
    cta_desc: "Prepare your ideas and component requirements flawlessly for production with Fixral's micron-level precision scanning, reverse engineering, and advanced digital modeling capabilities.",
    cta_btn: "Get a Quote & Start",
    
    footer_desc: "Micron-precision engineering solutions, 3D modeling, and advanced technology prototyping leader. Accuracy beyond limits.",
    footer_copy: "© 2024 FIXRAL Industrial Engineering Studio. All rights reserved.",
    read_more: "Read More",
    explore_details: "Explore Details"
  },
  tr: {
    nav_home: "Home",
    nav_portfolio: "Portfolio",
    nav_services: "Services",
    nav_news: "News",
    nav_contact: "Contact",
    nav_videos: "Videos",
    btn_get_quote: "Teklif Al",
    
    hero_tol: "TOLERANS ±0.05 MM",
    hero_res: "ÇÖZÜNÜRLÜK 20 µm",
    hero_format: "FORMAT STL / STEP / OBJ",
    hero_title: "Mühendislikte Sınırsız Hassasiyet",
    hero_desc: "Fixral, ileri düzey 3D tarama, tersine mühendislik ve hassas prototipleme teknolojileriyle fikirlerinizi milimetrik doğrulukla fiziksel gerçekliğe dönüştürür.",
    hero_cta1: "Projelerinizi Keşfedin",
    hero_cta2: "Hizmetlerimiz",
    
    sec_services_tag: "HİZMET YELPAZEMİZ",
    sec_services_title: "Sunduğumuz Çözümler",
    sec_services_desc: "Fiziksel dünyadan dijital modellere, hassas üretimden akıllı yazılım sistemlerine kadar entegre endüstriyel mühendislik süreçleri.",
    
    sec_process_tag: "İŞ AKIŞIMIZ",
    sec_process_title: "Taramadan Üretime",
    sec_process_desc: "Fikirlerinizi ve fiziksel parçalarınızı, kalitesi tescillenmiş mühendislik disipliniyle nihai ürüne dönüştürüyoruz.",
    
    sec_portfolio_tag: "PORTFOLYO",
    sec_portfolio_title: "Öne Çıkan Projeler",
    sec_portfolio_desc: "Fixral laboratuvarlarında hayata geçen üst düzey restorasyon ve parça mühendisliği başarı hikayeleri.",
    btn_view_all: "Tümünü İncele",
    
    stat_founded: "Kuruluş Yılı",
    stat_projects: "Tamamlanan Proje",
    stat_tol: "Boyutsal Tolerans",
    stat_res: "Tarama Çözünürlüğü",
    
    sec_news_tag: "TEKNOLOJİ & BİLGİ",
    sec_news_title: "Son Gelişmeler",
    sec_news_desc: "Mühendislik dünyasındaki en son trendler, 3D baskı yenilikleri ve teknik makalelerimiz.",
    
    cta_title: "Projenizi Hayata Geçirelim",
    cta_desc: "Fixral'ın mikron düzeyinde hassas tarama, tersine mühendislik ve gelişmiş dijital modelleme kabiliyetleriyle fikirleriniz ve parça ihtiyaçlarınız kusursuzca üretime hazırlansın.",
    cta_btn: "Teklif Al ve Başla",
    
    footer_desc: "Hassas mühendislik çözümleri, 3D modelleme ve teknolojik prototiplemede lider ortağınız. Sınırları aşan doğruluk.",
    footer_copy: "© 2024 FIXRAL Industrial Engineering Studio. Tüm hakları saklıdır.",
    read_more: "Devamını Oku",
    explore_details: "Detayları İncele"
  }
};

function initLanguageSwitcher() {
  const desktopBtn = document.getElementById('langSwitchBtn');
  const mobileBtn = document.getElementById('mobileLangBtn');
  const desktopDisplay = document.getElementById('currentLang');
  const mobileDisplay = document.getElementById('mobileCurrentLang');

  let currentLang = 'en';

  const toggleLanguage = (e) => {
    if (e) e.stopPropagation();
    currentLang = currentLang === 'en' ? 'tr' : 'en';
    const upper = currentLang.toUpperCase();
    if (desktopDisplay) desktopDisplay.textContent = upper;
    if (mobileDisplay) mobileDisplay.textContent = upper;
    applyLanguage(currentLang);
  };

  if (desktopBtn) desktopBtn.addEventListener('click', toggleLanguage);
  if (mobileBtn) mobileBtn.addEventListener('click', toggleLanguage);
}

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
}

/* --------------------------------------------------------------------------
   3. Quote Modal Trigger
   -------------------------------------------------------------------------- */
function initQuoteModal() {
  const modal = document.getElementById('quoteModal');
  const closeBtn = document.getElementById('closeModalBtn');
  const quoteTriggers = document.querySelectorAll('.trigger-quote-modal');

  if (!modal) return;

  quoteTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });

  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = quoteForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `✓ Request Received`;
      submitBtn.style.background = '#10B981';
      setTimeout(() => {
        modal.classList.remove('active');
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '';
        quoteForm.reset();
      }, 1500);
    });
  }
}

/* --------------------------------------------------------------------------
   4. Smooth Scroll for Anchor Links
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 88;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. Mobile Navigation Menu Toggle
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!menuBtn || !header) return;

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    header.classList.toggle('nav-open');
  });

  // Close menu when clicking any navigation link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('nav-open');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) {
      header.classList.remove('nav-open');
    }
  });
}
