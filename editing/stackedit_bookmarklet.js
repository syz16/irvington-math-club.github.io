// ####### All #######
function clickSidebarButton(regexName) {
    buttons = document.querySelectorAll(".side-bar__inner .menu-entry__text > *")
    for (let button of buttons) {
        if (regexName.test(button.innerHTML)) {
            button.click();
            return true
        }
    }
    return false
}

// naive no mutation observer
function waitForElementToDisplay(selector, time) {
    return new Promise(function(resolve, reject) {
        e = document.querySelector(selector)
        console.log(selector, e);
        if (e != null) {
            console.log("resolve")
            resolve(e)
            return;
        } else {
            setTimeout(function() {
                waitForElementToDisplay(selector, time).then(resolve).catch(reject);
            }, time);
        }
    })
}

document.querySelector(".navigation-bar__button--stackedit").click()
clickSidebarButton(/Synchronize/i)

repoTextURL = "github.com/irvington-math-club/irvington-math-club.github.io";

function setRepoAndPath(pathName, cursorStart, cursorEnd) {
    repoURL = waitForElementToDisplay("[error=repoUrl] input", 50)
    path = waitForElementToDisplay("[error=path] input", 50)
    Promise.all([repoURL, path]).then(function(x) {
      url = x[0];
      path = x[1];
      url.value = repoTextURL;
      path.value = pathName;
      moved = false;
      path.addEventListener("click", function() {
          if (!moved) {
              path.value = pathName;
              path.focus();
              path.setSelectionRange(cursorStart, cursorEnd || cursorStart);
              moved = !moved;
          }
      })
    });
}

// ######## Save #######
if (clickSidebarButton(/Save on GitHub/i)) {
    // success
    const pathName = "_posts/" + new Date().toISOString().substring(0, 10) + "-.md";
    setRepoAndPath(pathName, 18)
} else {
    clickSidebarButton(/Add GitHub account/i)
}

// ######## Open ########
if (clickSidebarButton(/Open from Github/i)) {
  setRepoAndPath("_posts/", 0, 7)
} else {
    clickSidebarButton(/Add GitHub account/i)
}
