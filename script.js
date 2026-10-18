/* =====================================
   EDOU / WEBSITE JAVASCRIPT
===================================== */


/* =====================================
   01 / SITE SETTINGS
   EDIT YOUR LINKS HERE
===================================== */

const DEMO_SITE = {

  studio_name: "EDOU STUDIO",
 
  // Replace with your actual profile URLs
  etsy_url: "https://www.etsy.com/shop/EDOUstudio?etsrc=sdt",
  instagram_url: "https://www.instagram.com/edou.studio",

  gallery_intro: "A FIELD OF IDEAS.",

  gallery_caption:
    "SELECT ANY DIAGRAM TO EXPLORE THE PROJECT."

};


/* =====================================
   02 / EDIT YOUR PROJECTS HERE
===================================== */

const DEMO_PROJECTS = [

  {
    slug: "kintsugi-cube",
    title: "Kintsugi D.",
    category: "Sculptural object",
    stage: "Realized Series",
    year: "2024",

    diagram: "cube",

    x: 15,
    y: 24,

    description:
      "A geometric sculptural series exploring fracture, repair, and the visual tension between broken and whole.",

    note:
      "A continuing EDOU series of sculptures and objects.",

    images: [],

    available: true,
    shop_url: ""
  },

  {
    slug: "metal-wallet",
    title: "*******",
    category: "Product design",
    stage: "In development",
    year: "2026",

    diagram: "wallet",

    x: 50,
    y: 18,

    description:
      "*******.",

    note:
      "*******",

    images: [],

    available: false,
    shop_url: ""
  },

  {
    slug: "dominoes",
    title: "*******",
    category: "Object / Game",
    stage: "Concept",
    year: "2026",

    diagram: "domino",

    x: 83,
    y: 30,

    description:
      "*******",

    note:
      "*******",

    images: [],

    available: false,
    shop_url: ""
  },

  {
    slug: "birdhouse",
    title: "*******",
    category: "Product / Habitat",
    stage: "In development",
    year: "2026",

    diagram: "birdhouse",

    x: 22,
    y: 78,

    description:
      "*******",

    note:
      "*******.",

    images: [],

    available: false,
    shop_url: ""
  },

  {
    slug: "modular-living",
    title: "*******",
    category: "Spatial system",
    stage: "Exploration",
    year: "2026",

    diagram: "modules",

    x: 55,
    y: 72,

    description:
      "*******.",

    note:
      "*******.",

    images: [],

    available: false,
    shop_url: ""
  },

  {
    slug: "architecture-studies",
    title: "Architectural Works",
    category: "Architecture",
    stage: "Concepts & Exploration",
    year: "2021-CURRENT",

    diagram: "architecture",

    x: 86,
    y: 78,

    description:
      "Architectural designs, projects, spatial studies, drawings, and concepts designed in University-Now.",

    note:
      "Replace this sample with one of your architectural projects.",

    images: [],

    available: false,
    shop_url: ""
  }

];


/* =====================================
   03 / NIGHTTIME E ANIMATION
===================================== */

const SVG_NS = "http://www.w3.org/2000/svg";

const IDLE_DELAY = 60000; // Preview speed. Change to 30000 for original 30-second idle.

const nightConfigs = [
  {
    id: "night-upper-windows",
    ys: [15, 58]
  },
  {
    id: "night-middle-windows",
    ys: [135, 182]
  },
  {
    id: "night-lower-windows",
    ys: [263, 308]
  }
];

const nightXs = [39, 100, 161, 222, 283];

const nightWindows = [];

function nightEl(tag, attrs = {}) {

  const el = document.createElementNS(SVG_NS, tag);

  Object.entries(attrs).forEach(([key, value]) => {
    el.setAttribute(key, value);
  });

  return el;
}

function nightWalker() {

  const g = nightEl("g", {
    class: "walker"
  });

  g.appendChild(
    nightEl("circle", {
      cx: 0,
      cy: 10,
      r: 4.5
    })
  );

  g.appendChild(
    nightEl("rect", {
      x: -6,
      y: 15,
      width: 12,
      height: 10,
      rx: 5
    })
  );

  g.appendChild(
    nightEl("rect", {
      x: -9,
      y: 17,
      width: 4,
      height: 9,
      rx: 2
    })
  );

  g.appendChild(
    nightEl("rect", {
      x: 5,
      y: 17,
      width: 4,
      height: 9,
      rx: 2
    })
  );

  g.appendChild(
    nightEl("rect", {
      x: -5,
      y: 24,
      width: 4,
      height: 6,
      rx: 2,
      class: "left-leg"
    })
  );

  g.appendChild(
    nightEl("rect", {
      x: 1,
      y: 24,
      width: 4,
      height: 6,
      rx: 2,
      class: "right-leg"
    })
  );

  return g;
}


/* CREATE ALL 30 WINDOWS */

