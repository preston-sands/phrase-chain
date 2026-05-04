let FAKE_TIME = null;

function getNow() {
  return FAKE_TIME ? new Date(FAKE_TIME) : new Date();
}

function logPSTTime(now, label = "TIME CHECK") {
  const pstString = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    dateStyle: "full",
    timeStyle: "long"
  }).format(now);

  console.log(`🕒 ${label}:`, pstString);
}

function getTodayPST() {
  const now = getNow();
  logPSTTime(now, "getTodayPST");

  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(now);
}

const today = getTodayPST();

document.addEventListener("DOMContentLoaded", () => {
  loadPuzzle();
});