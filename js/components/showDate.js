export function showDate() {
    const date = new Date();
    let daysNum = date.getDay();
    let monthNum = date.getMonth();
    let day = date.getDate();

    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let month = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

    return `${days[daysNum]}, ${month[monthNum]} ${day}`;
};