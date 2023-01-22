// Sitting Arrangement

// Learning Competencies

// Mampu membuat array multidimensi Mampu mengakses array 1 dimensi Mampu menggunakan while condition dan nested loop
// Restrictions
// Hanya boleh menggunakan built-in function .push()

// Directions
// Diberikan sebuah function bernama sittingArrangement dimana function tersebut menerima dua parameter: person bertipe data Array, dan column bertipe data Number.
// Function akan mengembalikan array multidimensi yang mengatur tempat duduk berdasarkan jumlah column. Di mana jika orang tidak cukup untuk mengisi column tersebut maka diisi dengan value 'Kursi Kosong'. Variabel column harus minimal bernilai 1, jika kurang dari itu maka tuliskan 'Invalid number'Diberikan sebuah function bernama sittingArrangement dimana function tersebut menerima dua paramter.

// Parameter pertama bernama personbertipe array Parameter kedua bernama columnbertipe number
// Function akan mengembalikan array multidimensi yang mengatur tempat duduk berdasarkan jumlah column. Dimana jika orang tidak cukup untuk mengisi column tersebut maka diisi dengan value 'Kursi Kosong'

// ASUMSI:
// variabel column harus minimal bernilai 1, jika kurang dari itu maka tuliskan 'Invalid number'

let person = ["Juli", "Nisa", "Desi", "Ulfa", "Puji"]
let column = 2

function sittingArrangement(person, column) {
    let result = []
    // jika column 1 maka menampilkan invalid number
    if (column < 1) {
       return `Invalid number`
    }
    else { // 
        let i = 0
        while (i < person.length) {    // membagi person satu persatu
            let array = []
            let j = 0
            while (j < column) {
                if (person[i] === undefined) { // jika undefined
                    array.push("Kursi Kosong") // push kursi kosong
                }
                else {                        // 
                    array.push(person[i]) /// m
                }
                j++
                i++
            }
            result.push(array)
        }
    }
    return result
}
sittingArrangement(person, column)