console.clear();
const sentence = "hello there from lighthouse labs";
let time = 0
let lastIndex = sentence.length -1
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    if(i === lastIndex){
      process.stdout.write(sentence[i] + "\n");
     } else {
       process.stdout.write(sentence[i]);
  }
}, time )
  time += 50
}