function dateDiffInDays(date1, date2) {
    // Convert the date strings to Date objects
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    
    // Get the UTC time in milliseconds for both dates
    const time1 = Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate());
    const time2 = Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate());
    
    // Calculate the difference in milliseconds
    const diffInMs = time2 - time1;
    
    // Convert milliseconds to days (1 day = 86400000 milliseconds)
    const diffInDays = diffInMs / 86400000;
    
    return diffInDays;
}

// Examples
console.log(dateDiffInDays("2022-03-01", "2022-03-15")); // Output: 14
console.log(dateDiffInDays("2022-03-01", "2022-03-01")); // Output: 0
console.log(dateDiffInDays("2022-03-15", "2022-03-01")); // Output: -14
