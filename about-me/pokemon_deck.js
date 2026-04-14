// ─────────────────────────────────────────────
//  DECK DATA
//  To add a new deck, copy the template at the
//  bottom and paste it as a new entry in `decks`.
// ─────────────────────────────────────────────

const decks = {

  "Fire-Fighting-Psychic": {
    "Energies": [
      { name: "Strong Energy",   img: "../images/about_me/Pokemon/Strong_Energy.png",   count: 1 },
      { name: "Fighting Energy", img: "../images/about_me/Pokemon/Fighting_Energy.webp", count: 8 },
      { name: "Fire Energy",     img: "../images/about_me/Pokemon/Fire_Energy.jpg",      count: 9 },
      { name: "Psychic Energy",  img: "../images/about_me/Pokemon/Psychic_Energy.jpg",   count: 5 },
    ],
    "Items": [
      { name: "Rare Candy",       img: "../images/about_me/Pokemon/Rare_Candy.png",        count: 2 },
      { name: "Great Ball",       img: "../images/about_me/Pokemon/Great_Ball.png",         count: 2 },
      { name: "Switch",           img: "../images/about_me/Pokemon/Switch.png",             count: 2 },
      { name: "Lost Vacuum",      img: "../images/about_me/Pokemon/Lost_Vacuum.png",        count: 1 },
      { name: "Pokémon Catcher",  img: "../images/about_me/Pokemon/Pokemon_Catcher.png",   count: 1 },
      { name: "Pokégear 3.0",     img: "../images/about_me/Pokemon/pokegear_3_0.png",       count: 1 },
    ],
    "Pokémon Tools": [
      { name: "Rock Chestplate", img: "../images/about_me/Pokemon/Rock_Chestplate.png", count: 1 },
      { name: "Buff Padding",    img: "../images/about_me/Pokemon/Buff_Padding.png",    count: 1 },
    ],
    "Supporters": [
      { name: "Kindler",       img: "../images/about_me/Pokemon/Kindler.png",       count: 2 },
      { name: "Mela",          img: "../images/about_me/Pokemon/Mela.png",          count: 1 },
      { name: "Cyllene",       img: "../images/about_me/Pokemon/Cyllene.png",       count: 1 },
      { name: "Ninja Boy",     img: "../images/about_me/Pokemon/Ninja_Boy.png",     count: 1 },
      { name: "Boss's Orders", img: "../images/about_me/Pokemon/Boss's_Orders.png", count: 1 },
      { name: "Jacq",          img: "../images/about_me/Pokemon/Jacq.png",          count: 1 },
    ],
    // Pokémon: each entry is either a single card OR an evo chain.
    // Single:   { name, img, count }
    // Evo set:  { evo: [ {name, img, count}, ... ] }
    "Pokémon": [
      { evo: [
          { name: "Fuecoco",       img: "../images/about_me/Pokemon/Fuecoco.png",    count: 1 },
          { name: "Crocalor",      img: "../images/about_me/Pokemon/Crocalor.png",   count: 1 },
          { name: "Skeledirge ex", img: "../images/about_me/Pokemon/Skeledirge.png", count: 1 },
      ]},
      { evo: [
          { name: "Chimchar",  img: "../images/about_me/Pokemon/Chimchar.png",  count: 1 },
          { name: "Monferno",  img: "../images/about_me/Pokemon/Monferno.png",  count: 1 },
          { name: "Infernape", img: "../images/about_me/Pokemon/Infernape.png", count: 1 },
      ]},
      { name: "Ursaluna V",  img: "../images/about_me/Pokemon/Ursaluna.png",  count: 1 },
      { evo: [
          { name: "Nacli",     img: "../images/about_me/Pokemon/Nacli.png",     count: 1 },
          { name: "Naclstack", img: "../images/about_me/Pokemon/Naclstack.png", count: 1 },
          { name: "Garganacl", img: "../images/about_me/Pokemon/Garganacl.png", count: 1 },
      ]},
      { name: "Koraidon ex", img: "../images/about_me/Pokemon/Koraidon.png",    count: 1 },
      { evo: [
          { name: "Clefairy", img: "../images/about_me/Pokemon/Clefairy.png", count: 1 },
          { name: "Clefable", img: "../images/about_me/Pokemon/Clefable.png", count: 1 },
      ]},
      { name: "Sigilyph",   img: "../images/about_me/Pokemon/Sigilyph.png",    count: 1 },
      { name: "Scream Tail", img: "../images/about_me/Pokemon/Scream_Tail.png", count: 1 },
      { name: "Chimecho",   img: "../images/about_me/Pokemon/Chimecho.png",    count: 1 },
      { evo: [
          { name: "Cutiefly", img: "../images/about_me/Pokemon/Cutiefly.png",  count: 1 },
          { name: "Ribombee", img: "../images/about_me/Pokemon/Ribombee.png",  count: 1 },
      ]},
    ],
  },

  // ── TEMPLATE ──────────────────────────────────
  // Uncomment and fill in to add a new deck:
  //
  // "Friend Name": {
  //   "Energies": [
  //     { name: "Water Energy", img: "../images/...", count: 10 },
  //   ],
  //   "Items": [],
  //   "Pokémon Tools": [],
  //   "Supporters": [],
  //   "Pokémon": [
  //     { name: "Squirtle",  img: "../images/...", count: 1 },
  //     { evo: [
  //         { name: "Squirtle",   img: "../images/...", count: 1 },
  //         { name: "Wartortle",  img: "../images/...", count: 1 },
  //         { name: "Blastoise",  img: "../images/...", count: 1 },
  //     ]},
  //   ],
  // },

};

