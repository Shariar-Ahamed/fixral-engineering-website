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
  initPortfolioFiltering();
  initPortfolioPagination();
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
    explore_details: "Explore Details",

    /* Portfolio Page Specific Keys */
    breadcrumb_home: "Home",
    breadcrumb_portfolio: "Portfolio",
    port_tablet_badge: "EXPERIENCE & SUCCESS",
    port_hero_title: "Our Featured Projects",
    port_hero_desc: "Industrial success stories we have completed with precision engineering, digital optimization, and top-level manufacturing technologies.",
    port_hero_desc_tablet: "Reference designs brought to life at the most precise tolerances by pushing engineering boundaries.",
    filter_all: "All",
    filter_3d_scan: "3D Scanning",
    filter_cad: "CAD Modeling",
    filter_3d_print: "3D Printing",
    filter_restoration: "Restoration",
    filter_digital: "Digital Solutions",
    filter_automotive: "Automotive",
    p1_spec: "±0.08 mm deviation tolerance",
    p1_tags: "VEHICLE RESTORATION / 3D SCANNING",
    p1_date: "SEPTEMBER 2024",
    p1_title: "Classic Porsche Body Restoration",
    p1_desc: "Millimetric optical scanning and aerodynamic surface re-modeling of a rare 1974 Porsche 911 chassis for wind tunnel validation.",
    p2_spec: "20 micron SLS layer precision",
    p2_tags: "REVERSE ENGINEERING / SLS PRINTING",
    p2_date: "AUGUST 2024",
    p2_title: "Precision Aerospace Turbine Blade",
    p2_desc: "Micro-wear margin analysis of gas turbine blade geometry, aero-dynamic structural optimization, and flight-grade SLS 3D additive manufacturing.",
    p3_spec: "STL format certified validation",
    p3_tags: "CAD DESIGN / SLA PROTOTYPING",
    p3_date: "JULY 2024",
    p3_title: "Robotic Arm Joint Prototype",
    p3_desc: "Topology optimization and finite-element stress analysis to reduce payload weight for high-torque industrial robotic articulated arm joints.",
    p4_spec: "IP67 environmental sealing",
    p4_tags: "INDUSTRIAL DESIGN / SLA PRINTING",
    p4_date: "JUNE 2024",
    p4_title: "Autonomous Vehicle LiDAR Sensor Box",
    p4_desc: "Precision SLA resin casting of ruggedized autonomous vehicle LiDAR enclosure with integrated active cooling channels and weatherproofing.",
    p5_spec: "±0.05 mm articulated joint tolerance",
    p5_tags: "BIOMECHANICS / SLS PRINTING",
    p5_date: "MAY 2024",
    p5_title: "Medical Prosthetic Hand Mechanism",
    p5_desc: "Monolithic functional selective laser sintering (PA12) of anthropomorphic bionic prosthetic hand mechanism with custom anatomical fitting.",
    p6_spec: "1:1 original form guarantee",
    p6_tags: "PLASTIC REPRODUCTION / CAD",
    p6_date: "APRIL 2024",
    p6_title: "Classic Alfa Romeo Dashboard Panel",
    p6_desc: "High-resolution photogrammetric and optical scanning of sun-damaged 1968 classic Alfa Romeo dashboard components, followed by CAD mold recreation.",
    p7_spec: "Original CAD matching allowance",
    p7_tags: "REVERSE ENGINEERING / CMM ANALYSIS",
    p7_date: "JUNE 2024",
    p7_title: "Industrial Pump Impeller Renewal",
    p7_desc: "Micron-tolerance digital twin generated via CMM probe and 3D optical scanning for wear-resistant renewal manufacturing.",
    port_empty_title: "No Projects Found",
    port_empty_desc: "No engineering projects matched the selected category. Try selecting a different filter.",
    pag_prev: "Previous",
    pag_next: "Next",

    /* Footer Links & Titles */
    footer_title_services: "SERVICES",
    footer_title_company: "COMPANY",
    footer_title_support: "SUPPORT",
    footer_title_contact: "CONTACT",
    foot_link_3d: "3D Scanning & Reverse Eng.",
    foot_link_cad: "CAD Modeling & Design",
    foot_link_print: "3D Printing & Prototyping",
    foot_link_cmm: "CMM & Quality Control",
    foot_link_rest: "Vehicle & Plastic Restoration",
    foot_link_about: "About Us",
    foot_link_proj: "Our Projects",
    foot_link_lab: "Laboratory & Equipment",
    foot_link_careers: "Careers",
    foot_link_contact: "Contact",
    foot_link_quote: "Request a Quote",
    foot_link_faq: "FAQ",
    foot_link_docs: "Technical Documentation",
    foot_link_format: "CAD Format Standards",
    foot_privacy: "Privacy Policy",
    foot_terms: "Terms of Service"
  },
  tr: {
    nav_home: "Ana Sayfa",
    nav_portfolio: "Portfolyo",
    nav_services: "Hizmetler",
    nav_news: "Haberler",
    nav_contact: "İletişim",
    nav_videos: "Videolar",
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
    explore_details: "Detayları İncele",

    /* Portfolio Page Specific Keys */
    breadcrumb_home: "Ana Sayfa",
    breadcrumb_portfolio: "Portfolyo",
    port_tablet_badge: "DENEYİM & BAŞARI",
    port_hero_title: "Öne Çıkan Projelerimiz",
    port_hero_desc: "Hassas mühendislik, dijital optimizasyon ve üst düzey üretim teknolojileriyle tamamladığımız endüstriyel başarı hikayeleri.",
    port_hero_desc_tablet: "Mühendislik sınırlarını zorlayarak, en hassas toleranslarda hayata geçirdiğimiz referans tasarımlar.",
    filter_all: "Tümü",
    filter_3d_scan: "3D Tarama",
    filter_cad: "CAD Modelleme",
    filter_3d_print: "3D Baskı",
    filter_restoration: "Restorasyon",
    filter_digital: "Dijital Çözümler",
    filter_automotive: "Otomotiv",
    p1_spec: "±0.08 mm sapma toleransı",
    p1_tags: "ARAÇ RESTORASYONU / 3D TARAMA",
    p1_date: "EYLÜL 2024",
    p1_title: "Klasik Porsche Gövde Restorasyonu",
    p1_desc: "Rüzgar tüneli doğrulaması için nadir 1974 Porsche 911 şasisinin milimetrik optik taraması ve aerodinamik yüzey modellemesi.",
    p2_spec: "20 mikron SLS katman hassasiyeti",
    p2_tags: "TERSİNE MÜHENDİSLİK / SLS BASKI",
    p2_date: "AĞUSTOS 2024",
    p2_title: "Hassas Havacılık Türbin Kanadı",
    p2_desc: "Gaz türbini kanadı geometrisinin mikro aşınma payı analizi, aerodinamik yapısal optimizasyon ve uçuş standardında SLS 3D eklemeli imalat.",
    p3_spec: "STL format onaylı doğrulama",
    p3_tags: "CAD TASARIM / SLA PROTOTİP",
    p3_date: "TEMMUZ 2024",
    p3_title: "Robotik Kol Eklem Prototipi",
    p3_desc: "Yüksek torklu endüstriyel robotik mafsallı kol eklemlerinde yük ağırlığını azaltmak için topoloji optimizasyonu ve sonlu elemanlar gerilim analizi.",
    p4_spec: "IP67 çevresel sızdırmazlık",
    p4_tags: "ENDÜSTRİYEL TASARIM / SLA BASKI",
    p4_date: "HAZİRAN 2024",
    p4_title: "Otonom Araç LiDAR Sensör Kutusu",
    p4_desc: "Entegre aktif soğutma kanallarına ve hava koşullarına dayanıklılığa sahip dayanıklı otonom araç LiDAR muhafazasının hassas SLA reçine dökümü.",
    p5_spec: "±0.05 mm mafsal eklem toleransı",
    p5_tags: "BİYOMEKANİK / SLS BASKI",
    p5_date: "MAYIS 2024",
    p5_title: "Tıbbi Protez El Mekanizması",
    p5_desc: "Özel anatomik uyuma sahip antropomorfik biyonik protez el mekanizmasının monolitik fonksiyonel seçici lazer sinterlemesi (PA12).",
    p6_spec: "1:1 orijinal form garantisi",
    p6_tags: "PLASTİK REPRODÜKSİYON / CAD",
    p6_date: "NİSAN 2024",
    p6_title: "Klasik Alfa Romeo Gösterge Paneli",
    p6_desc: "Güneşten hasar görmüş 1968 klasik Alfa Romeo gösterge paneli bileşenlerinin yüksek çözünürlüklü fotogrametrik ve optik taraması ve ardından CAD kalıp yeniden üretimi.",
    p7_spec: "Orijinal CAD eşleştirme payı",
    p7_tags: "TERSİNE MÜHENDİSLİK / CMM ANALİZ",
    p7_date: "HAZİRAN 2024",
    p7_title: "Endüstriyel Pompa Pervanesi Yenileme",
    p7_desc: "Aşınmış endüstriyel pompa pervanesinin CMM ve 3D optik tarama ile mikron toleranslı dijital modeli çıkarılarak yenileme üretimi tamamlandı.",
    port_empty_title: "Proje Bulunamadı",
    port_empty_desc: "Seçilen kategoriyle eşleşen mühendislik projesi bulunamadı. Farklı bir filtre deneyin.",
    pag_prev: "Geri",
    pag_next: "İleri",

    /* Footer Links & Titles */
    footer_title_services: "HİZMETLER",
    footer_title_company: "ŞİRKET",
    footer_title_support: "DESTEK",
    footer_title_contact: "İLETİŞİM",
    foot_link_3d: "3D Tarama & Tersine Mühendislik",
    foot_link_cad: "CAD Modelleme & Tasarım",
    foot_link_print: "3D Baskı & Prototipleme",
    foot_link_cmm: "CMM & Kalite Kontrol",
    foot_link_rest: "Araç & Plastik Restorasyon",
    foot_link_about: "Hakkımızda",
    foot_link_proj: "Projelerimiz",
    foot_link_lab: "Laboratuvar",
    foot_link_careers: "Kariyer",
    foot_link_contact: "İletişim",
    foot_link_quote: "Teklif Kılavuzu",
    foot_link_faq: "SSS",
    foot_link_docs: "Teknik Dokümanlar",
    foot_link_format: "Format Standartları",
    foot_privacy: "Gizlilik Politikası",
    foot_terms: "Kullanım Koşulları"
  }
};

