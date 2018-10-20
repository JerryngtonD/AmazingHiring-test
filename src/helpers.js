export function compareByStrings(a, b, field) {
    // Use toUpperCase() to ignore character casing
    const genreA = a[field].toUpperCase();
    const genreB = b[field].toUpperCase();

    let comparison = 0;
    if (genreA > genreB) {
        comparison = 1;
    } else if (genreA < genreB) {
        comparison = -1;
    }
    return comparison;
}

export function getHash(s)  {
    return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
}
