/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ViewContainerRef, Output, ComponentFactoryResolver, ApplicationRef, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { TimePickerComponent } from '../time-picker/time-picker.component';
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
            theme: ['light', 'dark', 'material'].indexOf(config.theme) > 0 ? config.theme : 'light' || config.theme || 'light',
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
export { AtpTimePickerComponent };
if (false) {
    /** @type {?} */
    AtpTimePickerComponent.prototype.container;
    /** @type {?} */
    AtpTimePickerComponent.prototype.timeSelected;
    /** @type {?} */
    AtpTimePickerComponent.prototype.config;
    /**
     * @type {?}
     * @private
     */
    AtpTimePickerComponent.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    AtpTimePickerComponent.prototype.appRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRwLXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FtYXppbmctdGltZS1waWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL2F0cC1saWJyYXJ5L2F0cC10aW1lLXBpY2tlci9hdHAtdGltZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsd0JBQXdCLEVBQVUsY0FBYyxFQUFFLFlBQVksRUFDdEgsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUczRTtJQVdFLGdDQUNVLFFBQWtDLEVBQ2xDLE1BQXNCO1FBRHRCLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQ2xDLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBTHRCLGlCQUFZLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDbkUsV0FBTSxHQUFxQixFQUFFLENBQUM7SUFLbEMsQ0FBQzs7OztJQUVKLHlDQUFROzs7SUFBUjtRQUFBLGlCQTJCQzs7WUExQkssTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNO1FBQ3hCLE1BQU0sR0FBRztZQUNQLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxJQUFJLE9BQU87WUFDNUIsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksT0FBTztZQUNsSCxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVMsSUFBSSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBQztZQUMxRCxVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVUsSUFBSSxFQUFFO1NBQ3BDLENBQUM7UUFDRixNQUFNLENBQUMsVUFBVSxHQUFHO1lBQ2xCLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDNUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUM7Z0JBQzNELE1BQU0sQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNO1lBQ2hFLEtBQUssRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssSUFBSSxNQUFNO1NBQ3pDLENBQUM7O1lBQ0ksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsbUJBQW1CLENBQUM7O1lBQ2hFLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUM7UUFDL0MsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUMxQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDeEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNsQyxHQUFHLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDL0IsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzdCLEdBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUNoQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDN0IsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsSUFBSTtZQUNoRCxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQTNDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0Isa0NBQStDOztpQkFFaEQ7Ozs7Z0JBVndELHdCQUF3QjtnQkFBVSxjQUFjOzs7NEJBYXRHLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7K0JBQ2pELE1BQU07O0lBb0NULDZCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0F0Q1ksc0JBQXNCOzs7SUFDakMsMkNBQWdGOztJQUNoRiw4Q0FBMEU7O0lBQzFFLHdDQUFxQzs7Ozs7SUFHbkMsMENBQTBDOzs7OztJQUMxQyx3Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiwgT3V0cHV0LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIE9uSW5pdCwgQXBwbGljYXRpb25SZWYsIEV2ZW50RW1pdHRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFRpbWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuLi90aW1lLXBpY2tlci90aW1lLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUaW1lUGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhdHAtdGltZS1waWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hdHAtdGltZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2F0cC10aW1lLXBpY2tlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXRwVGltZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcclxuICBAT3V0cHV0KCkgdGltZVNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIHB1YmxpYyBjb25maWc6IFRpbWVQaWNrZXJDb25maWcgPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGxldCBjb25maWcgPSB0aGlzLmNvbmZpZztcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgdGltZTogY29uZmlnLnRpbWUgfHwgJzAwOjAwJyxcclxuICAgICAgdGhlbWU6IFsnbGlnaHQnLCAnZGFyaycsICdtYXRlcmlhbCddLmluZGV4T2YoY29uZmlnLnRoZW1lKSA+IDAgPyBjb25maWcudGhlbWUgOiAnbGlnaHQnIHx8IGNvbmZpZy50aGVtZSB8fCAnbGlnaHQnLFxyXG4gICAgICByYW5nZVRpbWU6IGNvbmZpZy5yYW5nZVRpbWUgfHwge3N0YXJ0OiAnMDowJywgZW5kOiAnMjQ6MCd9LFxyXG4gICAgICBhcnJvd1N0eWxlOiBjb25maWcuYXJyb3dTdHlsZSB8fCB7fVxyXG4gICAgfTtcclxuICAgIGNvbmZpZy5hcnJvd1N0eWxlID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAoY29uZmlnLmFycm93U3R5bGUuYmFja2dyb3VuZCkgP1xyXG4gICAgICBjb25maWcuYXJyb3dTdHlsZS5iYWNrZ3JvdW5kIDogY29uZmlnLnRoZW1lICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICBjb25maWcudGhlbWUgPT09ICdkYXJrJyA/ICdyZ2IoMTI4LCAyMDMsIDE5NiknIDogJ2JsdWUnIDogJ2JsdWUnLFxyXG4gICAgICBjb2xvcjogY29uZmlnLmFycm93U3R5bGUuY29sb3IgfHwgJyNmZmYnXHJcbiAgICB9O1xyXG4gICAgY29uc3QgY2ZyID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShUaW1lUGlja2VyQ29tcG9uZW50KTtcclxuICAgIGNvbnN0IHRzYyA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjZnIpO1xyXG4gICAgdHNjLmluc3RhbmNlLnN1YmplY3QgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgICB0c2MuaW5zdGFuY2UuX3JlZiA9IHRzYztcclxuICAgIHRzYy5pbnN0YW5jZS5hcHBSZWYgPSB0aGlzLmFwcFJlZjtcclxuICAgIHRzYy5pbnN0YW5jZS50aW1lckVsZW1lbnQgPSAnJztcclxuICAgIHRzYy5pbnN0YW5jZS5jb25maWcgPSBjb25maWc7XHJcbiAgICB0c2MuaW5zdGFuY2UuYWN0aXZlTW9kYWwgPSB0cnVlO1xyXG4gICAgdHNjLmluc3RhbmNlLmlzUG9wdXAgPSBmYWxzZTtcclxuICAgIHRzYy5pbnN0YW5jZS5QYXJzZVN0cmluZ1RvVGltZShjb25maWcudGltZSk7XHJcbiAgICB0c2MuaW5zdGFuY2Uuc3ViamVjdC5hc09ic2VydmFibGUoKS5zdWJzY3JpYmUodGltZSA9PiB7XHJcbiAgICAgIHRoaXMudGltZVNlbGVjdGVkLmVtaXQodGltZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19