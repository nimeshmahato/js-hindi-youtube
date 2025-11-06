const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros)
const newhero=[...marvel_heros,...dc_heros]
// console.log(newhero)

const another_array=[1,2,3,[4,5,6,],7,[6,7,[4,5]]]
const anoarray=another_array.flat(Infinity)
console.log(anoarray);

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.from({name:"hitesh"})); ///intresting



