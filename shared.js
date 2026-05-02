// ── PHARMACY DATA STORE ──
const DB = {
  get(key) {
    try { return JSON.parse(localStorage.getItem('pharma_' + key)) || null; }
    catch { return null; }
  },
  set(key, val) {
    localStorage.setItem('pharma_' + key, JSON.stringify(val));
  }
};

// ── SEED DEFAULT DATA ──
function seedData() {
  if (!DB.get('seeded')) {
    DB.set('medicines', [
      { id: 'm1', name: 'Paracetamol 500mg', category: 'Analgesic', price: 25, stock: 150, minStock: 30, expiry: '2026-08-01', supplier: 'MedPharma', unit: 'Tablet' },
      { id: 'm2', name: 'Amoxicillin 250mg', category: 'Antibiotic', price: 85, stock: 80, minStock: 20, expiry: '2026-04-15', supplier: 'BioMed', unit: 'Capsule' },
      { id: 'm3', name: 'Omeprazole 20mg', category: 'Antacid', price: 45, stock: 10, minStock: 25, expiry: '2025-12-31', supplier: 'GenPharma', unit: 'Capsule' },
      { id: 'm4', name: 'Metformin 500mg', category: 'Antidiabetic', price: 35, stock: 200, minStock: 40, expiry: '2027-01-10', supplier: 'MedPharma', unit: 'Tablet' },
      { id: 'm5', name: 'Atorvastatin 10mg', category: 'Statin', price: 120, stock: 60, minStock: 20, expiry: '2026-09-30', supplier: 'BioMed', unit: 'Tablet' },
      { id: 'm6', name: 'Azithromycin 500mg', category: 'Antibiotic', price: 150, stock: 8, minStock: 15, expiry: '2025-11-20', supplier: 'GenPharma', unit: 'Tablet' },
      { id: 'm7', name: 'Ibuprofen 400mg', category: 'NSAID', price: 30, stock: 120, minStock: 30, expiry: '2027-03-15', supplier: 'MedPharma', unit: 'Tablet' },
      { id: 'm8', name: 'Cetirizine 10mg', category: 'Antihistamine', price: 20, stock: 95, minStock: 25, expiry: '2026-06-01', supplier: 'AllerMed', unit: 'Tablet' },
      { id: 'm9', name: 'Cough Syrup 100ml', category: 'Cough & Cold', price: 75, stock: 40, minStock: 15, expiry: '2025-10-01', supplier: 'GenPharma', unit: 'Bottle' },
      { id: 'm10', name: 'Vitamin C 1000mg', category: 'Supplement', price: 55, stock: 180, minStock: 30, expiry: '2027-05-20', supplier: 'NutriLab', unit: 'Tablet' },
      { id: 'm11', name: 'Insulin Glargine', category: 'Antidiabetic', price: 850, stock: 25, minStock: 10, expiry: '2026-02-28', supplier: 'BioMed', unit: 'Vial' },
      { id: 'm12', name: 'Salbutamol Inhaler', category: 'Bronchodilator', price: 320, stock: 18, minStock: 8, expiry: '2026-07-15', supplier: 'RespiMed', unit: 'Piece' },
    ]);

    DB.set('sales', [
      { id: 's1', invoiceNo: 'INV-1001', customer: 'Ahmed Khan', items: [{name:'Paracetamol 500mg',qty:2,price:25},{name:'Vitamin C 1000mg',qty:1,price:55}], total: 105, discount: 0, date: '2026-04-28', time: '10:15 AM', payMethod: 'Cash' },
      { id: 's2', invoiceNo: 'INV-1002', customer: 'Sara Ali', items: [{name:'Amoxicillin 250mg',qty:1,price:85},{name:'Cetirizine 10mg',qty:2,price:20}], total: 125, discount: 5, date: '2026-04-29', time: '11:30 AM', payMethod: 'Card' },
      { id: 's3', invoiceNo: 'INV-1003', customer: 'Walk-in', items: [{name:'Ibuprofen 400mg',qty:3,price:30}], total: 90, discount: 0, date: '2026-04-30', time: '02:45 PM', payMethod: 'Cash' },
      { id: 's4', invoiceNo: 'INV-1004', customer: 'Dr. Hassan Ref.', items: [{name:'Metformin 500mg',qty:2,price:35},{name:'Atorvastatin 10mg',qty:1,price:120}], total: 190, discount: 10, date: '2026-05-01', time: '09:00 AM', payMethod: 'Card' },
      { id: 's5', invoiceNo: 'INV-1005', customer: 'Fatima Noor', items: [{name:'Cough Syrup 100ml',qty:1,price:75},{name:'Paracetamol 500mg',qty:3,price:25}], total: 150, discount: 0, date: '2026-05-01', time: '03:20 PM', payMethod: 'Cash' },
      { id: 's6', invoiceNo: 'INV-1006', customer: 'Usman Tariq', items: [{name:'Insulin Glargine',qty:1,price:850}], total: 850, discount: 50, date: '2026-05-02', time: '08:40 AM', payMethod: 'Card' },
    ]);

    DB.set('approvals', [
      { id: 'a1', patient: 'Bilal Rao', doctor: 'Dr. Asif Mahmood', medicine: 'Tramadol 50mg', qty: 20, date: '2026-05-01', priority: 'High', status: 'Pending', note: 'Post-surgery pain management' },
      { id: 'a2', patient: 'Zara Sheikh', doctor: 'Dr. Nida Hayat', medicine: 'Clonazepam 0.5mg', qty: 30, date: '2026-05-01', priority: 'Normal', status: 'Pending', note: 'Anxiety disorder - controlled substance' },
      { id: 'a3', patient: 'Kamran Javed', doctor: 'Dr. Asif Mahmood', medicine: 'Morphine Sulphate', qty: 10, date: '2026-04-30', priority: 'High', status: 'Approved', note: 'Palliative care patient' },
      { id: 'a4', patient: 'Ayesha Malik', doctor: 'Dr. Raza Mir', medicine: 'Codeine Phosphate', qty: 15, date: '2026-04-30', priority: 'Normal', status: 'Rejected', note: 'Awaiting alternative prescription' },
      { id: 'a5', patient: 'Hamid Farooq', doctor: 'Dr. Nida Hayat', medicine: 'Diazepam 5mg', qty: 14, date: '2026-05-02', priority: 'Normal', status: 'Pending', note: 'Muscle spasm treatment' },
    ]);

    DB.set('seeded', true);
  }
}

// ── UTILITIES ──
function formatCurrency(n) {
  return 'Rs. ' + Number(n).toLocaleString('en-PK');
}

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-PK', { day: '2-digit', month: 'short', year: 'numeric' });
}

function genId(prefix) {
  return prefix + Date.now().toString(36);
}

function showToast(msg, type = 'success') {
  const icons = { success: '✓', error: '✕', warn: '⚠' };
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<span>${icons[type]}</span><span>${msg}</span>`;
  container.appendChild(t);
  setTimeout(() => {
    t.style.animation = 'fadeOut 0.4s forwards';
    setTimeout(() => t.remove(), 400);
  }, 3000);
}

function openModal(id) {
  document.getElementById(id).classList.add('open');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

// ── TOPBAR DATE ──
function setTopbarDate() {
  const el = document.getElementById('topbarDate');
  if (el) {
    el.textContent = new Date().toLocaleDateString('en-PK', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' });
  }
}

// ── ACTIVE NAV ──
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-item').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  seedData();
  setTopbarDate();
  setActiveNav();
});
