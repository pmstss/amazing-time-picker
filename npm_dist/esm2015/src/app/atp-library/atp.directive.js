/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ViewContainerRef, Output, EventEmitter, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AmazingTimePickerService } from './atp-time-picker.service';
export class AtpDirective {
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
if (false) {
    /** @type {?} */
    AtpDirective.prototype.myClick;
    /**
     * @type {?}
     * @private
     */
    AtpDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    AtpDirective.prototype.onChange;
    /** @type {?} */
    AtpDirective.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    AtpDirective.prototype.atp;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRwLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FtYXppbmctdGltZS1waWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL2F0cC1saWJyYXJ5L2F0cC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFDNUcsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBVXJFLE1BQU0sT0FBTyxZQUFZOzs7OztJQU12QixZQUNXLGdCQUFrQyxFQUNqQyxHQUE2QjtRQUQ5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2pDLFFBQUcsR0FBSCxHQUFHLENBQTBCO1FBTi9CLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRy9CLGFBQVE7Ozs7UUFBRyxDQUFDLENBQU0sRUFBUSxFQUFFLEdBQUUsQ0FBQyxFQUFDO1FBSXRDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztJQUNsRCxDQUFDOzs7OztJQUdELE9BQU8sQ0FBQyxDQUFDOztjQUNELEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGFBQWE7O2NBQ2pELElBQUksR0FBRyxHQUFHLENBQUMsS0FBSzs7Y0FDaEIsS0FBSyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDOztjQUNqQyxLQUFLLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUM7O2NBQ2pDLEdBQUcsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQzs7Y0FDN0IsTUFBTSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSTs7Y0FDM0MsZUFBZSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsS0FBSyxNQUFNOztjQUNoRSxTQUFTLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUM7O2NBQ3pDLFVBQVUsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUk7O2NBQ25ELFFBQVEsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFLLE1BQU07O2NBQ2xELFVBQVUsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLE1BQU07O2NBQ3RELE1BQU0sR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLE1BQU07O2NBQzlDLE1BQU0sR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLE1BQU07O1lBQ2hELFVBQVUsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQztRQUMvQyxVQUFVLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7O2NBQ3RGLGtCQUFrQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ3ZDLElBQUk7WUFDSixLQUFLO1lBQ0wsU0FBUyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBQztZQUN4QixZQUFZLEVBQUUsVUFBVTtZQUN4QixNQUFNO1lBQ04sZUFBZTtZQUNmLFNBQVM7WUFDVCxRQUFRO1lBQ1IsVUFBVTtZQUNWLE1BQU07WUFDTixNQUFNO1lBQ04sVUFBVTtTQUNYLENBQUM7UUFFRixrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLDRCQUE0QjtZQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsNENBQTRDO1FBQ3RFLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFHRCxPQUFPLENBQUMsQ0FBTTtRQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBRSxJQUFLLENBQUM7OztZQXpFM0IsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFNBQVMsRUFBRSxDQUFDO3dCQUNWLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxZQUFZO3dCQUN6QixLQUFLLEVBQUUsSUFBSTtxQkFDWixDQUFDO2FBQ0g7Ozs7WUFYbUIsZ0JBQWdCO1lBRTNCLHdCQUF3Qjs7O3NCQVk5QixNQUFNO3NCQVVOLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7c0JBc0NoQyxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBaERqQywrQkFBdUM7Ozs7O0lBRXZDLGtDQUErQjs7Ozs7SUFDL0IsZ0NBQXdDOztJQUVwQyx3Q0FBeUM7Ozs7O0lBQ3pDLDJCQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEFtYXppbmdUaW1lUGlja2VyU2VydmljZSB9IGZyb20gJy4vYXRwLXRpbWUtcGlja2VyLnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdpbnB1dFthdHAtdGltZS1waWNrZXJdJyxcclxuICBwcm92aWRlcnM6IFt7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBBdHBEaXJlY3RpdmUsXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG4gIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdHBEaXJlY3RpdmUgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gIEBPdXRwdXQoKSBteUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XHJcbiAgcHJpdmF0ZSBvbkNoYW5nZSA9ICh4OiBhbnkpOiB2b2lkID0+IHt9O1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgcHJpdmF0ZSBhdHA6IEFtYXppbmdUaW1lUGlja2VyU2VydmljZSkge1xyXG4gICAgdGhpcy5lbGVtZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgb25DbGljayhlKSB7XHJcbiAgICBjb25zdCBlbGUgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gICAgY29uc3QgdGltZSA9IGVsZS52YWx1ZTtcclxuICAgIGNvbnN0IHRoZW1lID0gZWxlLmdldEF0dHJpYnV0ZSgndGhlbWUnKTtcclxuICAgIGNvbnN0IHN0YXJ0ID0gZWxlLmdldEF0dHJpYnV0ZSgnc3RhcnQnKTtcclxuICAgIGNvbnN0IGVuZCA9IGVsZS5nZXRBdHRyaWJ1dGUoJ2VuZCcpO1xyXG4gICAgY29uc3QgbG9jYWxlID0gZWxlLmdldEF0dHJpYnV0ZSgnbG9jYWxlJykgfHwgJ2VuJztcclxuICAgIGNvbnN0IGNoYW5nZVRvTWludXRlcyA9IGVsZS5nZXRBdHRyaWJ1dGUoJ2NoYW5nZVRvTWludXRlcycpID09PSAndHJ1ZSc7XHJcbiAgICBjb25zdCBhbmltYXRpb24gPSBlbGUuZ2V0QXR0cmlidXRlKCdhbmltYXRpb24nKTtcclxuICAgIGNvbnN0IHByZWZlcmVuY2UgPSBlbGUuZ2V0QXR0cmlidXRlKCdwcmVmZXJlbmNlJykgfHwgbnVsbDtcclxuICAgIGNvbnN0IG9ubHlIb3VyID0gZWxlLmdldEF0dHJpYnV0ZSgnb25seUhvdXInKSA9PT0gJ3RydWUnO1xyXG4gICAgY29uc3Qgb25seU1pbnV0ZSA9IGVsZS5nZXRBdHRyaWJ1dGUoJ29ubHlNaW51dGUnKSA9PT0gJ3RydWUnO1xyXG4gICAgY29uc3Qgb25seUFNID0gZWxlLmdldEF0dHJpYnV0ZSgnb25seUFNJykgPT09ICd0cnVlJztcclxuICAgIGNvbnN0IG9ubHlQTSA9IGVsZS5nZXRBdHRyaWJ1dGUoJ29ubHlQTScpID09PSAndHJ1ZSc7XHJcbiAgICBsZXQgYXJyb3dTdHlsZSA9IGVsZS5nZXRBdHRyaWJ1dGUoJ2Fycm93U3R5bGUnKTtcclxuICAgIGFycm93U3R5bGUgPSAoYXJyb3dTdHlsZSkgPyBKU09OLnBhcnNlKGFycm93U3R5bGUucmVwbGFjZShuZXcgUmVnRXhwKCdcXCcnLCAnZycpLCAnXCInKSkgOiAnJztcclxuICAgIGNvbnN0IHRpbWVQaWNrZXJGdW5jdGlvbiA9IHRoaXMuYXRwLm9wZW4oe1xyXG4gICAgICB0aW1lLFxyXG4gICAgICB0aGVtZSxcclxuICAgICAgcmFuZ2VUaW1lOiB7IHN0YXJ0LCBlbmR9LFxyXG4gICAgICAnYXJyb3dTdHlsZSc6IGFycm93U3R5bGUsXHJcbiAgICAgIGxvY2FsZSxcclxuICAgICAgY2hhbmdlVG9NaW51dGVzLFxyXG4gICAgICBhbmltYXRpb24sXHJcbiAgICAgIG9ubHlIb3VyLFxyXG4gICAgICBvbmx5TWludXRlLFxyXG4gICAgICBvbmx5QU0sXHJcbiAgICAgIG9ubHlQTSxcclxuICAgICAgcHJlZmVyZW5jZVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGltZVBpY2tlckZ1bmN0aW9uLmFmdGVyQ2xvc2UoKS5zdWJzY3JpYmUocmV0VGltZSA9PiB7XHJcbiAgICAgIHRoaXMud3JpdGVWYWx1ZShyZXRUaW1lKTsgLy8gdXBkYXRlIHRoZSBuYXRpdmUgZWxlbWVudFxyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHJldFRpbWUpOyAvLyB1cGRhdGUgdGhlIGZvcm0gdmFsdWUgKGlmIHRoZXJlJ3MgYSBmb3JtKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pXHJcbiAgb25JbnB1dChlOiBhbnkpIHtcclxuICAgIHRoaXMub25DaGFuZ2UoZS5zcmNFbGVtZW50LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudFJlZikge1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbikgeyAgfVxyXG59XHJcbiJdfQ==