// Filter State
let selectedCategory = "All";
let selectedLetter = "All";
let searchQuery = "";

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  renderSolutions();
  renderFilters();
  renderBrands();
  setupForms();
  setupMobileMenu();
  lucide.createIcons();
});

// 1. Render 9 Solutions Cards
function renderSolutions() {
  const grid = document.getElementById("solutionsGrid");
  grid.innerHTML = SOLUTIONS_DATA.map((item, idx) => `
    <div onclick="openSolutionDetail(${idx})" class="group cursor-pointer bg-white border border-slate-200 hover:border-blue-500 rounded-2xl p-6 transition shadow-sm hover:shadow-xl flex flex-col justify-between">
      <div>
        <div class="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center mb-5 transition">
          <i data-lucide="${item.icon}" class="w-6 h-6"></i>
        </div>
        <h3 class="font-display text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">${item.title}</h3>
        <p class="text-slate-600 text-sm mt-2 leading-relaxed">${item.short}</p>
      </div>
      <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
        <span>View Specifications</span>
        <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition"></i>
      </div>
    </div>
  `).join("");
}

// 2. Open Solution Detail Modal
function openSolutionDetail(index) {
  const item = SOLUTIONS_DATA[index];
  const container = document.getElementById("solutionModalContent");
  container.innerHTML = `
    <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
      <i data-lucide="${item.icon}" class="w-6 h-6"></i>
    </div>
    <h3 class="font-display text-2xl font-bold text-slate-900">${item.title}</h3>
    <p class="text-slate-600 text-sm mt-2 leading-relaxed">${item.details}</p>
    <div class="mt-5 bg-slate-50 border border-slate-200 rounded-xl p-4">
      <div class="text-xs font-mono uppercase font-bold text-slate-500 mb-2.5">Key Deliverables</div>
      <ul class="space-y-2 text-sm text-slate-800">
        ${item.deliverables.map(d => `
          <li class="flex items-start gap-2">
            <i data-lucide="check" class="w-4 h-4 text-blue-600 shrink-0 mt-0.5"></i>
            <span>${d}</span>
          </li>
        `).join("")}
      </ul>
    </div>
    <button onclick="closeModal('solutionModal'); openQuoteModal('${item.title} Inquiry')" class="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition">
      Request Quote for ${item.title}
    </button>
  `;
  openModal("solutionModal");
  lucide.createIcons();
}

// 3. Render Category & Alphabet Filters
function renderFilters() {
  const categories = ["All", "Servers & Storage", "Networking", "Cybersecurity", "Computing & AV"];
  const catContainer = document.getElementById("categoryFilters");

  catContainer.innerHTML = categories.map(cat => `
    <button onclick="setCategory('${cat}')" class="px-4 py-1.5 rounded-full text-xs font-semibold transition ${
      selectedCategory === cat
        ? "bg-[#0B132B] text-white"
        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
    }">
      ${cat}
    </button>
  `).join("");

  const letters = ["All", "#", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];
  const letterContainer = document.getElementById("letterFilters");

  letterContainer.innerHTML = letters.map(letter => `
    <button onclick="setLetter('${letter}')" class="px-2.5 py-1 rounded-md text-xs font-mono font-medium transition ${
      selectedLetter === letter
        ? "bg-blue-600 text-white"
        : "bg-slate-50 text-slate-600 hover:bg-slate-200 border border-slate-200"
    }">
      ${letter}
    </button>
  `).join("");
}

function setCategory(cat) {
  selectedCategory = cat;
  renderFilters();
  renderBrands();
}

function setLetter(letter) {
  selectedLetter = letter;
  renderFilters();
  renderBrands();
}

// 4. Render Filtered Brands Grid
function renderBrands() {
  const grid = document.getElementById("brandsGrid");
  const emptyMsg = document.getElementById("noBrandsMsg");

  const filtered = BRANDS_DATA.filter(brand => {
    const matchesCat = selectedCategory === "All" || brand.category === selectedCategory;
    const matchesQuery = brand.name.toLowerCase().includes(searchQuery.toLowerCase());
    const firstChar = brand.name.charAt(0).toUpperCase();
    const matchesLetter =
      selectedLetter === "All" ||
      (selectedLetter === "#" ? /[0-9]/.test(firstChar) : firstChar === selectedLetter);

    return matchesCat && matchesQuery && matchesLetter;
  });

  if (filtered.length === 0) {
    grid.innerHTML = "";
    emptyMsg.classList.remove("hidden");
    return;
  }

  emptyMsg.classList.add("hidden");
  grid.innerHTML = filtered.map(brand => `
    <button onclick="openQuoteModal('Brand Quote: ${brand.name.replace(/'/g, "\\'")}')" class="group text-left bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-400 rounded-xl p-3.5 transition flex items-center justify-between gap-2">
      <div>
        <div class="font-semibold text-sm text-slate-900 group-hover:text-blue-700">${brand.name}</div>
        <div class="text-[11px] text-slate-400 font-mono mt-0.5">${brand.category}</div>
      </div>
      <i data-lucide="plus-circle" class="w-4 h-4 text-slate-300 group-hover:text-blue-600 shrink-0"></i>
    </button>
  `).join("");

  lucide.createIcons();
}

// Search Input Listener
document.getElementById("brandSearch").addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderBrands();
});

// 5. Modal & Toast Helpers
function openQuoteModal(subject) {
  document.getElementById("quoteSubjectInput").value = subject;
  openModal("quoteModal");
}

function openModal(id) {
  document.getElementById(id).classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  document.getElementById(id).classList.add("hidden");
  document.body.style.overflow = "";
}

function showToast(message) {
  const toast = document.getElementById("toast");
  document.getElementById("toastMessage").textContent = message;
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 4200);
}

// 6. Form Submissions
function setupForms() {
  document.getElementById("heroQuoteForm").addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.reset();
    showToast("Quote request sent! Our Newcastle sales desk will respond shortly.");
  });

  document.getElementById("modalQuoteForm").addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.reset();
    closeModal("quoteModal");
    showToast("Hardware/SLA quote request submitted successfully!");
  });

  document.getElementById("b2bRegisterForm").addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.reset();
    closeModal("registerModal");
    showToast("B2B customer account application received!");
  });
}

// 7. Mobile Menu Toggle
function setupMobileMenu() {
  const btn = document.getElementById("mobileMenuBtn");
  const menu = document.getElementById("mobileMenu");
  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}