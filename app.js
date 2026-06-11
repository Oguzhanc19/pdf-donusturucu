/**
 * Basitleştirici — Tüm Araçlar PWA
 * ==================================
 * PDF, Video, Resim ve Metin işlemlerini tek tıkla yapın.
 */

// ═══════════════════════════════════════════════════════════
// TOOLS REGISTRY
// ═══════════════════════════════════════════════════════════

const TOOLS = {
  // ─── PDF & Dosya İşlemleri ─────────────────────────────
  pdf: {
    name: 'PDF ve Dosya İşlemleri',
    icon: '📄',
    color: 'pdf',
    tools: [
      { id: 'word-to-pdf', name: 'Word → PDF', icon: '📝', desc: 'Word dosyasını PDF\'e dönüştürür' },
      { id: 'img-to-pdf', name: 'PNG/JPG → PDF', icon: '🖼️', desc: 'Resimleri PDF\'e dönüştürür' },
      { id: 'pdf-merge', name: 'PDF Birleştirme', icon: '📎', desc: 'Birden fazla PDF\'i birleştirir' },
      { id: 'pdf-split', name: 'PDF Bölme', icon: '✂️', desc: 'PDF\'i sayfalara ayırır' },
      { id: 'pdf-compress', name: 'PDF Sıkıştırma', icon: '📦', desc: 'PDF dosya boyutunu küçültür' },
      { id: 'pdf-encrypt', name: 'PDF Şifreleme', icon: '🔒', desc: 'PDF\'e şifre koyar' },
      { id: 'pdf-decrypt', name: 'PDF Şifre Kaldırma', icon: '🔓', desc: 'PDF şifresini kaldırır' },
      { id: 'pdf-rotate', name: 'PDF Sayfa Döndürme', icon: '🔄', desc: 'PDF sayfalarını döndürür' },
      { id: 'pdf-delete-pages', name: 'PDF Sayfa Silme', icon: '🗑️', desc: 'PDF\'ten sayfa siler' },
      { id: 'pdf-watermark', name: 'PDF Filigran Ekleme', icon: '💧', desc: 'PDF\'e filigran ekler' },
      { id: 'pdf-ocr', name: 'PDF\'ten Metin Çekme', icon: '🔍', desc: 'PDF\'ten metin çıkarır (OCR)' },
    ]
  },

  // ─── Profesyonel İş & Yapay Zeka ───────────────────────
  professional: {
    name: 'Profesyonel İş & Yapay Zeka',
    icon: '💼',
    color: 'professional',
    tools: [
      { id: 'ai-email', name: 'Yapay Zeka E-posta Asistanı', icon: '🤖', desc: 'Özensiz metinleri profesyonel e-postalara dönüştürür' },
      { id: 'ai-chat', name: 'Yapay Zekaya Sor', icon: '💬', desc: 'İstediğiniz soruyu sorun, yapay zeka anında cevaplasın' },
      { id: 'clipboard-sync', name: 'Geçici Pano & Dosya Paylaşım', icon: '📱', desc: 'Cihazlar arası metin ve dosya aktarımı (10dk TTL)' }
    ]
  },

  // ─── Video İşlemleri ───────────────────────────────────
  video: {
    name: 'Video İşlemleri',
    icon: '🎥',
    color: 'video',
    tools: [
      { id: 'video-download', name: 'URL\'den Video İndirme', icon: '⬇️', desc: 'URL\'den video indir' },
      { id: 'audio-download', name: 'URL\'den Ses İndirme', icon: '🎵', desc: 'URL\'den MP3 olarak ses indir' },
      { id: 'video-convert', name: 'Video Format Dönüştürme', icon: '🔄', desc: 'Video formatını değiştir' },
      { id: 'video-compress', name: 'Video Sıkıştırma', icon: '📦', desc: 'Video boyutunu küçült' },
      { id: 'video-extract-audio', name: 'Videodan Ses Ayırma', icon: '🎧', desc: 'Videodan ses dosyasını çıkar' },
      { id: 'video-screenshot', name: 'Videodan Ekran Görüntüsü', icon: '📸', desc: 'Videodan kare yakala' },
      { id: 'video-merge', name: 'Video Birleştirme', icon: '📎', desc: 'Birden fazla videoyu birleştir' },
      { id: 'video-trim', name: 'Video Kırpma', icon: '✂️', desc: 'Videonun belirli bölümünü kes' },
    ]
  },

  // ─── Resim İşlemleri ───────────────────────────────────
  image: {
    name: 'Resim İşlemleri',
    icon: '🖼️',
    color: 'image',
    tools: [
      { id: 'img-remove-bg', name: 'Arka Plan Kaldırma', icon: '✨', desc: 'Resim arka planını kaldır', quick: true },
      { id: 'img-compress', name: 'Resim Sıkıştırma', icon: '📦', desc: 'Resim boyutunu küçült', quick: true },
      { id: 'img-jpg-png', name: 'JPG ↔ PNG Dönüştürme', icon: '🔄', desc: 'JPG ve PNG arasında dönüştür' },
      { id: 'img-webp-png', name: 'WEBP ↔ PNG Dönüştürme', icon: '🔄', desc: 'WEBP ve PNG arasında dönüştür' },
      { id: 'img-resize', name: 'Resim Yeniden Boyutlandırma', icon: '📐', desc: 'Resmi yeniden boyutlandır' },
      { id: 'img-batch', name: 'Toplu Resim İşleme', icon: '📚', desc: 'Birden fazla resmi toplu işle' },
      { id: 'img-rotate', name: 'Resim Döndürme', icon: '🔄', desc: 'Resmi döndür veya çevir' },
      { id: 'img-watermark', name: 'Filigran Ekleme', icon: '💧', desc: 'Resme filigran ekle' },
      { id: 'qr-generate', name: 'QR Kod Oluşturma', icon: '📱', desc: 'QR kod oluştur', quick: true },
      { id: 'barcode-generate', name: 'Barkod Oluşturma', icon: '📊', desc: 'Barkod oluştur' },
    ]
  },

  // ─── Metin İşlemleri ───────────────────────────────────
  text: {
    name: 'Metin İşlemleri',
    icon: '📝',
    color: 'text',
    tools: [
      { id: 'text-uppercase', name: 'Büyük Harfe Çevir', icon: '🔠', desc: 'Metni büyük harfe çevirir', quick: true },
      { id: 'text-lowercase', name: 'Küçük Harfe Çevir', icon: '🔡', desc: 'Metni küçük harfe çevirir' },
      { id: 'text-word-count', name: 'Kelime Sayacı', icon: '🔢', desc: 'Kelime ve karakter sayar', quick: true },
      { id: 'text-char-count', name: 'Karakter Sayacı', icon: '#️⃣', desc: 'Karakter sayısını gösterir' },
      { id: 'text-clean', name: 'Metin Temizleme', icon: '🧹', desc: 'Fazla boşlukları temizler' },
      { id: 'text-html-clean', name: 'HTML Temizleyici', icon: '🌐', desc: 'HTML etiketlerini temizler' },
      { id: 'text-json-format', name: 'JSON Formatter', icon: '{ }', desc: 'JSON\'u güzel formata çevirir' },
      { id: 'text-xml-format', name: 'XML Formatter', icon: '< >', desc: 'XML\'i güzel formata çevirir' },
      { id: 'text-md-convert', name: 'Markdown Dönüştürücü', icon: '📋', desc: 'Markdown\'ı HTML\'e çevirir' },
    ]
  }
};

// ═══════════════════════════════════════════════════════════
// STATE & DOM
// ═══════════════════════════════════════════════════════════

const appState = {
  currentTool: null,
  currentFiles: [],
  resultBlob: null,
  resultName: '',
  expandedCategories: new Set(['pdf']),
};

const $ = id => document.getElementById(id);

// ═══════════════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  buildHomePage();
  setupSearch();
  setupInstall();
  setupOverlays();
  setupCategoryToggles();
  console.log('⚡ Basitleştirici hazır!');
});

function setupCategoryToggles() {
  document.querySelectorAll('.category-header[data-toggle]').forEach(header => {
    header.addEventListener('click', () => {
      const cat = header.dataset.toggle;
      const section = header.closest('.category-section');
      const isExpanded = section.classList.contains('expanded');

      if (isExpanded) {
        section.classList.remove('expanded');
        appState.expandedCategories.delete(cat);
      } else {
        section.classList.add('expanded');
        appState.expandedCategories.add(cat);
      }
    });
  });
}

function buildHomePage() {
  // Get quick access tools from localStorage
  const savedQuickTools = JSON.parse(localStorage.getItem('quickTools') || '[]');
  
  // Build Quick Actions
  const quickGrid = $('quickGrid');
  const quickTools = [];
  for (const [catKey, cat] of Object.entries(TOOLS)) {
    for (const tool of cat.tools) {
      if (savedQuickTools.includes(tool.id)) {
        quickTools.push({ ...tool, catKey, catColor: cat.color });
      }
    }
  }

  if (quickTools.length === 0) {
    quickGrid.innerHTML = `<div style="grid-column: 1 / -1; color: #94a3b8; font-size: 0.9rem; text-align: center; padding: 1rem; border: 1px dashed #334155; border-radius: 8px;">
      Henüz hızlı erişime araç eklemediniz.<br>Araçların yanındaki <strong>+</strong> butonuna basarak sık kullandıklarınızı buraya ekleyebilirsiniz.
    </div>`;
  } else {
    quickGrid.innerHTML = quickTools.map(t => `
      <div class="quick-item" data-tool-id="${t.id}" data-cat="${t.catKey}">
        <div class="quick-item-icon qi-${t.catColor}">${t.icon}</div>
        <span class="quick-item-label">${t.name}</span>
      </div>
    `).join('');
  }

  // Build Category Sections
  for (const [catKey, cat] of Object.entries(TOOLS)) {
    const container = $(`${catKey}Tools`);
    const countEl = $(`${catKey}ToolCount`);
    countEl.textContent = `${cat.tools.length} araç`;

    container.innerHTML = cat.tools.map(tool => {
      const isQuick = savedQuickTools.includes(tool.id);
      const btnClass = isQuick ? 'quick-toggle-remove' : 'quick-toggle-add';
      const btnText = isQuick ? '−' : '+';
      const btnTitle = isQuick ? 'Hızlı Erişimden Çıkar' : 'Hızlı Erişime Ekle';

      return `
        <div class="tool-card" data-tool-id="${tool.id}" data-cat="${catKey}">
          <div class="tool-card-icon tc-${cat.color}">${tool.icon}</div>
          <div class="tool-card-info">
            <div class="tool-card-name">${tool.name}</div>
            <div class="tool-card-desc">${tool.desc}</div>
          </div>
          <button class="quick-toggle-btn ${btnClass}" data-tool-id="${tool.id}" title="${btnTitle}" aria-label="${btnTitle}">${btnText}</button>
          <span class="tool-card-arrow">›</span>
        </div>
      `;
    }).join('');
  }

  // Expand default categories
  appState.expandedCategories.forEach(cat => {
    const section = document.querySelector(`[data-category="${cat}"]`);
    if (section) section.classList.add('expanded');
  });

  // Setup tool clicks
  document.querySelectorAll('.tool-card').forEach(el => {
    el.addEventListener('click', (e) => {
      // Eğer tıklanan element quick-toggle-btn ise aracı açma
      if (e.target.classList.contains('quick-toggle-btn')) {
        return;
      }
      const toolId = el.dataset.toolId;
      const catKey = el.dataset.cat;
      openTool(catKey, toolId);
    });
  });

  document.querySelectorAll('.quick-item').forEach(el => {
    el.addEventListener('click', () => {
      const toolId = el.dataset.toolId;
      const catKey = el.dataset.cat;
      openTool(catKey, toolId);
    });
  });

  // Setup quick toggle buttons
  document.querySelectorAll('.quick-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const toolId = btn.dataset.toolId;
      let quickTools = JSON.parse(localStorage.getItem('quickTools') || '[]');
      
      if (quickTools.includes(toolId)) {
        if (confirm('Bu aracı hızlı erişimden çıkarmak istiyor musunuz?')) {
          quickTools = quickTools.filter(id => id !== toolId);
          localStorage.setItem('quickTools', JSON.stringify(quickTools));
          buildHomePage(); // Sayfayı yenile
        }
      } else {
        if (confirm('Bu aracı hızlı erişime eklemek istiyor musunuz?')) {
          quickTools.push(toolId);
          localStorage.setItem('quickTools', JSON.stringify(quickTools));
          buildHomePage(); // Sayfayı yenile
        }
      }
    });
  });
}

// ═══════════════════════════════════════════════════════════
// SEARCH
// ═══════════════════════════════════════════════════════════

function setupSearch() {
  const searchInput = $('searchInput');
  const searchClear = $('searchClear');
  const searchResults = $('searchResults');
  const searchResultsGrid = $('searchResultsGrid');
  const searchEmpty = $('searchEmpty');
  const homeCategories = document.querySelectorAll('.category-section, .quick-actions');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    searchClear.style.display = query ? 'flex' : 'none';

    if (!query) {
      searchResults.style.display = 'none';
      homeCategories.forEach(el => el.style.display = '');
      return;
    }

    homeCategories.forEach(el => el.style.display = 'none');
    searchResults.style.display = 'block';

    const results = [];
    for (const [catKey, cat] of Object.entries(TOOLS)) {
      for (const tool of cat.tools) {
        const searchStr = `${tool.name} ${tool.desc}`.toLowerCase();
        if (searchStr.includes(query)) {
          results.push({ ...tool, catKey, catColor: cat.color, catName: cat.name });
        }
      }
    }

    if (results.length > 0) {
      searchEmpty.style.display = 'none';
      searchResultsGrid.innerHTML = results.map(tool => `
        <div class="tool-card" data-tool-id="${tool.id}" data-cat="${tool.catKey}">
          <div class="tool-card-icon tc-${tool.catColor}">${tool.icon}</div>
          <div class="tool-card-info">
            <div class="tool-card-name">${tool.name}</div>
            <div class="tool-card-desc">${tool.desc}</div>
          </div>
          <span class="tool-card-arrow">›</span>
        </div>
      `).join('');

      searchResultsGrid.querySelectorAll('.tool-card').forEach(el => {
        el.addEventListener('click', () => {
          openTool(el.dataset.cat, el.dataset.toolId);
        });
      });
    } else {
      searchEmpty.style.display = 'block';
      searchResultsGrid.innerHTML = '';
    }
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchInput.dispatchEvent(new Event('input'));
    searchInput.focus();
  });
}

// ═══════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════

function openTool(catKey, toolId) {
  const cat = TOOLS[catKey];
  const tool = cat.tools.find(t => t.id === toolId);
  if (!tool) return;

  appState.currentTool = { ...tool, catKey, catColor: cat.color };
  appState.currentFiles = [];

  // Update header
  $('mainHeader').style.display = 'none';
  $('toolHeader').style.display = 'block';
  $('toolHeaderIcon').textContent = tool.icon;
  $('toolHeaderTitle').textContent = tool.name;
  $('toolHeaderDesc').textContent = tool.desc;

  // Hide home, show tool
  $('homeScreen').style.display = 'none';
  $('toolScreen').style.display = 'block';
  $('installBanner').classList.remove('show');

  // Render tool UI
  renderTool(toolId);

  // Scroll to top
  window.scrollTo(0, 0);
}

function goHome() {
  appState.currentTool = null;
  appState.currentFiles = [];

  $('mainHeader').style.display = '';
  $('toolHeader').style.display = 'none';
  $('homeScreen').style.display = '';
  $('toolScreen').style.display = 'none';
  $('toolWorkspace').innerHTML = '';

  window.scrollTo(0, 0);
}

$('backBtn').addEventListener('click', goHome);

// Handle browser back
window.addEventListener('popstate', () => {
  if (appState.currentTool) {
    goHome();
  }
});

// ═══════════════════════════════════════════════════════════
// TOOL RENDERING
// ═══════════════════════════════════════════════════════════

function renderTool(toolId) {
  const workspace = $('toolWorkspace');

  const renderers = {
    // PDF Tools
    'word-to-pdf': renderFileConverter,
    'img-to-pdf': renderImgToPdf,
    'pdf-merge': renderPdfMerge,
    'pdf-split': renderPdfSplit,
    'pdf-compress': renderPdfCompress,
    'pdf-encrypt': renderPdfEncrypt,
    'pdf-decrypt': renderPdfDecrypt,
    'pdf-rotate': renderPdfRotate,
    'pdf-delete-pages': renderPdfDeletePages,
    'pdf-watermark': renderPdfWatermark,
    'pdf-ocr': renderPdfOcr,

    // Professional & AI Tools
    'ai-email': renderAiEmailImprover,
    'ai-chat': renderAiChat,
    'clipboard-sync': renderClipboardSync,

    // Video Tools
    'video-download': renderVideoDownload,
    'audio-download': renderAudioDownload,
    'video-convert': renderVideoConvert,
    'video-compress': renderVideoCompress,
    'video-extract-audio': renderVideoExtractAudio,
    'video-screenshot': renderVideoScreenshot,
    'video-merge': renderVideoMerge,
    'video-trim': renderVideoTrim,

    // Image Tools
    'img-remove-bg': renderImgRemoveBg,
    'img-compress': renderImgCompress,
    'img-jpg-png': renderImgJpgPng,
    'img-webp-png': renderImgWebpPng,
    'img-resize': renderImgResize,
    'img-batch': renderImgBatch,
    'img-rotate': renderImgRotate,
    'img-watermark': renderImgWatermark,
    'qr-generate': renderQrGenerate,
    'barcode-generate': renderBarcodeGenerate,

    // Text Tools
    'text-uppercase': renderTextUppercase,
    'text-lowercase': renderTextLowercase,
    'text-word-count': renderTextWordCount,
    'text-char-count': renderTextCharCount,
    'text-clean': renderTextClean,
    'text-html-clean': renderTextHtmlClean,
    'text-json-format': renderTextJsonFormat,
    'text-xml-format': renderTextXmlFormat,
    'text-md-convert': renderTextMdConvert,
  };

  const renderer = renderers[toolId];
  if (renderer) {
    renderer(workspace);
  } else {
    workspace.innerHTML = `<div class="info-card"><span class="info-icon">🚧</span><p>Bu araç yakında eklenecek.</p></div>`;
  }

  // Push state for back button
  history.pushState({ tool: toolId }, '');
}

