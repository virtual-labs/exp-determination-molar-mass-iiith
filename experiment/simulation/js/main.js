"use strict";
let overallIteration = -3;
let startAnimation = async () => {
  const line = document.getElementById("half-grad");
  const yFinalPosition = 0;
  let yPos = 100;
  const interval = window.setInterval(() => {
    if (yPos < yFinalPosition) {
      line.setAttribute("y1", "0.1%");
      return window.clearInterval(interval);
    }
    yPos -= 0.1;
    line.setAttribute("y1", `${yPos}%`);
  }, 1);
};
let fillSyringe = async (x) => {
  if (overallIteration === 1 || overallIteration === 5) {
    if (x === 1 && overallIteration === 1) {
      document.getElementById("line3").style.stopColor = "#00a8f3";
    } else if (x != 1 && overallIteration === 5) {
      document.getElementById("line3").style.stopColor = "orange";
    }
    const line = document.getElementById("half-grad3");
    const yFinalPosition = 0;
    let yPos = 100;
    const interval = window.setInterval(() => {
      if (yPos < yFinalPosition) {
        line.setAttribute("y1", "0.1%");
        return window.clearInterval(interval);
      }
      yPos -= 0.6;
      line.setAttribute("y1", `${yPos}%`);
    }, 1);
    overallIteration++;
    if (overallIteration === 2) {
      document.getElementById("solvent-beaker").style.cursor = "default";
      document.getElementById("sample-beaker").style.cursor = "pointer";
    } else if (overallIteration === 6) {
      document.getElementById("solution-beaker").style.cursor = "default";
    }
  }
};

let fillPipette = async () => {
  const line = document.getElementById("half-grad2");
  const yFinalPosition = 0;
  let yPos = 100;
  const interval = window.setInterval(() => {
    if (yPos < yFinalPosition) {
      line.setAttribute("y1", "0.1%");
      return window.clearInterval(interval);
    }
    yPos -= 0.6;
    line.setAttribute("y1", `${yPos}%`);
  }, 1);
};

