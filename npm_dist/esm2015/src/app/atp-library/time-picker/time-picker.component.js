/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AtpCoreService } from '../atp-core.service';
export class TimePickerComponent {
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
if (false) {
    /** @type {?} */
    TimePickerComponent.prototype._ref;
    /** @type {?} */
    TimePickerComponent.prototype.subject;
    /** @type {?} */
    TimePickerComponent.prototype.activeModal;
    /** @type {?} */
    TimePickerComponent.prototype.timerElement;
    /** @type {?} */
    TimePickerComponent.prototype.clockObject;
    /** @type {?} */
    TimePickerComponent.prototype.isClicked;
    /** @type {?} */
    TimePickerComponent.prototype.clockType;
    /** @type {?} */
    TimePickerComponent.prototype.time;
    /** @type {?} */
    TimePickerComponent.prototype.nowTime;
    /** @type {?} */
    TimePickerComponent.prototype.degree;
    /** @type {?} */
    TimePickerComponent.prototype.config;
    /** @type {?} */
    TimePickerComponent.prototype.appRef;
    /** @type {?} */
    TimePickerComponent.prototype.isPopup;
    /** @type {?} */
    TimePickerComponent.prototype.allowed;
    /** @type {?} */
    TimePickerComponent.prototype.preference;
    /** @type {?} */
    TimePickerComponent.prototype.changeToMin;
    /**
     * @type {?}
     * @private
     */
    TimePickerComponent.prototype.animationTime;
    /** @type {?} */
    TimePickerComponent.prototype.clockMaker;
    /** @type {?} */
    TimePickerComponent.prototype.setActiveTime;
    /** @type {?} */
    TimePickerComponent.prototype.setArrow;
    /** @type {?} */
    TimePickerComponent.prototype.rotationClass;
    /** @type {?} */
    TimePickerComponent.prototype.getDegree;
    /**
     * @type {?}
     * @private
     */
    TimePickerComponent.prototype.core;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW1hemluZy10aW1lLXBpY2tlci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvYXRwLWxpYnJhcnkvdGltZS1waWNrZXIvdGltZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVFyRCxNQUFNLE9BQU8sbUJBQW1COzs7O0lBeUI5QixZQUNVLElBQW9CO1FBQXBCLFNBQUksR0FBSixJQUFJLENBQWdCO1FBdkJ2QixZQUFPLEdBQVEsSUFBSSxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBSXBCLGNBQVMsR0FBc0IsTUFBTSxDQUFDO1FBQ3RDLFNBQUksR0FBVTtZQUNuQixJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRSxDQUFDO1lBQ1QsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFDO1FBQ0ssWUFBTyxHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBSTlCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFLZCxrQkFBYSxHQUFHLENBQUMsQ0FBQztRQWdCMUIsZUFBVTs7O1FBQUcsR0FBRyxFQUFFOztrQkFDVixJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsRUFBQTtRQUVELGtCQUFhOzs7UUFBRyxHQUFHLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENB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LEVBQUUsQ0FBQyxFQUFFO1lBQzVFLFFBQVEsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDaEYsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDakQ7UUFDRCxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7WUExVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2Qixxb0ZBQTJDOzthQUU1Qzs7OztZQVBRLGNBQWM7Ozs7SUFVckIsbUNBQVU7O0lBQ1Ysc0NBQTJCOztJQUMzQiwwQ0FBMkI7O0lBQzNCLDJDQUF5Qjs7SUFDekIsMENBQStCOztJQUMvQix3Q0FBMEI7O0lBQzFCLHdDQUE2Qzs7SUFDN0MsbUNBSUU7O0lBQ0Ysc0NBQXFDOztJQUNyQyxxQ0FBbUI7O0lBQ25CLHFDQUFnQzs7SUFDaEMscUNBQW1COztJQUNuQixzQ0FBc0I7O0lBQ3RCLHNDQUFvQjs7SUFDcEIseUNBQXNDOztJQUN0QywwQ0FBNEI7Ozs7O0lBRTVCLDRDQUEwQjs7SUFnQjFCLHlDQUlDOztJQUVELDRDQUVDOztJQUVELHVDQWNDOztJQUVELDRDQUVDOztJQVNELHdDQTBDQzs7Ozs7SUE1RkMsbUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUNsb2NrTnVtYmVyLCBJRGlzcGxheVByZWZlcmVuY2UsIFRpbWVQaWNrZXJDb25maWcgfSBmcm9tICcuLi9kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IEF0cENvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vYXRwLWNvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IElUaW1lIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0aW1lLXBpY2tlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90aW1lLXBpY2tlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaW1lUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgX3JlZjogYW55O1xyXG4gIHB1YmxpYyBzdWJqZWN0OiBhbnkgPSBudWxsO1xyXG4gIHB1YmxpYyBhY3RpdmVNb2RhbCA9IGZhbHNlO1xyXG4gIHB1YmxpYyB0aW1lckVsZW1lbnQ6IGFueTtcclxuICBwdWJsaWMgY2xvY2tPYmplY3Q6IEFycmF5PGFueT47XHJcbiAgcHVibGljIGlzQ2xpY2tlZDogYm9vbGVhbjtcclxuICBwdWJsaWMgY2xvY2tUeXBlOiAnbWludXRlJyB8ICdob3VyJyA9ICdob3VyJztcclxuICBwdWJsaWMgdGltZTogSVRpbWUgPSB7XHJcbiAgICBhbXBtOiAnQU0nLFxyXG4gICAgbWludXRlOiAwLFxyXG4gICAgaG91cjogMTJcclxuICB9O1xyXG4gIHB1YmxpYyBub3dUaW1lOiBhbnkgPSB0aGlzLnRpbWUuaG91cjtcclxuICBwdWJsaWMgZGVncmVlOiBhbnk7XHJcbiAgcHVibGljIGNvbmZpZzogVGltZVBpY2tlckNvbmZpZztcclxuICBwdWJsaWMgYXBwUmVmOiBhbnk7XHJcbiAgcHVibGljIGlzUG9wdXAgPSB0cnVlO1xyXG4gIHB1YmxpYyBhbGxvd2VkOiBhbnk7XHJcbiAgcHVibGljIHByZWZlcmVuY2U6IElEaXNwbGF5UHJlZmVyZW5jZTtcclxuICBwdWJsaWMgY2hhbmdlVG9NaW46IGJvb2xlYW47XHJcblxyXG4gIHByaXZhdGUgYW5pbWF0aW9uVGltZSA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjb3JlOiBBdHBDb3JlU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIHB1YmxpYyBQYXJzZVN0cmluZ1RvVGltZSAodGltZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aW1lID0gKHRpbWUgPT09ICcnIHx8IHRpbWUgPT09IHVuZGVmaW5lZCB8fCB0aW1lID09PSBudWxsKSA/IHRoaXMudGltZS5ob3VyICsgJzonICsgdGhpcy50aW1lLm1pbnV0ZSA6IHRpbWU7XHJcbiAgICB0aGlzLnRpbWUgPSB0aGlzLmNvcmUuU3RyaW5nVG9UaW1lKHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIEdldFRpbWUgKCkge1xyXG4gICAgY29uc3QgdGltZSA9IHRoaXMuY29yZS5UaW1lVG9TdHJpbmcodGhpcy50aW1lKTtcclxuICAgIHRoaXMuc3ViamVjdC5uZXh0KHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgY2xvY2tNYWtlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmNsb2NrVHlwZTtcclxuICAgIHRoaXMuY2xvY2tPYmplY3QgPSB0aGlzLmNvcmUuQ2xvY2tNYWtlcih0eXBlKTtcclxuICAgIHRoaXMuc2V0QXJyb3cobnVsbCk7XHJcbiAgfVxyXG5cclxuICBzZXRBY3RpdmVUaW1lID0gKCkgPT4ge1xyXG4gICAgdGhpcy5ub3dUaW1lID0gKHRoaXMuY2xvY2tUeXBlID09PSAnbWludXRlJyA/IHRoaXMudGltZS5taW51dGUgOiB0aGlzLnRpbWUuaG91cik7XHJcbiAgfVxyXG5cclxuICBzZXRBcnJvdyA9IChvYmo6IGFueSkgPT4ge1xyXG4gICAgaWYgKG9iaikge1xyXG4gICAgICB0aGlzLmNsb2NrVHlwZSA9IG9iai50eXBlO1xyXG4gICAgICBpZiAodGhpcy5jbG9ja1R5cGUgPT09ICdtaW51dGUnKSB7XHJcbiAgICAgICAgdGhpcy50aW1lLm1pbnV0ZSA9IG9iai50aW1lO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGltZS5ob3VyID0gb2JqLnRpbWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHN0ZXAgPSAodGhpcy5jbG9ja1R5cGUgPT09ICdtaW51dGUnKSA/IDYgOiAzMDtcclxuICAgIGNvbnN0IHRpbWUgPSAodGhpcy5jbG9ja1R5cGUgPT09ICdtaW51dGUnKSA/IHRoaXMudGltZS5taW51dGUgOiB0aGlzLnRpbWUuaG91cjtcclxuICAgIGNvbnN0IGRlZ3JlZXMgPSB0aW1lICogc3RlcDtcclxuICAgIHRoaXMucm90YXRpb25DbGFzcyhkZWdyZWVzKTtcclxuICAgIHRoaXMuc2V0QWN0aXZlVGltZSgpO1xyXG4gIH1cclxuXHJcbiAgcm90YXRpb25DbGFzcyA9IChkZWdyZWVzOiBhbnkpID0+IHtcclxuICAgIHRoaXMuZGVncmVlID0gZGVncmVlcztcclxuICB9XHJcblxyXG4gIHNldFRpbWUoKSB7XHJcbiAgICB0aGlzLmlzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMuY29uZmlnLmNoYW5nZVRvTWludXRlcyAmJiAhdGhpcy5jb25maWcub25seUhvdXIgJiYgdGhpcy5jbG9ja1R5cGUgPT09ICdob3VyJykge1xyXG4gICAgICB0aGlzLkNoYW5nZUFuaW1hdGlvbmFsKCdtaW51dGUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldERlZ3JlZSA9IChlbGU6IGFueSkgPT4ge1xyXG4gICAgY29uc3Qgc3RlcCA9IHRoaXMuY2xvY2tUeXBlID09PSAnbWludXRlJyA/IDYgOiAzMDtcclxuICAgIGNvbnN0IHBhcnJlbnRQb3MgPSBlbGUuY3VycmVudFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGlmICh0aGlzLmlzQ2xpY2tlZCAmJiAoZWxlLmN1cnJlbnRUYXJnZXQgPT09IGVsZS50YXJnZXQgfHwgZWxlLnRhcmdldC5ub2RlTmFtZSA9PT0gJ0JVVFRPTicpKSB7XHJcbiAgICAgIGNvbnN0IGNsb2NrID0ge1xyXG4gICAgICAgIHdpZHRoOiBlbGUuY3VycmVudFRhcmdldC5vZmZzZXRXaWR0aCxcclxuICAgICAgICBoZWlnaHQ6IGVsZS5jdXJyZW50VGFyZ2V0Lm9mZnNldEhlaWdodFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBkZWdyZWVzID0gdGhpcy5jb3JlLkNhbGNEZWdyZWVzKGVsZSwgcGFycmVudFBvcywgc3RlcCk7XHJcbiAgICAgIGxldCBob3VyID0gdGhpcy50aW1lLmhvdXIsXHJcbiAgICAgICAgICBtaW51dGUgPSB0aGlzLnRpbWUubWludXRlO1xyXG5cclxuICAgICAgaWYgKHRoaXMuY2xvY2tUeXBlID09PSAnaG91cicpIHtcclxuICAgICAgICBob3VyID0gKGRlZ3JlZXMgLyBzdGVwKTtcclxuICAgICAgICBob3VyID0gKGhvdXIgPiAxMikgPyBob3VyIC0gMTIgOiBob3VyO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY2xvY2tUeXBlID09PSAnbWludXRlJykge1xyXG4gICAgICAgIG1pbnV0ZSA9IChkZWdyZWVzIC8gc3RlcCk7XHJcbiAgICAgICAgbWludXRlID0gKG1pbnV0ZSA+IDU5KSA/IG1pbnV0ZSAtIDYwIDogbWludXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBtaW4gPSB0aGlzLmNvbmZpZy5yYW5nZVRpbWUuc3RhcnQsXHJcbiAgICAgICAgICAgIG1heCA9IHRoaXMuY29uZmlnLnJhbmdlVGltZS5lbmQ7XHJcblxyXG4gICAgICBjb25zdCBub3dNaW5Ib3VyID0gK21pbi5zcGxpdCgnOicpWzBdIDwgMTIgPyArbWluLnNwbGl0KCc6JylbMF0gOiArbWluLnNwbGl0KCc6JylbMF0gLSAxMjtcclxuICAgICAgY29uc3Qgbm93TWF4SG91ciA9ICttYXguc3BsaXQoJzonKVswXSA8IDEyID8gK21heC5zcGxpdCgnOicpWzBdIDogK21heC5zcGxpdCgnOicpWzBdIC0gMTI7XHJcbiAgICAgIGNvbnN0IG5vd01pbk1pbiA9ICttaW4uc3BsaXQoJzonKVsxXTtcclxuICAgICAgY29uc3Qgbm93TWF4TWluID0gK21heC5zcGxpdCgnOicpWzFdO1xyXG5cclxuICAgICAgY29uc3Qgbm93VGltZSA9IHRoaXMuR2V0Tm93VGltZShob3VyLCB0aGlzLnRpbWUuYW1wbSwgbWludXRlKTtcclxuICAgICAgaWYgKHRoaXMuYWxsb3dlZC5pbmRleE9mKG5vd1RpbWUpID4gLTEpIHtcclxuICAgICAgICB0aGlzLnRpbWUuaG91ciA9IGhvdXI7XHJcbiAgICAgICAgdGhpcy50aW1lLm1pbnV0ZSA9IG1pbnV0ZTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uQ2xhc3MoZGVncmVlcyk7XHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaW1lKCk7XHJcbiAgICAgIH1lbHNlIGlmICh0aGlzLmNsb2NrVHlwZSA9PT0gJ2hvdXInICYmIChob3VyID09PSBub3dNaW5Ib3VyICYmIG1pbnV0ZSA8PSBub3dNaW5NaW4pKSB7XHJcbiAgICAgICAgdGhpcy50aW1lLmhvdXIgPSBub3dNaW5Ib3VyO1xyXG4gICAgICAgIHRoaXMudGltZS5taW51dGUgPSBub3dNaW5NaW47XHJcbiAgICAgIH1lbHNlIGlmICh0aGlzLmNsb2NrVHlwZSA9PT0gJ2hvdXInICYmIChob3VyID09PSBub3dNYXhIb3VyICYmIG1pbnV0ZSA+PSBub3dNYXhNaW4pKSB7XHJcbiAgICAgICAgdGhpcy50aW1lLmhvdXIgPSBub3dNYXhIb3VyO1xyXG4gICAgICAgIHRoaXMudGltZS5taW51dGUgPSBub3dNYXhNaW47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgR2V0Tm93VGltZSAoaG91cjogbnVtYmVyLCBhbXBtOiAnQU0nIHwgJ1BNJywgbWludXRlOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgSG91ciA9IChob3VyID09PSAxMiAmJiBhbXBtID09PSAnQU0nKSA/ICcwJyA6IGhvdXI7XHJcbiAgICBjb25zdCBub3dUaW1lID0gSG91ciArICc6JyArIG1pbnV0ZSArICcgJyArIGFtcG07XHJcbiAgICByZXR1cm4gbm93VGltZTtcclxuICB9XHJcblxyXG4gIGNoZWNrQmV0KCkge1xyXG4gICAgY29uc3Qgbm93VGltZSA9IHRoaXMuR2V0Tm93VGltZSh0aGlzLnRpbWUuaG91ciwgdGhpcy50aW1lLmFtcG0sIHRoaXMudGltZS5taW51dGUpO1xyXG4gICAgaWYgKHRoaXMuYWxsb3dlZC5pbmRleE9mKG5vd1RpbWUpID09PSAtMSkge1xyXG4gICAgICB0aGlzLlBhcnNlU3RyaW5nVG9UaW1lKHRoaXMuY29uZmlnLnJhbmdlVGltZS5zdGFydCk7XHJcbiAgICAgIHRoaXMuc2V0QXJyb3cobnVsbCk7XHJcbiAgICAgIHRoaXMuc2V0QWN0aXZlVGltZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgY2xvY2sgYnV0dG9uIHRpbWUgaXMgbm90IGluIGFsbG93ZWQgdGltZXMgYW5kIGRpc2FibGVkXHJcbiAgICogQHBhcmFtIHQgQnV0dG9uIFRpbWUgVmFsdWVcclxuICAgKi9cclxuICBjaGVja0Rpc2FibGVkKHQpIHtcclxuICAgIGNvbnN0IG0gPSAodGhpcy5jbG9ja1R5cGUgPT09ICdtaW51dGUnKSA/IHQgOiB0aGlzLnRpbWUubWludXRlO1xyXG4gICAgY29uc3QgaCA9ICh0aGlzLmNsb2NrVHlwZSA9PT0gJ2hvdXInKSA/IHQgOiB0aGlzLnRpbWUuaG91cjtcclxuICAgIGNvbnN0IG5vd1RpbWUgPSB0aGlzLkdldE5vd1RpbWUoaCwgdGhpcy50aW1lLmFtcG0sIG0pO1xyXG4gICAgcmV0dXJuICh0aGlzLmFsbG93ZWQuaW5kZXhPZihub3dUaW1lKSA9PT0gLTEpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbW9kYWxBbmltYXRpb24oKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5hY3RpdmVNb2RhbCA9IHRydWU7XHJcbiAgICB9LCAxKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hbGxvd2VkID0gdGhpcy5jb3JlLmFsbG93ZWRUaW1lcyAodGhpcy5jb25maWcucmFuZ2VUaW1lLnN0YXJ0LCB0aGlzLmNvbmZpZy5yYW5nZVRpbWUuZW5kKTtcclxuICAgIGlmICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5vbmx5TWludXRlKSB7XHJcbiAgICAgIHRoaXMuY2xvY2tUeXBlID0gJ21pbnV0ZSc7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jb25maWcpIHtcclxuICAgICAgaWYgKHRoaXMuY29uZmlnLm9ubHlQTSkge1xyXG4gICAgICAgIHRoaXMudGltZS5hbXBtID0gJ1BNJztcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbmZpZy5vbmx5QU0pIHtcclxuICAgICAgICB0aGlzLnRpbWUuYW1wbSA9ICdBTSc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY2xvY2tNYWtlcigpO1xyXG4gICAgdGhpcy5tb2RhbEFuaW1hdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIE1pbnV0ZUNsaWNrICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogV2UgYXJlIG5vdCBwZXJtaXR0aW5nIHVzZXIgdG8gc2VsZWN0IHRoZSBtaW51dGUuXHJcbiAgICAgKiBidXQgYW55d2F5LCBpdCB3aWxsIHJldHVybiB0aGUgc3RhbmRhcmQgdGltZSwgaWYgcHJvdmlkZWQgdGhlIGRlZmF1bHQgdGltZS5cclxuICAgICAqL1xyXG4gICAgaWYgKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLm9ubHlIb3VyKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLkNoYW5nZUFuaW1hdGlvbmFsKCdtaW51dGUnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBIb3VyQ2xpY2sgKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBXZSBhcmUgbm90IHBlcm1pdHRpbmcgdXNlciB0byBzZWxlY3QgdGhlIG1pbnV0ZS5cclxuICAgICAqIGJ1dCBhbnl3YXksIGl0IHdpbGwgcmV0dXJuIHRoZSBzdGFuZGFyZCB0aW1lLCBpZiBwcm92aWRlZCB0aGUgZGVmYXVsdCB0aW1lLlxyXG4gICAgICovXHJcbiAgICBpZiAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcub25seU1pbnV0ZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLkNoYW5nZUFuaW1hdGlvbmFsKCdob3VyJyk7XHJcbiAgfVxyXG5cclxuICBDaGFuZ2VBbmltYXRpb25hbCh0eXBlOiAnbWludXRlJyB8ICdob3VyJykge1xyXG4gICAgaWYgKHRoaXMuY2xvY2tUeXBlICE9PSB0eXBlKSB7XHJcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5hbmltYXRpb24gPT09ICdmYWRlJykge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlVG9NaW4gPSB0cnVlO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jaGFuZ2VUb01pbiA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5jbG9ja1R5cGUgPSB0eXBlO1xyXG4gICAgICAgICAgdGhpcy5jbG9ja01ha2VyKCk7XHJcbiAgICAgICAgfSwgMjAwKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbmZpZy5hbmltYXRpb24gPT09ICdyb3RhdGUnKSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25UaW1lID0gMC40O1xyXG4gICAgICAgIHRoaXMuY2xvY2tUeXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmNsb2NrTWFrZXIoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNsb2NrVHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5jbG9ja01ha2VyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIFNldEFNICgpIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5vbmx5UE0pIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdGhpcy50aW1lLmFtcG0gPSAnQU0nO1xyXG4gICAgdGhpcy5jaGVja0JldCgpO1xyXG4gIH1cclxuXHJcbiAgU2V0UE0gKCkge1xyXG4gICAgaWYgKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLm9ubHlBTSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRpbWUuYW1wbSA9ICdQTSc7XHJcbiAgICB0aGlzLmNoZWNrQmV0KCk7XHJcbiAgfVxyXG5cclxuICBDbG9zZShlOiBhbnkpIHtcclxuICAgIGlmIChlLnRhcmdldCA9PT0gZS5jdXJyZW50VGFyZ2V0KSB7XHJcbiAgICAgIGlmICh0aGlzLmlzUG9wdXAgPT09IHRydWUpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZU1vZGFsID0gZmFsc2U7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmFwcFJlZi5kZXRhY2hWaWV3KHRoaXMuX3JlZi5ob3N0Vmlldyk7XHJcbiAgICAgICAgICB0aGlzLl9yZWYuZGVzdHJveSgpO1xyXG4gICAgICAgIH0sIDQwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENsb2NrQXJyb3dTdHlsZSgpIHtcclxuICAgIGxldCBhcnJvd1N0eWxlID0ge307XHJcbiAgICBpZiAodGhpcy5jb25maWcuYW5pbWF0aW9uID09PSAncm90YXRlJykge1xyXG4gICAgICAgIGFycm93U3R5bGUgPSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoJyArIHRoaXMuZGVncmVlICsgJ2RlZyknLFxyXG4gICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3JvdGF0ZSgnICsgdGhpcy5kZWdyZWUgKyAnZGVnKScsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGlzLmNvbmZpZy5hcnJvd1N0eWxlLmJhY2tncm91bmQsXHJcbiAgICAgICAgICAnLXdlYmtpdC10cmFuc2l0aW9uJzogJ3RyYW5zZm9ybSAnICsgdGhpcy5nZXRBbmltYXRpb25UaW1lKCksXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtICcgKyArIHRoaXMuZ2V0QW5pbWF0aW9uVGltZSgpXHJcbiAgICAgICAgfTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgYXJyb3dTdHlsZSA9IHtcclxuICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoJyArIHRoaXMuZGVncmVlICsgJ2RlZyknLFxyXG4gICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6ICdyb3RhdGUoJyArIHRoaXMuZGVncmVlICsgJ2RlZyknLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IHRoaXMuY29uZmlnLmFycm93U3R5bGUuYmFja2dyb3VuZCxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJvd1N0eWxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0QW5pbWF0aW9uVGltZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmFuaW1hdGlvblRpbWUgKyAncyc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudCBvbiBjbG9jayBtb3VzZSBjbGljayBkb3duXHJcbiAgICogQHBhcmFtIGV2ZW50IC0gY2FwdHVyZWQgZXZlbnRcclxuICAgKi9cclxuICB1cGRhdGVDbG9ja0Rvd24oZXZlbnQpIHtcclxuICAgIHRoaXMuaXNDbGlja2VkID0gdHJ1ZTtcclxuICAgIHRoaXMuYW5pbWF0aW9uVGltZSA9IDA7XHJcbiAgICB0aGlzLmdldERlZ3JlZShldmVudCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgc2V0TmV3Um90YXRpb24oKSB7XHJcbiAgICBjb25zdCB0YXJnZXREZWdyZWUgPSAoKHRoaXMudGltZS5taW51dGUgLyA2MCkgKiAzNjApICsgMzYwO1xyXG4gICAgY29uc3QgdGFyZ2V0RGVncmVlMiA9IHRhcmdldERlZ3JlZSAqIDI7XHJcblxyXG4gICAgY29uc3QgZGlmZjEgPSBNYXRoLmFicyh0aGlzLmRlZ3JlZSAtIHRhcmdldERlZ3JlZSk7XHJcbiAgICBjb25zdCBkaWZmMiA9IE1hdGguYWJzKHRoaXMuZGVncmVlIC0gdGFyZ2V0RGVncmVlMik7XHJcblxyXG4gICAgaWYgKGRpZmYxIDwgZGlmZjIpIHtcclxuICAgICAgdGhpcy5yb3RhdGlvbkNsYXNzKHRhcmdldERlZ3JlZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJvdGF0aW9uQ2xhc3ModGFyZ2V0RGVncmVlMik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgR2V0U2VwYXJhdG9yICgpIHtcclxuICAgIGlmICh0aGlzLnByZWZlcmVuY2UgJiYgdGhpcy5wcmVmZXJlbmNlLnNlcGFyYXRvcikge1xyXG4gICAgICByZXR1cm4gdGhpcy5wcmVmZXJlbmNlLnNlcGFyYXRvcjtcclxuICAgIH1cclxuICAgIHJldHVybiAnOic7XHJcbiAgfVxyXG4gIHB1YmxpYyBHZXRQZXJpb2QgKHBlcmlvZDogJ0FNJyB8ICdQTScpIHtcclxuICAgIGlmICh0aGlzLnByZWZlcmVuY2UgJiYgdGhpcy5wcmVmZXJlbmNlLnBlcmlvZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wcmVmZXJlbmNlLnBlcmlvZChwZXJpb2QpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBlcmlvZDtcclxuICB9XHJcbiAgcHVibGljIEdldE1pbnV0ZSAoKSB7XHJcbiAgICBpZiAodGhpcy5wcmVmZXJlbmNlICYmIHRoaXMucHJlZmVyZW5jZS5taW51dGUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHJlZmVyZW5jZS5taW51dGUodGhpcy50aW1lLm1pbnV0ZSk7XHJcbiAgICB9XHJcbiAgICBsZXQgbWluOiBzdHJpbmcgPSB0aGlzLnRpbWUubWludXRlLnRvU3RyaW5nKCk7XHJcbiAgICBpZiAoK21pbiA8IDEwKSB7XHJcbiAgICAgIG1pbiA9ICcwJyArIG1pbjtcclxuICAgIH1cclxuICAgIHJldHVybiBtaW47XHJcbiAgfVxyXG4gIHB1YmxpYyBHZXRIb3VyICgpIHtcclxuICAgIGlmICh0aGlzLnByZWZlcmVuY2UgJiYgdGhpcy5wcmVmZXJlbmNlLmhvdXIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHJlZmVyZW5jZS5ob3VyKHRoaXMudGltZS5ob3VyKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnRpbWUuaG91cjtcclxuICB9XHJcbiAgcHVibGljIEdldENsb2NrVGltZShjbG9jazogSUNsb2NrTnVtYmVyKSB7XHJcbiAgICBpZiAoICEgdGhpcy5wcmVmZXJlbmNlKSB7XHJcbiAgICAgIHJldHVybiBjbG9jay50aW1lO1xyXG4gICAgfVxyXG4gICAgaWYgKCB0aGlzLmNsb2NrVHlwZSA9PT0gJ2hvdXInICYmIHRoaXMucHJlZmVyZW5jZS5jbG9ja0hvdXIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHJlZmVyZW5jZS5jbG9ja0hvdXIoY2xvY2sudGltZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIHRoaXMuY2xvY2tUeXBlID09PSAnbWludXRlJyAmJiB0aGlzLnByZWZlcmVuY2UuY2xvY2tNaW51dGUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHJlZmVyZW5jZS5jbG9ja01pbnV0ZShjbG9jay50aW1lKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjbG9jay50aW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIEdldExhYmVsIChrZXk6IHN0cmluZykge1xyXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XHJcbiAgICAgICdvayc6ICdPaycsXHJcbiAgICAgICdjYW5jZWwnOiAnQ2FuY2VsJ1xyXG4gICAgfTtcclxuICAgIGlmICgodGhpcy5wcmVmZXJlbmNlICYmIHRoaXMucHJlZmVyZW5jZS5sYWJlbHMgJiYgdGhpcy5wcmVmZXJlbmNlLmxhYmVscy5vaykpIHtcclxuICAgICAgZGVmYXVsdHMub2sgPSB0aGlzLnByZWZlcmVuY2UubGFiZWxzLm9rO1xyXG4gICAgfVxyXG4gICAgaWYgKCh0aGlzLnByZWZlcmVuY2UgJiYgdGhpcy5wcmVmZXJlbmNlLmxhYmVscyAmJiB0aGlzLnByZWZlcmVuY2UubGFiZWxzLmNhbmNlbCkpIHtcclxuICAgICAgZGVmYXVsdHMuY2FuY2VsID0gdGhpcy5wcmVmZXJlbmNlLmxhYmVscy5jYW5jZWw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGVmYXVsdHNba2V5XTtcclxuICB9XHJcbn1cclxuIl19