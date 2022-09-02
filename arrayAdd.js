var input = [4,5,6,7]

    var output =[4,9,15,22]
    var a= [];
    
    for(let i=0;i<input.length;i++){
        var c=0
      for(let j=0;j<=i;j++){

         c += input[j]
        
      }
      a.push(c)

    }
    console.log(a);

    // var a ='w34res786'
// var b=0
// for(let i=0;i<a.length;i++){

//     if(a[i] >=1 && a[i]<=9){
//         b+=parseInt(a[i])
//     }
// }
// console.log(b);