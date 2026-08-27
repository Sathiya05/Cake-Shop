// SweetStudio - Footer
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="w-full transition-colors duration-500 bg-slate-50 dark:bg-[#110A0C] border-t border-gray-200 dark:border-gray-800">
  
  <div class="max-w-[1440px] mx-auto px-6 lg:px-10 py-16 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-12 md:text-center lg:text-left">

    <!-- Brand & Bio Section -->
    <div class="md:col-span-2 lg:col-span-4 pr-0 lg:pr-8 flex flex-col md:items-center lg:items-start">
    
        <a href="index.html" class="relative z-[60] flex items-center gap-3 group shrink-0 justify-center lg:justify-start">
            <div class="flex flex-col">
                <span class="text-2xl md:text-3xl font-serif font-black tracking-tight text-[#E75480] transition-colors">
                    Sweet<span class="text-[#523940] dark:text-white">Studio</span>
                </span>
                <span class="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 font-bold leading-none mt-1">
                     Custom Desserts
                </span>
            </div>
        </a>
        <br>
      <p class="text-sm font-medium text-slate-600 dark:text-gray-400 leading-relaxed mb-6 max-w-md">
        We blend artistic vision with culinary excellence to create custom cakes and delicate pastries. Experience unforgettable dessert tables designed exclusively for your most cherished celebrations.
      </p>
      
      <!-- Social Media Icons -->
      <div class="mt-4 flex gap-3 md:justify-center lg:justify-start w-full">
        <a href="#" target="_blank" class="social-icon w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-[#1A1114] border border-gray-200 dark:border-gray-800 text-[#523940] dark:text-gray-300 transition-all duration-300 hover:bg-[#E75480] hover:border-[#E75480] hover:text-white dark:hover:bg-[#E75480] dark:hover:text-white dark:hover:border-[#E75480] shadow-sm">
          <i class="fa-brands fa-facebook-f text-lg"></i>
        </a>
        <a href="#" target="_blank" class="social-icon w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-[#1A1114] border border-gray-200 dark:border-gray-800 text-[#523940] dark:text-gray-300 transition-all duration-300 hover:bg-[#E75480] hover:border-[#E75480] hover:text-white dark:hover:bg-[#E75480] dark:hover:text-white dark:hover:border-[#E75480] shadow-sm">
          <i class="fa-brands fa-instagram text-lg"></i>
        </a>
        <a href="tel:+1234567890" class="social-icon w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-[#1A1114] border border-gray-200 dark:border-gray-800 text-[#523940] dark:text-gray-300 transition-all duration-300 hover:bg-[#E75480] hover:border-[#E75480] hover:text-white dark:hover:bg-[#E75480] dark:hover:text-white dark:hover:border-[#E75480] shadow-sm">
          <i class="fa-brands fa-pinterest-p text-lg"></i>
        </a>
      </div>
    </div>

    <!-- Navigation Links -->
    <div class="md:col-span-1 lg:col-span-2">
      <h3 class="text-sm font-bold mb-6 uppercase tracking-widest text-[#523940] dark:text-white border-b-2 inline-block pb-2 border-[#E75480]">Navigation</h3>
      <ul class="space-y-3 text-sm font-semibold flex flex-col md:items-center lg:items-start">
        <li><a href="about.html" class="footer-link block text-slate-600 dark:text-gray-400 transition-all duration-300">About Us</a></li>
        <li><a href="menu.html" class="footer-link block text-slate-600 dark:text-gray-400 transition-all duration-300">Menu</a></li>
        <li><a href="flavors.html" class="footer-link block text-slate-600 dark:text-gray-400 transition-all duration-300">Flavors & Fillings</a></li>
        <li><a href="contact.html" class="footer-link block text-slate-600 dark:text-gray-400 transition-all duration-300">Contact</a></li>
      </ul>
    </div>

    <!-- Services Links -->
    <div class="md:col-span-1 lg:col-span-2">
      <h3 class="text-sm font-bold mb-6 uppercase tracking-widest text-[#523940] dark:text-white border-b-2 inline-block pb-2 border-[#E75480]">Collections</h3>
      <ul class="space-y-3 text-sm font-semibold flex flex-col md:items-center lg:items-start">
        <li><a href="custom-orders.html" class="footer-link block text-slate-600 dark:text-gray-400 transition-all duration-300">Custom Orders</a></li>
        <li><a href="menu.html" class="footer-link block text-slate-600 dark:text-gray-400 transition-all duration-300">Wedding Cakes</a></li>
        <li><a href="menu.html" class="footer-link block text-slate-600 dark:text-gray-400 transition-all duration-300">Dessert Tables</a></li>
        <li><a href="pricing.html" class="footer-link block text-slate-600 dark:text-gray-400 transition-all duration-300">Pricing Guide</a></li>
      </ul>
    </div>

    <!-- Newsletter Section -->
    <div class="md:col-span-2 lg:col-span-4 flex flex-col md:items-center lg:items-start">
      <h3 class="text-sm font-bold mb-6 uppercase tracking-widest text-[#523940] dark:text-white border-b-2 inline-block pb-2 border-[#E75480]">Sweet Updates</h3>
      <p class="text-sm font-medium text-slate-600 dark:text-gray-400 mb-5 leading-relaxed max-w-sm md:mx-auto lg:mx-0">
        Subscribe to receive updates on seasonal menus, exclusive tasting events, and studio news directly to your inbox.
      </p>

      <form class="flex flex-col gap-3 w-full max-w-sm" id="newsletterForm">
        <div class="relative w-full">
          <input type="email" required placeholder="Enter your email address..." class="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-[#1A1114] text-slate-900 dark:text-white border border-gray-200 dark:border-gray-800 focus:outline-none focus:border-[#E75480] dark:focus:border-[#E75480] transition-all font-medium text-sm shadow-sm text-center lg:text-left">
        </div>
        <button type="submit" class="w-full py-3.5 rounded-xl font-bold text-sm bg-[#E75480] text-white transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg shadow-black/5 dark:shadow-[#E75480]/10 flex items-center justify-center gap-2">
          <span>Join the List</span>
          <i class="fa-solid fa-paper-plane text-xs"></i>
        </button>
      </form>
    </div>
  </div>

  <!-- Bottom Copyright Bar -->
  <div class="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1A1114] transition-colors duration-500">
    <div class="max-w-[1440px] mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row gap-4 justify-between items-center text-[10px] uppercase tracking-[0.15em] font-bold text-slate-500 dark:text-gray-500 text-center md:text-left">
      
      <p>© ${new Date().getFullYear()} SweetStudio Custom Desserts. All rights reserved.</p>

      <div class="flex gap-6 justify-center">
        <a href="privacy.html" class="hover:text-[#E75480] dark:hover:text-[#E75480] transition-colors duration-300">Privacy Policy</a>
        <a href="terms.html" class="hover:text-[#E75480] dark:hover:text-[#E75480] transition-colors duration-300">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
`;

  /* ===============================
     INJECT STYLES
  =============================== */
  const footerStyles = document.createElement('style');
  footerStyles.textContent = `
    .footer-link:hover {
      color: #E75480 !important; /* Signature Pink */
      transform: translateX(6px);
    }
    
    .dark .footer-link:hover {
      color: #E75480 !important; 
    }

    [dir="rtl"] .footer-link:hover {
      transform: translateX(-6px);
    }

    #newsletterForm input::placeholder {
      color: #94a3b8;
    }
    
    .dark #newsletterForm input::placeholder {
      color: #6b7280;
    }
  `;
  document.head.appendChild(footerStyles);

  // Form Logic
  const form = document.getElementById('newsletterForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Success! You are now on the Sweet List. Keep an eye on your inbox for our latest seasonal menus.');
      form.reset();
    });
  }
});