function initLanguageSwitcher() {
  const desktopBtn = document.getElementById('langSwitchBtn');
  const mobileBtn = document.getElementById('mobileLangBtn');
  const desktopDisplay = document.getElementById('currentLang');
  const mobileDisplay = document.getElementById('mobileCurrentLang');

  let currentLang = (desktopDisplay && desktopDisplay.textContent.trim().toLowerCase() === 'tr') ? 'tr' : 'en';

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

/* --------------------------------------------------------------------------
   6. Interactive Portfolio Category Filtering & HUD Status Counter
   -------------------------------------------------------------------------- */
function initPortfolioFiltering() {
  const filterChips = document.querySelectorAll('.portfolio-filter-chips .filter-chip');
  const projectCards = document.querySelectorAll('.portfolio-item-card');
  const counterEl = document.getElementById('portfolioCount');
  const emptyState = document.getElementById('portfolioEmptyState');

  if (!filterChips.length || !projectCards.length) return;

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      // Update chip active state & accessibility
      filterChips.forEach(c => {
        c.classList.remove('active');
        c.setAttribute('aria-selected', 'false');
      });
      chip.classList.add('active');
      chip.setAttribute('aria-selected', 'true');

      const filterValue = chip.getAttribute('data-filter');
      let visibleCount = 0;

      projectCards.forEach(card => {
        const categories = (card.getAttribute('data-category') || '').split(' ');
        const matches = (filterValue === 'all' || categories.includes(filterValue));

        if (matches) {
          card.classList.remove('is-hidden');
          card.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'translateY(8px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
          visibleCount++;
        } else {
          card.classList.add('is-hidden');
          card.style.display = 'none';
        }
      });

      // Update live HUD counter
      if (counterEl) {
        counterEl.textContent = visibleCount;
      }

      // Toggle empty state if no matches
      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   7. Interactive Portfolio Pagination Controls
   -------------------------------------------------------------------------- */
function initPortfolioPagination() {
  const pageBtns = document.querySelectorAll('.portfolio-pagination-bar .page-num-btn');
  const prevBtn = document.getElementById('prevPageBtn');
  const nextBtn = document.getElementById('nextPageBtn');
  const gridSection = document.querySelector('.portfolio-filter-section');

  if (!pageBtns.length) return;

  let currentPage = 1;
  const totalPages = pageBtns.length;

  const updatePaginationUI = (newPage) => {
    currentPage = newPage;
    pageBtns.forEach(btn => {
      const pageNum = parseInt(btn.getAttribute('data-page'), 10);
      btn.classList.toggle('active', pageNum === currentPage);
    });

    if (prevBtn) {
      prevBtn.disabled = (currentPage === 1);
      prevBtn.classList.toggle('disabled', currentPage === 1);
    }

    if (nextBtn) {
      nextBtn.disabled = (currentPage === totalPages);
      nextBtn.classList.toggle('disabled', currentPage === totalPages);
    }

    // Scroll to top of portfolio grid with header offset
    if (gridSection) {
      const headerOffset = 88;
      const elementPosition = gridSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  pageBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const pageNum = parseInt(btn.getAttribute('data-page'), 10);
      if (pageNum !== currentPage) {
        updatePaginationUI(pageNum);
      }
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        updatePaginationUI(currentPage - 1);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages) {
        updatePaginationUI(currentPage + 1);
      }
    });
  }
}

