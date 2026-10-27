// Storage
const store = {
  get(k, fb) { try { return localStorage.getItem(k) ?? fb; } catch(e) { return (window.__m||{})[k]??fb; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch(e) { window.__m=window.__m||{}; window.__m[k]=v; } }
};

// I18N
const I18N = {
  es: {
    "nav.about":"Sobre mí","nav.experience":"Experiencia","nav.projects":"Proyectos","nav.certificates":"Certificados","nav.contact":"Contacto",
    "hero.eyebrow":"Desarrollador Full Stack","hero.available":"Disponible para incorporación inmediata",
    "hero.tagline":"Construyo aplicaciones web y móviles con Angular, React, Node.js y Firebase, siempre con TypeScript. Mis últimos proyectos son Nido, una PWA para organizar una casa, y CarGest, mi TFG.",
    "hero.cta_projects":"Ver proyectos","hero.cta_contact":"Contactar",
    "about.eyebrow":"Perfil","about.title":"Sobre mí",
    "about.p1":"Soy desarrollador full stack en Alicante. Estoy terminando Ingeniería Multimedia en la Universidad de Alicante, con todas las asignaturas superadas y solo me queda defender el TFG. Me centro en aplicaciones web y móviles interactivas.",
    "about.p2":"Trabajo principalmente con Angular, Ionic, React, Vue.js, Firebase y TypeScript, y lo complemento con backend (Node.js, C#, PL/SQL) y mis prácticas en un proyecto bancario de NTT Data me han dado experiencia en entornos corporativos (COBOL, JCL y DB2). Esa combinación me da una perspectiva completa del software.",
    "about.p3":"Ahora mismo estoy en búsqueda activa de mi primera oportunidad como desarrollador full stack. Soy de aprender rápido y no me cierro a stacks nuevos.",
    "about.skills.frontend":"Frontend & Móvil","about.skills.backend":"Backend & Datos","about.skills.mainframe":"Mainframe","about.skills.langs":"Lenguajes","about.skills.ai":"IA & Herramientas",
    "exp.eyebrow":"Trayectoria","exp.title":"Experiencia y formación",
    "exp.ntt.date":"Abr 2026 — Jul 2026","exp.ntt.role":"Prácticas — Desarrollo de software (sector bancario)",
    "exp.ntt.desc":"Desarrollo y mantenimiento de programas y procesos batch con acceso a datos en un proyecto del sector bancario, dentro de un equipo de sistemas y con metodología de trabajo corporativa.",
    "exp.uni.date":"2022 — 2026","exp.uni.role":"Grado en Ingeniería Multimedia",
    "exp.uni.desc":"Desarrollo web y móvil, entornos gráficos e interactivos, bases de datos y diseño UX/UI. Todas las asignaturas superadas; pendiente de defender el TFG: CarGest, aplicación de gestión de vehículos.",
    "proj.eyebrow":"Trabajo","proj.title":"Proyectos","proj.subtitle":"Una selección de los proyectos en los que he trabajado.",
    "proj.status.live":"Publicado","proj.status.progress":"Fase final",
    "proj.nido.desc":"PWA para organizar una casa entre varias personas: lista de la compra en tiempo real con cantidades, precios, fotos e historial; tareas con turnos y repetición; menú semanal y preguntas recurrentes («¿quién quiere pan para cenar?»). Cuentas con Google, email y Face ID (passkeys), avisos push y modo demo. Diseño propio, pensado para que lo use cualquiera de la familia.",
    "proj.noma.desc":"Plataforma digital para descubrir productos artesanales de proximidad con distintivos de calidad (DO, DOP, IGP), mapa interactivo y asistente conversacional. Responsable del chatbot y de la estrategia SEO.",
    "proj.epicbox.desc":"Marketplace de recursos digitales para creadores: modelos 3D y 2D, scripts, packs y efectos. Catálogo por categorías, cuentas de usuario y carrito.",
    "proj.cargest.desc":"PWA para la gestión integral de vehículos personales: documentación con avisos de caducidad, mantenimientos, gastos con estadísticas y talleres cercanos en mapa. TFG en la Universidad de Alicante.",
    "proj.link.demo":"Probar la app →","proj.link.ficha":"Ver la ficha →","proj.link.noma":"Ver en GitHub →","proj.link.github":"Ver en GitHub →","proj.link.soon":"Privado hasta la defensa",
    "cert.eyebrow":"Formación continua","cert.title":"Certificados",
    "cert.empty.title":"Aún no hay certificados publicados",
    "cert.empty.desc":"Iré añadiendo aquí las certificaciones que complete, como cursos de LinkedIn Learning o mi nivel de inglés.",
    "form.name":"Nombre","form.email":"Email","form.subject":"Asunto","form.message":"Mensaje",
    "form.name_ph":"Tu nombre","form.email_ph":"tu@email.com",
    "form.subject_ph":"¿En qué puedo ayudarte?","form.message_ph":"Cuéntame más...",
    "form.send":"Enviar mensaje","form.sending":"Enviando...",
    "form.success":"¡Mensaje enviado! Te responderé pronto.",
    "form.error":"Algo fue mal. Inténtalo de nuevo o escríbeme directamente.",
    "contact.eyebrow":"Contacto","contact.title":"Hablemos",
    "contact.subtitle":"Estoy abierto a oportunidades y colaboraciones. Puedes escribirme por cualquiera de estos canales."
  },
  en: {
    "nav.about":"About","nav.experience":"Experience","nav.projects":"Projects","nav.certificates":"Certificates","nav.contact":"Contact",
    "hero.eyebrow":"Full Stack Developer","hero.available":"Available to start immediately",
    "hero.tagline":"I build web and mobile apps with Angular, React, Node.js and Firebase, always with TypeScript. My latest projects are Nido, a PWA to run a shared household, and CarGest, my final-year project.",
    "hero.cta_projects":"View projects","hero.cta_contact":"Get in touch",
    "about.eyebrow":"Profile","about.title":"About me",
    "about.p1":"I'm a full stack developer based in Alicante, Spain. I'm finishing my Multimedia Engineering degree at the University of Alicante, with all coursework complete and only my final project (TFG) left to defend. I focus on interactive web and mobile applications.",
    "about.p2":"I mainly work with Angular, Ionic, React, Vue.js, Firebase and TypeScript, complemented by backend work (Node.js, C#, PL/SQL) and my internship on a banking project at NTT Data gave me experience in corporate environments (COBOL, JCL and DB2). That combination gives me a complete view of software.",
    "about.p3":"I'm currently looking for my first opportunity as a full stack developer. I pick up new stacks quickly and I'm not tied to a fixed toolset.",
    "about.skills.frontend":"Frontend & Mobile","about.skills.backend":"Backend & Data","about.skills.mainframe":"Mainframe","about.skills.langs":"Languages","about.skills.ai":"AI & Tools",
    "exp.eyebrow":"Career","exp.title":"Experience & education",
    "exp.ntt.date":"Apr 2026 — Jul 2026","exp.ntt.role":"Internship — Software Development (banking sector)",
    "exp.ntt.desc":"Development and maintenance of programs and batch processes with data access on a banking-sector project, within a systems team and a corporate way of working.",
    "exp.uni.date":"2022 — 2026","exp.uni.role":"BSc in Multimedia Engineering",
    "exp.uni.desc":"Web and mobile development, graphical and interactive environments, databases and UX/UI design. All coursework completed; final project (TFG) pending defence: CarGest, a vehicle management app.",
    "proj.eyebrow":"Work","proj.title":"Projects","proj.subtitle":"A selection of the projects I've worked on.",
    "proj.status.live":"Live","proj.status.progress":"Final stage",
    "proj.nido.desc":"A PWA to run a shared household: real-time shopping list with quantities, prices, photos and history; chores with turns and repetition; weekly menu and recurring questions (\"who wants bread for dinner?\"). Sign-in with Google, email and Face ID (passkeys), push notifications and a demo mode. Own design, built so anyone in the family can use it.",
    "proj.noma.desc":"A digital platform to discover local artisanal products with quality certifications (DO, DOP, IGP), interactive map and conversational assistant. Responsible for the chatbot and the SEO strategy.",
    "proj.epicbox.desc":"Digital asset marketplace for creators: 3D and 2D models, scripts, packs and effects. Category catalog, user accounts and shopping cart.",
    "proj.cargest.desc":"PWA for personal vehicle management: documents with expiry alerts, maintenance tracking, expenses with statistics and nearby workshops on a map. Final-year project at University of Alicante.",
    "proj.link.demo":"Try the app →","proj.link.ficha":"View the project page →","proj.link.noma":"View on GitHub →","proj.link.github":"View on GitHub →","proj.link.soon":"Private until defence",
    "cert.eyebrow":"Continuous learning","cert.title":"Certificates",
    "cert.empty.title":"No certificates published yet",
    "cert.empty.desc":"I'll add the certifications I complete here, such as LinkedIn Learning courses or my English level.",
    "form.name":"Name","form.email":"Email","form.subject":"Subject","form.message":"Message",
    "form.name_ph":"Your name","form.email_ph":"you@email.com",
    "form.subject_ph":"How can I help?","form.message_ph":"Tell me more...",
    "form.send":"Send message","form.sending":"Sending...",
    "form.success":"Message sent! I'll get back to you soon.",
    "form.error":"Something went wrong. Try again or write to me directly.",
    "contact.eyebrow":"Contact","contact.title":"Let's talk",
    "contact.subtitle":"I'm open to opportunities and collaborations. Reach me through any of these channels."
  }
};

let lang = store.get("lang", "es");
let theme = store.get("theme", "dark");

function applyI18n(l) {
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = I18N[l][el.getAttribute("data-i18n")];
    if (v) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const v = I18N[l][el.getAttribute("data-i18n-placeholder")];
    if (v) el.placeholder = v;
  });
  document.querySelector("[data-lang-label]").textContent = l === "es" ? "EN" : "ES";
}
function applyTheme(t) { document.documentElement.setAttribute("data-theme", t); }

