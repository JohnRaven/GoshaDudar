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


    let factorial=18835759; //72300914  18835759
    let number = 112710;       //160       190
                            //14460180  
//Разложение на множители системы исчисления:
                //условие
    let j = 2;
	let d = 0;
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
    document.write("<br /> Массив множителей: " + arr);
    let variable = arr.length;
	            //разделение числа на множители и запись его в массив arr []    
    let arrP=[];    //массив множителей
    let arrQ=[];    //массив степеней множителей
    for (let t=0; t<arr.length + variable; t++) {    
        let count=1;
        let z=arr[0];
        for (let i=1; i<=arr.length;i++){
            if (arr[i]==z) {
                count++;
            }
            //document.write("<br /> <br /> Первый множитель: " + z + "<br /> Степень множителя: " + count);
        }
        arrP.push(z);       //запись множителя в массив
        arrQ.push(count);   //запись степени в массив
        arr=arr.filter(element => element !==z);    //удаление текущего множителя из массива
        
        document.write("<br /> Массив оставшийся: " + arr);
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

function makeExchange() {
    /*var money = 56;
    var banknotes = [50, 25, 10, 5, 1];
    var count = [];
    document.write ('<br/> <br/> Вы хотите разменять сумму: ' + money);
    document.write ('<br/> По следующим номиналам: ' + banknotes);
    if (money <= 0) {
        document.write ('<br/> <br/> Количество ваших денег слишком мало: ' + count);
    } else if (money > 10000) {
        document.write ('<br/> <br/> error: \"You are rich, my friend! We don\'t have so much coins for exchange\"');
    } else {
        for (let i=0; i<= banknotes.length; i++){
            if (money > 0) {
                let z= Math.trunc(money/banknotes[i]);
                money = money - z*banknotes[i];
                count.push(z);
            } else {
                break;
            }
        }
        document.write ('<br/> <br/> Ваши деньги можно разбить следующим образом: ' + count);
    }*/
      
    var money = 1256;
    var banknotes = {H: 50, Q: 25, D: 10, N: 5, P: 1};  //Задан объект с ключами, у которых указаны номиналы
    var str = JSON.stringify(banknotes);                //Представление объекта в виде строки
    var count = {H: 0, Q: 0, D: 0, N: 0, P: 0};
    document.write ('<br/> <br/> Вы хотите разменять сумму: ' + money);
    document.write ('<br/> По следующим номиналам: ' + str);
    if (money <= 0) {
        document.write ('<br/> <br/> Количество ваших денег слишком мало: ' + '{}');
    } else if (money > 10000) {
        document.write ('<br/> <br/> {error: \"You are rich, my friend! We don\'t have so much coins for exchange\"}');
    } else {
        for(var i in banknotes){        //Цикл for для объекта (перебирает последовательно ключи)
            if (money > 0) {
                let z= Math.trunc(money/banknotes[i]);      //Берем целую часть от деления денег на номинал
                money = money - z*banknotes[i];             //Отнимаем из общей суммы произведение номинала на его количество
                count[i] = z;                               //В новый объект последовательно вносим количество номинала
                document.write ('<br/> <br/> значения внутри цикла: Z=' + z +'; остаток денег: '+ money+ '; размененые: '+JSON.stringify(count));
            }
        }

// Функция, которая объект переводит в строку, при этом удаляет все ключи, у которых значение равно нулю...
        var strOut = JSON.stringify(count, function(key, value) {
            if (value == 0) return undefined;
            return value;
            }
        ); 
        document.write ('<br/> <br/> Ваши деньги можно разбить следующим образом: ' + strOut);
    }
     
    
}

function sudoku(){
    //Поиск чисел для одного массива:
    /*for (var i=0; i<=matrix.length; i++){
        if (matrix[i]==0){
            for (var t=1; t<=9; t++) {
                var count=0;
                for (var k=0; k<=matrix.length; k++){
                    if (matrix[k]==t) {
                        count++;
                    }
                }
                if (count==0){
                    matrix[i]=t;
                    break;
                }
            }
        }
    }*/
    
    
    
    var matrix =    [[5, 3, 4, 6, 7, 8, 9, 0, 0],
                    [0, 7, 2, 1, 9, 5, 3, 4, 8],
                    [1, 0, 8, 3, 4, 2, 5, 6, 7],
                    [8, 5, 0, 7, 6, 1, 4, 2, 3],
                    [4, 2, 6, 0, 5, 3, 7, 9, 1],
                    [7, 1, 3, 9, 0, 4, 8, 5, 6],
                    [9, 6, 1, 5, 3, 0, 2, 8, 4],
                    [2, 8, 7, 4, 1, 9, 0, 3, 5],
                    [3, 4, 5, 2, 8, 6, 1, 0, 9]];           
                 /*[[5, 3, 4, 6, 7, 8, 9, 0, 0],
                    [6, 7, 2, 1, 9, 5, 3, 4, 8],
                    [1, 9, 8, 3, 4, 2, 5, 6, 7],
                    [8, 5, 9, 7, 6, 1, 4, 2, 3],
                    [4, 2, 6, 8, 5, 3, 7, 9, 1],
                    [7, 1, 3, 9, 2, 4, 8, 5, 6],
                    [9, 6, 1, 5, 3, 7, 2, 8, 4],
                    [2, 8, 7, 4, 1, 9, 6, 3, 5],
                    [3, 4, 5, 2, 8, 6, 1, 7, 9]]*/
    //document.write ('<br> значение массива: '+ matrix);
    for (let z=0; z<matrix.length; z++) {
        for (var i=0; i<=matrix[z].length; i++){
            if (matrix[z][i]==0){
                for (var t=1; t<=9; t++) {
                    var count=0;
                    for (var k=0; k<=matrix[z].length; k++){
                        if (matrix[z][k]==t) {
                            count++;
                        }
                    }
                    if (count==0){
                        matrix[z][i]=t;
                        break;
                    }
                }
            }
        }
    }
    document.write ('<br> значение массива: '+ matrix);




    
}