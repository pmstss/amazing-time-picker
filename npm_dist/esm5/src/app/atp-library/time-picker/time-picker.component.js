/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AtpCoreService } from '../atp-core.service';
var TimePickerComponent = /** @class */ (function () {
    function TimePickerComponent(core) {
        var _this = this;
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
        function () {
            /** @type {?} */
            var type = _this.clockType;
            _this.clockObject = _this.core.ClockMaker(type);
            _this.setArrow(null);
        });
        this.setActiveTime = (/**
         * @return {?}
         */
        function () {
            _this.nowTime = (_this.clockType === 'minute' ? _this.time.minute : _this.time.hour);
        });
        this.setArrow = (/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            if (obj) {
                _this.clockType = obj.type;
                if (_this.clockType === 'minute') {
                    _this.time.minute = obj.time;
                }
                else {
                    _this.time.hour = obj.time;
                }
            }
            /** @type {?} */
            var step = (_this.clockType === 'minute') ? 6 : 30;
            /** @type {?} */
            var time = (_this.clockType === 'minute') ? _this.time.minute : _this.time.hour;
            /** @type {?} */
            var degrees = time * step;
            _this.rotationClass(degrees);
            _this.setActiveTime();
        });
        this.rotationClass = (/**
         * @param {?} degrees
         * @return {?}
         */
        function (degrees) {
            _this.degree = degrees;
        });
        this.getDegree = (/**
         * @param {?} ele
         * @return {?}
         */
        function (ele) {
            /** @type {?} */
            var step = _this.clockType === 'minute' ? 6 : 30;
            /** @type {?} */
            var parrentPos = ele.currentTarget.getBoundingClientRect();
            if (_this.isClicked && (ele.currentTarget === ele.target || ele.target.nodeName === 'BUTTON')) {
                /** @type {?} */
                var clock = {
                    width: ele.currentTarget.offsetWidth,
                    height: ele.currentTarget.offsetHeight
                };
                /** @type {?} */
                var degrees = _this.core.CalcDegrees(ele, parrentPos, step);
                /** @type {?} */
                var hour = _this.time.hour;
                /** @type {?} */
                var minute = _this.time.minute;
                if (_this.clockType === 'hour') {
                    hour = (degrees / step);
                    hour = (hour > 12) ? hour - 12 : hour;
                }
                else if (_this.clockType === 'minute') {
                    minute = (degrees / step);
                    minute = (minute > 59) ? minute - 60 : minute;
                }
                /** @type {?} */
                var min = _this.config.rangeTime.start;
                /** @type {?} */
                var max = _this.config.rangeTime.end;
                /** @type {?} */
                var nowMinHour = +min.split(':')[0] < 12 ? +min.split(':')[0] : +min.split(':')[0] - 12;
                /** @type {?} */
                var nowMaxHour = +max.split(':')[0] < 12 ? +max.split(':')[0] : +max.split(':')[0] - 12;
                /** @type {?} */
                var nowMinMin = +min.split(':')[1];
                /** @type {?} */
                var nowMaxMin = +max.split(':')[1];
                /** @type {?} */
                var nowTime = _this.GetNowTime(hour, _this.time.ampm, minute);
                if (_this.allowed.indexOf(nowTime) > -1) {
                    _this.time.hour = hour;
                    _this.time.minute = minute;
                    _this.rotationClass(degrees);
                    _this.setActiveTime();
                }
                else if (_this.clockType === 'hour' && (hour === nowMinHour && minute <= nowMinMin)) {
                    _this.time.hour = nowMinHour;
                    _this.time.minute = nowMinMin;
                }
                else if (_this.clockType === 'hour' && (hour === nowMaxHour && minute >= nowMaxMin)) {
                    _this.time.hour = nowMaxHour;
                    _this.time.minute = nowMaxMin;
                }
            }
        });
    }
    /**
     * @param {?} time
     * @return {?}
     */
    TimePickerComponent.prototype.ParseStringToTime = /**
     * @param {?} time
     * @return {?}
     */
    function (time) {
        time = (time === '' || time === undefined || time === null) ? this.time.hour + ':' + this.time.minute : time;
        this.time = this.core.StringToTime(time);
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.GetTime = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var time = this.core.TimeToString(this.time);
        this.subject.next(time);
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.setTime = /**
     * @return {?}
     */
    function () {
        this.isClicked = false;
        if (this.config.changeToMinutes && !this.config.onlyHour && this.clockType === 'hour') {
            this.ChangeAnimational('minute');
        }
    };
    /**
     * @private
     * @param {?} hour
     * @param {?} ampm
     * @param {?} minute
     * @return {?}
     */
    TimePickerComponent.prototype.GetNowTime = /**
     * @private
     * @param {?} hour
     * @param {?} ampm
     * @param {?} minute
     * @return {?}
     */
    function (hour, ampm, minute) {
        /** @type {?} */
        var Hour = (hour === 12 && ampm === 'AM') ? '0' : hour;
        /** @type {?} */
        var nowTime = Hour + ':' + minute + ' ' + ampm;
        return nowTime;
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.checkBet = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nowTime = this.GetNowTime(this.time.hour, this.time.ampm, this.time.minute);
        if (this.allowed.indexOf(nowTime) === -1) {
            this.ParseStringToTime(this.config.rangeTime.start);
            this.setArrow(null);
            this.setActiveTime();
        }
    };
    /**
     * Check if clock button time is not in allowed times and disabled
     * @param t Button Time Value
     */
    /**
     * Check if clock button time is not in allowed times and disabled
     * @param {?} t Button Time Value
     * @return {?}
     */
    TimePickerComponent.prototype.checkDisabled = /**
     * Check if clock button time is not in allowed times and disabled
     * @param {?} t Button Time Value
     * @return {?}
     */
    function (t) {
        /** @type {?} */
        var m = (this.clockType === 'minute') ? t : this.time.minute;
        /** @type {?} */
        var h = (this.clockType === 'hour') ? t : this.time.hour;
        /** @type {?} */
        var nowTime = this.GetNowTime(h, this.time.ampm, m);
        return (this.allowed.indexOf(nowTime) === -1) ? true : false;
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.modalAnimation = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.activeModal = true;
        }), 1);
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.MinuteClick = /**
     * @return {?}
     */
    function () {
        /**
         * We are not permitting user to select the minute.
         * but anyway, it will return the standard time, if provided the default time.
         */
        if (this.config && this.config.onlyHour) {
            return false;
        }
        this.ChangeAnimational('minute');
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.HourClick = /**
     * @return {?}
     */
    function () {
        /**
         * We are not permitting user to select the minute.
         * but anyway, it will return the standard time, if provided the default time.
         */
        if (this.config && this.config.onlyMinute) {
            return false;
        }
        this.ChangeAnimational('hour');
    };
    /**
     * @param {?} type
     * @return {?}
     */
    TimePickerComponent.prototype.ChangeAnimational = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        var _this = this;
        if (this.clockType !== type) {
            if (this.config.animation === 'fade') {
                this.changeToMin = true;
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.changeToMin = false;
                    _this.clockType = type;
                    _this.clockMaker();
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
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.SetAM = /**
     * @return {?}
     */
    function () {
        if (this.config && this.config.onlyPM) {
            return false;
        }
        this.time.ampm = 'AM';
        this.checkBet();
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.SetPM = /**
     * @return {?}
     */
    function () {
        if (this.config && this.config.onlyAM) {
            return false;
        }
        this.time.ampm = 'PM';
        this.checkBet();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    TimePickerComponent.prototype.Close = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        if (e.target === e.currentTarget) {
            if (this.isPopup === true) {
                this.activeModal = false;
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.appRef.detachView(_this._ref.hostView);
                    _this._ref.destroy();
                }), 400);
            }
        }
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.getClockArrowStyle = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var arrowStyle = {};
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
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.getAnimationTime = /**
     * @return {?}
     */
    function () {
        return this.animationTime + 's';
    };
    /**
     * Event on clock mouse click down
     * @param event - captured event
     */
    /**
     * Event on clock mouse click down
     * @param {?} event - captured event
     * @return {?}
     */
    TimePickerComponent.prototype.updateClockDown = /**
     * Event on clock mouse click down
     * @param {?} event - captured event
     * @return {?}
     */
    function (event) {
        this.isClicked = true;
        this.animationTime = 0;
        this.getDegree(event);
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.setNewRotation = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var targetDegree = ((this.time.minute / 60) * 360) + 360;
        /** @type {?} */
        var targetDegree2 = targetDegree * 2;
        /** @type {?} */
        var diff1 = Math.abs(this.degree - targetDegree);
        /** @type {?} */
        var diff2 = Math.abs(this.degree - targetDegree2);
        if (diff1 < diff2) {
            this.rotationClass(targetDegree);
        }
        else {
            this.rotationClass(targetDegree2);
        }
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.GetSeparator = /**
     * @return {?}
     */
    function () {
        if (this.preference && this.preference.separator) {
            return this.preference.separator;
        }
        return ':';
    };
    /**
     * @param {?} period
     * @return {?}
     */
    TimePickerComponent.prototype.GetPeriod = /**
     * @param {?} period
     * @return {?}
     */
    function (period) {
        if (this.preference && this.preference.period) {
            return this.preference.period(period);
        }
        return period;
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.GetMinute = /**
     * @return {?}
     */
    function () {
        if (this.preference && this.preference.minute) {
            return this.preference.minute(this.time.minute);
        }
        /** @type {?} */
        var min = this.time.minute.toString();
        if (+min < 10) {
            min = '0' + min;
        }
        return min;
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.GetHour = /**
     * @return {?}
     */
    function () {
        if (this.preference && this.preference.hour) {
            return this.preference.hour(this.time.hour);
        }
        return this.time.hour;
    };
    /**
     * @param {?} clock
     * @return {?}
     */
    TimePickerComponent.prototype.GetClockTime = /**
     * @param {?} clock
     * @return {?}
     */
    function (clock) {
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
    };
    /**
     * @param {?} key
     * @return {?}
     */
    TimePickerComponent.prototype.GetLabel = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var defaults = {
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
    };
    TimePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'time-picker',
                    template: "<div id=\"time-picker-wrapper\" class=\"{{config.theme}}\" [ngClass]=\"{'active': activeModal, 'static': !isPopup}\" (click)=\"Close($event);\">\r\n  <div id=\"time-picker\" [ngClass]=\"{'active': activeModal, 'static': !isPopup}\">\r\n    <div class=\"time-picker-header\">\r\n      <div class=\"time-picker-selected-time\">\r\n          <div class=\"time-picker-hour\" (click)=\"HourClick()\" [attr.disabled]=\"(config.onlyMinute) ? 'disabled' : null\"\r\n            [ngClass]=\"{'selected' : clockType == 'hour'}\">{{GetHour()}}</div>\r\n          <span class=\"time-seprator\">{{GetSeparator()}}</span>\r\n          <div class=\"time-picker-minute\" (click)=\"MinuteClick();\" [attr.disabled]=\"(config.onlyHour) ? 'disabled' : null\"\r\n            [ngClass]=\"{'selected' : clockType == 'minute'}\">{{GetMinute()}}</div>\r\n      </div>\r\n      <div class=\"time-picker-selected-ampm\">\r\n        <div class=\"time-picker-am\" (click)=\"SetAM();\" [attr.disabled]=\"(config.onlyPM) ? 'disabled' : null\" [ngClass]=\"{'selected' : time.ampm == 'AM'}\">{{GetPeriod('AM')}}</div>\r\n        <div class=\"time-picker-pm\" (click)=\"SetPM();\" [attr.disabled]=\"(config.onlyAM) ? 'disabled' : null\" [ngClass]=\"{'selected' : time.ampm == 'PM'}\">{{GetPeriod('PM')}}</div>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"time-picker-content\">\r\n        <div class=\"time-picker-clock\" [ngClass]=\"{'hide-time-picker-clock': changeToMin}\"  (mousemove)=\"getDegree($event);\" (mousedown)=\"updateClockDown($event)\" (mouseup)=\"setTime();\">\r\n          <button *ngFor=\"let clock of clockObject\" [ngClass]=\"{'active' : nowTime == clock.time}\" \r\n            [id]=\"'timepicker-item-id-' + clock.time\" \r\n            [disabled]=\"checkDisabled(clock.time)\" \r\n            [ngStyle]=\"{top: clock.top,left: clock.left, color: nowTime == clock.time ? config.arrowStyle.color :  '', background: nowTime == clock.time ? config.arrowStyle.background : 'transparent'}\">\r\n            {{GetClockTime(clock)}}\r\n          </button>\r\n          <div class=\"time-picker-clock-origin\" [ngStyle]=\"{ background: config.arrowStyle.background}\"></div>\r\n          <div id=\"tpc-arrow\" class=\"time-picker-clock-arrow\" [ngStyle]=\"getClockArrowStyle()\">\r\n            <span [ngStyle]=\"{ background: config.arrowStyle.background }\"></span>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"time-picker-footer\">\r\n        <button (click)=\"Close($event);\">{{GetLabel('cancel')}}</button>\r\n        <button (click)=\"GetTime();Close($event);\" class=\"atp-ref-dialog-close\">{{GetLabel('ok')}}</button>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: ["#time-picker-wrapper{position:fixed;top:0;bottom:0;left:0;right:0;background:0 0;transition:background .4s;font-family:Roboto,sans-serif;z-index:1000}#time-picker-wrapper.static{position:relative!important;background:0 0!important;display:inline-block;z-index:0}#time-picker-wrapper.active{background:rgba(0,0,0,.3)}#time-picker-wrapper.dark #time-picker{background:#424242}#time-picker-wrapper.dark #time-picker .time-picker-header{border-bottom:none;background:#555}#time-picker-wrapper.dark #time-picker .time-picker-header .time-picker-selected-time{color:#999}#time-picker-wrapper.dark #time-picker .time-picker-header .time-picker-selected-time div.selected{color:#fff}#time-picker-wrapper.dark #time-picker .time-picker-header .time-picker-selected-ampm{color:#999}#time-picker-wrapper.dark #time-picker .time-picker-header .time-picker-selected-ampm div.selected{color:#fff}#time-picker-wrapper.dark #time-picker .time-picker-clock{background:#555}#time-picker-wrapper.dark #time-picker .time-picker-clock>button{color:#fff}#time-picker-wrapper.dark #time-picker .time-picker-footer{border-top:none}#time-picker-wrapper.dark #time-picker .time-picker-footer button{background:#555;color:#fff}#time-picker-wrapper.dark #time-picker .time-picker-footer button:hover{background:#777}#time-picker-wrapper.light #time-picker{background:#fff}#time-picker-wrapper.light #time-picker .time-picker-header{border-bottom:1px solid #e1e1e1}#time-picker-wrapper.light #time-picker .time-picker-header .time-picker-selected-time{color:#aaa}#time-picker-wrapper.light #time-picker .time-picker-header .time-picker-selected-time div.selected{color:#000}#time-picker-wrapper.light #time-picker .time-picker-header .time-picker-selected-ampm{color:#aaa}#time-picker-wrapper.light #time-picker .time-picker-header .time-picker-selected-ampm div.selected{color:#000}#time-picker-wrapper.light #time-picker .time-picker-clock{background:#ededed}#time-picker-wrapper.light #time-picker .time-picker-clock>button{color:#000}#time-picker-wrapper.light #time-picker .time-picker-clock>button.active{background:#00f;color:#fff}#time-picker-wrapper.light #time-picker .time-picker-clock .time-picker-clock-arrow,#time-picker-wrapper.light #time-picker .time-picker-clock .time-picker-clock-arrow span,#time-picker-wrapper.light #time-picker .time-picker-clock .time-picker-clock-origin{background:#00f}#time-picker-wrapper.light #time-picker .time-picker-footer{border-top:1px solid #e1e1e1}#time-picker-wrapper.light #time-picker .time-picker-footer button{background:#f1f1f1}#time-picker-wrapper.light #time-picker .time-picker-footer button:hover{background:#ddd}#time-picker-wrapper.material-green #time-picker{background:#fff}#time-picker-wrapper.material-green #time-picker .time-picker-header{background-color:#00897b;border-bottom:1px solid #e1e1e1}#time-picker-wrapper.material-green #time-picker .time-picker-header .time-picker-selected-time{color:rgba(255,255,255,.4)}#time-picker-wrapper.material-green #time-picker .time-picker-header .time-picker-selected-time div.selected{color:#fff}#time-picker-wrapper.material-green #time-picker .time-picker-header .time-picker-selected-ampm{color:rgba(255,255,255,.4)}#time-picker-wrapper.material-green #time-picker .time-picker-header .time-picker-selected-ampm div.selected{color:#fff}#time-picker-wrapper.material-green #time-picker .time-picker-clock{background:#ededed}#time-picker-wrapper.material-green #time-picker .time-picker-clock>button{color:#000}#time-picker-wrapper.material-green #time-picker .time-picker-clock>button.active{background:#00897b;color:#fff}#time-picker-wrapper.material-green #time-picker .time-picker-clock .time-picker-clock-arrow,#time-picker-wrapper.material-green #time-picker .time-picker-clock .time-picker-clock-arrow span,#time-picker-wrapper.material-green #time-picker .time-picker-clock .time-picker-clock-origin{background:#00897b}#time-picker-wrapper.material-green #time-picker .time-picker-footer{border-top:1px solid #e1e1e1}#time-picker-wrapper.material-green #time-picker .time-picker-footer button{font-weight:700;text-transform:uppercase;background:0 0;color:#00897b}#time-picker-wrapper.material-green #time-picker .time-picker-footer button:hover{background:#ddd}#time-picker-wrapper.material-blue #time-picker{background:#fff}#time-picker-wrapper.material-blue #time-picker .time-picker-header{background-color:#3f51b5;border-bottom:1px solid #e1e1e1}#time-picker-wrapper.material-blue #time-picker .time-picker-header .time-picker-selected-time{color:rgba(255,255,255,.4)}#time-picker-wrapper.material-blue #time-picker .time-picker-header .time-picker-selected-time div.selected{color:#fff}#time-picker-wrapper.material-blue #time-picker .time-picker-header .time-picker-selected-ampm{color:rgba(255,255,255,.4)}#time-picker-wrapper.material-blue #time-picker .time-picker-header .time-picker-selected-ampm div.selected{color:#fff}#time-picker-wrapper.material-blue #time-picker .time-picker-clock{background:#ededed}#time-picker-wrapper.material-blue #time-picker .time-picker-clock>button{color:#000}#time-picker-wrapper.material-blue #time-picker .time-picker-clock>button.active{background:#3f51b5;color:#fff}#time-picker-wrapper.material-blue #time-picker .time-picker-clock .time-picker-clock-arrow,#time-picker-wrapper.material-blue #time-picker .time-picker-clock .time-picker-clock-arrow span,#time-picker-wrapper.material-blue #time-picker .time-picker-clock .time-picker-clock-origin{background:#3f51b5}#time-picker-wrapper.material-blue #time-picker .time-picker-footer{border-top:1px solid #e1e1e1}#time-picker-wrapper.material-blue #time-picker .time-picker-footer button{font-weight:700;text-transform:uppercase;background:0 0;color:#3f51b5}#time-picker-wrapper.material-blue #time-picker .time-picker-footer button:hover{background:#ddd}#time-picker-wrapper.material-red #time-picker{background:#fff}#time-picker-wrapper.material-red #time-picker .time-picker-header{background-color:#f44336;border-bottom:1px solid #e1e1e1}#time-picker-wrapper.material-red #time-picker .time-picker-header .time-picker-selected-time{color:rgba(255,255,255,.4)}#time-picker-wrapper.material-red #time-picker .time-picker-header .time-picker-selected-time div.selected{color:#fff}#time-picker-wrapper.material-red #time-picker .time-picker-header .time-picker-selected-ampm{color:rgba(255,255,255,.4)}#time-picker-wrapper.material-red #time-picker .time-picker-header .time-picker-selected-ampm div.selected{color:#fff}#time-picker-wrapper.material-red #time-picker .time-picker-clock{background:#ededed}#time-picker-wrapper.material-red #time-picker .time-picker-clock>button{color:#000}#time-picker-wrapper.material-red #time-picker .time-picker-clock>button.active{background:#f44336;color:#fff}#time-picker-wrapper.material-red #time-picker .time-picker-clock .time-picker-clock-arrow,#time-picker-wrapper.material-red #time-picker .time-picker-clock .time-picker-clock-arrow span,#time-picker-wrapper.material-red #time-picker .time-picker-clock .time-picker-clock-origin{background:#f44336}#time-picker-wrapper.material-red #time-picker .time-picker-footer{border-top:1px solid #e1e1e1}#time-picker-wrapper.material-red #time-picker .time-picker-footer button{font-weight:700;text-transform:uppercase;background:0 0;color:#f44336}#time-picker-wrapper.material-red #time-picker .time-picker-footer button:hover{background:#ddd}#time-picker-wrapper.material-purple #time-picker{background:#fff}#time-picker-wrapper.material-purple #time-picker .time-picker-header{background-color:#9c27b0;border-bottom:1px solid #e1e1e1}#time-picker-wrapper.material-purple #time-picker .time-picker-header .time-picker-selected-time{color:rgba(255,255,255,.4)}#time-picker-wrapper.material-purple #time-picker .time-picker-header .time-picker-selected-time div.selected{color:#fff}#time-picker-wrapper.material-purple #time-picker .time-picker-header .time-picker-selected-ampm{color:rgba(255,255,255,.4)}#time-picker-wrapper.material-purple #time-picker .time-picker-header .time-picker-selected-ampm div.selected{color:#fff}#time-picker-wrapper.material-purple #time-picker .time-picker-clock{background:#ededed}#time-picker-wrapper.material-purple #time-picker .time-picker-clock>button{color:#000}#time-picker-wrapper.material-purple #time-picker .time-picker-clock>button.active{background:#9c27b0;color:#fff}#time-picker-wrapper.material-purple #time-picker .time-picker-clock .time-picker-clock-arrow,#time-picker-wrapper.material-purple #time-picker .time-picker-clock .time-picker-clock-arrow span,#time-picker-wrapper.material-purple #time-picker .time-picker-clock .time-picker-clock-origin{background:#9c27b0}#time-picker-wrapper.material-purple #time-picker .time-picker-footer{border-top:1px solid #e1e1e1}#time-picker-wrapper.material-purple #time-picker .time-picker-footer button{font-weight:700;text-transform:uppercase;background:0 0;color:#9c27b0}#time-picker-wrapper.material-purple #time-picker .time-picker-footer button:hover{background:#ddd}#time-picker-wrapper.material-orange #time-picker{background:#fff}#time-picker-wrapper.material-orange #time-picker .time-picker-header{background-color:#ff9800;border-bottom:1px solid #e1e1e1}#time-picker-wrapper.material-orange #time-picker .time-picker-header .time-picker-selected-time{color:rgba(255,255,255,.4)}#time-picker-wrapper.material-orange #time-picker .time-picker-header .time-picker-selected-time div.selected{color:#fff}#time-picker-wrapper.material-orange #time-picker .time-picker-header .time-picker-selected-ampm{color:rgba(255,255,255,.4)}#time-picker-wrapper.material-orange #time-picker .time-picker-header .time-picker-selected-ampm div.selected{color:#fff}#time-picker-wrapper.material-orange #time-picker .time-picker-clock{background:#ededed}#time-picker-wrapper.material-orange #time-picker .time-picker-clock>button{color:#000}#time-picker-wrapper.material-orange #time-picker .time-picker-clock>button.active{background:#ff9800;color:#fff}#time-picker-wrapper.material-orange #time-picker .time-picker-clock .time-picker-clock-arrow,#time-picker-wrapper.material-orange #time-picker .time-picker-clock .time-picker-clock-arrow span,#time-picker-wrapper.material-orange #time-picker .time-picker-clock .time-picker-clock-origin{background:#ff9800}#time-picker-wrapper.material-orange #time-picker .time-picker-footer{border-top:1px solid #e1e1e1}#time-picker-wrapper.material-orange #time-picker .time-picker-footer button{font-weight:700;text-transform:uppercase;background:0 0;color:#ff9800}#time-picker-wrapper.material-orange #time-picker .time-picker-footer button:hover{background:#ddd}#time-picker-wrapper #time-picker{width:325px;height:auto;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);border-radius:2px;margin:15vh auto!important;-webkit-transform:scale(.5)!important;transform:scale(.5)!important;transition:transform .3s,opacity .3s,-webkit-transform .3s;opacity:0}#time-picker-wrapper #time-picker.static{margin:0!important;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 0 7px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}#time-picker-wrapper #time-picker.active{-webkit-transform:scale(1)!important;transform:scale(1)!important;opacity:1}#time-picker-wrapper #time-picker .time-picker-header{text-align:center;padding:15px 0}#time-picker-wrapper #time-picker .time-picker-header .time-picker-selected-time{font-size:35px;padding:5px 0}#time-picker-wrapper #time-picker .time-picker-header .time-picker-selected-time div{display:inline-block;cursor:pointer}#time-picker-wrapper #time-picker .time-picker-header .time-picker-selected-time div[disabled=true]{cursor:default}#time-picker-wrapper #time-picker .time-picker-header .time-picker-selected-ampm{font-size:18px}#time-picker-wrapper #time-picker .time-picker-header .time-picker-selected-ampm div{display:inline-block;padding:0 5px;cursor:pointer}#time-picker-wrapper #time-picker .time-picker-header .time-picker-selected-ampm div[disabled=true]{cursor:default}#time-picker-wrapper #time-picker .time-picker-content .time-picker-clock{width:200px;height:200px;padding:24px;border-radius:50%;cursor:pointer;margin:25px auto;position:relative;user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;opacity:1;-webkit-transform:scale(1);transform:scale(1);transition:opacity .3s,transform .3s,-webkit-transform .3s}#time-picker-wrapper #time-picker .time-picker-content .time-picker-clock button{border:none;position:absolute;width:35px;height:35px;border-radius:50%;cursor:pointer;font-size:17px;text-align:center;padding:0;transition:.2s;z-index:3}#time-picker-wrapper #time-picker .time-picker-content .time-picker-clock .time-picker-clock-origin{width:6px;height:6px;border-radius:50%;position:absolute;left:50%;top:50%;margin-left:-3px;margin-top:-3px}#time-picker-wrapper #time-picker .time-picker-content .time-picker-clock .time-picker-clock-arrow{width:2px;height:41%;position:absolute;left:0;top:22px;right:0;margin:auto;-webkit-transform-origin:top left;transform-origin:bottom}#time-picker-wrapper #time-picker .time-picker-content .time-picker-clock .time-picker-clock-arrow span{width:8px;height:8px;border-radius:50%;position:absolute;top:0;right:-3px}#time-picker-wrapper #time-picker .time-picker-content .time-picker-clock.hide-time-picker-clock{opacity:0;-webkit-transform:scale(.8);transform:scale(.8)}#time-picker-wrapper #time-picker .time-picker-footer{padding:15px;text-align:right}#time-picker-wrapper #time-picker .time-picker-footer button{border:transparent;margin-left:10px;padding:10px;font-size:14px;border-radius:2px;cursor:pointer}*{outline:0;box-sizing:content-box}"]
                }] }
    ];
    /** @nocollapse */
    TimePickerComponent.ctorParameters = function () { return [
        { type: AtpCoreService }
    ]; };
    return TimePickerComponent;
}());
export { TimePickerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW1hemluZy10aW1lLXBpY2tlci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvYXRwLWxpYnJhcnkvdGltZS1waWNrZXIvdGltZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUdyRDtJQThCRSw2QkFDVSxJQUFvQjtRQUQ5QixpQkFFSztRQURLLFNBQUksR0FBSixJQUFJLENBQWdCO1FBdkJ2QixZQUFPLEdBQVEsSUFBSSxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBSXBCLGNBQVMsR0FBc0IsTUFBTSxDQUFDO1FBQ3RDLFNBQUksR0FBVTtZQUNuQixJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRSxDQUFDO1lBQ1QsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFDO1FBQ0ssWUFBTyxHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBSTlCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFLZCxrQkFBYSxHQUFHLENBQUMsQ0FBQztRQWdCMUIsZUFBVTs7O1FBQUc7O2dCQUNMLElBQUksR0FBRyxLQUFJLENBQUMsU0FBUztZQUMzQixLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxFQUFBO1FBRUQsa0JBQWE7OztRQUFHO1lBQ2QsS0FBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEtBQUksQ0FBQyxTQUFTLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENB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QUVELDRDQUVDOztJQVNELHdDQTBDQzs7Ozs7SUE1RkMsbUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUNsb2NrTnVtYmVyLCBJRGlzcGxheVByZWZlcmVuY2UsIFRpbWVQaWNrZXJDb25maWcgfSBmcm9tICcuLi9kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IEF0cENvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vYXRwLWNvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IElUaW1lIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0aW1lLXBpY2tlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90aW1lLXBpY2tlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaW1lUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgX3JlZjogYW55O1xyXG4gIHB1YmxpYyBzdWJqZWN0OiBhbnkgPSBudWxsO1xyXG4gIHB1YmxpYyBhY3RpdmVNb2RhbCA9IGZhbHNlO1xyXG4gIHB1YmxpYyB0aW1lckVsZW1lbnQ6IGFueTtcclxuICBwdWJsaWMgY2xvY2tPYmplY3Q6IEFycmF5PGFueT47XHJcbiAgcHVibGljIGlzQ2xpY2tlZDogYm9vbGVhbjtcclxuICBwdWJsaWMgY2xvY2tUeXBlOiAnbWludXRlJyB8ICdob3VyJyA9ICdob3VyJztcclxuICBwdWJsaWMgdGltZTogSVRpbWUgPSB7XHJcbiAgICBhbXBtOiAnQU0nLFxyXG4gICAgbWludXRlOiAwLFxyXG4gICAgaG91cjogMTJcclxuICB9O1xyXG4gIHB1YmxpYyBub3dUaW1lOiBhbnkgPSB0aGlzLnRpbWUuaG91cjtcclxuICBwdWJsaWMgZGVncmVlOiBhbnk7XHJcbiAgcHVibGljIGNvbmZpZzogVGltZVBpY2tlckNvbmZpZztcclxuICBwdWJsaWMgYXBwUmVmOiBhbnk7XHJcbiAgcHVibGljIGlzUG9wdXAgPSB0cnVlO1xyXG4gIHB1YmxpYyBhbGxvd2VkOiBhbnk7XHJcbiAgcHVibGljIHByZWZlcmVuY2U6IElEaXNwbGF5UHJlZmVyZW5jZTtcclxuICBwdWJsaWMgY2hhbmdlVG9NaW46IGJvb2xlYW47XHJcblxyXG4gIHByaXZhdGUgYW5pbWF0aW9uVGltZSA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjb3JlOiBBdHBDb3JlU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIHB1YmxpYyBQYXJzZVN0cmluZ1RvVGltZSAodGltZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aW1lID0gKHRpbWUgPT09ICcnIHx8IHRpbWUgPT09IHVuZGVmaW5lZCB8fCB0aW1lID09PSBudWxsKSA/IHRoaXMudGltZS5ob3VyICsgJzonICsgdGhpcy50aW1lLm1pbnV0ZSA6IHRpbWU7XHJcbiAgICB0aGlzLnRpbWUgPSB0aGlzLmNvcmUuU3RyaW5nVG9UaW1lKHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIEdldFRpbWUgKCkge1xyXG4gICAgY29uc3QgdGltZSA9IHRoaXMuY29yZS5UaW1lVG9TdHJpbmcodGhpcy50aW1lKTtcclxuICAgIHRoaXMuc3ViamVjdC5uZXh0KHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgY2xvY2tNYWtlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmNsb2NrVHlwZTtcclxuICAgIHRoaXMuY2xvY2tPYmplY3QgPSB0aGlzLmNvcmUuQ2xvY2tNYWtlcih0eXBlKTtcclxuICAgIHRoaXMuc2V0QXJyb3cobnVsbCk7XHJcbiAgfVxyXG5cclxuICBzZXRBY3RpdmVUaW1lID0gKCkgPT4ge1xyXG4gICAgdGhpcy5ub3dUaW1lID0gKHRoaXMuY2xvY2tUeXBlID09PSAnbWludXRlJyA/IHRoaXMudGltZS5taW51dGUgOiB0aGlzLnRpbWUuaG91cik7XHJcbiAgfVxyXG5cclxuICBzZXRBcnJvdyA9IChvYmo6IGFueSkgPT4ge1xyXG4gICAgaWYgKG9iaikge1xyXG4gICAgICB0aGlzLmNsb2NrVHlwZSA9IG9iai50eXBlO1xyXG4gICAgICBpZiAodGhpcy5jbG9ja1R5cGUgPT09ICdtaW51dGUnKSB7XHJcbiAgICAgICAgdGhpcy50aW1lLm1pbnV0ZSA9IG9iai50aW1lO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGltZS5ob3VyID0gb2JqLnRpbWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHN0ZXAgPSAodGhpcy5jbG9ja1R5cGUgPT09ICdtaW51dGUnKSA/IDYgOiAzMDtcclxuICAgIGNvbnN0IHRpbWUgPSAodGhpcy5jbG9ja1R5cGUgPT09ICdtaW51dGUnKSA/IHRoaXMudGltZS5taW51dGUgOiB0aGlzLnRpbWUuaG91cjtcclxuICAgIGNvbnN0IGRlZ3JlZXMgPSB0aW1lICogc3RlcDtcclxuICAgIHRoaXMucm90YXRpb25DbGFzcyhkZWdyZWVzKTtcclxuICAgIHRoaXMuc2V0QWN0aXZlVGltZSgpO1xyXG4gIH1cclxuXHJcbiAgcm90YXRpb25DbGFzcyA9IChkZWdyZWVzOiBhbnkpID0+IHtcclxuICAgIHRoaXMuZGVncmVlID0gZGVncmVlcztcclxuICB9XHJcblxyXG4gIHNldFRpbWUoKSB7XHJcbiAgICB0aGlzLmlzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMuY29uZmlnLmNoYW5nZVRvTWludXRlcyAmJiAhdGhpcy5jb25maWcub25seUhvdXIgJiYgdGhpcy5jbG9ja1R5cGUgPT09ICdob3VyJykge1xyXG4gICAgICB0aGlzLkNoYW5nZUFuaW1hdGlvbmFsKCdtaW51dGUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldERlZ3JlZSA9IChlbGU6IGFueSkgPT4ge1xyXG4gICAgY29uc3Qgc3RlcCA9IHRoaXMuY2xvY2tUeXBlID09PSAnbWludXRlJyA/IDYgOiAzMDtcclxuICAgIGNvbnN0IHBhcnJlbnRQb3MgPSBlbGUuY3VycmVudFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGlmICh0aGlzLmlzQ2xpY2tlZCAmJiAoZWxlLmN1cnJlbnRUYXJnZXQgPT09IGVsZS50YXJnZXQgfHwgZWxlLnRhcmdldC5ub2RlTmFtZSA9PT0gJ0JVVFRPTicpKSB7XHJcbiAgICAgIGNvbnN0IGNsb2NrID0ge1xyXG4gICAgICAgIHdpZHRoOiBlbGUuY3VycmVudFRhcmdldC5vZmZzZXRXaWR0aCxcclxuICAgICAgICBoZWlnaHQ6IGVsZS5jdXJyZW50VGFyZ2V0Lm9mZnNldEhlaWdodFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBkZWdyZWVzID0gdGhpcy5jb3JlLkNhbGNEZWdyZWVzKGVsZSwgcGFycmVudFBvcywgc3RlcCk7XHJcbiAgICAgIGxldCBob3VyID0gdGhpcy50aW1lLmhvdXIsXHJcbiAgICAgICAgICBtaW51dGUgPSB0aGlzLnRpbWUubWludXRlO1xyXG5cclxuICAgICAgaWYgKHRoaXMuY2xvY2tUeXBlID09PSAnaG91cicpIHtcclxuICAgICAgICBob3VyID0gKGRlZ3JlZXMgLyBzdGVwKTtcclxuICAgICAgICBob3VyID0gKGhvdXIgPiAxMikgPyBob3VyIC0gMTIgOiBob3VyO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY2xvY2tUeXBlID09PSAnbWludXRlJykge1xyXG4gICAgICAgIG1pbnV0ZSA9IChkZWdyZWVzIC8gc3RlcCk7XHJcbiAgICAgICAgbWludXRlID0gKG1pbnV0ZSA+IDU5KSA/IG1pbnV0ZSAtIDYwIDogbWludXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBtaW4gPSB0aGlzLmNvbmZpZy5yYW5nZVRpbWUuc3RhcnQsXHJcbiAgICAgICAgICAgIG1heCA9IHRoaXMuY29uZmlnLnJhbmdlVGltZS5lbmQ7XHJcblxyXG4gICAgICBjb25zdCBub3dNaW5Ib3VyID0gK21pbi5zcGxpdCgnOicpWzBdIDwgMTIgPyArbWluLnNwbGl0KCc6JylbMF0gOiArbWluLnNwbGl0KCc6JylbMF0gLSAxMjtcclxuICAgICAgY29uc3Qgbm93TWF4SG91ciA9ICttYXguc3BsaXQoJzonKVswXSA8IDEyID8gK21heC5zcGxpdCgnOicpWzBdIDogK21heC5zcGxpdCgnOicpWzBdIC0gMTI7XHJcbiAgICAgIGNvbnN0IG5vd01pbk1pbiA9ICttaW4uc3BsaXQoJzonKVsxXTtcclxuICAgICAgY29uc3Qgbm93TWF4TWluID0gK21heC5zcGxpdCgnOicpWzFdO1xyXG5cclxuICAgICAgY29uc3Qgbm93VGltZSA9IHRoaXMuR2V0Tm93VGltZShob3VyLCB0aGlzLnRpbWUuYW1wbSwgbWludXRlKTtcclxuICAgICAgaWYgKHRoaXMuYWxsb3dlZC5pbmRleE9mKG5vd1RpbWUpID4gLTEpIHtcclxuICAgICAgICB0aGlzLnRpbWUuaG91ciA9IGhvdXI7XHJcbiAgICAgICAgdGhpcy50aW1lLm1pbnV0ZSA9IG1pbnV0ZTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uQ2xhc3MoZGVncmVlcyk7XHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaW1lKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jbG9ja1R5cGUgPT09ICdob3VyJyAmJiAoaG91ciA9PT0gbm93TWluSG91ciAmJiBtaW51dGUgPD0gbm93TWluTWluKSkge1xyXG4gICAgICAgIHRoaXMudGltZS5ob3VyID0gbm93TWluSG91cjtcclxuICAgICAgICB0aGlzLnRpbWUubWludXRlID0gbm93TWluTWluO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY2xvY2tUeXBlID09PSAnaG91cicgJiYgKGhvdXIgPT09IG5vd01heEhvdXIgJiYgbWludXRlID49IG5vd01heE1pbikpIHtcclxuICAgICAgICB0aGlzLnRpbWUuaG91ciA9IG5vd01heEhvdXI7XHJcbiAgICAgICAgdGhpcy50aW1lLm1pbnV0ZSA9IG5vd01heE1pbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBHZXROb3dUaW1lIChob3VyOiBudW1iZXIsIGFtcG06ICdBTScgfCAnUE0nLCBtaW51dGU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBjb25zdCBIb3VyID0gKGhvdXIgPT09IDEyICYmIGFtcG0gPT09ICdBTScpID8gJzAnIDogaG91cjtcclxuICAgIGNvbnN0IG5vd1RpbWUgPSBIb3VyICsgJzonICsgbWludXRlICsgJyAnICsgYW1wbTtcclxuICAgIHJldHVybiBub3dUaW1lO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tCZXQoKSB7XHJcbiAgICBjb25zdCBub3dUaW1lID0gdGhpcy5HZXROb3dUaW1lKHRoaXMudGltZS5ob3VyLCB0aGlzLnRpbWUuYW1wbSwgdGhpcy50aW1lLm1pbnV0ZSk7XHJcbiAgICBpZiAodGhpcy5hbGxvd2VkLmluZGV4T2Yobm93VGltZSkgPT09IC0xKSB7XHJcbiAgICAgIHRoaXMuUGFyc2VTdHJpbmdUb1RpbWUodGhpcy5jb25maWcucmFuZ2VUaW1lLnN0YXJ0KTtcclxuICAgICAgdGhpcy5zZXRBcnJvdyhudWxsKTtcclxuICAgICAgdGhpcy5zZXRBY3RpdmVUaW1lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiBjbG9jayBidXR0b24gdGltZSBpcyBub3QgaW4gYWxsb3dlZCB0aW1lcyBhbmQgZGlzYWJsZWRcclxuICAgKiBAcGFyYW0gdCBCdXR0b24gVGltZSBWYWx1ZVxyXG4gICAqL1xyXG4gIGNoZWNrRGlzYWJsZWQodCkge1xyXG4gICAgY29uc3QgbSA9ICh0aGlzLmNsb2NrVHlwZSA9PT0gJ21pbnV0ZScpID8gdCA6IHRoaXMudGltZS5taW51dGU7XHJcbiAgICBjb25zdCBoID0gKHRoaXMuY2xvY2tUeXBlID09PSAnaG91cicpID8gdCA6IHRoaXMudGltZS5ob3VyO1xyXG4gICAgY29uc3Qgbm93VGltZSA9IHRoaXMuR2V0Tm93VGltZShoLCB0aGlzLnRpbWUuYW1wbSwgbSk7XHJcbiAgICByZXR1cm4gKHRoaXMuYWxsb3dlZC5pbmRleE9mKG5vd1RpbWUpID09PSAtMSkgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBtb2RhbEFuaW1hdGlvbigpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmFjdGl2ZU1vZGFsID0gdHJ1ZTtcclxuICAgIH0sIDEpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFsbG93ZWQgPSB0aGlzLmNvcmUuYWxsb3dlZFRpbWVzICh0aGlzLmNvbmZpZy5yYW5nZVRpbWUuc3RhcnQsIHRoaXMuY29uZmlnLnJhbmdlVGltZS5lbmQpO1xyXG4gICAgaWYgKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLm9ubHlNaW51dGUpIHtcclxuICAgICAgdGhpcy5jbG9ja1R5cGUgPSAnbWludXRlJztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNvbmZpZykge1xyXG4gICAgICBpZiAodGhpcy5jb25maWcub25seVBNKSB7XHJcbiAgICAgICAgdGhpcy50aW1lLmFtcG0gPSAnUE0nO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY29uZmlnLm9ubHlBTSkge1xyXG4gICAgICAgIHRoaXMudGltZS5hbXBtID0gJ0FNJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jbG9ja01ha2VyKCk7XHJcbiAgICB0aGlzLm1vZGFsQW5pbWF0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgTWludXRlQ2xpY2sgKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBXZSBhcmUgbm90IHBlcm1pdHRpbmcgdXNlciB0byBzZWxlY3QgdGhlIG1pbnV0ZS5cclxuICAgICAqIGJ1dCBhbnl3YXksIGl0IHdpbGwgcmV0dXJuIHRoZSBzdGFuZGFyZCB0aW1lLCBpZiBwcm92aWRlZCB0aGUgZGVmYXVsdCB0aW1lLlxyXG4gICAgICovXHJcbiAgICBpZiAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcub25seUhvdXIpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuQ2hhbmdlQW5pbWF0aW9uYWwoJ21pbnV0ZScpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIEhvdXJDbGljayAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIFdlIGFyZSBub3QgcGVybWl0dGluZyB1c2VyIHRvIHNlbGVjdCB0aGUgbWludXRlLlxyXG4gICAgICogYnV0IGFueXdheSwgaXQgd2lsbCByZXR1cm4gdGhlIHN0YW5kYXJkIHRpbWUsIGlmIHByb3ZpZGVkIHRoZSBkZWZhdWx0IHRpbWUuXHJcbiAgICAgKi9cclxuICAgIGlmICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5vbmx5TWludXRlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMuQ2hhbmdlQW5pbWF0aW9uYWwoJ2hvdXInKTtcclxuICB9XHJcblxyXG4gIENoYW5nZUFuaW1hdGlvbmFsKHR5cGU6ICdtaW51dGUnIHwgJ2hvdXInKSB7XHJcbiAgICBpZiAodGhpcy5jbG9ja1R5cGUgIT09IHR5cGUpIHtcclxuICAgICAgaWYgKHRoaXMuY29uZmlnLmFuaW1hdGlvbiA9PT0gJ2ZhZGUnKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VUb01pbiA9IHRydWU7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNoYW5nZVRvTWluID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmNsb2NrVHlwZSA9IHR5cGU7XHJcbiAgICAgICAgICB0aGlzLmNsb2NrTWFrZXIoKTtcclxuICAgICAgICB9LCAyMDApO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY29uZmlnLmFuaW1hdGlvbiA9PT0gJ3JvdGF0ZScpIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWUgPSAwLjQ7XHJcbiAgICAgICAgdGhpcy5jbG9ja1R5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuY2xvY2tNYWtlcigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2xvY2tUeXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmNsb2NrTWFrZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgU2V0QU0gKCkge1xyXG4gICAgaWYgKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLm9ubHlQTSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRpbWUuYW1wbSA9ICdBTSc7XHJcbiAgICB0aGlzLmNoZWNrQmV0KCk7XHJcbiAgfVxyXG5cclxuICBTZXRQTSAoKSB7XHJcbiAgICBpZiAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcub25seUFNKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMudGltZS5hbXBtID0gJ1BNJztcclxuICAgIHRoaXMuY2hlY2tCZXQoKTtcclxuICB9XHJcblxyXG4gIENsb3NlKGU6IGFueSkge1xyXG4gICAgaWYgKGUudGFyZ2V0ID09PSBlLmN1cnJlbnRUYXJnZXQpIHtcclxuICAgICAgaWYgKHRoaXMuaXNQb3B1cCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwgPSBmYWxzZTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuYXBwUmVmLmRldGFjaFZpZXcodGhpcy5fcmVmLmhvc3RWaWV3KTtcclxuICAgICAgICAgIHRoaXMuX3JlZi5kZXN0cm95KCk7XHJcbiAgICAgICAgfSwgNDAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q2xvY2tBcnJvd1N0eWxlKCkge1xyXG4gICAgbGV0IGFycm93U3R5bGUgPSB7fTtcclxuICAgIGlmICh0aGlzLmNvbmZpZy5hbmltYXRpb24gPT09ICdyb3RhdGUnKSB7XHJcbiAgICAgICAgYXJyb3dTdHlsZSA9IHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgnICsgdGhpcy5kZWdyZWUgKyAnZGVnKScsXHJcbiAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAncm90YXRlKCcgKyB0aGlzLmRlZ3JlZSArICdkZWcpJyxcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHRoaXMuY29uZmlnLmFycm93U3R5bGUuYmFja2dyb3VuZCxcclxuICAgICAgICAgICctd2Via2l0LXRyYW5zaXRpb24nOiAndHJhbnNmb3JtICcgKyB0aGlzLmdldEFuaW1hdGlvblRpbWUoKSxcclxuICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gJyArICsgdGhpcy5nZXRBbmltYXRpb25UaW1lKClcclxuICAgICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXJyb3dTdHlsZSA9IHtcclxuICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoJyArIHRoaXMuZGVncmVlICsgJ2RlZyknLFxyXG4gICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6ICdyb3RhdGUoJyArIHRoaXMuZGVncmVlICsgJ2RlZyknLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IHRoaXMuY29uZmlnLmFycm93U3R5bGUuYmFja2dyb3VuZCxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJvd1N0eWxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0QW5pbWF0aW9uVGltZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmFuaW1hdGlvblRpbWUgKyAncyc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudCBvbiBjbG9jayBtb3VzZSBjbGljayBkb3duXHJcbiAgICogQHBhcmFtIGV2ZW50IC0gY2FwdHVyZWQgZXZlbnRcclxuICAgKi9cclxuICB1cGRhdGVDbG9ja0Rvd24oZXZlbnQpIHtcclxuICAgIHRoaXMuaXNDbGlja2VkID0gdHJ1ZTtcclxuICAgIHRoaXMuYW5pbWF0aW9uVGltZSA9IDA7XHJcbiAgICB0aGlzLmdldERlZ3JlZShldmVudCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgc2V0TmV3Um90YXRpb24oKSB7XHJcbiAgICBjb25zdCB0YXJnZXREZWdyZWUgPSAoKHRoaXMudGltZS5taW51dGUgLyA2MCkgKiAzNjApICsgMzYwO1xyXG4gICAgY29uc3QgdGFyZ2V0RGVncmVlMiA9IHRhcmdldERlZ3JlZSAqIDI7XHJcblxyXG4gICAgY29uc3QgZGlmZjEgPSBNYXRoLmFicyh0aGlzLmRlZ3JlZSAtIHRhcmdldERlZ3JlZSk7XHJcbiAgICBjb25zdCBkaWZmMiA9IE1hdGguYWJzKHRoaXMuZGVncmVlIC0gdGFyZ2V0RGVncmVlMik7XHJcblxyXG4gICAgaWYgKGRpZmYxIDwgZGlmZjIpIHtcclxuICAgICAgdGhpcy5yb3RhdGlvbkNsYXNzKHRhcmdldERlZ3JlZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJvdGF0aW9uQ2xhc3ModGFyZ2V0RGVncmVlMik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgR2V0U2VwYXJhdG9yICgpIHtcclxuICAgIGlmICh0aGlzLnByZWZlcmVuY2UgJiYgdGhpcy5wcmVmZXJlbmNlLnNlcGFyYXRvcikge1xyXG4gICAgICByZXR1cm4gdGhpcy5wcmVmZXJlbmNlLnNlcGFyYXRvcjtcclxuICAgIH1cclxuICAgIHJldHVybiAnOic7XHJcbiAgfVxyXG4gIHB1YmxpYyBHZXRQZXJpb2QgKHBlcmlvZDogJ0FNJyB8ICdQTScpIHtcclxuICAgIGlmICh0aGlzLnByZWZlcmVuY2UgJiYgdGhpcy5wcmVmZXJlbmNlLnBlcmlvZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wcmVmZXJlbmNlLnBlcmlvZChwZXJpb2QpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBlcmlvZDtcclxuICB9XHJcbiAgcHVibGljIEdldE1pbnV0ZSAoKSB7XHJcbiAgICBpZiAodGhpcy5wcmVmZXJlbmNlICYmIHRoaXMucHJlZmVyZW5jZS5taW51dGUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHJlZmVyZW5jZS5taW51dGUodGhpcy50aW1lLm1pbnV0ZSk7XHJcbiAgICB9XHJcbiAgICBsZXQgbWluOiBzdHJpbmcgPSB0aGlzLnRpbWUubWludXRlLnRvU3RyaW5nKCk7XHJcbiAgICBpZiAoK21pbiA8IDEwKSB7XHJcbiAgICAgIG1pbiA9ICcwJyArIG1pbjtcclxuICAgIH1cclxuICAgIHJldHVybiBtaW47XHJcbiAgfVxyXG4gIHB1YmxpYyBHZXRIb3VyICgpIHtcclxuICAgIGlmICh0aGlzLnByZWZlcmVuY2UgJiYgdGhpcy5wcmVmZXJlbmNlLmhvdXIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHJlZmVyZW5jZS5ob3VyKHRoaXMudGltZS5ob3VyKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnRpbWUuaG91cjtcclxuICB9XHJcbiAgcHVibGljIEdldENsb2NrVGltZShjbG9jazogSUNsb2NrTnVtYmVyKSB7XHJcbiAgICBpZiAoICEgdGhpcy5wcmVmZXJlbmNlKSB7XHJcbiAgICAgIHJldHVybiBjbG9jay50aW1lO1xyXG4gICAgfVxyXG4gICAgaWYgKCB0aGlzLmNsb2NrVHlwZSA9PT0gJ2hvdXInICYmIHRoaXMucHJlZmVyZW5jZS5jbG9ja0hvdXIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHJlZmVyZW5jZS5jbG9ja0hvdXIoY2xvY2sudGltZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIHRoaXMuY2xvY2tUeXBlID09PSAnbWludXRlJyAmJiB0aGlzLnByZWZlcmVuY2UuY2xvY2tNaW51dGUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHJlZmVyZW5jZS5jbG9ja01pbnV0ZShjbG9jay50aW1lKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjbG9jay50aW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIEdldExhYmVsIChrZXk6IHN0cmluZykge1xyXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XHJcbiAgICAgICdvayc6ICdPaycsXHJcbiAgICAgICdjYW5jZWwnOiAnQ2FuY2VsJ1xyXG4gICAgfTtcclxuICAgIGlmICgodGhpcy5wcmVmZXJlbmNlICYmIHRoaXMucHJlZmVyZW5jZS5sYWJlbHMgJiYgdGhpcy5wcmVmZXJlbmNlLmxhYmVscy5vaykpIHtcclxuICAgICAgZGVmYXVsdHMub2sgPSB0aGlzLnByZWZlcmVuY2UubGFiZWxzLm9rO1xyXG4gICAgfVxyXG4gICAgaWYgKCh0aGlzLnByZWZlcmVuY2UgJiYgdGhpcy5wcmVmZXJlbmNlLmxhYmVscyAmJiB0aGlzLnByZWZlcmVuY2UubGFiZWxzLmNhbmNlbCkpIHtcclxuICAgICAgZGVmYXVsdHMuY2FuY2VsID0gdGhpcy5wcmVmZXJlbmNlLmxhYmVscy5jYW5jZWw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGVmYXVsdHNba2V5XTtcclxuICB9XHJcbn1cclxuIl19