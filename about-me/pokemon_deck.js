// ─────────────────────────────────────────────
//  DECK DATA
//  To add a new deck, copy the template at the
//  bottom and paste it as a new entry in `decks`.
// ─────────────────────────────────────────────

const decks = {

  "Fire-Fighting-Psychic": {
    creator: "Pranav",
    format:  "Standard",
    "Energies": [
      { name: "Strong Energy",   img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Strong_Energy.png",   count: 1 },
      { name: "Fighting Energy", img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Fighting_Energy.webp", count: 8 },
      { name: "Fire Energy",     img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Fire_Energy.jpg",      count: 9 },
      { name: "Psychic Energy",  img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Psychic_Energy.jpg",   count: 5 },
    ],
    "Items": [
      { name: "Rare Candy",       img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Rare_Candy.png",        count: 2 },
      { name: "Great Ball",       img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Great_Ball.png",         count: 2 },
      { name: "Switch",           img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Switch.png",             count: 2 },
      { name: "Lost Vacuum",      img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Lost_Vacuum.png",        count: 1 },
      { name: "Pokémon Catcher",  img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Pokemon_Catcher.png",   count: 1 },
      { name: "Pokégear 3.0",     img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/pokegear_3_0.png",       count: 1 },
    ],
    "Pokémon Tools": [
      { name: "Rock Chestplate", img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Rock_Chestplate.png", count: 1 },
      { name: "Buff Padding",    img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Buff_Padding.png",    count: 1 },
    ],
    "Supporters": [
      { name: "Kindler",       img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Kindler.png",       count: 2 },
      { name: "Mela",          img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Mela.png",          count: 1 },
      { name: "Cyllene",       img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Cyllene.png",       count: 1 },
      { name: "Ninja Boy",     img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Ninja_Boy.png",     count: 1 },
      { name: "Boss's Orders", img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Boss's_Orders.png", count: 1 },
      { name: "Jacq",          img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Jacq.png",          count: 1 },
      { name: "Larry",         img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Larry.png",         count: 1 },
    ],
    // Pokémon entry types:
    //
    // Single card:
    //   { name, img, count }
    //
    // Linear evo chain:
    //   { evo: [ card, card, card ] }
    //
    // Branching evo — different Pokémon from same base ("or"):
    //   { evo: [ card, { split: "or", options: [ card, card ] } ] }
    //
    // Same Pokémon, different prints ("and"):
    //   { evo: [ card, { split: "and", options: [ card, card ] } ] }
    "Pokémon": [
      { evo: [
          { name: "Fuecoco",       img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Fuecoco.png",    count: 1 },
          { name: "Crocalor",      img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Crocalor.png",   count: 1 },
          { name: "Skeledirge ex", img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Skeledirge.png", count: 1 },
      ]},
      { evo: [
          { name: "Chimchar",  img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Chimchar.png",  count: 1 },
          { name: "Monferno",  img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Monferno.png",  count: 1 },
          { name: "Infernape", img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Infernape.png", count: 1 },
      ]},
      { name: "Ursaluna V",  img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Ursaluna.png",  count: 1 },
      { evo: [
          { name: "Nacli",     img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Nacli.png",     count: 1 },
          { name: "Naclstack", img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Naclstack.png", count: 1 },
          { name: "Garganacl", img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Garganacl.png", count: 1 },
      ]},
      { name: "Koraidon ex", img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Koraidon.png",    count: 1 },
      { evo: [
          { name: "Clefairy", img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Clefairy.png", count: 1 },
          { name: "Clefable", img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Clefable.png", count: 1 },
      ]},
      { name: "Sigilyph",    img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Sigilyph.png",    count: 1 },
      { name: "Scream Tail", img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Scream_Tail.png", count: 1 },
      { name: "Chimecho",    img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Chimecho.png",    count: 1 },
      { evo: [
          { name: "Cutiefly", img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Cutiefly.png",  count: 1 },
          { name: "Ribombee", img: "../images/about_me/Pokemon/Fire-Fighting-Psychic/Ribombee.png",  count: 1 },
      ]},
    ],
  },




  "Fire": {
    creator: "Pranav",
    format:  "Standard",
    "Energies": [
      { name: "Fire Energy", img: "../images/about_me/Pokemon/Fire/Fire_Energy.jpg", count: 18 },
    ],
    "Items": [
      { name: "Rare Candy",       img: "../images/about_me/Pokemon/Fire/Rare_Candy.png",        count: 2 },
      { name: "Great Ball",       img: "../images/about_me/Pokemon/Fire/Great_Ball.png",        count: 2 },
      { name: "Switch",           img: "../images/about_me/Pokemon/Fire/Switch.png",            count: 2 },
      { name: "Energy Retrieval", img: "../images/about_me/Pokemon/Fire/Energy_Retrieval.png",  count: 2 },
      { name: "Pokémon Catcher",  img: "../images/about_me/Pokemon/Fire/Pokemon_Catcher.png",   count: 1 },
      { name: "Pokégear 3.0",     img: "../images/about_me/Pokemon/Fire/pokegear_3_0.png",      count: 1 },
      { name: "Energy Recycler",  img: "../images/about_me/Pokemon/Fire/Energy_Recycler.png",   count: 1 },
      { name: "Blowtorch",        img: "../images/about_me/Pokemon/Fire/Blowtorch.png",         count: 1 },
    ],
    "Pokémon Tools": [
      { name: "Brave Bangle",  img: "../images/about_me/Pokemon/Fire/Brave_Bangle.png",  count: 1 },
      { name: "Rescue Board",  img: "../images/about_me/Pokemon/Fire/Rescue_Board.png",  count: 1 },
    ],
    "Supporters": [
      { name: "Kindler",       img: "../images/about_me/Pokemon/Fire/Kindler.png",       count: 2 },
      { name: "Mela",          img: "../images/about_me/Pokemon/Fire/Mela.png",          count: 1 },
      { name: "Boss's Orders", img: "../images/about_me/Pokemon/Fire/Boss's_Orders.png", count: 1 },
      { name: "Jacq",          img: "../images/about_me/Pokemon/Fire/Jacq.png",          count: 1 },
      { name: "Larry",         img: "../images/about_me/Pokemon/Fire/Larry.png",         count: 1 },
      { name: "Firebreather",  img: "../images/about_me/Pokemon/Fire/Firebreather.png",  count: 1 },
    ],
    "Pokémon": [
      { evo: [
          { name: "Fuecoco",       img: "../images/about_me/Pokemon/Fire/Fuecoco.png",    count: 1 },
          { name: "Crocalor",      img: "../images/about_me/Pokemon/Fire/Crocalor.png",   count: 1 },
          { name: "Skeledirge ex", img: "../images/about_me/Pokemon/Fire/Skeledirge.png", count: 1 },
      ]},
      { evo: [
          { name: "Chimchar",  img: "../images/about_me/Pokemon/Fire/Chimchar.png",  count: 1 },
          { name: "Monferno",  img: "../images/about_me/Pokemon/Fire/Monferno.png",  count: 1 },
          { name: "Infernape", img: "../images/about_me/Pokemon/Fire/Infernape.png", count: 1 },
      ]},
      { evo: [
          { name: "Litwick",    img: "../images/about_me/Pokemon/Fire/Litwick.png",    count: 1 },
          { name: "Lampent",    img: "../images/about_me/Pokemon/Fire/Lampent.png",    count: 1 },
          { name: "Chandelure", img: "../images/about_me/Pokemon/Fire/Chandelure.png", count: 1 },
      ]},
      { evo: [
          { name: "Clefairy", img: "../images/about_me/Pokemon/Fire/Clefairy.png", count: 1 },
          { name: "Clefable", img: "../images/about_me/Pokemon/Fire/Clefable.png", count: 1 },
      ]},
      { evo: [
          { name: "Cutiefly", img: "../images/about_me/Pokemon/Fire/Cutiefly.png", count: 2 },
          { name: "Ribombee", img: "../images/about_me/Pokemon/Fire/Ribombee.png", count: 2 },
      ]},
      // Two different Charcadet prints, each evolving into a different Pokémon
      { evo: [
          { split: "and", options: [
              { name: "Charcadet", img: "../images/about_me/Pokemon/Fire/Charcadet_1.png", count: 1 },
              { name: "Charcadet", img: "../images/about_me/Pokemon/Fire/Charcadet_2.png", count: 1 },
          ]},
          { split: "or", options: [
              { name: "Ceruledge", img: "../images/about_me/Pokemon/Fire/Ceruledge.png", count: 1 },
              { name: "Armarouge", img: "../images/about_me/Pokemon/Fire/Armarouge.png", count: 1 },
          ]},
      ]},
      // Scorbunny evolves into two different Cinderace prints
      { evo: [
          { name: "Scorbunny", img: "../images/about_me/Pokemon/Fire/Scorbunny.png", count: 1 },
          { split: "and", options: [
              { name: "Cinderace", img: "../images/about_me/Pokemon/Fire/Cinderace_1.png", count: 1 },
              { name: "Cinderace", img: "../images/about_me/Pokemon/Fire/Cinderace_2.png", count: 1 },
          ]},
      ]},
      { name: "Reshiram ex", img: "../images/about_me/Pokemon/Fire/Reshiram_ex.png", count: 1 },
      { name: "Volcanion",   img: "../images/about_me/Pokemon/Fire/Volcanion.png",   count: 1 },
    ],
  },

};

  // ── TEMPLATE ──────────────────────────────────
  // Uncomment and fill in to add a new deck:
  //
  // "Friend Name": {
  //   creator: "Friend Name",
  //   format:  "Standard",   // e.g. Standard, Expanded, Unlimited
  //   "Energies": [
  //     { name: "Water Energy", img: "../images/...", count: 10 },
  //   ],
  //   "Items": [],
  //   "Pokémon Tools": [],
  //   "Supporters": [],
  //   "Pokémon": [
  //
  //     // Single card:
  //     { name: "Squirtle", img: "../images/...", count: 1 },
  //
  //     // Linear evo chain:
  //     { evo: [
  //         { name: "Squirtle",  img: "../images/...", count: 1 },
  //         { name: "Wartortle", img: "../images/...", count: 1 },
  //         { name: "Blastoise", img: "../images/...", count: 1 },
  //     ]},
  //
  //     // Branching evo — different Pokémon from same base ("or"):
  //     { evo: [
  //         { name: "Eevee", img: "../images/...", count: 1 },
  //         { split: "or", options: [
  //             { name: "Vaporeon", img: "../images/...", count: 1 },
  //             { name: "Flareon",  img: "../images/...", count: 1 },
  //         ]},
  //     ]},
  //
  //     // Same Pokémon, different prints ("and"):
  //     { evo: [
  //         { name: "Ralts", img: "../images/...", count: 1 },
  //         { split: "and", options: [
  //             { name: "Gardevoir", img: "../images/...", count: 1 },
  //             { name: "Gardevoir", img: "../images/...alt.png", count: 1 },
  //         ]},
  //     ]},
  //
  //   ],
  // },

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

/** Creates an .evo-set element, handling linear chains and split nodes.
 *
 *  Chain entries are either:
 *    - A plain card:  { name, img, count }
 *    - A split node:  { split: "or" | "and", options: [ card, card, ... ] }
 *
 *  "or"  → different Pokémon that branch from the same base
 *  "and" → same Pokémon name but different card prints
 *
 *  Arrow placement: one arrow before every entry except the very first.
 */
function buildEvoSet(chain) {
  const set = document.createElement("div");
  set.className = "evo-set";

  chain.forEach((entry, i) => {

    // Add an arrow before every entry except the very first
    if (i > 0) {
      const arrow = document.createElement("div");
      arrow.className = "arrow";
      set.appendChild(arrow);
    }

    if (entry.split) {
      // ── Branch container (column of cards with "or"/"and" between them) ──
      const branch = document.createElement("div");
      branch.className = "evo-branch";

      entry.options.forEach((card, j) => {
        branch.appendChild(buildSingleCard(card));

        // Connector label between options, not after the last one
        if (j < entry.options.length - 1) {
          const connector = document.createElement("div");
          connector.className = `evo-connector evo-connector--${entry.split}`;
          connector.textContent = entry.split;
          branch.appendChild(connector);
        }
      });

      set.appendChild(branch);

    } else {
      // ── Regular single card ──
      set.appendChild(buildSingleCard(entry));
    }
  });

  return set;
}

// ─────────────────────────────────────────────
//  RENDER
// ─────────────────────────────────────────────

// Reserved keys that hold metadata, not card arrays — skip them in section rendering
const METADATA_KEYS = new Set(["creator", "format"]);

function renderDeck(deckName) {
  const deck   = decks[deckName];
  const target = document.getElementById("deck-content");
  target.innerHTML = "";

  // Fade-out then fade-in for a smooth transition
  target.classList.remove("deck-visible");

  requestAnimationFrame(() => {

    // ── Info bar ──
    const info = document.createElement("div");
    info.className = "deck-info";

    const creatorSpan = document.createElement("span");
    creatorSpan.className = "deck-info-item";
    creatorSpan.innerHTML = `<strong>Creator:</strong> ${deck.creator ?? "Unknown"}`;

    const formatSpan = document.createElement("span");
    formatSpan.className = "deck-info-item";
    formatSpan.innerHTML = `<strong>Format:</strong> ${deck.format ?? "Unknown"}`;

    info.appendChild(creatorSpan);
    info.appendChild(formatSpan);
    target.appendChild(info);

    // ── Card sections ──
    for (const [section, cards] of Object.entries(deck)) {
      // Skip metadata fields and empty sections
      if (METADATA_KEYS.has(section)) continue;
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
//  FORM / DECK TOGGLE
// ─────────────────────────────────────────────

function showForm() {
  document.getElementById("deck-content").style.display = "none";
  document.getElementById("deck-form").classList.add("form-visible");
}

function showDeck(deckName) {
  document.getElementById("deck-form").classList.remove("form-visible");
  document.getElementById("deck-content").style.display = "";
  renderDeck(deckName);
}

// ─────────────────────────────────────────────
//  TABS
// ─────────────────────────────────────────────

function initTabs() {
  const tabBar = document.getElementById("deck-tabs");

  // One tab per deck — adding a deck to the data auto-creates its tab
  Object.keys(decks).forEach((name, index) => {
    const btn = document.createElement("button");
    btn.className = "deck-tab" + (index === 0 ? " active" : "");
    btn.dataset.deck = name;
    btn.textContent = name;
    tabBar.appendChild(btn);
  });

  // ── + button ──
  const addBtn = document.createElement("button");
  addBtn.className = "deck-tab deck-tab--add";
  addBtn.id = "deck-add-btn";
  addBtn.textContent = "+";
  addBtn.title = "Add a new deck";
  tabBar.appendChild(addBtn);

  // ── Click handler for deck tabs ──
  tabBar.addEventListener("click", e => {
    const tab = e.target.closest(".deck-tab");
    if (!tab) return;

    // + button clicked
    if (tab.id === "deck-add-btn") {
      if (tab.classList.contains("active")) return;
      document.querySelector(".deck-tab.active").classList.remove("active");
      tab.classList.add("active");
      showForm();
      return;
    }

    // Regular deck tab clicked
    if (tab.classList.contains("active")) return;
    document.querySelector(".deck-tab.active").classList.remove("active");
    tab.classList.add("active");
    showDeck(tab.dataset.deck);
  });
}

// ─────────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  renderDeck(Object.keys(decks)[0]);
});