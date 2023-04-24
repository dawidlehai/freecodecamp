// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference

function symDif(...args) {
  while (args.length > 1) {
    const unique = new Set();

    args[0].forEach((element) => {
      if (!args[1].includes(element)) unique.add(element);
    });
    args[1].forEach((element) => {
      if (!args[0].includes(element)) unique.add(element);
    });

    const sorted = Array.from(unique).sort();

    args.splice(0, 1);
    args[0] = sorted;
  }

  return args[0];
}

module.exports = symDif;
