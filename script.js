// Toggle menú móvil
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("open");
    }
  });
}

// Año actual en el footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Botones "Ver más detalles" que llevan a secciones internas
const goButtons = document.querySelectorAll(".go-section");

goButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Animación de aparición al hacer scroll
const revealElements = document.querySelectorAll(".reveal");

function handleReveal() {
  const triggerBottom = window.innerHeight * 0.86;

  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleReveal);
window.addEventListener("load", handleReveal);

// ===== GALERÍA REDES (MODAL + CARRUSEL) =====
const redesImages = [
  "img/evidencias/redes/evidencia-1.png",
  "img/evidencias/redes/evidencia-2.png",
  "img/evidencias/redes/evidencia-3.png",
  "img/evidencias/redes/evidencia-4.png",
  "img/evidencias/redes/evidencia-5.png",
  "img/evidencias/redes/evidencia-6.png",
  "img/evidencias/redes/evidencia-7.png",
  "img/evidencias/redes/evidencia-8.png",
  "img/evidencias/redes/evidencia-9.png",
  "img/evidencias/redes/evidencia-10.png",
];

let redesIndex = 0;

const redesModal = document.getElementById("redesModal");
const redesOverlay = document.getElementById("redesOverlay");
const redesClose = document.getElementById("redesClose");
const redesPrev = document.getElementById("redesPrev");
const redesNext = document.getElementById("redesNext");
const redesImg = document.getElementById("redesImg");
const redesCaption = document.getElementById("redesCaption");
const openRedesBtn = document.getElementById("openRedesGallery");

function updateRedesImage() {
  redesImg.src = redesImages[redesIndex];
  redesCaption.textContent = `Evidencia de trabajos de redes (${redesIndex + 1} / ${redesImages.length})`;
}

function openRedesModal() {
  redesIndex = 0;
  updateRedesImage();
  redesModal.classList.add("open");
}

function closeRedesModal() {
  redesModal.classList.remove("open");
}

function prevRedes() {
  redesIndex = (redesIndex - 1 + redesImages.length) % redesImages.length;
  updateRedesImage();
}

function nextRedes() {
  redesIndex = (redesIndex + 1) % redesImages.length;
  updateRedesImage();
}

if (openRedesBtn) openRedesBtn.addEventListener("click", openRedesModal);
if (redesClose) redesClose.addEventListener("click", closeRedesModal);
if (redesOverlay) redesOverlay.addEventListener("click", closeRedesModal);
if (redesPrev) redesPrev.addEventListener("click", prevRedes);
if (redesNext) redesNext.addEventListener("click", nextRedes);

// Cerrar con tecla ESC
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && redesModal.classList.contains("open")) {
    closeRedesModal();
  }
});
// ===== GALERÍA SOPORTE =====
const soporteImages = [
  "img/evidencias/reparacion/evidencia-1.png",
  "img/evidencias/reparacion/evidencia-2.png",
  "img/evidencias/reparacion/evidencia-3.png",
  "img/evidencias/reparacion/evidencia-4.png",
  "img/evidencias/reparacion/evidencia-5.png",
  "img/evidencias/reparacion/evidencia-6.png",
  "img/evidencias/reparacion/evidencia-7.png",
  "img/evidencias/reparacion/evidencia-8.png",
  "img/evidencias/reparacion/evidencia-9.png",
  "img/evidencias/reparacion/evidencia-10.png",
  "img/evidencias/reparacion/evidencia-11.png",
  "img/evidencias/reparacion/evidencia-12.png",
  "img/evidencias/reparacion/evidencia-13.png",
  "img/evidencias/reparacion/evidencia-14.png",
  "img/evidencias/reparacion/evidencia-15.png",
  "img/evidencias/reparacion/evidencia-16.png",
  "img/evidencias/reparacion/evidencia-17.png",
  // ...
];

let soporteIndex = 0;