document.getElementById("lang-toggle").addEventListener("click", () => {
  lang = lang === "es" ? "en" : "es";
  store.set("lang", lang); applyI18n(lang);
});
document.getElementById("theme-toggle").addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  store.set("theme", theme); applyTheme(theme);
});

const burger = document.getElementById("nav-toggle");
const mobileNav = document.getElementById("nav-links-mobile");
burger.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(open));
});
mobileNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
}));

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      // stagger siblings
      const siblings = e.target.parentElement.querySelectorAll(".reveal");
      siblings.forEach((s, idx) => {
        if (s === e.target) {
          setTimeout(() => s.classList.add("visible"), 0);
        }
      });
      e.target.classList.add("visible");
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));


// Contact form — Formspree
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector(".btn-submit");
    const label = contactForm.querySelector(".btn-label");
    const successEl = document.getElementById("form-success");
    const errorEl = document.getElementById("form-error");

    // Reset
    successEl.classList.remove("show");
    errorEl.classList.remove("show");
    btn.disabled = true;
    label.textContent = I18N[lang]["form.sending"];

    try {
      const res = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { Accept: "application/json" }
      });
      if (res.ok) {
        successEl.classList.add("show");
        contactForm.reset();
      } else {
        errorEl.classList.add("show");
      }
    } catch {
      errorEl.classList.add("show");
    } finally {
      btn.disabled = false;
      label.textContent = I18N[lang]["form.send"];
    }
  });
}

// Init
applyTheme(theme);
applyI18n(lang);
document.getElementById("year").textContent = new Date().getFullYear();