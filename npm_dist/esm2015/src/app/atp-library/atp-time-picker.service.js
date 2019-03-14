/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector, ApplicationRef, ComponentFactoryResolver } from '@angular/core';
import { Subject } from 'rxjs';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { Preference } from './preferences';
export class AmazingTimePickerService {
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
        /** @type {?} */
        const _self = this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRwLXRpbWUtcGlja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbWF6aW5nLXRpbWUtcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9hdHAtbGlicmFyeS9hdHAtdGltZS1waWNrZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLHdCQUF3QixFQUFtQixNQUFNLGVBQWUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7O0lBRW5DLFlBQ1UsUUFBa0MsRUFDbEMsTUFBc0IsRUFDdEIsUUFBa0I7UUFGbEIsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFDbEMsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN6QixDQUFDOzs7OztJQUVKLElBQUksQ0FBRSxNQUF5Qjs7Y0FDdkIsS0FBSyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDOztjQUNsSCxLQUFLLEdBQUcsSUFBSTtRQUNsQixNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixNQUFNLEdBQUcsbUJBQUE7WUFDUCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksSUFBSSxPQUFPO1lBQzVCLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFB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UUFDRCxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxPQUFPO1lBQ0wsVUFBVTs7O1lBQUU7Z0JBQ1YsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM3QyxDQUFDLENBQUE7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBMURGLFVBQVU7Ozs7WUFOb0Msd0JBQXdCO1lBQXhDLGNBQWM7WUFBeEIsUUFBUTs7Ozs7OztJQVV6Qiw0Q0FBMEM7Ozs7O0lBQzFDLDBDQUE4Qjs7Ozs7SUFDOUIsNENBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEVtYmVkZGVkVmlld1JlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFRpbWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3RpbWUtcGlja2VyL3RpbWUtcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRpbWVQaWNrZXJDb25maWcsIElEaWFsb2dSZXN1bHQgfSBmcm9tICcuL2RlZmluaXRpb25zJztcclxuaW1wb3J0IHsgUHJlZmVyZW5jZSB9IGZyb20gJy4vcHJlZmVyZW5jZXMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQW1hemluZ1RpbWVQaWNrZXJTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IgKFxyXG4gICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcclxuICApIHt9XHJcblxyXG4gIG9wZW4gKGNvbmZpZz86IFRpbWVQaWNrZXJDb25maWcpOiBJRGlhbG9nUmVzdWx0IHtcclxuICAgIGNvbnN0IHRoZW1zID0gWydsaWdodCcsICdkYXJrJywgJ21hdGVyaWFsLXJlZCcsICdtYXRlcmlhbC1ncmVlbicsICdtYXRlcmlhbC1ibHVlJywgJ21hdGVyaWFsLXB1cnBsZScsICdtYXRlcmlhbC1vcmFuZ2UnXTtcclxuICAgIGNvbnN0IF9zZWxmID0gdGhpcztcclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgdGltZTogY29uZmlnLnRpbWUgfHwgJzAwOjAwJyxcclxuICAgICAgdGhlbWU6IHRoZW1zLmluZGV4T2YoY29uZmlnLnRoZW1lKSA+IDAgPyBjb25maWcudGhlbWUgOiAnbGlnaHQnIHx8IGNvbmZpZy50aGVtZSB8fCAnbGlnaHQnLFxyXG4gICAgICByYW5nZVRpbWU6IGNvbmZpZy5yYW5nZVRpbWUgfHwge3N0YXJ0OiAnMDowJywgZW5kOiAnMjQ6MCd9LFxyXG4gICAgICBhcnJvd1N0eWxlOiBjb25maWcuYXJyb3dTdHlsZSB8fCB7fSxcclxuICAgICAgbG9jYWxlOiBjb25maWcubG9jYWxlIHx8ICdlbicsXHJcbiAgICAgIGNoYW5nZVRvTWludXRlczogY29uZmlnLmNoYW5nZVRvTWludXRlcyxcclxuICAgICAgYW5pbWF0aW9uOiAoY29uZmlnLmFuaW1hdGlvbiA9PSBudWxsIHx8IGNvbmZpZy5hbmltYXRpb24gPT09ICdmYWRlJykgPyAnZmFkZScgOiAoY29uZmlnLmFuaW1hdGlvbiA9PT0gJ3JvdGF0ZScpID8gJ3JvdGF0ZScgOiBmYWxzZSxcclxuICAgICAgcHJlZmVyZW5jZTogY29uZmlnLnByZWZlcmVuY2UgfHwgbnVsbCxcclxuICAgICAgb25seUhvdXI6IGNvbmZpZy5vbmx5SG91cixcclxuICAgICAgb25seU1pbnV0ZTogY29uZmlnLm9ubHlNaW51dGUsXHJcbiAgICAgIG9ubHlBTTogY29uZmlnLm9ubHlBTSxcclxuICAgICAgb25seVBNOiBjb25maWcub25seVBNLFxyXG4gICAgfSBhcyBUaW1lUGlja2VyQ29uZmlnO1xyXG4gICAgY29uZmlnLnJhbmdlVGltZSA9IHtcclxuICAgICAgc3RhcnQ6IGNvbmZpZy5yYW5nZVRpbWUuc3RhcnQgfHwgJzA6MCcsXHJcbiAgICAgIGVuZDogY29uZmlnLnJhbmdlVGltZS5lbmQgfHwgJzI0OjAnLFxyXG4gICAgfTtcclxuICAgIGNvbmZpZy5hcnJvd1N0eWxlID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAoY29uZmlnLmFycm93U3R5bGUuYmFja2dyb3VuZCkgP1xyXG4gICAgICBjb25maWcuYXJyb3dTdHlsZS5iYWNrZ3JvdW5kIDogY29uZmlnLnRoZW1lICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICBjb25maWcudGhlbWUgPT09ICdkYXJrJyA/ICdyZ2IoMTI4LCAyMDMsIDE5NiknIDogJycgOiAnJyxcclxuICAgICAgY29sb3I6IGNvbmZpZy5hcnJvd1N0eWxlLmNvbG9yIHx8ICcnXHJcbiAgICB9O1xyXG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShUaW1lUGlja2VyQ29tcG9uZW50KTtcclxuICAgIGNvbnN0IHRzYyA9IGNvbXBvbmVudFJlZi5jcmVhdGUodGhpcy5pbmplY3Rvcik7XHJcbiAgICB0aGlzLmFwcFJlZi5hdHRhY2hWaWV3KHRzYy5ob3N0Vmlldyk7XHJcbiAgICBjb25zdCBkb21FbGVtID0gKHRzYy5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pikucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21FbGVtKTtcclxuICAgIHRzYy5pbnN0YW5jZS5zdWJqZWN0ID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gICAgdHNjLmluc3RhbmNlLl9yZWYgPSB0c2M7XHJcbiAgICB0c2MuaW5zdGFuY2UuYXBwUmVmID0gdGhpcy5hcHBSZWY7XHJcbiAgICB0c2MuaW5zdGFuY2UudGltZXJFbGVtZW50ID0gJyc7XHJcbiAgICB0c2MuaW5zdGFuY2UuY29uZmlnID0gY29uZmlnO1xyXG4gICAgaWYgKGNvbmZpZy5wcmVmZXJlbmNlKSB7XHJcbiAgICAgIHRzYy5pbnN0YW5jZS5wcmVmZXJlbmNlID0gY29uZmlnLnByZWZlcmVuY2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0c2MuaW5zdGFuY2UucHJlZmVyZW5jZSA9IFByZWZlcmVuY2UoY29uZmlnLmxvY2FsZSk7XHJcbiAgICB9XHJcbiAgICB0c2MuaW5zdGFuY2UuUGFyc2VTdHJpbmdUb1RpbWUoY29uZmlnLnRpbWUpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYWZ0ZXJDbG9zZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0c2MuaW5zdGFuY2Uuc3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19