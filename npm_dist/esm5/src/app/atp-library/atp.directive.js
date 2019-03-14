/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ViewContainerRef, Output, EventEmitter, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AmazingTimePickerService } from './atp-time-picker.service';
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
export { AtpDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRwLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FtYXppbmctdGltZS1waWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL2F0cC1saWJyYXJ5L2F0cC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFDNUcsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXJFO0lBY0Usc0JBQ1csZ0JBQWtDLEVBQ2pDLEdBQTZCO1FBRDlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDakMsUUFBRyxHQUFILEdBQUcsQ0FBMEI7UUFOL0IsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHL0IsYUFBUTs7OztRQUFHLFVBQUMsQ0FBTSxJQUFZLENBQUMsRUFBQztRQUl0QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFHRCw4QkFBTzs7OztJQURQLFVBQ1EsQ0FBQztRQURULGlCQW9DQzs7WUFsQ08sR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsYUFBYTs7WUFDakQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLOztZQUNoQixLQUFLLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUM7O1lBQ2pDLEtBQUssR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQzs7WUFDakMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDOztZQUM3QixNQUFNLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxJ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K0I7Ozs7O0lBQy9CLGdDQUF3Qzs7SUFFcEMsd0NBQXlDOzs7OztJQUN6QywyQkFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBBbWF6aW5nVGltZVBpY2tlclNlcnZpY2UgfSBmcm9tICcuL2F0cC10aW1lLXBpY2tlci5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnaW5wdXRbYXRwLXRpbWUtcGlja2VyXScsXHJcbiAgcHJvdmlkZXJzOiBbe1xyXG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICB1c2VFeGlzdGluZzogQXRwRGlyZWN0aXZlLFxyXG4gICAgbXVsdGk6IHRydWVcclxuICB9XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXRwRGlyZWN0aXZlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG5cclxuICBAT3V0cHV0KCkgbXlDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xyXG4gIHByaXZhdGUgb25DaGFuZ2UgPSAoeDogYW55KTogdm9pZCA9PiB7fTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgcHVibGljIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgIHByaXZhdGUgYXRwOiBBbWF6aW5nVGltZVBpY2tlclNlcnZpY2UpIHtcclxuICAgIHRoaXMuZWxlbWVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5lbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIG9uQ2xpY2soZSkge1xyXG4gICAgY29uc3QgZWxlID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnN0IHRpbWUgPSBlbGUudmFsdWU7XHJcbiAgICBjb25zdCB0aGVtZSA9IGVsZS5nZXRBdHRyaWJ1dGUoJ3RoZW1lJyk7XHJcbiAgICBjb25zdCBzdGFydCA9IGVsZS5nZXRBdHRyaWJ1dGUoJ3N0YXJ0Jyk7XHJcbiAgICBjb25zdCBlbmQgPSBlbGUuZ2V0QXR0cmlidXRlKCdlbmQnKTtcclxuICAgIGNvbnN0IGxvY2FsZSA9IGVsZS5nZXRBdHRyaWJ1dGUoJ2xvY2FsZScpIHx8ICdlbic7XHJcbiAgICBjb25zdCBjaGFuZ2VUb01pbnV0ZXMgPSBlbGUuZ2V0QXR0cmlidXRlKCdjaGFuZ2VUb01pbnV0ZXMnKSA9PT0gJ3RydWUnO1xyXG4gICAgY29uc3QgYW5pbWF0aW9uID0gZWxlLmdldEF0dHJpYnV0ZSgnYW5pbWF0aW9uJyk7XHJcbiAgICBjb25zdCBwcmVmZXJlbmNlID0gZWxlLmdldEF0dHJpYnV0ZSgncHJlZmVyZW5jZScpIHx8IG51bGw7XHJcbiAgICBjb25zdCBvbmx5SG91ciA9IGVsZS5nZXRBdHRyaWJ1dGUoJ29ubHlIb3VyJykgPT09ICd0cnVlJztcclxuICAgIGNvbnN0IG9ubHlNaW51dGUgPSBlbGUuZ2V0QXR0cmlidXRlKCdvbmx5TWludXRlJykgPT09ICd0cnVlJztcclxuICAgIGNvbnN0IG9ubHlBTSA9IGVsZS5nZXRBdHRyaWJ1dGUoJ29ubHlBTScpID09PSAndHJ1ZSc7XHJcbiAgICBjb25zdCBvbmx5UE0gPSBlbGUuZ2V0QXR0cmlidXRlKCdvbmx5UE0nKSA9PT0gJ3RydWUnO1xyXG4gICAgbGV0IGFycm93U3R5bGUgPSBlbGUuZ2V0QXR0cmlidXRlKCdhcnJvd1N0eWxlJyk7XHJcbiAgICBhcnJvd1N0eWxlID0gKGFycm93U3R5bGUpID8gSlNPTi5wYXJzZShhcnJvd1N0eWxlLnJlcGxhY2UobmV3IFJlZ0V4cCgnXFwnJywgJ2cnKSwgJ1wiJykpIDogJyc7XHJcbiAgICBjb25zdCB0aW1lUGlja2VyRnVuY3Rpb24gPSB0aGlzLmF0cC5vcGVuKHtcclxuICAgICAgdGltZSxcclxuICAgICAgdGhlbWUsXHJcbiAgICAgIHJhbmdlVGltZTogeyBzdGFydCwgZW5kfSxcclxuICAgICAgJ2Fycm93U3R5bGUnOiBhcnJvd1N0eWxlLFxyXG4gICAgICBsb2NhbGUsXHJcbiAgICAgIGNoYW5nZVRvTWludXRlcyxcclxuICAgICAgYW5pbWF0aW9uLFxyXG4gICAgICBvbmx5SG91cixcclxuICAgICAgb25seU1pbnV0ZSxcclxuICAgICAgb25seUFNLFxyXG4gICAgICBvbmx5UE0sXHJcbiAgICAgIHByZWZlcmVuY2VcclxuICAgIH0pO1xyXG5cclxuICAgIHRpbWVQaWNrZXJGdW5jdGlvbi5hZnRlckNsb3NlKCkuc3Vic2NyaWJlKHJldFRpbWUgPT4ge1xyXG4gICAgICB0aGlzLndyaXRlVmFsdWUocmV0VGltZSk7IC8vIHVwZGF0ZSB0aGUgbmF0aXZlIGVsZW1lbnRcclxuICAgICAgdGhpcy5vbkNoYW5nZShyZXRUaW1lKTsgLy8gdXBkYXRlIHRoZSBmb3JtIHZhbHVlIChpZiB0aGVyZSdzIGEgZm9ybSlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKVxyXG4gIG9uSW5wdXQoZTogYW55KSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKGUuc3JjRWxlbWVudC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgIGlmICh0aGlzLmVsZW1lbnRSZWYpIHtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm4pIHsgIH1cclxufVxyXG4iXX0=