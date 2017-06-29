function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  // nextNode should only turn false when it reaches the end of the string making it ideal for a while loop iterates through each node...
  while (nextNode) {
    node = nextNode
    nextNode = node.children[0] //shifting through each node until it hits the end of the line...
  }

  return node // at which point we return the final and deepestChild!
}
