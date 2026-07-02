/* =====================================================================
   HAPPY ANNIVERSARY — SCRIPT.JS
   All logic is modular. Edit the CONFIG block below to customize
   everything (dates, names, texts, images, timeline, reasons, music)
   without touching the rest of the code.
   ===================================================================== */

/* =====================================================================
   0. CONFIG — EDIT ME
   ===================================================================== */
const CONFIG = {

  // วันครบรอบของคุณ (รูปแบบ YYYY-MM-DD) — ใช้ตรวจสอบตอน Login และคำนวณ Love Counter
  anniversaryDate: "2026-04-09",

  // วัน-เวลาที่จะ "ปลดล็อก" เว็บไซต์ (รูปแบบ YYYY-MM-DDTHH:MM:SS ตามเวลาเครื่องผู้เข้าชม)
  // ก่อนถึงเวลานี้ ผู้เข้าชมจะเห็นแค่หน้านับถอยหลัง กดเข้าหน้า Login/เว็บไซต์หลักไม่ได้
  unlockAt: "2026-07-09T00:00:00",

  // ชื่อคู่รักทั้งสอง
  names: {
    a: "Phu",
    b: "Mook"
  },

  // ข้อความหน้า Hero
  hero: {
    title: "Happy Anniversary to Mook ❤️",
  },

  // พื้นหลัง (ใส่ path รูปจริงของคุณที่ /assets/images/)
  backgrounds: {
    login: "assets/images/login-bg.jpg",
    hero: "assets/images/hero-bg.jpg"
  },

  // Timeline เหตุการณ์สำคัญ — เพิ่ม/ลบ/แก้ไขได้ตามต้องการ
  timeline: [
    {
      date: "24 กุมภาพันธ์ 2026",
      title: "วันที่เค้ากับอ้วนเริ่มคุยกัน",
      desc: "อ้วนมาแฮปปี้เบิร์ดเดย์เค้าในวันเกิด",
      image: "assets/images/timeline-1.jpg"
    },
    {
      date: "9 เมษายน 2026",
      title: "วันแรกที่คบกัน",
      desc: "เค้าขออ้วนเป็นแฟนเ้ยย้ย้ย้ย้ย้ย้ย้ยดีจัย",
      image: "assets/images/timeline-2.jpg"
    },
    {
      date: "25 พฤษภาคม 2026",
      title: "วันเกิดอ้วน",
      desc: "เค้าซื้อเค้กให้อ้วนเย้ย้ย้ย้ย้้ยย้ย้ย้้ยย้ย้",
      image: "assets/images/timeline-3.jpg"
    },
    {
      date: "9 กรกฎาคม 2026",
      title: "วันครบรอบของเรา 3 เดือน",
      desc: "อ้วนอยู่กับเค้าไปนานๆอีกนะนะ (อ้วนอย่าขำหน้าเค้านะ)",
      image: "assets/images/timeline-4.jpg"
    }
  ],

  // Gallery รูปภาพ — เพิ่ม/ลบได้ตามต้องการ
  gallery: [
    { src: "assets/images/gallery-1.jpg", caption: "ความทรงจำดี ๆ #1" },
    { src: "assets/images/gallery-2.jpg", caption: "ความทรงจำดี ๆ #2" },
    { src: "assets/images/gallery-3.jpg", caption: "ความทรงจำดี ๆ #3" },
  ],

  // จดหมายรัก
  loveLetter: {
    text: "ถึง มุกแฟนเค้า คนที่รักที่สุด...\n\nขอบคุณที่เดินเข้ามาในชีวิตของเค้า และทำให้ทุกวันของเค้ามีความหมาย\nขอบคุณที่อยู่เคียงข้างกันทั้งวันที่สุขและวันที่ยาก\nความรู้สึกที่มีต่ออ้วนจะไม่มีวันเปลี่ยนแปลง\n\nเค้ารักอ้วนมากกว่าเมื่อวาน แต่น้อยกว่าพรุ่งนี้เสมอ\nอยู่กับเค้าไปนานๆนะ ถึงเค้าจะไม่ค่อยมีอะไรให้อ้วนเหมือนคนอื่น แต่รักที่เค้าให้ไม่น้อยไปกว่าใครๆแน่นอน",
    signoff: "— ด้วยรักเสมอ ❤️"
  },

  // เหตุผลที่รัก — สุ่มแสดงทีละอัน
  reasons: [
    "เพราะอ้วนทำให้เค้าเป็นคนที่มีความสุขที่สุดในโลก",
    "เพราะอ้วนไม่เคยทำให้เค้าต้องรู้สึกว่าเค้าอยากไปจากอ้วน",
    "เพราะอ้วนชอบโทรปลุกเค้ากลัวเค้าไปสาย",
    "เพราะเค้าเชื่อใจอ้วน อ้วนไม่เคยทำให้เค้ารู้สึกว่าอ้วนไม่ซื่อสัตย์กับเค้า",
    "เพราะเค้าอยู่กับอ้วนเ้คามีความสุขทุกวันนนนน",
  ],

  // เพลงพื้นหลัง (ใส่ path ไฟล์ mp3 จริงที่ /assets/music/)
  music: {
    src: "assets/music/our-song.mp3",
    title: "เพลงของเรา"
  }
};

