const targetEl = document.getElementById("target")!
const nextTargetPosEl = document.getElementById("next-target-pos")!
const startBtnEl = document.getElementById("start-test-btn")!
const testAreaHeight = document.getElementById("test-area")!.clientWidth
const headerHeight = document.querySelector("header")!.clientHeight
const scoreEl = document.getElementById("header__score")!
const bestScoreEl = document.getElementById("header__best-score")!

let testStarted: boolean = false
let score = 0
let bestScore = 0

startBtnEl.addEventListener("click", startTest)
targetEl.addEventListener("click", targetClick)

function startTest() {
  score = 0
  testStarted = true

  nextTargetPosEl.classList.remove("hidden")
  targetEl.classList.remove("hidden")
  startBtnEl.classList.add("hidden")

  moveTargets()
  moveTargets()
}

function targetClick() {
  moveTargets()
  addScore()
}

function moveTargets() {
  moveTargetToNext()
  moveNextTargetPos()
}

function addScore() {
  score += 1

  if (score > bestScore) {
    bestScore = score
  }
  
  updateScoreTexts()
}

function updateScoreTexts() {
  scoreEl.textContent = `Score: ${score}`
  bestScoreEl.textContent = `Best score: ${bestScore}`
}

function moveNextTargetPos() {
  const newTop = random(headerHeight, testAreaHeight - headerHeight)
  const newLeft = random(0, testAreaHeight - targetEl.offsetWidth)

  nextTargetPosEl.style.top = newTop + "px"
  nextTargetPosEl.style.left = newLeft + "px"
}

function moveTargetToNext() {
  targetEl.style.top = nextTargetPosEl.style.top
  targetEl.style.left = nextTargetPosEl.style.left
}

function random(min: number, max: number) {
  return min + Math.floor(Math.random() * (max - min + 1))
}