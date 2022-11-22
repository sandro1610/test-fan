// Contoh:
// Input: [5, 7, 7, 9, 10, 4, 5, 10, 6, 5]
// Output: 3
// Keterangan: Hanya 3 pasang kaos kaki yang dapat dijual (5, 7, 10)
var values = [6,5,2,3,5,2,2,1,1,5,1,3,3,3,5];
let result = 0;
for (let i = 0; i < values.length; i++) {
    let count = 0;
    for (let j = 0; j < values.length; j++) {
        const element = values[j];
        if (element == values[i]) {
            count++
        }
    }
    if (count >= 2){
        result = result + (count%2)
    }
}
console.log(result);