/* =====================================================================
   1. UTILITIES
   ===================================================================== */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

function pad(num){ return String(num).padStart(2, "0"); }

/* =====================================================================
   2. AMBIENT LAYER — floating hearts & sparkles (global, subtle)
   ===================================================================== */
function initAmbientLayer(container, { heartCount = 10, sparkleCount = 14, heartChars = ["❤","💗","💕"] } = {}){
  for(let i = 0; i < heartCount; i++){
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (0.9 + Math.random() * 1.3) + "rem";
    heart.style.setProperty("--drift", (Math.random() * 80 - 40) + "px");
    const duration = 10 + Math.random() * 12;
    heart.style.animationDuration = duration + "s";
    heart.style.animationDelay = (-Math.random() * duration) + "s";
    container.appendChild(heart);
  }
  for(let i = 0; i < sparkleCount; i++){
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";
    sparkle.style.left = Math.random() * 100 + "%";
    sparkle.style.top = Math.random() * 100 + "%";
    sparkle.style.animationDelay = (-Math.random() * 2.4) + "s";
    container.appendChild(sparkle);
  }
}

/* =====================================================================
   3. RIPPLE BUTTON EFFECT
   ===================================================================== */
function attachRipple(el){
  el.addEventListener("click", (e) => {
    const rect = el.getBoundingClientRect();
    const ripple = document.createElement("span");
    const size = Math.max(rect.width, rect.height) * 1.2;
    ripple.className = "ripple";
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
    ripple.style.top = (e.clientY - rect.top - size / 2) + "px";
    el.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  });
}

/* =====================================================================
   4. IMAGE FALLBACK — graceful placeholder if a photo file is missing
   ===================================================================== */
function safeImage(imgEl, src, fallbackEmoji = "📷"){
  imgEl.addEventListener("error", () => {
    const parent = imgEl.parentElement;
    imgEl.remove();
    if (parent && !parent.querySelector(".img-fallback")){
      const fb = document.createElement("div");
      fb.className = "img-fallback";
      fb.style.cssText = "width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:2rem;";
      fb.textContent = fallbackEmoji;
      parent.appendChild(fb);
    }
  }, { once: true });
  imgEl.src = src;
}

/* =====================================================================
   5. LOCK GATE — บล็อกการเข้าเว็บทั้งหมดจนกว่าจะถึง CONFIG.unlockAt
   ===================================================================== */
