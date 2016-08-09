var Semaphore = function () {
    var self = this;

    self.mostLoadedTramId = null;

    var findMostLoadedTramId = function (trams) {
        var maxPassengers = 0;
        var mostLoadedTramId = null;

        trams.forEach(function (tram) {
            if (tram.passengers > maxPassengers) {
                maxPassengers = tram.passengers;
                mostLoadedTramId = tram.id;
            }
        });

        return mostLoadedTramId;
    };

    var findConcurrentTrams = function (trams) {
        var concurrentTrams = [];
        trams.forEach(function (tram) {
            if (tram.isNextSemaphore()) {
                concurrentTrams.push(tram);
            }
        });
        return concurrentTrams;
    };

    var freezeTrams = function (trams, mostLoadedTramId) {
        trams.forEach(function (tram) {
            if (tram.isStop()) {
                tram.setFrozen(tram.id !== mostLoadedTramId);
            }
        });
    };

    var unfreezeTrams = function (trams) {
        trams.forEach(function (tram) {
            if (tram.isStop()) {
                tram.setFrozen(false);
            }
        });
    };

    self.checkTrams = function (trams) {
        var concurrentTrams = findConcurrentTrams(trams);
        if (concurrentTrams.length <= 1) {
            unfreezeTrams(trams);
            return;
        }

        self.mostLoadedTramId = findMostLoadedTramId(concurrentTrams);

        freezeTrams(concurrentTrams, self.mostLoadedTramId);
    }
};