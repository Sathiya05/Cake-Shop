document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  // 1. Apply saved preferences immediately to prevent flickering
  const savedTheme = localStorage.getItem("sweetstudio-theme");
  const savedDir = localStorage.getItem("sweetstudio-dir");
  
  // Theme check: prefers saved theme, falls back to system preference
  if (savedTheme === "dark" || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // RTL check
  if (savedDir === "rtl") {
    document.documentElement.setAttribute("dir", "rtl");
  } else {
    document.documentElement.setAttribute("dir", "ltr");
  }

  const isDark = document.documentElement.classList.contains("dark");
  const isRTL = document.documentElement.getAttribute("dir") === "rtl";

  const themeIcon = isDark
    ? '<i class="fa-solid fa-sun text-base"></i>'
    : '<i class="fa-solid fa-moon text-base"></i>';
  const rtlIcon = isRTL
    ? '<span class="text-xs font-bold">LTR</span>'
    : '<span class="text-xs font-bold">RTL</span>';

  // 2. Insert the HTML structure
  navbar.innerHTML = `
<nav class="fixed top-0 left-0 w-full z-[100] transition-all duration-500 font-sans">
  
  <div class="relative z-[70] bg-white dark:bg-[#2A1C20] shadow-sm border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
    <div class="max-w-[1440px] mx-auto px-4 lg:px-8">
      <div class="flex items-center justify-between h-20 md:h-24 gap-4">

        <!-- Logo Section -->
        <a href="index.html" class="relative z-[60] flex items-center gap-3 group shrink-0">
            <div class="flex flex-col">
                <span class="text-2xl md:text-3xl font-serif font-black tracking-tight text-[#E75480] transition-colors">
                    Sweet<span class="text-[#523940] dark:text-white">Studio</span>
                </span>
                <span class="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 font-bold leading-none mt-1">
                     Custom Desserts
                </span>
            </div>
        </a>

        <!-- Desktop Navigation -->
        <div id="desktopNav" class="hidden xl:flex items-center justify-center gap-4 text-[15px] font-medium flex-1">
          
          <!-- Home Dropdown -->
          <div class="relative group/home">
            <button id="homeBtn" class="nav-link flex items-center space-x-1.5 px-4 py-2.5 text-black dark:text-white transition-all duration-300">
              <span>Home</span>
              <i class="fa-solid fa-chevron-down text-[10px] transition-transform duration-300 group-hover/home:rotate-180 text-[#523940] dark:text-[#E75480]"></i>
            </button>
            <!-- Dropdown Menu -->
            <div id="homeMenu" class="absolute top-full ltr:left-0 rtl:right-0 mt-3 w-48 bg-white dark:bg-[#342429] shadow-xl py-2 z-50 border border-gray-100 dark:border-gray-800 opacity-0 invisible group-hover/home:opacity-100 group-hover/home:visible transition-all duration-300 translate-y-2 group-hover/home:translate-y-0">
              <a href="index.html" class="dropdown-link block px-5 py-2.5 text-sm text-black dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-[#2A1C20] hover:text-[#E75480] dark:hover:text-[#E75480] transition-colors">Home 1</a>
              <a href="home2.html" class="dropdown-link block px-5 py-2.5 text-sm text-black dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-[#2A1C20] hover:text-[#E75480] dark:hover:text-[#E75480] transition-colors">Home 2</a>
            </div>
          </div>
          <a href="about.html" class="nav-link px-4 py-2.5 text-black dark:text-white">About</a>

          <a href="menus.html" class="nav-link px-4 py-2.5 text-black dark:text-white">Menus</a>
          <a href="orders.html" class="nav-link px-4 py-2.5 text-black dark:text-white"> Orders</a>
          <a href="flavors.html" class="nav-link px-4 py-2.5 text-black dark:text-white">Flavors & Fillings</a>
          <a href="pricing.html" class="nav-link px-4 py-2.5 text-black dark:text-white">Pricing </a>
          <a href="contact.html" class="nav-link px-4 py-2.5 text-black dark:text-white">Contact</a>
        </div>

        <!-- Desktop Action Buttons & Toggles -->
        <div class="relative z-[60] hidden xl:flex items-center gap-3 shrink-0">
          
          <!-- Theme & RTL Toggles -->
          <div class="flex items-center gap-2 mr-2">
<button id="themeToggle" class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#2A1C20] border border-slate-200 dark:border-gray-700 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:border-secondary/40 hover:text-secondary transition-all">
                    <i class="fa-solid fa-moon text-sm dark:hidden"></i>
                    <i class="fa-solid fa-sun text-sm hidden dark:block"></i>
                </button>
           <button id="rtlToggle" class="flex items-center justify-center gap-2 px-3 h-10 rounded-xl bg-slate-100 dark:bg-[#2A1C20] border border-slate-200 dark:border-gray-700 text-xs font-bold text-slate-600 dark:text-gray-400 hover:border-secondary/40 transition-all">
                    <span id="rtlLabel">RTL</span>
                </button>
          </div>

          <div class="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-1"></div>
          
          <div class="flex items-center gap-3 ml-2">
              <a href="login.html" class="flex items-center justify-center px-6 h-10 rounded-xl border border-[#E75480] text-[#E75480] font-semibold text-sm bg-transparent hover:bg-[#E75480] hover:text-white transition-all duration-300">
                  Login
              </a>
              <a href="signup.html" class="flex items-center justify-center px-6 h-10 rounded-xl bg-[#523940] dark:bg-[#E75480] text-white border border-[#523940] dark:border-[#E75480] font-semibold text-sm hover:bg-[#E75480] hover:border-[#E75480] dark:hover:bg-white dark:hover:text-[#E75480] transition-all duration-300">
                  Sign Up
              </a>
          </div>
        </div>

        <!-- Mobile Menu Toggle Buttons -->
        <div class="relative z-[60] xl:hidden flex items-center gap-2 h-full">
          <button id="mobileBtn" class="w-10 h-10 flex items-center justify-center text-black dark:text-white focus:outline-none transition-colors ml-1">
            <i id="mobileIcon" class="fa-solid fa-bars-staggered text-2xl"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile Backdrop -->
  <div id="mobileBackdrop" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[40] hidden opacity-0 transition-opacity duration-300"></div>

  <!-- Mobile Menu Side Drawer -->
  <div id="mobileMenu" class="fixed top-0 ${isRTL ? 'left-0' : 'right-0'} w-4/5 max-w-sm h-[100dvh] bg-white dark:bg-[#2A1C20] z-[50] flex flex-col items-center text-center px-6 pt-24 pb-8 transform ${isRTL ? '-translate-x-full' : 'translate-x-full'} transition-transform duration-400 ease-in-out shadow-2xl overflow-y-auto">
    <div id="mobileNavLinks" class="flex flex-col items-center w-full gap-2 text-base font-medium">
      
      <!-- Mobile Home Dropdown -->
      <div class="w-full border-b border-gray-100 dark:border-gray-800">
        <button id="mobileHomeBtn" class="flex items-center justify-center gap-2 w-full py-4 text-black dark:text-white">
          <span>Home</span>
          <i id="mobileHomeIcon" class="fa-solid fa-chevron-down text-xs transition-transform duration-300 text-[#523940] dark:text-[#E75480]"></i>
        </button>
        <div id="mobileHomeMenu" class="hidden flex-col bg-gray-50 dark:bg-[#342429] mb-4 mt-2 overflow-hidden border border-gray-100 dark:border-gray-800 w-full text-center items-center">
          <a href="index.html" class="mobile-sublink block px-6 py-3 text-sm text-black dark:text-gray-200 hover:bg-[#E75480]/5 w-full">Home 1</a>
          <a href="home2.html" class="mobile-sublink block px-6 py-3 text-sm text-black dark:text-gray-200 hover:bg-[#E75480]/5 w-full">Home 2</a>
        </div>
      </div>
      <a href="about.html" class="mobile-link w-full py-4 border-b border-gray-100 dark:border-gray-800 text-black dark:text-white">About</a>

      <a href="menus.html" class="mobile-link w-full py-4 border-b border-gray-100 dark:border-gray-800 text-black dark:text-white">Menus</a>
      <a href="orders.html" class="mobile-link w-full py-4 border-b border-gray-100 dark:border-gray-800 text-black dark:text-white"> Orders</a>
      <a href="flavors.html" class="mobile-link w-full py-4 border-b border-gray-100 dark:border-gray-800 text-black dark:text-white">Flavors & Fillings</a>
      <a href="pricing.html" class="mobile-link w-full py-4 border-b border-gray-100 dark:border-gray-800 text-black dark:text-white">Pricing </a>
      <a href="contact.html" class="mobile-link w-full py-4 border-b border-gray-100 dark:border-gray-800 text-black dark:text-white">Contact</a>
    </div>

    <!-- Mobile Action Buttons -->
    <div class="mt-auto pt-8 flex flex-col w-full gap-3">
      <div class="flex items-center justify-center gap-3 mb-2">
        <button id="mobileThemeToggle" class="w-10 h-9 rounded-xl bg-slate-100 dark:bg-[#2A1C20] border border-slate-200 dark:border-gray-700 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:border-secondary/40 hover:text-secondary transition-all">
                    <i class="fa-solid fa-moon text-sm dark:hidden"></i>
                    <i class="fa-solid fa-sun text-sm hidden dark:block"></i>
                </button>
        <button id="mobileRtlToggle" class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-[#342429] border border-slate-200 dark:border-gray-700 text-xs font-bold text-slate-600 dark:text-gray-400 hover:border-secondary/40 transition-all">
          
          <span id="mobileRtlLabel">RTL</span>
        </button>
      </div>
      <a href="login.html" class="w-full py-3.5 flex items-center rounded-xl justify-center bg-transparent border border-[#E75480] text-[#E75480] font-semibold text-sm hover:bg-[#E75480] hover:text-white transition-all">Login</a>
      <a href="signup.html" class="w-full py-3.5 flex items-center rounded-xl justify-center bg-[#523940] dark:bg-[#E75480] border border-[#523940] dark:border-[#E75480] text-white font-semibold text-sm hover:bg-[#E75480] dark:hover:bg-white dark:hover:text-[#E75480] transition-colors">Sign Up</a>
    </div>
  </div>
</nav>
`;

  /* CSS STYLES INJECTION */
  const style = document.createElement('style');
  style.textContent = `
    .nav-link { position: relative; transition: all 0.3s ease; }
    .nav-link::after {
      content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px;
      background-color: #523940; transition: width 0.3s ease;
    }
    .dark .nav-link::after { background-color: #E75480; }
    
    html:not([dir="rtl"]) .nav-link::after { left: 0; right: auto; }
    html[dir="rtl"] .nav-link::after { left: auto; right: 0; }
    
    .nav-link:hover::after, .nav-link.active::after { width: 100%; }
    .nav-link:hover, .nav-link.active { color: #E75480 !important; }
    
    .dropdown-link.active { color: #E75480 !important; font-weight: 600; }
    .mobile-link.active, .mobile-sublink.active, #mobileHomeBtn.active { color: #E75480 !important; font-weight: 600; }
    
    /* Mobile Drawer Classes */
    html:not([dir="rtl"]) .drawer-open { transform: translateX(0) !important; }
    html[dir="rtl"] .drawer-open { transform: translateX(0) !important; }
    .backdrop-open { display: block !important; opacity: 1 !important; }
    body.menu-open { overflow: hidden !important; }
  `;
  document.head.appendChild(style);

  /* INTERACTION & HIGHLIGHT LOGIC */
  const mobileBtn = document.getElementById("mobileBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileBackdrop = document.getElementById("mobileBackdrop");
  const mobileIcon = document.getElementById("mobileIcon");
  
  // Highlighting Logic
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const allNavLinks = document.querySelectorAll('.nav-link, .mobile-link, .dropdown-link, .mobile-sublink');

  allNavLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');

      const menu = document.getElementById("homeMenu");
      const btn = document.getElementById("homeBtn");
      if (menu && menu.contains(link)) {
        btn?.classList.add('active');
      }

      const mobileMenuEl = document.getElementById("mobileHomeMenu");
      const mobileBtnEl = document.getElementById("mobileHomeBtn");
      const mobileIconEl = document.getElementById("mobileHomeIcon");
      
      if (mobileMenuEl && mobileMenuEl.contains(link)) {
        mobileBtnEl?.classList.add('active');
        mobileMenuEl.classList.remove('hidden');
        mobileMenuEl.style.display = 'flex';
        if (mobileIconEl) mobileIconEl.style.transform = "rotate(180deg)";
      }
    }
  });

  // Mobile Accordion
  document.getElementById("mobileHomeBtn")?.addEventListener("click", () => {
    const menuEl = document.getElementById("mobileHomeMenu");
    const iconEl = document.getElementById("mobileHomeIcon");
    const isHidden = menuEl.classList.contains("hidden");
    
    if (isHidden) {
      menuEl.classList.remove("hidden");
      menuEl.style.display = 'flex';
      iconEl.style.transform = "rotate(180deg)";
    } else {
      menuEl.classList.add("hidden");
      menuEl.style.display = 'none';
      iconEl.style.transform = "rotate(0deg)";
    }
  });

  // Mobile Drawer Toggle
  const toggleMobileMenu = () => {
    const isOpen = mobileMenu.classList.contains("drawer-open");
    if (isOpen) {
      mobileMenu.classList.remove("drawer-open");
      mobileBackdrop.classList.remove("backdrop-open");
      document.body.classList.remove("menu-open");
      mobileIcon.className = "fa-solid fa-bars-staggered text-2xl text-black dark:text-white";
      setTimeout(() => mobileBackdrop.classList.add("hidden"), 300);
    } else {
      mobileBackdrop.classList.remove("hidden");
      setTimeout(() => {
        mobileMenu.classList.add("drawer-open");
        mobileBackdrop.classList.add("backdrop-open");
        document.body.classList.add("menu-open");
        mobileIcon.className = "fa-solid fa-xmark text-2xl text-[#E75480]";
      }, 10);
    }
  };

  mobileBtn.onclick = toggleMobileMenu;
  mobileBackdrop.onclick = toggleMobileMenu;

  /* ==================== */
  /* THEME TOGGLE LOGIC   */
  /* ==================== */
  const applyTheme = (dark) => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('sweetstudio-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('sweetstudio-theme', 'light');
    }

    const icon = dark
      ? '<i class="fa-solid fa-sun text-base"></i>'
      : '<i class="fa-solid fa-moon text-base"></i>';
    document.querySelectorAll('#themeToggle, #mobileThemeToggle').forEach((el) => {
      el.innerHTML = icon;
    });
  };

  document.addEventListener('click', (e) => {
    if (e.target.closest('#themeToggle, #mobileThemeToggle')) {
      applyTheme(!document.documentElement.classList.contains('dark'));
    }
  });

  /* ==================== */
  /* RTL TOGGLE LOGIC     */
  /* ==================== */
  const applyDir = (rtl) => {
    if (rtl) {
      document.documentElement.setAttribute('dir', 'rtl');
      localStorage.setItem('sweetstudio-dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      localStorage.setItem('sweetstudio-dir', 'ltr');
    }

    // Smoothly flip mobile drawer position without breaking layout
    const menu = document.getElementById('mobileMenu');
    if (menu) {
      menu.classList.remove('right-0', 'left-0', '-translate-x-full', 'translate-x-full');
      if (rtl) {
        menu.classList.add('left-0', '-translate-x-full');
      } else {
        menu.classList.add('right-0', 'translate-x-full');
      }
    }

    const label = rtl ? 'LTR' : 'RTL';
    const rtlEl = document.getElementById('rtlToggle');
    if (rtlEl) rtlEl.innerHTML = `<span class="text-xs font-bold">${label}</span>`;
    const mobileLabel = document.getElementById('mobileRtlLabel');
    if (mobileLabel) mobileLabel.textContent = label;
  };

  document.addEventListener('click', (e) => {
    if (e.target.closest('#rtlToggle, #mobileRtlToggle')) {
      applyDir(document.documentElement.getAttribute('dir') !== 'rtl');
    }
  });
});