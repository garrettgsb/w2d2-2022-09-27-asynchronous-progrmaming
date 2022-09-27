// The Setup: countTimesRan * 100
{
  let count = 0;
  function countTimesRan() {
    console.log(`countTimesRan has run ${++count} times!`);
  }

  for (let i = 0; i < 100; i++) {
    if (shouldRun(0.9)) {
      countTimesRan()
    };
  }
  function shouldRun(probability) {
    return Math.random() > probability
  }
}


{
  let count = 0;
  function countTimesRan() {
    console.log(`countTimesRan has run ${++count} times!`);
  }

  for (let i = 0; i < 100; i++) {
    maybeRun(0.9, countTimesRan);
  }
}

function maybeRun(probability, fn) {
  if (Math.random() > probability) {
    fn();
  }
}
