document.write('<b>PRIMEROS 20 NUMEROS PARES</b>'+'<BR>'+'<BR>')
for(i=0;i<=40;i++){
    num=i%2;
    if(num==0 && i!=0){
        document.write(i+'<br>');
    }
}