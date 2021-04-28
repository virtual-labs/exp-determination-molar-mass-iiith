//Your JavaScript goes in here
let startAnimation = async () => {
  const line = document.getElementById("half_grad");
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
  if (x == 1) document.getElementById("line3").style.stopColor = "#00a8f3";
  else document.getElementById("line3").style.stopColor = "orange";
  const line = document.getElementById("half_grad3");
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
  const line = document.getElementById("half_grad2");
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
  var image = document.getElementById("spoon1");
  image.setAttribute("opacity", "1");
  console.log(image);
  image.style.transform = "translate(200%, -5%);";
  image.style.pointerEvents = "none";
  var a1 = anime.timeline({
    targets: "#spoon1",
    duration: 800,
    easing: "linear",
    // opacity: "0",
    // translateX: "200%",
  });
  a1.add({
    duration: 0,
    translateX: "250%",
    translateY: "-25%",
    // opacity: "0",
  })
    .add({
      duration: 800,
      translateY: "5%",
    })
    .add({
      // duration: 800,
      translateY: "-25%",
      update: function (anim) {
        // message = messages[1];
        document.getElementById("spoonmouth").style.fill = "#b83dba";
        document.getElementById("spoonmouth").style.opacity = "1";
        // console.log(document.getElementById("spoonmouth"));
        // document.getElementById("message").innerHTML = message;
      },
    })
    .add({
      duration: 800,
      translateX: "480%",
      translateY: "200%",
    })
    .add({
      delay: "800",
      rotateZ: "45",
    })
    .add({
      update: function (anim) {
        // message = messages[1];
        document.getElementById("spoonmouth").style.fill = "#b83dba";
        document.getElementById("spoonmouth").style.opacity = "0";
        document.getElementById("pinkbottom").style.fill = "#b83dba";
      },
      opacity: 0,
    });
  document.getElementById("solvent").setAttribute("onclick", "movePipette()");
}
async function liftPiston() {
  var image = document.getElementById("syringepiston");
  // console.log(image);
  image.style.transform = "translate(200%, -5%);";
  image.style.pointerEvents = "none";
  var a1 = anime.timeline({
    targets: "#syringepiston",
    duration: 800,
    easing: "linear",
    // opacity: "0",
    // translateX: "200%",
  });
  a1.add({
    duration: 0,
    translateY: "8%",
    // opacity: "0",
  }).add({
    duration: 800,
    translateY: "-3%",
  });
}
async function movePipette() {
  changeMessage();
  var image = document.getElementById("pipette");
  image.setAttribute("opacity", "1");
  image.style.pointerEvents = "none";
  var a1 = anime.timeline({
    targets: "#pipette",
    duration: 800,
    easing: "linear",
    // opacity: "0",
    // translateX: "200%",
  });
  a1.add({
    duration: 0,
    translateY: "-90%",
    translateX: "450%",
  });
  fillPipette();
  await new Promise((r) => setTimeout(r, 1000));
  // console.log("adww");
  // liftPiston();
  // fillSyringe();
  // sleep(1);
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
        document.getElementById("layerabovepink").style.fill = "#00a8f3";
      },
      opacity: 0,
    });
  document
    .getElementById("solutionbeaker")
    .setAttribute("onclick", "shakeBeaker()");
}
async function moveSyringe() {
  changeMessage();
  var image = document.getElementById("syringe");
  image.setAttribute("opacity", "1");
  image.style.pointerEvents = "none";
  var a1 = anime.timeline({
    targets: "#syringe",
    duration: 800,
    easing: "linear",
  });
  a1.add({
    duration: 0,
    translateY: "-400%",
    translateX: "-410%",
  });
  liftPiston();
  fillSyringe(1);
  await new Promise((r) => setTimeout(r, 1000));
  a1.add({
    duration: 100,
    rotateZ: 90,
  }).add({
    duration: 1000,
    translateY: "-175%",
    translateX: "700%",
  });
}
async function shakeBeaker() {
  changeMessage();
  var image = document.getElementById("solutionbeaker");
  // image.style.pointerEvents = "none";
  var a1 = anime
    .timeline({
      targets: "#solutionbeaker",
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
        document.getElementById("layerabovepink").style.fill = "orange";
        document.getElementById("pinkbottom").style.fill = "orange";
      },
    });
  document
    .getElementById("solutionbeaker")
    .setAttribute("onclick", "moveSyringe2()");
}
async function moveSyringe2() {
  var image = document.getElementById("syringe");
  image.style.opacity = 1;
  image.style.pointerEvents = "none";
  var a1 = anime.timeline({
    targets: "#syringe",
    duration: 800,
    easing: "linear",
  });
  a1.add({
    duration: 0,
    translateY: "-120%",
    translateX: "-760%",
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
    translateY: "-175%",
    translateX: "700%",
  });
  document.getElementById("AnimationBottomRight").play();
  await new Promise((r) => setTimeout(r, 2000));
  iter2 += 1;
  document.getElementById("animtext").innerHTML = animationmessages[iter2];
  await new Promise((r) => setTimeout(r, 5000));
  iter2 += 1;
  document.getElementById("animtext").innerHTML = animationmessages[iter2];
  await new Promise((r) => setTimeout(r, 3000));
  iter2 += 1;
  document.getElementById("animtext").innerHTML = animationmessages[iter2];
  await new Promise((r) => setTimeout(r, 5000));
  iter2 += 1;
  document.getElementById("animtext").innerHTML = animationmessages[iter2];
  await new Promise((r) => setTimeout(r, 3000));
  iter2 += 1;
  document.getElementById("animtext").innerHTML = animationmessages[iter2];
  startAnimation();
}
var messages = [
  "Click on the solvent bottle to draw 1 ml of the solvent (methanol) and inject it into the sample inlet to clean any impurity in the sample pathway.",
  "Click on the sample bottle to transfer small amount (around 1mg) of the substance into the empty solution bottle",
  "Click on the solvent bottle to transfer 5 ml of the solvent (methanol) to the substance taken.",
  "Click on the  solution bottle to make a clear solution.",
  "Click on the solution Bottle to draw 1 ml of the sample prepared to load on to the mass spectrometer.",
];
var iter1 = -1;
function changeMessage() {
  iter1++;
  document.getElementById("instruction").innerHTML = messages[iter1];
}
function removeDivs() {
  changeMessage();
  $("div").remove(".form-check");
}
var iter2 = -1;
var animationmessages = [
  "The sample is introduced into the vaporisation chamber which is instantly vapourised due to high vacuum and heat.",
  "Positively charged radical ions are formed by bombardment of beam of high energy electrons.",
  "The positively charged radical ions are accelerated by perforated negative electrodes",
  "The ions are sorted and separated by the magnetic field according to their mass/charge ratio.",
  "Now observe the graph on the left. These lines demonstrate the molar mass of the compound in the solution Bottle.",
];
