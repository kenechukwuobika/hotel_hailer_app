export const capitalize = (str) => {
    let newString = ""
    str.split(" ").forEach(element => {
        newString += `${element.charAt(0).toUpperCase()}${element.substring(1, element.length).toLowerCase()} `;
    });
    return newString;
}

export const formatPrice = (price) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const formatThousands = (num) => Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num);

export const formatDate = (dateString, shortMonthType=true, showYear=true) => {
    const fullMonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const shortMonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date(dateString);
    
    let day = date.getDate();
    let month = shortMonthNames[date.getMonth()];
    let year = date.getFullYear();
    
    if(!shortMonthType) {
        month = fullMonthNames[date.getMonth()];
    }

    if(!showYear) {
        year = "";
    }
    const formattedDate = `${day} ${month} ${year}`;
    return formattedDate;

};