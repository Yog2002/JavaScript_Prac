//Loops in JS

var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
for(var i=0;i<arr.length;i++){
    if(i==2){
        // break;
        continue;
    }
    console.log(arr[i])
}

arr.forEach(function(element){
    console.log(element);
})


while(j<arr.length){
    console.log(arr[j]);
    j ++;
 }

do{
    console.log(arr[j]);
    j++;
} while (j < arr.length);