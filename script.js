class Clock {
    constructor() {
        this.totalSeconds = 0;
        this.interval = null;
    }

    start() {
        this.interval = setInterval(function() {
            if (!this.totalSeconds) this.totalSeconds = 0;
            this.totalSeconds += 1;
            const timer = document.getElementById("clock");
            const min = (Math.floor(this.totalSeconds / 60 % 60)).toString().padStart(2, "0");
            const seconds = (parseInt(self.totalSeconds % 60)).toString().padStart(2, "0");
            timer.innerHTML = `${min}:${seconds}`;

            if (min+1 % 5 === 0 && seconds === "45") runes.play();
            else if (seconds === "45") audio.play();
        }, 1000);
    }

    pause() {
        if (this.interval !== null) {
            clearInterval(this.interval);
            this.interval = null;
            document.getElementById("pause").innerHTML = "Resume";
        } else {
            this.start();
            document.getElementById("pause").innerHTML = "Pause";
        }

    }

    stop() {
        clearInterval(this.interval);
        this.interval = null;
        this.totalSeconds = 0;
        document.getElementById("pause").innerHTML = "Pause";
        document.getElementById("clock").innerHTML = "00:00"
    }
}

const clock = new Clock();
const audio = document.getElementById("sound");
const runes = document.getElementById("runes")