const soporteModal = document.getElementById("soporteModal");
const soporteOverlay = document.getElementById("soporteOverlay");
const soporteClose = document.getElementById("soporteClose");
const soportePrev = document.getElementById("soportePrev");
const soporteNext = document.getElementById("soporteNext");
const soporteImg = document.getElementById("soporteImg");
const soporteCaption = document.getElementById("soporteCaption");
const openSoporteBtn = document.getElementById("openSoporteGallery");

function updateSoporteImage() {
  soporteImg.src = soporteImages[soporteIndex];
  soporteCaption.textContent = `Evidencia de trabajos de soporte (${soporteIndex + 1} / ${soporteImages.length})`;
}

function openSoporteModal() {
  soporteIndex = 0;
  updateSoporteImage();
  soporteModal.classList.add("open");
}

function closeSoporteModal() {
  soporteModal.classList.remove("open");
}

function prevSoporte() {
  soporteIndex = (soporteIndex - 1 + soporteImages.length) % soporteImages.length;
  updateSoporteImage();
}

function nextSoporte() {
  soporteIndex = (soporteIndex + 1) % soporteImages.length;
  updateSoporteImage();
}

if (openSoporteBtn) openSoporteBtn.addEventListener("click", openSoporteModal);
if (soporteClose) soporteClose.addEventListener("click", closeSoporteModal);
if (soporteOverlay) soporteOverlay.addEventListener("click", closeSoporteModal);
if (soportePrev) soportePrev.addEventListener("click", prevSoporte);
if (soporteNext) soporteNext.addEventListener("click", nextSoporte);

// ===== GALERÍA CIBERSEGURIDAD =====
const ciberImages = [
  "img/evidencias/seguridad/evidencia-1.png",
  "img/evidencias/seguridad/evidencia-2.png",
  "img/evidencias/seguridad/evidencia-3.png",
  "img/evidencias/seguridad/evidencia-4.png",
  "img/evidencias/seguridad/evidencia-5.png",
  "img/evidencias/seguridad/evidencia-6.png",
  "img/evidencias/seguridad/evidencia-7.png",
  "img/evidencias/seguridad/evidencia-8.png",
  "img/evidencias/seguridad/evidencia-9.png",
  "img/evidencias/seguridad/evidencia-10.png",
  // ...
];

let ciberIndex = 0;

const ciberModal = document.getElementById("ciberModal");
const ciberOverlay = document.getElementById("ciberOverlay");
const ciberClose = document.getElementById("ciberClose");
const ciberPrev = document.getElementById("ciberPrev");
const ciberNext = document.getElementById("ciberNext");
const ciberImg = document.getElementById("ciberImg");
const ciberCaption = document.getElementById("ciberCaption");
const openCiberBtn = document.getElementById("openCiberGallery");

function updateCiberImage() {
  ciberImg.src = ciberImages[ciberIndex];
  ciberCaption.textContent = `Evidencia de prácticas de ciberseguridad (${ciberIndex + 1} / ${ciberImages.length})`;
}

function openCiberModal() {
  ciberIndex = 0;
  updateCiberImage();
  ciberModal.classList.add("open");
}

function closeCiberModal() {
  ciberModal.classList.remove("open");
}

function prevCiber() {
  ciberIndex = (ciberIndex - 1 + ciberImages.length) % ciberImages.length;
  updateCiberImage();
}

function nextCiber() {
  ciberIndex = (ciberIndex + 1) % ciberImages.length;
  updateCiberImage();
}

if (openCiberBtn) openCiberBtn.addEventListener("click", openCiberModal);
if (ciberClose) ciberClose.addEventListener("click", closeCiberModal);
if (ciberOverlay) ciberOverlay.addEventListener("click", closeCiberModal);
if (ciberPrev) ciberPrev.addEventListener("click", prevCiber);
if (ciberNext) ciberNext.addEventListener("click", nextCiber);

// ===== GALERÍA DESARROLLO WEB =====
const webImages = [
  "img/evidencias/web/web-1.png",
  "img/evidencias/web/web-2.png",
  "img/evidencias/web/web-3.png",
  // ...
];