function initLockGate(){
  const unlockTime = new Date(CONFIG.unlockAt).getTime();

  // ถึงเวลาแล้ว (หรือเลยมาแล้ว) ตอนโหลดหน้า — ข้ามหน้าล็อก เข้าสู่ Login ตามปกติ
  if (Date.now() >= unlockTime){
    $("#loginScreen").hidden = false;
    initLogin();
    return;
  }

  const lockScreen = $("#lockScreen");
  const loginScreen = $("#loginScreen");
  const lockHearts = $("#lockHearts");
  const daysEl = $("#lkDays");
  const hoursEl = $("#lkHours");
  const minutesEl = $("#lkMinutes");
  const secondsEl = $("#lkSeconds");

  loginScreen.hidden = true;
  lockScreen.hidden = false;

  initAmbientLayer(lockHearts, { heartCount: 8, sparkleCount: 10 });

  function tick(){
    const diff = unlockTime - Date.now();

    if (diff <= 0){
      clearInterval(timer);
      lockScreen.classList.add("is-leaving");
      setTimeout(() => {
        lockScreen.hidden = true;
        loginScreen.hidden = false;
        initLogin();
      }, 700);
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    daysEl.textContent = Math.floor(totalSeconds / 86400);
    hoursEl.textContent = pad(Math.floor((totalSeconds % 86400) / 3600));
    minutesEl.textContent = pad(Math.floor((totalSeconds % 3600) / 60));
    secondsEl.textContent = pad(totalSeconds % 60);
  }

  tick();
  const timer = setInterval(tick, 1000);
}

/* =====================================================================
   6. LOGIN FLOW
   ===================================================================== */
function initLogin(){
  const loginScreen = $("#loginScreen");
  const form = $("#loginForm");
  const input = $("#anniversaryInput");
  const errorEl = $("#loginError");
  const checkingEl = $("#loginChecking");
  const locket = $("#locket");
  const loginHearts = $("#loginHearts");

  // Set background image (falls back to gradient if file missing — handled purely via CSS)
  const loginBgImg = $(".login-bg__image");
  const testImg = new Image();
  testImg.onload = () => { loginBgImg.style.backgroundImage = `url(${CONFIG.backgrounds.login})`; };
  testImg.src = CONFIG.backgrounds.login;

  initAmbientLayer(loginHearts, { heartCount: 8, sparkleCount: 10 });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value;
    if (!value){ return; }

    errorEl.classList.remove("is-visible");
    checkingEl.classList.add("is-active");
    form.querySelector(".btn-primary").style.pointerEvents = "none";

    // "กำลังตรวจสอบ..." delay for suspense
    setTimeout(() => {
      checkingEl.classList.remove("is-active");
      form.querySelector(".btn-primary").style.pointerEvents = "";

      if (value === CONFIG.anniversaryDate){
        unlockMemories(loginScreen, locket);
      } else {
        errorEl.textContent = "🤍 ใส่ให้ถูกดิ๊ ❤️";
        errorEl.classList.add("is-visible");
      }
    }, 1100);
  });
}

function unlockMemories(loginScreen, locket){
  locket.classList.add("is-opening");
  launchConfetti({ count: 90, spread: true });

  setTimeout(() => {
    loginScreen.classList.add("is-leaving");
  }, 350);

  setTimeout(() => {
    loginScreen.remove();
    const mainSite = $("#mainSite");
    mainSite.hidden = false;
    requestAnimationFrame(() => {
      document.body.style.overflow = "";
      initMainSite();
    });
    // Try to start music automatically now that a user gesture has occurred
    tryPlayMusic();
  }, 1450);
}

/* =====================================================================
   7. MAIN SITE INIT (called once, after unlock)
   ===================================================================== */
let mainSiteInitialized = false;

function initMainSite(){
  if (mainSiteInitialized) return;
  mainSiteInitialized = true;

  populateHero();
  populateTimeline();
  populateGallery();
  initScrollReveal();
  initScrollThread();
  initLoveLetter();
  initLoveCounter();
  initReasons();
  initMusicPlayer();
  initGiftSurprise();
  initLightbox();
  initSmoothStart();

  // Attach ripple to every primary/outline button now present
  $$(".ripple-container").forEach(attachRipple);
}

