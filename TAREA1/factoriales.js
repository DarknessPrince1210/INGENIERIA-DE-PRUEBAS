const factorial=(n)=>{
    if(n<=1)return 1;
    return n*factorial(n-1);
}

num=prompt("Ingresa un numero: ");
factorial(num);