// ─────────────────────────────────────────────
//  BUILD HELPERS
// ─────────────────────────────────────────────

/** Creates a single .card element */
function buildSingleCard(card) {
  const div = document.createElement("div");
  div.className = "card";

  const img = document.createElement("img");
  img.src = card.img;
  img.alt = card.name;

  const p = document.createElement("p");
  p.textContent = `${card.name} x${card.count}`;

  div.appendChild(img);
  div.appendChild(p);
  return div;
}

/** Creates an .evo-set element for a chain of cards */
function buildEvoSet(chain) {
  const set = document.createElement("div");
  set.className = "evo-set";

  chain.forEach((card, i) => {
    set.appendChild(buildSingleCard(card));
    if (i < chain.length - 1) {
      const arrow = document.createElement("div");
      arrow.className = "arrow";
      set.appendChild(arrow);
    }
  });

  return set;
}

// ─────────────────────────────────────────────
//  RENDER
// ─────────────────────────────────────────────

function renderDeck(deckName) {
  const deck   = decks[deckName];
  const target = document.getElementById("deck-content");
  target.innerHTML = "";

  // Fade-out then fade-in for a smooth transition
  target.classList.remove("deck-visible");

  requestAnimationFrame(() => {
    for (const [section, cards] of Object.entries(deck)) {
      // Skip empty sections
      if (!cards || cards.length === 0) continue;

      const h2 = document.createElement("h2");
      h2.textContent = section;
      target.appendChild(h2);

      const wrapper = document.createElement("div");
      wrapper.className = section === "Pokémon" ? "pokemon" : "card-type";

      cards.forEach(entry => {
        if (entry.evo) {
          wrapper.appendChild(buildEvoSet(entry.evo));
        } else {
          wrapper.appendChild(buildSingleCard(entry));
        }
      });

      target.appendChild(wrapper);
    }

    // Trigger fade-in
    requestAnimationFrame(() => target.classList.add("deck-visible"));
  });
}

// ─────────────────────────────────────────────
//  TABS
// ─────────────────────────────────────────────

function initTabs() {
  const tabBar = document.getElementById("deck-tabs");

  // Dynamically build one tab per deck so adding a deck to the data
  // automatically creates its tab — no HTML changes needed.
  Object.keys(decks).forEach((name, index) => {
    const btn = document.createElement("button");
    btn.className = "deck-tab" + (index === 0 ? " active" : "");
    btn.dataset.deck = name;
    btn.textContent = name;
    tabBar.appendChild(btn);
  });

  tabBar.addEventListener("click", e => {
    const tab = e.target.closest(".deck-tab");
    if (!tab || tab.classList.contains("active")) return;

    document.querySelector(".deck-tab.active").classList.remove("active");
    tab.classList.add("active");
    renderDeck(tab.dataset.deck);
  });
}

// ─────────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  renderDeck(Object.keys(decks)[0]);
});