// ═══════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function readFileAsArrayBuffer(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result);
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
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

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function formatFileSize(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

function showProgress(visible) {
  $('progressOverlay').classList.toggle('active', visible);
}

function updateProgress(percent, text, sub) {
  $('progressBar').style.width = percent + '%';
  if (text) $('progressText').textContent = text;
  if (sub) $('progressSub').textContent = sub;
}

function showSuccessOverlay(blob, filename, info) {
  appState.resultBlob = blob;
  appState.resultName = filename;
  $('successInfo').textContent = info || `${filename} başarıyla oluşturuldu.`;
  showProgress(false);
  $('successOverlay').classList.add('active');
}

let toastTimeout;
function showToast(message, isError = false) {
  clearTimeout(toastTimeout);
  const toast = $('toast');
  toast.textContent = message;
  toast.className = 'toast show' + (isError ? ' error' : '');
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function createFileUploadUI(container, { accept, multiple, icon, title, subtitle, formats, onFiles }) {
  const id = 'fileInput_' + Date.now();
  container.innerHTML = `
    <div class="upload-area" id="uploadArea_${id}">
      <input type="file" id="${id}" ${accept ? `accept="${accept}"` : ''} ${multiple ? 'multiple' : ''}>
      <div class="upload-area-content">
        <div class="upload-icon">${icon || '📁'}</div>
        <div class="upload-title">${title || 'Dosya Seçin'}</div>
        <div class="upload-subtitle">${subtitle || 'Dokunarak dosyanızı seçin'}</div>
        ${formats ? `<div class="upload-formats">${formats.map(f => `<span class="format-badge">${f}</span>`).join('')}</div>` : ''}
      </div>
    </div>
    <div class="preview-section" id="preview_${id}" style="display:none;">
      <div class="preview-header">
        <h3 id="previewTitle_${id}">0 dosya seçildi</h3>
        <button class="clear-all-btn" id="clearBtn_${id}">🗑 Temizle</button>
      </div>
      <div class="preview-grid" id="previewGrid_${id}"></div>
    </div>
  `;

  const input = $(id);
  const uploadArea = $(`uploadArea_${id}`);
  const preview = $(`preview_${id}`);
  const previewTitle = $(`previewTitle_${id}`);
  const previewGrid = $(`previewGrid_${id}`);
  const clearBtn = $(`clearBtn_${id}`);
  let files = [];

  uploadArea.addEventListener('click', () => input.click());

  uploadArea.addEventListener('dragover', e => { e.preventDefault(); uploadArea.classList.add('dragover'); });
  uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragover'));
  uploadArea.addEventListener('drop', e => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    addFiles(Array.from(e.dataTransfer.files));
  });

  input.addEventListener('change', () => {
    addFiles(Array.from(input.files));
    input.value = '';
  });

  clearBtn.addEventListener('click', () => {
    files = [];
    appState.currentFiles = [];
    updatePreview();
    onFiles([]);
  });

  function addFiles(newFiles) {
    if (multiple) {
      files.push(...newFiles);
    } else {
      files = [newFiles[0]];
    }
    appState.currentFiles = files;
    updatePreview();
    onFiles(files);
    showToast(`✅ ${newFiles.length} dosya eklendi`);
  }

  function updatePreview() {
    if (files.length === 0) {
      preview.style.display = 'none';
      return;
    }
    preview.style.display = 'block';
    previewTitle.textContent = `${files.length} dosya seçildi`;

    previewGrid.innerHTML = files.map((f, i) => {
      const isImg = f.type.startsWith('image/');
      if (isImg) {
        const url = URL.createObjectURL(f);
        return `<div class="preview-item">
          <img src="${url}" alt="${f.name}">
          <button class="remove-btn" data-idx="${i}">✕</button>
          <span class="order-badge">${i + 1}</span>
        </div>`;
      }
      const ext = f.name.split('.').pop().toUpperCase();
      const icon = ext === 'PDF' ? '📕' : ext === 'TXT' ? '📝' : '📎';
      return `<div class="preview-item">
        <div class="file-icon">
          <span class="icon">${icon}</span>
          <span class="name">${f.name.length > 20 ? f.name.substring(0, 17) + '...' : f.name}</span>
        </div>
        <button class="remove-btn" data-idx="${i}">✕</button>
        <span class="order-badge">${i + 1}</span>
      </div>`;
    }).join('');

    previewGrid.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        files.splice(parseInt(btn.dataset.idx), 1);
        appState.currentFiles = files;
        updatePreview();
        onFiles(files);
      });
    });
  }

  return { getFiles: () => files, clear: () => { files = []; updatePreview(); } };
}

// ═══════════════════════════════════════════════════════════
// PDF TOOL RENDERERS
// ═══════════════════════════════════════════════════════════

// --- File Converter (Word/Excel/PPT → PDF) ---
function renderFileConverter(workspace) {
  const tool = appState.currentTool;
  let acceptType = '';
  let formatList = [];

  if (tool.id === 'word-to-pdf') {
    acceptType = '.doc,.docx';
    formatList = ['DOC', 'DOCX'];
  }

  workspace.innerHTML = `<div id="fileUploadContainer"></div>
    <div class="info-card">
      <span class="info-icon">💡</span>
      <p>Dosyanız tamamen tarayıcıda işlenir, hiçbir sunucuya gönderilmez. Dönüşüm tamamlandığında PDF olarak indirebilirsiniz.</p>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="convertBtn" disabled>⚡ PDF'e Dönüştür</button>
    </div>`;

  const uploader = createFileUploadUI($('fileUploadContainer'), {
    accept: acceptType,
    multiple: false,
    icon: tool.icon,
    title: `${tool.name.split('→')[0].trim()} Dosyası Seçin`,
    subtitle: 'Dönüştürmek istediğiniz dosyayı seçin',
    formats: formatList,
    onFiles: (files) => {
      $('convertBtn').disabled = files.length === 0;
    }
  });

  $('convertBtn').addEventListener('click', async () => {
    const files = uploader.getFiles();
    if (files.length === 0) return;

    showProgress(true);
    updateProgress(10, 'Dosya okunuyor...', files[0].name);

    try {
      if (tool.id === 'word-to-pdf') {
        await convertWordToPdf(files[0]);
      }
    } catch (err) {
      showProgress(false);
      showToast('❌ Hata: ' + err.message, true);
    }
  });
}

// --- Word → PDF conversion using mammoth.js ---
async function convertWordToPdf(file) {
  updateProgress(20, 'Word dosyası okunuyor...', '');
  const arrayBuf = await readFileAsArrayBuffer(file);

  updateProgress(40, 'İçerik çıkarılıyor...', 'Metin ve biçimlendirme işleniyor');

  let htmlContent = '';
  try {
    const result = await mammoth.convertToHtml({ arrayBuffer: arrayBuf });
    htmlContent = result.value;
  } catch(e) {
    // Fallback: try extracting raw text
    try {
      const result = await mammoth.extractRawText({ arrayBuffer: arrayBuf });
      htmlContent = '<p>' + result.value.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>') + '</p>';
    } catch(e2) {
      throw new Error('Word dosyası okunamadı. Lütfen .docx formatında olduğundan emin olun.');
    }
  }

  updateProgress(60, 'PDF oluşturuluyor...', 'Sayfa düzeni hazırlanıyor');

  const container = document.createElement('div');
  container.style.cssText = 'padding: 20mm; font-family: Arial, sans-serif; font-size: 14px; line-height: 1.6; color: #000; background: #fff; text-align: left; word-wrap: break-word;';
  container.innerHTML = htmlContent;

  const opt = {
    margin:       0,
    filename:     file.name.replace(/\.(docx?|doc)$/i, '.pdf'),
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  try {
    const pdfBlob = await html2pdf().set(opt).from(container).outputPdf('blob');
    updateProgress(95, 'PDF kaydediliyor...', '');
    showSuccessOverlay(pdfBlob, opt.filename, `Word → PDF dönüştürüldü (${formatFileSize(pdfBlob.size)})`);
  } catch (e) {
    throw new Error('PDF oluşturma sırasında bir hata oluştu: ' + e.message);
  }
}

// --- AI Email Improver ---
function renderAiEmailImprover(workspace) {
  workspace.innerHTML = `
    <div class="info-card" style="background: linear-gradient(135deg, #10b98122, #05966922); border-color: #10b981;">
      <span class="info-icon">🤖</span>
      <p>Özensiz veya hızlıca yazdığınız metinleri saniyeler içinde <strong>profesyonel, kurumsal ve kusursuz</strong> bir e-postaya dönüştürür. Ücretsiz Google Gemini API altyapısını kullanır.</p>
    </div>
    
    <div class="tool-input-group" id="apiKeyGroup" style="display: none;">
      <!-- API anahtarı artık sunucuda güvenle saklanıyor -->
    </div>

    <div class="tool-input-group" style="margin-top: 1rem;">
      <label class="tool-label">✍️ Taslak Metniniz</label>
      <textarea class="tool-input" id="draftInput" rows="5" placeholder="Örn: abi şu işi halledemedik yarın göndericem kusura bakma..."></textarea>
    </div>

    <div class="tool-input-group">
      <label class="tool-label">🎯 İstenen Ton / Üslup</label>
      <select class="tool-select" id="emailTone">
        <option value="Çok profesyonel ve ciddi bir kurumsal e-posta">Kurumsal & Ciddi</option>
        <option value="Profesyonel ama samimi ve kibar bir e-posta">Profesyonel & Samimi</option>
        <option value="Özür dileyen, durumu açıklayan profesyonel bir e-posta">Özür & Telafi</option>
        <option value="İkna edici, pazarlama/satış odaklı profesyonel bir e-posta">İkna Edici / Satış</option>
      </select>
    </div>

    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="improveBtn" disabled style="background: linear-gradient(135deg, #10b981, #059669); border-color: #059669;">✨ Profesyonelleştir</button>
    </div>

    <div id="aiResultContainer" style="display: none; margin-top: 1.5rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
        <label class="tool-label" style="margin: 0;">✅ Profesyonel Sonuç</label>
        <button id="copyAiBtn" style="background: none; border: none; color: #10b981; cursor: pointer; display: flex; align-items: center; gap: 5px; font-weight: bold; font-family: inherit; font-size: 0.9rem;">
          📋 Kopyala
        </button>
      </div>
      <textarea class="tool-input" id="aiOutput" rows="8" readonly style="background-color: #1e293b; border-color: #10b98155; color: #f8fafc;"></textarea>
    </div>
  `;

  const checkInputs = () => {
    $('improveBtn').disabled = !$('draftInput').value.trim();
  };

  $('draftInput').addEventListener('input', checkInputs);

  $('draftInput').addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });

  $('copyAiBtn').addEventListener('click', () => {
    const text = $('aiOutput').value;
    if (text) {
      navigator.clipboard.writeText(text);
      showToast('✅ Metin panoya kopyalandı');
    }
  });

  $('improveBtn').addEventListener('click', async () => {
    const draftText = $('draftInput').value.trim();
    const tone = $('emailTone').value;

    if (!draftText) return;

    const btn = $('improveBtn');
    btn.disabled = true;
    btn.innerHTML = '⏳ Yapay zeka düşünüyor...';
    $('aiResultContainer').style.display = 'none';

    try {
      const response = await fetch('https://yt-sunucu.onrender.com/api/ai/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ draftText, tone })
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.detail || 'Sunucuya ulaşılamadı.');
      }

      const responseData = await response.json();
      
      if (!responseData || responseData.status !== "success" || !responseData.text) {
        throw new Error('Geçersiz yapay zeka yanıtı.');
      }

      const generatedText = responseData.text;

      $('aiOutput').value = generatedText.trim();
      $('aiResultContainer').style.display = 'block';
      
      $('aiOutput').style.height = 'auto';
      $('aiOutput').style.height = ($('aiOutput').scrollHeight) + 'px';
      
      showToast('✨ E-postanız profesyonelleştirildi');
    } catch (err) {
      showToast('❌ Hata oluştu: ' + err.message, true);
    } finally {
      btn.disabled = false;
      btn.innerHTML = '✨ Profesyonelleştir';
    }
  });
}

// --- AI Chat ---
function renderAiChat(workspace) {
  workspace.innerHTML = `
    <div class="info-card" style="background: linear-gradient(135deg, #10b98122, #05966922); border-color: #10b981;">
      <span class="info-icon">💬</span>
      <p>Yapay zekaya istediğiniz herhangi bir soruyu sorun veya bir konu hakkında yardım isteyin. Arka planda en güçlü <strong>Google Gemini</strong> modelleri kullanılarak size anında cevap verilir.</p>
    </div>
    
    <div class="tool-input-group" style="margin-top: 1.5rem;">
      <label class="tool-label">Soru veya İsteğiniz</label>
      <textarea class="tool-input" id="askInput" rows="4" placeholder="Örn: Python'da liste nasıl sıralanır? veya Mars'a yolculuk ne kadar sürer?"></textarea>
    </div>

    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="askBtn" disabled style="background: linear-gradient(135deg, #10b981, #059669); border-color: #059669;">🚀 Gönder</button>
    </div>

    <div id="askResultContainer" style="display: none; margin-top: 1.5rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
        <label class="tool-label" style="margin: 0;">🤖 Yapay Zeka Yanıtı</label>
        <button id="copyChatBtn" style="background: none; border: none; color: #10b981; cursor: pointer; display: flex; align-items: center; gap: 5px; font-weight: bold; font-family: inherit; font-size: 0.9rem;">
          📋 Kopyala
        </button>
      </div>
      <textarea class="tool-input" id="askOutput" rows="8" readonly style="background-color: #1e293b; border-color: #10b98155; color: #f8fafc; line-height: 1.6;"></textarea>
    </div>
  `;

  const checkInputs = () => {
    $('askBtn').disabled = !$('askInput').value.trim();
  };

  $('askInput').addEventListener('input', checkInputs);

  $('askInput').addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });

  $('copyChatBtn').addEventListener('click', () => {
    const text = $('askOutput').value;
    if (text) {
      navigator.clipboard.writeText(text);
      showToast('✅ Yanıt panoya kopyalandı');
    }
  });

  $('askBtn').addEventListener('click', async () => {
    const question = $('askInput').value.trim();
    if (!question) return;

    const btn = $('askBtn');
    btn.disabled = true;
    btn.innerHTML = '⏳ Düşünüyor...';
    $('askResultContainer').style.display = 'none';

    try {
      const response = await fetch('https://yt-sunucu.onrender.com/api/ai/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.detail || 'Sunucuya ulaşılamadı.');
      }

      const responseData = await response.json();
      
      if (!responseData || responseData.status !== "success" || !responseData.text) {
        throw new Error('Geçersiz yapay zeka yanıtı.');
      }

      $('askOutput').value = responseData.text.trim();
      $('askResultContainer').style.display = 'block';
      
      $('askOutput').style.height = 'auto';
      $('askOutput').style.height = ($('askOutput').scrollHeight) + 'px';
      
    } catch (err) {
      showToast('❌ Hata: ' + err.message, true);
    } finally {
      btn.disabled = false;
      btn.innerHTML = '🚀 Gönder';
    }
  });
}

// --- IMG → PDF ---
function renderImgToPdf(workspace) {
  workspace.innerHTML = `<div id="fileUploadContainer"></div>
    <div class="info-card">
      <span class="info-icon">💡</span>
      <p>Seçtiğiniz tüm resimler sırasıyla <strong>tek bir PDF</strong> dosyasında birleştirilecektir. Her resim ayrı bir sayfa olur.</p>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="convertBtn" disabled>⚡ PDF Oluştur</button>
    </div>`;

  const uploader = createFileUploadUI($('fileUploadContainer'), {
    accept: 'image/*',
    multiple: true,
    icon: '🖼️',
    title: 'Resim Ekle',
    subtitle: 'PDF\'e dönüştürmek istediğiniz resimleri seçin',
    formats: ['JPG', 'PNG', 'BMP', 'GIF', 'WEBP'],
    onFiles: (files) => {
      $('convertBtn').disabled = files.length === 0;
    }
  });

  $('convertBtn').addEventListener('click', async () => {
    const files = uploader.getFiles();
    if (files.length === 0) return;

    showProgress(true);
    updateProgress(0, 'PDF oluşturuluyor...', 'Resimler işleniyor');

    try {
      const { jsPDF } = window.jspdf;

      let doc = null;
      for (let i = 0; i < files.length; i++) {
        updateProgress((i / files.length) * 90, `İşleniyor... (${i + 1}/${files.length})`, files[i].name);

        const imgData = await readFileAsDataURL(files[i]);
        const dims = await getImageDimensions(imgData);

        const maxW = 210, maxH = 297;
        let pw, ph;
        const ratio = dims.width / dims.height;
        if (ratio > maxW / maxH) { pw = maxW; ph = maxW / ratio; }
        else { ph = maxH; pw = maxH * ratio; }

        if (!doc) {
          doc = new jsPDF({ orientation: pw > ph ? 'landscape' : 'portrait', unit: 'mm', format: [pw, ph], compress: true });
        } else {
          doc.addPage([pw, ph], pw > ph ? 'landscape' : 'portrait');
        }
        doc.addImage(imgData, 'JPEG', 0, 0, pw, ph, undefined, 'MEDIUM');
        await sleep(30);
      }

      updateProgress(95, 'PDF kaydediliyor...', 'Neredeyse bitti');
      await sleep(200);

      const blob = doc.output('blob');
      showSuccessOverlay(blob, 'Resimler.pdf', `${files.length} resim → PDF (${formatFileSize(blob.size)})`);
    } catch (err) {
      showProgress(false);
      showToast('❌ Hata: ' + err.message, true);
    }
  });
}

