let instructors = [
  {name: "Sarah Rose", favLang: "Go"},
  {name: "Troy", favLang: "R"},
  {name: "Ken", favLang: "English"}
]

instructors.sort() // not gonna help

const test = instructors.sort( (a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0;
})

console.log(test);