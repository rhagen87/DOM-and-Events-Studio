// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {

    let takeoff = document.getElementById("takeoff");
    let landing = document.getElementById("landing");
    let missionAbort = document.getElementById("missionAbort");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let flightStatus = document.getElementById("flightStatus");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let leftButton = document.getElementById("left");
    let rightButton = document.getElementById("right");
    let rocket = document.getElementById("rocket");

    function takeoffClick() {
        let takeoffConfirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (takeoffConfirm === true) {
            flightStatus.innerHTML = "Shuttle in flight."
            shuttleBackground.style.background = 'blue'
            spaceShuttleHeight.innerHTML += 10000
        }
    }

    function landClick() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.background = 'green';
        spaceShuttleHeight.innerHTML = 0;
    }

    function abortClick() {
        let abortConfirm = window.confirm("Confirm that you want to abort the mission.");
        if (abortConfirm === true) {
            flightStatus.innerHTML = "Mission aborted."
            shuttleBackground.style.background = 'green'
            spaceShuttleHeight.innerHTML = 0;
        }
    }
    let rocketX = 250;
    let rocketY = 0;
    rocket.style.position = 'relative'

    function leftClick() {
        rocketY += -10;
        rocket.style.left = rocketY + 'px';
    }

    function rightClick() {
        rocketY += 10;
        rocket.style.left = rocketY + 'px';
    }

    function upClick() {
        rocketX += -10;
        rocket.style.top = rocketX + 'px';
    }

    function downClick() {
        rocketX += 10;
        rocket.style.top = rocketX + 'px';
    }

    takeoff.addEventListener("click", takeoffClick)
    landing.addEventListener("click", landClick)
    missionAbort.addEventListener("click", abortClick)
    leftButton.addEventListener("click", leftClick)
    rightButton.addEventListener("click", rightClick)
    upButton.addEventListener('click', upClick)
    downButton.addEventListener('click', downClick)
}

window.onload = init;