nightConfigs.forEach(config => {

  const container = document.getElementById(config.id);

  config.ys.forEach(y => {

    nightXs.forEach(x => {

      const w = nightEl("svg", {
        x,
        y,
        width: 38,
        height: 31,
        viewBox: "0 0 38 31",
        overflow: "hidden",
        class: "night-window"
      });

      w.appendChild(
        nightEl("rect", {
          x: 0,
          y: 0,
          width: 38,
          height: 31,
          rx: 3,
          class: "window-glass"
        })
      );

      w.appendChild(nightWalker());

      w.appendChild(
        nightEl("rect", {
          x: .8,
          y: .8,
          width: 36.4,
          height: 29.4,
          rx: 2.5,
          class: "window-frame"
        })
      );

      container.appendChild(w);

      nightWindows.push(w);

    });

  });

});


/* ADD MATCHING WINDOWS TO D, O, AND U, CLIPPED TO ORIGINAL LETTER GEOMETRY. */
const nightOtherWindows = [
  {id:"night-d-windows",path:"edou-d-path",xs:[445,495,545,595,645,695],ys: [14,57,100,143,180,220,263,308],w:38,h:31},
  {id:"night-o-windows",path:"edou-o-path",xs:[815,860,910,953,996,1045,1090],ys: [14,60,100,143,180,220,263,305],w:38,h:31},
  {id:"night-u-windows",path:"edou-u-path",xs:[1202,1247,1300,1354,1407,1462,1507],ys:[14,57,100,143,183,222,263,305],w:38,h:31} 
];
nightOtherWindows.forEach(config=>{
  const parent=document.getElementById(config.id);
  const shape=document.getElementById(config.path);
  for(const y of config.ys){
    for(const x of config.xs){
      const p=document.getElementById("edou-logo").createSVGPoint();
      let count=0;
      // Only add windows fully within the visible letter facade.
      for(const [px,py] of [[x+config.w/2,y+config.h/2],[x+5,y+5],[x+config.w-5,y+5],[x+5,y+config.h-5],[x+config.w-5,y+config.h-5]]){
        p.x=px;p.y=py;
        if(shape.isPointInFill(p)) count++;
      }
      if(count<5) continue;
      const w=nightEl("svg",{x,y,width:config.w,height:config.h,viewBox:`0 0 ${config.w} ${config.h}`,overflow:"hidden",class:"night-window"});
      w.appendChild(nightEl("rect",{x:0,y:0,width:config.w,height:config.h,rx:2.5,class:"window-glass"}));
      // Same black figures and walking leg animation as E.
      const walker=nightWalker();
      walker.setAttribute("transform",`translate(${config.w*.48-19} 0) scale(.85)`);
      w.appendChild(walker);
      w.appendChild(nightEl("rect",{x:.7,y:.7,width:config.w-1.4,height:config.h-1.4,rx:2,class:"window-frame"}));
      parent.appendChild(w);
      nightWindows.push(w);
    }
  }
});

/* =====================================
   04 / NIGHT ANIMATION CONTROL
===================================== */

const hero = document.getElementById("home");

const wordmarkStage = document.getElementById(
  "wordmark-stage"
);

const architectureTrigger = document.getElementById(
  "architecture-trigger"
);

let buildingActive = false;
let buildingRun = 0;
let buildingTimers = [];
let idleTimer = null;

function resetBuilding() {

  buildingRun++;

  buildingActive = false;

  buildingTimers.forEach(clearTimeout);

  buildingTimers = [];

  hero.classList.remove("night-active");

  nightWindows.forEach(w => {

    w.classList.remove(
      "lit",
      "occupied",
      "walk-left",
      "walk-right"
    );

    w.style.removeProperty("--walk-duration");

  });
}


function startBuilding() {

  if (buildingActive) return;

  if (
    wordmarkStage.classList.contains(
      "architecture-hover"
    )
  ) return;

  buildingActive = true;

  hero.classList.add("night-active");

  const run = ++buildingRun;

  const shuffled = [...nightWindows].sort(
    () => Math.random() - .5
  );

  const darkCount =
    Math.floor(nightWindows.length * (.23 + Math.random() * .17));

  shuffled.slice(darkCount).forEach((w, index) => {

    const lightTimer = setTimeout(() => {

      if (!buildingActive || run !== buildingRun) {
        return;
      }

      w.classList.add("lit");

      if (Math.random() >= .55) return;

      const personTimer = setTimeout(() => {

        if (!buildingActive || run !== buildingRun) {
          return;
        }

        const direction =
          Math.random() < .5
          ? "walk-left"
          : "walk-right";

        const duration =
          1.5 + Math.random() * 1.7;

        w.style.setProperty(
          "--walk-duration",
          duration.toFixed(2) + "s"
        );

        w.classList.add(
          "occupied",
          direction
        );

      }, 150 + Math.random() * 250);

      buildingTimers.push(personTimer);

    }, 450 + index * 72);

    buildingTimers.push(lightTimer);

  });

}


/* =====================================
   05 / ARCHITECTURE HOVER
===================================== */

function showArchitecture() {

  wordmarkStage.classList.add(
    "architecture-hover"
  );

  resetBuilding();

  clearTimeout(idleTimer);
}

function hideArchitecture() {

  wordmarkStage.classList.remove(
    "architecture-hover"
  );

  rearmIdle();
}

architectureTrigger.addEventListener(
  "mouseenter",
  showArchitecture
);

architectureTrigger.addEventListener(
  "mouseleave",
  hideArchitecture
);

