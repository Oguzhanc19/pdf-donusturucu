/**
 * PDF Dönüştürücü — Mobil PWA
 * ============================
 * Fotoğraf ve belgelerinizi tek tıkla PDF'e dönüştürür.
 */

// ─── State ───────────────────────────────────────────────────
const state = {
  photos: [],      // { file, preview }
  docs: [],        // { file, preview }
  activeTab: 'photos',
  pdfBlob: null,
  pdfName: '',
};

// ─── DOM Elements ────────────────────────────────────────────
const $ = id => document.getElementById(id);

const els = {
  // Tabs
  tabPhotos:    $('tabPhotos'),
  tabDocs:      $('tabDocs'),
  panelPhotos:  $('panelPhotos'),
  panelDocs:    $('panelDocs'),
  photoCount:   $('photoCount'),
  docCount:     $('docCount'),

  // Upload
  uploadPhotos: $('uploadPhotos'),
  uploadDocs:   $('uploadDocs'),
  inputPhotos:  $('inputPhotos'),
  inputDocs:    $('inputDocs'),

  // Preview
  photoPreviewSection: $('photoPreviewSection'),
  docPreviewSection:   $('docPreviewSection'),
  photoPreviewTitle:   $('photoPreviewTitle'),
  docPreviewTitle:     $('docPreviewTitle'),
  photoGrid:    $('photoGrid'),
  docGrid:      $('docGrid'),
  clearPhotos:  $('clearPhotos'),
  clearDocs:    $('clearDocs'),

  // Action
  createPdfBtn: $('createPdfBtn'),
  btnText:      $('btnText'),

  // Progress
  progressOverlay: $('progressOverlay'),
  progressText:    $('progressText'),
  progressSub:     $('progressSub'),
  progressBar:     $('progressBar'),

  // Success
  successOverlay:  $('successOverlay'),
  successInfo:     $('successInfo'),
  downloadBtn:     $('downloadBtn'),
  closeSuccess:    $('closeSuccess'),

  // Toast
  toast: $('toast'),

  // Install
  installBanner:  $('installBanner'),
  installBtn:     $('installBtn'),
  installDismiss: $('installDismiss'),
};

// ─── Image helpers ───────────────────────────────────────────
const IMAGE_TYPES = new Set([
  'image/jpeg', 'image/png', 'image/bmp', 'image/gif',
  'image/tiff', 'image/webp', 'image/avif'
]);

function isImage(file) {
  return IMAGE_TYPES.has(file.type) || /\.(jpe?g|png|bmp|gif|tiff?|webp|avif)$/i.test(file.name);
}

function isText(file) {
  return file.type === 'text/plain' || /\.txt$/i.test(file.name);
}

function isPDF(file) {
  return file.type === 'application/pdf' || /\.pdf$/i.test(file.name);
}

// ─── Tab Switching ───────────────────────────────────────────
function switchTab(tab) {
  state.activeTab = tab;

  // Update tab buttons
  els.tabPhotos.classList.toggle('active', tab === 'photos');
  els.tabDocs.classList.toggle('active', tab === 'docs');

  // Update panels
  els.panelPhotos.classList.toggle('active', tab === 'photos');
  els.panelDocs.classList.toggle('active', tab === 'docs');

  updateButton();
}

els.tabPhotos.addEventListener('click', () => switchTab('photos'));
els.tabDocs.addEventListener('click', () => switchTab('docs'));

// ─── File Upload Handling ────────────────────────────────────
function setupUpload(uploadArea, input, type) {
  // Click to upload
  uploadArea.addEventListener('click', () => input.click());

  // Drag & Drop
  uploadArea.addEventListener('dragover', e => {
    e.preventDefault();
    uploadArea.classList.add('dragover');
  });

  uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('dragover');
  });

  uploadArea.addEventListener('drop', e => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    handleFiles(e.dataTransfer.files, type);
  });

  // File input change
  input.addEventListener('change', () => {
    handleFiles(input.files, type);
    input.value = ''; // Reset for re-selection
  });
}

function handleFiles(fileList, type) {
  const files = Array.from(fileList);

  if (files.length === 0) return;

  const list = type === 'photos' ? state.photos : state.docs;

  files.forEach(file => {
    // Check for duplicates
    if (list.some(item => item.file.name === file.name && item.file.size === file.size)) {
      return;
    }

    const item = { file, preview: null };

    if (isImage(file)) {
      // Generate thumbnail
      const reader = new FileReader();
      reader.onload = e => {
        item.preview = e.target.result;
        updatePreview(type);
      };
      reader.readAsDataURL(file);
    }

    list.push(item);
  });

  updatePreview(type);
  updateButton();
  showToast(`✅ ${files.length} dosya eklendi`);
}

setupUpload(els.uploadPhotos, els.inputPhotos, 'photos');
setupUpload(els.uploadDocs, els.inputDocs, 'docs');