// --- PDF → Word ---
function renderPdfToWord(workspace) {
  workspace.innerHTML = `<div id="fileUploadContainer"></div>
    <div class="info-card">
      <span class="info-icon">💡</span>
      <p>PDF'teki metinler pdf.js ile çıkarılarak bir metin dosyası (.txt) olarak indirilir. Tüm sayfaların metin içeriği çıkarılır.</p>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="convertBtn" disabled>⚡ Metni Çıkar ve İndir</button>
    </div>`;

  const uploader = createFileUploadUI($('fileUploadContainer'), {
    accept: '.pdf',
    multiple: false,
    icon: '📃',
    title: 'PDF Dosyası Seçin',
    subtitle: 'Metin çıkarmak istediğiniz PDF\'i seçin',
    formats: ['PDF'],
    onFiles: (files) => { $('convertBtn').disabled = files.length === 0; }
  });

  $('convertBtn').addEventListener('click', async () => {
    const files = uploader.getFiles();
    if (files.length === 0) return;

    showProgress(true);
    updateProgress(10, 'PDF okunuyor...', 'pdf.js ile metin çıkarılıyor');

    try {
      const arrayBuf = await readFileAsArrayBuffer(files[0]);

      // Use pdf.js for text extraction
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuf });
      const pdf = await loadingTask.promise;
      const totalPages = pdf.numPages;
      let allText = '';

      for (let i = 1; i <= totalPages; i++) {
        updateProgress(10 + (i / totalPages) * 80, `Sayfa ${i}/${totalPages}`, 'Metin çıkarılıyor');

        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items
          .map(item => item.str)
          .join(' ')
          .replace(/\s+/g, ' ')
          .trim();

        allText += `--- Sayfa ${i} ---\n\n`;
        if (pageText) {
          allText += pageText + '\n\n';
        } else {
          allText += '[Bu sayfa metin içermiyor — görsel içerik olabilir]\n\n';
        }
      }

      updateProgress(95, 'Dosya hazırlanıyor...', '');
      const blob = new Blob([allText], { type: 'text/plain;charset=utf-8' });
      showSuccessOverlay(blob, files[0].name.replace('.pdf', '.txt'), `${totalPages} sayfadan metin çıkarıldı`);
    } catch (err) {
      showProgress(false);
      showToast('❌ Hata: ' + err.message, true);
    }
  });
}

// --- PDF → JPG ---
function renderPdfToJpg(workspace) {
  workspace.innerHTML = `<div id="fileUploadContainer"></div>
    <div class="info-card">
      <span class="info-icon">💡</span>
      <p>PDF sayfaları pdf.js ile render edilerek gerçek JPG resimlerine dönüştürülür. Her sayfa ayrı bir resim olarak indirilir.</p>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="convertBtn" disabled>⚡ JPG'ye Dönüştür</button>
    </div>
    <div id="pdfJpgResults"></div>`;

  const uploader = createFileUploadUI($('fileUploadContainer'), {
    accept: '.pdf',
    multiple: false,
    icon: '📸',
    title: 'PDF Dosyası Seçin',
    subtitle: 'Resme dönüştürmek istediğiniz PDF\'i seçin',
    formats: ['PDF'],
    onFiles: (files) => { $('convertBtn').disabled = files.length === 0; }
  });

  $('convertBtn').addEventListener('click', async () => {
    const files = uploader.getFiles();
    if (files.length === 0) return;

    showProgress(true);
    updateProgress(10, 'PDF okunuyor...', '');

    try {
      const arrayBuf = await readFileAsArrayBuffer(files[0]);
      const baseName = files[0].name.replace(/\.pdf$/i, '');

      // Use pdf.js to render pages to canvas
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuf });
      const pdf = await loadingTask.promise;
      const totalPages = pdf.numPages;

      const results = $('pdfJpgResults');
      results.innerHTML = '<div class="tool-section-title">📸 OLUŞTURULAN RESİMLER</div>';

      const imageBlobs = [];

      for (let i = 1; i <= totalPages; i++) {
        updateProgress(10 + (i / totalPages) * 80, `Sayfa ${i}/${totalPages}`, 'JPG\'ye dönüştürülüyor');

        const page = await pdf.getPage(i);
        const scale = 2; // High quality rendering
        const viewport = page.getViewport({ scale });

        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext('2d');

        // White background for JPG
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        await page.render({
          canvasContext: ctx,
          viewport: viewport
        }).promise;

        // Convert canvas to JPG blob
        const jpgBlob = await new Promise(resolve => {
          canvas.toBlob(resolve, 'image/jpeg', 0.92);
        });

        imageBlobs.push({ blob: jpgBlob, pageNum: i });

        // Create preview and download button
        const thumbCanvas = document.createElement('canvas');
        const thumbScale = 150 / viewport.width;
        thumbCanvas.width = 150;
        thumbCanvas.height = viewport.height * thumbScale;
        const thumbCtx = thumbCanvas.getContext('2d');
        thumbCtx.drawImage(canvas, 0, 0, thumbCanvas.width, thumbCanvas.height);

        const thumbUrl = thumbCanvas.toDataURL('image/jpeg', 0.6);
        const blobUrl = URL.createObjectURL(jpgBlob);

        const resultItem = document.createElement('div');
        resultItem.className = 'tool-result';
        resultItem.style.marginTop = '0.5rem';
        resultItem.innerHTML = `
          <div class="tool-result-header" style="align-items:center;">
            <div style="display:flex;align-items:center;gap:0.75rem;">
              <img src="${thumbUrl}" alt="Sayfa ${i}" style="width:60px;border-radius:4px;border:1px solid rgba(255,255,255,0.1);">
              <div>
                <span class="tool-result-title">Sayfa ${i}</span>
                <div style="font-size:0.7rem;color:var(--text-secondary);margin-top:2px;">${Math.round(viewport.width/2)}×${Math.round(viewport.height/2)}px · ${formatFileSize(jpgBlob.size)}</div>
              </div>
            </div>
            <a href="${blobUrl}" download="${baseName}_sayfa${i}.jpg" class="tool-btn tool-btn-success" style="flex:0;padding:0.4rem 0.8rem;font-size:0.72rem;text-decoration:none;">📥 İndir</a>
          </div>`;
        results.appendChild(resultItem);
      }

      // Add "Download All" button if multiple pages
      if (totalPages > 1) {
        const downloadAllDiv = document.createElement('div');
        downloadAllDiv.className = 'tool-btn-row';
        downloadAllDiv.style.marginTop = '1rem';
        downloadAllDiv.innerHTML = `<button class="tool-btn tool-btn-primary" id="downloadAllJpg">📥 Tümünü İndir (${totalPages} resim)</button>`;
        results.appendChild(downloadAllDiv);

        document.getElementById('downloadAllJpg').addEventListener('click', () => {
          imageBlobs.forEach(({ blob, pageNum }) => {
            downloadBlob(blob, `${baseName}_sayfa${pageNum}.jpg`);
          });
          showToast(`📥 ${totalPages} resim indiriliyor...`);
        });
      }

      showProgress(false);
      showToast(`✅ ${totalPages} sayfa JPG'ye dönüştürüldü`);
    } catch (err) {
      showProgress(false);
      showToast('❌ Hata: ' + err.message, true);
    }
  });
}

// --- PDF Merge ---
function renderPdfMerge(workspace) {
  workspace.innerHTML = `<div id="fileUploadContainer"></div>
    <div class="info-card">
      <span class="info-icon">💡</span>
      <p>Birden fazla PDF dosyasını seçin ve hepsini tek bir PDF'te birleştirin. Dosyalar seçim sırasına göre birleştirilir.</p>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="mergeBtn" disabled>⚡ PDF'leri Birleştir</button>
    </div>`;

  const uploader = createFileUploadUI($('fileUploadContainer'), {
    accept: '.pdf',
    multiple: true,
    icon: '📎',
    title: 'PDF Dosyalarını Seçin',
    subtitle: 'Birleştirmek istediğiniz PDF\'leri seçin',
    formats: ['PDF'],
    onFiles: (files) => { $('mergeBtn').disabled = files.length < 2; }
  });

  $('mergeBtn').addEventListener('click', async () => {
    const files = uploader.getFiles();
    if (files.length < 2) return;

    showProgress(true);
    updateProgress(0, 'PDF\'ler birleştiriliyor...', '');

    try {
      const mergedPdf = await PDFLib.PDFDocument.create();

      for (let i = 0; i < files.length; i++) {
        updateProgress((i / files.length) * 90, `İşleniyor... (${i + 1}/${files.length})`, files[i].name);
        const arrayBuf = await readFileAsArrayBuffer(files[i]);
        const pdf = await PDFLib.PDFDocument.load(arrayBuf);
        const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        pages.forEach(p => mergedPdf.addPage(p));
        await sleep(30);
      }

      updateProgress(95, 'PDF kaydediliyor...', '');
      const pdfBytes = await mergedPdf.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      showSuccessOverlay(blob, 'Birlestirilmis.pdf', `${files.length} PDF birleştirildi (${formatFileSize(blob.size)})`);
    } catch (err) {
      showProgress(false);
      showToast('❌ Hata: ' + err.message, true);
    }
  });
}

// --- PDF Split ---
function renderPdfSplit(workspace) {
  workspace.innerHTML = `<div id="fileUploadContainer"></div>
    <div class="tool-input-group" id="splitOptions" style="display:none;margin-top:1rem;">
      <label class="tool-label">Sayfa Aralığı (örn: 1-3, 5, 7-10)</label>
      <input type="text" class="tool-input" id="splitRange" placeholder="1-3, 5, 7-10">
    </div>
    <div class="info-card">
      <span class="info-icon">💡</span>
      <p>PDF'i sayfa numaralarına göre bölün. Virgülle ayrılmış sayfa numaraları veya aralıklar belirtin.</p>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="splitBtn" disabled>⚡ PDF'i Böl</button>
    </div>`;

  let pageCount = 0;
  const uploader = createFileUploadUI($('fileUploadContainer'), {
    accept: '.pdf',
    multiple: false,
    icon: '✂️',
    title: 'PDF Dosyası Seçin',
    subtitle: 'Bölmek istediğiniz PDF\'i seçin',
    formats: ['PDF'],
    onFiles: async (files) => {
      if (files.length > 0) {
        try {
          const buf = await readFileAsArrayBuffer(files[0]);
          const pdf = await PDFLib.PDFDocument.load(buf);
          pageCount = pdf.getPageCount();
          $('splitOptions').style.display = 'block';
          $('splitRange').placeholder = `1-${pageCount} (toplam ${pageCount} sayfa)`;
          $('splitBtn').disabled = false;
        } catch(e) {
          showToast('❌ PDF okunamadı', true);
        }
      } else {
        $('splitOptions').style.display = 'none';
        $('splitBtn').disabled = true;
      }
    }
  });

  $('splitBtn').addEventListener('click', async () => {
    const files = uploader.getFiles();
    if (files.length === 0) return;

    const rangeText = $('splitRange').value.trim();
    if (!rangeText) { showToast('⚠️ Sayfa aralığı girin', true); return; }

    showProgress(true);
    updateProgress(20, 'PDF bölünüyor...', '');

    try {
      const indices = parsePageRange(rangeText, pageCount);
      const arrayBuf = await readFileAsArrayBuffer(files[0]);
      const srcPdf = await PDFLib.PDFDocument.load(arrayBuf);
      const newPdf = await PDFLib.PDFDocument.create();
      const pages = await newPdf.copyPages(srcPdf, indices);
      pages.forEach(p => newPdf.addPage(p));

      updateProgress(90, 'Kaydediliyor...', '');
      const pdfBytes = await newPdf.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      showSuccessOverlay(blob, 'Bolunmus.pdf', `${indices.length} sayfa çıkarıldı (${formatFileSize(blob.size)})`);
    } catch (err) {
      showProgress(false);
      showToast('❌ Hata: ' + err.message, true);
    }
  });
}

function parsePageRange(text, maxPage) {
  const indices = new Set();
  const parts = text.split(',');
  for (const part of parts) {
    const trimmed = part.trim();
    if (trimmed.includes('-')) {
      const [start, end] = trimmed.split('-').map(Number);
      for (let i = start; i <= end && i <= maxPage; i++) {
        if (i >= 1) indices.add(i - 1);
      }
    } else {
      const n = parseInt(trimmed);
      if (n >= 1 && n <= maxPage) indices.add(n - 1);
    }
  }
  return Array.from(indices).sort((a, b) => a - b);
}

// --- PDF Compress ---
function renderPdfCompress(workspace) {
  workspace.innerHTML = `<div id="fileUploadContainer"></div>
    <div class="info-card">
      <span class="info-icon">💡</span>
      <p>PDF dosyanızın boyutunu küçültür. Tarayıcı tabanlı sıkıştırma uygulanır.</p>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="compressBtn" disabled>⚡ PDF'i Sıkıştır</button>
    </div>`;

  const uploader = createFileUploadUI($('fileUploadContainer'), {
    accept: '.pdf',
    multiple: false,
    icon: '📦',
    title: 'PDF Dosyası Seçin',
    subtitle: 'Sıkıştırmak istediğiniz PDF\'i seçin',
    formats: ['PDF'],
    onFiles: (files) => { $('compressBtn').disabled = files.length === 0; }
  });

  $('compressBtn').addEventListener('click', async () => {
    const files = uploader.getFiles();
    if (files.length === 0) return;

    showProgress(true);
    updateProgress(30, 'PDF sıkıştırılıyor...', 'Dosya okunuyor');

    try {
      const arrayBuf = await readFileAsArrayBuffer(files[0]);
      const origSize = files[0].size;

      updateProgress(50, 'Sıkıştırılıyor...', 'Sayfalar işleniyor');
      const pdfDoc = await PDFLib.PDFDocument.load(arrayBuf, { ignoreEncryption: true });

      // Remove metadata to reduce size
      pdfDoc.setTitle('');
      pdfDoc.setAuthor('');
      pdfDoc.setSubject('');
      pdfDoc.setKeywords([]);
      pdfDoc.setProducer('');
      pdfDoc.setCreator('');

      updateProgress(80, 'Kaydediliyor...', '');
      const pdfBytes = await pdfDoc.save({
        useObjectStreams: true,
        addDefaultPage: false,
      });

      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const savedPercent = Math.max(0, ((origSize - blob.size) / origSize * 100)).toFixed(1);
      showSuccessOverlay(blob, 'Sikistirilmis.pdf',
        `Orijinal: ${formatFileSize(origSize)} → Sıkıştırılmış: ${formatFileSize(blob.size)} (${savedPercent}% küçüldü)`);
    } catch (err) {
      showProgress(false);
      showToast('❌ Hata: ' + err.message, true);
    }
  });
}

// --- PDF Encrypt ---
function renderPdfEncrypt(workspace) {
  workspace.innerHTML = `<div id="fileUploadContainer"></div>
    <div class="tool-input-group" style="margin-top:1rem;">
      <label class="tool-label">🔑 Şifre Belirleyin</label>
      <input type="password" class="tool-input" id="pdfPassword" placeholder="PDF şifresi girin">
    </div>
    <div class="info-card">
      <span class="info-icon">💡</span>
      <p>PDF'inize şifre ekleyin. Şifrelenmiş PDF açılırken bu şifre istenecektir. İşlem tamamen tarayıcıda gerçekleşir.</p>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="encryptBtn" disabled>🔒 Şifrele</button>
    </div>`;

  const uploader = createFileUploadUI($('fileUploadContainer'), {
    accept: '.pdf',
    multiple: false,
    icon: '🔒',
    title: 'PDF Dosyası Seçin',
    subtitle: 'Şifrelemek istediğiniz PDF\'i seçin',
    formats: ['PDF'],
    onFiles: (files) => { $('encryptBtn').disabled = files.length === 0; }
  });

  $('encryptBtn').addEventListener('click', async () => {
    const files = uploader.getFiles();
    const password = $('pdfPassword').value;
    if (files.length === 0) return;
    if (!password) { showToast('⚠️ Lütfen şifre girin', true); return; }

    showProgress(true);
    updateProgress(20, 'PDF şifreleniyor...', 'Sayfalar işleniyor');

    try {
      const arrayBuf = await readFileAsArrayBuffer(files[0]);

      // Re-render the PDF pages as images and create a new password-free PDF
      // that is visually identical but uses jsPDF's built-in encryption
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuf });
      const pdf = await loadingTask.promise;
      const totalPages = pdf.numPages;

      const { jsPDF } = window.jspdf;
      let doc = null;

      for (let i = 1; i <= totalPages; i++) {
        updateProgress(20 + (i / totalPages) * 60, `Sayfa ${i}/${totalPages}`, 'Şifreleniyor');

        const page = await pdf.getPage(i);
        const scale = 2;
        const viewport = page.getViewport({ scale });

        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        await page.render({
          canvasContext: ctx,
          viewport: viewport
        }).promise;

        const imgData = canvas.toDataURL('image/jpeg', 0.92);

        // Calculate page size in mm
        const mmWidth = (viewport.width / scale) * 0.264583;
        const mmHeight = (viewport.height / scale) * 0.264583;

        if (!doc) {
          doc = new jsPDF({
            orientation: mmWidth > mmHeight ? 'landscape' : 'portrait',
            unit: 'mm',
            format: [mmWidth, mmHeight],
            encryption: {
              userPassword: password,
              ownerPassword: password,
              userPermissions: ['print']
            }
          });
        } else {
          doc.addPage([mmWidth, mmHeight], mmWidth > mmHeight ? 'landscape' : 'portrait');
        }

        doc.addImage(imgData, 'JPEG', 0, 0, mmWidth, mmHeight, undefined, 'MEDIUM');
      }

      updateProgress(90, 'PDF kaydediliyor...', '');
      const blob = doc.output('blob');
      showSuccessOverlay(blob, 'Sifreli_' + files[0].name,
        `PDF şifrelendi (${totalPages} sayfa, ${formatFileSize(blob.size)}). Açmak için şifre gerekecektir.`);

    } catch (err) {
      showProgress(false);
      showToast('❌ Hata: ' + err.message, true);
    }
  });
}