architectureTrigger.addEventListener(
  "focus",
  showArchitecture
);

architectureTrigger.addEventListener(
  "blur",
  hideArchitecture
);

architectureTrigger.addEventListener(
  "click",
  () => {

    resetBuilding();

    document.getElementById(
      "architecture"
    ).scrollIntoView({
      behavior: "smooth"
    });

  }
);

architectureTrigger.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Enter" ||
      event.key === " "
    ) {

      event.preventDefault();

      architectureTrigger.dispatchEvent(
        new MouseEvent("click", {
          bubbles: true
        })
      );

    }
  }
);


/* =====================================
   06 / INACTIVITY TIMER
===================================== */

function atHome() {

  return (
    window.scrollY < 50 &&
    !document.hidden &&
    !wordmarkStage.classList.contains(
      "architecture-hover"
    ) &&
    phase === "idle"
  );
}

function rearmIdle() {

  clearTimeout(idleTimer);

  if (!atHome() || buildingActive) {
    return;
  }

  idleTimer = setTimeout(() => {

    if (atHome()) {
      startBuilding();
    }

  }, IDLE_DELAY);
}

let lastMove = 0;

document.addEventListener(
  "pointermove",
  () => {

    if (Date.now() - lastMove < 350) return;

    lastMove = Date.now();

    rearmIdle();

  },
  { passive: true }
);

document.addEventListener(
  "pointerdown",
  rearmIdle,
  { passive: true }
);

document.addEventListener(
  "keydown",
  rearmIdle
);

window.addEventListener(
  "scroll",
  () => {

    if (window.scrollY >= 50 && buildingActive) {
      resetBuilding();
    }

    rearmIdle();

  },
  { passive: true }
);

document.addEventListener(
  "visibilitychange",
  () => {

    if (document.hidden) {
      resetBuilding();
    }

    rearmIdle();

  }
);

window.addEventListener(
  "load",
  rearmIdle
);


/* =====================================
   07 / BLUE DOT ENTRANCE
===================================== */

const logo = document.getElementById("edou-logo");

const dot = document.getElementById("edou-dot");

const dotTravel = document.getElementById(
  "dot-travel"
);

const indexScreen = document.getElementById(
  "index-screen"
);

const backButton = document.getElementById(
  "back-button"
);

let phase = "idle";


function enterWebsite() {

  if (phase !== "idle") return;

  phase = "moving";

  resetBuilding();

  clearTimeout(idleTimer);

  const point = logo.createSVGPoint();

  point.x = 971;
  point.y = 178;

  const screenPoint = point.matrixTransform(
    logo.getScreenCTM()
  );

  indexScreen.style.setProperty(
    "--origin-x",
    screenPoint.x + "px"
  );

  indexScreen.style.setProperty(
    "--origin-y",
    screenPoint.y + "px"
  );

  dotTravel.classList.add("play");
}


dot.addEventListener(
  "click",
  enterWebsite
);

dot.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Enter" ||
      event.key === " "
    ) {

      event.preventDefault();

      enterWebsite();
    }
  }
);


/* DOT FINISHES TRAVELING */

dotTravel.addEventListener(
  "animationend",
  event => {

    if (
      event.animationName !== "travelToO" ||
      phase !== "moving"
    ) return;

    phase = "opening";

    indexScreen.inert = false;

    indexScreen.classList.add("open");

  }
);


/* ATLAS EXPANSION COMPLETE */

indexScreen.addEventListener(
  "transitionend",
  event => {

    if (
      event.target !== indexScreen ||
      event.propertyName !== "clip-path"
    ) return;

    if (phase === "opening") {

      phase = "open";

      indexScreen.classList.add("ready");

      backButton.disabled = false;

    } else if (phase === "closing") {

      dotTravel.classList.remove("play");

      phase = "idle";

      dot.focus({
        preventScroll: true
      });

      rearmIdle();
    }
  }
);


/* BACK TO WEBSITE */

backButton.addEventListener(
  "click",
  () => {

    if (phase !== "open") return;

    phase = "closing";

    backButton.disabled = true;

    indexScreen.classList.remove("ready");

    indexScreen.classList.remove("open");

    indexScreen.inert = true;

  }
);


/* =====================================
   08 / SCROLL RULER
===================================== */

