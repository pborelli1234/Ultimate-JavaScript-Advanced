function StopWatch() {
    let startTime, endTime, running, duration = 0;
    
    Object.defineProperty(this, 'duration', {
        get: function() { return duration; },
        set: function(value) { duration = value; }
    });
    Object.defineProperty(this, 'startTime', {
        get: function() { return startTime; }
    });
    Object.defineProperty(this, 'endTime', {
        get: function() { return endTime; }
    });
    Object.defineProperty(this, 'running', {
        get: function() { return running; }
    });
}

StopWatch.prototype.start = function() {
    if (this.running)
        throw new Error("Stopwatch is already started.");

    this.startTime = new Date();
    this.running = true;
}

StopWatch.prototype.stop = function() {
    if (!this.running)
        throw new Error("Stopwatch is alread stopped.");

    this.endTime = new Date();
    this.running = false;

    const seconds = (endTime - startTime) / 1000;
    this.duration += seconds;
}

StopWatch.prototype.reset = function() {
    this.running = false;
    this.startTime = null,
    this.stopTime = null;
    this.duration = 0;
}