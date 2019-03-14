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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5pdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbWF6aW5nLXRpbWUtcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9hdHAtbGlicmFyeS9kZWZpbml0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQSxzQ0FvQkM7OztJQW5CQyxnQ0FBYzs7SUFDZCxpQ0FPc0I7O0lBQ3RCLHFDQUFzQjs7SUFDdEIsc0NBQXFCOztJQUNyQixrQ0FBZ0I7O0lBQ2hCLHNDQUFnQzs7SUFDaEMsMkNBQTBCOztJQUMxQixxQ0FBc0M7O0lBQ3RDLG9DQUFtQjs7SUFDbkIsc0NBQXFCOztJQUNyQixrQ0FBaUI7O0lBQ2pCLGtDQUFpQjs7Ozs7QUFHbkIsK0JBR0M7OztJQUZDLDBCQUFjOztJQUNkLHdCQUFZOzs7OztBQUdkLDZCQUdDOzs7SUFGQyw2QkFBb0I7O0lBQ3BCLHdCQUFlOzs7OztBQUdqQixtQ0FFQzs7Ozs7SUFEQyxxREFBaUM7Ozs7O0FBR25DLGtDQUtDOzs7SUFKQyw0QkFBYTs7SUFDYiw0QkFBYTs7SUFDYiwyQkFBWTs7SUFDWiw0QkFBYTs7Ozs7QUFHZix3Q0FXQzs7O0lBVkMsb0NBQWtCOztJQUNsQixrQ0FBZ0I7O0lBQ2hCLHVDQUFtQjs7SUFDbkIsb0NBR0U7Ozs7O0lBQ0YsNERBQTZCOzs7OztJQUM3QixpRUFBMEI7Ozs7O0lBQzFCLDZEQUFzQjs7Ozs7QUFHeEIsMkJBSUM7OztJQUhDLHVCQUFlOztJQUNmLHFCQUFhOztJQUNiLHFCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbi8qKlxyXG4gKiBBbWF6aW5nVGltZVBpY2tlciBjb25maWd1cmF0aW9uXHJcbiAqIHdoZW4gY2FsbGluZyBvcGVuKCkgZnVuY3Rpb24gZnJvbSAnQW1hemluZ1RpbWVQaWNrZXJTZXJ2aWNlJyBwYXNzZWQgYXMgcGFyYW1ldGVyXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVQaWNrZXJDb25maWcge1xyXG4gIHRpbWU/OiBzdHJpbmc7XHJcbiAgdGhlbWU/OlxyXG4gICAgfCAnZGFyaydcclxuICAgIHwgJ2xpZ2h0J1xyXG4gICAgfCAnbWF0ZXJpYWwtcmVkJ1xyXG4gICAgfCAnbWF0ZXJpYWwtZ3JlZW4nXHJcbiAgICB8ICdtYXRlcmlhbC1ibHVlJ1xyXG4gICAgfCAnbWF0ZXJpYWwtcHVycGxlJ1xyXG4gICAgfCAnbWF0ZXJpYWwtb3JhbmdlJztcclxuICByYW5nZVRpbWU/OiBSYW5nZVRpbWU7XHJcbiAgYXJyb3dTdHlsZT86IFBhbGxldGU7XHJcbiAgbG9jYWxlPzogc3RyaW5nO1xyXG4gIHByZWZlcmVuY2U/OiBJRGlzcGxheVByZWZlcmVuY2U7XHJcbiAgY2hhbmdlVG9NaW51dGVzPzogYm9vbGVhbjtcclxuICBhbmltYXRpb24/OiAnZmFkZScgfCAncm90YXRlJyB8IGZhbHNlO1xyXG4gIG9ubHlIb3VyPzogYm9vbGVhbjtcclxuICBvbmx5TWludXRlPzogYm9vbGVhbjtcclxuICBvbmx5QU0/OiBib29sZWFuO1xyXG4gIG9ubHlQTT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmFuZ2VUaW1lIHtcclxuICBzdGFydDogc3RyaW5nO1xyXG4gIGVuZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhbGxldGUge1xyXG4gIGJhY2tncm91bmQ/OiBzdHJpbmc7XHJcbiAgY29sb3I/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURpYWxvZ1Jlc3VsdCB7XHJcbiAgYWZ0ZXJDbG9zZSgpOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNsb2NrTnVtYmVyIHtcclxuICB0aW1lOiBTdHJpbmc7XHJcbiAgbGVmdDogc3RyaW5nO1xyXG4gIHRvcDogc3RyaW5nO1xyXG4gIHR5cGU6IFN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGlzcGxheVByZWZlcmVuY2Uge1xyXG4gIG1pbnV0ZT86IEZ1bmN0aW9uO1xyXG4gIGhvdXI/OiBGdW5jdGlvbjtcclxuICBzZXBhcmF0b3I/OiBzdHJpbmc7XHJcbiAgbGFiZWxzPzoge1xyXG4gICAgb2s/OiBzdHJpbmc7XHJcbiAgICBjYW5jZWw/OiBzdHJpbmc7XHJcbiAgfTtcclxuICBwZXJpb2Q/KHBlcmlvZDogJ0FNJyB8ICdQTScpO1xyXG4gIGNsb2NrTWludXRlPyhtaW51dGU6IGFueSk7XHJcbiAgY2xvY2tIb3VyPyhob3VyOiBhbnkpO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUaW1lIHtcclxuICBtaW51dGU6IG51bWJlcjtcclxuICBob3VyOiBudW1iZXI7XHJcbiAgYW1wbTogJ0FNJyB8ICdQTSc7XHJcbn1cclxuIl19