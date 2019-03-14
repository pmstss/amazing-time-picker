import { CommonModule } from '@angular/common';
import { __read } from 'tslib';
import { Subject } from 'rxjs';
import { Injectable, Component, ViewChild, ViewContainerRef, Output, ComponentFactoryResolver, ApplicationRef, EventEmitter, Injector, Directive, HostListener, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        var _a = __read(time.split(':'), 2), h = _a[0], m = _a[1];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AtpTimePickerComponent = /** @class */ (function () {
    function AtpTimePickerComponent(resolver, appRef) {
        this.resolver = resolver;
        this.appRef = appRef;
        this.timeSelected = new EventEmitter();
        this.config = {};
    }
    /**
     * @return {?}
     */
    AtpTimePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var config = this.config;
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
        var cfr = this.resolver.resolveComponentFactory(TimePickerComponent);
        /** @type {?} */
        var tsc = this.container.createComponent(cfr);
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
        function (time) {
            _this.timeSelected.emit(time);
        }));
    };
    AtpTimePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'atp-time-picker',
                    template: "<div #container></div>",
                    styles: [".atp-time-picker .icon-container{display:inline-block;margin-right:.2em}.atp-time-picker .icon-container svg{cursor:pointer;position:relative;top:.5em}.atp-time-picker .icon-container /deep/ i{cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    AtpTimePickerComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef }
    ]; };
    AtpTimePickerComponent.propDecorators = {
        container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] }],
        timeSelected: [{ type: Output }]
    };
    return AtpTimePickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var arabic = new Intl.NumberFormat('ar-AE');
/** @type {?} */
var persian = new Intl.NumberFormat('fa-IR');
/** @type {?} */
var PersianPreference = {
    hour: (/**
     * @param {?} x
     * @return {?}
     */
    function (x) { return persian.format(x); }),
    minute: (/**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        /** @type {?} */
        var exp = persian.format(x);
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
    function (x) { return x === 'AM' ? 'صبح' : 'عصر'; }),
    clockHour: (/**
     * @param {?} x
     * @return {?}
     */
    function (x) { return persian.format(x); }),
    clockMinute: (/**
     * @param {?} x
     * @return {?}
     */
    function (x) { return persian.format(x); }),
    labels: {
        ok: 'تایید',
        cancel: 'لغو'
    }
};
/** @type {?} */
var ArabicPreference = {
    hour: (/**
     * @param {?} x
     * @return {?}
     */
    function (x) { return arabic.format(x); }),
    minute: (/**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        /** @type {?} */
        var exp = arabic.format(x);
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
    function (x) { return x === 'AM' ? 'صباحا' : 'مساء'; }),
    clockHour: (/**
     * @param {?} x
     * @return {?}
     */
    function (x) { return arabic.format(x); }),
    clockMinute: (/**
     * @param {?} x
     * @return {?}
     */
    function (x) { return arabic.format(x); }),
    labels: {
        ok: 'حسنا',
        cancel: 'إلغاء'
    }
};
/** @type {?} */
var ChinesePreference = {
    hour: (/**
     * @param {?} x
     * @return {?}
     */
    function (x) { return x; }),
    minute: (/**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        /** @type {?} */
        var exp = x;
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
    function (x) { return x === 'AM' ? '上午' : '下午'; }),
    clockHour: (/**
     * @param {?} x
     * @return {?}
     */
    function (x) { return x; }),
    clockMinute: (/**
     * @param {?} x
     * @return {?}
     */
    function (x) { return x; }),
    labels: {
        ok: '确定',
        cancel: '取消'
    }
};
/** @type {?} */
var Preference = (/**
 * @param {?} locale
 * @return {?}
 */
function (locale) {
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
var AmazingTimePickerService = /** @class */ (function () {
    function AmazingTimePickerService(resolver, appRef, injector) {
        this.resolver = resolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    AmazingTimePickerService.prototype.open = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var thems = ['light', 'dark', 'material-red', 'material-green', 'material-blue', 'material-purple', 'material-orange'];
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
        var componentRef = this.resolver.resolveComponentFactory(TimePickerComponent);
        /** @type {?} */
        var tsc = componentRef.create(this.injector);
        this.appRef.attachView(tsc.hostView);
        /** @type {?} */
        var domElem = (/** @type {?} */ (((/** @type {?} */ (tsc.hostView))).rootNodes[0]));
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
    };
    AmazingTimePickerService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AmazingTimePickerService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector }
    ]; };
    return AmazingTimePickerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AtpDirective = /** @class */ (function () {
    function AtpDirective(viewContainerRef, atp) {
        this.viewContainerRef = viewContainerRef;
        this.atp = atp;
        this.myClick = new EventEmitter();
        this.onChange = (/**
         * @param {?} x
         * @return {?}
         */
        function (x) { });
        this.elementRef = this.viewContainerRef.element;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    AtpDirective.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        /** @type {?} */
        var ele = this.viewContainerRef.element.nativeElement;
        /** @type {?} */
        var time = ele.value;
        /** @type {?} */
        var theme = ele.getAttribute('theme');
        /** @type {?} */
        var start = ele.getAttribute('start');
        /** @type {?} */
        var end = ele.getAttribute('end');
        /** @type {?} */
        var locale = ele.getAttribute('locale') || 'en';
        /** @type {?} */
        var changeToMinutes = ele.getAttribute('changeToMinutes') === 'true';
        /** @type {?} */
        var animation = ele.getAttribute('animation');
        /** @type {?} */
        var preference = ele.getAttribute('preference') || null;
        /** @type {?} */
        var onlyHour = ele.getAttribute('onlyHour') === 'true';
        /** @type {?} */
        var onlyMinute = ele.getAttribute('onlyMinute') === 'true';
        /** @type {?} */
        var onlyAM = ele.getAttribute('onlyAM') === 'true';
        /** @type {?} */
        var onlyPM = ele.getAttribute('onlyPM') === 'true';
        /** @type {?} */
        var arrowStyle = ele.getAttribute('arrowStyle');
        arrowStyle = (arrowStyle) ? JSON.parse(arrowStyle.replace(new RegExp('\'', 'g'), '"')) : '';
        /** @type {?} */
        var timePickerFunction = this.atp.open({
            time: time,
            theme: theme,
            rangeTime: { start: start, end: end },
            'arrowStyle': arrowStyle,
            locale: locale,
            changeToMinutes: changeToMinutes,
            animation: animation,
            onlyHour: onlyHour,
            onlyMinute: onlyMinute,
            onlyAM: onlyAM,
            onlyPM: onlyPM,
            preference: preference
        });
        timePickerFunction.afterClose().subscribe((/**
         * @param {?} retTime
         * @return {?}
         */
        function (retTime) {
            _this.writeValue(retTime); // update the native element
            _this.onChange(retTime); // update the form value (if there's a form)
        }));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    AtpDirective.prototype.onInput = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.onChange(e.srcElement.value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AtpDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.elementRef) {
            this.elementRef.nativeElement.value = value;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AtpDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AtpDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { };
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
    AtpDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: AmazingTimePickerService }
    ]; };
    AtpDirective.propDecorators = {
        myClick: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
        onInput: [{ type: HostListener, args: ['input', ['$event'],] }]
    };
    return AtpDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AmazingTimePickerModule = /** @class */ (function () {
    function AmazingTimePickerModule() {
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
    return AmazingTimePickerModule;
}());

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