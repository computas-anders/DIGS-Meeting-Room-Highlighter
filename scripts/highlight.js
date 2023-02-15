const meeting_rooms = [ "150", "151", "233", "323", "324", "425", "426", "501", "502", "504", "505", "506"];
const flag = " [Google Meet]";

function log(msg) {
    console.log("[DIGS Meeting Room Highlighter] " + msg);
}

function doThing() {
    const titles = document.querySelectorAll("h3");

    //log("Starting...");
    //log(titles);
    titles.forEach(room => {
        const content = room.innerHTML;

        for (let i = 0; i < meeting_rooms.length; i++) {
            if (content.indexOf(meeting_rooms[i]) !== -1 && content.indexOf(flag) === -1) {
                room.innerHTML += flag;
                room.style = "color: green";
            }
        }
    });
    //log("Done!");
}

const time = 1000;
function start() {
    doThing();
    setTimeout(start, time);
}

start();