function pur() {
  if (overallIteration === 2) {
    changeMessage();
    let image = document.getElementById("spoon1");
    image.setAttribute("opacity", "1");
    image.style.transform = "translate(200%, -5%);";
    image.style.pointerEvents = "none";
    let a1 = anime.timeline({
      targets: "#spoon1",
      duration: 800,
      easing: "linear",
    });
    a1.add({
      duration: 0,
      translateX: "280%",
      translateY: "-125%",
    })
      .add({
        duration: 800,
        translateY: "-55%",
      })
      .add({
        translateY: "-125%",
        update: function (anim) {
          document.getElementById("spoon-mouth").style.fill = "#b83dba";
          document.getElementById("spoon-mouth").style.opacity = "1";
        },
      })
      .add({
        duration: 800,
        translateX: "500%",
        translateY: "175%",
      })
      .add({
        delay: "800",
        rotateZ: "45",
      })
      .add({
        update: function (anim) {
          document.getElementById("spoon-mouth").style.fill = "#b83dba";
          document.getElementById("spoon-mouth").style.opacity = "0";
          document.getElementById("pink-bottom").style.fill = "#b83dba";
        },
        opacity: 0,
      });
    document
      .getElementById("solvent-beaker")
      .setAttribute("onclick", "movePipette()");
    overallIteration++;
    document.getElementById("sample-beaker").style.cursor = "default";
    document.getElementById("solvent-beaker").style.cursor = "pointer";
  }
}
async function liftPiston() {
  let image = document.getElementById("syringe-piston");
  image.style.transform = "translate(100%, -5%);";
  image.style.pointerEvents = "none";
  let a1 = anime.timeline({
    targets: "#syringe-piston",
    duration: 800,
    easing: "linear",
  });
  a1.add({
    duration: 0,
    translateY: "8%",
  }).add({
    duration: 800,
    translateY: "-3%",
  });
}
async function movePipette() {
  if (overallIteration === 3) {
    changeMessage();
    let image = document.getElementById("pipette");
    image.setAttribute("opacity", "1");
    image.style.pointerEvents = "none";
    let a1 = anime.timeline({
      targets: "#pipette",
      duration: 800,
      easing: "linear",
    });
    let startX = "-980%";
    let startY = "150%";

    if (screen.width > 1533) {
      startY = "-150%";
      startX = "450%";
    }

    if (screen.width < 769) {
      startY = "-110%";
      startX = "450%";
    }

    if (screen.width < 607) {
      startY = "120%";
      startX = "-980%";
    }

    a1.add({
      duration: 0,
      translateY: startY,
      translateX: startX,
    });
    fillPipette();
    await new Promise((r) => setTimeout(r, 1000));
    a1.add({
      duration: 500,
      translateX: "-110%",
    })
      .add({
        duration: 800,
        translateY: "170%",
      })
      .add({
        update: function (anim) {
          document.getElementById("layer-above-pink").style.fill = "#00a8f3";
        },
        opacity: 0,
      });
    document
      .getElementById("solution-beaker")
      .setAttribute("onclick", "shakeBeaker()");
    overallIteration++;
    document.getElementById("solvent-beaker").style.cursor = "default";
    document.getElementById("solution-beaker").style.cursor = "pointer";
  }
}
async function moveSyringe() {
  if (overallIteration === 1) {
    changeMessage();
    let image = document.getElementById("syringe");
    image.setAttribute("opacity", "1");
    image.style.pointerEvents = "none";
    let a1 = anime.timeline({
      targets: "#syringe",
      duration: 800,
      easing: "linear",
    });
    let startX = "-1620%";
    let startY = "-350%";
    let endX = "200%";
    let endY = "-248%";

    if (screen.width > 1533) {
      startX = "-950%";
      startY = "-600%";
    }

    if (screen.width < 769) {
      startX = "350%";
      startY = "-1110%";
    }

    if (screen.width < 607) {
      startX = "-270%";
      startY = "-890%";
    }

    a1.add({
      duration: 0,
      translateY: startY,
      translateX: startX,
    });
    liftPiston();
    fillSyringe(1);
    await new Promise((r) => setTimeout(r, 1000));
    a1.add({
      duration: 100,
      rotateZ: 90,
    }).add({
      duration: 1000,
      translateY: endY,
      translateX: endX,
    });
  }
}
async function shakeBeaker() {
  if (overallIteration === 4) {
    changeMessage();
    let image = document.getElementById("solution-beaker");
    let a1 = anime
      .timeline({
        targets: "#solution-beaker",
        duration: 800,
        easing: "easeInOutSine",
        direction: "alternate",
        loop: 0,
      })
      .add({
        duration: 0,
        translateX: "0%",
      })
      .add({
        rotate: [10, 0, -10, 0],
      })
      .add({
        update: function (anim) {
          document.getElementById("layer-above-pink").style.fill = "orange";
          document.getElementById("pink-bottom").style.fill = "orange";
        },
      });
    document
      .getElementById("solution-beaker")
      .setAttribute("onclick", "moveSyringe2()");
    overallIteration++;
  }
}
async function moveSyringe2() {
  if (overallIteration === 5) {
    let image = document.getElementById("syringe");
    image.style.opacity = 1;
    image.style.pointerEvents = "none";
    let a1 = anime.timeline({
      targets: "#syringe",
      duration: 800,
      easing: "linear",
    });

    let startX = "-1080%";
    let startY = "-280%";
    let endX = "240%";
    let endY = "-245%";

    if (screen.width > 1533) {
      startX = "-1320%";
    }

    if (screen.width < 769) {
      startX = "10%";
      startY = "-810%";
    }

    if (screen.width < 607) {
      startX = "260%";
      startY = "-830%";
    }

    a1.add({
      duration: 0,
      translateY: startY,
      translateX: startX,
      rotateZ: 0,
    });
    liftPiston();
    fillSyringe(2);
    await new Promise((r) => setTimeout(r, 1000));
    a1.add({
      duration: 100,
      rotateZ: 90,
    }).add({
      duration: 1000,
      translateY: endY,
      translateX: endX,
    });
    await new Promise((r) => setTimeout(r, 2000));
    // autoScrollVideo();

    document.getElementById("experiment-setup").style.display = "none";
    document.getElementById("animation-video").style.display = "block";
    document.getElementById("animation-bottom-right").play();
    document.getElementById("head-instructions").innerHTML = "Observations";
    document.getElementById("head-observations").innerHTML = "Observations";
    document.getElementById("observation").innerHTML = "";
    document.getElementById("instruction").innerHTML = "";

    await new Promise((r) => setTimeout(r, 2000));
    observeMessage();
    await new Promise((r) => setTimeout(r, 5000));
    observeMessage();
    await new Promise((r) => setTimeout(r, 3000));
    observeMessage();
    await new Promise((r) => setTimeout(r, 5000));
    observeMessage();
    await new Promise((r) => setTimeout(r, 3000));
    observeMessage();

    await new Promise((r) => setTimeout(r, 1000));

    document.getElementById("animation-video").style.display = "none";
    document.getElementById("plotted-graph-window").style.display = "block";
    startAnimation();
    overallIteration++;
  }
}

