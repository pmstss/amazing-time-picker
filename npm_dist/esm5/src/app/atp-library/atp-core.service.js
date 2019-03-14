/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var AtpCoreService = /** @class */ (function () {
    function AtpCoreService() {
    }
    /**
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    AtpCoreService.prototype.allowedTimes = /**
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    function (min, max) {
        /** @type {?} */
        var allTimes = [];
        /** @type {?} */
        var nowMinHour = +min.split(':')[0];
        /** @type {?} */
        var nowMaxHour = +max.split(':')[0];
        /** @type {?} */
        var nowMinMin = +min.split(':')[1];
        /** @type {?} */
        var nowMaxMin = +max.split(':')[1];
        for (var i = nowMinHour; i <= nowMaxHour; i++) {
            /** @type {?} */
            var j = 0;
            /** @type {?} */
            var jDest = 59;
            if (i === nowMinHour) {
                j = nowMinMin;
            }
            else if (i === nowMaxHour) {
                jDest = nowMaxMin;
            }
            for (j; j <= jDest; j++) {
                /** @type {?} */
                var hour = i <= 12 ? i : i - 12;
                /** @type {?} */
                var minute = j;
                /** @type {?} */
                var ampm = i < 12 ? 'AM' : 'PM';
                allTimes.push(hour + ':' + minute + ' ' + ampm);
            }
        }
        return allTimes;
    };
    /**
     * @param {?} type
     * @return {?}
     */
    AtpCoreService.prototype.ClockMaker = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        /** @type {?} */
        var items = [];
        /** @type {?} */
        var timeVal = (type === 'minute') ? 60 : 12;
        /** @type {?} */
        var timeStep = (type === 'minute') ? 5 : 1;
        /** @type {?} */
        var timeStart = (type === 'minute') ? 0 : 1;
        /** @type {?} */
        var r = 124;
        /** @type {?} */
        var j = r - 25;
        for (var min = timeStart; min <= timeVal; min += timeStep) {
            if (min !== 60) {
                /** @type {?} */
                var str = String(min);
                /** @type {?} */
                var x = j * Math.sin(Math.PI * 2 * (min / timeVal));
                /** @type {?} */
                var y = j * Math.cos(Math.PI * 2 * (min / timeVal));
                items.push({
                    time: str,
                    left: (x + r - 17) + 'px',
                    top: (-y + r - 17) + 'px',
                    type: type
                });
            }
        }
        return items;
    };
    /**
     * @param {?} time
     * @return {?}
     */
    AtpCoreService.prototype.TimeToString = /**
     * @param {?} time
     * @return {?}
     */
    function (time) {
        var ampm = time.ampm, minute = time.minute, hour = time.hour;
        /** @type {?} */
        var hh = ampm === 'PM' ? +hour + 12 : +hour;
        if (ampm === 'AM' && hh === 12) {
            hh = 0;
        }
        if (hh === 24) {
            hh = 12;
        }
        hh = hh < 10 ? '0' + hh : (/** @type {?} */ ('' + hh));
        /** @type {?} */
        var mm = minute < 10 ? '0' + minute : minute;
        return hh + ":" + mm;
    };
    /**
     * Converts 00:00 format to ITime object
     */
    /**
     * Converts 00:00 format to ITime object
     * @param {?} time
     * @return {?}
     */
    AtpCoreService.prototype.StringToTime = /**
     * Converts 00:00 format to ITime object
     * @param {?} time
     * @return {?}
     */
    function (time) {
        var _a = tslib_1.__read(time.split(':'), 2), h = _a[0], m = _a[1];
        /** @type {?} */
        var hour = +h > 12 ? +h - 12 : +h;
        hour = hour === 0 ? 12 : hour;
        /** @type {?} */
        var ampm = +h >= 12 ? 'PM' : 'AM';
        return {
            ampm: ampm, minute: +m, hour: hour
        };
    };
    /**
     * @experimental
     */
    /**
     * \@experimental
     * @param {?} ele
     * @param {?} parrentPos
     * @param {?} step
     * @return {?}
     */
    AtpCoreService.prototype.CalcDegrees = /**
     * \@experimental
     * @param {?} ele
     * @param {?} parrentPos
     * @param {?} step
     * @return {?}
     */
    function (ele, parrentPos, step) {
        /** @type {?} */
        var clock = {
            width: ele.currentTarget.offsetWidth,
            height: ele.currentTarget.offsetHeight
        };
        /** @type {?} */
        var targetX = clock.width / 2;
        /** @type {?} */
        var targetY = clock.height / 2;
        /** @type {?} */
        var Vx = Math.round((ele.clientX - parrentPos.left) - targetX);
        /** @type {?} */
        var Vy = Math.round(targetY - (ele.clientY - parrentPos.top));
        /** @type {?} */
        var radians = -Math.atan2(Vy, Vx);
        radians += 2.5 * Math.PI;
        /** @type {?} */
        var degrees = Math.round(radians * 180 / Math.PI);
        /** @type {?} */
        var degMod = degrees % step;
        if (degMod === 0) {
            return degrees;
        }
        else if (degMod >= step / 2) {
            degrees = degrees + (step - degMod);
        }
        else if (degMod < step / 2) {
            degrees = degrees - degMod;
        }
        return degrees;
    };
    AtpCoreService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AtpCoreService.ctorParameters = function () { return []; };
    return AtpCoreService;
}());
export { AtpCoreService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRwLWNvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FtYXppbmctdGltZS1waWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL2F0cC1saWJyYXJ5L2F0cC1jb3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDO0lBR0U7SUFBZ0IsQ0FBQzs7Ozs7O0lBRVYscUNBQVk7Ozs7O0lBQW5CLFVBQXFCLEdBQUcsRUFBRSxHQUFHOztZQUNyQixRQUFRLEdBQUcsRUFBRTs7WUFDYixVQUFVLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7WUFDL0IsVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBQy9CLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUM5QixTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxLQUFLLElBQUksQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLElBQUksVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDekMsQ0FBQyxHQUFHLENBQUM7O2dCQUNMLEtBQUssR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO2dCQUNwQixDQUFDLEdBQUcsU0FBUyxDQUFDO2FBQ2Y7aUJBQUssSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO2dCQUMxQixLQUFLLEdBQUcsU0FBUyxDQUFDO2FBQ25CO1lBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTs7b0JBQ2pCLElBQUksR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENB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Q0FBQztRQUNqQyxPQUFPLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7O1lBRXJCLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQzs7WUFDM0MsTUFBTSxHQUFHLE9BQU8sR0FBRyxJQUFJO1FBQzdCLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNoQixPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNLElBQUksTUFBTSxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDN0IsT0FBTyxHQUFHLE9BQU8sR0FBRyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQztTQUNyQzthQUFNLElBQUksTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDNUIsT0FBTyxHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUM7U0FDNUI7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOztnQkExR0YsVUFBVTs7OztJQTJHWCxxQkFBQztDQUFBLEFBM0dELElBMkdDO1NBMUdZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElUaW1lIH0gZnJvbSAnLi9kZWZpbml0aW9ucyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdHBDb3JlU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIHB1YmxpYyBhbGxvd2VkVGltZXMgKG1pbiwgbWF4KSB7XHJcbiAgICBjb25zdCBhbGxUaW1lcyA9IFtdO1xyXG4gICAgY29uc3Qgbm93TWluSG91ciA9ICttaW4uc3BsaXQoJzonKVswXTtcclxuICAgIGNvbnN0IG5vd01heEhvdXIgPSArbWF4LnNwbGl0KCc6JylbMF07XHJcbiAgICBjb25zdCBub3dNaW5NaW4gPSArbWluLnNwbGl0KCc6JylbMV07XHJcbiAgICBjb25zdCBub3dNYXhNaW4gPSArbWF4LnNwbGl0KCc6JylbMV07XHJcbiAgICBmb3IgKGxldCBpID0gbm93TWluSG91cjsgaSA8PSBub3dNYXhIb3VyOyBpKyspIHtcclxuICAgICAgbGV0IGogPSAwLFxyXG4gICAgICAgICAgakRlc3QgPSA1OTtcclxuICAgICAgaWYgKGkgPT09IG5vd01pbkhvdXIpIHtcclxuICAgICAgICBqID0gbm93TWluTWluO1xyXG4gICAgICB9ZWxzZSBpZiAoaSA9PT0gbm93TWF4SG91cikge1xyXG4gICAgICAgIGpEZXN0ID0gbm93TWF4TWluO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAoajsgaiA8PSBqRGVzdDsgaisrKSB7XHJcbiAgICAgICAgY29uc3QgaG91ciA9IGkgPD0gMTIgPyBpIDogaSAtIDEyO1xyXG4gICAgICAgIGNvbnN0IG1pbnV0ZSA9IGo7XHJcbiAgICAgICAgY29uc3QgYW1wbSA9IGkgPCAxMiA/ICdBTScgOiAnUE0nO1xyXG4gICAgICAgIGFsbFRpbWVzLnB1c2goaG91ciArICc6JyArIG1pbnV0ZSArICcgJyArIGFtcG0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWxsVGltZXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgQ2xvY2tNYWtlciAodHlwZTogJ21pbnV0ZScgfCAnaG91cicpOiBBcnJheTxhbnk+IHtcclxuICAgIGNvbnN0IGl0ZW1zID0gW107XHJcbiAgICBjb25zdCB0aW1lVmFsID0gKHR5cGUgPT09ICdtaW51dGUnKSA/IDYwIDogMTI7XHJcbiAgICBjb25zdCB0aW1lU3RlcCA9ICh0eXBlID09PSAnbWludXRlJykgPyA1IDogMTtcclxuICAgIGNvbnN0IHRpbWVTdGFydCA9ICh0eXBlID09PSAnbWludXRlJykgPyAwIDogMTtcclxuICAgIGNvbnN0IHIgPSAxMjQ7XHJcbiAgICBjb25zdCBqID0gciAtIDI1O1xyXG5cclxuICAgIGZvciAobGV0IG1pbiA9IHRpbWVTdGFydDsgbWluIDw9IHRpbWVWYWw7IG1pbiArPSB0aW1lU3RlcCkge1xyXG4gICAgICBpZiAobWluICE9PSA2MCkge1xyXG4gICAgICAgIGNvbnN0IHN0ciA9IFN0cmluZyhtaW4pO1xyXG4gICAgICAgIGNvbnN0IHggPSBqICogTWF0aC5zaW4oTWF0aC5QSSAqIDIgKiAobWluIC8gdGltZVZhbCkpO1xyXG4gICAgICAgIGNvbnN0IHkgPSBqICogTWF0aC5jb3MoTWF0aC5QSSAqIDIgKiAobWluIC8gdGltZVZhbCkpO1xyXG5cclxuICAgICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICAgIHRpbWU6IHN0cixcclxuICAgICAgICAgIGxlZnQ6ICh4ICsgciAtIDE3KSArICdweCcsXHJcbiAgICAgICAgICB0b3A6ICgteSArIHIgLSAxNykgKyAncHgnLFxyXG4gICAgICAgICAgdHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXRlbXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgVGltZVRvU3RyaW5nKHRpbWU6IElUaW1lKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHsgYW1wbSwgbWludXRlLCBob3VyIH0gPSB0aW1lO1xyXG4gICAgbGV0IGhoID0gYW1wbSA9PT0gJ1BNJyA/ICtob3VyICsgMTIgOiAraG91cjtcclxuICAgIGlmIChhbXBtID09PSAnQU0nICYmIGhoID09PSAxMikge1xyXG4gICAgICBoaCA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAoIGhoID09PSAyNCkge1xyXG4gICAgICBoaCA9IDEyO1xyXG4gICAgfVxyXG4gICAgaGggPSBoaCA8IDEwID8gJzAnICsgaGggOiAnJyArIGhoIGFzIGFueTtcclxuICAgIGNvbnN0IG1tID0gbWludXRlIDwgMTAgPyAnMCcgKyBtaW51dGUgOiBtaW51dGU7XHJcbiAgICByZXR1cm4gYCR7aGh9OiR7bW19YDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlcnRzIDAwOjAwIGZvcm1hdCB0byBJVGltZSBvYmplY3RcclxuICAgKi9cclxuICBwdWJsaWMgU3RyaW5nVG9UaW1lICh0aW1lOiBzdHJpbmcpOiBJVGltZSB7XHJcbiAgICBjb25zdCBbaCwgbV0gPSB0aW1lLnNwbGl0KCc6Jyk7XHJcbiAgICBsZXQgaG91ciA9ICtoID4gMTIgPyAraCAtIDEyIDogK2g7XHJcbiAgICBob3VyID0gaG91ciA9PT0gMCA/IDEyIDogaG91cjtcclxuICAgIGNvbnN0IGFtcG0gPSAraCA+PSAxMiA/ICdQTScgOiAnQU0nO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYW1wbSwgbWludXRlOiArbSwgaG91clxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBleHBlcmltZW50YWxcclxuICAgKi9cclxuICBwdWJsaWMgQ2FsY0RlZ3JlZXMgKGVsZTogYW55LCBwYXJyZW50UG9zOiBhbnksIHN0ZXA6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBjbG9jayA9IHtcclxuICAgICAgd2lkdGg6IGVsZS5jdXJyZW50VGFyZ2V0Lm9mZnNldFdpZHRoLFxyXG4gICAgICBoZWlnaHQ6IGVsZS5jdXJyZW50VGFyZ2V0Lm9mZnNldEhlaWdodFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHRhcmdldFggPSBjbG9jay53aWR0aCAvIDI7XHJcbiAgICBjb25zdCB0YXJnZXRZID0gY2xvY2suaGVpZ2h0IC8gMjtcclxuICAgIGNvbnN0IFZ4ID0gTWF0aC5yb3VuZCgoZWxlLmNsaWVudFggLSBwYXJyZW50UG9zLmxlZnQpIC0gdGFyZ2V0WCk7XHJcbiAgICBjb25zdCBWeSA9IE1hdGgucm91bmQodGFyZ2V0WSAtIChlbGUuY2xpZW50WSAtIHBhcnJlbnRQb3MudG9wKSk7XHJcbiAgICBsZXQgcmFkaWFucyA9IC1NYXRoLmF0YW4yKFZ5LCBWeCk7XHJcbiAgICByYWRpYW5zICs9IDIuNSAqIE1hdGguUEk7XHJcblxyXG4gICAgbGV0IGRlZ3JlZXMgPSBNYXRoLnJvdW5kKHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJKTtcclxuICAgIGNvbnN0IGRlZ01vZCA9IGRlZ3JlZXMgJSBzdGVwO1xyXG4gICAgaWYgKGRlZ01vZCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gZGVncmVlcztcclxuICAgIH0gZWxzZSBpZiAoZGVnTW9kID49IHN0ZXAgLyAyKSB7XHJcbiAgICAgIGRlZ3JlZXMgPSBkZWdyZWVzICsgKHN0ZXAgLSBkZWdNb2QpO1xyXG4gICAgfSBlbHNlIGlmIChkZWdNb2QgPCBzdGVwIC8gMikge1xyXG4gICAgICBkZWdyZWVzID0gZGVncmVlcyAtIGRlZ01vZDtcclxuICAgIH1cclxuICAgIHJldHVybiBkZWdyZWVzO1xyXG4gIH1cclxufVxyXG4iXX0=