(() => {
  const sections = ["home", "projects", "about", "contact", "architecture"]
    .map(id => document.getElementById(id));
  const ticks = document.getElementById("ruler-ticks");
  const rulerTrack = document.getElementById("ruler-track");
  const pointer = document.getElementById("ruler-pointer");
  const progressLine = document.getElementById("ruler-progress");
  const number = document.getElementById("ruler-number");
  const next = document.getElementById("next-section-preview");
  const nextTitle = document.getElementById("next-title");
  const nextSmall = next.querySelector(".next-small");
  const floatingIndex = document.getElementById("scroll-index-button");

  let ticking = false;
  let dragging = false;
  let pointerId = null;
  let committed = "0.0";
  let editingSubmitted = false;
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const maxScroll = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  const scrollPercent = () => maxScroll() ? clamp(window.scrollY / maxScroll() * 100, 0, 100) : 0;
  const oneDecimal = v => Math.round(clamp(v, 0, 100) * 10) / 10;

  function display(value) {
    const p = oneDecimal(value);
    pointer.style.top = p + "%";
    progressLine.style.height = p + "%";
    pointer.firstElementChild.textContent = p.toFixed(1);
    rulerTrack.setAttribute("aria-valuenow", p.toFixed(1));
    rulerTrack.setAttribute("aria-valuetext", p.toFixed(1) + " percent");
    if (document.activeElement !== number) {
      number.value = p.toFixed(1);
      committed = number.value;
    }
  }

  function goTo(percentage, smooth = false) {
    const p = oneDecimal(percentage);
    display(p);
    window.scrollTo({
      top: maxScroll() * p / 100,
      behavior: smooth ? "smooth" : "instant"
    });
  }

  // Mechanical ruler ticks: 0 through 100.
  ticks.replaceChildren();
  for (let i = 0; i <= 50; i++) {
    const tick = document.createElement("span");
    tick.className = "ruler-tick" + (i % 5 === 0 ? " major" : i % 2 === 0 ? " medium" : "");
    tick.style.top = i * 2 + "%";
    if (i % 5 === 0) {
      const label = document.createElement("span");
      label.className = "ruler-tick-label";
      label.textContent = String(i * 2).padStart(2, "0");
      tick.appendChild(label);
    }
    ticks.appendChild(tick);
  }

  // Pointer dragging and click-to-position, for mouse/touch/pen.
  function pointerPercent(event) {
    const rect = rulerTrack.getBoundingClientRect();
    if (!rect.height) return 0;
    return oneDecimal((event.clientY - rect.top) / rect.height * 100);
  }
  function endDrag(event) {
    if (event.pointerId !== pointerId) return;
    dragging = false;
    pointerId = null;
    rulerTrack.classList.remove("is-dragging");
    if (rulerTrack.hasPointerCapture(event.pointerId)) {
      rulerTrack.releasePointerCapture(event.pointerId);
    }
  }
  rulerTrack.addEventListener("pointerdown", event => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragging = true;
    pointerId = event.pointerId;
    rulerTrack.classList.add("is-dragging");
    rulerTrack.setPointerCapture(event.pointerId);
    goTo(pointerPercent(event));
  });
  rulerTrack.addEventListener("pointermove", event => {
    if (dragging && event.pointerId === pointerId) goTo(pointerPercent(event));
  });
  rulerTrack.addEventListener("pointerup", endDrag);
  rulerTrack.addEventListener("pointercancel", endDrag);
  rulerTrack.addEventListener("lostpointercapture", endDrag);

  // Keyboard navigation when the track is selected.
  rulerTrack.addEventListener("keydown", event => {
    let p = scrollPercent();
    switch (event.key) {
      case "ArrowUp": p -= 1; break;
      case "ArrowDown": p += 1; break;
      case "PageUp": p -= 10; break;
      case "PageDown": p += 10; break;
      case "Home": p = 0; break;
      case "End": p = 100; break;
      default: return;
    }
    event.preventDefault();
    goTo(p);
  });

  // One-decimal-place value editing (0.0–100.0).
  // Do not jump while typing: Enter or blur applies the edit.
  number.addEventListener("focus", () => {
    committed = scrollPercent().toFixed(1);
    editingSubmitted = false;
    number.select();
  });
  number.addEventListener("input", () => {
    let clean = number.value.replace(/[^\d.]/g, "");
    const pieces = clean.split(".");
    clean = pieces[0].slice(0, 3);
    if (pieces.length > 1) clean += "." + pieces.slice(1).join("").slice(0, 1);
    if (clean !== "" && Number(clean) > 100) clean = "100";
    number.value = clean;
  });
  function commitValue() {
    if (editingSubmitted) return;
    editingSubmitted = true;
    const raw = number.value.trim();
    const parsed = raw === "" || raw === "." ? scrollPercent() : Number(raw);
    const p = oneDecimal(Number.isFinite(parsed) ? parsed : scrollPercent());
    number.value = p.toFixed(1);
    committed = number.value;
    goTo(p, true);
  }
  number.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      event.preventDefault();
      commitValue();
      number.blur();
    } else if (event.key === "Escape") {
      event.preventDefault();
      editingSubmitted = true;
      number.value = scrollPercent().toFixed(1);
      number.blur();
    }
  });
  number.addEventListener("blur", commitValue);

  // EDOU / CONTINUOUS SINGLE-GLYPH HEADING MOTION (preview)
  // One SVG glyph per character: no separate standby label, no thin/bold
  // overlap, no native heading crossfade and no font-size/weight switches.
  // The SAME SVG text object is in the list, on the track and at its endpoint.
  const NS = 'http://www.w3.org/2000/svg';
  const flightSvg = document.createElementNS(NS, 'svg');
  flightSvg.setAttribute('class', 'letter-flight-field');
  flightSvg.setAttribute('aria-hidden', 'true');
  document.body.appendChild(flightSvg);

