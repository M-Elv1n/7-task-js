//1 Arrayda m herfi ile biten sozleri cixardin.

// let array = ["em", "ert", "aaa", "tm"]

// for (let i = 0; i < array.length - 1; i++) {
//     if (array[i][array[i].length - 1] === "m") {
//         console.log(array[i])
//     }
// }


//2 Arrayda sozde butun herfleri boyuk olub olmadigina baxin

// let array = ["cdsc", "IUHIUH", "dewdew"]
// for (let i = 0; i < array.length; i++) {
//     if(array[i] == array[i].toUpperCase()){
//         console.log(array[i])
//     }
// }



//3 Array icerisinde 0-9 kimi reqemler var, hansisa 1 reqem yoxdur onu tapin

// let array = [0, 1, 2, 3, 4, 6, 7, 8, 9]

// for (let i = 0; i < array.length; i++) {
//     if (i !== array[i]) {
//         console.log(i)
//         break
//     }
// }



//4 Arrayda guzgu ededleri tapsin

// let array = ["121", "222", "345", "454454", "4564564"]
// for (let i = 0; i < array.length; i++) {
//     let str = ""
//     let word = array[i];

//     for (let y = 0; y < word.length; y++) {
//         str = word[y] + str
//     }

//     if (str == word) {
//         console.log(word);
//     }
// }




//5 Istifadeci 0 daxil edenedek ededleri arrayda goster (while)
// 1
// let c = true
// let arr = []
// let i = 0;
// let counter = 0;
// while(c){
//     arr[i] = +prompt("eded?:")
//     if(arr[i] == 0){
//         c = false
//     }
//     i++
// }
// console.log(arr)

//2
// let arr = []
// do {
//     let input = +prompt("eded daxil et")
//     if (input !== 0) {
//         arr.push(input)
//     }
// } while (input !== 0);

// console.log(arr)



//6 Arrayin icindeki ededlerin cemi cutdurse --true, tekdirse-- false ekrana gostersin

// let array = [2, 4, 5, 6, 8]
// let count = 0

// for (let i = 0; i < array.length; i++) {
//     count += array[i]
// }
// if(count % 2 === 0){
//     console.log("true")
// }else{
//     console.log("false")
// }