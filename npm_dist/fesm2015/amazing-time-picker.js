import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { Injectable, Component, ViewChild, ViewContainerRef, Output, ComponentFactoryResolver, ApplicationRef, EventEmitter, Injector, Directive, HostListener, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AtpCoreService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TimePickerComponent {
    /**
     * @param {?} core
     */
    constructor(core) {
        this.core = core;
        this.subject = null;
        this.activeModal = false;
        this.clockType = 'hour';
        this.time = {
            ampm: 'AM',
            minute: 0,
            hour: 12
        };
        this.nowTime = this.time.hour;
        this.isPopup = true;
        this.animationTime = 0;
        this.clockMaker = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const type = this.clockType;
            this.clockObject = this.core.ClockMaker(type);
            this.setArrow(null);
        });
        this.setActiveTime = (/**
         * @return {?}
         */
        () => {
            this.nowTime = (this.clockType === 'minute' ? this.time.minute : this.time.hour);
        });
        this.setArrow = (/**
         * @param {?} obj
         * @return {?}
         */
        (obj) => {
            if (obj) {
                this.clockType = obj.type;
                if (this.clockType === 'minute') {
                    this.time.minute = obj.time;
                }
                else {
                    this.time.hour = obj.time;
                }
            }
            /** @type {?} */
            const step = (this.clockType === 'minute') ? 6 : 30;
            /** @type {?} */
            const time = (this.clockType === 'minute') ? this.time.minute : this.time.hour;
            /** @type {?} */
            const degrees = time * step;
            this.rotationClass(degrees);
            this.setActiveTime();
        });
        this.rotationClass = (/**
         * @param {?} degrees
         * @return {?}
         */
        (degrees) => {
            this.degree = degrees;
        });
        this.getDegree = (/**
         * @param {?} ele
         * @return {?}
         */
        (ele) => {
            /** @type {?} */
            const step = this.clockType === 'minute' ? 6 : 30;
            /** @type {?} */
            const parrentPos = ele.currentTarget.getBoundingClientRect();
            if (this.isClicked && (ele.currentTarget === ele.target || ele.target.nodeName === 'BUTTON')) {
                /** @type {?} */
                const clock = {
                    width: ele.currentTarget.offsetWidth,
                    height: ele.currentTarget.offsetHeight
                };
                /** @type {?} */
                const degrees = this.core.CalcDegrees(ele, parrentPos, step);
                /** @type {?} */
                let hour = this.time.hour;
                /** @type {?} */
                let minute = this.time.minute;
                if (this.clockType === 'hour') {
                    hour = (degrees / step);
                    hour = (hour > 12) ? hour - 12 : hour;
                }
                else if (this.clockType === 'minute') {
                    minute = (degrees / step);
                    minute = (minute > 59) ? minute - 60 : minute;
                }
                /** @type {?} */
                const min = this.config.rangeTime.start;
                /** @type {?} */
                const max = this.config.rangeTime.end;
                /** @type {?} */
                const nowMinHour = +min.split(':')[0] < 12 ? +min.split(':')[0] : +min.split(':')[0] - 12;
                /** @type {?} */
                const nowMaxHour = +max.split(':')[0] < 12 ? +max.split(':')[0] : +max.split(':')[0] - 12;
                /** @type {?} */
                const nowMinMin = +min.split(':')[1];
                /** @type {?} */
                const nowMaxMin = +max.split(':')[1];
                /** @type {?} */
                const nowTime = this.GetNowTime(hour, this.time.ampm, minute);
                if (this.allowed.indexOf(nowTime) > -1) {
                    this.time.hour = hour;
                    this.time.minute = minute;
                    this.rotationClass(degrees);
                    this.setActiveTime();
                }
                else if (this.clockType === 'hour' && (hour === nowMinHour && minute <= nowMinMin)) {
                    this.time.hour = nowMinHour;
                    this.time.minute = nowMinMin;
                }
                else if (this.clockType === 'hour' && (hour === nowMaxHour && minute >= nowMaxMin)) {
                    this.time.hour = nowMaxHour;
                    this.time.minute = nowMaxMin;
                }
            }
        });
    }
    /**
     * @param {?} time
     * @return {?}
     */
    ParseStringToTime(time) {
        time = (time === '' || time === undefined || time === null) ? this.time.hour + ':' + this.time.minute : time;
        this.time = this.core.StringToTime(time);
    }
    /**
     * @return {?}
     */
    GetTime() {
        /** @type {?} */
        const time = this.core.TimeToString(this.time);
        this.subject.next(time);
    }
    /**
     * @return {?}
     */
    setTime() {
        this.isClicked = false;
        if (this.config.changeToMinutes && !this.config.onlyHour && this.clockType === 'hour') {
            this.ChangeAnimational('minute');
        }
    }
    /**
     * @private
     * @param {?} hour
     * @param {?} ampm
     * @param {?} minute
     * @return {?}
     */
    GetNowTime(hour, ampm, minute) {
        /** @type {?} */
        const Hour = (hour === 12 && ampm === 'AM') ? '0' : hour;
        /** @type {?} */
        const nowTime = Hour + ':' + minute + ' ' + ampm;
        return nowTime;
    }
    /**
     * @return {?}
     */
    checkBet() {
        /** @type {?} */
        const nowTime = this.GetNowTime(this.time.hour, this.time.ampm, this.time.minute);
        if (this.allowed.indexOf(nowTime) === -1) {
            this.ParseStringToTime(this.config.rangeTime.start);
            this.setArrow(null);
            this.setActiveTime();
        }
    }
    /**
     * Check if clock button time is not in allowed times and disabled
     * @param {?} t Button Time Value
     * @return {?}
     */
    checkDisabled(t) {
        /** @type {?} */
        const m = (this.clockType === 'minute') ? t : this.time.minute;
        /** @type {?} */
        const h = (this.clockType === 'hour') ? t : this.time.hour;
        /** @type {?} */
        const nowTime = this.GetNowTime(h, this.time.ampm, m);
        return (this.allowed.indexOf(nowTime) === -1) ? true : false;
    }
    /**
     * @return {?}
     */
    modalAnimation() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.activeModal = true;
        }), 1);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.allowed = this.core.allowedTimes(this.config.rangeTime.start, this.config.rangeTime.end);
        if (this.config && this.config.onlyMinute) {
            this.clockType = 'minute';
        }
        if (this.config) {
            if (this.config.onlyPM) {
                this.time.ampm = 'PM';
            }
            else if (this.config.onlyAM) {
                this.time.ampm = 'AM';
            }
        }
        this.clockMaker();
        this.modalAnimation();
    }
    /**
     * @return {?}
     */
    MinuteClick() {
        /**
         * We are not permitting user to select the minute.
         * but anyway, it will return the standard time, if provided the default time.
         */
        if (this.config && this.config.onlyHour) {
            return false;
        }
        this.ChangeAnimational('minute');
    }
    /**
     * @return {?}
     */
    HourClick() {
        /**
         * We are not permitting user to select the minute.
         * but anyway, it will return the standard time, if provided the default time.
         */
        if (this.config && this.config.onlyMinute) {
            return false;
        }
        this.ChangeAnimational('hour');
    }
    /**
     * @param {?} type
     * @return {?}
     */
    ChangeAnimational(type) {
        if (this.clockType !== type) {
            if (this.config.animation === 'fade') {
                this.changeToMin = true;
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.changeToMin = false;
                    this.clockType = type;
                    this.clockMaker();
                }), 200);
            }
            else if (this.config.animation === 'rotate') {
                this.animationTime = 0.4;
                this.clockType = type;
                this.clockMaker();
            }
            else {
                this.clockType = type;
                this.clockMaker();
            }
        }
    }
    /**
     * @return {?}
     */
    SetAM() {
        if (this.config && this.config.onlyPM) {
            return false;
        }
        this.time.ampm = 'AM';
        this.checkBet();
    }
    /**
     * @return {?}
     */
    SetPM() {
        if (this.config && this.config.onlyAM) {
            return false;
        }
        this.time.ampm = 'PM';
        this.checkBet();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    Close(e) {
        if (e.target === e.currentTarget) {
            if (this.isPopup === true) {
                this.activeModal = false;
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.appRef.detachView(this._ref.hostView);
                    this._ref.destroy();
                }), 400);
            }
        }
    }
    /**
     * @return {?}
     */
    getClockArrowStyle() {
        /** @type {?} */
        let arrowStyle = {};
        if (this.config.animation === 'rotate') {
            arrowStyle = {
                transform: 'rotate(' + this.degree + 'deg)',
                '-webkit-transform': 'rotate(' + this.degree + 'deg)',
                background: this.config.arrowStyle.background,
                '-webkit-transition': 'transform ' + this.getAnimationTime(),
                transition: 'transform ' + +this.getAnimationTime()
            };
        }
        else {
            arrowStyle = {
                transform: 'rotate(' + this.degree + 'deg)',
                '-webkit-transform': 'rotate(' + this.degree + 'deg)',
                background: this.config.arrowStyle.background,
            };
        }
        return arrowStyle;
    }
    /**
     * @return {?}
     */
    getAnimationTime() {
        return this.animationTime + 's';
    }
    /**
     * Event on clock mouse click down
     * @param {?} event - captured event
     * @return {?}
     */
    updateClockDown(event) {
        this.isClicked = true;
        this.animationTime = 0;
        this.getDegree(event);
    }
    /**
     * @return {?}
     */
    setNewRotation() {
        /** @type {?} */
        const targetDegree = ((this.time.minute / 60) * 360) + 360;
        /** @type {?} */
        const targetDegree2 = targetDegree * 2;
        /** @type {?} */
        const diff1 = Math.abs(this.degree - targetDegree);
        /** @type {?} */
        const diff2 = Math.abs(this.degree - targetDegree2);
        if (diff1 < diff2) {
            this.rotationClass(targetDegree);
        }
        else {
            this.rotationClass(targetDegree2);
        }
    }
    /**
     * @return {?}
     */
    GetSeparator() {
        if (this.preference && this.preference.separator) {
            return this.preference.separator;
        }
        return ':';
    }
    /**
     * @param {?} period
     * @return {?}
     */
    GetPeriod(period) {
        if (this.preference && this.preference.period) {
            return this.preference.period(period);
        }
        return period;
    }
    /**
     * @return {?}
     */
    GetMinute() {
        if (this.preference && this.preference.minute) {
            return this.preference.minute(this.time.minute);
        }
        /** @type {?} */
        let min = this.time.minute.toString();
        if (+min < 10) {
            min = '0' + min;
        }
        return min;
    }
    /**
     * @return {?}
     */
    GetHour() {
        if (this.preference && this.preference.hour) {
            return this.preference.hour(this.time.hour);
        }
        return this.time.hour;
    }
    /**
     * @param {?} clock
     * @return {?}
     */
    GetClockTime(clock) {
        if (!this.preference) {
            return clock.time;
        }
        if (this.clockType === 'hour' && this.preference.clockHour) {
            return this.preference.clockHour(clock.time);
        }
        if (this.clockType === 'minute' && this.preference.clockMinute) {
            return this.preference.clockMinute(clock.time);
        }
        return clock.time;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    GetLabel(key) {
        /** @type {?} */
        const defaults = {
            'ok': 'Ok',
            'cancel': 'Cancel'
        };
        if ((this.preference && this.preference.labels && this.preference.labels.ok)) {
            defaults.ok = this.preference.labels.ok;
        }
        if ((this.preference && this.preference.labels && this.preference.labels.cancel)) {
            defaults.cancel = this.preference.labels.cancel;
        }
        return defaults[key];
    }
}
TimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'time-picker',
                template: "<div id=\"time-picker-wrapper\" class=\"{{config.theme}}\" [ngClass]=\"{'active': activeModal, 'static': !isPopup}\" (click)=\"Close($event);\">\r\n  <div id=\"time-picker\" [ngClass]=\"{'active': activeModal, 'static': !isPopup}\">\r\n    <div class=\"time-picker-header\">\r\n      <div class=\"time-picker-selected-time\">\r\n          <div class=\"time-picker-hour\" (click)=\"HourClick()\" [attr.disabled]=\"(config.onlyMinute) ? 'disabled' : null\"\r\n            [ngClass]=\"{'selected' : clockType == 'hour'}\">{{GetHour()}}</div>\r\n          <span class=\"time-seprator\">{{GetSeparator()}}</span>\r\n          <div class=\"time-picker-minute\" (click)=\"MinuteClick();\" [attr.disabled]=\"(config.onlyHour) ? 'disabled' : null\"\r\n            [ngClass]=\"{'selected' : clockType == 'minute'}\">{{GetMinute()}}</div>\r\n      </div>\r\n      <div class=\"time-picker-selected-ampm\">\r\n        <div class=\"time-picker-am\" (click)=\"SetAM();\" [attr.disabled]=\"(config.onlyPM) ? 'disabled' : null\" [ngClass]=\"{'selected' : time.ampm == 'AM'}\">{{GetPeriod('AM')}}</div>\r\n        <div class=\"time-picker-pm\" (click)=\"SetPM();\" [attr.disabled]=\"(config.onlyAM) ? 'disabled' : null\" [ngClass]=\"{'selected' : time.ampm == 'PM'}\">{{GetPeriod('PM')}}</div>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"time-picker-content\">\r\n        <div class=\"time-picker-clock\" [ngClass]=\"{'hide-time-picker-clock': changeToMin}\"  (mousemove)=\"getDegree($event);\" (mousedown)=\"updateClockDown($event)\" (mouseup)=\"setTime();\">\r\n          <button *ngFor=\"let clock of clockObject\" [ngClass]=\"{'active' : nowTime == clock.time}\" \r\n            [id]=\"'timepicker-item-id-' + clock.time\" \r\n            [disabled]=\"checkDisabled(clock.time)\" \r\n            [ngStyle]=\"{top: clock.top,left: clock.left, color: nowTime == clock.time ? config.arrowStyle.color :  '', background: nowTime == clock.time ? config.arrowStyle.background : 'transparent'}\">\r\n            {{GetClockTime(clock)}}\r\n          </button>\r\n          <div class=\"time-picker-clock-origin\" [ngStyle]=\"{ background: config.arrowStyle.background}\"></div>\r\n          <div id=\"tpc-arrow\" class=\"time-picker-clock-arrow\" [ngStyle]=\"getClockArrowStyle()\">\r\n            <span [ngStyle]=\"{ background: config.arrowStyle.background }\"></span>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"time-picker-footer\">\r\n        <button (click)=\"Close($event);\">{{GetLabel('cancel')}}</button>\r\n        <button (click)=\"GetTime();Close($event);\" class=\"atp-ref-dialog-close\">{{GetLabel('ok')}}</button>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: ["#time-picker-wrapper{position:fixed;top:0;bottom:0;left:0;right:0;background:0 0;transition:background .4s;font-family:Roboto,sans-serif;z-index:1000}#time-picker-wrapper.static{position:relative!important;background:0 0!important;display:inline-block;z-index:0}#time-picker-wrapper.active{background:rgba(0,0,0,.3)}#time-picker-wrapper.dark #time-picker{background:#424242}#time-picker-wrapper.dark #time-picker .time-picker-header{border-bottom:none;background:#555}#time-picker-wrapper.dark #time-picker .time-picker-header .time-picker-selected-time{color:#999}#time-picker-wrapper.dark #time-picker .time-picker-header .time-picker-selected-time div.selected{color:#fff}#time-picker-wrapper.dark #time-picker .time-picker-header .time-picker-selected-ampm{color:#999}#time-picker-wrapper.dark #time-picker .time-picker-header .time-picker-selected-ampm div.selected{color:#fff}#time-picker-wrapper.dark #time-picker .time-picker-clock{background:#555}#time-picker-wrapper.dark #time-picker .time-picker-clock>button{color:#fff}#time-picker-wrapper.dark #time-picker .time-picker-footer{border-top:none}#time-picker-wrapper.dark #time-picker .time-picker-footer button{background:#555;color:#fff}#time-picker-wrapper.dark #time-picker .time-picker-footer button:hover{background:#777}#time-picker-wrapper.light #time-picker{background:#fff}#time-picker-wrapper.light #time-picker .time-picker-header{border-bottom:1px solid #e1e1e1}#time-picker-wrapper.light #time-picker .time-picker-header .time-picker-selected-time{color:#aaa}#time-picker-wrapper.light #time-picker .time-picker-header .time-picker-selected-time div.selected{color:#000}#time-picker-wrapper.light #time-picker .time-picker-header .time-picker-selected-ampm{color:#aaa}#time-picker-wrapper.light #time-picker .time-picker-header .time-picker-selected-ampm div.selected{color:#000}#time-picker-wrapper.light #time-picker .time-picker-clock{background:#ededed}#time-picker-wrapper.light #time-picker .time-picker-clock>button{color:#000}#time-picker-wrapper.light #time-picker .time-picker-clock>button.active{background:#00f;color:#fff}#time-picker-wrapper.light #time-picker .time-picker-clock .time-picker-clock-arrow,#time-picker-wrapper.light #time-picker .time-picker-clock .time-picker-clock-arrow span,#time-picker-wrapper.light #time-picker .time-picker-clock .time-picker-clock-origin{background:#00f}#time-picker-wrapper.light #time-picker .time-picker-footer{border-top:1px solid #e1e1e1}#time-picker-wrapper.light #time-picker .time-picker-footer button{background:#f1f1f1}#time-picker-wrapper.light #time-picker .time-picker-footer button:hover{background:#ddd}#time-picker-wrapper.material-green #time-picker{background:#fff}#time-picker-wrapper.material-green #time-picker .time-picker-header{background-color:#00897b;border-bottom:1px solid #e1e1e1}#time-picker-wrapper.material-green #time-picker .time-picker-header .time-picker-selected-time{color:rgba(255,255,255,.4)}#time-picker-wrapper.material-green #time-picker .time-picker-header .time-picker-selected-time div.selected{color:#fff}#time-picker-wrapper.material-green #time-picker .time-picker-header .time-picker-selected-ampm{color:rgba(255,255,255,.4)}#time-picker-wrapper.material-green #time-picker .time-picker-header .time-picker-selected-ampm div.selected{color:#fff}#time-picker-wrapper.material-green #time-picker .time-picker-clock{background:#ededed}#time-picker-wrapper.material-green #time-picker .time-picker-clock>button{color:#000}#time-picker-wrapper.material-green #time-picker .time-picker-clock>button.active{background:#00897b;color:#fff}#time-picker-wrapper.material-green #time-picker .time-picker-clock .time-picker-clock-arrow,#time-picker-wrapper.material-green #time-picker .time-picker-clock .time-picker-clock-arrow span,#time-picker-wrapper.material-green #time-picker .time-picker-clock .time-picker-clock-origin{background:#00897b}#time-picker-wrapper.material-green #time-picker .time-picker-footer{border-top:1px solid #e1e1e1}#time-picker-wrapper.material-green #time-picker .time-picker-footer button{font-weight:700;text-transform:uppercase;background:0 0;color:#00897b}#time-picker-wrapper.material-green #time-picker .time-picker-footer button:hover{background:#ddd}#time-picker-wrapper.material-blue #time-picker{background:#fff}#time-picker-wrapper.material-blue #time-picker .time-picker-header{background-color:#3f51b5;border-bottom:1px solid #e1e1e1}#time-picker-wrapper.material-blue #time-picker .time-picker-header .time-picker-selected-time{color:rgba(255,255,255,.4)}#time-picker-wrapper.material-blue #time-picker .time-picker-header .time-picker-selected-time div.selected{color:#fff}#time-picker-wrapper.material-blue #time-picker .time-picker-header .time-picker-selected-ampm{color:rgba(255,255,255,.4)}#time-picker-wrapper.material-blue #time-picker .time-picker-header .time-picker-selected-ampm div.selected{color:#fff}#time-picker-wrapper.material-blue #time-picker .time-picker-clock{background:#ededed}#time-picker-wrapper.material-blue #time-picker .time-picker-clock>button{color:#000}#time-picker-wrapper.material-blue #time-picker .time-picker-clock>button.active{background:#3f51b5;color:#fff}#time-picker-wrapper.material-blue #time-picker .time-picker-clock .time-picker-clock-arrow,#time-picker-wrapper.material-blue #time-picker .time-picker-clock .time-picker-clock-arrow span,#time-picker-wrapper.material-blue #time-picker .time-picker-clock .time-picker-clock-origin{background:#3f51b5}#time-picker-wrapper.material-blue #time-picker .time-picker-footer{border-top:1px solid #e1e1e1}#time-picker-wrapper.material-blue #time-picker .time-picker-footer button{font-weight:700;text-transform:uppercase;background:0 0;color:#3f51b5}#time-picker-wrapper.material-blue #time-picker .time-picker-footer button:hover{background:#ddd}#time-picker-wrapper.material-red #time-picker{background:#fff}#time-picker-wrapper.material-red #time-picker .time-picker-header{background-color:#f44336;border-bottom:1px solid #e1e1e1}#time-picker-wrapper.material-red #time-picker .time-picker-header .time-picker-selected-time{color:rgba(255,255,255,.4)}#time-picker-wrapper.material-red #time-picker .time-picker-header .time-picker-selected-time div.selected{color:#fff}#time-picker-wrapper.material-red #time-picker .time-picker-header .time-picker-selected-ampm{color:rgba(255,255,255,.4)}#time-picker-wrapper.material-red #time-picker .time-picker-header .time-picker-selected-ampm div.selected{color:#fff}#time-picker-wrapper.material-red #time-picker .time-picker-clock{background:#ededed}#time-picker-wrapper.material-red #time-picker .time-picker-clock>button{color:#000}#time-picker-wrapper.material-red #time-picker .time-picker-clock>button.active{background:#f44336;color:#fff}#time-picker-wrapper.material-red #time-picker .time-picker-clock .time-picker-clock-arrow,#time-picker-wrapper.material-red #time-picker .time-picker-clock .time-picker-clock-arrow span,#time-picker-wrapper.material-red #time-picker .time-picker-clock .time-picker-clock-origin{background:#f44336}#time-picker-wrapper.material-red #time-picker .time-picker-footer{border-top:1px solid #e1e1e1}#time-picker-wrapper.material-red #time-picker .time-picker-footer button{font-weight:700;text-transform:uppercase;background:0 0;color:#f44336}#time-picker-wrapper.material-red #time-picker .time-picker-footer button:hover{background:#ddd}#time-picker-wrapper.material-purple #time-picker{background:#fff}#time-picker-wrapper.material-purple #time-picker .time-picker-header{background-color:#9c27b0;border-bottom:1px solid #e1e1e1}#time-picker-wrapper.material-purple #time-picker .time-picker-header .time-picker-selected-time{color:rgba(255,255,255,.4)}#time-picker-wrapper.material-purple #time-picker .time-picker-header .time-picker-selected-time div.selected{color:#fff}#time-picker-wrapper.material-purple #time-picker .time-picker-header .time-picker-selected-ampm{color:rgba(255,255,255,.4)}#time-picker-wrapper.material-purple #time-picker .time-picker-header .time-picker-selected-ampm div.selected{color:#fff}#time-picker-wrapper.material-purple #time-picker .time-picker-clock{background:#ededed}#time-picker-wrapper.material-purple #time-picker .time-picker-clock>button{color:#000}#time-picker-wrapper.material-purple #time-picker .time-picker-clock>button.active{background:#9c27b0;color:#fff}#time-picker-wrapper.material-purple #time-picker .time-picker-clock .time-picker-clock-arrow,#time-picker-wrapper.material-purple #time-picker .time-picker-clock .time-picker-clock-arrow span,#time-picker-wrapper.material-purple #time-picker .time-picker-clock .time-picker-clock-origin{background:#9c27b0}#time-picker-wrapper.material-purple #time-picker .time-picker-footer{border-top:1px solid #e1e1e1}#time-picker-wrapper.material-purple #time-picker .time-picker-footer button{font-weight:700;text-transform:uppercase;background:0 0;color:#9c27b0}#time-picker-wrapper.material-purple #time-picker .time-picker-footer button:hover{background:#ddd}#time-picker-wrapper.material-orange #time-picker{background:#fff}#time-picker-wrapper.material-orange #time-picker .time-picker-header{background-color:#ff9800;border-bottom:1px solid #e1e1e1}#time-picker-wrapper.material-orange #time-picker .time-picker-header .time-picker-selected-time{color:rgba(255,255,255,.4)}#time-picker-wrapper.material-orange #time-picker .time-picker-header .time-picker-selected-time div.selected{color:#fff}#time-picker-wrapper.material-orange #time-picker .time-picker-header .time-picker-selected-ampm{color:rgba(255,255,255,.4)}#time-picker-wrapper.material-orange #time-picker .time-picker-header .time-picker-selected-ampm div.selected{color:#fff}#time-picker-wrapper.material-orange #time-picker .time-picker-clock{background:#ededed}#time-picker-wrapper.material-orange #time-picker .time-picker-clock>button{color:#000}#time-picker-wrapper.material-orange #time-picker .time-picker-clock>button.active{background:#ff9800;color:#fff}#time-picker-wrapper.material-orange #time-picker .time-picker-clock .time-picker-clock-arrow,#time-picker-wrapper.material-orange #time-picker .time-picker-clock .time-picker-clock-arrow span,#time-picker-wrapper.material-orange #time-picker .time-picker-clock .time-picker-clock-origin{background:#ff9800}#time-picker-wrapper.material-orange #time-picker .time-picker-footer{border-top:1px solid #e1e1e1}#time-picker-wrapper.material-orange #time-picker .time-picker-footer button{font-weight:700;text-transform:uppercase;background:0 0;color:#ff9800}#time-picker-wrapper.material-orange #time-picker .time-picker-footer button:hover{background:#ddd}#time-picker-wrapper #time-picker{width:325px;height:auto;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);border-radius:2px;margin:15vh auto!important;-webkit-transform:scale(.5)!important;transform:scale(.5)!important;transition:transform .3s,opacity .3s,-webkit-transform .3s;opacity:0}#time-picker-wrapper #time-picker.static{margin:0!important;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 0 7px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}#time-picker-wrapper #time-picker.active{-webkit-transform:scale(1)!important;transform:scale(1)!important;opacity:1}#time-picker-wrapper #time-picker .time-picker-header{text-align:center;padding:15px 0}#time-picker-wrapper #time-picker .time-picker-header .time-picker-selected-time{font-size:35px;padding:5px 0}#time-picker-wrapper #time-picker .time-picker-header .time-picker-selected-time div{display:inline-block;cursor:pointer}#time-picker-wrapper #time-picker .time-picker-header .time-picker-selected-time div[disabled=true]{cursor:default}#time-picker-wrapper #time-picker .time-picker-header .time-picker-selected-ampm{font-size:18px}#time-picker-wrapper #time-picker .time-picker-header .time-picker-selected-ampm div{display:inline-block;padding:0 5px;cursor:pointer}#time-picker-wrapper #time-picker .time-picker-header .time-picker-selected-ampm div[disabled=true]{cursor:default}#time-picker-wrapper #time-picker .time-picker-content .time-picker-clock{width:200px;height:200px;padding:24px;border-radius:50%;cursor:pointer;margin:25px auto;position:relative;user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;opacity:1;-webkit-transform:scale(1);transform:scale(1);transition:opacity .3s,transform .3s,-webkit-transform .3s}#time-picker-wrapper #time-picker .time-picker-content .time-picker-clock button{border:none;position:absolute;width:35px;height:35px;border-radius:50%;cursor:pointer;font-size:17px;text-align:center;padding:0;transition:.2s;z-index:3}#time-picker-wrapper #time-picker .time-picker-content .time-picker-clock .time-picker-clock-origin{width:6px;height:6px;border-radius:50%;position:absolute;left:50%;top:50%;margin-left:-3px;margin-top:-3px}#time-picker-wrapper #time-picker .time-picker-content .time-picker-clock .time-picker-clock-arrow{width:2px;height:41%;position:absolute;left:0;top:22px;right:0;margin:auto;-webkit-transform-origin:top left;transform-origin:bottom}#time-picker-wrapper #time-picker .time-picker-content .time-picker-clock .time-picker-clock-arrow span{width:8px;height:8px;border-radius:50%;position:absolute;top:0;right:-3px}#time-picker-wrapper #time-picker .time-picker-content .time-picker-clock.hide-time-picker-clock{opacity:0;-webkit-transform:scale(.8);transform:scale(.8)}#time-picker-wrapper #time-picker .time-picker-footer{padding:15px;text-align:right}#time-picker-wrapper #time-picker .time-picker-footer button{border:transparent;margin-left:10px;padding:10px;font-size:14px;border-radius:2px;cursor:pointer}*{outline:0;box-sizing:content-box}"]
            }] }
];
/** @nocollapse */
TimePickerComponent.ctorParameters = () => [
    { type: AtpCoreService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AtpTimePickerComponent {
    /**
     * @param {?} resolver
     * @param {?} appRef
     */
    constructor(resolver, appRef) {
        this.resolver = resolver;
        this.appRef = appRef;
        this.timeSelected = new EventEmitter();
        this.config = {};
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let config = this.config;
        config = {
            time: config.time || '00:00',
            theme: ['light', 'dark', 'material'].indexOf(config.theme) > 0 ? config.theme : 'light' || config.theme,
            rangeTime: config.rangeTime || { start: '0:0', end: '24:0' },
            arrowStyle: config.arrowStyle || {}
        };
        config.arrowStyle = {
            background: (config.arrowStyle.background) ?
                config.arrowStyle.background : config.theme !== undefined ?
                config.theme === 'dark' ? 'rgb(128, 203, 196)' : 'blue' : 'blue',
            color: config.arrowStyle.color || '#fff'
        };
        /** @type {?} */
        const cfr = this.resolver.resolveComponentFactory(TimePickerComponent);
        /** @type {?} */
        const tsc = this.container.createComponent(cfr);
        tsc.instance.subject = new Subject();
        tsc.instance._ref = tsc;
        tsc.instance.appRef = this.appRef;
        tsc.instance.timerElement = '';
        tsc.instance.config = config;
        tsc.instance.activeModal = true;
        tsc.instance.isPopup = false;
        tsc.instance.ParseStringToTime(config.time);
        tsc.instance.subject.asObservable().subscribe((/**
         * @param {?} time
         * @return {?}
         */
        time => {
            this.timeSelected.emit(time);
        }));
    }
}
AtpTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'atp-time-picker',
                template: "<div #container></div>",
                styles: [".atp-time-picker .icon-container{display:inline-block;margin-right:.2em}.atp-time-picker .icon-container svg{cursor:pointer;position:relative;top:.5em}.atp-time-picker .icon-container /deep/ i{cursor:pointer}"]
            }] }
];
/** @nocollapse */
AtpTimePickerComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef }
];
AtpTimePickerComponent.propDecorators = {
    container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] }],
    timeSelected: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const arabic = new Intl.NumberFormat('ar-AE');
