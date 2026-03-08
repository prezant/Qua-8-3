// =============================
// 🎵 MUSIC
// =============================
const playlist = [
  { title: 'Đẹp trai', src: 'music/demo1.mp3' },
  { title: 'Lọ', src: 'music/demo2.mp3' },
  { title: 'Anh là của em', src: 'music/bai3.mp3' },
];

let currentAudio = null;
let currentIndex = -1;

function playTrack(index) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  currentIndex = index;
  currentAudio = new Audio(playlist[index].src);
  currentAudio.play();

  document.querySelectorAll('.track-item').forEach((el, i) => {
    el.classList.toggle('playing', i === index);
  });
}

function openMusicModal() {
  const list = playlist.map((track, i) => `
    <div class="track-item" onclick="playTrack(${i})">
      <span class="track-icon">🎵</span>
      <span class="track-title">${track.title}</span>
      <span class="track-play">▶</span>
    </div>
  `).join('');

  document.getElementById('mIcon').textContent  = '🎵';
  document.getElementById('mTitle').textContent = 'Music';
  document.getElementById('mDesc').innerHTML    = `<div class="track-list">${list}</div>`;
  document.getElementById('modalOverlay').classList.add('active');
}

// =============================
// 💌 LETTER
// =============================
function openLetterModal() {
  const lines = [
    '8/3 chúc Hoàng Anh có 1 ngày vui vẻ và đăng nhiều ảnh dâm 🤤',
  ];

  const html = `
    <div class="letter-wrap">
      <div class="letter-body">
        ${lines.map(l => l === '' ? '<br/>' : `<p>${l}</p>`).join('')}
      </div>
    </div>
  `;

  document.getElementById('mIcon').textContent  = '💌';
  document.getElementById('mTitle').textContent = 'Letter';
  document.getElementById('mDesc').innerHTML    = html;
  document.getElementById('modalOverlay').classList.add('active');
}

// =============================
// 🖼️ IMAGE - Gallery
// =============================
const gallery = [
  'images/anh4.jpg',
  'images/anh5.jpg',
  'images/anh7.jpg',
];

let galleryIndex = 0;

function openImageModal() {
  galleryIndex = 0;
  document.getElementById('mIcon').textContent  = '🖼️';
  document.getElementById('mTitle').textContent = 'Images';
  document.getElementById('modalOverlay').classList.add('active');
  renderGallery();
}

function renderGallery() {
  const html = `
    <div class="gallery-wrap">
      <img class="gallery-img" src="${gallery[galleryIndex]}" alt="ảnh ${galleryIndex + 1}" />
      <div class="gallery-controls">
        <button class="gallery-btn" onclick="changePhoto(-1)">‹</button>
        <span class="gallery-count">${galleryIndex + 1} / ${gallery.length}</span>
        <button class="gallery-btn" onclick="changePhoto(1)">›</button>
      </div>
    </div>
  `;
  document.getElementById('mDesc').innerHTML = html;
}

function changePhoto(dir) {
  galleryIndex = (galleryIndex + dir + gallery.length) % gallery.length;
  renderGallery();
}

// =============================
// 🎁 GIFT - Bóc quà
// =============================
function openGiftModal() {
  document.getElementById('mIcon').textContent  = '🎁';
  document.getElementById('mTitle').textContent = 'Gift';
  document.getElementById('mDesc').innerHTML    = `
    <div class="gift-wrap" id="giftWrap">
      <div class="gift-box" id="giftBox" onclick="openGift()">
        <div class="gift-lid">🎀</div>
        <div class="gift-body">🎁</div>
        <p class="gift-hint">Nhấn để mở quà!</p>
      </div>
    </div>
  `;
  document.getElementById('modalOverlay').classList.add('active');
}

function openGift() {
  
  const surprise = 'Chúc Hoàng Anh sớm có được tao! 🌸✨💕';

  document.getElementById('giftBox').innerHTML = `
    <div class="gift-open">
      <div class="confetti">🎉🎊✨🌸💖🎀⭐</div>
      <p class="gift-message">${surprise}</p>
    </div>
  `;
}

// =============================
// MODAL - Đóng
// =============================
function closeModalBtn() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  document.getElementById('modalOverlay').classList.remove('active');
}

function closeModal(event) {
  if (event.target.id === 'modalOverlay') closeModalBtn();
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModalBtn();

});