/* ---------------- Hero ---------------- */
function populateHero(){
  $("#heroTitle").textContent = CONFIG.hero.title;
  $("#heroNames").textContent = `${CONFIG.names.a}  ❤️  ${CONFIG.names.b}`;

  const heroBg = $("#heroBg");
  const testImg = new Image();
  testImg.onload = () => { heroBg.style.backgroundImage = `url(${CONFIG.backgrounds.hero})`; heroBg.style.backgroundSize = "cover"; heroBg.style.backgroundPosition = "center"; };
  testImg.src = CONFIG.backgrounds.hero;
}

function initSmoothStart(){
  $("#startBtn").addEventListener("click", () => {
    $("#timeline").scrollIntoView({ behavior: "smooth" });
  });
}

/* ---------------- Timeline ---------------- */
function populateTimeline(){
  const list = $("#timelineList");
  CONFIG.timeline.forEach((item, i) => {
    const el = document.createElement("div");
    el.className = "timeline-item";
    el.innerHTML = `
      <div class="timeline-card reveal">
        <div class="timeline-card__image">
          <img alt="${item.title}" loading="lazy">
        </div>
        <p class="timeline-card__date">${item.date}</p>
        <h3 class="timeline-card__title">${item.title}</h3>
        <p class="timeline-card__desc">${item.desc}</p>
      </div>
    `;
    list.appendChild(el);
    const img = el.querySelector("img");
    safeImage(img, item.image, "💌");
  });
}

/* ---------------- Gallery ---------------- */
function populateGallery(){
  const grid = $("#galleryGrid");
  CONFIG.gallery.forEach((item, i) => {
    const el = document.createElement("div");
    el.className = "gallery-item";
    el.setAttribute("tabindex", "0");
    el.setAttribute("role", "button");
    el.setAttribute("aria-label", item.caption);
    el.dataset.index = i;
    el.innerHTML = `
      <img alt="${item.caption}" loading="lazy">
      <span class="gallery-item__caption">${item.caption}</span>
    `;
    grid.appendChild(el);
    const img = el.querySelector("img");
    safeImage(img, item.src, "🖼");

    const openFn = () => openLightbox(i);
    el.addEventListener("click", openFn);
    el.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " "){ e.preventDefault(); openFn(); } });
  });
}

/* ---------------- Lightbox ---------------- */
let lightboxIndex = 0;
function initLightbox(){
  $("#lightboxClose").addEventListener("click", closeLightbox);
  $("#lightboxPrev").addEventListener("click", () => navigateLightbox(-1));
  $("#lightboxNext").addEventListener("click", () => navigateLightbox(1));
  $("#lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    const lb = $("#lightbox");
    if (lb.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  });
}
function openLightbox(index){
  lightboxIndex = index;
  renderLightbox();
  $("#lightbox").hidden = false;
  document.body.style.overflow = "hidden";
}
function closeLightbox(){
  $("#lightbox").hidden = true;
  document.body.style.overflow = "";
}
function navigateLightbox(dir){
  lightboxIndex = (lightboxIndex + dir + CONFIG.gallery.length) % CONFIG.gallery.length;
  renderLightbox();
}
function renderLightbox(){
  const item = CONFIG.gallery[lightboxIndex];
  const imgEl = $("#lightboxImg");
  imgEl.alt = item.caption;
  safeImage(imgEl, item.src, "🖼");
  $("#lightboxCaption").textContent = item.caption;
}

