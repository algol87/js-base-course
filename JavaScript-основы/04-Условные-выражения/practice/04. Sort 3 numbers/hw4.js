// не правильное решение

let a = 3,
    b = 2,
    c = 4;

if((a >= b) && (a >= c)) {

   if(b >=c) {
       console.log(a,b,c)
   } else {
       console.log(a,c,b)
   }
}
else if(b >=c) {
    console.log(b,c,a);
} else if(b > a) {
    console.log(c,b,a)
} else {
    console.log(c,a,b);
}
