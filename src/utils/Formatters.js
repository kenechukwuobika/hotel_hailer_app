export const capitalize = (str) => {
    let newString = ""
    str.split(" ").forEach(element => {
        newString += `${element.charAt(0).toUpperCase()}${element.substring(1, element.length).toLowerCase()} `;
    });
    return newString;
}

export const formatPrice = (price) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const formatThousands = (num) => Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num);