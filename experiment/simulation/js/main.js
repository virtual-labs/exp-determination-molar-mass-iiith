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
  if (x === 1) document.getElementById("line3").style.stopColor = "#00a8f3";
  else document.getElementById("line3").style.stopColor = "orange";
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
    translateX: "250%",
    translateY: "-25%",
  })
    .add({
      duration: 800,
      translateY: "5%",
    })
    .add({
      translateY: "-25%",
      update: function (anim) {
        document.getElementById("spoon-mouth").style.fill = "#b83dba";
        document.getElementById("spoon-mouth").style.opacity = "1";
      },
    })
    .add({
      duration: 800,
      translateX: "450%",
      translateY: "200%",
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
  document.getElementById("solvent").setAttribute("onclick", "movePipette()");
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
  changeMessage();
  let image = document.getElementById("pipette");
  image.setAttribute("opacity", "1");
  image.style.pointerEvents = "none";
  let a1 = anime.timeline({
    targets: "#pipette",
    duration: 800,
    easing: "linear",
  });
  a1.add({
    duration: 0,
    translateY: "-90%",
    translateX: "450%",
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
}
async function moveSyringe() {
  changeMessage();
  let image = document.getElementById("syringe");
  image.setAttribute("opacity", "1");
  image.style.pointerEvents = "none";
  let a1 = anime.timeline({
    targets: "#syringe",
    duration: 800,
    easing: "linear",
  });
  let startX = "-530%";
  let startY = "-550%";
  let endX = "800%";
  let endY = "-235%";

  if (screen.width < 577) {
    startX = "-120%";
    startY = "-630%";
    endX = "-350%";
    endY = "80%";
  }

  if (screen.width < 400) {
    startX = "-200%";
    startY = "-1000%";
    endX = "-550%";
    endY = "125%";
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
async function shakeBeaker() {
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
      translateX: "70%",
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
}
async function moveSyringe2() {
  let image = document.getElementById("syringe");
  image.style.opacity = 1;
  image.style.pointerEvents = "none";
  let a1 = anime.timeline({
    targets: "#syringe",
    duration: 800,
    easing: "linear",
  });

  let startX = "-985%";
  let startY = "-150%";
  let endX = "800%";
  let endY = "-235%";

  if (screen.width < 577) {
    startX = "-470%";
    startY = "-350%";
    endX = "-350%";
    endY = "80%";
  }

  if (screen.width < 400) {
    startX = "-760%";
    startY = "-550%";
    endX = "-550%";
    endY = "125%";
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
  document.getElementById("animation-bottom-right").play();
  document.getElementById("instructions").innerHTML = "Observations:";
  await new Promise((r) => setTimeout(r, 2000));
  iter2 += 1;
  document.getElementById("instruction").innerHTML = observationMessages[iter2];
  await new Promise((r) => setTimeout(r, 5000));
  iter2 += 1;
  document.getElementById("instruction").innerHTML = observationMessages[iter2];
  await new Promise((r) => setTimeout(r, 3000));
  iter2 += 1;
  document.getElementById("instruction").innerHTML = observationMessages[iter2];
  await new Promise((r) => setTimeout(r, 5000));
  iter2 += 1;
  document.getElementById("instruction").innerHTML = observationMessages[iter2];
  await new Promise((r) => setTimeout(r, 3000));
  iter2 += 1;
  document.getElementById("instruction").innerHTML = observationMessages[iter2];
  startAnimation();
}
let instructionMessages = [
  "Click on the solvent bottle to draw 1 ml of the solvent (methanol) and inject it into the sample inlet to clean any impurity in the sample pathway of the mass spectrometer.",
  "Click on the sample bottle to transfer small amount (around 1mg) of the substance into the empty solution bottle",
  "Click on the solvent bottle to transfer 5 ml of the solvent (methanol) to the substance taken.",
  "Click on the  solution bottle to make a clear solution.",
  "Click on the solution Bottle to draw 1 ml of the sample prepared to load on to the mass spectrometer.",
];
let iter1 = -1;
function changeMessage() {
  iter1++;
  document.getElementById("instruction").innerHTML = instructionMessages[iter1];
}
function removeDivs() {
  changeMessage();
  $("div").remove(".custom-control,.custom-radio");
}
let iter2 = -1;
let observationMessages = [
  "Now observe the zoomed in animation of mass spectromter. The sample is introduced into the vaporisation chamber which is instantly vapourised due to high vacuum and heat.",
  "Positively charged radical ions are formed by bombardment of beam of high energy electrons.",
  "The positively charged radical ions are accelerated by perforated negative electrodes",
  "The ions are sorted and separated by the magnetic field according to their mass/charge ratio.",
  "Now observe the graph being plotted. These lines demonstrate the molar mass of the compound in the solution Bottle.",
];
