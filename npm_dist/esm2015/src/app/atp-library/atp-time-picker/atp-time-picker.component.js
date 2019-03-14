/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ViewContainerRef, Output, ComponentFactoryResolver, ApplicationRef, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { TimePickerComponent } from '../time-picker/time-picker.component';
export class AtpTimePickerComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRwLXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FtYXppbmctdGltZS1waWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL2F0cC1saWJyYXJ5L2F0cC10aW1lLXBpY2tlci9hdHAtdGltZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsd0JBQXdCLEVBQVUsY0FBYyxFQUFFLFlBQVksRUFDdEgsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQVMzRSxNQUFNLE9BQU8sc0JBQXNCOzs7OztJQUtqQyxZQUNVLFFBQWtDLEVBQ2xDLE1BQXNCO1FBRHRCLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQ2xDLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBTHRCLGlCQUFZLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDbkUsV0FBTSxHQUFxQixFQUFFLENBQUM7SUFLbEMsQ0FBQzs7OztJQUVKLFFBQVE7O1lBQ0YsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNO1FBQ3hCLE1BQU0sR0FBRztZQUNQLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxJQUFJLE9BQU87WUFDNUIsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksT0FBTztZQUNsSCxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVMsSUFBSSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBQztZQUMxRCxVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVUsSUFBSSxFQUFFO1NBQ3BDLENBQUM7UUFDRixNQUFNLENBQUMsVUFBVSxHQUFHO1lBQ2xCLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDNUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUM7Z0JBQzNELE1BQU0sQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNO1lBQ2hFLEtBQUssRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssSUFBSSxNQUFNO1NBQ3pDLENBQUM7O2NBQ0ksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsbUJBQW1CLENBQUM7O2NBQ2hFLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUM7UUFDL0MsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUMxQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDeEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNsQyxHQUFHLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDL0IsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzdCLEdBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUNoQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDN0IsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25ELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBM0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixrQ0FBK0M7O2FBRWhEOzs7O1lBVndELHdCQUF3QjtZQUFVLGNBQWM7Ozt3QkFhdEcsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTsyQkFDakQsTUFBTTs7OztJQURQLDJDQUFnRjs7SUFDaEYsOENBQTBFOztJQUMxRSx3Q0FBcUM7Ozs7O0lBR25DLDBDQUEwQzs7Ozs7SUFDMUMsd0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYsIE91dHB1dCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBPbkluaXQsIEFwcGxpY2F0aW9uUmVmLCBFdmVudEVtaXR0ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBUaW1lUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi4vdGltZS1waWNrZXIvdGltZS1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGltZVBpY2tlckNvbmZpZyB9IGZyb20gJy4uL2RlZmluaXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXRwLXRpbWUtcGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXRwLXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hdHAtdGltZS1waWNrZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEF0cFRpbWVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XHJcbiAgQE91dHB1dCgpIHRpbWVTZWxlY3RlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBwdWJsaWMgY29uZmlnOiBUaW1lUGlja2VyQ29uZmlnID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBsZXQgY29uZmlnID0gdGhpcy5jb25maWc7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIHRpbWU6IGNvbmZpZy50aW1lIHx8ICcwMDowMCcsXHJcbiAgICAgIHRoZW1lOiBbJ2xpZ2h0JywgJ2RhcmsnLCAnbWF0ZXJpYWwnXS5pbmRleE9mKGNvbmZpZy50aGVtZSkgPiAwID8gY29uZmlnLnRoZW1lIDogJ2xpZ2h0JyB8fCBjb25maWcudGhlbWUgfHwgJ2xpZ2h0JyxcclxuICAgICAgcmFuZ2VUaW1lOiBjb25maWcucmFuZ2VUaW1lIHx8IHtzdGFydDogJzA6MCcsIGVuZDogJzI0OjAnfSxcclxuICAgICAgYXJyb3dTdHlsZTogY29uZmlnLmFycm93U3R5bGUgfHwge31cclxuICAgIH07XHJcbiAgICBjb25maWcuYXJyb3dTdHlsZSA9IHtcclxuICAgICAgYmFja2dyb3VuZDogKGNvbmZpZy5hcnJvd1N0eWxlLmJhY2tncm91bmQpID9cclxuICAgICAgY29uZmlnLmFycm93U3R5bGUuYmFja2dyb3VuZCA6IGNvbmZpZy50aGVtZSAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgY29uZmlnLnRoZW1lID09PSAnZGFyaycgPyAncmdiKDEyOCwgMjAzLCAxOTYpJyA6ICdibHVlJyA6ICdibHVlJyxcclxuICAgICAgY29sb3I6IGNvbmZpZy5hcnJvd1N0eWxlLmNvbG9yIHx8ICcjZmZmJ1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGNmciA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoVGltZVBpY2tlckNvbXBvbmVudCk7XHJcbiAgICBjb25zdCB0c2MgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY2ZyKTtcclxuICAgIHRzYy5pbnN0YW5jZS5zdWJqZWN0ID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gICAgdHNjLmluc3RhbmNlLl9yZWYgPSB0c2M7XHJcbiAgICB0c2MuaW5zdGFuY2UuYXBwUmVmID0gdGhpcy5hcHBSZWY7XHJcbiAgICB0c2MuaW5zdGFuY2UudGltZXJFbGVtZW50ID0gJyc7XHJcbiAgICB0c2MuaW5zdGFuY2UuY29uZmlnID0gY29uZmlnO1xyXG4gICAgdHNjLmluc3RhbmNlLmFjdGl2ZU1vZGFsID0gdHJ1ZTtcclxuICAgIHRzYy5pbnN0YW5jZS5pc1BvcHVwID0gZmFsc2U7XHJcbiAgICB0c2MuaW5zdGFuY2UuUGFyc2VTdHJpbmdUb1RpbWUoY29uZmlnLnRpbWUpO1xyXG4gICAgdHNjLmluc3RhbmNlLnN1YmplY3QuYXNPYnNlcnZhYmxlKCkuc3Vic2NyaWJlKHRpbWUgPT4ge1xyXG4gICAgICB0aGlzLnRpbWVTZWxlY3RlZC5lbWl0KHRpbWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==