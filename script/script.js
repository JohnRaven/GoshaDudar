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
// Поиск чисел для вложенных массивов в каждои отдельно...
    /*for (let z=0; z<matrix.length; z++) {
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
    }*/
    /*for (let z=0; z<matrix.length; z++) {
        for (var i=0; i<=matrix[z].length; i++){
            if (matrix[z][i]==0){
                for (var t=1; t<=9; t++) {
                    var count=0;
                    for (var k=0; k<=matrix[z].length; k++){
                        if (matrix[z][k]==t) {
                            count++;
                        }
                    }
                    var secC=true;
                    for (var p=0; p<matrix.length; p++){
                        if (t==matrix[p][i]) {
                            secC=false;
                        }
                    }
                    if (count==0 && secC==true){
                        matrix[z][i]=t;
                        break;
                    }
                }
            }
        }
      }
      return matrix;*/   
    var matrix =   [[6, 5, 0, 7, 3, 0, 0, 8, 0],
                    [0, 0, 0, 4, 8, 0, 5, 3, 0],
                    [8, 4, 0, 9, 2, 5, 0, 0, 0],
                    [0, 9, 0, 8, 0, 0, 0, 0, 0],
                    [5, 3, 0, 2, 0, 9, 6, 0, 0],
                    [0, 0, 6, 0, 0, 0, 8, 0, 0],
                    [0, 0, 9, 0, 0, 0, 0, 0, 6],
                    [0, 0, 7, 0, 0, 0, 0, 5, 0],
                    [1, 6, 5, 3, 9, 0, 4, 7, 0]];           
                 /*[[5, 3, 4, 6, 7, 8, 9, 0, 0],
                    [6, 7, 2, 1, 9, 5, 3, 4, 8],
                    [1, 9, 8, 3, 4, 2, 5, 6, 7],
                    [8, 5, 9, 7, 6, 1, 4, 2, 3],
                    [4, 2, 6, 8, 5, 3, 7, 9, 1],
                    [7, 1, 3, 9, 2, 4, 8, 5, 6],
                    [9, 6, 1, 5, 3, 7, 2, 8, 4],
                    [2, 8, 7, 4, 1, 9, 6, 3, 5],
                    [3, 4, 5, 2, 8, 6, 1, 7, 9]]*/
    
    
    var myArr = [];
    myArr = JSON.parse(JSON.stringify(matrix));
    var matrixX = [];
    matrixX = JSON.parse(JSON.stringify(matrix));
    
    for (let p=1; p<=100; p++){
        for (var x=0; x<myArr.length; x++){
            for (var y=0; y<myArr[x].length; y++){
                if (myArr[x][y] == 0) {
                    myArr[x][y]=['(',1,2,3,4,5,6,7,8,9,')'];
                }

                for (var z=0; z<myArr[x][y].length; z++){   //Проверка каждого значения на "индивидуальность"...
                    for (let k=0; k<matrixX[x].length; k++){     //Проверка совпадений в горизонтальной строке
                        if (myArr[x][y][z]==matrixX[x][k]) {
                            delete myArr[x][y][z];
                            //break;
                        }
                    }
                    for (let k=0; k<matrixX.length; k++){        //Проверка совпадений в вертикальной строке
                        if (myArr[x][y][z]==matrixX[k][y]){
                            delete myArr[x][y][z];
                            //break;
                        }
                    }
                    var arr1=[matrixX[0][0], matrixX[0][1], matrixX[0][2], matrixX[1][0], matrixX[1][1], matrixX[1][2], matrixX[2][0], matrixX[2][1], matrixX[2][2]];
                    var arr2=[matrixX[0][3], matrixX[0][4], matrixX[0][5], matrixX[1][3], matrixX[1][4], matrixX[1][5], matrixX[2][3], matrixX[2][4], matrixX[2][5]];
                    var arr3=[matrixX[0][6], matrixX[0][7], matrixX[0][8], matrixX[1][6], matrixX[1][7], matrixX[1][8], matrixX[2][6], matrixX[2][7], matrixX[2][8]];

                    var arr4=[matrixX[3][0], matrixX[3][1], matrixX[3][2], matrixX[4][0], matrixX[4][1], matrixX[4][2], matrixX[5][0], matrixX[5][1], matrixX[5][2]];
                    var arr5=[matrixX[3][3], matrixX[3][4], matrixX[3][5], matrixX[4][3], matrixX[4][4], matrixX[4][5], matrixX[5][3], matrixX[5][4], matrixX[5][5]];
                    var arr6=[matrixX[3][6], matrixX[3][7], matrixX[3][8], matrixX[4][6], matrixX[4][7], matrixX[4][8], matrixX[5][6], matrixX[5][7], matrixX[5][8]];

                    var arr7=[matrixX[6][0], matrixX[6][1], matrixX[6][2], matrixX[7][0], matrixX[7][1], matrixX[7][2], matrixX[8][0], matrixX[8][1], matrixX[8][2]];
                    var arr8=[matrixX[6][3], matrixX[6][4], matrixX[6][5], matrixX[7][3], matrixX[7][4], matrixX[7][5], matrixX[8][3], matrixX[8][4], matrixX[8][5]];
                    var arr9=[matrixX[6][6], matrixX[6][7], matrixX[6][8], matrixX[7][6], matrixX[7][7], matrixX[7][8], matrixX[8][6], matrixX[8][7], matrixX[8][8]];
                    
                    //var ownArr;
                    for (let i=0; i<9; i++){
                        if(x>=0 && x<3) {           //проверка ряда 1
                            if (y>=0 && y<3){           //проверка ячейки 1
                                if (myArr[x][y][z]==arr1[i]) {
                                    delete myArr[x][y][z];
                                }
                            }  
                            if (y>=3 && y<6){           //проверка ячейки 2
                                if (myArr[x][y][z]==arr2[i]) {
                                    delete myArr[x][y][z];
                                }
                            }
                            if (y>=6 && y<9){           //проверка ячейки 3
                                if (myArr[x][y][z]==arr3[i]) {
                                    delete myArr[x][y][z];
                                }
                            }
                        }
                        if(x>=3 && x<6) {           //проверка ряда 2
                            if (y>=0 && y<3){
                                if (myArr[x][y][z]==arr4[i]) {
                                    delete myArr[x][y][z];
                                }
                            }
                            if (y>=3 && y<6){
                                if (myArr[x][y][z]==arr5[i]) {
                                    delete myArr[x][y][z];
                                }
                            }
                            if (y>=6 && y<9){
                                if (myArr[x][y][z]==arr6[i]) {
                                    delete myArr[x][y][z];
                                }
                            }
                        }
                        if(x>=6 && x<9) {           //проверка ряда 3
                            if (y>=0 && y<3){
                                if (myArr[x][y][z]==arr7[i]) {
                                    delete myArr[x][y][z];
                                }
                            }
                            if (y>=3 && y<6){
                                if (myArr[x][y][z]==arr8[i]) {
                                    delete myArr[x][y][z];
                                }
                            }
                            if (y>=6 && y<9){
                                if (myArr[x][y][z]==arr9[i]) {
                                    delete myArr[x][y][z];
                                }
                            }
                        } 
                    }
                    
                    
                    for (let i=0; i<myArr[x][y].length; i++){   //удаление из массива перебора пустых значений
                        if (myArr[x][y][z]==undefined) {
                            myArr[x][y]= myArr[x][y].filter(element => element !== undefined);
                            z = 0;
                        }
                    }
                    
                    if (myArr[x][y].length==3){                 //присваивание ОДИНОЧКИ в матрицу и перезапись матрицы-исходника
                        let n=myArr[x][y][1];
                        myArr[x][y]=n;
                        matrixX[x][y]=n;
                    }
                //проверка строки на скрытую одиночку 
                    /*for (let i=0; i<myArr[x][y].length; i++){
                        let count=1;
                        for (let k=0; k<myArr[x].length; k++){
                            if (myArr[x][k].length>3 && k!=y){
                                for (let s=0; s<myArr[x][k].length; s++){
                                    if (myArr[x][y][i]==myArr[x][k][s]){
                                        count++;
                                    }
                                }
                            }
                        }
                        if (count==1){   //?????
                            //let n=myArr[x][y][i];
                            //myArr[x][y]=n;
                            //matrixX[x][y]=n;
                            //document.write(myArr[x][y][i] + '<br>');
                        }
                    }*/
                    /*for (let s=0; s<myArr[x][y].length; s++){
                        let count;
                        for (let i=0; i<myArr[x].length; i++){
                            for (let k=0; k<myArr[x][i].length; k++){
                                if (myArr[x][y][s]==myArr[x][i][k] && myArr[x][i].length>1 ){
                                    count++;
                                }
                            }
                        }

                        if (count==2){   //?????
                            let n=myArr[x][y][z];
                            myArr[x][y]=n;
                            matrixX[x][y]=n;
                        }
                    }*/

                }
                    
                
            }
            
        }
        
    }   
    for (let x=0; x<myArr.length; x++){                 
        for (let y=0; y<myArr[x].length; y++){
            if (myArr[x][y].length>3){
                for (let i=0; i<myArr[x][y].length; i++){
                    let count=1;
                    for (let k=0; k<myArr[x].length; k++){
                        if (myArr[x][k].length>3 && k!=y){
                            for (let s=0; s<myArr[x][k].length; s++){
                                if (myArr[x][y][i]==myArr[x][k][s]){
                                    count++;
                                }
                            }
                        }
                    }
                    if (count==1){   //?????
                        let n=myArr[x][y][i];
                        myArr[x][y]=n;
                        matrixX[x][y]=n;
                        //document.write(myArr[x][y][i] + '<br>');
                    }
                
                }
            }
        }
    }
    
    document.write('Значение матрицы перезапись-ИСХОДНИК: <br>');
    for (let i = 0; i<matrixX.length; i++) {
        document.write(matrixX[i] + '<br>');
    }

    document.write('Значение матрицы моей: <br>');
    for (let i=0; i<myArr.length; i++) {
        document.write(myArr[i]);
        if (i==2 || i==5){
            document.write ('<hr>');
        } else {
            document.write ('<br>');
        }
    }
    
    
}

