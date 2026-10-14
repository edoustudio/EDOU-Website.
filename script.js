
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
    title: "Kintsugi D. Cube",
    category: "Sculptural object",
    stage: "Realized",
    year: "2026",

    diagram: "cube",

    x: 15,
    y: 24,

    description:
      "A geometric sculptural object exploring fracture, repair, and the visual tension between broken and whole.",

    note:
      "A continuing EDOU series of sculptural cubes and spheres.",

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
    title: "Architectural Studies",
    category: "Architecture",
    stage: "Exploration",
    year: "2026",

    diagram: "architecture",

    x: 86,
    y: 78,

    description:
      "Architectural design projects, spatial studies, drawings, and proposals.",

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

const IDLE_DELAY = 30000;

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
    5 + Math.floor(Math.random() * 10);

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

    }, 200 + index * 180);

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

  const sections = [
    document.getElementById("home"),
    document.getElementById("projects"),
    document.getElementById("about"),
    document.getElementById("contact"),
    document.getElementById("architecture")
  ];

  const ticks = document.getElementById(
    "ruler-ticks"
  );

  const pointer = document.getElementById(
    "ruler-pointer"
  );

  const progressLine = document.getElementById(
    "ruler-progress"
  );

  const number = document.getElementById(
    "ruler-number"
  );

  const next = document.getElementById(
    "next-section-preview"
  );

  const nextTitle = document.getElementById(
    "next-title"
  );

  const nextSmall = next.querySelector(
    ".next-small"
  );

  const floatingIndex = document.getElementById(
    "scroll-index-button"
  );

  let ticking = false;

  const clamp = (value, min, max) =>
    Math.min(max, Math.max(min, value));


  /* RULER TICK MARKS */

  for (let i = 0; i <= 50; i++) {

    const tick = document.createElement("span");

    tick.className =
      "ruler-tick" +
      (
        i % 5 === 0
          ? " major"
          : i % 2 === 0
            ? " medium"
            : ""
      );

    tick.style.top = i * 2 + "%";

    if (i % 5 === 0) {

      const label = document.createElement("span");

      label.className = "ruler-tick-label";

      label.textContent = String(i * 2).padStart(
        2,
        "0"
      );

      tick.appendChild(label);
    }

    ticks.appendChild(tick);
  }


  /* UPDATE ON SCROLL */

  function paint() {

    ticking = false;

    const max = Math.max(
      1,
      document.documentElement.scrollHeight -
        window.innerHeight
    );

    const progress = clamp(
      window.scrollY / max,
      0,
      1
    );

    const shown = (
      progress * 100
    ).toFixed(1).padStart(4, "0");

    pointer.style.top =
      progress * 100 + "%";

    progressLine.style.height =
      progress * 100 + "%";

    number.textContent = shown;

    pointer.firstElementChild.textContent = shown;


    /* SECTION HEADING ANIMATION */

    sections.slice(1).forEach(section => {

      const heading = section.querySelector(
        ".motion-heading"
      );

      const rect = section.getBoundingClientRect();

      const entry = clamp(
        (
          window.innerHeight * .94 - rect.top
        ) / (
          window.innerHeight * .72
        ),
        0,
        1
      );

      const tone = Math.round(
        179 - 159 * entry
      );

      const scale = .78 + entry * .22;

      const offset = (1 - entry) * 46;

      heading.style.color =
        `rgb(${tone},${tone},${tone})`;

      heading.style.transform =
        `translate3d(0,${offset}px,0) scale(${scale})`;

      heading.style.fontWeight =
        entry > .75
        ? "800"
        : entry > .35
          ? "600"
          : "400";

    });


    /* NEXT SECTION LABEL */

    const activeLine =
      window.scrollY +
      window.innerHeight * .55;

    let active = 0;

    sections.forEach((section, index) => {

      if (section.offsetTop <= activeLine) {
        active = index;
      }

    });

    const nextIndex = Math.min(
      active + 1,
      sections.length - 1
    );

    const finished =
      active === sections.length - 1;

    const future = sections[nextIndex];

    nextSmall.textContent =
      finished
        ? "END OF INDEX"
        : "NEXT / " +
          String(nextIndex).padStart(2, "0");

    nextTitle.textContent =
      finished
        ? "RETURN TO THE BEGINNING"
        : future.querySelector(".motion-heading")
            ?.textContent
            .replace(/\s+/g, " ")
            .trim() || "PROJECTS & OBJECTS";

    next.style.opacity =
      finished ? ".5" : ".77";

    document.body.classList.toggle(
      "below-hero",
      window.scrollY >
      window.innerHeight * .52
    );
  }

  function schedule() {

    if (ticking) return;

    ticking = true;

    requestAnimationFrame(paint);
  }

  window.addEventListener(
    "scroll",
    schedule,
    { passive: true }
  );

  window.addEventListener(
    "resize",
    schedule
  );

  paint();


  /* LOCK BACKGROUND WHEN ATLAS OPEN */

  const syncOverlay = () => {

    document.body.classList.toggle(
      "index-active",
      indexScreen.classList.contains("open")
    );
  };

  new MutationObserver(syncOverlay).observe(
    indexScreen,
    {
      attributes: true,
      attributeFilter: ["class"]
    }
  );


  /* FLOATING ATLAS BUTTON */

  floatingIndex.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "instant"
      });

      requestAnimationFrame(() => {
        dot.dispatchEvent(
          new MouseEvent("click", {
            bubbles: true
          })
        );
      });
    }
  );

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

        if (Array.isArray(data) && data.length) {
          projects = data;
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