/** @type {?} */
const persian = new Intl.NumberFormat('fa-IR');
/** @type {?} */
const PersianPreference = {
    hour: (/**
     * @param {?} x
     * @return {?}
     */
    (x) => persian.format(x)),
    minute: (/**
     * @param {?} x
     * @return {?}
     */
    (x) => {
        /** @type {?} */
        let exp = persian.format(x);
        if (exp.length === 1) {
            exp = persian.format(0) + exp;
        }
        return exp;
    }),
    separator: ':',
    period: (/**
     * @param {?} x
     * @return {?}
     */
    (x) => x === 'AM' ? 'صبح' : 'عصر'),
    clockHour: (/**
     * @param {?} x
     * @return {?}
     */
    (x) => persian.format(x)),
    clockMinute: (/**
     * @param {?} x
     * @return {?}
     */
    (x) => persian.format(x)),
    labels: {
        ok: 'تایید',
        cancel: 'لغو'
    }
};
/** @type {?} */
const ArabicPreference = {
    hour: (/**
     * @param {?} x
     * @return {?}
     */
    (x) => arabic.format(x)),
    minute: (/**
     * @param {?} x
     * @return {?}
     */
    (x) => {
        /** @type {?} */
        let exp = arabic.format(x);
        if (exp.length === 1) {
            exp = arabic.format(0) + exp;
        }
        return exp;
    }),
    separator: ':',
    period: (/**
     * @param {?} x
     * @return {?}
     */
    (x) => x === 'AM' ? 'صباحا' : 'مساء'),
    clockHour: (/**
     * @param {?} x
     * @return {?}
     */
    (x) => arabic.format(x)),
    clockMinute: (/**
     * @param {?} x
     * @return {?}
     */
    (x) => arabic.format(x)),
    labels: {
        ok: 'حسنا',
        cancel: 'إلغاء'
    }
};
/** @type {?} */
const ChinesePreference = {
    hour: (/**
     * @param {?} x
     * @return {?}
     */
    (x) => x),
    minute: (/**
     * @param {?} x
     * @return {?}
     */
    (x) => {
        /** @type {?} */
        let exp = x;
        if (exp.length === 1) {
            exp = '۰' + exp;
        }
        return exp;
    }),
    separator: ':',
    period: (/**
     * @param {?} x
     * @return {?}
     */
    (x) => x === 'AM' ? '上午' : '下午'),
    clockHour: (/**
     * @param {?} x
     * @return {?}
     */
    (x) => x),
    clockMinute: (/**
     * @param {?} x
     * @return {?}
     */
    (x) => x),
    labels: {
        ok: '确定',
        cancel: '取消'
    }
};
/** @type {?} */
const Preference = (/**
 * @param {?} locale
 * @return {?}
 */
(locale) => {
    switch (locale) {
        case 'fa':
            return PersianPreference;
        case 'ar':
            return ArabicPreference;
        case 'zh':
            return ChinesePreference;
        default:
            return null;
    }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AmazingTimePickerService {
    /**
     * @param {?} resolver
     * @param {?} appRef
     * @param {?} injector
     */
    constructor(resolver, appRef, injector) {
        this.resolver = resolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    open(config) {
        /** @type {?} */
        const thems = ['light', 'dark', 'material-red', 'material-green', 'material-blue', 'material-purple', 'material-orange'];
        config = config || {};
        config = (/** @type {?} */ ({
            time: config.time || '00:00',
            theme: thems.indexOf(config.theme) > 0 ? config.theme : 'light' || config.theme,
            rangeTime: config.rangeTime || { start: '0:0', end: '24:0' },
            arrowStyle: config.arrowStyle || {},
            locale: config.locale || 'en',
            changeToMinutes: config.changeToMinutes,
            animation: (config.animation == null || config.animation === 'fade') ? 'fade' : (config.animation === 'rotate') ? 'rotate' : false,
            preference: config.preference || null,
            onlyHour: config.onlyHour,
            onlyMinute: config.onlyMinute,
            onlyAM: config.onlyAM,
            onlyPM: config.onlyPM,
        }));
        config.rangeTime = {
            start: config.rangeTime.start || '0:0',
            end: config.rangeTime.end || '24:0',
        };
        config.arrowStyle = {
            background: (config.arrowStyle.background) ?
                config.arrowStyle.background : config.theme !== undefined ?
                config.theme === 'dark' ? 'rgb(128, 203, 196)' : '' : '',
            color: config.arrowStyle.color || ''
        };
        /** @type {?} */
        const componentRef = this.resolver.resolveComponentFactory(TimePickerComponent);
        /** @type {?} */
        const tsc = componentRef.create(this.injector);
        this.appRef.attachView(tsc.hostView);
        /** @type {?} */
        const domElem = (/** @type {?} */ (((/** @type {?} */ (tsc.hostView))).rootNodes[0]));
        document.body.appendChild(domElem);
        tsc.instance.subject = new Subject();
        tsc.instance._ref = tsc;
        tsc.instance.appRef = this.appRef;
        tsc.instance.timerElement = '';
        tsc.instance.config = config;
        if (config.preference) {
            tsc.instance.preference = config.preference;
        }
        else {
            tsc.instance.preference = Preference(config.locale);
        }
        tsc.instance.ParseStringToTime(config.time);
        return {
            afterClose: (/**
             * @return {?}
             */
            function () {
                return tsc.instance.subject.asObservable();
            })
        };
    }
}
AmazingTimePickerService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AmazingTimePickerService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AtpDirective {
    /**
     * @param {?} viewContainerRef
     * @param {?} atp
     */
    constructor(viewContainerRef, atp) {
        this.viewContainerRef = viewContainerRef;
        this.atp = atp;
        this.myClick = new EventEmitter();
        this.onChange = (/**
         * @param {?} x
         * @return {?}
         */
        (x) => { });
        this.elementRef = this.viewContainerRef.element;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        /** @type {?} */
        const ele = this.viewContainerRef.element.nativeElement;
        /** @type {?} */
        const time = ele.value;
        /** @type {?} */
        const theme = ele.getAttribute('theme');
        /** @type {?} */
        const start = ele.getAttribute('start');
        /** @type {?} */
        const end = ele.getAttribute('end');
        /** @type {?} */
        const locale = ele.getAttribute('locale') || 'en';
        /** @type {?} */
        const changeToMinutes = ele.getAttribute('changeToMinutes') === 'true';
        /** @type {?} */
        const animation = ele.getAttribute('animation');
        /** @type {?} */
        const preference = ele.getAttribute('preference') || null;
        /** @type {?} */
        const onlyHour = ele.getAttribute('onlyHour') === 'true';
        /** @type {?} */
        const onlyMinute = ele.getAttribute('onlyMinute') === 'true';
        /** @type {?} */
        const onlyAM = ele.getAttribute('onlyAM') === 'true';
        /** @type {?} */
        const onlyPM = ele.getAttribute('onlyPM') === 'true';
        /** @type {?} */
        let arrowStyle = ele.getAttribute('arrowStyle');
        arrowStyle = (arrowStyle) ? JSON.parse(arrowStyle.replace(new RegExp('\'', 'g'), '"')) : '';
        /** @type {?} */
        const timePickerFunction = this.atp.open({
            time,
            theme,
            rangeTime: { start, end },
            'arrowStyle': arrowStyle,
            locale,
            changeToMinutes,
            animation,
            onlyHour,
            onlyMinute,
            onlyAM,
            onlyPM,
            preference
        });
        timePickerFunction.afterClose().subscribe((/**
         * @param {?} retTime
         * @return {?}
         */
        retTime => {
            this.writeValue(retTime); // update the native element
            this.onChange(retTime); // update the form value (if there's a form)
        }));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onInput(e) {
        this.onChange(e.srcElement.value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (this.elementRef) {
            this.elementRef.nativeElement.value = value;
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { }
}
AtpDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[atp-time-picker]',
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: AtpDirective,
                        multi: true
                    }]
            },] }
];
/** @nocollapse */
AtpDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: AmazingTimePickerService }
];
AtpDirective.propDecorators = {
    myClick: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onInput: [{ type: HostListener, args: ['input', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AmazingTimePickerModule {
}
AmazingTimePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    TimePickerComponent,
                    AtpTimePickerComponent,
                    AtpDirective
                ],
                providers: [
                    AmazingTimePickerService,
                    AtpCoreService
                ],
                entryComponents: [TimePickerComponent],
                exports: [
                    TimePickerComponent,
                    AtpTimePickerComponent,
                    AtpDirective
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AmazingTimePickerModule, AmazingTimePickerService, AtpCoreService as ɵb, AtpTimePickerComponent as ɵc, AtpDirective as ɵd, TimePickerComponent as ɵa };

//# sourceMappingURL=amazing-time-picker.js.map