/* ---------------- Love Letter (typewriter) ---------------- */
function initLoveLetter(){
  const textEl = $("#letterText");
  const cursorEl = $("#letterCursor");
  const signoffEl = $("#letterSignoff");
  const fullText = CONFIG.loveLetter.text;
  let started = false;

  const section = $("#loveLetter");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !started){
        started = true;
        typeText(textEl, fullText, 32, () => {
          cursorEl.classList.add("is-done");
          signoffEl.textContent = CONFIG.loveLetter.signoff;
          signoffEl.classList.add("is-visible");
        });
      }
    });
  }, { threshold: 0.35 });
  observer.observe(section);
}
function typeText(el, text, speed, onDone){
  let i = 0;
  (function step(){
    if (i <= text.length){
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(step, speed);
    } else if (onDone){
      onDone();
    }
  })();
}

/* ---------------- Love Counter ---------------- */
function initLoveCounter(){
  const start = new Date(CONFIG.anniversaryDate + "T00:00:00");

  function update(){
    const now = new Date();
    let diffMs = now - start;
    if (diffMs < 0) diffMs = 0;

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();
    let hours = now.getHours() - start.getHours();
    let minutes = now.getMinutes() - start.getMinutes();
    let seconds = now.getSeconds() - start.getSeconds();

    if (seconds < 0){ seconds += 60; minutes--; }
    if (minutes < 0){ minutes += 60; hours--; }
    if (hours < 0){ hours += 24; days--; }
    if (days < 0){
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
      months--;
    }
    if (months < 0){ months += 12; years--; }
    if (years < 0){ years = months = days = hours = minutes = seconds = 0; }

    $("#cYears").textContent = years;
    $("#cMonths").textContent = months;
    $("#cDays").textContent = days;
    $("#cHours").textContent = pad(hours);
    $("#cMinutes").textContent = pad(minutes);
    $("#cSeconds").textContent = pad(seconds);
  }

  update();
  setInterval(update, 1000);
}

/* ---------------- Reasons I Love You ---------------- */
function initReasons(){
  const card = $("#reasonCard");
  const numberEl = $("#reasonNumber");
  const textEl = $("#reasonText");
  const btn = $("#shuffleBtn");
  let lastIndex = -1;

  function showRandomReason(){
    let idx;
    do { idx = Math.floor(Math.random() * CONFIG.reasons.length); } while (idx === lastIndex && CONFIG.reasons.length > 1);
    lastIndex = idx;

    card.classList.add("is-swapping");
    setTimeout(() => {
      numberEl.textContent = pad(idx + 1);
      textEl.textContent = CONFIG.reasons[idx];
    }, 250);
    card.addEventListener("animationend", function handler(){
      card.classList.remove("is-swapping");
      card.removeEventListener("animationend", handler);
    });
  }

  showRandomReason();
  btn.addEventListener("click", showRandomReason);
}

/* ---------------- Music Player ---------------- */
let musicReady = false;
function initMusicPlayer(){
  const audio = $("#bgMusic");
  const toggleBtn = $("#musicToggle");
  const icon = $("#musicIcon");
  const titleEl = $("#musicTitle");
  const progressEl = $("#musicProgress");
  const volumeSlider = $("#volumeSlider");

  titleEl.textContent = CONFIG.music.title;
  audio.src = CONFIG.music.src;
  audio.volume = volumeSlider.value / 100;

  audio.addEventListener("error", () => {
    titleEl.textContent = "ยังไม่พบไฟล์เพลง — ใส่ไฟล์ที่ assets/music/";
    toggleBtn.style.opacity = "0.5";
    toggleBtn.style.pointerEvents = "none";
  }, { once: true });

  audio.addEventListener("canplaythrough", () => { musicReady = true; }, { once: true });

  toggleBtn.addEventListener("click", () => {
    if (audio.paused){
      audio.play().catch(() => {});
      icon.textContent = "⏸";
    } else {
      audio.pause();
      icon.textContent = "▶";
    }
  });

  audio.addEventListener("timeupdate", () => {
    if (audio.duration){
      progressEl.style.width = (audio.currentTime / audio.duration * 100) + "%";
    }
  });

  volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value / 100;
  });
}
function tryPlayMusic(){
  const audio = $("#bgMusic");
  const icon = $("#musicIcon");
  if (!audio) return;
  audio.play().then(() => { icon.textContent = "⏸"; }).catch(() => {
    /* Autoplay blocked — user can press play manually, per requirement music
       only plays after a user click, so this is expected/fine on strict browsers */
  });
}

