/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const arabic = new Intl.NumberFormat('ar-AE');
/** @type {?} */
const persian = new Intl.NumberFormat('fa-IR');
/** @type {?} */
export const PersianPreference = {
    hour: (/**
     * @param {?} x
     * @return {?}
     */
    (x) => persian.format(x)),
    minute: (/**
     * @param {?} x
     * @return {?}
     */
    (x) => {
        /** @type {?} */
        let exp = persian.format(x);
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
    (x) => x === 'AM' ? 'صبح' : 'عصر'),
    clockHour: (/**
     * @param {?} x
     * @return {?}
     */
    (x) => persian.format(x)),
    clockMinute: (/**
     * @param {?} x
     * @return {?}
     */
    (x) => persian.format(x)),
    labels: {
        ok: 'تایید',
        cancel: 'لغو'
    }
};
/** @type {?} */
export const ArabicPreference = {
    hour: (/**
     * @param {?} x
     * @return {?}
     */
    (x) => arabic.format(x)),
    minute: (/**
     * @param {?} x
     * @return {?}
     */
    (x) => {
        /** @type {?} */
        let exp = arabic.format(x);
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
    (x) => x === 'AM' ? 'صباحا' : 'مساء'),
    clockHour: (/**
     * @param {?} x
     * @return {?}
     */
    (x) => arabic.format(x)),
    clockMinute: (/**
     * @param {?} x
     * @return {?}
     */
    (x) => arabic.format(x)),
    labels: {
        ok: 'حسنا',
        cancel: 'إلغاء'
    }
};
/** @type {?} */
export const ChinesePreference = {
    hour: (/**
     * @param {?} x
     * @return {?}
     */
    (x) => x),
    minute: (/**
     * @param {?} x
     * @return {?}
     */
    (x) => {
        /** @type {?} */
        let exp = x;
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
    (x) => x === 'AM' ? '上午' : '下午'),
    clockHour: (/**
     * @param {?} x
     * @return {?}
     */
    (x) => x),
    clockMinute: (/**
     * @param {?} x
     * @return {?}
     */
    (x) => x),
    labels: {
        ok: '确定',
        cancel: '取消'
    }
};
/** @type {?} */
export const Preference = (/**
 * @param {?} locale
 * @return {?}
 */
(locale) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyZW5jZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbWF6aW5nLXRpbWUtcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9hdHAtbGlicmFyeS9wcmVmZXJlbmNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztNQUVNLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDOztNQUN2QyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQzs7QUFFOUMsTUFBTSxPQUFPLGlCQUFpQixHQUF1QjtJQUNuRCxJQUFJOzs7O0lBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDOUIsTUFBTTs7OztJQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7O1lBQ1IsR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDcEIsR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQy9CO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDLENBQUE7SUFDRCxTQUFTLEVBQUUsR0FBRztJQUNkLE1BQU07Ozs7SUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7SUFDekMsU0FBUzs7OztJQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ25DLFdBQVc7Ozs7SUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNyQyxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsT0FBTztRQUNYLE1BQU0sRUFBRSxLQUFLO0tBQ2Q7Q0FDRjs7QUFFRCxNQUFNLE9BQU8sZ0JBQWdCLEdBQXVCO0lBQ2xELElBQUk7Ozs7SUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUM3QixNQUFNOzs7O0lBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTs7WUFDUixHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNwQixHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDOUI7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUMsQ0FBQTtJQUNELFNBQVMsRUFBRSxHQUFHO0lBQ2QsTUFBTTs7OztJQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQTtJQUM1QyxTQUFTOzs7O0lBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDbEMsV0FBVzs7OztJQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3BDLE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxNQUFNO1FBQ1YsTUFBTSxFQUFFLE9BQU87S0FDaEI7Q0FDRjs7QUFFRCxNQUFNLE9BQU8saUJBQWlCLEdBQXVCO0lBQ25ELElBQUk7Ozs7SUFBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ2YsTUFBTTs7OztJQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7O1lBQ1IsR0FBRyxHQUFHLENBQUM7UUFDWCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ2pCO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDLENBQUE7SUFDRCxTQUFTLEVBQUUsR0FBRztJQUNkLE1BQU07Ozs7SUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUE7SUFDdkMsU0FBUzs7OztJQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDbkIsV0FBVzs7OztJQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDckIsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLElBQUk7UUFDUixNQUFNLEVBQUUsSUFBSTtLQUNiO0NBQ0Y7O0FBRUQsTUFBTSxPQUFPLFVBQVU7Ozs7QUFBRyxDQUFDLE1BQWMsRUFBc0IsRUFBRTtJQUMvRCxRQUFRLE1BQU0sRUFBRTtRQUNkLEtBQUssSUFBSTtZQUNMLE9BQU8saUJBQWlCLENBQUM7UUFDN0IsS0FBSyxJQUFJO1lBQ0wsT0FBTyxnQkFBZ0IsQ0FBQztRQUM1QixLQUFLLElBQUk7WUFDTCxPQUFPLGlCQUFpQixDQUFDO1FBQzdCO1lBQ0UsT0FBTyxJQUFJLENBQUM7S0FDZjtBQUNILENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElEaXNwbGF5UHJlZmVyZW5jZSB9IGZyb20gJy4vZGVmaW5pdGlvbnMnO1xyXG5cclxuY29uc3QgYXJhYmljID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdhci1BRScpO1xyXG5jb25zdCBwZXJzaWFuID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdmYS1JUicpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBlcnNpYW5QcmVmZXJlbmNlOiBJRGlzcGxheVByZWZlcmVuY2UgPSB7XHJcbiAgaG91cjogKHgpID0+IHBlcnNpYW4uZm9ybWF0KHgpLFxyXG4gIG1pbnV0ZTogKHgpID0+IHtcclxuICAgIGxldCBleHAgPSBwZXJzaWFuLmZvcm1hdCh4KTtcclxuICAgIGlmIChleHAubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIGV4cCA9IHBlcnNpYW4uZm9ybWF0KDApICsgZXhwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGV4cDtcclxuICB9LFxyXG4gIHNlcGFyYXRvcjogJzonLFxyXG4gIHBlcmlvZDogKHgpID0+IHggPT09ICdBTScgPyAn2LXYqNitJyA6ICfYudi12LEnLFxyXG4gIGNsb2NrSG91cjogKHgpID0+IHBlcnNpYW4uZm9ybWF0KHgpLFxyXG4gIGNsb2NrTWludXRlOiAoeCkgPT4gcGVyc2lhbi5mb3JtYXQoeCksXHJcbiAgbGFiZWxzOiB7XHJcbiAgICBvazogJ9iq2KfbjNuM2K8nLFxyXG4gICAgY2FuY2VsOiAn2YTYutmIJ1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBcmFiaWNQcmVmZXJlbmNlOiBJRGlzcGxheVByZWZlcmVuY2UgPSB7XHJcbiAgaG91cjogKHgpID0+IGFyYWJpYy5mb3JtYXQoeCksXHJcbiAgbWludXRlOiAoeCkgPT4ge1xyXG4gICAgbGV0IGV4cCA9IGFyYWJpYy5mb3JtYXQoeCk7XHJcbiAgICBpZiAoZXhwLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICBleHAgPSBhcmFiaWMuZm9ybWF0KDApICsgZXhwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGV4cDtcclxuICB9LFxyXG4gIHNlcGFyYXRvcjogJzonLFxyXG4gIHBlcmlvZDogKHgpID0+IHggPT09ICdBTScgPyAn2LXYqNin2K3YpycgOiAn2YXYs9in2KEnLFxyXG4gIGNsb2NrSG91cjogKHgpID0+IGFyYWJpYy5mb3JtYXQoeCksXHJcbiAgY2xvY2tNaW51dGU6ICh4KSA9PiBhcmFiaWMuZm9ybWF0KHgpLFxyXG4gIGxhYmVsczoge1xyXG4gICAgb2s6ICfYrdiz2YbYpycsXHJcbiAgICBjYW5jZWw6ICfYpdmE2LrYp9ihJ1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGluZXNlUHJlZmVyZW5jZTogSURpc3BsYXlQcmVmZXJlbmNlID0ge1xyXG4gIGhvdXI6ICAoeCkgPT4geCxcclxuICBtaW51dGU6ICh4KSA9PiB7XHJcbiAgICBsZXQgZXhwID0geDtcclxuICAgIGlmIChleHAubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIGV4cCA9ICfbsCcgKyBleHA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXhwO1xyXG4gIH0sXHJcbiAgc2VwYXJhdG9yOiAnOicsXHJcbiAgcGVyaW9kOiAoeCkgPT4geCA9PT0gJ0FNJyA/ICfkuIrljYgnIDogJ+S4i+WNiCcsXHJcbiAgY2xvY2tIb3VyOiAoeCkgPT4geCxcclxuICBjbG9ja01pbnV0ZTogKHgpID0+IHgsXHJcbiAgbGFiZWxzOiB7XHJcbiAgICBvazogJ+ehruWumicsXHJcbiAgICBjYW5jZWw6ICflj5bmtognXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFByZWZlcmVuY2UgPSAobG9jYWxlOiBzdHJpbmcpOiBJRGlzcGxheVByZWZlcmVuY2UgPT4ge1xyXG4gIHN3aXRjaCAobG9jYWxlKSB7XHJcbiAgICBjYXNlICdmYSc6XHJcbiAgICAgICAgcmV0dXJuIFBlcnNpYW5QcmVmZXJlbmNlO1xyXG4gICAgY2FzZSAnYXInOlxyXG4gICAgICAgIHJldHVybiBBcmFiaWNQcmVmZXJlbmNlO1xyXG4gICAgY2FzZSAnemgnOlxyXG4gICAgICAgIHJldHVybiBDaGluZXNlUHJlZmVyZW5jZTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufTtcclxuIl19