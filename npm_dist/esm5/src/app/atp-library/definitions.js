/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * AmazingTimePicker configuration
 * when calling open() function from 'AmazingTimePickerService' passed as parameter
 * @record
 */
export function TimePickerConfig() { }
if (false) {
    /** @type {?|undefined} */
    TimePickerConfig.prototype.time;
    /** @type {?|undefined} */
    TimePickerConfig.prototype.theme;
    /** @type {?|undefined} */
    TimePickerConfig.prototype.rangeTime;
    /** @type {?|undefined} */
    TimePickerConfig.prototype.arrowStyle;
    /** @type {?|undefined} */
    TimePickerConfig.prototype.locale;
    /** @type {?|undefined} */
    TimePickerConfig.prototype.preference;
    /** @type {?|undefined} */
    TimePickerConfig.prototype.changeToMinutes;
    /** @type {?|undefined} */
    TimePickerConfig.prototype.animation;
    /** @type {?|undefined} */
    TimePickerConfig.prototype.onlyHour;
    /** @type {?|undefined} */
    TimePickerConfig.prototype.onlyMinute;
    /** @type {?|undefined} */
    TimePickerConfig.prototype.onlyAM;
    /** @type {?|undefined} */
    TimePickerConfig.prototype.onlyPM;
}
/**
 * @record
 */
export function RangeTime() { }
if (false) {
    /** @type {?} */
    RangeTime.prototype.start;
    /** @type {?} */
    RangeTime.prototype.end;
}
/**
 * @record
 */
export function Pallete() { }
if (false) {
    /** @type {?|undefined} */
    Pallete.prototype.background;
    /** @type {?|undefined} */
    Pallete.prototype.color;
}
/**
 * @record
 */
export function IDialogResult() { }
if (false) {
    /**
     * @return {?}
     */
    IDialogResult.prototype.afterClose = function () { };
}
/**
 * @record
 */
export function IClockNumber() { }
if (false) {
    /** @type {?} */
    IClockNumber.prototype.time;
    /** @type {?} */
    IClockNumber.prototype.left;
    /** @type {?} */
    IClockNumber.prototype.top;
    /** @type {?} */
    IClockNumber.prototype.type;
}
/**
 * @record
 */
export function IDisplayPreference() { }
if (false) {
    /** @type {?|undefined} */
    IDisplayPreference.prototype.minute;
    /** @type {?|undefined} */
    IDisplayPreference.prototype.hour;
    /** @type {?|undefined} */
    IDisplayPreference.prototype.separator;
    /** @type {?|undefined} */
    IDisplayPreference.prototype.labels;
    /**
     * @param {?} period
     * @return {?}
     */
    IDisplayPreference.prototype.period = function (period) { };
    /**
     * @param {?} minute
     * @return {?}
     */
    IDisplayPreference.prototype.clockMinute = function (minute) { };
    /**
     * @param {?} hour
     * @return {?}
     */
    IDisplayPreference.prototype.clockHour = function (hour) { };
}
/**
 * @record
 */
export function ITime() { }
if (false) {
    /** @type {?} */
    ITime.prototype.minute;
    /** @type {?} */
    ITime.prototype.hour;
    /** @type {?} */
    ITime.prototype.ampm;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5pdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbWF6aW5nLXRpbWUtcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9hdHAtbGlicmFyeS9kZWZpbml0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQSxzQ0FvQkM7OztJQW5CQyxnQ0FBYzs7SUFDZCxpQ0FPc0I7O0lBQ3RCLHFDQUFzQjs7SUFDdEIsc0NBQXFCOztJQUNyQixrQ0FBZ0I7O0lBQ2hCLHNDQUFnQzs7SUFDaEMsMkNBQTBCOztJQUMxQixxQ0FBc0M7O0lBQ3RDLG9DQUFtQjs7SUFDbkIsc0NBQXFCOztJQUNyQixrQ0FBaUI7O0lBQ2pCLGtDQUFpQjs7Ozs7QUFHbkIsK0JBR0M7OztJQUZDLDBCQUFjOztJQUNkLHdCQUFZOzs7OztBQUdkLDZCQUdDOzs7SUFGQyw2QkFBb0I7O0lBQ3BCLHdCQUFlOzs7OztBQUdqQixtQ0FFQzs7Ozs7SUFEQyxxREFBaUM7Ozs7O0FBR25DLGtDQUtDOzs7SUFKQyw0QkFBYTs7SUFDYiw0QkFBYTs7SUFDYiwyQkFBWTs7SUFDWiw0QkFBYTs7Ozs7QUFHZix3Q0FXQzs7O0lBVkMsb0NBQWtCOztJQUNsQixrQ0FBZ0I7O0lBQ2hCLHVDQUFtQjs7SUFDbkIsb0NBR0U7Ozs7O0lBQ0YsNERBQTZCOzs7OztJQUM3QixpRUFBMEI7Ozs7O0lBQzFCLDZEQUFzQjs7Ozs7QUFHeEIsMkJBSUM7OztJQUhDLHVCQUFlOztJQUNmLHFCQUFhOztJQUNiLHFCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuLyoqXHJcbiAqIEFtYXppbmdUaW1lUGlja2VyIGNvbmZpZ3VyYXRpb25cclxuICogd2hlbiBjYWxsaW5nIG9wZW4oKSBmdW5jdGlvbiBmcm9tICdBbWF6aW5nVGltZVBpY2tlclNlcnZpY2UnIHBhc3NlZCBhcyBwYXJhbWV0ZXJcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGltZVBpY2tlckNvbmZpZyB7XHJcbiAgdGltZT86IHN0cmluZztcclxuICB0aGVtZT86XHJcbiAgICB8ICdkYXJrJ1xyXG4gICAgfCAnbGlnaHQnXHJcbiAgICB8ICdtYXRlcmlhbC1yZWQnXHJcbiAgICB8ICdtYXRlcmlhbC1ncmVlbidcclxuICAgIHwgJ21hdGVyaWFsLWJsdWUnXHJcbiAgICB8ICdtYXRlcmlhbC1wdXJwbGUnXHJcbiAgICB8ICdtYXRlcmlhbC1vcmFuZ2UnO1xyXG4gIHJhbmdlVGltZT86IFJhbmdlVGltZTtcclxuICBhcnJvd1N0eWxlPzogUGFsbGV0ZTtcclxuICBsb2NhbGU/OiBzdHJpbmc7XHJcbiAgcHJlZmVyZW5jZT86IElEaXNwbGF5UHJlZmVyZW5jZTtcclxuICBjaGFuZ2VUb01pbnV0ZXM/OiBib29sZWFuO1xyXG4gIGFuaW1hdGlvbj86ICdmYWRlJyB8ICdyb3RhdGUnIHwgZmFsc2U7XHJcbiAgb25seUhvdXI/OiBib29sZWFuO1xyXG4gIG9ubHlNaW51dGU/OiBib29sZWFuO1xyXG4gIG9ubHlBTT86IGJvb2xlYW47XHJcbiAgb25seVBNPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSYW5nZVRpbWUge1xyXG4gIHN0YXJ0OiBzdHJpbmc7XHJcbiAgZW5kOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFsbGV0ZSB7XHJcbiAgYmFja2dyb3VuZD86IHN0cmluZztcclxuICBjb2xvcj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGlhbG9nUmVzdWx0IHtcclxuICBhZnRlckNsb3NlKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2xvY2tOdW1iZXIge1xyXG4gIHRpbWU6IFN0cmluZztcclxuICBsZWZ0OiBzdHJpbmc7XHJcbiAgdG9wOiBzdHJpbmc7XHJcbiAgdHlwZTogU3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEaXNwbGF5UHJlZmVyZW5jZSB7XHJcbiAgbWludXRlPzogRnVuY3Rpb247XHJcbiAgaG91cj86IEZ1bmN0aW9uO1xyXG4gIHNlcGFyYXRvcj86IHN0cmluZztcclxuICBsYWJlbHM/OiB7XHJcbiAgICBvaz86IHN0cmluZztcclxuICAgIGNhbmNlbD86IHN0cmluZztcclxuICB9O1xyXG4gIHBlcmlvZD8ocGVyaW9kOiAnQU0nIHwgJ1BNJyk7XHJcbiAgY2xvY2tNaW51dGU/KG1pbnV0ZTogYW55KTtcclxuICBjbG9ja0hvdXI/KGhvdXI6IGFueSk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRpbWUge1xyXG4gIG1pbnV0ZTogbnVtYmVyO1xyXG4gIGhvdXI6IG51bWJlcjtcclxuICBhbXBtOiAnQU0nIHwgJ1BNJztcclxufVxyXG4iXX0=