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

/*async function makeBroccoli() {
  let response;
  try {
    const result = await obtainInstruction("broccoli", 0);
    response = result.document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${instruction}</li>`;
  } catch (error) {}
}*/

/*obtainInstruction("broccoli", 1).then((instruction) => {
  document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
});
obtainInstruction("broccoli", 2).then((instruction) => {
  document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
});
obtainInstruction("broccoli", 3).then((instruction) => {
  document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
});
obtainInstruction("broccoli", 4).then((instruction) => {
  document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
});
obtainInstruction("broccoli", 5).then((instruction) => {
  document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
});
obtainInstruction("broccoli", 6).then((instruction) => {
  document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
});*/

// Bonus 2 - Promise all
// ...
