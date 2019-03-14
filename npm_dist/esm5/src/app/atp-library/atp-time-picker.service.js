/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector, ApplicationRef, ComponentFactoryResolver } from '@angular/core';
import { Subject } from 'rxjs';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { Preference } from './preferences';
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
        /** @type {?} */
        var _self = this;
        config = config || {};
        config = (/** @type {?} */ ({
            time: config.time || '00:00',
            theme: thems.indexOf(config.theme) > 0 ? config.theme : 'light' || config.theme || 'light',
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
export { AmazingTimePickerService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AmazingTimePickerService.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    AmazingTimePickerService.prototype.appRef;
    /**
     * @type {?}
     * @private
     */
    AmazingTimePickerService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRwLXRpbWUtcGlja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbWF6aW5nLXRpbWUtcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9hdHAtbGlicmFyeS9hdHAtdGltZS1waWNrZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLHdCQUF3QixFQUFtQixNQUFNLGVBQWUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFHRSxrQ0FDVSxRQUFrQyxFQUNsQyxNQUFzQixFQUN0QixRQUFrQjtRQUZsQixhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3pCLENBQUM7Ozs7O0lBRUosdUNBQUk7Ozs7SUFBSixVQUFNLE1BQXlCOztZQUN2QixLQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7O1lBQ2xILEtBQUssR0FBRyxJQUFJO1FBQ2xCLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLE1BQU0sR0FBRyxtQkFBQTtZQUNQLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxJQUFJLE9BQU87WUFDNUIsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxL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QyxRQUFRLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLE9BQU87WUFDTCxVQUFVOzs7WUFBRTtnQkFDVixPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzdDLENBQUMsQ0FBQTtTQUNGLENBQUM7SUFDSixDQUFDOztnQkExREYsVUFBVTs7OztnQkFOb0Msd0JBQXdCO2dCQUF4QyxjQUFjO2dCQUF4QixRQUFROztJQWlFN0IsK0JBQUM7Q0FBQSxBQTNERCxJQTJEQztTQTFEWSx3QkFBd0I7Ozs7OztJQUdqQyw0Q0FBMEM7Ozs7O0lBQzFDLDBDQUE4Qjs7Ozs7SUFDOUIsNENBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEVtYmVkZGVkVmlld1JlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFRpbWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3RpbWUtcGlja2VyL3RpbWUtcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRpbWVQaWNrZXJDb25maWcsIElEaWFsb2dSZXN1bHQgfSBmcm9tICcuL2RlZmluaXRpb25zJztcclxuaW1wb3J0IHsgUHJlZmVyZW5jZSB9IGZyb20gJy4vcHJlZmVyZW5jZXMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQW1hemluZ1RpbWVQaWNrZXJTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IgKFxyXG4gICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcclxuICApIHt9XHJcblxyXG4gIG9wZW4gKGNvbmZpZz86IFRpbWVQaWNrZXJDb25maWcpOiBJRGlhbG9nUmVzdWx0IHtcclxuICAgIGNvbnN0IHRoZW1zID0gWydsaWdodCcsICdkYXJrJywgJ21hdGVyaWFsLXJlZCcsICdtYXRlcmlhbC1ncmVlbicsICdtYXRlcmlhbC1ibHVlJywgJ21hdGVyaWFsLXB1cnBsZScsICdtYXRlcmlhbC1vcmFuZ2UnXTtcclxuICAgIGNvbnN0IF9zZWxmID0gdGhpcztcclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgdGltZTogY29uZmlnLnRpbWUgfHwgJzAwOjAwJyxcclxuICAgICAgdGhlbWU6IHRoZW1zLmluZGV4T2YoY29uZmlnLnRoZW1lKSA+IDAgPyBjb25maWcudGhlbWUgOiAnbGlnaHQnIHx8IGNvbmZpZy50aGVtZSB8fCAnbGlnaHQnLFxyXG4gICAgICByYW5nZVRpbWU6IGNvbmZpZy5yYW5nZVRpbWUgfHwge3N0YXJ0OiAnMDowJywgZW5kOiAnMjQ6MCd9LFxyXG4gICAgICBhcnJvd1N0eWxlOiBjb25maWcuYXJyb3dTdHlsZSB8fCB7fSxcclxuICAgICAgbG9jYWxlOiBjb25maWcubG9jYWxlIHx8ICdlbicsXHJcbiAgICAgIGNoYW5nZVRvTWludXRlczogY29uZmlnLmNoYW5nZVRvTWludXRlcyxcclxuICAgICAgYW5pbWF0aW9uOiAoY29uZmlnLmFuaW1hdGlvbiA9PSBudWxsIHx8IGNvbmZpZy5hbmltYXRpb24gPT09ICdmYWRlJykgPyAnZmFkZScgOiAoY29uZmlnLmFuaW1hdGlvbiA9PT0gJ3JvdGF0ZScpID8gJ3JvdGF0ZScgOiBmYWxzZSxcclxuICAgICAgcHJlZmVyZW5jZTogY29uZmlnLnByZWZlcmVuY2UgfHwgbnVsbCxcclxuICAgICAgb25seUhvdXI6IGNvbmZpZy5vbmx5SG91cixcclxuICAgICAgb25seU1pbnV0ZTogY29uZmlnLm9ubHlNaW51dGUsXHJcbiAgICAgIG9ubHlBTTogY29uZmlnLm9ubHlBTSxcclxuICAgICAgb25seVBNOiBjb25maWcub25seVBNLFxyXG4gICAgfSBhcyBUaW1lUGlja2VyQ29uZmlnO1xyXG4gICAgY29uZmlnLnJhbmdlVGltZSA9IHtcclxuICAgICAgc3RhcnQ6IGNvbmZpZy5yYW5nZVRpbWUuc3RhcnQgfHwgJzA6MCcsXHJcbiAgICAgIGVuZDogY29uZmlnLnJhbmdlVGltZS5lbmQgfHwgJzI0OjAnLFxyXG4gICAgfTtcclxuICAgIGNvbmZpZy5hcnJvd1N0eWxlID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAoY29uZmlnLmFycm93U3R5bGUuYmFja2dyb3VuZCkgP1xyXG4gICAgICBjb25maWcuYXJyb3dTdHlsZS5iYWNrZ3JvdW5kIDogY29uZmlnLnRoZW1lICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICBjb25maWcudGhlbWUgPT09ICdkYXJrJyA/ICdyZ2IoMTI4LCAyMDMsIDE5NiknIDogJycgOiAnJyxcclxuICAgICAgY29sb3I6IGNvbmZpZy5hcnJvd1N0eWxlLmNvbG9yIHx8ICcnXHJcbiAgICB9O1xyXG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShUaW1lUGlja2VyQ29tcG9uZW50KTtcclxuICAgIGNvbnN0IHRzYyA9IGNvbXBvbmVudFJlZi5jcmVhdGUodGhpcy5pbmplY3Rvcik7XHJcbiAgICB0aGlzLmFwcFJlZi5hdHRhY2hWaWV3KHRzYy5ob3N0Vmlldyk7XHJcbiAgICBjb25zdCBkb21FbGVtID0gKHRzYy5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pikucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21FbGVtKTtcclxuICAgIHRzYy5pbnN0YW5jZS5zdWJqZWN0ID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gICAgdHNjLmluc3RhbmNlLl9yZWYgPSB0c2M7XHJcbiAgICB0c2MuaW5zdGFuY2UuYXBwUmVmID0gdGhpcy5hcHBSZWY7XHJcbiAgICB0c2MuaW5zdGFuY2UudGltZXJFbGVtZW50ID0gJyc7XHJcbiAgICB0c2MuaW5zdGFuY2UuY29uZmlnID0gY29uZmlnO1xyXG4gICAgaWYgKGNvbmZpZy5wcmVmZXJlbmNlKSB7XHJcbiAgICAgIHRzYy5pbnN0YW5jZS5wcmVmZXJlbmNlID0gY29uZmlnLnByZWZlcmVuY2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0c2MuaW5zdGFuY2UucHJlZmVyZW5jZSA9IFByZWZlcmVuY2UoY29uZmlnLmxvY2FsZSk7XHJcbiAgICB9XHJcbiAgICB0c2MuaW5zdGFuY2UuUGFyc2VTdHJpbmdUb1RpbWUoY29uZmlnLnRpbWUpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYWZ0ZXJDbG9zZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0c2MuaW5zdGFuY2Uuc3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19