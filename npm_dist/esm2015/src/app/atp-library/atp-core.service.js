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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRwLWNvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FtYXppbmctdGltZS1waWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL2F0cC1saWJyYXJ5L2F0cC1jb3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsTUFBTSxPQUFPLGNBQWM7SUFFekIsZ0JBQWdCLENBQUM7Ozs7OztJQUVWLFlBQVksQ0FBRSxHQUFHLEVBQUUsR0FBRzs7Y0FDckIsUUFBUSxHQUFHLEVBQUU7O2NBQ2IsVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O2NBQy9CLFVBQVUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOztjQUMvQixTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Y0FDOUIsU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsS0FBSyxJQUFJLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRTs7Z0JBQ3pDLENBQUMsR0FBRyxDQUFDOztnQkFDTCxLQUFLLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLFVBQVUsRUFBRTtnQkFDcEIsQ0FBQyxHQUFHLFNBQVMsQ0FBQzthQUNmO2lCQUFLLElBQUksQ0FBQyxLQUFLLFVBQVUsRUFBRTtnQkFDMUIsS0FBSyxHQUFHLFNBQVMsQ0FBQzthQUNuQjtZQUNELEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O3NCQUNqQixJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FB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QUksQ0FBQyxFQUFFLENBQUM7O1lBRXJCLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQzs7Y0FDM0MsTUFBTSxHQUFHLE9BQU8sR0FBRyxJQUFJO1FBQzdCLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNoQixPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNLElBQUksTUFBTSxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDN0IsT0FBTyxHQUFHLE9BQU8sR0FBRyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQztTQUNyQzthQUFNLElBQUksTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDNUIsT0FBTyxHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUM7U0FDNUI7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7WUExR0YsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVRpbWUgfSBmcm9tICcuL2RlZmluaXRpb25zJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF0cENvcmVTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgcHVibGljIGFsbG93ZWRUaW1lcyAobWluLCBtYXgpIHtcclxuICAgIGNvbnN0IGFsbFRpbWVzID0gW107XHJcbiAgICBjb25zdCBub3dNaW5Ib3VyID0gK21pbi5zcGxpdCgnOicpWzBdO1xyXG4gICAgY29uc3Qgbm93TWF4SG91ciA9ICttYXguc3BsaXQoJzonKVswXTtcclxuICAgIGNvbnN0IG5vd01pbk1pbiA9ICttaW4uc3BsaXQoJzonKVsxXTtcclxuICAgIGNvbnN0IG5vd01heE1pbiA9ICttYXguc3BsaXQoJzonKVsxXTtcclxuICAgIGZvciAobGV0IGkgPSBub3dNaW5Ib3VyOyBpIDw9IG5vd01heEhvdXI7IGkrKykge1xyXG4gICAgICBsZXQgaiA9IDAsXHJcbiAgICAgICAgICBqRGVzdCA9IDU5O1xyXG4gICAgICBpZiAoaSA9PT0gbm93TWluSG91cikge1xyXG4gICAgICAgIGogPSBub3dNaW5NaW47XHJcbiAgICAgIH1lbHNlIGlmIChpID09PSBub3dNYXhIb3VyKSB7XHJcbiAgICAgICAgakRlc3QgPSBub3dNYXhNaW47XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChqOyBqIDw9IGpEZXN0OyBqKyspIHtcclxuICAgICAgICBjb25zdCBob3VyID0gaSA8PSAxMiA/IGkgOiBpIC0gMTI7XHJcbiAgICAgICAgY29uc3QgbWludXRlID0gajtcclxuICAgICAgICBjb25zdCBhbXBtID0gaSA8IDEyID8gJ0FNJyA6ICdQTSc7XHJcbiAgICAgICAgYWxsVGltZXMucHVzaChob3VyICsgJzonICsgbWludXRlICsgJyAnICsgYW1wbSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhbGxUaW1lcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBDbG9ja01ha2VyICh0eXBlOiAnbWludXRlJyB8ICdob3VyJyk6IEFycmF5PGFueT4ge1xyXG4gICAgY29uc3QgaXRlbXMgPSBbXTtcclxuICAgIGNvbnN0IHRpbWVWYWwgPSAodHlwZSA9PT0gJ21pbnV0ZScpID8gNjAgOiAxMjtcclxuICAgIGNvbnN0IHRpbWVTdGVwID0gKHR5cGUgPT09ICdtaW51dGUnKSA/IDUgOiAxO1xyXG4gICAgY29uc3QgdGltZVN0YXJ0ID0gKHR5cGUgPT09ICdtaW51dGUnKSA/IDAgOiAxO1xyXG4gICAgY29uc3QgciA9IDEyNDtcclxuICAgIGNvbnN0IGogPSByIC0gMjU7XHJcblxyXG4gICAgZm9yIChsZXQgbWluID0gdGltZVN0YXJ0OyBtaW4gPD0gdGltZVZhbDsgbWluICs9IHRpbWVTdGVwKSB7XHJcbiAgICAgIGlmIChtaW4gIT09IDYwKSB7XHJcbiAgICAgICAgY29uc3Qgc3RyID0gU3RyaW5nKG1pbik7XHJcbiAgICAgICAgY29uc3QgeCA9IGogKiBNYXRoLnNpbihNYXRoLlBJICogMiAqIChtaW4gLyB0aW1lVmFsKSk7XHJcbiAgICAgICAgY29uc3QgeSA9IGogKiBNYXRoLmNvcyhNYXRoLlBJICogMiAqIChtaW4gLyB0aW1lVmFsKSk7XHJcblxyXG4gICAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgdGltZTogc3RyLFxyXG4gICAgICAgICAgbGVmdDogKHggKyByIC0gMTcpICsgJ3B4JyxcclxuICAgICAgICAgIHRvcDogKC15ICsgciAtIDE3KSArICdweCcsXHJcbiAgICAgICAgICB0eXBlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBpdGVtcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBUaW1lVG9TdHJpbmcodGltZTogSVRpbWUpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgeyBhbXBtLCBtaW51dGUsIGhvdXIgfSA9IHRpbWU7XHJcbiAgICBsZXQgaGggPSBhbXBtID09PSAnUE0nID8gK2hvdXIgKyAxMiA6ICtob3VyO1xyXG4gICAgaWYgKGFtcG0gPT09ICdBTScgJiYgaGggPT09IDEyKSB7XHJcbiAgICAgIGhoID0gMDtcclxuICAgIH1cclxuICAgIGlmICggaGggPT09IDI0KSB7XHJcbiAgICAgIGhoID0gMTI7XHJcbiAgICB9XHJcbiAgICBoaCA9IGhoIDwgMTAgPyAnMCcgKyBoaCA6ICcnICsgaGggYXMgYW55O1xyXG4gICAgY29uc3QgbW0gPSBtaW51dGUgPCAxMCA/ICcwJyArIG1pbnV0ZSA6IG1pbnV0ZTtcclxuICAgIHJldHVybiBgJHtoaH06JHttbX1gO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVydHMgMDA6MDAgZm9ybWF0IHRvIElUaW1lIG9iamVjdFxyXG4gICAqL1xyXG4gIHB1YmxpYyBTdHJpbmdUb1RpbWUgKHRpbWU6IHN0cmluZyk6IElUaW1lIHtcclxuICAgIGNvbnN0IFtoLCBtXSA9IHRpbWUuc3BsaXQoJzonKTtcclxuICAgIGxldCBob3VyID0gK2ggPiAxMiA/ICtoIC0gMTIgOiAraDtcclxuICAgIGhvdXIgPSBob3VyID09PSAwID8gMTIgOiBob3VyO1xyXG4gICAgY29uc3QgYW1wbSA9ICtoID49IDEyID8gJ1BNJyA6ICdBTSc7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhbXBtLCBtaW51dGU6ICttLCBob3VyXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGV4cGVyaW1lbnRhbFxyXG4gICAqL1xyXG4gIHB1YmxpYyBDYWxjRGVncmVlcyAoZWxlOiBhbnksIHBhcnJlbnRQb3M6IGFueSwgc3RlcDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGNsb2NrID0ge1xyXG4gICAgICB3aWR0aDogZWxlLmN1cnJlbnRUYXJnZXQub2Zmc2V0V2lkdGgsXHJcbiAgICAgIGhlaWdodDogZWxlLmN1cnJlbnRUYXJnZXQub2Zmc2V0SGVpZ2h0XHJcbiAgICB9O1xyXG4gICAgY29uc3QgdGFyZ2V0WCA9IGNsb2NrLndpZHRoIC8gMjtcclxuICAgIGNvbnN0IHRhcmdldFkgPSBjbG9jay5oZWlnaHQgLyAyO1xyXG4gICAgY29uc3QgVnggPSBNYXRoLnJvdW5kKChlbGUuY2xpZW50WCAtIHBhcnJlbnRQb3MubGVmdCkgLSB0YXJnZXRYKTtcclxuICAgIGNvbnN0IFZ5ID0gTWF0aC5yb3VuZCh0YXJnZXRZIC0gKGVsZS5jbGllbnRZIC0gcGFycmVudFBvcy50b3ApKTtcclxuICAgIGxldCByYWRpYW5zID0gLU1hdGguYXRhbjIoVnksIFZ4KTtcclxuICAgIHJhZGlhbnMgKz0gMi41ICogTWF0aC5QSTtcclxuXHJcbiAgICBsZXQgZGVncmVlcyA9IE1hdGgucm91bmQocmFkaWFucyAqIDE4MCAvIE1hdGguUEkpO1xyXG4gICAgY29uc3QgZGVnTW9kID0gZGVncmVlcyAlIHN0ZXA7XHJcbiAgICBpZiAoZGVnTW9kID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBkZWdyZWVzO1xyXG4gICAgfSBlbHNlIGlmIChkZWdNb2QgPj0gc3RlcCAvIDIpIHtcclxuICAgICAgZGVncmVlcyA9IGRlZ3JlZXMgKyAoc3RlcCAtIGRlZ01vZCk7XHJcbiAgICB9IGVsc2UgaWYgKGRlZ01vZCA8IHN0ZXAgLyAyKSB7XHJcbiAgICAgIGRlZ3JlZXMgPSBkZWdyZWVzIC0gZGVnTW9kO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRlZ3JlZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==