const makeSvg = (tag, attrs = {}) => {
    const el = document.createElementNS(NS, tag);
    for (const [key, val] of Object.entries(attrs)) el.setAttribute(key, String(val));
    return el;
  };

  const headingSections = sections.slice(1);
  const indexNames = ['PROJECTS & OBJECTS', 'ABOUT', 'CONTACT', 'ARCHITECTURE PORTFOLIO'];
  const metrics = document.createElement('canvas').getContext('2d');
  const smooth = v => { v=clamp(v,0,1); return v*v*(3-2*v); };
  const glyphSets = headingSections.map((section, sectionIndex) => {
    const heading = section.querySelector('.motion-heading');
    // Wrap real DOM text only to measure the precise ending position and
    // preserve HTML line breaks & the blue ampersand.
    function splitText(parent) {
      [...parent.childNodes].forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          const frag = document.createDocumentFragment();
          [...node.textContent.replace(/\s+/g,' ')].forEach(letter => {
            if (letter === ' ') frag.appendChild(document.createTextNode(' '));
            else {
              const span = document.createElement('span');
              span.className = 'heading-letter-target';
              span.textContent = letter;
              frag.appendChild(span);
            }
          });
          node.replaceWith(frag);
        } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName !== 'BR') {
          splitText(node);
        }
      });
    }
    splitText(heading);
    const targets = [...heading.querySelectorAll('.heading-letter-target')];
    // Source positions use the same SVG font metrics and glyph element.
    // Hence there is no mini-resize when a letter launches.
    const chars = [...indexNames[sectionIndex]];
    const advances = [];
    const fontSmall = window.innerWidth <= 700 ? 10 : 12;
    metrics.font = `400 ${fontSmall}px Arial`;
    let cumulative = 0;
    chars.forEach(letter => {
      const advance = metrics.measureText(letter).width + (window.innerWidth<=700?.35:.5);
      if (letter !== ' ') advances.push(cumulative + advance/2);
      cumulative += advance;
    });
    const glyphs = targets.map((target, i) => {
      const g = makeSvg('g');
const text = makeSvg('text', {
  'font-family': 'Arial,Helvetica,sans-serif',
  'font-size': 100,
  'font-weight': 400,
  'text-anchor': 'middle',
  'dominant-baseline': 'central',
  'fill': '#505050',
  'stroke': '#505050',
  'stroke-width': 0,
  'stroke-linejoin': 'round',
  'paint-order': 'stroke fill'
});
      text.textContent = target.textContent;
      g.appendChild(text);
      flightSvg.appendChild(g);
      const path = makeSvg('path', { fill:'none', stroke:'none' });
      flightSvg.appendChild(path);
      return {target,g,text,path,order:targets.length-1-i,sourceOffset:advances[i] ?? i*fontSmall};
    });
    return {section,heading,glyphs};
  });

  function paint() {
    ticking = false;
    display(scrollPercent());
    const vh=window.innerHeight, vw=window.innerWidth;
    const launchX = vw <= 700 ? 36 : 74;
    const spacing = vw <= 700 ? 10 : 14;
    const feedTop = vw <= 700 ? 85 : 78;
    const small = vw <= 700 ? 10 : 12;
    const enterY = vh*.98, arriveY=vh*.28;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    flightSvg.setAttribute('viewBox',`0 0 ${vw} ${vh}`);
    flightSvg.setAttribute('width',vw);
    flightSvg.setAttribute('height',vh);

    // Each section progresses continuously based on its own physical scroll
    // position. Waiting labels ALL shift together by the same continuous
    // amount as preceding headings finish, never by an index jump.
    const progress = glyphSets.map(item => {
      const box=item.heading.getBoundingClientRect();
      return clamp((enterY-box.top)/(enterY-arriveY),0,1);
    });
    const shifts = progress.map(p => smooth(clamp((p-.64)/.36,0,1)));
    let shifted = 0;
    glyphSets.forEach((group,j) => {
      group.heading.style.opacity = reduced ? '1' : '0';
      const p=progress[j];
      const sourceX=launchX+(j-shifted)*spacing;
      const finalSize=parseFloat(getComputedStyle(group.heading).fontSize) || 85;
      group.glyphs.forEach(letter => {
        if(reduced) {letter.g.style.display='none';return;}
        letter.g.style.display='';
        const sourceY=feedTop+letter.sourceOffset;
        const box=letter.target.getBoundingClientRect();
        const targetX=box.left+box.width/2;
        const targetY=box.top+box.height/2;
        let x=sourceX, y=sourceY, angle=90, scale=small/100, thick=0, grown=0;
        if(p>0) {
          const radius=Math.max(14,Math.min(65,(targetX-launchX)*.34));
          const curveY=targetY-radius;
          const topY=Math.min(-400,curveY-500);
          letter.path.setAttribute('d',`M ${launchX} ${topY} V ${curveY} Q ${launchX} ${targetY} ${launchX+radius} ${targetY} H ${Math.max(launchX+radius,targetX)}`);
          const len=letter.path.getTotalLength();
          const startDist=Math.max(0,sourceY-topY);
          // Last O travels first; A waits until the end. Each glyph launches
          // continuously at the exact position and scale it had in the list.
          const delay=letter.order*.012;
          const u=clamp((p-delay)/(1-delay),0,1);
          const travel=smooth(u);
          const d=startDist+(len-startDist)*travel;
          const q=letter.path.getPointAtLength(d);
          const before=letter.path.getPointAtLength(Math.max(0,d-2));
          const after=letter.path.getPointAtLength(Math.min(len,d+2));
          x=q.x;y=q.y;
          angle=Math.atan2(after.y-before.y,after.x-before.x)*180/Math.PI;
          const fractionAcross=clamp((x-launchX)/Math.max(1,targetX-launchX),0,1);
          grown=smooth(clamp((u-.46)/.54,0,1))*smooth(fractionAcross);
          scale=(small+(finalSize-small)*grown)/100;
          thick=smooth(clamp((u-.66)/.34,0,1));
          // Use ONE glyph, with continuous stroke expansion rather than two
          // overlaid glyphs; no double edges can ever appear.
          if(p>=1) {x=targetX;y=targetY;angle=0;scale=finalSize/100;grown=1;thick=1;}
        }
        const from=[80,80,80], to=letter.target.closest('.ampersand')?[0,102,255]:[20,20,20];
        const color='rgb('+from.map((v,k)=>Math.round(v+(to[k]-v)*thick)).join(',')+')';
       
letter.text.setAttribute('fill', color);
letter.text.setAttribute('stroke', color);
letter.text.setAttribute(
  'stroke-width',
  (8 * thick).toFixed(2)
);

        letter.g.setAttribute('transform',`translate(${x.toFixed(3)} ${y.toFixed(3)}) rotate(${angle.toFixed(3)}) scale(${scale.toFixed(5)})`);
      });
      shifted += shifts[j];
    });
    document.body.classList.toggle('below-hero',window.scrollY > vh*.52);
  }
  function schedule() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(paint);
  }
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  paint();

  // Keep Atlas open/closed background behavior.
  const syncOverlay = () => {
    document.body.classList.toggle("index-active", indexScreen.classList.contains("open"));
  };
  new MutationObserver(syncOverlay).observe(indexScreen, {
    attributes: true, attributeFilter: ["class"]
  });

  // Preserve floating Atlas shortcut after scrolling.
  floatingIndex.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "instant" });
    requestAnimationFrame(() => {
      dot.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
  });
})();

