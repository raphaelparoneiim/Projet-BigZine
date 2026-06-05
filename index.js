const sketches = [
  { day: 1, title: "One_Color", slug: "day-01-one-color-one-shape" },
  { day: 2, title: "Principles", slug: "day-02-twelve-principles" },
  { day: 3, title: "Fibonacci", slug: "day-03-fibonacci-forever" },
  { day: 4, title: "Low_Res", slug: "day-04-lowres" },
  { day: 5, title: "Write_Genuary", slug: "day-05-write-genuary" },
  { day: 6, title: "Lights", slug: "day-06-lights-on-off" },
  { day: 7, title: "Boolean", slug: "day-07-boolean-algebra" },
  { day: 8, title: "A_City", slug: "day-08-a-city" },
  { day: 9, title: "Automaton", slug: "day-09-crazy-automaton" },
  { day: 10, title: "Polar", slug: "day-10-polar-coordinates" },
  { day: 11, title: "Quine", slug: "day-11-quine" },
  { day: 12, title: "Boxes", slug: "day-12-boxes-only" },
  { day: 13, title: "Portrait", slug: "day-13-self-portrait" },
  { day: 14, title: "Fits", slug: "day-14-everything-fits" },
  { day: 15, title: "Invisible", slug: "day-15-invisible-object" },
  { day: 16, title: "Order", slug: "day-16-order-and-disorder" },
  { day: 17, title: "Wallpaper", slug: "day-17-wallpaper-group" },
  { day: 18, title: "Path", slug: "day-18-unexpected-path" },
  { day: 19, title: "Grid16", slug: "day-19-16x16" },
  { day: 20, title: "OneLine", slug: "day-20-one-line" },
  { day: 21, title: "Bauhaus", slug: "day-21-bauhaus-poster" },
  { day: 22, title: "Plotter", slug: "day-22-pen-plotter-ready" },
  { day: 23, title: "Glass", slug: "day-23-transparency" },
  { day: 24, title: "Nightmare", slug: "day-24-perfectionists-nightmare" },
  { day: 25, title: "Organic", slug: "day-25-organic-geometry" },
  { day: 26, title: "Recursive", slug: "day-26-recursive-grids" },
  { day: 27, title: "Lifeform", slug: "day-27-lifeform" },
  { day: 28, title: "Vanilla", slug: "day-28-no-libraries" },
  { day: 29, title: "Genetic", slug: "day-29-genetic-evolution" },
  { day: 30, title: "Bug", slug: "day-30-its-not-a-bug" },
  { day: 31, title: "GLSL", slug: "day-31-glsl-day" },
];

let zIndex = 100;

// 1. BOOT LOGIC
document.getElementById("power-btn").onclick = () => {
  document.querySelector(".boot-center").style.display = "none";
  const logsContainer = document.getElementById("bios-logs");
  logsContainer.style.display = "block";
  const lines = [
    "INITIALIZING BOOT SEQUENCE...",
    "CPU_CORE_CHECK: OK",
    "VRAM_ALLOCATION: 4096MB OK",
    "MEM_TEST: 0x00045F... OK",
    "DETECTING_DRIVES: GENUARY_SSD_01 FOUND",
    "MOUNTING_SYSTEM: OK",
    "LOADING_MATRIX_KERNEL: 100%",
    "ESTABLISHING_NEURAL_LINK...",
    "STARTING_GUI_INTERFACE...",
  ];
  lines.forEach((l, i) => {
    setTimeout(() => {
      const p = document.createElement("p");
      p.textContent = `> ${l}`;
      logsContainer.appendChild(p);
      if (i === lines.length - 1)
        setTimeout(() => {
          document.getElementById("boot-screen").style.display = "none";
          document.getElementById("pc-container").style.display = "block";
          initMatrix();
        }, 600);
    }, i * 180);
  });
};

