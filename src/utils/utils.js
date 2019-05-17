export function UniqueItems(arr, key) {
    let seen = new Set();
    return arr.filter(item => {
        let k = key(item);
        return seen.has(k) ? false : seen.add(k);
    });
}

export function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export function createTime(time) {
    const theDate = new Date(time);
    const nowTime = new Date(Date.now());
    let year1 = theDate.getFullYear();
    let month1 = theDate.getMonth();
    let day1 = theDate.getDate();
    let time1 = theDate.toTimeString().split(' ')[0].split(':');

    let year2 = nowTime.getFullYear();
    let month2 = nowTime.getMonth();
    let day2 = nowTime.getDate();
    let time2 = nowTime.toTimeString().split(' ')[0].split(':');

    if (year1 === year2 && month1 === month2 && day1 === day2) {
        if (parseInt(time1[0]) === parseInt(time2[0]) && parseInt(time1[1]) === parseInt(time2[1])) {
            return "A few moment ago";
        }
        else if (parseInt(time1[0]) === parseInt(time2[0]) && parseInt(time1[1]) < parseInt(time2[1])) {
            return "A few minutes ago";
        }
        else if (parseInt(time1[0]) < parseInt(time2[0])) {
            return "A few hours ago";
        }
    }
    else if (year1 === year2 && month1 === month2 && day1 < day2) {
        return "A few days ago";
    }
    else if (year1 === year2 && month1 < month2) {
        return "A few months ago";
    }
    else if (year1 < year2) {
        return "A few years ago";
    }

}