// ─── Preview Grid ────────────────────────────────────────────
function updatePreview(type) {
  const isPhotos = type === 'photos';
  const list = isPhotos ? state.photos : state.docs;
  const grid = isPhotos ? els.photoGrid : els.docGrid;
  const section = isPhotos ? els.photoPreviewSection : els.docPreviewSection;
  const title = isPhotos ? els.photoPreviewTitle : els.docPreviewTitle;
  const count = isPhotos ? els.photoCount : els.docCount;

  // Update count
  count.textContent = list.length;
  title.textContent = `${list.length} ${isPhotos ? 'fotoğraf' : 'belge'} seçildi`;

  // Show/hide section
  section.style.display = list.length > 0 ? 'block' : 'none';

  // Build grid
  grid.innerHTML = '';

  list.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'preview-item';

    if (item.preview) {
      div.innerHTML = `
        <img src="${item.preview}" alt="${item.file.name}" loading="lazy">
        <button class="remove-btn" data-type="${type}" data-index="${index}">✕</button>
        <span class="order-badge">${index + 1}</span>
      `;
    } else {
      const icon = isPDF(item.file) ? '📕' : isText(item.file) ? '📝' : '📎';
      const name = item.file.name.length > 20
        ? item.file.name.substring(0, 17) + '...'
        : item.file.name;

      div.innerHTML = `
        <div class="file-icon">
          <span class="icon">${icon}</span>
          <span class="name">${name}</span>
        </div>
        <button class="remove-btn" data-type="${type}" data-index="${index}">✕</button>
        <span class="order-badge">${index + 1}</span>
      `;
    }

    grid.appendChild(div);
  });

  // Remove button handlers
  grid.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const t = btn.dataset.type;
      const i = parseInt(btn.dataset.index);
      if (t === 'photos') state.photos.splice(i, 1);
      else state.docs.splice(i, 1);
      updatePreview(t);
      updateButton();
    });
  });
}

// Clear buttons
els.clearPhotos.addEventListener('click', () => {
  state.photos = [];
  updatePreview('photos');
  updateButton();
  showToast('🗑 Fotoğraflar temizlendi');
});

els.clearDocs.addEventListener('click', () => {
  state.docs = [];
  updatePreview('docs');
  updateButton();
  showToast('🗑 Belgeler temizlendi');
});

// ─── Button State ────────────────────────────────────────────
function updateButton() {
  const list = state.activeTab === 'photos' ? state.photos : state.docs;
  const hasFiles = list.length > 0;

  els.createPdfBtn.disabled = !hasFiles;

  if (hasFiles) {
    const label = state.activeTab === 'photos' ? 'Fotoğraf' : 'Belge';
    els.btnText.textContent = `${list.length} ${label} → PDF Oluştur`;
  } else {
    els.btnText.textContent = 'Dosya Seçin';
  }
}

// ─── PDF Creation ────────────────────────────────────────────
els.createPdfBtn.addEventListener('click', createPDF);