// --- PDF Decrypt ---
function renderPdfDecrypt(workspace) {
  workspace.innerHTML = `<div id="fileUploadContainer"></div>
    <div class="tool-input-group" style="margin-top:1rem;">
      <label class="tool-label">🔑 Mevcut Şifre</label>
      <input type="password" class="tool-input" id="pdfPassword" placeholder="PDF şifresini girin">
    </div>
    <div class="info-card">
      <span class="info-icon">💡</span>
      <p>Şifreli PDF'in şifresini kaldırır. Mevcut şifreyi bilmeniz gerekir.</p>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="decryptBtn" disabled>🔓 Şifre Kaldır</button>
    </div>`;

  const uploader = createFileUploadUI($('fileUploadContainer'), {
    accept: '.pdf',
    multiple: false,
    icon: '🔓',
    title: 'Şifreli PDF Seçin',
    subtitle: 'Şifresini kaldırmak istediğiniz PDF\'i seçin',
    formats: ['PDF'],
    onFiles: (files) => { $('decryptBtn').disabled = files.length === 0; }
  });

  $('decryptBtn').addEventListener('click', async () => {
    const files = uploader.getFiles();
    const password = $('pdfPassword').value;
    if (files.length === 0) return;

    showProgress(true);
    updateProgress(50, 'PDF şifresi kaldırılıyor...', '');

    try {
      const arrayBuf = await readFileAsArrayBuffer(files[0]);
      const pdfDoc = await PDFLib.PDFDocument.load(arrayBuf, {
        ignoreEncryption: true,
        password: password || undefined
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      showSuccessOverlay(blob, 'Sifresiz.pdf', `Şifre kaldırıldı (${formatFileSize(blob.size)})`);
    } catch (err) {
      showProgress(false);
      showToast('❌ Hata: ' + err.message, true);
    }
  });
}

// --- PDF Rotate ---
function renderPdfRotate(workspace) {
  workspace.innerHTML = `<div id="fileUploadContainer"></div>
    <div class="tool-input-group" style="margin-top:1rem;">
      <label class="tool-label">🔄 Döndürme Açısı</label>
      <select class="tool-select" id="rotateAngle">
        <option value="90">90° Saat Yönünde</option>
        <option value="180">180°</option>
        <option value="270">90° Saat Yönü Tersine</option>
      </select>
    </div>
    <div class="tool-input-group">
      <label class="tool-label">📄 Sayfalar (boş bırakırsanız tümü döner)</label>
      <input type="text" class="tool-input" id="rotatePages" placeholder="Örn: 1-3, 5 (boş = tüm sayfalar)">
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="rotateBtn" disabled>🔄 Döndür</button>
    </div>`;

  const uploader = createFileUploadUI($('fileUploadContainer'), {
    accept: '.pdf',
    multiple: false,
    icon: '🔄',
    title: 'PDF Dosyası Seçin',
    subtitle: 'Döndürmek istediğiniz PDF\'i seçin',
    formats: ['PDF'],
    onFiles: (files) => { $('rotateBtn').disabled = files.length === 0; }
  });

  $('rotateBtn').addEventListener('click', async () => {
    const files = uploader.getFiles();
    if (files.length === 0) return;

    const angle = parseInt($('rotateAngle').value);
    const pagesText = $('rotatePages').value.trim();

    showProgress(true);
    updateProgress(30, 'PDF döndürülüyor...', '');

    try {
      const arrayBuf = await readFileAsArrayBuffer(files[0]);
      const pdfDoc = await PDFLib.PDFDocument.load(arrayBuf);
      const pages = pdfDoc.getPages();

      let pageIndices;
      if (pagesText) {
        pageIndices = parsePageRange(pagesText, pages.length);
      } else {
        pageIndices = pages.map((_, i) => i);
      }

      for (const idx of pageIndices) {
        if (idx < pages.length) {
          const page = pages[idx];
          const currentRotation = page.getRotation().angle;
          page.setRotation(PDFLib.degrees(currentRotation + angle));
        }
      }

      updateProgress(90, 'Kaydediliyor...', '');
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      showSuccessOverlay(blob, 'Dondurulmus.pdf', `${pageIndices.length} sayfa ${angle}° döndürüldü`);
    } catch (err) {
      showProgress(false);
      showToast('❌ Hata: ' + err.message, true);
    }
  });
}

// --- PDF Delete Pages ---
function renderPdfDeletePages(workspace) {
  workspace.innerHTML = `<div id="fileUploadContainer"></div>
    <div class="tool-input-group" id="deleteOptions" style="display:none;margin-top:1rem;">
      <label class="tool-label">🗑️ Silinecek Sayfalar</label>
      <input type="text" class="tool-input" id="deletePages" placeholder="Örn: 2, 4-6">
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-danger" id="deleteBtn" disabled>🗑️ Sayfaları Sil</button>
    </div>`;

  let pageCount = 0;
  const uploader = createFileUploadUI($('fileUploadContainer'), {
    accept: '.pdf',
    multiple: false,
    icon: '🗑️',
    title: 'PDF Dosyası Seçin',
    subtitle: 'Sayfalarını silmek istediğiniz PDF\'i seçin',
    formats: ['PDF'],
    onFiles: async (files) => {
      if (files.length > 0) {
        try {
          const buf = await readFileAsArrayBuffer(files[0]);
          const pdf = await PDFLib.PDFDocument.load(buf);
          pageCount = pdf.getPageCount();
          $('deleteOptions').style.display = 'block';
          $('deletePages').placeholder = `1-${pageCount} (toplam ${pageCount} sayfa)`;
          $('deleteBtn').disabled = false;
        } catch(e) { showToast('❌ PDF okunamadı', true); }
      } else {
        $('deleteOptions').style.display = 'none';
        $('deleteBtn').disabled = true;
      }
    }
  });

  $('deleteBtn').addEventListener('click', async () => {
    const files = uploader.getFiles();
    if (files.length === 0) return;

    const deleteText = $('deletePages').value.trim();
    if (!deleteText) { showToast('⚠️ Silinecek sayfaları girin', true); return; }

    showProgress(true);
    updateProgress(30, 'Sayfalar siliniyor...', '');

    try {
      const deleteIndices = parsePageRange(deleteText, pageCount);
      const arrayBuf = await readFileAsArrayBuffer(files[0]);
      const pdfDoc = await PDFLib.PDFDocument.load(arrayBuf);

      // Delete pages in reverse order
      const sorted = [...deleteIndices].sort((a, b) => b - a);
      for (const idx of sorted) {
        if (idx < pdfDoc.getPageCount()) {
          pdfDoc.removePage(idx);
        }
      }

      updateProgress(90, 'Kaydediliyor...', '');
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      showSuccessOverlay(blob, 'Duzenlenmis.pdf',
        `${deleteIndices.length} sayfa silindi, ${pdfDoc.getPageCount()} sayfa kaldı`);
    } catch (err) {
      showProgress(false);
      showToast('❌ Hata: ' + err.message, true);
    }
  });
}

// --- PDF Watermark ---
function renderPdfWatermark(workspace) {
  workspace.innerHTML = `<div id="fileUploadContainer"></div>
    <div class="tool-input-group" style="margin-top:1rem;">
      <label class="tool-label">💧 Filigran Metni</label>
      <input type="text" class="tool-input" id="watermarkText" placeholder="Örn: GİZLİ, TASLAK, Şirket Adı">
    </div>
    <div class="tool-input-group">
      <label class="tool-label">Saydamlık</label>
      <div class="tool-range-container">
        <input type="range" class="tool-range" id="watermarkOpacity" min="5" max="50" value="15">
        <span class="tool-range-value" id="watermarkOpacityVal">15%</span>
      </div>
    </div>
    <div class="tool-input-group">
      <label class="tool-label">Yazı Boyutu</label>
      <div class="tool-range-container">
        <input type="range" class="tool-range" id="watermarkSize" min="20" max="100" value="50">
        <span class="tool-range-value" id="watermarkSizeVal">50</span>
      </div>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="watermarkBtn" disabled>💧 Filigran Ekle</button>
    </div>`;

  $('watermarkOpacity').addEventListener('input', e => {
    $('watermarkOpacityVal').textContent = e.target.value + '%';
  });
  $('watermarkSize').addEventListener('input', e => {
    $('watermarkSizeVal').textContent = e.target.value;
  });

  const uploader = createFileUploadUI($('fileUploadContainer'), {
    accept: '.pdf',
    multiple: false,
    icon: '💧',
    title: 'PDF Dosyası Seçin',
    subtitle: 'Filigran eklemek istediğiniz PDF\'i seçin',
    formats: ['PDF'],
    onFiles: (files) => { $('watermarkBtn').disabled = files.length === 0; }
  });

  $('watermarkBtn').addEventListener('click', async () => {
    const files = uploader.getFiles();
    const text = $('watermarkText').value.trim();
    if (files.length === 0) return;
    if (!text) { showToast('⚠️ Filigran metni girin', true); return; }

    const opacity = parseInt($('watermarkOpacity').value) / 100;
    const fontSize = parseInt($('watermarkSize').value);

    showProgress(true);
    updateProgress(30, 'Filigran ekleniyor...', '');

    try {
      const arrayBuf = await readFileAsArrayBuffer(files[0]);
      const pdfDoc = await PDFLib.PDFDocument.load(arrayBuf);
      const pages = pdfDoc.getPages();
      const font = await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);

      for (let i = 0; i < pages.length; i++) {
        updateProgress(30 + (i / pages.length) * 60, `Sayfa ${i + 1}/${pages.length}`, '');
        const page = pages[i];
        const { width, height } = page.getSize();

        page.drawText(text, {
          x: width / 2 - (font.widthOfTextAtSize(text, fontSize) / 2),
          y: height / 2,
          size: fontSize,
          font: font,
          color: PDFLib.rgb(0.7, 0.7, 0.7),
          opacity: opacity,
          rotate: PDFLib.degrees(-45),
        });
      }

      updateProgress(95, 'Kaydediliyor...', '');
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      showSuccessOverlay(blob, 'Filigranli.pdf', `${pages.length} sayfaya filigran eklendi`);
    } catch (err) {
      showProgress(false);
      showToast('❌ Hata: ' + err.message, true);
    }
  });
}

// --- PDF OCR ---
function renderPdfOcr(workspace) {
  workspace.innerHTML = `<div id="fileUploadContainer"></div>
    <div class="info-card">
      <span class="info-icon">💡</span>
      <p>PDF'ten metin çıkarma işlemi. pdf.js kullanılarak tüm sayfalardan metin çıkarılır ve gösterilir.</p>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="ocrBtn" disabled>🔍 Metin Çıkar</button>
    </div>
    <div id="ocrResult"></div>`;

  const uploader = createFileUploadUI($('fileUploadContainer'), {
    accept: '.pdf',
    multiple: false,
    icon: '🔍',
    title: 'PDF Dosyası Seçin',
    subtitle: 'Metin çıkarmak istediğiniz PDF\'i seçin',
    formats: ['PDF'],
    onFiles: (files) => { $('ocrBtn').disabled = files.length === 0; }
  });

  $('ocrBtn').addEventListener('click', async () => {
    const files = uploader.getFiles();
    if (files.length === 0) return;

    showProgress(true);
    updateProgress(10, 'Metin çıkarılıyor...', 'pdf.js ile işleniyor');

    try {
      const arrayBuf = await readFileAsArrayBuffer(files[0]);

      // Use pdf.js for text extraction
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuf });
      const pdf = await loadingTask.promise;
      const totalPages = pdf.numPages;
      let allText = '';
      let totalWords = 0;
      let totalChars = 0;

      for (let i = 1; i <= totalPages; i++) {
        updateProgress(10 + (i / totalPages) * 80, `Sayfa ${i}/${totalPages}`, 'Metin çıkarılıyor');

        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();

        // Better text reconstruction with proper line breaks
        let lastY = null;
        let pageText = '';
        for (const item of textContent.items) {
          if (lastY !== null && Math.abs(item.transform[5] - lastY) > 5) {
            pageText += '\n';
          }
          pageText += item.str;
          lastY = item.transform[5];
        }

        pageText = pageText.trim();
        if (pageText) {
          allText += `--- Sayfa ${i} ---\n${pageText}\n\n`;
          const words = pageText.split(/\s+/).filter(w => w.length > 0);
          totalWords += words.length;
          totalChars += pageText.length;
        }
      }

      showProgress(false);

      const resultDiv = $('ocrResult');

      if (!allText.trim()) {
        resultDiv.innerHTML = `
          <div class="info-card warning">
            <span class="info-icon">⚠️</span>
            <p>Bu PDF'te metin katmanı bulunamadı. PDF görsel tabanlı olabilir (taranmış belge).</p>
          </div>`;
        return;
      }

      resultDiv.innerHTML = `
        <div class="tool-result">
          <div class="tool-result-header">
            <span class="tool-result-title">📄 Çıkarılan Metin</span>
            <div style="display:flex;gap:0.5rem;">
              <button class="copy-btn" id="copyOcrBtn">📋 Kopyala</button>
              <button class="tool-btn tool-btn-success" style="padding:0.3rem 0.6rem;font-size:0.7rem;" id="downloadOcrBtn">📥 İndir</button>
            </div>
          </div>
          <div class="tool-result-stats">
            <div class="stat-item">
              <span class="stat-label">Sayfa</span>
              <span class="stat-value">${totalPages}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Kelime</span>
              <span class="stat-value">${totalWords.toLocaleString('tr-TR')}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Karakter</span>
              <span class="stat-value">${totalChars.toLocaleString('tr-TR')}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Boyut</span>
              <span class="stat-value">${formatFileSize(files[0].size)}</span>
            </div>
          </div>
          <div class="tool-result-content" id="ocrText" style="margin-top:0.75rem;max-height:400px;overflow-y:auto;white-space:pre-wrap;font-size:0.8rem;line-height:1.5;">${escapeHtml(allText)}</div>
        </div>`;

      $('copyOcrBtn').addEventListener('click', () => {
        navigator.clipboard.writeText(allText).then(() => {
          $('copyOcrBtn').classList.add('copied');
          $('copyOcrBtn').textContent = '✅ Kopyalandı';
          setTimeout(() => {
            $('copyOcrBtn').classList.remove('copied');
            $('copyOcrBtn').textContent = '📋 Kopyala';
          }, 2000);
        });
      });

      $('downloadOcrBtn').addEventListener('click', () => {
        const blob = new Blob([allText], { type: 'text/plain;charset=utf-8' });
        downloadBlob(blob, files[0].name.replace('.pdf', '_metin.txt'));
        showToast('📥 Metin dosyası indiriliyor...');
      });

    } catch (err) {
      showProgress(false);
      showToast('❌ Hata: ' + err.message, true);
    }
  });
}

// ═══════════════════════════════════════════════════════════
// VIDEO TOOL RENDERERS
// ═══════════════════════════════════════════════════════════

// --- YENİ YTDLP BACKEND ENTEGRASYONU ---
// NOT: API'yi render.com'da yayınladıktan sonra bu URL'yi kendi adresinizle değiştirin!
// Örnek: const BACKEND_URL = 'https://sizin-api-adresiniz.onrender.com/api/download';
const BACKEND_URL = 'https://yt-sunucu.onrender.com/api/download'; 

async function cobaltDownload(mediaUrl, options = {}) {
  try {
    const isAudio = options.downloadMode === 'audio' ? 'true' : 'false';
    const apiUrl = `${BACKEND_URL}?url=${encodeURIComponent(mediaUrl)}&isAudioOnly=${isAudio}`;
    
    // API adresi zaten dosyayı döndürdüğü için direkt bu linki tarayıcıya açtırıyoruz
    return { success: true, url: apiUrl, filename: null };
  } catch (e) {
    return { success: false };
  }
}

function renderVideoDownload(workspace) {
  workspace.innerHTML = `
    <div class="tool-input-group">
      <label class="tool-label">🔗 Video URL'si</label>
      <input type="url" class="tool-input" id="videoUrl" placeholder="https://www.youtube.com/watch?v=...">
    </div>
    <div class="tool-input-group">
      <label class="tool-label">📐 Kalite</label>
      <select class="tool-select" id="videoQuality">
        <option value="1080">1080p (Full HD)</option>
        <option value="720" selected>720p (HD)</option>
        <option value="480">480p</option>
        <option value="360">360p</option>
      </select>
    </div>
    <div class="info-card warning">
      <span class="info-icon">⚠️</span>
      <p>Twitter, Instagram, TikTok ve diğer platformlardan video indirme. <br><small style="color:#f87171;">Not: Sunucu kısıtlamaları nedeniyle YouTube indirmeleri şu an desteklenmemektedir.</small></p>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="downloadBtn2" disabled>⬇️ Video İndir</button>
    </div>
    <div id="videoResult"></div>`;

  $('videoUrl').addEventListener('input', () => {
    $('downloadBtn2').disabled = !$('videoUrl').value.trim();
  });

  $('downloadBtn2').addEventListener('click', async () => {
    const url = $('videoUrl').value.trim();
    if (!url) return;

    const quality = $('videoQuality').value;
    const btn = $('downloadBtn2');
    btn.disabled = true;
    btn.innerHTML = '⏳ İndirme bağlantısı hazırlanıyor...';

    $('videoResult').innerHTML = `
      <div class="info-card" style="margin-top:1rem;">
        <span class="info-icon">⏳</span>
        <p>Sunuculara bağlanılıyor, lütfen bekleyin...</p>
      </div>`;

    try {
      const result = await cobaltDownload(url, { videoQuality: quality, downloadMode: 'auto' });

      if (result.success) {
        // Open download URL
        const a = document.createElement('a');
        a.href = result.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        if (result.filename) a.download = result.filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        $('videoResult').innerHTML = `
          <div class="tool-result" style="margin-top:1rem;">
            <div class="tool-result-header">
              <span class="tool-result-title">✅ İndirme Başlatıldı</span>
            </div>
            <div class="tool-result-content" style="margin-top:0.5rem;">
              <p style="font-size:0.85rem;">İndirme başlatıldı. Eğer başlamadıysa aşağıdaki bağlantıya tıklayın:</p>
              <a href="${result.url}" target="_blank" rel="noopener" style="color:#a78bfa;word-break:break-all;font-size:0.8rem;">📥 İndirme Bağlantısı</a>
            </div>
          </div>`;
        showToast('✅ Video indirme başlatıldı!');
      } else {
        $('videoResult').innerHTML = `
          <div class="info-card warning" style="margin-top:1rem;">
            <span class="info-icon">⚠️</span>
            <p>İndirme başarısız oldu. Sunucunuzun (Render.com) aktif olduğundan ve desteklenen bir link girdiğinizden emin olun.</p>
          </div>`;
        showToast('❌ İndirme başarısız oldu', true);
      }
    } catch (err) {
      $('videoResult').innerHTML = `
        <div class="info-card warning" style="margin-top:1rem;">
          <span class="info-icon">⚠️</span>
          <p>Sunucuya bağlanılamadı. Lütfen API sunucunuzun çalışır durumda olduğunu kontrol edin.</p>
        </div>`;
      showToast('❌ Bağlantı hatası', true);
    } finally {
      btn.disabled = false;
      btn.innerHTML = '⬇️ Video İndir';
    }
  });
}

