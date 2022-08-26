document.write('<BR>'+'<b>TABLAS DEL 0-10</b>'+'<BR>'+'<BR>')
for(i=0;i<=10;i++){
    document.write(`Tabla del ${i}<br><br>`)
    for(a=1;a<=10;a++){
        num=i*a;
        document.write(`${i}X${a}: ${num}<br>`);
        // document.write(i+'X'+a+': '+num+'<br>');
    }
    document.write('<br>')

}