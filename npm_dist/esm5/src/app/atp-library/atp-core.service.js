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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRwLWNvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FtYXppbmctdGltZS1waWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL2F0cC1saWJyYXJ5L2F0cC1jb3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDO0lBR0U7SUFBZ0IsQ0FBQzs7Ozs7O0lBRVYscUNBQVk7Ozs7O0lBQW5CLFVBQXFCLEdBQUcsRUFBRSxHQUFHOztZQUNyQixRQUFRLEdBQUcsRUFBRTs7WUFDYixVQUFVLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7WUFDL0IsVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBQy9CLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUM5QixTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxLQUFLLElBQUksQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLElBQUksVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDekMsQ0FBQyxHQUFHLENBQUM7O2dCQUNMLEtBQUssR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO2dCQUNwQixDQUFDLEdBQUcsU0FBUyxDQUFDO2FBQ2Y7aUJBQU0sSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO2dCQUMzQixLQUFLLEdBQUcsU0FBUyxDQUFDO2FBQ25CO1lBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTs7b0JBQ2pCLElBQUksR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENB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Q0FBQztRQUNqQyxPQUFPLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7O1lBRXJCLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQzs7WUFDM0MsTUFBTSxHQUFHLE9BQU8sR0FBRyxJQUFJO1FBQzdCLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNoQixPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNLElBQUksTUFBTSxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDN0IsT0FBTyxHQUFHLE9BQU8sR0FBRyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQztTQUNyQzthQUFNLElBQUksTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDNUIsT0FBTyxHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUM7U0FDNUI7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOztnQkExR0YsVUFBVTs7OztJQTJHWCxxQkFBQztDQUFBLEFBM0dELElBMkdDO1NBMUdZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElUaW1lIH0gZnJvbSAnLi9kZWZpbml0aW9ucyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdHBDb3JlU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIHB1YmxpYyBhbGxvd2VkVGltZXMgKG1pbiwgbWF4KSB7XHJcbiAgICBjb25zdCBhbGxUaW1lcyA9IFtdO1xyXG4gICAgY29uc3Qgbm93TWluSG91ciA9ICttaW4uc3BsaXQoJzonKVswXTtcclxuICAgIGNvbnN0IG5vd01heEhvdXIgPSArbWF4LnNwbGl0KCc6JylbMF07XHJcbiAgICBjb25zdCBub3dNaW5NaW4gPSArbWluLnNwbGl0KCc6JylbMV07XHJcbiAgICBjb25zdCBub3dNYXhNaW4gPSArbWF4LnNwbGl0KCc6JylbMV07XHJcbiAgICBmb3IgKGxldCBpID0gbm93TWluSG91cjsgaSA8PSBub3dNYXhIb3VyOyBpKyspIHtcclxuICAgICAgbGV0IGogPSAwLFxyXG4gICAgICAgICAgakRlc3QgPSA1OTtcclxuICAgICAgaWYgKGkgPT09IG5vd01pbkhvdXIpIHtcclxuICAgICAgICBqID0gbm93TWluTWluO1xyXG4gICAgICB9IGVsc2UgaWYgKGkgPT09IG5vd01heEhvdXIpIHtcclxuICAgICAgICBqRGVzdCA9IG5vd01heE1pbjtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGo7IGogPD0gakRlc3Q7IGorKykge1xyXG4gICAgICAgIGNvbnN0IGhvdXIgPSBpIDw9IDEyID8gaSA6IGkgLSAxMjtcclxuICAgICAgICBjb25zdCBtaW51dGUgPSBqO1xyXG4gICAgICAgIGNvbnN0IGFtcG0gPSBpIDwgMTIgPyAnQU0nIDogJ1BNJztcclxuICAgICAgICBhbGxUaW1lcy5wdXNoKGhvdXIgKyAnOicgKyBtaW51dGUgKyAnICcgKyBhbXBtKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFsbFRpbWVzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIENsb2NrTWFrZXIgKHR5cGU6ICdtaW51dGUnIHwgJ2hvdXInKTogQXJyYXk8YW55PiB7XHJcbiAgICBjb25zdCBpdGVtcyA9IFtdO1xyXG4gICAgY29uc3QgdGltZVZhbCA9ICh0eXBlID09PSAnbWludXRlJykgPyA2MCA6IDEyO1xyXG4gICAgY29uc3QgdGltZVN0ZXAgPSAodHlwZSA9PT0gJ21pbnV0ZScpID8gNSA6IDE7XHJcbiAgICBjb25zdCB0aW1lU3RhcnQgPSAodHlwZSA9PT0gJ21pbnV0ZScpID8gMCA6IDE7XHJcbiAgICBjb25zdCByID0gMTI0O1xyXG4gICAgY29uc3QgaiA9IHIgLSAyNTtcclxuXHJcbiAgICBmb3IgKGxldCBtaW4gPSB0aW1lU3RhcnQ7IG1pbiA8PSB0aW1lVmFsOyBtaW4gKz0gdGltZVN0ZXApIHtcclxuICAgICAgaWYgKG1pbiAhPT0gNjApIHtcclxuICAgICAgICBjb25zdCBzdHIgPSBTdHJpbmcobWluKTtcclxuICAgICAgICBjb25zdCB4ID0gaiAqIE1hdGguc2luKE1hdGguUEkgKiAyICogKG1pbiAvIHRpbWVWYWwpKTtcclxuICAgICAgICBjb25zdCB5ID0gaiAqIE1hdGguY29zKE1hdGguUEkgKiAyICogKG1pbiAvIHRpbWVWYWwpKTtcclxuXHJcbiAgICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICB0aW1lOiBzdHIsXHJcbiAgICAgICAgICBsZWZ0OiAoeCArIHIgLSAxNykgKyAncHgnLFxyXG4gICAgICAgICAgdG9wOiAoLXkgKyByIC0gMTcpICsgJ3B4JyxcclxuICAgICAgICAgIHR5cGVcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGl0ZW1zO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIFRpbWVUb1N0cmluZyh0aW1lOiBJVGltZSk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB7IGFtcG0sIG1pbnV0ZSwgaG91ciB9ID0gdGltZTtcclxuICAgIGxldCBoaCA9IGFtcG0gPT09ICdQTScgPyAraG91ciArIDEyIDogK2hvdXI7XHJcbiAgICBpZiAoYW1wbSA9PT0gJ0FNJyAmJiBoaCA9PT0gMTIpIHtcclxuICAgICAgaGggPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKCBoaCA9PT0gMjQpIHtcclxuICAgICAgaGggPSAxMjtcclxuICAgIH1cclxuICAgIGhoID0gaGggPCAxMCA/ICcwJyArIGhoIDogJycgKyBoaCBhcyBhbnk7XHJcbiAgICBjb25zdCBtbSA9IG1pbnV0ZSA8IDEwID8gJzAnICsgbWludXRlIDogbWludXRlO1xyXG4gICAgcmV0dXJuIGAke2hofToke21tfWA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb252ZXJ0cyAwMDowMCBmb3JtYXQgdG8gSVRpbWUgb2JqZWN0XHJcbiAgICovXHJcbiAgcHVibGljIFN0cmluZ1RvVGltZSAodGltZTogc3RyaW5nKTogSVRpbWUge1xyXG4gICAgY29uc3QgW2gsIG1dID0gdGltZS5zcGxpdCgnOicpO1xyXG4gICAgbGV0IGhvdXIgPSAraCA+IDEyID8gK2ggLSAxMiA6ICtoO1xyXG4gICAgaG91ciA9IGhvdXIgPT09IDAgPyAxMiA6IGhvdXI7XHJcbiAgICBjb25zdCBhbXBtID0gK2ggPj0gMTIgPyAnUE0nIDogJ0FNJztcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGFtcG0sIG1pbnV0ZTogK20sIGhvdXJcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZXhwZXJpbWVudGFsXHJcbiAgICovXHJcbiAgcHVibGljIENhbGNEZWdyZWVzIChlbGU6IGFueSwgcGFycmVudFBvczogYW55LCBzdGVwOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgY2xvY2sgPSB7XHJcbiAgICAgIHdpZHRoOiBlbGUuY3VycmVudFRhcmdldC5vZmZzZXRXaWR0aCxcclxuICAgICAgaGVpZ2h0OiBlbGUuY3VycmVudFRhcmdldC5vZmZzZXRIZWlnaHRcclxuICAgIH07XHJcbiAgICBjb25zdCB0YXJnZXRYID0gY2xvY2sud2lkdGggLyAyO1xyXG4gICAgY29uc3QgdGFyZ2V0WSA9IGNsb2NrLmhlaWdodCAvIDI7XHJcbiAgICBjb25zdCBWeCA9IE1hdGgucm91bmQoKGVsZS5jbGllbnRYIC0gcGFycmVudFBvcy5sZWZ0KSAtIHRhcmdldFgpO1xyXG4gICAgY29uc3QgVnkgPSBNYXRoLnJvdW5kKHRhcmdldFkgLSAoZWxlLmNsaWVudFkgLSBwYXJyZW50UG9zLnRvcCkpO1xyXG4gICAgbGV0IHJhZGlhbnMgPSAtTWF0aC5hdGFuMihWeSwgVngpO1xyXG4gICAgcmFkaWFucyArPSAyLjUgKiBNYXRoLlBJO1xyXG5cclxuICAgIGxldCBkZWdyZWVzID0gTWF0aC5yb3VuZChyYWRpYW5zICogMTgwIC8gTWF0aC5QSSk7XHJcbiAgICBjb25zdCBkZWdNb2QgPSBkZWdyZWVzICUgc3RlcDtcclxuICAgIGlmIChkZWdNb2QgPT09IDApIHtcclxuICAgICAgcmV0dXJuIGRlZ3JlZXM7XHJcbiAgICB9IGVsc2UgaWYgKGRlZ01vZCA+PSBzdGVwIC8gMikge1xyXG4gICAgICBkZWdyZWVzID0gZGVncmVlcyArIChzdGVwIC0gZGVnTW9kKTtcclxuICAgIH0gZWxzZSBpZiAoZGVnTW9kIDwgc3RlcCAvIDIpIHtcclxuICAgICAgZGVncmVlcyA9IGRlZ3JlZXMgLSBkZWdNb2Q7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGVncmVlcztcclxuICB9XHJcbn1cclxuIl19