function renderAudioDownload(workspace) {
  workspace.innerHTML = `
    <div class="tool-input-group">
      <label class="tool-label">🔗 Video URL'si</label>
      <input type="url" class="tool-input" id="audioUrl" placeholder="https://www.youtube.com/watch?v=...">
    </div>
    <div class="tool-input-group">
      <label class="tool-label">🎵 Ses Formatı</label>
      <select class="tool-select" id="audioFormat">
        <option value="mp3" selected>MP3</option>
        <option value="ogg">OGG</option>
        <option value="wav">WAV</option>
        <option value="opus">OPUS</option>
        <option value="best">En İyi Kalite</option>
      </select>
    </div>
    <div class="info-card warning">
      <span class="info-icon">⚠️</span>
      <p>Desteklenen platformlardan videonun sesini MP3 olarak doğrudan indirin. <br><small style="color:#f87171;">Not: Sunucu kısıtlamaları nedeniyle YouTube desteklenmemektedir.</small></p>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="downloadBtn2" disabled>🎵 Ses İndir</button>
    </div>
    <div id="audioResult"></div>`;

  $('audioUrl').addEventListener('input', () => {
    $('downloadBtn2').disabled = !$('audioUrl').value.trim();
  });

  $('downloadBtn2').addEventListener('click', async () => {
    const url = $('audioUrl').value.trim();
    if (!url) return;

    const format = $('audioFormat').value;
    const btn = $('downloadBtn2');
    btn.disabled = true;
    btn.innerHTML = '⏳ Ses indirme bağlantısı hazırlanıyor...';

    $('audioResult').innerHTML = `
      <div class="info-card" style="margin-top:1rem;">
        <span class="info-icon">⏳</span>
        <p>Sunuculara bağlanılıyor, lütfen bekleyin...</p>
      </div>`;

    try {
      const result = await cobaltDownload(url, { audioFormat: format, downloadMode: 'audio' });

      if (result.success) {
        const a = document.createElement('a');
        a.href = result.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        if (result.filename) a.download = result.filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        $('audioResult').innerHTML = `
          <div class="tool-result" style="margin-top:1rem;">
            <div class="tool-result-header">
              <span class="tool-result-title">✅ Ses İndirme Başlatıldı</span>
            </div>
            <div class="tool-result-content" style="margin-top:0.5rem;">
              <p style="font-size:0.85rem;">İndirme başlatıldı. Eğer başlamadıysa aşağıdaki bağlantıya tıklayın:</p>
              <a href="${result.url}" target="_blank" rel="noopener" style="color:#a78bfa;word-break:break-all;font-size:0.8rem;">📥 İndirme Bağlantısı</a>
            </div>
          </div>`;
        showToast('✅ Ses indirme başlatıldı!');
      } else {
        $('audioResult').innerHTML = `
          <div class="info-card warning" style="margin-top:1rem;">
            <span class="info-icon">⚠️</span>
            <p>İndirme başarısız oldu. Sunucunuzun (Render.com) aktif olduğundan ve desteklenen bir link girdiğinizden emin olun.</p>
          </div>`;
        showToast('❌ İndirme başarısız oldu', true);
      }
    } catch (err) {
      $('audioResult').innerHTML = `
        <div class="info-card warning" style="margin-top:1rem;">
          <span class="info-icon">⚠️</span>
          <p>Sunucuya bağlanılamadı. Lütfen API sunucunuzun çalışır durumda olduğunu kontrol edin.</p>
        </div>`;
      showToast('❌ Bağlantı hatası', true);
    } finally {
      btn.disabled = false;
      btn.innerHTML = '🎵 Ses İndir';
    }
  });
}

function renderVideoConvert(workspace) {
  workspace.innerHTML = `<div id="fileUploadContainer"></div>
    <div class="tool-input-group" style="margin-top:1rem;">
      <label class="tool-label">🔄 Hedef Format</label>
      <select class="tool-select" id="videoFormat">
        <option value="mp4">MP4</option>
        <option value="webm">WEBM</option>
        <option value="avi">AVI</option>
        <option value="mov">MOV</option>
        <option value="mkv">MKV</option>
      </select>
    </div>
    <div class="info-card">
      <span class="info-icon">💡</span>
      <p>Video formatı tarayıcıda MediaRecorder API ile dönüştürülür. Tam format desteği için masaüstünde <strong>FFmpeg</strong> kullanın: <code>ffmpeg -i input.avi output.mp4</code></p>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="convertVideoBtn" disabled>🔄 Dönüştür</button>
    </div>`;

  const uploader = createFileUploadUI($('fileUploadContainer'), {
    accept: 'video/*',
    multiple: false,
    icon: '🎥',
    title: 'Video Seçin',
    subtitle: 'Dönüştürmek istediğiniz videoyu seçin',
    formats: ['MP4', 'WEBM', 'AVI', 'MOV'],
    onFiles: (files) => { $('convertVideoBtn').disabled = files.length === 0; }
  });

  $('convertVideoBtn').addEventListener('click', async () => {
    const files = uploader.getFiles();
    if (files.length === 0) return;
    const format = $('videoFormat').value;

    if (format === 'mp4' || format === 'webm') {
      showProgress(true);
      updateProgress(20, 'Video dönüştürülüyor...', 'Lütfen bekleyin');

      try {
        const blob = files[0];
        // For browser-supported conversions, we can re-encode using a video element + canvas + MediaRecorder
        const videoUrl = URL.createObjectURL(blob);
        const video = document.createElement('video');
        video.src = videoUrl;
        video.muted = true;

        await new Promise((res, rej) => { video.onloadedmetadata = res; video.onerror = rej; });

        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');

        const mimeType = format === 'webm' ? 'video/webm;codecs=vp8' : 'video/mp4';
        let stream;
        try {
          stream = canvas.captureStream(30);
        } catch(e) {
          showProgress(false);
          showToast('⚠️ Tarayıcınız bu formatı desteklemiyor. FFmpeg kullanın.', true);
          return;
        }

        // Add audio track if exists
        try {
          const audioCtx = new AudioContext();
          const source = audioCtx.createMediaElementSource(video);
          const dest = audioCtx.createMediaStreamDestination();
          source.connect(dest);
          source.connect(audioCtx.destination);
          dest.stream.getAudioTracks().forEach(t => stream.addTrack(t));
        } catch(e) { /* no audio */ }

        let recorder;
        try {
          recorder = new MediaRecorder(stream, { mimeType });
        } catch(e) {
          showProgress(false);
          showToast('⚠️ Bu format tarayıcıda desteklenmiyor. FFmpeg kullanın.', true);
          return;
        }

        const chunks = [];
        recorder.ondataavailable = e => chunks.push(e.data);

        recorder.onstop = () => {
          const outBlob = new Blob(chunks, { type: mimeType });
          showSuccessOverlay(outBlob, `video.${format}`, `Dönüştürüldü: ${formatFileSize(outBlob.size)}`);
          URL.revokeObjectURL(videoUrl);
        };

        recorder.start();
        video.play();

        const drawFrame = () => {
          if (video.ended || video.paused) {
            recorder.stop();
            return;
          }
          ctx.drawImage(video, 0, 0);
          updateProgress(20 + (video.currentTime / video.duration) * 70, 'Dönüştürülüyor...', `${Math.round(video.currentTime)}s / ${Math.round(video.duration)}s`);
          requestAnimationFrame(drawFrame);
        };
        drawFrame();
      } catch (err) {
        showProgress(false);
        showToast('❌ Hata: ' + err.message, true);
      }
    } else {
      showToast('⚠️ Bu format için FFmpeg kullanın: ffmpeg -i input output.' + format, true);
    }
  });
}

function renderVideoCompress(workspace) {
  workspace.innerHTML = `<div id="fileUploadContainer"></div>
    <div class="tool-input-group" style="margin-top:1rem;">
      <label class="tool-label">📦 Sıkıştırma Seviyesi</label>
      <select class="tool-select" id="compressLevel">
        <option value="high">Yüksek Kalite (az sıkıştırma)</option>
        <option value="medium" selected>Orta Kalite (önerilen)</option>
        <option value="low">Düşük Kalite (çok sıkıştırma)</option>
      </select>
    </div>
    <div class="info-card">
      <span class="info-icon">💡</span>
      <p>Video sıkıştırma tarayıcıda MediaRecorder ile yapılır. Daha iyi sonuçlar için: <code>ffmpeg -i input.mp4 -crf 28 output.mp4</code></p>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="compressVideoBtn" disabled>📦 Sıkıştır</button>
    </div>`;

  const uploader = createFileUploadUI($('fileUploadContainer'), {
    accept: 'video/*',
    multiple: false,
    icon: '📦',
    title: 'Video Seçin',
    subtitle: 'Sıkıştırmak istediğiniz videoyu seçin',
    formats: ['MP4', 'WEBM', 'AVI', 'MOV'],
    onFiles: (files) => { $('compressVideoBtn').disabled = files.length === 0; }
  });

  $('compressVideoBtn').addEventListener('click', async () => {
    const files = uploader.getFiles();
    if (files.length === 0) return;

    const level = $('compressLevel').value;
    const bitrates = { high: 2500000, medium: 1000000, low: 500000 };

    showProgress(true);
    updateProgress(10, 'Video sıkıştırılıyor...', 'Video yükleniyor');

    try {
      const videoUrl = URL.createObjectURL(files[0]);
      const video = document.createElement('video');
      video.src = videoUrl;
      video.muted = true;
      await new Promise((res, rej) => { video.onloadedmetadata = res; video.onerror = rej; });

      const scale = level === 'low' ? 0.5 : level === 'medium' ? 0.75 : 1;
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(video.videoWidth * scale);
      canvas.height = Math.round(video.videoHeight * scale);
      const ctx = canvas.getContext('2d');

      const stream = canvas.captureStream(24);
      const recorder = new MediaRecorder(stream, {
        mimeType: 'video/webm;codecs=vp8',
        videoBitsPerSecond: bitrates[level]
      });

      const chunks = [];
      recorder.ondataavailable = e => chunks.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const savedPct = ((files[0].size - blob.size) / files[0].size * 100).toFixed(1);
        showSuccessOverlay(blob, 'sikistirilmis.webm',
          `Orijinal: ${formatFileSize(files[0].size)} → ${formatFileSize(blob.size)} (${savedPct}% küçüldü)`);
        URL.revokeObjectURL(videoUrl);
      };

      recorder.start();
      video.play();

      const drawFrame = () => {
        if (video.ended || video.paused) { recorder.stop(); return; }
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        updateProgress(10 + (video.currentTime / video.duration) * 85, 'Sıkıştırılıyor...', `${Math.round(video.currentTime)}s / ${Math.round(video.duration)}s`);
        requestAnimationFrame(drawFrame);
      };
      drawFrame();
    } catch(err) {
      showProgress(false);
      showToast('❌ Hata: ' + err.message, true);
    }
  });
}

function renderVideoExtractAudio(workspace) {
  workspace.innerHTML = `<div id="fileUploadContainer"></div>
    <div class="info-card">
      <span class="info-icon">💡</span>
      <p>Videodan ses dosyasını ayırır. Tarayıcıda Web Audio API kullanılarak ses çıkarılır. Tam destek için: <code>ffmpeg -i video.mp4 -vn audio.mp3</code></p>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="extractBtn" disabled>🎧 Ses Ayır</button>
    </div>`;

  const uploader = createFileUploadUI($('fileUploadContainer'), {
    accept: 'video/*',
    multiple: false,
    icon: '🎧',
    title: 'Video Seçin',
    subtitle: 'Ses çıkarmak istediğiniz videoyu seçin',
    formats: ['MP4', 'WEBM', 'MOV'],
    onFiles: (files) => { $('extractBtn').disabled = files.length === 0; }
  });

  $('extractBtn').addEventListener('click', async () => {
    const files = uploader.getFiles();
    if (files.length === 0) return;

    showProgress(true);
    updateProgress(20, 'Ses ayırılıyor...', 'Video işleniyor');

    try {
      const videoUrl = URL.createObjectURL(files[0]);
      const video = document.createElement('video');
      video.src = videoUrl;

      await new Promise((res, rej) => { video.onloadedmetadata = res; video.onerror = rej; });

      const audioCtx = new AudioContext();
      const source = audioCtx.createMediaElementSource(video);
      const dest = audioCtx.createMediaStreamDestination();
      source.connect(dest);

      const recorder = new MediaRecorder(dest.stream, { mimeType: 'audio/webm;codecs=opus' });
      const chunks = [];
      recorder.ondataavailable = e => chunks.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/webm' });
        showSuccessOverlay(blob, 'ses.webm', `Ses çıkarıldı: ${formatFileSize(blob.size)}`);
        URL.revokeObjectURL(videoUrl);
      };

      recorder.start();
      video.play();

      video.onended = () => recorder.stop();

      const updateProgressLoop = () => {
        if (video.ended) return;
        updateProgress(20 + (video.currentTime / video.duration) * 75, 'Ses ayırılıyor...', `${Math.round(video.currentTime)}s / ${Math.round(video.duration)}s`);
        requestAnimationFrame(updateProgressLoop);
      };
      updateProgressLoop();
    } catch(err) {
      showProgress(false);
      showToast('❌ Hata: ' + err.message, true);
    }
  });
}

function renderVideoScreenshot(workspace) {
  workspace.innerHTML = `<div id="fileUploadContainer"></div>
    <div id="screenshotControls" style="display:none;margin-top:1rem;">
      <div class="tool-input-group">
        <label class="tool-label">⏱️ Zaman (saniye)</label>
        <div class="tool-range-container">
          <input type="range" class="tool-range" id="screenshotTime" min="0" max="100" value="0" step="0.1">
          <span class="tool-range-value" id="screenshotTimeVal">0s</span>
        </div>
      </div>
      <div class="canvas-preview" id="screenshotPreview"></div>
      <div class="tool-btn-row">
        <button class="tool-btn tool-btn-primary" id="captureBtn">📸 Yakala ve İndir</button>
      </div>
    </div>`;

  let videoEl = null;
  let canvasEl = null;

  const uploader = createFileUploadUI($('fileUploadContainer'), {
    accept: 'video/*',
    multiple: false,
    icon: '📸',
    title: 'Video Seçin',
    subtitle: 'Ekran görüntüsü almak istediğiniz videoyu seçin',
    formats: ['MP4', 'WEBM', 'MOV'],
    onFiles: async (files) => {
      if (files.length === 0) {
        $('screenshotControls').style.display = 'none';
        return;
      }

      const url = URL.createObjectURL(files[0]);
      videoEl = document.createElement('video');
      videoEl.src = url;
      videoEl.muted = true;

      await new Promise((res, rej) => { videoEl.onloadedmetadata = res; videoEl.onerror = rej; });

      const slider = $('screenshotTime');
      slider.max = videoEl.duration;
      slider.value = 0;
      $('screenshotTimeVal').textContent = '0s';

      canvasEl = document.createElement('canvas');
      canvasEl.width = videoEl.videoWidth;
      canvasEl.height = videoEl.videoHeight;
      $('screenshotPreview').innerHTML = '';
      $('screenshotPreview').appendChild(canvasEl);

      // Draw first frame
      videoEl.currentTime = 0;
      videoEl.onseeked = () => {
        canvasEl.getContext('2d').drawImage(videoEl, 0, 0);
      };

      $('screenshotControls').style.display = 'block';

      slider.addEventListener('input', () => {
        const t = parseFloat(slider.value);
        $('screenshotTimeVal').textContent = t.toFixed(1) + 's';
        videoEl.currentTime = t;
      });
    }
  });

  document.addEventListener('click', e => {
    if (e.target.id === 'captureBtn' && canvasEl) {
      canvasEl.toBlob(blob => {
        downloadBlob(blob, 'screenshot.jpg');
        showToast('📸 Ekran görüntüsü indirildi');
      }, 'image/jpeg', 0.95);
    }
  });
}

