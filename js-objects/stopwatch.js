
function StopWatch() {
    let duration = 0;
    let startTime;
    let endTime;
    let running;

    this.start = function() {
        if (running)
            throw new Error("Stopwatch is already started.");

        startTime = new Date();
        running = true;
    };
    this.stop = function() {
        if (running === false)
            throw new Error("Stopwatch is alread stopped.");

        endTime = new Date();
        running = false;

        const seconds = (endTime - startTime) / 1000;
        duration += seconds;
    };
    this.reset = function() {
        running = false;
        startTime = null,
        stopTime = null;
        duration = 0;
    };
    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    });
}

const stopwatch = new StopWatch();