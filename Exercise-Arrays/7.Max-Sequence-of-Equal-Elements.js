function slove(arr) {
  let currentElement = arr[0];
  let currentCount = 1;
  let maxElement = arr[0];
  let maxCount = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === currentElement) {
      currentCount++;
    } else {
      currentElement = arr[i];
      currentCount = 1;
    }

    if (currentCount > maxCount) {
      maxElement = currentElement;
      maxCount = currentCount;
    }
  }

  const longestSequence = Array(maxCount).fill(maxElement);
  console.log(longestSequence.join(" "));
}

slove([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
