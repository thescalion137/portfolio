const arr = [1, 2, 3, [1, 2], 4, [5, 6, [7, 8, [5, 6, 8]]]];

function flatArr(arr) {
  let sorted = [];

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      sorted = sorted.concat(flatArr(element));
    } else {
      sorted.push(element);
    }
  });

  const finalRes = sorted.filter((item, index, ar) => {
    return ar.indexOf(item) === ar.lastIndexOf(item);
  });

  return finalRes;
}

const res = flatArr(arr);
console.log("🚀 ~ res:", res);
