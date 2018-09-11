function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector('.target');
}

function deepestChild() {
  const lastDiv= document.getElementById("grand-node").querySelectorAll("div")
  for (let i=0; i < lastDiv.length; i++) {
    return lastDiv[3]
  }
}



function increaseRankBy(n) {
  const lis = document.getElementById("app").querySelectorAll(".ranked-list li")
    for(let i = 0; i < lis.length; i++ ) {
      lis[i].innerHTML = parseInt(lis[i].innerHTML) + n ;
    }
  }
