export function handleNewDate(){
    return new Date().toISOString().slice(0, 10)
}


export function dateFormat(string) {
    const date = new Date(string);
    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const result = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`
    return result;
}

export function dateFormatymd(string){
    return string.split('T')[0]
}

export function getDays(date){
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(date);
    var dayName = days[d.getDay()];
    return dayName
}