let setupMessages = [
  "Click on the Sample Beaker option in the Apparatus Menu to introduce it into the workspace.",
  "Click on the Solvent Beaker option in the Apparatus Menu to introduce it into the workspace.",
  "Click on the Solution Beaker option in the Apparatus Menu to introduce it into the workspace.",
  "Click on the Mass Spectrometer option in the Apparatus Menu to introduce it into the workspace.",
];

let setup = 0;

function setupMessage() {
  document.getElementById("instruction").innerHTML = setupMessages[setup];
  document.getElementById("observation").innerHTML = setupMessages[setup];
  setup++;
}

setupMessage();
async function visibility(x) {
  if (x === 1 && overallIteration === -3) {
    document.getElementById("sample-beaker").style.visibility = "visible";
    overallIteration++;
    setupMessage();
  } else if (x === 2 && overallIteration === -2) {
    document.getElementById("solvent-beaker").style.visibility = "visible";
    overallIteration++;
    setupMessage();
  } else if (x === 3 && overallIteration === -1) {
    document.getElementById("solution-beaker").style.visibility = "visible";
    overallIteration++;
    setupMessage();
  } else if (x === 4 && overallIteration === 0) {
    document.getElementById("spectrometer").style.visibility = "visible";
    overallIteration++;
    changeMessage();
  }
}

let instructionMessages = [
  "Click on the Solvent beaker to draw 1 ml of the solvent (methanol) and inject it into the sample inlet to clean any impurity in the sample pathway of the mass spectrometer.",
  "Click on the Sample beaker to transfer small amount (around 1mg) of the substance into the empty solution bottle",
  "Click on the Solvent beaker to transfer 5 ml of the solvent (methanol) to the substance taken.",
  "Click on the  Solution beaker to shake it and make a clear solution.",
  "Click on the Solution beaker to draw 1 ml of the sample prepared to load on to the mass spectrometer.",
];
let iter1 = -1;
function changeMessage() {
  iter1++;
  document.getElementById("instruction").innerHTML = instructionMessages[iter1];
  document.getElementById("observation").innerHTML = instructionMessages[iter1];
}

document.getElementById("solvent-beaker").style.cursor = "pointer";

let iter2 = -1;
let observationMessages = [
  "Now observe the zoomed in animation of mass spectromter. The sample is introduced into the vaporisation chamber which is instantly vapourised due to high vacuum and heat.",
  "Positively charged radical ions are formed by bombardment of beam of high energy electrons.",
  "The positively charged radical ions are accelerated by perforated negative electrodes",
  "The ions are sorted and separated by the magnetic field according to their mass/charge ratio.",
  "Now observe the graph being plotted. These lines demonstrate the molar mass of the compound in the solution Bottle.",
];

function observeMessage() {
  iter2++;
  document.getElementById("instruction").innerHTML = observationMessages[iter2];
  document.getElementById("observation").innerHTML = observationMessages[iter2];
}

async function restart() {
  // document.getElementById("simulation").style.width = "100%";

  // document.getElementById("animation-video").style.display = "none";
  // document.getElementById("plotted-graph-window").style.display = "none";

  // document.getElementById("head-instructions").innerHTML = "Instructions";
  // document.getElementById("head-observations").innerHTML = "Instructions";
  // document.getElementById("instruction").innerHTML = "";
  // document.getElementById("observation").innerHTML = "";

  // overallIteration = -3;
  // iter2 = -1;
  // iter1 = -1;
  // setup = 0;

  // setupMessage();

  // document.getElementById("experiment-setup").style.display = "block";
  // document.getElementById("syringe").style.display = "none";
  // document.getElementById("sample-beaker").style.visibility = "hidden";
  // document.getElementById("solvent-beaker").style.visibility = "hidden";
  // document.getElementById("solution-beaker").style.visibility = "hidden";
  // document.getElementById("spectrometer").style.visibility = "hidden";
  // document.getElementById("experiment-setup").style.display = "block";

  let divWidth = document.getElementById("workspace").clientWidth;
  console.log(divWidth);
  console.log("Here we go");
}
