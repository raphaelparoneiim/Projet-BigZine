let bot;
let botLoaded = false;

function preload() {
  bot = new RiveScript({ utf8: true });
  bot
    .loadFile(["begin.rive", "dialogue.rive"])
    .then(() => {
      bot.sortReplies();
      botLoaded = true;
    })
    .catch((e) => console.error("Erreur RiveScript:", e));
}

function setup() {
  noCanvas();

  const input = select("#user-input");
  const button = select("#send-btn");

  button.mousePressed(chat);
  input.elt.onkeydown = (e) => {
    if (e.key === "Enter") chat();
  };
}

async function chat() {
  const input = select("#user-input");
  const txt = input.value().trim();

  if (!txt) return;

  if (!botLoaded) {
    addMsg("bot", "Système en cours de chargement... Patiente.");
    return;
  }

  addMsg("user", txt);
  input.value("");

  const typingId = "typing-" + Date.now();
  addTyping(typingId);

  try {
    await new Promise((r) => setTimeout(r, 300 + Math.random() * 500));
    const reply = await bot.reply("local-user", txt);
    removeTyping(typingId);
    addMsg("bot", reply);

    // Ouvrir uniquement sur commande explicite
    const openWords = /(ouvre|montre|lance|affiche|open|show|play|launch)/i;
    if (openWords.test(txt)) {
      const match = txt.match(/(\d+)/);
      if (match) {
        const day = parseInt(match[1]);
        if (day >= 1 && day <= 31) {
          window.parent.postMessage({ type: "openDay", day: day }, "*");
        }
      }
    }
  } catch (e) {
    removeTyping(typingId);
    addMsg("bot", "Erreur de syntaxe dans mon script interne.");
  }
}

function addTyping(id) {
  const container = document.getElementById("chat-logs");
  const div = document.createElement("div");
  div.id = id;
  div.className = "msg bot typing";
  div.innerHTML = `<small>GEN-BOT</small><p class="dots"><span>.</span><span>.</span><span>.</span></p>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function removeTyping(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

function addMsg(role, text) {
  const container = document.getElementById("chat-logs");
  if (!container) return;

  const div = document.createElement("div");
  div.className = "msg " + role;

  const label = role === "user" ? "YOU" : "GEN-BOT";
  div.innerHTML = `<small>${label}</small><p>${text}</p>`;

  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}
