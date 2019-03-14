/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var arabic = new Intl.NumberFormat('ar-AE');
/** @type {?} */
var persian = new Intl.NumberFormat('fa-IR');
/** @type {?} */
export var PersianPreference = {
    hour: (/**
     * @param {?} x
     * @return {?}
     */
    function (x) { return persian.format(x); }),
    minute: (/**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        /** @type {?} */
        var exp = persian.format(x);
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
    function (x) { return x === 'AM' ? 'صبح' : 'عصر'; }),
    clockHour: (/**
     * @param {?} x
     * @return {?}
     */
    function (x) { return persian.format(x); }),
    clockMinute: (/**
     * @param {?} x
     * @return {?}
     */
    function (x) { return persian.format(x); }),
    labels: {
        ok: 'تایید',
        cancel: 'لغو'
    }
};
/** @type {?} */
export var ArabicPreference = {
    hour: (/**
     * @param {?} x
     * @return {?}
     */
    function (x) { return arabic.format(x); }),
    minute: (/**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        /** @type {?} */
        var exp = arabic.format(x);
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
    function (x) { return x === 'AM' ? 'صباحا' : 'مساء'; }),
    clockHour: (/**
     * @param {?} x
     * @return {?}
     */
    function (x) { return arabic.format(x); }),
    clockMinute: (/**
     * @param {?} x
     * @return {?}
     */
    function (x) { return arabic.format(x); }),
    labels: {
        ok: 'حسنا',
        cancel: 'إلغاء'
    }
};
/** @type {?} */
export var ChinesePreference = {
    hour: (/**
     * @param {?} x
     * @return {?}
     */
    function (x) { return x; }),
    minute: (/**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        /** @type {?} */
        var exp = x;
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
    function (x) { return x === 'AM' ? '上午' : '下午'; }),
    clockHour: (/**
     * @param {?} x
     * @return {?}
     */
    function (x) { return x; }),
    clockMinute: (/**
     * @param {?} x
     * @return {?}
     */
    function (x) { return x; }),
    labels: {
        ok: '确定',
        cancel: '取消'
    }
};
/** @type {?} */
export var Preference = (/**
 * @param {?} locale
 * @return {?}
 */
function (locale) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyZW5jZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbWF6aW5nLXRpbWUtcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9hdHAtbGlicmFyeS9wcmVmZXJlbmNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztJQUVNLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDOztJQUN2QyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQzs7QUFFOUMsTUFBTSxLQUFPLGlCQUFpQixHQUF1QjtJQUNuRCxJQUFJOzs7O0lBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFqQixDQUFpQixDQUFBO0lBQzlCLE1BQU07Ozs7SUFBRSxVQUFDLENBQUM7O1lBQ0osR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDcEIsR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQy9CO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDLENBQUE7SUFDRCxTQUFTLEVBQUUsR0FBRztJQUNkLE1BQU07Ozs7SUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUExQixDQUEwQixDQUFBO0lBQ3pDLFNBQVM7Ozs7SUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQWpCLENBQWlCLENBQUE7SUFDbkMsV0FBVzs7OztJQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBakIsQ0FBaUIsQ0FBQTtJQUNyQyxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsT0FBTztRQUNYLE1BQU0sRUFBRSxLQUFLO0tBQ2Q7Q0FDRjs7QUFFRCxNQUFNLEtBQU8sZ0JBQWdCLEdBQXVCO0lBQ2xELElBQUk7Ozs7SUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQWhCLENBQWdCLENBQUE7SUFDN0IsTUFBTTs7OztJQUFFLFVBQUMsQ0FBQzs7WUFDSixHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNwQixHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDOUI7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUMsQ0FBQTtJQUNELFNBQVMsRUFBRSxHQUFHO0lBQ2QsTUFBTTs7OztJQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQTdCLENBQTZCLENBQUE7SUFDNUMsU0FBUzs7OztJQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQTtJQUNsQyxXQUFXOzs7O0lBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFoQixDQUFnQixDQUFBO0lBQ3BDLE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxNQUFNO1FBQ1YsTUFBTSxFQUFFLE9BQU87S0FDaEI7Q0FDRjs7QUFFRCxNQUFNLEtBQU8saUJBQWlCLEdBQXVCO0lBQ25ELElBQUk7Ozs7SUFBRyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsRUFBRCxDQUFDLENBQUE7SUFDZixNQUFNOzs7O0lBQUUsVUFBQyxDQUFDOztZQUNKLEdBQUcsR0FBRyxDQUFDO1FBQ1gsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNwQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNqQjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQyxDQUFBO0lBQ0QsU0FBUyxFQUFFLEdBQUc7SUFDZCxNQUFNOzs7O0lBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBeEIsQ0FBd0IsQ0FBQTtJQUN2QyxTQUFTOzs7O0lBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLEVBQUQsQ0FBQyxDQUFBO0lBQ25CLFdBQVc7Ozs7SUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsRUFBRCxDQUFDLENBQUE7SUFDckIsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLElBQUk7UUFDUixNQUFNLEVBQUUsSUFBSTtLQUNiO0NBQ0Y7O0FBRUQsTUFBTSxLQUFPLFVBQVU7Ozs7QUFBRyxVQUFDLE1BQWM7SUFDdkMsUUFBUSxNQUFNLEVBQUU7UUFDZCxLQUFLLElBQUk7WUFDTCxPQUFPLGlCQUFpQixDQUFDO1FBQzdCLEtBQUssSUFBSTtZQUNMLE9BQU8sZ0JBQWdCLENBQUM7UUFDNUIsS0FBSyxJQUFJO1lBQ0wsT0FBTyxpQkFBaUIsQ0FBQztRQUM3QjtZQUNFLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7QUFDSCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRGlzcGxheVByZWZlcmVuY2UgfSBmcm9tICcuL2RlZmluaXRpb25zJztcclxuXHJcbmNvbnN0IGFyYWJpYyA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnYXItQUUnKTtcclxuY29uc3QgcGVyc2lhbiA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZmEtSVInKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQZXJzaWFuUHJlZmVyZW5jZTogSURpc3BsYXlQcmVmZXJlbmNlID0ge1xyXG4gIGhvdXI6ICh4KSA9PiBwZXJzaWFuLmZvcm1hdCh4KSxcclxuICBtaW51dGU6ICh4KSA9PiB7XHJcbiAgICBsZXQgZXhwID0gcGVyc2lhbi5mb3JtYXQoeCk7XHJcbiAgICBpZiAoZXhwLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICBleHAgPSBwZXJzaWFuLmZvcm1hdCgwKSArIGV4cDtcclxuICAgIH1cclxuICAgIHJldHVybiBleHA7XHJcbiAgfSxcclxuICBzZXBhcmF0b3I6ICc6JyxcclxuICBwZXJpb2Q6ICh4KSA9PiB4ID09PSAnQU0nID8gJ9i12KjYrScgOiAn2LnYtdixJyxcclxuICBjbG9ja0hvdXI6ICh4KSA9PiBwZXJzaWFuLmZvcm1hdCh4KSxcclxuICBjbG9ja01pbnV0ZTogKHgpID0+IHBlcnNpYW4uZm9ybWF0KHgpLFxyXG4gIGxhYmVsczoge1xyXG4gICAgb2s6ICfYqtin24zbjNivJyxcclxuICAgIGNhbmNlbDogJ9mE2LrZiCdcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQXJhYmljUHJlZmVyZW5jZTogSURpc3BsYXlQcmVmZXJlbmNlID0ge1xyXG4gIGhvdXI6ICh4KSA9PiBhcmFiaWMuZm9ybWF0KHgpLFxyXG4gIG1pbnV0ZTogKHgpID0+IHtcclxuICAgIGxldCBleHAgPSBhcmFiaWMuZm9ybWF0KHgpO1xyXG4gICAgaWYgKGV4cC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgZXhwID0gYXJhYmljLmZvcm1hdCgwKSArIGV4cDtcclxuICAgIH1cclxuICAgIHJldHVybiBleHA7XHJcbiAgfSxcclxuICBzZXBhcmF0b3I6ICc6JyxcclxuICBwZXJpb2Q6ICh4KSA9PiB4ID09PSAnQU0nID8gJ9i12KjYp9it2KcnIDogJ9mF2LPYp9ihJyxcclxuICBjbG9ja0hvdXI6ICh4KSA9PiBhcmFiaWMuZm9ybWF0KHgpLFxyXG4gIGNsb2NrTWludXRlOiAoeCkgPT4gYXJhYmljLmZvcm1hdCh4KSxcclxuICBsYWJlbHM6IHtcclxuICAgIG9rOiAn2K3Ys9mG2KcnLFxyXG4gICAgY2FuY2VsOiAn2KXZhNi62KfYoSdcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ2hpbmVzZVByZWZlcmVuY2U6IElEaXNwbGF5UHJlZmVyZW5jZSA9IHtcclxuICBob3VyOiAgKHgpID0+IHgsXHJcbiAgbWludXRlOiAoeCkgPT4ge1xyXG4gICAgbGV0IGV4cCA9IHg7XHJcbiAgICBpZiAoZXhwLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICBleHAgPSAn27AnICsgZXhwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGV4cDtcclxuICB9LFxyXG4gIHNlcGFyYXRvcjogJzonLFxyXG4gIHBlcmlvZDogKHgpID0+IHggPT09ICdBTScgPyAn5LiK5Y2IJyA6ICfkuIvljYgnLFxyXG4gIGNsb2NrSG91cjogKHgpID0+IHgsXHJcbiAgY2xvY2tNaW51dGU6ICh4KSA9PiB4LFxyXG4gIGxhYmVsczoge1xyXG4gICAgb2s6ICfnoa7lrponLFxyXG4gICAgY2FuY2VsOiAn5Y+W5raIJ1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcmVmZXJlbmNlID0gKGxvY2FsZTogc3RyaW5nKTogSURpc3BsYXlQcmVmZXJlbmNlID0+IHtcclxuICBzd2l0Y2ggKGxvY2FsZSkge1xyXG4gICAgY2FzZSAnZmEnOlxyXG4gICAgICAgIHJldHVybiBQZXJzaWFuUHJlZmVyZW5jZTtcclxuICAgIGNhc2UgJ2FyJzpcclxuICAgICAgICByZXR1cm4gQXJhYmljUHJlZmVyZW5jZTtcclxuICAgIGNhc2UgJ3poJzpcclxuICAgICAgICByZXR1cm4gQ2hpbmVzZVByZWZlcmVuY2U7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn07XHJcbiJdfQ==