async function createPDF() {
  const isPhotos = state.activeTab === 'photos';
  const list = isPhotos ? state.photos : state.docs;

  if (list.length === 0) return;

  showProgress(true);
  updateProgress(0, 'Hazırlanıyor...', 'Dosyalar okunuyor');

  try {
    if (!window.jspdf || !window.jspdf.jsPDF) {
      throw new Error('jsPDF kütüphanesi yüklenemedi. Sayfayı yenileyin.');
    }

    const { jsPDF } = window.jspdf;

    // Separate file types
    const imageFiles = list.filter(item => isImage(item.file));
    const textFiles = list.filter(item => isText(item.file));
    const pdfFiles = list.filter(item => isPDF(item.file));
    const totalSteps = imageFiles.length + textFiles.length;

    if (totalSteps === 0 && pdfFiles.length === 0) {
      showProgress(false);
      showToast('⚠ Dönüştürülecek dosya bulunamadı', true);
      return;
    }

    // Handle PDF files separately (download as-is or merge)
    if (pdfFiles.length > 0 && imageFiles.length === 0 && textFiles.length === 0) {
      // Only PDFs selected — just download first one
      const blob = pdfFiles[0].file;
      savePDF(blob, `${isPhotos ? 'Fotograflar' : 'Belgeler'}.pdf`);
      return;
    }

    let doc = null;
    let currentStep = 0;

    // Process images
    for (let i = 0; i < imageFiles.length; i++) {
      currentStep++;
      updateProgress(
        (currentStep / totalSteps) * 100,
        `İşleniyor... (${currentStep}/${totalSteps})`,
        imageFiles[i].file.name
      );

      const imgData = await readFileAsDataURL(imageFiles[i].file);
      const imgDims = await getImageDimensions(imgData);

      // Calculate page size to fit image (A4 proportions max)
      const maxWidth = 210;  // A4 width in mm
      const maxHeight = 297; // A4 height in mm

      let pageWidth, pageHeight;
      const imgRatio = imgDims.width / imgDims.height;

      if (imgRatio > maxWidth / maxHeight) {
        // Wider than A4
        pageWidth = maxWidth;
        pageHeight = maxWidth / imgRatio;
      } else {
        // Taller than A4
        pageHeight = maxHeight;
        pageWidth = maxHeight * imgRatio;
      }

      if (!doc) {
        doc = new jsPDF({
          orientation: pageWidth > pageHeight ? 'landscape' : 'portrait',
          unit: 'mm',
          format: [pageWidth, pageHeight],
          compress: true
        });
      } else {
        doc.addPage([pageWidth, pageHeight], pageWidth > pageHeight ? 'landscape' : 'portrait');
      }

      doc.addImage(imgData, 'JPEG', 0, 0, pageWidth, pageHeight, undefined, 'MEDIUM');

      // Allow UI to update
      await sleep(50);
    }

    // Process text files
    for (let i = 0; i < textFiles.length; i++) {
      currentStep++;
      updateProgress(
        (currentStep / totalSteps) * 100,
        `İşleniyor... (${currentStep}/${totalSteps})`,
        textFiles[i].file.name
      );

      const text = await readFileAsText(textFiles[i].file);

      if (!doc) {
        doc = new jsPDF({ unit: 'mm', format: 'a4', compress: true });
      } else {
        doc.addPage('a4', 'portrait');
      }

      // Add text with word wrap
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);

      const pageWidth = doc.internal.pageSize.getWidth();
      const margin = 15;
      const maxLineWidth = pageWidth - margin * 2;
      const lineHeight = 6;
      let y = margin;

      const lines = doc.splitTextToSize(text, maxLineWidth);

      for (const line of lines) {
        if (y + lineHeight > doc.internal.pageSize.getHeight() - margin) {
          doc.addPage('a4', 'portrait');
          y = margin;
        }
        doc.text(line, margin, y);
        y += lineHeight;
      }

      await sleep(50);
    }

    if (doc) {
      updateProgress(95, 'PDF kaydediliyor...', 'Neredeyse bitti');
      await sleep(200);

      const pdfBlob = doc.output('blob');
      const name = `${isPhotos ? 'Fotograflar' : 'Belgeler'}.pdf`;
      savePDF(pdfBlob, name);
    }

  } catch (error) {
    console.error('PDF creation error:', error);
    showProgress(false);
    showToast('❌ PDF oluşturulurken hata: ' + error.message, true);
  }
}

function savePDF(blob, name) {
  state.pdfBlob = blob;
  state.pdfName = name;

  const sizeMB = (blob.size / (1024 * 1024)).toFixed(1);
  els.successInfo.textContent = `${name} (${sizeMB} MB) başarıyla oluşturuldu.`;

  showProgress(false);
  showSuccess(true);
}

// ─── Download ────────────────────────────────────────────────
els.downloadBtn.addEventListener('click', () => {
  if (!state.pdfBlob) return;

  const url = URL.createObjectURL(state.pdfBlob);
  const a = document.createElement('a');
  a.href = url;
  a.download = state.pdfName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast('📥 PDF indiriliyor...');
});

els.closeSuccess.addEventListener('click', () => {
  showSuccess(false);
});

// ─── Helpers ─────────────────────────────────────────────────
function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result);
    reader.onerror = reject;
    reader.readAsText(file, 'UTF-8');
  });
}

function getImageDimensions(dataUrl) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.width, height: img.height });
    img.onerror = reject;
    img.src = dataUrl;
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ─── UI Updates ──────────────────────────────────────────────
function showProgress(visible) {
  els.progressOverlay.classList.toggle('active', visible);
}

function updateProgress(percent, text, sub) {
  els.progressBar.style.width = percent + '%';
  if (text) els.progressText.textContent = text;
  if (sub) els.progressSub.textContent = sub;
}

function showSuccess(visible) {
  els.successOverlay.classList.toggle('active', visible);
}

let toastTimeout;
function showToast(message, isError = false) {
  clearTimeout(toastTimeout);
  els.toast.textContent = message;
  els.toast.className = 'toast show' + (isError ? ' error' : '');
  toastTimeout = setTimeout(() => {
    els.toast.classList.remove('show');
  }, 2500);
}

// ─── PWA Install ─────────────────────────────────────────────
let deferredPrompt;

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  els.installBanner.classList.add('show');
});

els.installBtn.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  if (outcome === 'accepted') {
    showToast('🎉 Uygulama yüklendi!');
  }
  deferredPrompt = null;
  els.installBanner.classList.remove('show');
});

els.installDismiss.addEventListener('click', () => {
  els.installBanner.classList.remove('show');
});

// ─── Service Worker Registration ─────────────────────────────
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(reg => console.log('SW registered:', reg.scope))
    .catch(err => console.log('SW registration failed:', err));
}

// ─── Init ────────────────────────────────────────────────────
updateButton();
console.log('📄 PDF Dönüştürücü hazır!');
