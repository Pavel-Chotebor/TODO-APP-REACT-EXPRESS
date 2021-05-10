export const getToday = () => {
    let today = new Date()
    let month = '' + (today.getMonth() + 1)
    let day = '' + today.getDate()
    let year = today.getFullYear()

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}
