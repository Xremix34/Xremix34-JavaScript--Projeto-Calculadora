            
            

 
$(document).ready(function(){ //função que inicia a class document para que seja possivel programae em jquery
var n_anterior="";  //guarda o numero digtado no dispplay
var valorA;  //variavel que armazena um primeiro valor
var valorB;  //variavel que armazena um segundo valor
var operacao;   //variavel que armazena a operação
 
  //BOTÕES NUMÉRICOS

    $("#button1").click(function(){ //no click de button1
        var valor = $(this).val(); //valor = valor do butao
        $("#display").val(n_anterior+valor); //mostra no ecrã o numero anterior e concatena o novo valor
        n_anterior = $("#display").val(); //n_anterior passa a ser o novo valor do display
    });
   
    $("#button2").click(function(){  //no click de button2
    var valor = $(this).val();  //valor = valor do butao
        $("#display").val(n_anterior+valor); //mostra no ecrã o numero anterior e concatena o novo valor
        n_anterior = $("#display").val();  //n_anterior passa a ser o novo valor do display
    });

    $("#button3").click(function(){  //no click de button3
        var valor = $(this).val();  //valor = valor do butao
        $("#display").val(n_anterior+valor); //mostra no ecrã o numero anterior e concatena o novo valor
        n_anterior = $("#display").val();   //n_anterior passa a ser o novo valor do display
    });
    
     $("#button4").click(function(){  //no click de button4
        var valor = $(this).val();   //valor = valor do butao
        $("#display").val(n_anterior+valor);   //mostra no ecrã o numero anterior e concatena o novo valor
        n_anterior = $("#display").val();  //n_anterior passa a ser o novo valor do display
    });
 
    $("#button5").click(function(){  //no click de button5
        var valor = $(this).val();  //valor = valor do butao
        $("#display").val(n_anterior+valor);  //mostra no ecrã o numero anterior e concatena o novo valor
        n_anterior = $("#display").val();  //n_anterior passa a ser o novo valor do display
    });

    $("#button6").click(function(){  //no click de button6
        var valor = $(this).val();  //valor = valor do butao
        $("#display").val(n_anterior+valor);  //mostra no ecrã o numero anterior e concatena o novo valor
        n_anterior = $("#display").val(); //n_anterior passa a ser o novo valor do display
    });

    $("#button7").click(function(){   //no click de button7
        var valor = $(this).val();  //valor = valor do butao
        $("#display").val(n_anterior+valor);  //mostra no ecrã o numero anterior e concatena o novo valor
        n_anterior = $("#display").val();  //n_anterior passa a ser o novo valor do display
    });

    $("#button8").click(function(){   //no click de button8
        var valor = $(this).val();  //valor = valor do butao
        $("#display").val(n_anterior+valor);  //mostra no ecrã o numero anterior e concatena o novo valor
        n_anterior = $("#display").val(); //n_anterior passa a ser o novo valor do display
    });

    $("#button9").click(function(){  //no click de button9
        var valor = $(this).val();  //valor = valor do butao
        $("#display").val(n_anterior+valor); //mostra no ecrã o numero anterior e concatena o novo valor
        n_anterior = $("#display").val();   //n_anterior passa a ser o novo valor do display
    });

    $("#button0").click(function(){ //no click de button0
        var valor = $(this).val();  //valor = valor do butao
        $("#display").val(n_anterior+valor); //mostra no ecrã o numero anterior e concatena o novo valor
        n_anterior = $("#display").val();   //n_anterior passa a ser o novo valor do display       
    });

  
    $("#clearButton").click(function(){ //no click de clear button
        $("#display").val(""); // mostra o erã em vazio
        valorA = 0; //passa o valorA para zero
        valorB = 0; //passa o valorB para zero
        n_anterior="" //limpa o numero que foi guardado anteriormente
        operacao = ""; //limpa a operação executada
    });
      
       

    $("#addButton").click(function(){ //no click do button addButton 
     valorA = parseFloat($("#display").val()); //guarda o valor do display convertido para float no valor A
      operacao = "+";//da set da operação para soma
     
       n_anterior = ""; //deixa o numero anterior em vazio;
    });
  
    $("#subtractButton").click(function(){ //no click do button subtractButton
      valorA = parseFloat($("#display").val()); //guarda o valor do display convertido para float no valor A 
     
       operacao = "-";  //da set da operação para subtração
          n_anterior = ""; //deixa o numero anterior em vazio;
    });
  
    $("#multiplyButton").click(function(){ //no click do button multiplyButton
     valorA = parseFloat($("#display").val()); //guarda o valor do display convertido para float no valor A 
        operacao = "*"; //da set da operação para multiplicação
     n_anterior = ""; //deixa o numero anterior em vazio
    });
  
    $("#divideButton").click(function(){ //no click do button divideButton
    valorA = parseFloat($("#display").val()); //guarda o valor do display convertido para float no valor A 
 
        operacao = "/"; //da set da operação para divisão
        n_anterior = ""; //deixa o numero anterior em vazio
    });


    //OPERAÇOES EXTRAS
    $("#factorial").click(function(){ //no click do button factorial 
        var valor =$("#display"); //guarda o valor do display no valor
        var total = 1; //variavél guarda o valor do tatal   
        for(var n=1; n<=valor.val(); n++)//loop de iteração até ao valor
        {total=total*n; }//conta o fatorial para o total
        $("#display").val(total);//mostra no display o total
    });  

    $("#square").click(function(){//no click do button square
        var valor = $("#display");//guarda o valor do display no valor
        $("#display").val(valor.val() * valor.val());//calcula o expoente 2 de valor
    }); 

     $("#threeSquare").click(function(){//no click do button threSquare
        var valor = $("#display");//guarda o valor do display no valor
        $("#display").val(valor.val() * valor.val());//calcula o expoente 3 de valor
    }); 

    $("#sqrtSquare").click(function(){//no click do button sqrtSquare
        var valor = $("#display");//guarda o valor do display no valor
        $("#display").val( Math.sqrt(valor.val()));//calcula a raiz quadrada do valor
    }); 

   $("#nSquare").click(function(){//no click do button nSquare
            var valor = $("#display");//guarda o valor do display no valor
            $("#display").val( Math.pow(2, +valor.val()));//calcula o n expoente de 2 do valor
        }); 

   $("#cos").click(function(){//no click do button cos
    var valor = $("#display");//guarda o valor do display no valor
    $("#display").val(Math.cos(valor.val()));//calcula o do valor do coseno
   });

      $("#sen").click(function(){//no click do button sen
    var valor = $("#display");//guarda o valor do display no valor
$("#display").val(Math.sin(valor.val()));//calcula o do valor do seno
   });

         $("#tan").click(function(){//no click do button tan
    var valor = $("#display");//guarda o valor do display no valor
$("#display").val(Math.tan(valor.val()));//calcula o do valor da tangente
   });

         $("#log").click(function(){//no click do button log
    var valor = $("#display");//guarda o valor do display no valor
$("#display").val(Math.log(valor.val()));//calcula o do valor do logaritmo
   });

         $("#exp").click(function(){//no click do button exp
var valor = $("#display");//guarda o valor do display no valor
s("#display").val(Math.exp(valor.val()));//calcula o do valor do expoente
         });

         $("#percent").click(function(){//no click do button percent
    var valor = $("#display");//guarda o valor do display no valor
$("#display").val(valor.val()/100);//calcula o do valor do percentagem
   });
       
$("#mathPi").click(function(){//no click do button mathPi
    var valor = $("#display");//guarda o valor do display no valor
    $("#display").val(Math.PI);//calcula o do valor do PI.
});

$("#back").click(function(){//no click do button back
    var valor = $("#display");//guarda o valor do display no valor
    $("#display").val(n_anterior = n_anterior.substring(0, n_anterior.length-1));
}); //apaga valor a valor
    
$("#ember").click(function(){//no click do button ember
    var valor = $("#display");//guarda o valor do display no valor
    $("#display").val( n_anterior += '.');//mostra no display o numero anterior seguido de um ponto
});

  $("#inverse").click(function(){//no click do button ember
            var valor = $("#display");//guarda o valor do display no valor
            $("#display").val(1 / valor.val());//calcular o numero inverso
        }); 

    $("#equalsButton").click(function(){//no click do equalsbutton
        valorB = parseFloat($("#display").val()); ////guarda o valor do display convertido para float no valor B
    switch(operacao){//switch de verificação de operação
       case "+":  //caso operação seja +
            var resultado=(valorA)+(valorB);//soma valor A e B e guarda em resultado        
           break;

        case "-"://caso operação seja -
             var resultado=(valorA)-(valorB);//subtrai o valor B a A e guarda em resultado 

            break;

        case "*"://caso operação seja *
           var resultado =(valorA)*(valorB);//multiplica o valor A por B e guarda em resultado 
          
            break;

        case "/"://caso operação seja /
             var resultado =(valorA)/(valorB); //divide o valor A por B e guarda em resultado     
            break;

    }
     $("#display").val(resultado);//mostra o resultado no display

    });
});

//Operaçoessuplentes



   
  
   