/* =====================================
   09 / PARTI DIAGRAM DEFINITIONS
===================================== */

const ATLAS_DIAGRAMS = {

  cube: `
    <path class="diagram-main"
      d="M-24 -11L0 -25L24 -11L0 3Z
         M-24 -11V17L0 31L24 17V-11M0 3V31"/>
    <path class="diagram-accent"
      d="M-17 -6L-5 4L9 -1L21 11 M-5 4L-2 16"/>
  `,

  wallet: `
    <rect class="diagram-main"
      x="-27" y="-21" width="54" height="42" rx="3"/>
    <path class="diagram-main"
      d="M-27 -6H27M-20 -15H15M-20 0H7"/>
    <path class="diagram-accent"
      d="M-14 11H17 M-7 16H20"/>
  `,

  domino: `
    <rect class="diagram-main"
      x="-18" y="-29" width="36" height="58" rx="3"/>
    <path class="diagram-main" d="M-18 0H18"/>
    <g class="diagram-accent">
      <circle cx="-9" cy="-19" r="3"/>
      <circle cx="9" cy="-9" r="3"/>
      <circle cx="-9" cy="11" r="3"/>
      <circle cx="9" cy="20" r="3"/>
    </g>
  `,

  birdhouse: `
    <path class="diagram-main"
      d="M-28 -5Q0 -36 28 -5V3H-28Z
         M-21 12Q0 -7 21 12V29H-21Z"/>
    <path class="diagram-accent"
      d="M-28 3L-21 12 M28 3L21 12"/>
    <circle class="diagram-main" cx="0" cy="13" r="5"/>
  `,

  modules: `
    <path class="diagram-main"
      d="M-30 -10L-12 -20L6 -10L-12 0Z
         M-30 -10V10L-12 20L6 10V-10M-12 0V20
         M7 0L24 -10L36 -4L19 6Z
         M7 0V19L19 26L36 17V-4"/>
    <path class="diagram-accent"
      d="M-30 10L-12 0 M19 6V26"/>
  `,

  architecture: `
    <path class="diagram-main"
      d="M-28 25V-4L0 -26L28 -4V25Z
         M-28 -4H28 M-17 25V0H-1V25
         M10 25V0H24V25"/>
    <path class="diagram-accent"
      d="M0 -26V25 M-34 30H34"/>
  `,

  abstract: `
    <circle class="diagram-main" r="23"/>
    <path class="diagram-accent"
      d="M-23 0H23 M0 -23V23
         M-16 -16L16 16 M16 -16L-16 16"/>
  `,

  lamp: `
    <path class="diagram-main"
      d="M-22 -19H22L12 1H-12Z
         M0 1V26M-17 26H17"/>
    <path class="diagram-accent" d="M-30 4H30"/>
  `

};


/* =====================================
   10 / ATLAS + PROJECT GALLERIES
===================================== */

