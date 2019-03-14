/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class AtpCoreService {
    constructor() { }
    /**
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    allowedTimes(min, max) {
        /** @type {?} */
        const allTimes = [];
        /** @type {?} */
        const nowMinHour = +min.split(':')[0];
        /** @type {?} */
        const nowMaxHour = +max.split(':')[0];
        /** @type {?} */
        const nowMinMin = +min.split(':')[1];
        /** @type {?} */
        const nowMaxMin = +max.split(':')[1];
        for (let i = nowMinHour; i <= nowMaxHour; i++) {
            /** @type {?} */
            let j = 0;
            /** @type {?} */
            let jDest = 59;
            if (i === nowMinHour) {
                j = nowMinMin;
            }
            else if (i === nowMaxHour) {
                jDest = nowMaxMin;
            }
            for (j; j <= jDest; j++) {
                /** @type {?} */
                const hour = i <= 12 ? i : i - 12;
                /** @type {?} */
                const minute = j;
                /** @type {?} */
                const ampm = i < 12 ? 'AM' : 'PM';
                allTimes.push(hour + ':' + minute + ' ' + ampm);
            }
        }
        return allTimes;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    ClockMaker(type) {
        /** @type {?} */
        const items = [];
        /** @type {?} */
        const timeVal = (type === 'minute') ? 60 : 12;
        /** @type {?} */
        const timeStep = (type === 'minute') ? 5 : 1;
        /** @type {?} */
        const timeStart = (type === 'minute') ? 0 : 1;
        /** @type {?} */
        const r = 124;
        /** @type {?} */
        const j = r - 25;
        for (let min = timeStart; min <= timeVal; min += timeStep) {
            if (min !== 60) {
                /** @type {?} */
                const str = String(min);
                /** @type {?} */
                const x = j * Math.sin(Math.PI * 2 * (min / timeVal));
                /** @type {?} */
                const y = j * Math.cos(Math.PI * 2 * (min / timeVal));
                items.push({
                    time: str,
                    left: (x + r - 17) + 'px',
                    top: (-y + r - 17) + 'px',
                    type
                });
            }
        }
        return items;
    }
    /**
     * @param {?} time
     * @return {?}
     */
    TimeToString(time) {
        const { ampm, minute, hour } = time;
        /** @type {?} */
        let hh = ampm === 'PM' ? +hour + 12 : +hour;
        if (ampm === 'AM' && hh === 12) {
            hh = 0;
        }
        if (hh === 24) {
            hh = 12;
        }
        hh = hh < 10 ? '0' + hh : (/** @type {?} */ ('' + hh));
        /** @type {?} */
        const mm = minute < 10 ? '0' + minute : minute;
        return `${hh}:${mm}`;
    }
    /**
     * Converts 00:00 format to ITime object
     * @param {?} time
     * @return {?}
     */
    StringToTime(time) {
        const [h, m] = time.split(':');
        /** @type {?} */
        let hour = +h > 12 ? +h - 12 : +h;
        hour = hour === 0 ? 12 : hour;
        /** @type {?} */
        const ampm = +h >= 12 ? 'PM' : 'AM';
        return {
            ampm, minute: +m, hour
        };
    }
    /**
     * \@experimental
     * @param {?} ele
     * @param {?} parrentPos
     * @param {?} step
     * @return {?}
     */
    CalcDegrees(ele, parrentPos, step) {
        /** @type {?} */
        const clock = {
            width: ele.currentTarget.offsetWidth,
            height: ele.currentTarget.offsetHeight
        };
        /** @type {?} */
        const targetX = clock.width / 2;
        /** @type {?} */
        const targetY = clock.height / 2;
        /** @type {?} */
        const Vx = Math.round((ele.clientX - parrentPos.left) - targetX);
        /** @type {?} */
        const Vy = Math.round(targetY - (ele.clientY - parrentPos.top));
        /** @type {?} */
        let radians = -Math.atan2(Vy, Vx);
        radians += 2.5 * Math.PI;
        /** @type {?} */
        let degrees = Math.round(radians * 180 / Math.PI);
        /** @type {?} */
        const degMod = degrees % step;
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
    }
}
AtpCoreService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AtpCoreService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRwLWNvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FtYXppbmctdGltZS1waWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL2F0cC1saWJyYXJ5L2F0cC1jb3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsTUFBTSxPQUFPLGNBQWM7SUFFekIsZ0JBQWdCLENBQUM7Ozs7OztJQUVWLFlBQVksQ0FBRSxHQUFHLEVBQUUsR0FBRzs7Y0FDckIsUUFBUSxHQUFHLEVBQUU7O2NBQ2IsVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O2NBQy9CLFVBQVUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOztjQUMvQixTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Y0FDOUIsU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsS0FBSyxJQUFJLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRTs7Z0JBQ3pDLENBQUMsR0FBRyxDQUFDOztnQkFDTCxLQUFLLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLFVBQVUsRUFBRTtnQkFDcEIsQ0FBQyxHQUFHLFNBQVMsQ0FBQzthQUNmO2lCQUFNLElBQUksQ0FBQyxLQUFLLFVBQVUsRUFBRTtnQkFDM0IsS0FBSyxHQUFHLFNBQVMsQ0FBQzthQUNuQjtZQUNELEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O3NCQUNqQixJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FB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QUksQ0FBQyxFQUFFLENBQUM7O1lBRXJCLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQzs7Y0FDM0MsTUFBTSxHQUFHLE9BQU8sR0FBRyxJQUFJO1FBQzdCLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNoQixPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNLElBQUksTUFBTSxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDN0IsT0FBTyxHQUFHLE9BQU8sR0FBRyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQztTQUNyQzthQUFNLElBQUksTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDNUIsT0FBTyxHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUM7U0FDNUI7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7WUExR0YsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVRpbWUgfSBmcm9tICcuL2RlZmluaXRpb25zJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF0cENvcmVTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgcHVibGljIGFsbG93ZWRUaW1lcyAobWluLCBtYXgpIHtcclxuICAgIGNvbnN0IGFsbFRpbWVzID0gW107XHJcbiAgICBjb25zdCBub3dNaW5Ib3VyID0gK21pbi5zcGxpdCgnOicpWzBdO1xyXG4gICAgY29uc3Qgbm93TWF4SG91ciA9ICttYXguc3BsaXQoJzonKVswXTtcclxuICAgIGNvbnN0IG5vd01pbk1pbiA9ICttaW4uc3BsaXQoJzonKVsxXTtcclxuICAgIGNvbnN0IG5vd01heE1pbiA9ICttYXguc3BsaXQoJzonKVsxXTtcclxuICAgIGZvciAobGV0IGkgPSBub3dNaW5Ib3VyOyBpIDw9IG5vd01heEhvdXI7IGkrKykge1xyXG4gICAgICBsZXQgaiA9IDAsXHJcbiAgICAgICAgICBqRGVzdCA9IDU5O1xyXG4gICAgICBpZiAoaSA9PT0gbm93TWluSG91cikge1xyXG4gICAgICAgIGogPSBub3dNaW5NaW47XHJcbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gbm93TWF4SG91cikge1xyXG4gICAgICAgIGpEZXN0ID0gbm93TWF4TWluO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAoajsgaiA8PSBqRGVzdDsgaisrKSB7XHJcbiAgICAgICAgY29uc3QgaG91ciA9IGkgPD0gMTIgPyBpIDogaSAtIDEyO1xyXG4gICAgICAgIGNvbnN0IG1pbnV0ZSA9IGo7XHJcbiAgICAgICAgY29uc3QgYW1wbSA9IGkgPCAxMiA/ICdBTScgOiAnUE0nO1xyXG4gICAgICAgIGFsbFRpbWVzLnB1c2goaG91ciArICc6JyArIG1pbnV0ZSArICcgJyArIGFtcG0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWxsVGltZXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgQ2xvY2tNYWtlciAodHlwZTogJ21pbnV0ZScgfCAnaG91cicpOiBBcnJheTxhbnk+IHtcclxuICAgIGNvbnN0IGl0ZW1zID0gW107XHJcbiAgICBjb25zdCB0aW1lVmFsID0gKHR5cGUgPT09ICdtaW51dGUnKSA/IDYwIDogMTI7XHJcbiAgICBjb25zdCB0aW1lU3RlcCA9ICh0eXBlID09PSAnbWludXRlJykgPyA1IDogMTtcclxuICAgIGNvbnN0IHRpbWVTdGFydCA9ICh0eXBlID09PSAnbWludXRlJykgPyAwIDogMTtcclxuICAgIGNvbnN0IHIgPSAxMjQ7XHJcbiAgICBjb25zdCBqID0gciAtIDI1O1xyXG5cclxuICAgIGZvciAobGV0IG1pbiA9IHRpbWVTdGFydDsgbWluIDw9IHRpbWVWYWw7IG1pbiArPSB0aW1lU3RlcCkge1xyXG4gICAgICBpZiAobWluICE9PSA2MCkge1xyXG4gICAgICAgIGNvbnN0IHN0ciA9IFN0cmluZyhtaW4pO1xyXG4gICAgICAgIGNvbnN0IHggPSBqICogTWF0aC5zaW4oTWF0aC5QSSAqIDIgKiAobWluIC8gdGltZVZhbCkpO1xyXG4gICAgICAgIGNvbnN0IHkgPSBqICogTWF0aC5jb3MoTWF0aC5QSSAqIDIgKiAobWluIC8gdGltZVZhbCkpO1xyXG5cclxuICAgICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICAgIHRpbWU6IHN0cixcclxuICAgICAgICAgIGxlZnQ6ICh4ICsgciAtIDE3KSArICdweCcsXHJcbiAgICAgICAgICB0b3A6ICgteSArIHIgLSAxNykgKyAncHgnLFxyXG4gICAgICAgICAgdHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXRlbXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgVGltZVRvU3RyaW5nKHRpbWU6IElUaW1lKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHsgYW1wbSwgbWludXRlLCBob3VyIH0gPSB0aW1lO1xyXG4gICAgbGV0IGhoID0gYW1wbSA9PT0gJ1BNJyA/ICtob3VyICsgMTIgOiAraG91cjtcclxuICAgIGlmIChhbXBtID09PSAnQU0nICYmIGhoID09PSAxMikge1xyXG4gICAgICBoaCA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAoIGhoID09PSAyNCkge1xyXG4gICAgICBoaCA9IDEyO1xyXG4gICAgfVxyXG4gICAgaGggPSBoaCA8IDEwID8gJzAnICsgaGggOiAnJyArIGhoIGFzIGFueTtcclxuICAgIGNvbnN0IG1tID0gbWludXRlIDwgMTAgPyAnMCcgKyBtaW51dGUgOiBtaW51dGU7XHJcbiAgICByZXR1cm4gYCR7aGh9OiR7bW19YDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlcnRzIDAwOjAwIGZvcm1hdCB0byBJVGltZSBvYmplY3RcclxuICAgKi9cclxuICBwdWJsaWMgU3RyaW5nVG9UaW1lICh0aW1lOiBzdHJpbmcpOiBJVGltZSB7XHJcbiAgICBjb25zdCBbaCwgbV0gPSB0aW1lLnNwbGl0KCc6Jyk7XHJcbiAgICBsZXQgaG91ciA9ICtoID4gMTIgPyAraCAtIDEyIDogK2g7XHJcbiAgICBob3VyID0gaG91ciA9PT0gMCA/IDEyIDogaG91cjtcclxuICAgIGNvbnN0IGFtcG0gPSAraCA+PSAxMiA/ICdQTScgOiAnQU0nO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYW1wbSwgbWludXRlOiArbSwgaG91clxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBleHBlcmltZW50YWxcclxuICAgKi9cclxuICBwdWJsaWMgQ2FsY0RlZ3JlZXMgKGVsZTogYW55LCBwYXJyZW50UG9zOiBhbnksIHN0ZXA6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBjbG9jayA9IHtcclxuICAgICAgd2lkdGg6IGVsZS5jdXJyZW50VGFyZ2V0Lm9mZnNldFdpZHRoLFxyXG4gICAgICBoZWlnaHQ6IGVsZS5jdXJyZW50VGFyZ2V0Lm9mZnNldEhlaWdodFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHRhcmdldFggPSBjbG9jay53aWR0aCAvIDI7XHJcbiAgICBjb25zdCB0YXJnZXRZID0gY2xvY2suaGVpZ2h0IC8gMjtcclxuICAgIGNvbnN0IFZ4ID0gTWF0aC5yb3VuZCgoZWxlLmNsaWVudFggLSBwYXJyZW50UG9zLmxlZnQpIC0gdGFyZ2V0WCk7XHJcbiAgICBjb25zdCBWeSA9IE1hdGgucm91bmQodGFyZ2V0WSAtIChlbGUuY2xpZW50WSAtIHBhcnJlbnRQb3MudG9wKSk7XHJcbiAgICBsZXQgcmFkaWFucyA9IC1NYXRoLmF0YW4yKFZ5LCBWeCk7XHJcbiAgICByYWRpYW5zICs9IDIuNSAqIE1hdGguUEk7XHJcblxyXG4gICAgbGV0IGRlZ3JlZXMgPSBNYXRoLnJvdW5kKHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJKTtcclxuICAgIGNvbnN0IGRlZ01vZCA9IGRlZ3JlZXMgJSBzdGVwO1xyXG4gICAgaWYgKGRlZ01vZCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gZGVncmVlcztcclxuICAgIH0gZWxzZSBpZiAoZGVnTW9kID49IHN0ZXAgLyAyKSB7XHJcbiAgICAgIGRlZ3JlZXMgPSBkZWdyZWVzICsgKHN0ZXAgLSBkZWdNb2QpO1xyXG4gICAgfSBlbHNlIGlmIChkZWdNb2QgPCBzdGVwIC8gMikge1xyXG4gICAgICBkZWdyZWVzID0gZGVncmVlcyAtIGRlZ01vZDtcclxuICAgIH1cclxuICAgIHJldHVybiBkZWdyZWVzO1xyXG4gIH1cclxufVxyXG4iXX0=