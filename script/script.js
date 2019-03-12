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
    var arr=['111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222'];
    var exampl = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
    let arrStr = arr[0].split('');      //разбивка строки по символам в массив
    //document.write("<br /> Массив элементов: " + arrStr);
    
    //ПРОВЕРКА на "парность" "скобок"
    let check;
    for (let z=0; z<exampl.length; z++) {    
        let countX=0, countY=0;
        for (let x = 0; x <= arrStr.length; x++) {
            if (arrStr[x] == exampl[z][0]) {
                countX++;
            }
        }
        for (let y = 0; y <= arrStr.length; y++) {
            if (arrStr[y] == exampl[z][1]) {
                countY++;
            }
        }
        if (countX != countY){
            check=false;
            break;
        } else {
            check=true;
        }
    }
    // проверка закончилась
    document.write("<br /> Массив элементов: " + arrStr);
    if (arrStr.length % 2 == 0 && check==true) {  //при использовании второго условия, первое уже не актуально
        
        // Для проверки ОДНОЙ ПАРЫ символов!!!
        /*for (let k = 0; k <= arrStr.length; k++) {
            for (let i = 0; i <= arrStr.length; i++) {
                if (arrStr[i] == exampl[0][0] && arrStr[i+1] == exampl[0][1]) {
                    delete arrStr[i];   //удаляет значение из массива
                    delete arrStr[i+1]; //arrStr.splice(i, i + 1); ПРОВЕРИТЬ!!!!
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
        document.write("<br /> ПРОВЕРКА ПРОЙДЕНА!!!");*/
        //одна пара

        for (let k=0; k<=exampl.length+1; k++) {
            for (let m=0; m<=exampl.length; m++) {
                for (let p = 0; p <= arrStr.length/2; p++) {
                    for (let i = 0; i <= arrStr.length; i++) {
                        if (arrStr[i] == exampl[m][0] && arrStr[i+1] == exampl[m][1]) {
                            delete arrStr[i];   //удаляет значение из массива
                            delete arrStr[i+1]; //arrStr.splice(i, i + 1); ПРОВЕРИТЬ!!!!
                            arrStr = arrStr.filter(element => element !== undefined);
                        }
                    }
                    //document.write("<br /> Массив элементов: " + arrStr);
                    if (arrStr.length == 0) {
                        document.write("<br /> Массив является пустым!");
                        break;
                    }
                    
                }
                document.write("<br /> Массив элементов: " + arrStr);
                if (m==(exampl.length-1)) {
                    break;
                    }
            }
            //document.write("<br /> Массив элементовRRRRR: ");
            
        
        }

        if (arrStr.length != 0) {
            document.write("<br /> Массив НЕ СХЛОПНУЛСЯ!!!");
        } else {
            document.write("<br /> АБРАКАДАБРА!!!");
        }
        


    } else {
        document.write("<br /> ERROR!!!");
    }
}