function renderVideoMerge(workspace) {
  workspace.innerHTML = `<div id="fileUploadContainer"></div>
    <div class="info-card">
      <span class="info-icon">💡</span>
      <p>Videolar tarayıcınızda gerçek zamanlı işlenerek birleştirilir (ffmpeg gerektirmez). İşlem süresi videoların toplam uzunluğu kadardır. <b>Lütfen işlem bitene kadar sekmeyi açık tutun.</b></p>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="mergeVideoBtn" disabled>📎 Videoları Birleştir</button>
    </div>`;

  let selectedFiles = [];

  createFileUploadUI($('fileUploadContainer'), {
    accept: 'video/*',
    multiple: true,
    icon: '📎',
    title: 'Videoları Seçin',
    subtitle: 'Birleştirmek istediğiniz sıraya göre videoları seçin',
    formats: ['MP4', 'WEBM', 'MOV'],
    onFiles: (files) => { 
      selectedFiles = Array.from(files);
      $('mergeVideoBtn').disabled = selectedFiles.length < 2; 
    }
  });

  $('mergeVideoBtn').addEventListener('click', async () => {
    if (selectedFiles.length < 2) return;
    
    showProgress(true);
    updateProgress(10, 'Videolar hazırlanıyor...', 'Lütfen bekleyin (İşlem videoların süresi kadar sürecektir)');

    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      const firstVideo = document.createElement('video');
      firstVideo.src = URL.createObjectURL(selectedFiles[0]);
      await new Promise(r => { firstVideo.onloadedmetadata = r; });
      
      canvas.width = firstVideo.videoWidth || 1280;
      canvas.height = firstVideo.videoHeight || 720;
      
      const stream = canvas.captureStream(30);
      
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const dest = audioCtx.createMediaStreamDestination();
      
      const tracks = [...stream.getVideoTracks(), ...dest.stream.getAudioTracks()];
      const combinedStream = new MediaStream(tracks);
      
      const recorder = new MediaRecorder(combinedStream, { mimeType: 'video/webm' });
      const chunks = [];
      recorder.ondataavailable = e => chunks.push(e.data);
      
      let currentVideoIndex = 0;
      
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        showProgress(false);
        showSuccessOverlay(blob, 'birlestirilmis_video.webm', `Videolar başarıyla birleştirildi (${formatFileSize(blob.size)})`);
      };

      recorder.start();

      const playNextVideo = async () => {
        if (currentVideoIndex >= selectedFiles.length) {
          recorder.stop();
          return;
        }

        updateProgress(20 + (currentVideoIndex / selectedFiles.length) * 70, `${currentVideoIndex + 1}. Video İşleniyor...`, selectedFiles[currentVideoIndex].name);

        const video = document.createElement('video');
        video.src = URL.createObjectURL(selectedFiles[currentVideoIndex]);
        video.muted = true; // Video element itself is muted
        video.crossOrigin = 'anonymous';
        
        await new Promise(r => { video.onloadedmetadata = r; });
        
        const source = audioCtx.createMediaElementSource(video);
        source.connect(dest);
        
        video.play();
        
        const drawFrame = () => {
          if (video.paused || video.ended) return;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          // Scale to fit
          const hRatio = canvas.width / video.videoWidth;
          const vRatio = canvas.height / video.videoHeight;
          const ratio  = Math.min(hRatio, vRatio);
          const centerShift_x = (canvas.width - video.videoWidth*ratio) / 2;
          const centerShift_y = (canvas.height - video.videoHeight*ratio) / 2;  
          ctx.drawImage(video, 0,0, video.videoWidth, video.videoHeight, centerShift_x,centerShift_y,video.videoWidth*ratio, video.videoHeight*ratio);
          requestAnimationFrame(drawFrame);
        };
        
        video.addEventListener('play', () => drawFrame());

        video.addEventListener('ended', () => {
          source.disconnect();
          URL.revokeObjectURL(video.src);
          currentVideoIndex++;
          playNextVideo();
        });
      };

      audioCtx.resume().then(() => playNextVideo());

    } catch (err) {
      showProgress(false);
      showToast('❌ Birleştirme hatası: ' + err.message, true);
    }
  });
}

function renderVideoTrim(workspace) {
  workspace.innerHTML = `<div id="fileUploadContainer"></div>
    <div id="trimControls" style="display:none;margin-top:1rem;">
      <div class="tool-input-group">
        <label class="tool-label">⏱️ Başlangıç (saniye)</label>
        <input type="number" class="tool-input" id="trimStart" value="0" min="0" step="0.1">
      </div>
      <div class="tool-input-group">
        <label class="tool-label">⏱️ Bitiş (saniye)</label>
        <input type="number" class="tool-input" id="trimEnd" value="0" min="0" step="0.1">
      </div>
    </div>
    <div class="info-card">
      <span class="info-icon">💡</span>
      <p>Video kırpma MediaRecorder API ile yapılır. Başlangıç ve bitiş zamanlarını saniye cinsinden girin.</p>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="trimBtn" disabled>✂️ Videoyu Kırp</button>
    </div>`;

  let videoDuration = 0;

  const uploader = createFileUploadUI($('fileUploadContainer'), {
    accept: 'video/*',
    multiple: false,
    icon: '✂️',
    title: 'Video Seçin',
    subtitle: 'Kırpmak istediğiniz videoyu seçin',
    formats: ['MP4', 'WEBM', 'MOV'],
    onFiles: async (files) => {
      if (files.length > 0) {
        const video = document.createElement('video');
        video.src = URL.createObjectURL(files[0]);
        await new Promise(r => { video.onloadedmetadata = r; });
        videoDuration = video.duration;
        $('trimEnd').value = Math.round(videoDuration * 10) / 10;
        $('trimEnd').max = videoDuration;
        $('trimStart').max = videoDuration;
        $('trimControls').style.display = 'block';
        $('trimBtn').disabled = false;
      } else {
        $('trimControls').style.display = 'none';
        $('trimBtn').disabled = true;
      }
    }
  });

  $('trimBtn').addEventListener('click', async () => {
    const files = uploader.getFiles();
    if (files.length === 0) return;

    const start = parseFloat($('trimStart').value);
    const end = parseFloat($('trimEnd').value);

    if (start >= end) { showToast('⚠️ Başlangıç bitiş zamanından küçük olmalı', true); return; }

    showProgress(true);
    updateProgress(10, 'Video kırpılıyor...', '');

    try {
      const videoUrl = URL.createObjectURL(files[0]);
      const video = document.createElement('video');
      video.src = videoUrl;
      video.muted = true;
      await new Promise(r => { video.onloadedmetadata = r; });

      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');

      const stream = canvas.captureStream(30);

      try {
        const audioCtx = new AudioContext();
        const src = audioCtx.createMediaElementSource(video);
        const dest = audioCtx.createMediaStreamDestination();
        src.connect(dest);
        dest.stream.getAudioTracks().forEach(t => stream.addTrack(t));
      } catch(e) {}

      const recorder = new MediaRecorder(stream, { mimeType: 'video/webm;codecs=vp8' });
      const chunks = [];
      recorder.ondataavailable = e => chunks.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        showSuccessOverlay(blob, 'kirpilmis.webm', `${(end - start).toFixed(1)}s video kırpıldı (${formatFileSize(blob.size)})`);
        URL.revokeObjectURL(videoUrl);
      };

      video.currentTime = start;
      await new Promise(r => { video.onseeked = r; });

      recorder.start();
      video.play();

      const drawFrame = () => {
        if (video.currentTime >= end || video.ended) { video.pause(); recorder.stop(); return; }
        ctx.drawImage(video, 0, 0);
        updateProgress(10 + ((video.currentTime - start) / (end - start)) * 85, 'Kırpılıyor...', `${(video.currentTime - start).toFixed(1)}s / ${(end - start).toFixed(1)}s`);
        requestAnimationFrame(drawFrame);
      };
      drawFrame();
    } catch(err) {
      showProgress(false);
      showToast('❌ Hata: ' + err.message, true);
    }
  });
}

// ═══════════════════════════════════════════════════════════
// IMAGE TOOL RENDERERS
// ═══════════════════════════════════════════════════════════

function renderImgRemoveBg(workspace) {
  workspace.innerHTML = `<div id="fileUploadContainer"></div>
    <div class="info-card">
      <span class="info-icon">💡</span>
      <p>Basit renk tabanlı arka plan kaldırma. Beyaz veya tek renkli arka planlar için en iyi sonucu verir. Canvas API ile işlenir.</p>
    </div>
    <div class="tool-input-group" style="margin-top:1rem;">
      <label class="tool-label">Eşik Değeri (hassasiyet)</label>
      <div class="tool-range-container">
        <input type="range" class="tool-range" id="bgThreshold" min="10" max="100" value="30">
        <span class="tool-range-value" id="bgThresholdVal">30</span>
      </div>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="removeBgBtn" disabled>✨ Arka Planı Kaldır</button>
    </div>
    <div id="bgResult"></div>`;

  $('bgThreshold').addEventListener('input', e => {
    $('bgThresholdVal').textContent = e.target.value;
  });

  const uploader = createFileUploadUI($('fileUploadContainer'), {
    accept: 'image/*',
    multiple: false,
    icon: '✨',
    title: 'Resim Seçin',
    subtitle: 'Arka planını kaldırmak istediğiniz resmi seçin',
    formats: ['JPG', 'PNG', 'WEBP'],
    onFiles: (files) => { $('removeBgBtn').disabled = files.length === 0; }
  });

  $('removeBgBtn').addEventListener('click', async () => {
    const files = uploader.getFiles();
    if (files.length === 0) return;

    showProgress(true);
    updateProgress(30, 'Arka plan kaldırılıyor...', '');

    try {
      const dataUrl = await readFileAsDataURL(files[0]);
      const img = await loadImage(dataUrl);
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      const threshold = parseInt($('bgThreshold').value);

      // Get background color from top-left pixel
      const bgR = data[0], bgG = data[1], bgB = data[2];

      for (let i = 0; i < data.length; i += 4) {
        const diff = Math.abs(data[i] - bgR) + Math.abs(data[i+1] - bgG) + Math.abs(data[i+2] - bgB);
        if (diff < threshold * 3) {
          data[i+3] = 0; // Make transparent
        }
      }

      ctx.putImageData(imageData, 0, 0);

      updateProgress(90, 'Kaydediliyor...', '');

      canvas.toBlob(blob => {
        const resultDiv = $('bgResult');
        resultDiv.innerHTML = `<div class="canvas-preview"><img src="${URL.createObjectURL(blob)}" alt="Sonuç"></div>`;
        showSuccessOverlay(blob, 'arkaplan_kaldirilmis.png', `Arka plan kaldırıldı (${formatFileSize(blob.size)})`);
      }, 'image/png');
    } catch(err) {
      showProgress(false);
      showToast('❌ Hata: ' + err.message, true);
    }
  });
}

function renderImgCompress(workspace) {
  workspace.innerHTML = `<div id="fileUploadContainer"></div>
    <div class="tool-input-group" style="margin-top:1rem;">
      <label class="tool-label">📦 Kalite</label>
      <div class="tool-range-container">
        <input type="range" class="tool-range" id="imgQuality" min="10" max="100" value="70">
        <span class="tool-range-value" id="imgQualityVal">70%</span>
      </div>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="compressImgBtn" disabled>📦 Sıkıştır</button>
    </div>`;

  $('imgQuality').addEventListener('input', e => {
    $('imgQualityVal').textContent = e.target.value + '%';
  });

  const uploader = createFileUploadUI($('fileUploadContainer'), {
    accept: 'image/*',
    multiple: true,
    icon: '📦',
    title: 'Resim Seçin',
    subtitle: 'Sıkıştırmak istediğiniz resimleri seçin',
    formats: ['JPG', 'PNG', 'WEBP'],
    onFiles: (files) => { $('compressImgBtn').disabled = files.length === 0; }
  });

  $('compressImgBtn').addEventListener('click', async () => {
    const files = uploader.getFiles();
    if (files.length === 0) return;

    const quality = parseInt($('imgQuality').value) / 100;

    if (files.length === 1) {
      showProgress(true);
      updateProgress(30, 'Resim sıkıştırılıyor...', files[0].name);

      try {
        const dataUrl = await readFileAsDataURL(files[0]);
        const img = await loadImage(dataUrl);
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        canvas.getContext('2d').drawImage(img, 0, 0);

        canvas.toBlob(blob => {
          const savedPct = ((files[0].size - blob.size) / files[0].size * 100).toFixed(1);
          showSuccessOverlay(blob, 'sikistirilmis.jpg',
            `Orijinal: ${formatFileSize(files[0].size)} → ${formatFileSize(blob.size)} (${savedPct}% küçüldü)`);
        }, 'image/jpeg', quality);
      } catch(err) {
        showProgress(false);
        showToast('❌ Hata: ' + err.message, true);
      }
    } else {
      // Multiple files: compress and download each
      showProgress(true);
      for (let i = 0; i < files.length; i++) {
        updateProgress((i / files.length) * 90, `Sıkıştırılıyor... (${i + 1}/${files.length})`, files[i].name);

        try {
          const dataUrl = await readFileAsDataURL(files[i]);
          const img = await loadImage(dataUrl);
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          canvas.getContext('2d').drawImage(img, 0, 0);

          await new Promise(resolve => {
            canvas.toBlob(blob => {
              downloadBlob(blob, files[i].name.replace(/\.[^.]+$/, '_compressed.jpg'));
              resolve();
            }, 'image/jpeg', quality);
          });
          await sleep(100);
        } catch(err) {
          showToast(`⚠️ ${files[i].name} sıkıştırılamadı`, true);
        }
      }
      showProgress(false);
      showToast(`✅ ${files.length} resim sıkıştırıldı ve indirildi`);
    }
  });
}

function renderImgJpgPng(workspace) {
  renderImgFormatConverter(workspace, 'JPG', 'PNG');
}

function renderImgWebpPng(workspace) {
  renderImgFormatConverter(workspace, 'WEBP', 'PNG');
}

function renderImgFormatConverter(workspace, formatA, formatB) {
  workspace.innerHTML = `<div id="fileUploadContainer"></div>
    <div class="tool-input-group" style="margin-top:1rem;">
      <label class="tool-label">🔄 Hedef Format</label>
      <select class="tool-select" id="targetFormat">
        <option value="${formatB.toLowerCase()}">${formatA} → ${formatB}</option>
        <option value="${formatA.toLowerCase()}">${formatB} → ${formatA}</option>
      </select>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="convertImgBtn" disabled>🔄 Dönüştür</button>
    </div>`;

  const uploader = createFileUploadUI($('fileUploadContainer'), {
    accept: 'image/*',
    multiple: true,
    icon: '🔄',
    title: 'Resim Seçin',
    subtitle: 'Dönüştürmek istediğiniz resimleri seçin',
    formats: [formatA, formatB],
    onFiles: (files) => { $('convertImgBtn').disabled = files.length === 0; }
  });

  $('convertImgBtn').addEventListener('click', async () => {
    const files = uploader.getFiles();
    if (files.length === 0) return;

    const target = $('targetFormat').value;
    const mimeMap = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', webp: 'image/webp' };
    const mimeType = mimeMap[target] || 'image/png';

    showProgress(true);

    for (let i = 0; i < files.length; i++) {
      updateProgress((i / files.length) * 90, `Dönüştürülüyor... (${i + 1}/${files.length})`, files[i].name);

      try {
        const dataUrl = await readFileAsDataURL(files[i]);
        const img = await loadImage(dataUrl);
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');

        if (target === 'jpg' || target === 'jpeg') {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        ctx.drawImage(img, 0, 0);

        await new Promise(resolve => {
          canvas.toBlob(blob => {
            const newName = files[i].name.replace(/\.[^.]+$/, `.${target}`);
            if (files.length === 1) {
              showSuccessOverlay(blob, newName, `Dönüştürüldü: ${formatFileSize(blob.size)}`);
            } else {
              downloadBlob(blob, newName);
            }
            resolve();
          }, mimeType, 0.92);
        });
        await sleep(50);
      } catch(err) {
        showToast(`⚠️ ${files[i].name} dönüştürülemedi`, true);
      }
    }

    if (files.length > 1) {
      showProgress(false);
      showToast(`✅ ${files.length} resim dönüştürüldü`);
    }
  });
}

function renderImgResize(workspace) {
  workspace.innerHTML = `<div id="fileUploadContainer"></div>
    <div id="resizeControls" style="display:none;margin-top:1rem;">
      <div class="tool-input-group">
        <label class="tool-label">📐 Genişlik (px)</label>
        <input type="number" class="tool-input" id="resizeWidth" placeholder="Genişlik" min="1">
      </div>
      <div class="tool-input-group">
        <label class="tool-label">📐 Yükseklik (px)</label>
        <input type="number" class="tool-input" id="resizeHeight" placeholder="Yükseklik" min="1">
      </div>
      <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1rem;">
        <input type="checkbox" id="keepRatio" checked style="accent-color:var(--accent-indigo);">
        <label for="keepRatio" style="font-size:0.78rem;color:var(--text-secondary);">En-boy oranını koru</label>
      </div>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="resizeBtn" disabled>📐 Yeniden Boyutlandır</button>
    </div>`;

  let originalWidth = 0, originalHeight = 0;

  const uploader = createFileUploadUI($('fileUploadContainer'), {
    accept: 'image/*',
    multiple: false,
    icon: '📐',
    title: 'Resim Seçin',
    subtitle: 'Boyutlandırmak istediğiniz resmi seçin',
    formats: ['JPG', 'PNG', 'WEBP'],
    onFiles: async (files) => {
      if (files.length > 0) {
        const dataUrl = await readFileAsDataURL(files[0]);
        const dims = await getImageDimensions(dataUrl);
        originalWidth = dims.width;
        originalHeight = dims.height;
        $('resizeWidth').value = dims.width;
        $('resizeHeight').value = dims.height;
        $('resizeControls').style.display = 'block';
        $('resizeBtn').disabled = false;
      } else {
        $('resizeControls').style.display = 'none';
        $('resizeBtn').disabled = true;
      }
    }
  });

  $('resizeWidth').addEventListener('input', () => {
    if ($('keepRatio').checked && originalWidth) {
      const ratio = originalHeight / originalWidth;
      $('resizeHeight').value = Math.round(parseInt($('resizeWidth').value) * ratio);
    }
  });

  $('resizeHeight').addEventListener('input', () => {
    if ($('keepRatio').checked && originalHeight) {
      const ratio = originalWidth / originalHeight;
      $('resizeWidth').value = Math.round(parseInt($('resizeHeight').value) * ratio);
    }
  });

  $('resizeBtn').addEventListener('click', async () => {
    const files = uploader.getFiles();
    if (files.length === 0) return;

    const newWidth = parseInt($('resizeWidth').value);
    const newHeight = parseInt($('resizeHeight').value);
    if (!newWidth || !newHeight) { showToast('⚠️ Boyut değerlerini girin', true); return; }

    showProgress(true);
    updateProgress(50, 'Yeniden boyutlandırılıyor...', `${newWidth}x${newHeight}`);

    try {
      const dataUrl = await readFileAsDataURL(files[0]);
      const img = await loadImage(dataUrl);
      const canvas = document.createElement('canvas');
      canvas.width = newWidth;
      canvas.height = newHeight;
      canvas.getContext('2d').drawImage(img, 0, 0, newWidth, newHeight);

      canvas.toBlob(blob => {
        showSuccessOverlay(blob, 'yeniboyut.png',
          `${originalWidth}x${originalHeight} → ${newWidth}x${newHeight} (${formatFileSize(blob.size)})`);
      }, 'image/png');
    } catch(err) {
      showProgress(false);
      showToast('❌ Hata: ' + err.message, true);
    }
  });
}

function renderImgBatch(workspace) {
  workspace.innerHTML = `<div id="fileUploadContainer"></div>
    <div class="tool-input-group" style="margin-top:1rem;">
      <label class="tool-label">🔧 İşlem Seçin</label>
      <select class="tool-select" id="batchOp">
        <option value="compress">Sıkıştır (JPEG %70)</option>
        <option value="resize50">%50 Küçült</option>
        <option value="resize25">%25 Küçült</option>
        <option value="topng">PNG'ye Dönüştür</option>
        <option value="tojpg">JPG'ye Dönüştür</option>
        <option value="towebp">WEBP'ye Dönüştür</option>
      </select>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="batchBtn" disabled>📚 Toplu İşle</button>
    </div>`;

  const uploader = createFileUploadUI($('fileUploadContainer'), {
    accept: 'image/*',
    multiple: true,
    icon: '📚',
    title: 'Resimleri Seçin',
    subtitle: 'Toplu işlemek istediğiniz resimleri seçin',
    formats: ['JPG', 'PNG', 'WEBP', 'BMP'],
    onFiles: (files) => { $('batchBtn').disabled = files.length === 0; }
  });

  $('batchBtn').addEventListener('click', async () => {
    const files = uploader.getFiles();
    if (files.length === 0) return;

    const op = $('batchOp').value;
    showProgress(true);

    for (let i = 0; i < files.length; i++) {
      updateProgress((i / files.length) * 90, `İşleniyor... (${i + 1}/${files.length})`, files[i].name);

      try {
        const dataUrl = await readFileAsDataURL(files[i]);
        const img = await loadImage(dataUrl);
        const canvas = document.createElement('canvas');

        let scale = 1;
        if (op === 'resize50') scale = 0.5;
        if (op === 'resize25') scale = 0.25;

        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext('2d');

        if (op === 'tojpg') { ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, canvas.width, canvas.height); }
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        let mimeType = 'image/png';
        let ext = 'png';
        let quality = 0.92;

        if (op === 'compress' || op === 'tojpg') { mimeType = 'image/jpeg'; ext = 'jpg'; quality = 0.7; }
        if (op === 'towebp') { mimeType = 'image/webp'; ext = 'webp'; quality = 0.85; }

        await new Promise(resolve => {
          canvas.toBlob(blob => {
            const newName = files[i].name.replace(/\.[^.]+$/, `_batch.${ext}`);
            downloadBlob(blob, newName);
            resolve();
          }, mimeType, quality);
        });
        await sleep(100);
      } catch(err) {
        showToast(`⚠️ ${files[i].name} işlenemedi`, true);
      }
    }

    showProgress(false);
    showToast(`✅ ${files.length} resim işlendi ve indirildi`);
  });
}

