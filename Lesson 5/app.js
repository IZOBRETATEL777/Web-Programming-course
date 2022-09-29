const container = document.getElementById("container");
const txt = document.getElementById("txt");
const footballTable = document.getElementById("comands");

const A = ["alfa", "alma", "alca", "armud"];
const B = ["bal", "badam", "borani"];
const C = ["casda", "casf", "caada"];
const D = ["dhjh", "dasds", "dasds"];

const myObj = {
  A: ["alfa", "alma", "alca", "armud"],
  B: ["bal", "badam", "borani"],
  C: ["casda", "casf", "caada"],
  D: ["dhjh", "dasds", "dasds"],
};

const championLeagues = {
  A: {
    Barcelona: { points: "15", average: "5" },
    PSG: { points: "10", average: "3" },
    Dortmund: { points: "8", average: "2" },
    Brugge: { points: "3", average: "-2" },
  },

  B: {
    Karabakh: { points: "15", average: "5" },
    Fenerbahche: { points: "10", average: "3" },
    "Real-Madrid": { points: "8", average: "2" },
    "Man United": { points: "3", average: "-2" },
  },
};

container.addEventListener("click", (el) => {
  idd = el.target.id;
  console.log(idd);
  let message;
  switch (idd) {
    case "A":
      message = A;
      break;
    case "B":
      message = B;
    case "C":
      message = C;
      break;
    case "D":
      message = D;
      break;
    default:
      message = [];
  }
  txt.innerHTML = `<p>${message.join(" ")}</p>`;
  txt.innerHTML += `<p>${myObj[idd].join(" ")}</p>`;

  if (idd == "A" || idd == "B") {
    comands = championLeagues[idd];
    footballTable.innerHTML = "<tr><th>Command</th><th>Points</th><th>Average</th></tr>";
    for (comand in comands) {
      footballTable.innerHTML += `<tr><td>${comand}</td><td>${comands[comand]["points"]}</td><td>${comands[comand]["average"]}</td></tr>`;
    }
  }
});