(() => {

  const points = document.getElementById(
    "atlas-points"
  );

  const shell = document.getElementById(
    "atlas-shell"
  );

  const detail = document.getElementById(
    "atlas-detail"
  );

  const detailPhotos = document.getElementById(
    "detail-photos"
  );

  const shopTop = document.getElementById(
    "detail-shop-top"
  );

  const returnButton = document.getElementById(
    "atlas-return"
  );

  const prevButton = document.getElementById(
    "detail-prev"
  );

  const nextButton = document.getElementById(
    "detail-next"
  );

  let projects = [...DEMO_PROJECTS];

  let site = { ...DEMO_SITE };

  let current = -1;


  /* VALIDATE EXTERNAL LINKS */

  function validUrl(value) {

    try {

      const url = new URL(value);

      if (
        url.protocol === "https:" ||
        url.protocol === "http:"
      ) {
        return url.href;
      }

    } catch (error) {}

    return null;
  }


  function svgFor(diagram) {

    return `
      <svg class="atlas-diagram"
           viewBox="-55 -47 110 94"
           aria-hidden="true">

        ${ATLAS_DIAGRAMS[diagram] ||
          ATLAS_DIAGRAMS.abstract}

      </svg>
    `;
  }


  /* =====================================
     LOAD OPTIONAL JSON CONTENT
  ===================================== */

  async function loadData() {

    /*
      CodePen uses DEMO_SITE and DEMO_PROJECTS.

      On Cloudflare Pages, the site can
      instead read:

      data/projects.json
      data/site.json

      This allows a future content editor
      to manage the Atlas.
    */

    try {

      const responses = await Promise.all([
        fetch("./data/projects.json", {
          cache: "no-store"
        }),
        fetch("./data/site.json", {
          cache: "no-store"
        })
      ]);

      if (responses[0].ok) {

        const data = await responses[0].json();

        const catalog = Array.isArray(data) ? data : data.projects;
          if (Array.isArray(catalog) && catalog.length) {
            projects = catalog;
          }
      }

      if (responses[1].ok) {

        const data = await responses[1].json();

        if (data && typeof data === "object") {
          site = data;
        }
      }

    } catch (error) {

      // CodePen falls back to embedded data.
    }

    updateSocials();
    renderPoints();
  }


  /* =====================================
     ETSY + INSTAGRAM LINKS
  ===================================== */

  function updateSocials() {

    const links = {
      etsy: site.etsy_url,
      instagram: site.instagram_url
    };

    Object.entries(links).forEach(([key, value]) => {

      document.querySelectorAll(
        `[data-social="${key}"]`
      ).forEach(link => {

        const href = validUrl(value);

        if (href) {

          link.href = href;

          link.hidden = false;

        } else {

          link.removeAttribute("href");
          link.hidden = true;
        }

      });

    });
  }


  /* =====================================
     CREATE PROJECT CLOUD
  ===================================== */

  function renderPoints() {

    points.replaceChildren();

    projects.forEach((project, index) => {

      const node = document.createElement("button");

      node.type = "button";

      node.className = "atlas-node";

      node.style.setProperty(
        "--atlas-x",
        Math.max(
          10,
          Math.min(90, Number(project.x) || 50)
        ) + "%"
      );

      node.style.setProperty(
        "--atlas-y",
        Math.max(
          12,
          Math.min(87, Number(project.y) || 50)
        ) + "%"
      );

      node.setAttribute(
        "aria-label",
        "View project: " + project.title
      );

      node.innerHTML = svgFor(project.diagram);

      const name = document.createElement("span");

      name.className = "atlas-node-name";

      name.textContent = project.title;

      const stage = document.createElement("span");

      stage.className = "atlas-node-stage";

      stage.textContent = project.stage;

      node.append(name, stage);

      node.addEventListener(
        "click",
        () => openProject(index)
      );

      points.appendChild(node);

    });

    document.getElementById(
      "atlas-count"
    ).textContent =
      String(projects.length).padStart(2, "0") +
      " PROJECTS";

    document.querySelector(
      ".atlas-intro h2"
    ).textContent = site.gallery_intro;

    document.querySelector(
      ".atlas-intro > span"
    ).textContent = site.gallery_caption;


    /* CONNECTION LINES */

    const pairs = [
      [0, 1],
      [1, 2],
      [0, 3],
      [1, 4],
      [2, 5],
      [3, 4],
      [4, 5]
    ];

    const lines = document.getElementById(
      "atlas-connections"
    );

    lines.innerHTML = pairs
      .filter(([a, b]) => projects[a] && projects[b])
      .map(([a, b]) => {

        const A = projects[a];
        const B = projects[b];

        return `
          <path d="
            M${Number(A.x) * 10}
             ${Number(A.y) * 5.9}
            L${Number(B.x) * 10}
             ${Number(B.y) * 5.9}
          "/>
        `;

      }).join("");
  }


  /* =====================================
     GALLERY IMAGE PLACEHOLDER
  ===================================== */

  function photoPlaceholder(project) {

    const holder = document.createElement("div");

    holder.className =
      "detail-photo detail-photo-placeholder";

    holder.innerHTML = svgFor(project.diagram);

    const text = document.createElement("span");

    text.textContent =
      "PROJECT IMAGE / ADD PHOTOGRAPH";

    holder.appendChild(text);

    return holder;
  }


  /* =====================================
     OPEN PROJECT GALLERY
  ===================================== */

  function openProject(index) {

    if (!projects.length) return;

    current =
      (index + projects.length) %
      projects.length;

    const project = projects[current];


    document.getElementById(
      "detail-title"
    ).textContent = project.title;

    document.getElementById(
      "detail-meta"
    ).textContent =
      [project.category, project.year]
      .filter(Boolean)
      .join(" / ")
      .toUpperCase();

    document.getElementById(
      "detail-description"
    ).textContent = project.description;

    document.getElementById(
      "detail-note"
    ).textContent = project.note;

    document.getElementById(
      "detail-stage"
    ).textContent = project.stage;

    document.getElementById(
      "detail-count"
    ).textContent =
      "PROJECT / " +
      String(current + 1).padStart(2, "0") +
      "—" +
      String(projects.length).padStart(2, "0");


    /* LOAD PROJECT PHOTOGRAPHS */

    detailPhotos.replaceChildren();

    const images = Array.isArray(project.images)
      ? project.images
      : [];

    const validImages = images.filter(
      url => typeof url === "string" && url.trim()
    );

    if (validImages.length) {

      validImages.forEach((url, index) => {

        const figure = document.createElement("figure");

        figure.className = "detail-photo";

        const image = document.createElement("img");

        image.src = url;

        image.loading =
          index === 0 ? "eager" : "lazy";

        image.alt =
          project.title + " image " + (index + 1);

        image.addEventListener(
          "error",
          () => {
            figure.replaceWith(
              photoPlaceholder(project)
            );
          }
        );

        figure.appendChild(image);

        detailPhotos.appendChild(figure);

      });

    } else {

      detailPhotos.appendChild(
        photoPlaceholder(project)
      );
    }


    /* ETSY BUTTON FOR AVAILABLE PIECES */

    const shopUrl =
      validUrl(project.shop_url) ||
      validUrl(site.etsy_url);

    if (project.available && shopUrl) {

      shopTop.href = shopUrl;
      shopTop.hidden = false;

    } else {

      shopTop.hidden = true;
      shopTop.removeAttribute("href");
    }


    /* DISPLAY GALLERY */

    shell.hidden = true;

    detail.hidden = false;

    detail.scrollTop = 0;

    returnButton.focus({
      preventScroll: true
    });

    try {

      history.replaceState(
        null,
        "",
        "#atlas/" + encodeURIComponent(
          project.slug || current
        )
      );

    } catch (error) {}
  }


  /* =====================================
     RETURN TO ATLAS CLOUD
  ===================================== */

  function showAtlas() {

    detail.hidden = true;

    shell.hidden = false;

    current = -1;

    if (indexScreen.classList.contains("open")) {

      history.replaceState(
        null,
        "",
        "#atlas"
      );
    }

    document.querySelector(
      ".atlas-node"
    )?.focus({
      preventScroll: true
    });
  }


  /* PROJECT NAVIGATION */

  returnButton.addEventListener(
    "click",
    showAtlas
  );

  prevButton.addEventListener(
    "click",
    () => openProject(current - 1)
  );

  nextButton.addEventListener(
    "click",
    () => openProject(current + 1)
  );


  /* KEYBOARD CONTROLS */

  document.addEventListener(
    "keydown",
    event => {

      if (phase !== "open") return;

      if (event.key === "Escape") {

        if (!detail.hidden) {

          showAtlas();

        } else {

          backButton.click();
        }
      }

      if (!detail.hidden && event.key === "ArrowRight") {
        openProject(current + 1);
      }

      if (!detail.hidden && event.key === "ArrowLeft") {
        openProject(current - 1);
      }

    }
  );


  /* INITIALIZE ATLAS */

  loadData();


  window.EDOU_ATLAS = {
    get projects() {
      return projects;
    },
    openProject,
    showAtlas
  };

})();
/* PREVIEW CONTROLS — remove this section and its HTML if not needed. */
(() => {
  const state=document.getElementById('night-demo-state');
  const button=document.getElementById('demo-night-now');
  const reset=document.getElementById('demo-reset-day');
  if(!state || !button || !reset) return;
  let lastInteraction=Date.now();
  const note=()=>{lastInteraction=Date.now();};
  document.addEventListener('pointermove',note,{passive:true});
  document.addEventListener('keydown',note);
  button.addEventListener('click',()=>{
    clearTimeout(idleTimer);
    resetBuilding();
    startBuilding();
    state.textContent='NIGHTTIME / CITY IS AWAKE';
  });
  reset.addEventListener('click',()=>{
    resetBuilding();
    state.textContent='DAYTIME / RESET';
    note();rearmIdle();
  });
  setInterval(()=>{
    if(buildingActive){state.textContent='NIGHTTIME / CITY IS AWAKE';return;}
    if(phase!=='idle'||window.scrollY>50){state.textContent='SCROLL TO EXPLORE / NIGHT ON HOME';return;}
    const remain=Math.max(0,Math.ceil((IDLE_DELAY-(Date.now()-lastInteraction))/1000));
    state.textContent='DAYTIME / IDLE IN '+remain+' S';
  },180);
})();