function renderImgRotate(workspace) {
  workspace.innerHTML = `<div id="fileUploadContainer"></div>
    <div class="tool-input-group" style="margin-top:1rem;">
      <label class="tool-label">🔄 Döndürme</label>
      <select class="tool-select" id="imgRotateAngle">
        <option value="90">90° Saat Yönünde</option>
        <option value="180">180°</option>
        <option value="270">90° Saat Yönü Tersine</option>
        <option value="flipH">Yatay Çevir</option>
        <option value="flipV">Dikey Çevir</option>
      </select>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="rotateImgBtn" disabled>🔄 Döndür</button>
    </div>`;

  const uploader = createFileUploadUI($('fileUploadContainer'), {
    accept: 'image/*',
    multiple: false,
    icon: '🔄',
    title: 'Resim Seçin',
    subtitle: 'Döndürmek istediğiniz resmi seçin',
    formats: ['JPG', 'PNG', 'WEBP'],
    onFiles: (files) => { $('rotateImgBtn').disabled = files.length === 0; }
  });

  $('rotateImgBtn').addEventListener('click', async () => {
    const files = uploader.getFiles();
    if (files.length === 0) return;

    const action = $('imgRotateAngle').value;

    showProgress(true);
    updateProgress(50, 'Resim döndürülüyor...', '');

    try {
      const dataUrl = await readFileAsDataURL(files[0]);
      const img = await loadImage(dataUrl);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (action === '90' || action === '270') {
        canvas.width = img.height;
        canvas.height = img.width;
      } else {
        canvas.width = img.width;
        canvas.height = img.height;
      }

      ctx.save();
      if (action === '90') {
        ctx.translate(canvas.width, 0);
        ctx.rotate(Math.PI / 2);
      } else if (action === '180') {
        ctx.translate(canvas.width, canvas.height);
        ctx.rotate(Math.PI);
      } else if (action === '270') {
        ctx.translate(0, canvas.height);
        ctx.rotate(-Math.PI / 2);
      } else if (action === 'flipH') {
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
      } else if (action === 'flipV') {
        ctx.translate(0, canvas.height);
        ctx.scale(1, -1);
      }
      ctx.drawImage(img, 0, 0);
      ctx.restore();

      canvas.toBlob(blob => {
        showSuccessOverlay(blob, 'dondurulmus.png', `Resim döndürüldü (${formatFileSize(blob.size)})`);
      }, 'image/png');
    } catch(err) {
      showProgress(false);
      showToast('❌ Hata: ' + err.message, true);
    }
  });
}

function renderImgWatermark(workspace) {
  workspace.innerHTML = `<div id="fileUploadContainer"></div>
    <div class="tool-input-group" style="margin-top:1rem;">
      <label class="tool-label">💧 Filigran Metni</label>
      <input type="text" class="tool-input" id="imgWatermarkText" placeholder="Filigran metni girin">
    </div>
    <div class="tool-input-group">
      <label class="tool-label">Saydamlık</label>
      <div class="tool-range-container">
        <input type="range" class="tool-range" id="imgWatermarkOpacity" min="5" max="80" value="30">
        <span class="tool-range-value" id="imgWatermarkOpacityVal">30%</span>
      </div>
    </div>
    <div class="tool-input-group">
      <label class="tool-label">Konum</label>
      <select class="tool-select" id="imgWatermarkPos">
        <option value="center">Orta</option>
        <option value="topleft">Sol Üst</option>
        <option value="topright">Sağ Üst</option>
        <option value="bottomleft">Sol Alt</option>
        <option value="bottomright">Sağ Alt</option>
        <option value="tile">Tekrarlı (Döşeme)</option>
      </select>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="imgWmBtn" disabled>💧 Filigran Ekle</button>
    </div>`;

  $('imgWatermarkOpacity').addEventListener('input', e => {
    $('imgWatermarkOpacityVal').textContent = e.target.value + '%';
  });

  const uploader = createFileUploadUI($('fileUploadContainer'), {
    accept: 'image/*',
    multiple: false,
    icon: '💧',
    title: 'Resim Seçin',
    subtitle: 'Filigran eklemek istediğiniz resmi seçin',
    formats: ['JPG', 'PNG', 'WEBP'],
    onFiles: (files) => { $('imgWmBtn').disabled = files.length === 0; }
  });

  $('imgWmBtn').addEventListener('click', async () => {
    const files = uploader.getFiles();
    const text = $('imgWatermarkText').value.trim();
    if (files.length === 0) return;
    if (!text) { showToast('⚠️ Filigran metni girin', true); return; }

    const opacity = parseInt($('imgWatermarkOpacity').value) / 100;
    const position = $('imgWatermarkPos').value;

    showProgress(true);
    updateProgress(50, 'Filigran ekleniyor...', '');

    try {
      const dataUrl = await readFileAsDataURL(files[0]);
      const img = await loadImage(dataUrl);
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      ctx.globalAlpha = opacity;
      ctx.fillStyle = '#ffffff';
      const fontSize = Math.max(16, Math.min(img.width, img.height) / 15);
      ctx.font = `bold ${fontSize}px Inter, Arial, sans-serif`;
      ctx.shadowColor = 'rgba(0,0,0,0.5)';
      ctx.shadowBlur = 4;

      const textWidth = ctx.measureText(text).width;

      if (position === 'tile') {
        for (let y = fontSize; y < img.height; y += fontSize * 4) {
          for (let x = 0; x < img.width; x += textWidth + fontSize * 3) {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(-Math.PI / 6);
            ctx.fillText(text, 0, 0);
            ctx.restore();
          }
        }
      } else {
        let x, y;
        if (position === 'center') { x = (img.width - textWidth) / 2; y = img.height / 2; }
        else if (position === 'topleft') { x = fontSize; y = fontSize * 2; }
        else if (position === 'topright') { x = img.width - textWidth - fontSize; y = fontSize * 2; }
        else if (position === 'bottomleft') { x = fontSize; y = img.height - fontSize; }
        else { x = img.width - textWidth - fontSize; y = img.height - fontSize; }
        ctx.fillText(text, x, y);
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      canvas.toBlob(blob => {
        showSuccessOverlay(blob, 'filigranli.png', `Filigran eklendi (${formatFileSize(blob.size)})`);
      }, 'image/png');
    } catch(err) {
      showProgress(false);
      showToast('❌ Hata: ' + err.message, true);
    }
  });
}

function renderQrGenerate(workspace) {
  workspace.innerHTML = `
    <div class="tool-input-group">
      <label class="tool-label">📱 QR Kod İçeriği</label>
      <input type="text" class="tool-input" id="qrText" placeholder="URL veya metin girin">
    </div>
    <div class="tool-input-group">
      <label class="tool-label">📐 Boyut (px)</label>
      <div class="tool-range-container">
        <input type="range" class="tool-range" id="qrSize" min="100" max="500" value="256">
        <span class="tool-range-value" id="qrSizeVal">256</span>
      </div>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="qrBtn">📱 QR Kod Oluştur</button>
    </div>
    <div id="qrResult"></div>`;

  $('qrSize').addEventListener('input', e => {
    $('qrSizeVal').textContent = e.target.value;
  });

  $('qrBtn').addEventListener('click', () => {
    const text = $('qrText').value.trim();
    if (!text) { showToast('⚠️ QR kod içeriği girin', true); return; }

    const size = parseInt($('qrSize').value);
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // Simple QR Code generator using Canvas
    generateQRCode(ctx, text, size);

    const resultDiv = $('qrResult');
    resultDiv.innerHTML = `<div class="canvas-preview" style="margin-top:1rem;"></div>
      <div class="tool-btn-row">
        <button class="tool-btn tool-btn-success" id="downloadQr">📥 QR Kodu İndir</button>
      </div>`;

    resultDiv.querySelector('.canvas-preview').appendChild(canvas);

    $('downloadQr').addEventListener('click', () => {
      canvas.toBlob(blob => {
        downloadBlob(blob, 'qrcode.png');
        showToast('📥 QR kod indirildi');
      }, 'image/png');
    });
  });
}

// Simple QR code generator using Canvas (basic version)
function generateQRCode(ctx, text, size) {
  // This is a simplified QR code - creates a visual representation
  // For production, you'd use a library like qrcode.js
  const moduleCount = Math.max(21, Math.min(41, 21 + Math.floor(text.length / 10) * 4));
  const moduleSize = size / moduleCount;

  // White background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, size, size);

  // Generate pseudo-random pattern based on text
  ctx.fillStyle = '#000000';

  // Finder patterns (3 corners)
  drawFinderPattern(ctx, 0, 0, moduleSize);
  drawFinderPattern(ctx, (moduleCount - 7) * moduleSize, 0, moduleSize);
  drawFinderPattern(ctx, 0, (moduleCount - 7) * moduleSize, moduleSize);

  // Data modules (simplified - not actual QR encoding)
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = ((hash << 5) - hash + text.charCodeAt(i)) | 0;
  }

  for (let r = 0; r < moduleCount; r++) {
    for (let c = 0; c < moduleCount; c++) {
      // Skip finder pattern areas
      if ((r < 8 && c < 8) || (r < 8 && c >= moduleCount - 8) || (r >= moduleCount - 8 && c < 8)) continue;

      // Generate deterministic pattern from text
      const val = Math.abs((hash * (r * moduleCount + c + 1) * 31) % 100);
      if (val < 45) {
        ctx.fillRect(c * moduleSize, r * moduleSize, moduleSize, moduleSize);
      }
    }
  }

  // Timing patterns
  for (let i = 8; i < moduleCount - 8; i++) {
    if (i % 2 === 0) {
      ctx.fillRect(i * moduleSize, 6 * moduleSize, moduleSize, moduleSize);
      ctx.fillRect(6 * moduleSize, i * moduleSize, moduleSize, moduleSize);
    }
  }
}

function drawFinderPattern(ctx, x, y, moduleSize) {
  // Outer border
  ctx.fillStyle = '#000000';
  ctx.fillRect(x, y, moduleSize * 7, moduleSize * 7);
  // Inner white
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(x + moduleSize, y + moduleSize, moduleSize * 5, moduleSize * 5);
  // Inner black
  ctx.fillStyle = '#000000';
  ctx.fillRect(x + moduleSize * 2, y + moduleSize * 2, moduleSize * 3, moduleSize * 3);
}

function renderBarcodeGenerate(workspace) {
  workspace.innerHTML = `
    <div class="tool-input-group">
      <label class="tool-label">📊 Barkod İçeriği</label>
      <input type="text" class="tool-input" id="barcodeText" placeholder="Sayısal veya metin girin">
    </div>
    <div class="tool-input-group">
      <label class="tool-label">Barkod Türü</label>
      <select class="tool-select" id="barcodeType">
        <option value="code128">Code 128</option>
        <option value="code39">Code 39</option>
      </select>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="barcodeBtn">📊 Barkod Oluştur</button>
    </div>
    <div id="barcodeResult"></div>`;

  $('barcodeBtn').addEventListener('click', () => {
    const text = $('barcodeText').value.trim();
    if (!text) { showToast('⚠️ Barkod içeriği girin', true); return; }

    const canvas = document.createElement('canvas');
    const barWidth = 2;
    const height = 80;
    const padding = 20;

    // Generate Code 128 style barcode
    const bars = generateBarcode(text);
    canvas.width = bars.length * barWidth + padding * 2;
    canvas.height = height + padding * 2 + 20;
    const ctx = canvas.getContext('2d');

    // White background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw bars
    ctx.fillStyle = '#000000';
    for (let i = 0; i < bars.length; i++) {
      if (bars[i]) {
        ctx.fillRect(padding + i * barWidth, padding, barWidth, height);
      }
    }

    // Draw text below
    ctx.font = '12px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(text, canvas.width / 2, height + padding + 16);

    const resultDiv = $('barcodeResult');
    resultDiv.innerHTML = `<div class="canvas-preview" style="margin-top:1rem;background:#fff;"></div>
      <div class="tool-btn-row">
        <button class="tool-btn tool-btn-success" id="downloadBarcode">📥 Barkod İndir</button>
      </div>`;

    resultDiv.querySelector('.canvas-preview').appendChild(canvas);

    $('downloadBarcode').addEventListener('click', () => {
      canvas.toBlob(blob => {
        downloadBlob(blob, 'barcode.png');
        showToast('📥 Barkod indirildi');
      }, 'image/png');
    });
  });
}

function generateBarcode(text) {
  // Simplified Code 128 style barcode
  const bars = [];
  // Start pattern
  bars.push(1,1,0,1,0,0,1,0,0,1,1);

  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    // Generate a deterministic bar pattern for each character
    for (let b = 0; b < 11; b++) {
      bars.push((code >> (b % 7)) & 1);
    }
    bars.push(0); // separator
  }

  // Stop pattern
  bars.push(1,1,0,0,0,1,1,1,0,1,0,1,1);
  return bars;
}

// ═══════════════════════════════════════════════════════════
// TEXT TOOL RENDERERS
// ═══════════════════════════════════════════════════════════

function renderTextUppercase(workspace) {
  workspace.innerHTML = `
    <div class="tool-input-group">
      <label class="tool-label">📝 Metninizi Girin</label>
      <textarea class="tool-textarea" id="textInput" placeholder="Büyük harfe çevirmek istediğiniz metni yazın..." rows="6"></textarea>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="transformBtn">🔠 Büyük Harfe Çevir</button>
      <button class="copy-btn" id="copyResultBtn" style="display:none;">📋 Kopyala</button>
    </div>
    <div id="textResult"></div>`;

  $('transformBtn').addEventListener('click', () => {
    const text = $('textInput').value;
    if (!text.trim()) { showToast('⚠️ Metin girin', true); return; }

    const result = text.toUpperCase();
    $('textInput').value = result;

    showTextResult('textResult', result);
    showToast('✅ Metin büyük harfe çevrildi');
  });
}

function renderTextLowercase(workspace) {
  workspace.innerHTML = `
    <div class="tool-input-group">
      <label class="tool-label">📝 Metninizi Girin</label>
      <textarea class="tool-textarea" id="textInput" placeholder="Küçük harfe çevirmek istediğiniz metni yazın..." rows="6"></textarea>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="transformBtn">🔡 Küçük Harfe Çevir</button>
    </div>
    <div id="textResult"></div>`;

  $('transformBtn').addEventListener('click', () => {
    const text = $('textInput').value;
    if (!text.trim()) { showToast('⚠️ Metin girin', true); return; }

    const result = text.toLowerCase();
    $('textInput').value = result;

    showTextResult('textResult', result);
    showToast('✅ Metin küçük harfe çevrildi');
  });
}

function renderTextWordCount(workspace) {
  workspace.innerHTML = `
    <div class="tool-input-group">
      <label class="tool-label">📝 Metninizi Girin</label>
      <textarea class="tool-textarea" id="textInput" placeholder="Kelime saymak istediğiniz metni yazın..." rows="6"></textarea>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="countBtn">🔢 Say</button>
    </div>
    <div id="textResult"></div>`;

  const countAndShow = () => {
    const text = $('textInput').value;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;
    const charsNoSpace = text.replace(/\s/g, '').length;
    const sentences = text.trim() ? text.split(/[.!?]+/).filter(s => s.trim()).length : 0;
    const paragraphs = text.trim() ? text.split(/\n\s*\n/).filter(p => p.trim()).length : 0;
    const lines = text.trim() ? text.split('\n').length : 0;

    $('textResult').innerHTML = `
      <div class="tool-result">
        <div class="tool-result-stats">
          <div class="stat-item">
            <span class="stat-label">Kelime</span>
            <span class="stat-value">${words}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Karakter</span>
            <span class="stat-value">${chars}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Boşluksuz</span>
            <span class="stat-value">${charsNoSpace}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Cümle</span>
            <span class="stat-value">${sentences}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Paragraf</span>
            <span class="stat-value">${paragraphs}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Satır</span>
            <span class="stat-value">${lines}</span>
          </div>
        </div>
      </div>`;
  };

  $('textInput').addEventListener('input', countAndShow);
  $('countBtn').addEventListener('click', countAndShow);
}

