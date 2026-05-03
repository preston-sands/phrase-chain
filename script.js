function getTodayPST() {
  const now = new Date();

  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(now);
}

const today = getTodayPST();

function loadTodayPuzzle() {
  fetch("puzzles.json")
    .then(res => res.json())
    .then(puzzles => {
      const today = getTodayPST();

      const puzzle =
        puzzles.find(p => p.date === today) ||

      loadPuzzle(puzzle); // your existing function
      scaleChainIfNeeded();
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadTodayPuzzle();
});