/* ---------------- Surprise / Gift ---------------- */
function initGiftSurprise(){
  const btn = $("#giftBtn");
  const message = $("#surpriseMessage");
  let opened = false;

  btn.addEventListener("click", () => {
    if (opened) return;
    opened = true;

    launchConfetti({ count: 160, spread: true });
    launchHeartExplosion(btn);
    btn.classList.add("is-opened");

    setTimeout(() => {
      message.classList.add("is-visible");
    }, 400);
  });
}
function launchHeartExplosion(originEl){
  const rect = originEl.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;
  const hearts = ["❤","💕","💖","💗","💓"];

  for(let i = 0; i < 24; i++){
    const heart = document.createElement("span");
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.position = "fixed";
    heart.style.left = originX + "px";
    heart.style.top = originY + "px";
    heart.style.fontSize = (1 + Math.random() * 1.6) + "rem";
    heart.style.zIndex = "250";
    heart.style.pointerEvents = "none";
    heart.style.willChange = "transform, opacity";
    document.body.appendChild(heart);

    const angle = Math.random() * Math.PI * 2;
    const distance = 120 + Math.random() * 220;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    heart.animate([
      { transform: "translate(0,0) scale(0.6)", opacity: 1 },
      { transform: `translate(${dx}px, ${dy}px) scale(1.1)`, opacity: 0 }
    ], {
      duration: 1000 + Math.random() * 500,
      easing: "cubic-bezier(.22,.9,.32,1)"
    }).onfinish = () => heart.remove();
  }
}

/* =====================================================================
   8. CONFETTI (lightweight canvas implementation — no external library)
   ===================================================================== */
function launchConfetti({ count = 120, spread = false } = {}){
  const canvas = $("#confettiCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#F7C6D9", "#D9A5A0", "#9B6EA8", "#5B3B6E", "#E8C39E", "#FFFFFF"];
  const pieces = [];

  for(let i = 0; i < count; i++){
    pieces.push({
      x: spread ? Math.random() * canvas.width : canvas.width / 2,
      y: spread ? -20 - Math.random() * 200 : canvas.height / 2,
      w: 6 + Math.random() * 6,
      h: 8 + Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      vx: (Math.random() - 0.5) * 4,
      vy: 2 + Math.random() * 4,
      opacity: 1
    });
  }

  let frame = 0;
  const maxFrames = 220;

  function tick(){
    frame++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.04;
      p.rotation += p.rotationSpeed;
      if (frame > maxFrames * 0.6) p.opacity -= 0.02;

      ctx.save();
      ctx.globalAlpha = Math.max(p.opacity, 0);
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    if (frame < maxFrames){
      requestAnimationFrame(tick);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  requestAnimationFrame(tick);
}

window.addEventListener("resize", () => {
  const canvas = $("#confettiCanvas");
  if (canvas){ canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
});

/* =====================================================================
   9. SCROLL REVEAL (IntersectionObserver, fade/scale/blur handled in CSS)
   ===================================================================== */
function initScrollReveal(){
  const items = $$(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
  items.forEach(el => observer.observe(el));
}

/* =====================================================================
   10. SCROLL THREAD (signature scroll-progress element)
   ===================================================================== */
function initScrollThread(){
  const line = $(".scroll-thread");
  const charm = $("#scrollCharm");
  if (!line || !charm) return;

  function update(){
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    const trackHeight = line.clientHeight;
    charm.style.top = (progress * trackHeight) + "px";
  }
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

/* =====================================================================
   11. BOOTSTRAP
   ===================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initAmbientLayer($("#ambientLayer"), { heartCount: 6, sparkleCount: 8 });
  initLockGate();
});