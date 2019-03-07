function sayHello() {
    document.write("<br /> Hello WOrld <br />");
}

function triangle() {
    var arr = [0, 18, 26, 2, 4, 2, 11, 4, 3, 13, 25, 24, 17, 4, 24, 3, 23, 4, 11, 7, 15, 7, 22, 9, 24, 16];
    let x, y, z, count=0;
    
    for (let i = 0; i < arr.length; i++) {
        x = arr[i];
        y = arr[x-1];
        z = arr[y-1];
        if ( x!=y && y!=z && (z-1) == i ) {
            count++;            
        } 
    }
    document.write("<br /> Количество треугольников: " + count/3);
}

function brackets() {
    var arr=['((()))()(('];
    var exampl = [['(', ')']];
    let arrStr = arr[0].split('');      //разбивка строки по символам в массив
    //document.write("<br /> Массив элементов: " + arrStr);
    /*let countX = 0;
    for (let x = 0; x < arrStr.length; x++) {
        if (arrStr[x] == exampl[0][0]) {
            countX++;
        }
    }*/


    if (arrStr.length % 2 == 0) {
        for (let k = 0; k <= arrStr.length; k++) {
            for (let i = 0; i <= arrStr.length; i++) {
                if (arrStr[i] == exampl[0][0] && arrStr[i+1] == exampl[0][1]) {
                    delete arrStr[i];   //удаляет значение из массива
                    delete arrStr[i+1]; //arrStr.splice(i, i + 1); ПРОВЕРИТЬ!!!!Ы
                    arrStr = arrStr.filter(element => element !== undefined);
                }
            }
            document.write("<br /> Массив элементов: " + arrStr);
            if (arrStr.length == 0) {
                document.write("<br /> Массив является пустым!");
                break;
            }
        }
        if (arrStr.length != 0) {
            document.write("<br /> Массив НЕ СХЛОПНУЛСЯ!!!");
        }
        //while (arrStr[i] == exampl[0][0] && arrStr[i+1] == exampl[0][1])
    } else {
        document.write("<br /> ERROR!!!");
    }
}