// 2. WINDOW SYSTEM
function createWindow(
  title,
  content,
  isIframe = false,
  width = 600,
  height = 400,
) {
  const temp = document.getElementById("window-template");
  const win = temp.content.cloneNode(true).querySelector(".window");

  win.style.width = width + "px";
  win.style.height = height + "px";
  win.style.top = 80 + (zIndex % 150) + "px";
  win.style.left = 100 + (zIndex % 150) + "px";
  win.style.zIndex = ++zIndex;
  win.querySelector(".window-title").textContent = title;

  const body = win.querySelector(".window-body");
  if (isIframe) {
    const f = document.createElement("iframe");
    f.src = content;
    body.appendChild(f);
  } else {
    body.innerHTML = content;
  }

  win.querySelector(".close-btn").onclick = () => win.remove();
  win.onmousedown = () => (win.style.zIndex = ++zIndex);

  setupDrag(win);
  setupResize(win);
  document.getElementById("desktop").appendChild(win);
}

function setupDrag(win) {
  const header = win.querySelector(".window-header");
  header.onmousedown = (e) => {
    let sx = e.clientX - win.offsetLeft;
    let sy = e.clientY - win.offsetTop;
    const move = (m) => {
      win.style.left = m.clientX - sx + "px";
      win.style.top = m.clientY - sy + "px";
    };
    document.onmousemove = move;
    document.onmouseup = () => (document.onmousemove = null);
  };
}

function setupResize(win) {
  const resizer = win.querySelector(".resizer");
  resizer.onmousedown = (e) => {
    e.stopPropagation();
    const startW = win.offsetWidth;
    const startH = win.offsetHeight;
    const startX = e.clientX;
    const startY = e.clientY;
    const move = (m) => {
      win.style.width = startW + m.clientX - startX + "px";
      win.style.height = startH + m.clientY - startY + "px";
    };
    document.onmousemove = move;
    document.onmouseup = () => (document.onmousemove = null);
  };
}

// 3. ECOUTEUR POUR LE CHATBOT (Critical AI)
// Permet de lancer un jour Genuary via une phrase dans le chat
window.addEventListener("message", (event) => {
  if (event.data.type === "openDay") {
    const dayNum = parseInt(event.data.day);
    const s = sketches.find((sk) => sk.day === dayNum);
    if (s) {
      createWindow(
        `DAY_${dayNum}: ${s.title}`,
        `./${s.slug}/index.html`,
        true,
        800,
        600,
      );
    }
  }
});

// 4. APP ACTIONS (Double-clic icônes)
document.querySelectorAll(".icon").forEach((icon) => {
  icon.ondblclick = () => {
    const type = icon.dataset.type;
    if (type === "explorer") {
      let html = '<div class="file-grid">';
      sketches.forEach(
        (s) =>
          (html += `<div class="file-item" onclick="createWindow('GENUARY_VIEWER', './${s.slug}/index.html', true, 800, 600)"><div class="file-icon-small"></div><span>${s.day}.EXE</span></div>`),
      );
      createWindow("C:/GENUARY_2025/", html + "</div>");
    } else if (type === "ai") {
      createWindow(
        "CRITICAL_AGENT_v4",
        "criticalai4/index.html",
        true,
        400,
        550,
      );
    } else if (type === "about") {
      createWindow("ABOUT.exe", "about.html", true, 520, 480);
    } else if (type === "project") {
      createWindow("PROJECT.exe", "project.html", true, 620, 560);
    } else if (type === "qr") {
      createWindow("QR_CODE.exe", "qr.html", true, 360, 420);
    } else if (type === "notepad") {
      createWindow(
        "NOTES.txt",
        '<textarea class="notepad-area">-- GENUARY LOG --\n> Tout le code est fonctionnel.\n> Matrix protocol active.</textarea>',
      );
    }
  };
});

// 5. CLOCK
setInterval(() => {
  const d = new Date();
  document.getElementById("clock").textContent = d.toLocaleTimeString();
}, 1000);

// 6. MATRIX BG
function initMatrix() {
  const c = document.getElementById("matrix-canvas");
  const ctx = c.getContext("2d");
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  const columns = Math.floor(c.width / 20);
  const drops = Array(columns).fill(1);
  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#0f0";
    ctx.font = "15px monospace";
    drops.forEach((y, i) => {
      ctx.fillText(String.fromCharCode(Math.random() * 128), i * 20, y * 20);
      if (y * 20 > c.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
  }
  setInterval(draw, 50);
}