function morze(){
    const MORSE_TABLE = {
        '.-':     'a',
        '-...':   'b',
        '-.-.':   'c',
        '-..':    'd',
        '.':      'e',
        '..-.':   'f',
        '--.':    'g',
        '....':   'h',
        '..':     'i',
        '.---':   'j',
        '-.-':    'k',
        '.-..':   'l',
        '--':     'm',
        '-.':     'n',
        '---':    'o',
        '.--.':   'p',
        '--.-':   'q',
        '.-.':    'r',
        '...':    's',
        '-':      't',
        '..-':    'u',
        '...-':   'v',
        '.--':    'w',
        '-..-':   'x',
        '-.--':   'y',
        '--..':   'z',
        '.----':  '1',
        '..---':  '2',
        '...--':  '3',
        '....-':  '4',
        '.....':  '5',
        '-....':  '6',
        '--...':  '7',
        '---..':  '8',
        '----.':  '9',
        '-----':  '0',
    };
    const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";

//разбивает строку по 10 символов и переносит в массив
    var arrStr = expr.match(/.{10}/g);  // аналогично записи        RegExp("((.{"+10+"})+?|(.{1,"+10+"})$)", "g")

    document.write("<br> <br> Исходное значение: " + expr);
    document.write("<br> Массив элементов: " + arrStr);
    
    var arrMorze = [];
    var arrText = [];

    for (let k=0; k<arrStr.length; k++) {
        //arrLetter = arrStr[k].split('');
        let arrLetter = arrStr[k].match(/.{2}/g);     //разбивает строку по 2 символа и переносит в массив

        document.write("<br> очередное значение: " + arrLetter);

        for (let i=arrLetter.length; i>=0; i--){
            if (arrLetter[i]==00){
                // delete arrLetter[i];   //удаляет значение из массива
                // arrStr = arrLetter.filter(element => element !== undefined);
                arrLetter.splice(i, 1);
            } else if (arrLetter[i]==10){
                arrLetter[i]=".";
            } else if (arrLetter[i]==11){
                arrLetter[i]="-";
            } 
        } 
        let strLetter = arrLetter.join(''); // объединить массив в строку 
        document.write("<br>#замененное значение массива: " + arrLetter);
        document.write("<br>##замененное значение строки: " + strLetter);
        arrMorze.push(strLetter);
        document.write("<br>### Значение массива Морзе: " + arrMorze);
        document.write("<br>-- значение объекта: " + MORSE_TABLE[strLetter]); 
        if (strLetter == '**********') {
            arrText.push(' ');
        } else {
            arrText.push(MORSE_TABLE[strLetter]);
        }
            
        document.write("<br>-- значение морзянки: " + arrText);
    }

    let strText = arrText.join(''); // объединить массив в строку 
    document.write("<br>-------------: " + strText);

}