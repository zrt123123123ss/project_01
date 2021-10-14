function animate(obj, target, eventr) {
    clearInterval(obj.name)
    obj.name = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.name);
            eventr && eventr();
        }
        else {
            if (step == -1) {
                step = -2;
            }
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 12)
}
