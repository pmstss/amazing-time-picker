/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { AtpTimePickerComponent } from './atp-time-picker/atp-time-picker.component';
import { AmazingTimePickerService } from './atp-time-picker.service';
import { AtpDirective } from './atp.directive';
import { AtpCoreService } from './atp-core.service';
export class AmazingTimePickerModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRwLXRpbWUtcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FtYXppbmctdGltZS1waWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL2F0cC1saWJyYXJ5L2F0cC10aW1lLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFzQnBELE1BQU0sT0FBTyx1QkFBdUI7OztZQXBCbkMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWixtQkFBbUI7b0JBQ25CLHNCQUFzQjtvQkFDdEIsWUFBWTtpQkFDYjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Qsd0JBQXdCO29CQUN4QixjQUFjO2lCQUNmO2dCQUNELGVBQWUsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUN0QyxPQUFPLEVBQUU7b0JBQ1AsbUJBQW1CO29CQUNuQixzQkFBc0I7b0JBQ3RCLFlBQVk7aUJBQ2I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFRpbWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3RpbWUtcGlja2VyL3RpbWUtcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF0cFRpbWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2F0cC10aW1lLXBpY2tlci9hdHAtdGltZS1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQW1hemluZ1RpbWVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9hdHAtdGltZS1waWNrZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEF0cERpcmVjdGl2ZSB9IGZyb20gJy4vYXRwLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEF0cENvcmVTZXJ2aWNlIH0gZnJvbSAnLi9hdHAtY29yZS5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBUaW1lUGlja2VyQ29tcG9uZW50LFxyXG4gICAgQXRwVGltZVBpY2tlckNvbXBvbmVudCxcclxuICAgIEF0cERpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBBbWF6aW5nVGltZVBpY2tlclNlcnZpY2UsXHJcbiAgICBBdHBDb3JlU2VydmljZVxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbVGltZVBpY2tlckNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgVGltZVBpY2tlckNvbXBvbmVudCxcclxuICAgIEF0cFRpbWVQaWNrZXJDb21wb25lbnQsXHJcbiAgICBBdHBEaXJlY3RpdmVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbWF6aW5nVGltZVBpY2tlck1vZHVsZSB7IH1cclxuIl19