function renderTextCharCount(workspace) {
  workspace.innerHTML = `
    <div class="tool-input-group">
      <label class="tool-label">📝 Metninizi Girin</label>
      <textarea class="tool-textarea" id="textInput" placeholder="Karakter saymak istediğiniz metni yazın..." rows="6"></textarea>
    </div>
    <div id="textResult"></div>`;

  $('textInput').addEventListener('input', () => {
    const text = $('textInput').value;
    const total = text.length;
    const noSpace = text.replace(/\s/g, '').length;
    const letters = (text.match(/[a-zA-ZçÇğĞıİöÖşŞüÜ]/g) || []).length;
    const digits = (text.match(/\d/g) || []).length;
    const special = total - noSpace - letters - digits + (total - noSpace);

    $('textResult').innerHTML = `
      <div class="tool-result">
        <div class="tool-result-stats">
          <div class="stat-item">
            <span class="stat-label">Toplam</span>
            <span class="stat-value">${total}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Boşluksuz</span>
            <span class="stat-value">${noSpace}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Harf</span>
            <span class="stat-value">${letters}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Rakam</span>
            <span class="stat-value">${digits}</span>
          </div>
        </div>
      </div>`;
  });
}

function renderTextClean(workspace) {
  workspace.innerHTML = `
    <div class="tool-input-group">
      <label class="tool-label">📝 Temizlenecek Metin</label>
      <textarea class="tool-textarea" id="textInput" placeholder="Temizlemek istediğiniz metni yapıştırın..." rows="6"></textarea>
    </div>
    <div style="display:flex;flex-direction:column;gap:0.5rem;margin-bottom:1rem;">
      <label style="display:flex;align-items:center;gap:0.5rem;font-size:0.78rem;color:var(--text-secondary);">
        <input type="checkbox" id="cleanExtraSpaces" checked style="accent-color:var(--accent-indigo);"> Fazla boşlukları temizle
      </label>
      <label style="display:flex;align-items:center;gap:0.5rem;font-size:0.78rem;color:var(--text-secondary);">
        <input type="checkbox" id="cleanEmptyLines" checked style="accent-color:var(--accent-indigo);"> Boş satırları temizle
      </label>
      <label style="display:flex;align-items:center;gap:0.5rem;font-size:0.78rem;color:var(--text-secondary);">
        <input type="checkbox" id="cleanTrim" checked style="accent-color:var(--accent-indigo);"> Baştaki/sondaki boşlukları temizle
      </label>
      <label style="display:flex;align-items:center;gap:0.5rem;font-size:0.78rem;color:var(--text-secondary);">
        <input type="checkbox" id="cleanLineBreaks" style="accent-color:var(--accent-indigo);"> Satır sonlarını kaldır
      </label>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="cleanBtn">🧹 Temizle</button>
    </div>
    <div id="textResult"></div>`;

  $('cleanBtn').addEventListener('click', () => {
    let text = $('textInput').value;
    if (!text) { showToast('⚠️ Metin girin', true); return; }

    if ($('cleanExtraSpaces').checked) text = text.replace(/ {2,}/g, ' ');
    if ($('cleanEmptyLines').checked) text = text.replace(/\n{3,}/g, '\n\n');
    if ($('cleanTrim').checked) text = text.split('\n').map(l => l.trim()).join('\n').trim();
    if ($('cleanLineBreaks').checked) text = text.replace(/\n/g, ' ');

    $('textInput').value = text;
    showTextResult('textResult', text);
    showToast('✅ Metin temizlendi');
  });
}

function renderTextHtmlClean(workspace) {
  workspace.innerHTML = `
    <div class="tool-input-group">
      <label class="tool-label">🌐 HTML İçerikli Metin</label>
      <textarea class="tool-textarea" id="textInput" placeholder="<p>HTML içerikli metni buraya yapıştırın...</p>" rows="6"></textarea>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="cleanHtmlBtn">🌐 HTML Temizle</button>
    </div>
    <div id="textResult"></div>`;

  $('cleanHtmlBtn').addEventListener('click', () => {
    const text = $('textInput').value;
    if (!text.trim()) { showToast('⚠️ HTML girin', true); return; }

    // Remove HTML tags
    const temp = document.createElement('div');
    temp.innerHTML = text;
    const cleanText = temp.textContent || temp.innerText || '';

    showTextResult('textResult', cleanText);
    showToast('✅ HTML etiketleri temizlendi');
  });
}

function renderTextJsonFormat(workspace) {
  workspace.innerHTML = `
    <div class="tool-input-group">
      <label class="tool-label">{ } JSON Girin</label>
      <textarea class="tool-textarea" id="textInput" placeholder='{"key": "value", "array": [1, 2, 3]}' rows="8" style="font-family:Consolas,Monaco,monospace;font-size:0.78rem;"></textarea>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="formatJsonBtn">{ } Formatla</button>
      <button class="tool-btn tool-btn-secondary" id="minifyJsonBtn">Küçült</button>
    </div>
    <div id="textResult"></div>`;

  $('formatJsonBtn').addEventListener('click', () => {
    const text = $('textInput').value.trim();
    if (!text) { showToast('⚠️ JSON girin', true); return; }

    try {
      const parsed = JSON.parse(text);
      const formatted = JSON.stringify(parsed, null, 2);
      $('textInput').value = formatted;
      showTextResult('textResult', formatted);
      showToast('✅ JSON formatlandı');
    } catch (e) {
      showToast('❌ Geçersiz JSON: ' + e.message, true);
    }
  });

  $('minifyJsonBtn').addEventListener('click', () => {
    const text = $('textInput').value.trim();
    if (!text) { showToast('⚠️ JSON girin', true); return; }

    try {
      const parsed = JSON.parse(text);
      const minified = JSON.stringify(parsed);
      $('textInput').value = minified;
      showTextResult('textResult', minified);
      showToast('✅ JSON küçültüldü');
    } catch (e) {
      showToast('❌ Geçersiz JSON: ' + e.message, true);
    }
  });
}

function renderTextXmlFormat(workspace) {
  workspace.innerHTML = `
    <div class="tool-input-group">
      <label class="tool-label">< > XML Girin</label>
      <textarea class="tool-textarea" id="textInput" placeholder='<root><item>value</item></root>' rows="8" style="font-family:Consolas,Monaco,monospace;font-size:0.78rem;"></textarea>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="formatXmlBtn">< > Formatla</button>
    </div>
    <div id="textResult"></div>`;

  $('formatXmlBtn').addEventListener('click', () => {
    const text = $('textInput').value.trim();
    if (!text) { showToast('⚠️ XML girin', true); return; }

    try {
      const formatted = formatXML(text);
      $('textInput').value = formatted;
      showTextResult('textResult', formatted);
      showToast('✅ XML formatlandı');
    } catch (e) {
      showToast('❌ XML formatlama hatası: ' + e.message, true);
    }
  });
}

function formatXML(xml) {
  let formatted = '';
  let indent = 0;
  const parts = xml.replace(/>\s*</g, '><').split(/(<[^>]+>)/g);

  for (const part of parts) {
    if (!part.trim()) continue;

    if (part.match(/^<\/\w/)) {
      indent--;
    }

    formatted += '  '.repeat(Math.max(0, indent)) + part.trim() + '\n';

    if (part.match(/^<\w[^>]*[^\/]>$/) && !part.match(/^<(br|hr|img|input|meta|link)/i)) {
      indent++;
    }
  }

  return formatted.trim();
}

function renderTextMdConvert(workspace) {
  workspace.innerHTML = `
    <div class="tool-input-group">
      <label class="tool-label">📋 Markdown Girin</label>
      <textarea class="tool-textarea" id="textInput" placeholder="# Başlık\n\nBu bir **kalın** ve *italik* metin.\n\n- Liste öğesi 1\n- Liste öğesi 2" rows="8"></textarea>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="convertMdBtn">📋 HTML'e Dönüştür</button>
    </div>
    <div id="textResult"></div>
    <div id="mdPreview" style="display:none;margin-top:1rem;"></div>`;

  $('convertMdBtn').addEventListener('click', () => {
    const text = $('textInput').value;
    if (!text.trim()) { showToast('⚠️ Markdown girin', true); return; }

    const html = markdownToHtml(text);

    showTextResult('textResult', html);

    // Show preview
    $('mdPreview').style.display = 'block';
    $('mdPreview').innerHTML = `
      <div class="tool-result">
        <div class="tool-result-header">
          <span class="tool-result-title">👁️ Önizleme</span>
        </div>
        <div style="padding:1rem;background:#fff;border-radius:var(--radius-md);color:#111;">${html}</div>
      </div>`;

    showToast('✅ Markdown HTML\'e dönüştürüldü');
  });
}

function markdownToHtml(md) {
  let html = md;

  // Headers
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');

  // Bold and italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  html = html.replace(/__(.+?)__/g, '<strong>$1</strong>');
  html = html.replace(/_(.+?)_/g, '<em>$1</em>');

  // Code
  html = html.replace(/`(.+?)`/g, '<code>$1</code>');

  // Links
  html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');

  // Unordered lists
  html = html.replace(/^\- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/^\* (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');

  // Blockquote
  html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');

  // Horizontal rule
  html = html.replace(/^---$/gm, '<hr>');

  // Paragraphs (double newline)
  html = html.replace(/\n\n/g, '</p><p>');
  html = '<p>' + html + '</p>';
  html = html.replace(/<p><(h[1-6]|ul|ol|blockquote|hr)/g, '<$1');
  html = html.replace(/<\/(h[1-6]|ul|ol|blockquote)><\/p>/g, '</$1>');
  html = html.replace(/<p><\/p>/g, '');

  // Line breaks
  html = html.replace(/\n/g, '<br>');

  return html;
}

// ═══════════════════════════════════════════════════════════
// SHARED UI HELPERS
// ═══════════════════════════════════════════════════════════

function showTextResult(containerId, text) {
  const container = $(containerId);
  container.innerHTML = `
    <div class="tool-result">
      <div class="tool-result-header">
        <span class="tool-result-title">📄 Sonuç</span>
        <button class="copy-btn" id="copyResultBtn">📋 Kopyala</button>
      </div>
      <div class="tool-result-content" id="resultContent">${escapeHtml(text)}</div>
    </div>`;

  $('copyResultBtn').addEventListener('click', () => {
    navigator.clipboard.writeText(text).then(() => {
      $('copyResultBtn').classList.add('copied');
      $('copyResultBtn').textContent = '✅ Kopyalandı';
      setTimeout(() => {
        $('copyResultBtn').classList.remove('copied');
        $('copyResultBtn').textContent = '📋 Kopyala';
      }, 2000);
    }).catch(() => {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast('📋 Kopyalandı');
    });
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ═══════════════════════════════════════════════════════════
// OVERLAYS & PWA
// ═══════════════════════════════════════════════════════════

function setupOverlays() {
  // Download button
  $('downloadBtn').addEventListener('click', () => {
    if (!appState.resultBlob) return;
    downloadBlob(appState.resultBlob, appState.resultName);
    showToast('📥 Dosya indiriliyor...');
  });

  // Close success
  $('closeSuccess').addEventListener('click', () => {
    $('successOverlay').classList.remove('active');
  });
}

function setupInstall() {
  let deferredPrompt;

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    $('installBanner').classList.add('show');
  });

  $('installBtn').addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      showToast('🎉 Uygulama yüklendi!');
    }
    deferredPrompt = null;
    $('installBanner').classList.remove('show');
  });

  $('installDismiss').addEventListener('click', () => {
    $('installBanner').classList.remove('show');
  });
}

// ─── Service Worker Registration ─────────────────────────
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(reg => console.log('SW registered:', reg.scope))
    .catch(err => console.log('SW registration failed:', err));
}

// ═══════════════════════════════════════════════════════════
// GEÇİCİ PANO & DOSYA PAYLAŞIMI
// ═══════════════════════════════════════════════════════════

function renderClipboardSync(workspace) {
  workspace.innerHTML = `
    <div class="info-card" style="background: linear-gradient(135deg, #f0fdfa, #ccfbf1); border-color: #14b8a6;">
      <span class="info-icon">📱</span>
      <p>Cihazlarınız arasında hızlıca <strong>metin ve dosya</strong> transferi yapın. Yüklenen veriler <strong>10 dakika sonra</strong> otomatik olarak tamamen silinir.</p>
    </div>

    <div class="tool-input-group" style="margin-top: 1rem;">
      <label class="tool-label">✍️ Metin Gönder</label>
      <textarea class="tool-input" id="clipboardText" rows="4" placeholder="Kopyaladığınız metni buraya yapıştırın..."></textarea>
      <button class="tool-btn tool-btn-primary" id="sendTextBtn" style="margin-top: 10px; background: #14b8a6; border-color: #0d9488;">📤 Metni Gönder</button>
    </div>

    <div class="tool-input-group" style="margin-top: 2rem;">
      <label class="tool-label">📁 Dosya Gönder</label>
      <div id="clipboardFileContainer"></div>
      <button class="tool-btn tool-btn-primary" id="sendFileBtn" disabled style="margin-top: 10px; background: #14b8a6; border-color: #0d9488;">📤 Dosyayı Yükle</button>
    </div>

    <div class="tool-input-group" style="margin-top: 2rem;">
      <label class="tool-label" style="display: flex; justify-content: space-between;">
        <span>📥 Gelen Kutusu</span>
        <button id="refreshClipboardBtn" style="background:none; border:none; color:#14b8a6; cursor:pointer; font-weight:bold;">🔄 Yenile</button>
      </label>
      <div id="clipboardDataList" style="display: flex; flex-direction: column; gap: 10px;">
        <div style="text-align:center; padding: 20px; color:#64748b;">Veriler yükleniyor...</div>
      </div>
    </div>
  `;

  // Render'da barındırılan sitenin API'sine istek yapmak için base URL:
  const API_URL = "https://pdf-donusturucu.onrender.com"; 
  const baseUrl = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') 
                  ? 'http://127.0.0.1:8000' 
                  : API_URL;

  const uploader = createFileUploadUI($('clipboardFileContainer'), {
    multiple: false,
    icon: '📁',
    title: 'Dosya Seçin',
    subtitle: 'Paylaşmak istediğiniz dosyayı seçin',
    onFiles: (files) => {
      $('sendFileBtn').disabled = files.length === 0;
    }
  });

  $('sendTextBtn').addEventListener('click', async () => {
    const text = $('clipboardText').value.trim();
    if (!text) {
      showToast('Lütfen bir metin girin!', true);
      return;
    }
    
    $('sendTextBtn').disabled = true;
    $('sendTextBtn').textContent = 'Gönderiliyor...';
    
    try {
      const fd = new FormData();
      fd.append("text", text);
      const res = await fetch(baseUrl + '/api/clipboard/text', { method: 'POST', body: fd });
      if(res.ok) {
        showToast('✅ Metin başarıyla gönderildi');
        $('clipboardText').value = '';
        fetchClipboardData();
      } else {
        showToast('❌ Gönderim hatası!', true);
      }
    } catch(err) {
      showToast('❌ Bağlantı hatası!', true);
    }
    
    $('sendTextBtn').disabled = false;
    $('sendTextBtn').textContent = '📤 Metni Gönder';
  });

  $('sendFileBtn').addEventListener('click', async () => {
    const files = uploader.getFiles();
    if(files.length === 0) return;
    
    $('sendFileBtn').disabled = true;
    showProgress(true);
    updateProgress(50, 'Dosya yükleniyor...', files[0].name);
    
    try {
      const fd = new FormData();
      fd.append("file", files[0]);
      const res = await fetch(baseUrl + '/api/clipboard/file', { method: 'POST', body: fd });
      if(res.ok) {
        showProgress(false);
        showToast('✅ Dosya başarıyla yüklendi');
        uploader.clear();
        fetchClipboardData();
      } else {
        showProgress(false);
        showToast('❌ Yükleme hatası!', true);
      }
    } catch(err) {
      showProgress(false);
      showToast('❌ Bağlantı hatası!', true);
    }
    
    $('sendFileBtn').disabled = false;
  });

  async function fetchClipboardData() {
    try {
      const res = await fetch(baseUrl + '/api/clipboard/data');
      if (res.ok) {
        const data = await res.json();
        renderClipboardData(data);
      } else {
         $('clipboardDataList').innerHTML = '<div style="text-align:center; color:red;">Bağlantı hatası! Sunucu yanıt vermiyor.</div>';
      }
    } catch(err) {
      $('clipboardDataList').innerHTML = '<div style="text-align:center; color:red;">Bağlantı hatası! API bulunamadı.</div>';
    }
  }

  function renderClipboardData(data) {
    const list = $('clipboardDataList');
    let html = '';
    
    if (data.texts.length === 0 && data.files.length === 0) {
      html = '<div style="text-align:center; padding: 20px; color:#64748b;">Henüz gelen veri yok.</div>';
    }
    
    data.texts.forEach(t => {
      html += `
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; position: relative;">
          <div style="font-size: 12px; color: #94a3b8; margin-bottom: 5px;">${t.time_str} (Metin)</div>
          <div style="font-size: 14px; word-break: break-all; margin-bottom: 10px;">${escapeHtml(t.content)}</div>
          <button onclick="navigator.clipboard.writeText('${t.content.replace(/'/g, "\\'")}')" style="background:#14b8a6; color:white; border:none; border-radius:4px; padding:5px 10px; cursor:pointer; font-size:12px;">Kopyala</button>
        </div>
      `;
    });
    
    data.files.forEach(f => {
      html += `
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; position: relative; display: flex; justify-content: space-between; align-items: center;">
          <div style="overflow: hidden; text-overflow: ellipsis;">
            <div style="font-size: 12px; color: #94a3b8; margin-bottom: 5px;">${f.time_str} (Dosya)</div>
            <div style="font-size: 14px; font-weight: bold; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${f.filename}</div>
          </div>
          <button onclick="window.open('${baseUrl}/api/clipboard/download/${f.id}', '_blank')" style="background:#3b82f6; color:white; border:none; border-radius:4px; padding:8px 12px; cursor:pointer; font-size:12px; margin-left:10px;">İndir</button>
        </div>
      `;
    });
    
    list.innerHTML = html;
  }

  $('refreshClipboardBtn').addEventListener('click', fetchClipboardData);
  fetchClipboardData();
}
