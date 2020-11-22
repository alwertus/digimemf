export function zeroTime(dateIn) {
    let d = new Date(dateIn.getTime());
    d.setHours(0);
    d.setMinutes(0);
    d.setSeconds(0);
    d.setMilliseconds(0);
    return d;
}
export function addDays(dateIn, days) {
    let d = new Date(dateIn.getTime());
    d.setDate(d.getDate() + days);
    return d;
}