let webIndex = 0;

const webModal = document.getElementById("webModal");
const webOverlay = document.getElementById("webOverlay");
const webClose = document.getElementById("webClose");
const webPrev = document.getElementById("webPrev");
const webNext = document.getElementById("webNext");
const webImg = document.getElementById("webImg");
const webCaption = document.getElementById("webCaption");
const openWebBtn = document.getElementById("openWebGallery");

function updateWebImage() {
  webImg.src = webImages[webIndex];
  webCaption.textContent = `Proyectos de desarrollo web (${webIndex + 1} / ${webImages.length})`;
}

function openWebModal() {
  webIndex = 0;
  updateWebImage();
  webModal.classList.add("open");
}

function closeWebModal() {
  webModal.classList.remove("open");
}

function prevWeb() {
  webIndex = (webIndex - 1 + webImages.length) % webImages.length;
  updateWebImage();
}

function nextWeb() {
  webIndex = (webIndex + 1) % webImages.length;
  updateWebImage();
}

if (openWebBtn) openWebBtn.addEventListener("click", openWebModal);
if (webClose) webClose.addEventListener("click", closeWebModal);
if (webOverlay) webOverlay.addEventListener("click", closeWebModal);
if (webPrev) webPrev.addEventListener("click", prevWeb);
if (webNext) webNext.addEventListener("click", nextWeb);
// ===== FORMULARIO DE CONTACTO (EMAILJS + límite de 3 envíos por correo) =====
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

// Manejo de conteo de envíos por correo con localStorage
function getEmailCount(email) {
  try {
    const raw = localStorage.getItem("contactFormCounts");
    const counts = raw ? JSON.parse(raw) : {};
    return counts[email] || 0;
  } catch (e) {
    return 0;
  }
}

function setEmailCount(email, count) {
  try {
    const raw = localStorage.getItem("contactFormCounts");
    const counts = raw ? JSON.parse(raw) : {};
    counts[email] = count;
    localStorage.setItem("contactFormCounts", JSON.stringify(counts));
  } catch (e) {
    // si falla localStorage, no pasa nada grave
  }
}

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita recargar la página

    const emailInput = document.getElementById("email");
    const emailValue = emailInput ? emailInput.value.trim().toLowerCase() : "";

    // Validar correo
    if (!emailValue) {
      if (formStatus) {
        formStatus.textContent = "Por favor, escribe un correo válido.";
        formStatus.style.color = "#f97373"; // rojo suave
      }
      return;
    }

    // Limitar a 3 envíos por correo (por navegador)
    const currentCount = getEmailCount(emailValue);
    if (currentCount >= 3) {
      if (formStatus) {
        formStatus.textContent =
          "Este correo ya ha enviado el formulario 3 veces. " +
          "Si necesitas más ayuda, escríbeme directamente a luquesmith537@gmail.com.";
        formStatus.style.color = "#f97373";
      }
      return;
    }

    // Mensaje de cargando
    if (formStatus) {
      formStatus.textContent = "Enviando mensaje...";
      formStatus.style.color = "#e5e7eb"; // gris claro
    }

    // === TUS IDS REALES DE EMAILJS ===
    const SERVICE_ID = "service_ci0mv8n";
    const TEMPLATE_ID = "template_wvhgd9y";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, "#contactForm")
      .then(() => {
        // sumar 1 al contador de este correo
        setEmailCount(emailValue, currentCount + 1);

        if (formStatus) {
          formStatus.textContent =
            "¡Mensaje enviado correctamente! Te responderé lo antes posible.";
          formStatus.style.color = "#22c55e"; // verde
        }
        contactForm.reset();
      })
      .catch((error) => {
        console.error("EMAILJS ERROR:", error);
        if (formStatus) {
          formStatus.textContent =
            "Hubo un error al enviar el mensaje. También puedes escribirme a luquesmith537@gmail.com.";
          formStatus.style.color = "#f97373"; // rojo
        }
      });
  });
}
