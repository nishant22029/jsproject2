let side1=5;
let side2=6;
let side3=7;
let area=side1+side2+side3;
console.log("area of triangle="+area)
let file1="hello.java"
let file2="Program.php"
let file3="index.html"
console.log("file1 extension="+file1.split('.').pop())
console.log("file2 extension="+file2.split('.').pop())
console.log("file3 extension="+file3.split('.').pop())
let ext1=("file1 extension="+file1.split('.').pop())
let ext2=("file2 extension="+file2.split('.').pop())
let ext3=("file3 extension="+file3.split('.').pop())

let num1=parseInt(prompt("enter number 1"))
let num2=parseInt(prompt("enter number 2"))
let sum;
if(num1==num2){
    sum=3*(num1+num2)
    console.log("sum ="+sum)
}
   
else
    {sum=num1+num2;
        console.log("sum of two number="+sum)}

        function output(){
            document.write("area of triangle="+area+"\t , "+"\t ,"+ext1+"\t ,"+ext2+"\t ,"+ext3+"\t , "+sum)
        }
