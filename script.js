const mainBG = document.getElementById("container");
const switchButton = document.getElementById("switch");
const switchDark = document.getElementById("switch-dark");
const switchDot = document.getElementById("switch-dot");
const headerBG = document.getElementById("header-container");
const nwContainer = document.getElementsByClassName("networks-boxes");
const nwBoxes = Array.from(nwContainer);
const statsContainer = document.getElementsByClassName("stats-container");
const stats = Array.from(statsContainer);

let isDark = false; //tells if theme is dark

/* SWITCH THEME */
const switchTheme = () => {
    isDark = !isDark;
    switchBtn();
    switchBg();
    switchHeader();
    switchMain();
    switchOverview();
}

/* MOVE SWITCH BUTTON & CHANGE COLOR*/
const switchBtn = () => {
    if(isDark == true) {
        switchButton.setAttribute("id", "switch-dark");
        switchDot.setAttribute("id", "switch-dot-dark");
    } else if (isDark == false) {
        switchButton.setAttribute("id", "switch");
        switchDot.setAttribute("id", "switch-dot");
    }
}

/* SWITCH MAIN BG COLOR */
const switchBg= () => {
    if(isDark == true) {
        mainBG.setAttribute("id", "container-dark");
    } else if (isDark == false) {
        mainBG.setAttribute("id", "container");
    }
}

/* SWITCH HEADER COLOR */
const switchHeader= () => {
    if(isDark == true) {
        headerBG.setAttribute("id", "header-container-dark");
    } else if (isDark == false) {
        headerBG.setAttribute("id", "header-container");
    }
}

/* SWITCH NETWORKS CONTAINERS COLORS */
const switchMain = () => {
    nwBoxes.forEach((div, i) => {
        if(isDark == true) {
            nwBoxes[i].classList.add("networks-boxes-dark");
        } else if (isDark == false) {
            nwBoxes[i].classList.remove("networks-boxes-dark");
        }
        i++
    });
}

/* SWITCH OVERVIEW CONTAINERS COLORS */
const switchOverview = () => {
    stats.forEach((div, i) => {
        if(isDark == true) {
            stats[i].classList.add("stats-container-dark");
        } else if (isDark == false) {
            stats[i].classList.remove("stats-container-dark");
        }
        i++
    });
}