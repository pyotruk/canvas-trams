var Semaphore = function () {
    var self = this;

    self.currentTram = null;

    var findMostLoadedTram = function (trams) {
        var maxPassengers = 0;
        var mostLoadedTram = null;

        trams.forEach(function (tram) {
            if (tram.passengers > maxPassengers) {
                maxPassengers = tram.passengers;
                mostLoadedTram = tram;
            }
        });

        return mostLoadedTram;
    };

    var findConcurrentTrams = function (trams) {
        var concurrentTrams = [];
        trams.forEach(function (tram) {
            if (tram.isNextSemaphore() || tram.isPrevSemaphore() || tram.isNearSemaphore()) {
                concurrentTrams.push(tram);
            }
        });
        return concurrentTrams;
    };

    var freezeTrams = function (trams, mostLoadedTramId) {
        trams.forEach(function (tram) {
            if (tram.isStop() && !tram.isNearSemaphore()) {
                tram.setFrozen(tram.id !== mostLoadedTramId);
            }
        });
    };

    var unfreezeTrams = function (trams) {
        trams.forEach(function (tram) {
            if (tram.isStop() && !tram.isNearSemaphore()) {
                tram.setFrozen(false);
            }
        });
    };

    self.checkTrams = function (trams) {
        var concurrentTrams = findConcurrentTrams(trams);
        if (concurrentTrams.length <= 1) {
            unfreezeTrams(trams);
            self.currentTram = null;
            return;
        }

        self.currentTram = findMostLoadedTram(concurrentTrams);

        freezeTrams(concurrentTrams, self.currentTram.id);
    }
};