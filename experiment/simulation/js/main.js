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
let fillSyringe = async () => {
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
  var image = document.getElementById("spoon1");
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
      translateX: "380%",
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
  var image = document.getElementById("pipette");
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
    translateY: "150%",
    translateX: "-1250%",
  });
  fillPipette();
  await new Promise((r) => setTimeout(r, 1000));
  // console.log("adww");
  // liftPiston();
  // fillSyringe();
  // sleep(1);
  a1.add({
    duration: 500,
    translateY: "110%",
  })
    .add({
      duration: 800,
      translateX: "-437%",
    })
    .add({
      duration: 400,
      translateY: "200%",
    })
    .add({
      update: function (anim) {
        document.getElementById("layerabovepink").style.fill = "#00a8f3";
      },
    });
}
// startAnimation();
pur();
movePipette();
