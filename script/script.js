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
                        //document.write("<br /> Массив является пустым!");
                        break;
                    }
                    
                }
                //document.write("<br /> Массив элементов: " + arrStr);
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

function countZero() {
// функция, которая считает количество нулей в конце числа факториала числа factorial (в десятичной системе исчесления)
    /*let countZ=0, factorial=700; 
    while (factorial >= 1) {
        factorial = factorial/5;
        countZ = countZ + Math.trunc(factorial);
        document.write("<br /> Целое число от деления: " + Math.trunc(factorial));
        document.write("<br /> Промежуточное количество нулей в факториале: " + countZ);
    }
    document.write("<br /> Окончательное количество нулей в факториале: " + countZ);*/


    let factorial=46899647;
    let number = 232;
    
//Разложение на множители системы исчисления:
                //условие
    let j = 2;
	let d = 0;
	let counter = 1;
	let record = 0;
	let a;
	let arr = new Array();
	            //разделение числа на множители и запись его в массив arr []
	while(j<=number) {
		while(number%j==0) {
			number = number/j;
			arr[d] = j;
			d++;
			if(number==1) {
				break;
			}
		}
		j++;
	}
	            //разделение числа на множители и запись его в массив arr []    
    let arrP=[];    //массив множителей
    let arrQ=[];    //массив степеней множителей
    for (let t=0; t<=arr.length; t++) {    
        let count=1;
        let z=arr[0];
        for (let i=1; i<arr.length;i++){
            if (arr[i]==z) {
                count++;
            }
            //document.write("<br /> <br /> Первый множитель: " + z + "<br /> Степень множителя: " + count);
        }
        arrP.push(z);       //запись множителя в массив
        arrQ.push(count);   //запись степени в массив
        arr=arr.filter(element => element !==z);    //удаление текущего множителя из массива
        
        //document.write("<br /> Массив оставшийся: " + arr);
    }
    document.write("<br /> <br /> Массив множителей: " + arrP);
    document.write("<br /> Массив степеней множителей: " + arrQ);
//Основной цикл
    let arrC = [];
    for (let x=0; x<arrP.length; x++) {
        let countZ = 0;
        let z = factorial;
        while (z >= 1) {
            z = z/arrP[x];
            countZ = countZ + Math.trunc(z);   //функция целой части от числа
            //document.write("<br /> Целое число от деления: " + Math.trunc(z));
            //document.write("<br /> Промежуточное количество нулей в факториале: " + countZ);
        }
        let c = Math.trunc(countZ/arrQ[x]);
        //document.write("<br /> Окончательное количество нулей в факториале: " + countZ);
        arrC.push(c);
    }
    document.write("<br /> Массив со значениями: " + arrC);
//Выбор минимального количества нулей
    let min=arrC[0];
    for (let y=1; y<=arrC.length; y++) {
        if (arrC[y]<min) {
            min=arrC[y];
        }
    }
    document.write("<br /> Количество нулей в конце числа: " + min);
}

function divideNum(){
    var number = prompt("Enter number");
	var j = 2;
	var d = 0;
	var counter = 1;
	var record = 0;
	var a;
	var arr = new Array();
	document.write("<br /> " +number+" = ");
// здесь мы разделили число на множители и записали в массив arr []
	while(j<=number) {
		while(number%j==0) {
			number = number/j;
			arr[d] = j;
			d++;
			if(number==1) {
				break;
			}
		}
		j++;
	}
//можно вивести так :
//-----------------------------------------------------------------
//но это еще не все все числа повторяющихся сделать в квадрате или в кубе, четвертой степени и т. д.
    document.write("<br /> Массив множителей: " + arr);
    let arrP=[];
    let arrQ=[];
    for (let t=0; t<=arr.length; t++) {    
        let count=1;
        let z=arr[0];
        for (let i=1; i<arr.length;i++){
            if (arr[i]==z) {
                count++;
            }
            document.write("<br /> <br /> Первый множитель: " + z + "<br /> Степень множителя: " + count);
        }
        arrP.push(z);
        arrQ.push(count);
        arr=arr.filter(element => element !==z);
        document.write("<br /> <br /> Массив множителей: " + arrP);
        document.write("<br /> Массив степеней множителей: " + arrQ);
        document.write("<br /> Массив оставшийся: " + arr);
    }
    

    /*for(var i = 0; i < arr.length; i++) {
			while (arr[i]==arr[i+1]) {
				counter++;
				record = arr[i];
				arr.splice(i+1, 1);
			}
		if(arr[i] == record) {
			document.write(arr[i]+"<sup>"+ counter +"</sup> ");
		}else {
			document.write(arr[i]+" ");
		}
		
		if(i != arr.length-1) {
			document.write(" * ");
		}
		counter = 1;
    }*/
    
}