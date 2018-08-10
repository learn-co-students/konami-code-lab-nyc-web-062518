const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let idx = 0
  document.body.addEventListener("keydown", (e) => {
    const key = e.key
    //press ArrowUp, the key will be 'ArrowUp'
    // console.log(e)
    console.log(e.key)
    if (key === codes[idx]) {
      ++idx
    } else {
      idx = 0
    }

    if (idx === codes.length) {
      alert('congratulations')
      console.log('congratulations')
    }

    console.log(idx)
  })
}
