function sayHello() {
    document.write("<br /> Hello WOrld <br />");
}

function triangle() {
    let arr=[3, 1, 2, 5, 6, 4];
    let i, count;
    
    for (i = 0; i < arr.length; i++) {
        let x = arr[i];
        let y = arr[x-1];
        let z = arr[y-1];
        if ((arr[i] == x) && (arr[x-1] == y) && (arr[y-1] == z)) {
            document.write("<br />  true " + arr[a] + " = " + a);
            count++;
        } /*else {
            document.write("<br />  false " + arr[a] + " != " + a);
        }*/
        
        document.write("<br />" + x + " " + y + " " + z);
    }
    document.write("<br /> Количество любовных треугольников: " + count);
    document.write("<br />" + arr[2]);

    
}