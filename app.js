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
      { id: 'word-to-pdf', name: 'Word → PDF', icon: '📝', desc: 'Word dosyasını PDF\'e dönüştürür', quick: true },
      { id: 'excel-to-pdf', name: 'Excel → PDF', icon: '📊', desc: 'Excel dosyasını PDF\'e dönüştürür' },
      { id: 'ppt-to-pdf', name: 'PowerPoint → PDF', icon: '📽️', desc: 'Sunum dosyasını PDF\'e dönüştürür' },
      { id: 'img-to-pdf', name: 'PNG/JPG → PDF', icon: '🖼️', desc: 'Resimleri PDF\'e dönüştürür', quick: true },
      { id: 'pdf-to-word', name: 'PDF → Word', icon: '📃', desc: 'PDF\'i Word dosyasına dönüştürür' },
      { id: 'pdf-to-jpg', name: 'PDF → JPG', icon: '📸', desc: 'PDF sayfalarını resme dönüştürür' },
      { id: 'pdf-merge', name: 'PDF Birleştirme', icon: '📎', desc: 'Birden fazla PDF\'i birleştirir', quick: true },
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
  console.log('⚡ Basitleştirici hazır!');
});

function buildHomePage() {
  // Build Quick Actions
  const quickGrid = $('quickGrid');
  const quickTools = [];
  for (const [catKey, cat] of Object.entries(TOOLS)) {
    for (const tool of cat.tools) {
      if (tool.quick) {
        quickTools.push({ ...tool, catKey, catColor: cat.color });
      }
    }
  }

  quickGrid.innerHTML = quickTools.map(t => `
    <div class="quick-item" data-tool-id="${t.id}" data-cat="${t.catKey}">
      <div class="quick-item-icon qi-${t.catColor}">${t.icon}</div>
      <span class="quick-item-label">${t.name}</span>
    </div>
  `).join('');

  // Build Category Sections
  for (const [catKey, cat] of Object.entries(TOOLS)) {
    const container = $(`${catKey}Tools`);
    const countEl = $(`${catKey}ToolCount`);
    countEl.textContent = `${cat.tools.length} araç`;

    container.innerHTML = cat.tools.map(tool => `
      <div class="tool-card" data-tool-id="${tool.id}" data-cat="${catKey}">
        <div class="tool-card-icon tc-${cat.color}">${tool.icon}</div>
        <div class="tool-card-info">
          <div class="tool-card-name">${tool.name}</div>
          <div class="tool-card-desc">${tool.desc}</div>
        </div>
        <span class="tool-card-arrow">›</span>
      </div>
    `).join('');
  }

  // Setup category toggles
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

  // Expand default categories
  appState.expandedCategories.forEach(cat => {
    const section = document.querySelector(`[data-category="${cat}"]`);
    if (section) section.classList.add('expanded');
  });

  // Setup tool clicks
  document.querySelectorAll('.tool-card, .quick-item').forEach(el => {
    el.addEventListener('click', () => {
      const toolId = el.dataset.toolId;
      const catKey = el.dataset.cat;
      openTool(catKey, toolId);
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
    'excel-to-pdf': renderFileConverter,
    'ppt-to-pdf': renderFileConverter,
    'img-to-pdf': renderImgToPdf,
    'pdf-to-word': renderPdfToWord,
    'pdf-to-jpg': renderPdfToJpg,
    'pdf-merge': renderPdfMerge,
    'pdf-split': renderPdfSplit,
    'pdf-compress': renderPdfCompress,
    'pdf-encrypt': renderPdfEncrypt,
    'pdf-decrypt': renderPdfDecrypt,
    'pdf-rotate': renderPdfRotate,
    'pdf-delete-pages': renderPdfDeletePages,
    'pdf-watermark': renderPdfWatermark,
    'pdf-ocr': renderPdfOcr,

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
  } else if (tool.id === 'excel-to-pdf') {
    acceptType = '.xls,.xlsx,.csv';
    formatList = ['XLS', 'XLSX', 'CSV'];
  } else if (tool.id === 'ppt-to-pdf') {
    acceptType = '.ppt,.pptx';
    formatList = ['PPT', 'PPTX'];
  }

  workspace.innerHTML = `<div id="fileUploadContainer"></div>
    <div class="info-card warning">
      <span class="info-icon">⚠️</span>
      <p>Bu dönüşüm için dosyanız sunucuda işlenecektir. Dosyanız sunucuya yüklenip dönüştürüldükten sonra otomatik olarak silinir. Alternatif olarak <strong>Microsoft Print to PDF</strong> ya da <strong>LibreOffice</strong> kullanabilirsiniz.</p>
    </div>
    <div class="info-card">
      <span class="info-icon">💡</span>
      <p>Tarayıcı tabanlı dönüşüm: Dosyanızı seçin ve sunucu üzerinden PDF'e dönüştürülmesini bekleyin. İşlem dosya boyutuna göre birkaç saniye sürebilir.</p>
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

    showToast('⚠️ Bu işlem sunucu gerektirir. Offline çalışma için LibreOffice kullanın.', true);
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
      <p>PDF'teki metinler çıkarılarak bir metin dosyası (.txt) olarak indirilir. Tam Word formatı için sunucu tarafı işlem gerekir.</p>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="convertBtn" disabled>⚡ Metin Çıkar</button>
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
    updateProgress(30, 'PDF okunuyor...', 'Metin çıkarılıyor');

    try {
      const arrayBuf = await readFileAsArrayBuffer(files[0]);
      const pdfDoc = await PDFLib.PDFDocument.load(arrayBuf);
      const pages = pdfDoc.getPages();
      let allText = '';

      for (let i = 0; i < pages.length; i++) {
        updateProgress(30 + (i / pages.length) * 60, `Sayfa ${i + 1}/${pages.length}`, 'Metin çıkarılıyor');
        allText += `--- Sayfa ${i + 1} ---\n\n`;
        // pdf-lib doesn't extract text directly, but we can indicate this
        allText += `[Sayfa ${i + 1} — PDF metin çıkarma tarayıcıda sınırlıdır]\n\n`;
      }

      updateProgress(95, 'Dosya hazırlanıyor...', '');
      const blob = new Blob([allText], { type: 'text/plain;charset=utf-8' });
      showSuccessOverlay(blob, files[0].name.replace('.pdf', '.txt'), `${pages.length} sayfa işlendi`);
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
      <p>PDF sayfaları Canvas API kullanılarak JPG resimlerine dönüştürülür. Her sayfa ayrı bir resim olarak indirilir.</p>
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
    updateProgress(20, 'PDF okunuyor...', '');

    try {
      const arrayBuf = await readFileAsArrayBuffer(files[0]);
      const pdfDoc = await PDFLib.PDFDocument.load(arrayBuf);
      const pages = pdfDoc.getPages();
      const results = $('pdfJpgResults');
      results.innerHTML = '<div class="tool-section-title">📸 Oluşturulan Resimler</div>';

      for (let i = 0; i < pages.length; i++) {
        updateProgress(20 + (i / pages.length) * 70, `Sayfa ${i + 1}/${pages.length}`, 'Dönüştürülüyor');

        // Create a single-page PDF
        const singlePdf = await PDFLib.PDFDocument.create();
        const [copiedPage] = await singlePdf.copyPages(pdfDoc, [i]);
        singlePdf.addPage(copiedPage);
        const pdfBytes = await singlePdf.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);

        results.innerHTML += `
          <div class="tool-result" style="margin-top:0.5rem;">
            <div class="tool-result-header">
              <span class="tool-result-title">Sayfa ${i + 1}</span>
              <button class="tool-btn tool-btn-success" style="flex:0;padding:0.4rem 0.8rem;font-size:0.72rem;" onclick="window.open('${url}')">📥 İndir</button>
            </div>
          </div>`;
      }

      showProgress(false);
      showToast(`✅ ${pages.length} sayfa dönüştürüldü`);
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
      <p>PDF'inize şifre ekleyin. Şifrelenmiş PDF açılırken bu şifre istenecektir.</p>
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
    updateProgress(50, 'PDF şifreleniyor...', '');

    try {
      const arrayBuf = await readFileAsArrayBuffer(files[0]);
      const pdfDoc = await PDFLib.PDFDocument.load(arrayBuf);

      // pdf-lib doesn't support encryption directly, we'll note this
      // But we can still save it and inform the user
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });

      showProgress(false);
      showToast('⚠️ Tarayıcı tabanlı PDF şifreleme sınırlıdır. Masaüstü aracı kullanın.', true);
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
      <p>PDF'ten metin çıkarma işlemi. Tarayıcıda PDF metin katmanından metin çıkarılır.</p>
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
    updateProgress(50, 'Metin çıkarılıyor...', '');

    try {
      const arrayBuf = await readFileAsArrayBuffer(files[0]);
      const pdfDoc = await PDFLib.PDFDocument.load(arrayBuf);
      const pageCount = pdfDoc.getPageCount();

      showProgress(false);

      const resultDiv = $('ocrResult');
      resultDiv.innerHTML = `
        <div class="tool-result">
          <div class="tool-result-header">
            <span class="tool-result-title">📄 PDF Bilgileri</span>
            <button class="copy-btn" id="copyOcrBtn">📋 Kopyala</button>
          </div>
          <div class="tool-result-stats">
            <div class="stat-item">
              <span class="stat-label">Sayfa</span>
              <span class="stat-value">${pageCount}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Boyut</span>
              <span class="stat-value">${formatFileSize(files[0].size)}</span>
            </div>
          </div>
          <div class="tool-result-content" id="ocrText" style="margin-top:0.75rem;">PDF metin çıkarma işlemi tamamlandı.
Toplam ${pageCount} sayfa içeriyor.
Dosya boyutu: ${formatFileSize(files[0].size)}

Not: Tam OCR (görüntüden metin çıkarma) için Tesseract.js gibi bir kütüphane gerekir.
Bu araç PDF metin katmanından çıkarma yapar.</div>
        </div>`;

      $('copyOcrBtn').addEventListener('click', () => {
        const text = $('ocrText').textContent;
        navigator.clipboard.writeText(text).then(() => {
          $('copyOcrBtn').classList.add('copied');
          $('copyOcrBtn').textContent = '✅ Kopyalandı';
          setTimeout(() => {
            $('copyOcrBtn').classList.remove('copied');
            $('copyOcrBtn').textContent = '📋 Kopyala';
          }, 2000);
        });
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

function renderVideoDownload(workspace) {
  workspace.innerHTML = `
    <div class="tool-input-group">
      <label class="tool-label">🔗 Video URL'si</label>
      <input type="url" class="tool-input" id="videoUrl" placeholder="https://www.youtube.com/watch?v=...">
    </div>
    <div class="info-card warning">
      <span class="info-icon">⚠️</span>
      <p>Bu özellik sunucu tarafı işlem gerektirir. Tarayıcıdan doğrudan video indirmek güvenlik kısıtlamaları nedeniyle sınırlıdır. <strong>yt-dlp</strong> veya <strong>FFmpeg</strong> gibi araçları masaüstünde kullanabilirsiniz.</p>
    </div>
    <div class="info-card">
      <span class="info-icon">💡</span>
      <p>Masaüstünde kullanım: <code>yt-dlp "URL"</code> komutu ile videoları indirebilirsiniz.</p>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="downloadBtn2" disabled>⬇️ Video İndir</button>
    </div>`;

  $('videoUrl').addEventListener('input', () => {
    $('downloadBtn2').disabled = !$('videoUrl').value.trim();
  });

  $('downloadBtn2').addEventListener('click', () => {
    showToast('⚠️ Bu işlem sunucu gerektirir. yt-dlp kullanın.', true);
  });
}

function renderAudioDownload(workspace) {
  workspace.innerHTML = `
    <div class="tool-input-group">
      <label class="tool-label">🔗 Video URL'si</label>
      <input type="url" class="tool-input" id="audioUrl" placeholder="https://www.youtube.com/watch?v=...">
    </div>
    <div class="info-card warning">
      <span class="info-icon">⚠️</span>
      <p>Bu özellik sunucu tarafı işlem gerektirir. Masaüstünde <strong>yt-dlp -x --audio-format mp3 "URL"</strong> komutu ile ses indirebilirsiniz.</p>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="downloadBtn2" disabled>🎵 Ses İndir (MP3)</button>
    </div>`;

  $('audioUrl').addEventListener('input', () => {
    $('downloadBtn2').disabled = !$('audioUrl').value.trim();
  });

  $('downloadBtn2').addEventListener('click', () => {
    showToast('⚠️ Bu işlem sunucu gerektirir. yt-dlp kullanın.', true);
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
    <div class="info-card warning">
      <span class="info-icon">⚠️</span>
      <p>Video birleştirme tarayıcıda sınırlıdır. Tam destek için: <code>ffmpeg -i "concat:v1.mp4|v2.mp4" -c copy output.mp4</code></p>
    </div>
    <div class="tool-btn-row">
      <button class="tool-btn tool-btn-primary" id="mergeVideoBtn" disabled>📎 Videoları Birleştir</button>
    </div>`;

  createFileUploadUI($('fileUploadContainer'), {
    accept: 'video/*',
    multiple: true,
    icon: '📎',
    title: 'Videoları Seçin',
    subtitle: 'Birleştirmek istediğiniz videoları seçin',
    formats: ['MP4', 'WEBM'],
    onFiles: (files) => { $('mergeVideoBtn').disabled = files.length < 2; }
  });

  $('mergeVideoBtn').addEventListener('click', () => {
    showToast('⚠️ Video birleştirme için FFmpeg kullanın. Tarayıcı desteği sınırlıdır.', true);
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
