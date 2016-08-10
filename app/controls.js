/**
 * Controls are input for passengers count for each tram.
 */
var Controls = function (trams, containerId) {

    var container = document.getElementById(containerId);

    var buildControl = function (tram) {
        var controlWrap = document.createElement('div');
        var controlLabel = document.createElement('label');
        var control = document.createElement('input');

        controlLabel.style.backgroundColor = tram.color;
        control.type = 'number';
        control.min = '0';
        control.value = tram.passengers;

        controlWrap.appendChild(controlLabel);
        controlWrap.appendChild(control);
        container.appendChild(controlWrap);

        control.addEventListener('input', function () {
            tram.passengers = parseInt(this.value);
            console.log('Controls >> ' + tram.id + ' tram passengers number changed to ' + tram.passengers);
        });
    };

    var init = function (trams) {
        trams.forEach(function (tram) {
            buildControl(tram);
        });
    };

    init(trams);
};