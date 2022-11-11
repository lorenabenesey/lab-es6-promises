// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  1,
  (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  2,
  (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  3,
  (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  4,
  (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  },
  (error) => console.log(error)
);

// Iteration 1 - using callbacks
// ...

// Iteration 2 - using promises
// ...

/*obtainInstruction("steak", 0)
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
  })
  .then(() => {
    return obtainInstruction("steak", 1).then((instruction) => {
      document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    });
  })
  .then(() => {
    return obtainInstruction("steak", 2).then((instruction) => {
      document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    });
  })
  .then(() => {
    return obtainInstruction("steak", 3).then((instruction) => {
      document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    });
  })
  .then(() => {
    return obtainInstruction("steak", 4).then((instruction) => {
      document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    });
  })
  .then(() => {
    return obtainInstruction("steak", 5).then((instruction) => {
      document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    });
  })
  .then(() => {
    return obtainInstruction("steak", 6).then((instruction) => {
      document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    });
  })
  .then(() => {
    return obtainInstruction("steak", 7).then((instruction) => {
      document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
      document.querySelector("#steakImg").removeAttribute("hidden");
    });
  })
  .catch((error) => console.log(error));*/

const promiseStep1 = obtainInstruction("steak", 1);
const promiseStep2 = obtainInstruction("steak", 2);
const promiseStep3 = obtainInstruction("steak", 3);
const promiseStep4 = obtainInstruction("steak", 4);
const promiseStep5 = obtainInstruction("steak", 5);
const promiseStep6 = obtainInstruction("steak", 6);
const promiseStep7 = obtainInstruction("steak", 7);

obtainInstruction("steak", 0)
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
  })
  .then(() => {
    return promiseStep1.then((instruction) => {
      document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    });
  })
  .then(() => {
    return promiseStep2.then((instruction) => {
      document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    });
  })
  .then(() => {
    return promiseStep3.then((instruction) => {
      document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    });
  })
  .then(() => {
    return promiseStep4.then((instruction) => {
      document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    });
  })
  .then(() => {
    return promiseStep5.then((instruction) => {
      document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    });
  })
  .then(() => {
    return promiseStep6.then((instruction) => {
      document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    });
  })
  .then(() => {
    return promiseStep7.then((instruction) => {
      document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
      document.querySelector("#steakImg").removeAttribute("hidden");
    });
  })
  .catch((error) => console.log(error));

// Iteration 3 using async/await
// ...

async function makeBroccoliStep(step) {
  try {
    const instruction = await obtainInstruction("broccoli", step);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
  } catch (error) {
    console.log(error);
  }
}
async function makeBroccoli() {
  for (let step = 0; step < 7; step++) {
    await makeBroccoliStep(step);
  }
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}
makeBroccoli();

// Bonus 2 - Promise all
// ...

const brusselsStep0 = obtainInstruction("brusselsSprouts", 0);
const brusselsStep1 = obtainInstruction("brusselsSprouts", 1);
const brusselsStep2 = obtainInstruction("brusselsSprouts", 2);
const brusselsStep3 = obtainInstruction("brusselsSprouts", 3);
const brusselsStep4 = obtainInstruction("brusselsSprouts", 4);
const brusselsStep5 = obtainInstruction("brusselsSprouts", 5);
const brusselsStep6 = obtainInstruction("brusselsSprouts", 6);
const brusselsStep7 = obtainInstruction("brusselsSprouts", 7);
const brusselsStep8 = Promise.resolve("Brussels sprouts are ready!");

const newArr = [
  brusselsStep0,
  brusselsStep1,
  brusselsStep2,
  brusselsStep3,
  brusselsStep4,
  brusselsStep5,
  brusselsStep6,
  brusselsStep7,
  brusselsStep8,
];

Promise.all(newArr)
  .then((instructions) => {
    instructions.forEach(
      (instruction) =>
        (document.querySelector(
          "#brusselsSprouts"
        ).innerHTML += `<li>${instruction}</li>`)
    );
  })
  .then(() =>
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden")
  );
