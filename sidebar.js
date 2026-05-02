// Sidebar HTML injected into every page
function renderSidebar() {
  const html = `
  <aside class="sidebar">
    <div class="sidebar-brand">
      <a class="brand-logo" href="index.html">
        <div class="brand-icon">💊</div>
        <div>
          <div class="brand-text">PharmaPos</div>
          <div class="brand-sub">Management System</div>
        </div>
      </a>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-section-label">Main</div>
      <a href="index.html" class="nav-item">
        <span class="nav-icon">📊</span> Dashboard
      </a>
      <a href="pos.html" class="nav-item">
        <span class="nav-icon">🛒</span> POS / Billing
      </a>
      <div class="nav-section-label">Management</div>
      <a href="inventory.html" class="nav-item">
        <span class="nav-icon">📦</span> Inventory
      </a>
      <a href="sales.html" class="nav-item">
        <span class="nav-icon">🧾</span> Sales History
      </a>
      <a href="approvals.html" class="nav-item" id="navApprovals">
        <span class="nav-icon">📋</span> Approvals
        <span class="nav-badge" id="pendingBadge"></span>
      </a>
    </nav>
    <div class="sidebar-footer">
      <div class="sidebar-user">
        <div class="user-avatar">AK</div>
        <div>
          <div class="user-name">Admin Khalid</div>
          <div class="user-role">Pharmacist</div>
        </div>
      </div>
    </div>
  </aside>`;
  document.body.insertAdjacentHTML('afterbegin', html);

  // update pending badge
  const approvals = DB.get('approvals') || [];
  const pending = approvals.filter(a => a.status === 'Pending').length;
  const badge = document.getElementById('pendingBadge');
  if (badge && pending > 0) badge.textContent = pending;
}
