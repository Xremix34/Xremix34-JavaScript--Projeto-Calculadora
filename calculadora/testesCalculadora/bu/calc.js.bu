            
            

 
$(document).ready(function(){
var n_anterior="";
var valorA;
var valorB;
var operacao;
 
  //BOTÕES NUMÉRICOS

    $("#button1").click(function(){
        var valor = $(this).val();
        $("#display").val(n_anterior+valor);
        n_anterior = $("#display").val();
    });
   
    $("#button2").click(function(){
    var valor = $(this).val();
        $("#display").val(n_anterior+valor);
        n_anterior = $("#display").val();
    });

    $("#button3").click(function(){
        var valor = $(this).val();
        $("#display").val(n_anterior+valor);
        n_anterior = $("#display").val();
    });
    
     $("#button4").click(function(){
        var valor = $(this).val();
        $("#display").val(n_anterior+valor);
        n_anterior = $("#display").val();
    });

    $("#button5").click(function(){
        var valor = $(this).val();
        $("#display").val(n_anterior+valor);
        n_anterior = $("#display").val();
    });

    $("#button6").click(function(){
        var valor = $(this).val();
        $("#display").val(n_anterior+valor);
        n_anterior = $("#display").val();
    });

    $("#button7").click(function(){
        var valor = $(this).val();
        $("#display").val(n_anterior+valor);
        n_anterior = $("#display").val();
    });

    $("#button8").click(function(){
        var valor = $(this).val();
        $("#display").val(n_anterior+valor);
        n_anterior = $("#display").val();
    });

    $("#button9").click(function(){
        var valor = $(this).val();
        $("#display").val(n_anterior+valor);
        n_anterior = $("#display").val();
    });

    $("#button0").click(function(){
        var valor = $(this).val();
        $("#display").val(n_anterior+valor);
        n_anterior = $("#display").val();       
    });

  
    $("#clearButton").click(function(){
        $("#display").val("");
        valorA = 0;
        valorB = 0;
        n_anterior=""
        operacao = "";
    });
      
      var operacao = $(this).val();

    $("#addButton").click(function(){
      valorA = parseFloat($("#display").val());
      operacao="+";
         $("#display").val("0");
       n_anterior = "";
    });
  
    $("#subtractButton").click(function(){
       valorA = parseFloat($("#display").val());
       operacao = "-";
        $("#display").val("0");
          n_anterior = "";
    });
  
    $("#multiplyButton").click(function(){
        valorA = parseFloat($("#display").val());
        operacao = "*";
         $("#display").val("0");
     n_anterior = "";
    });
  
    $("#divideButton").click(function(){
       valorA = parseFloat($("#display").val());
        operacao = "/";
         $("#display").val("0");
        n_anterior = "";
    });


      //OPERAÇOES DE 1 OPERANDO
      $("#factorial").click(function(){
            var valor =$("#display"); var total = 1;
            for(var n=1; n<=valor.val(); n++)
             {total=total*n; }
         $("#display").val(total);
         });  

          $("#square").click(function(){
            var valor = $("#display");
            $("#display").val(valor.val() * valor.val());
        }); 

         $("#sqrtSquare").click(function(){
            var valor = $("#display");
            $("#display").val( Math.sqrt(valor.val()));
        }); 

   $("#nSquare").click(function(){
            var valor = $("#display");
            $("#display").val( Math.pow(2, +valor.val()));
        }); 

   $("#cos").click(function(){
    var valor = $("#display");
$("#display").val(Math.cos(valor.val()));
   });

      $("#sen").click(function(){
    var valor = $("#display");
$("#display").val(Math.sin(valor.val()));
   });

         $("#tan").click(function(){
    var valor = $("#display");
$("#display").val(Math.tan(valor.val()));
   });

         $("#log").click(function(){
    var valor = $("#display");
$("#display").val(Math.log(valor.val()));
   });

         $("#exp").click(function(){
var valor = $("#display");
s("#display").val(Math.exp(valor.val()));
         });

         $("#percent").click(function(){
    var valor = $("#display");
$("#display").val(valor.val()/100);
   });
       
        $("#mathPi").click(function(){
    var valor = $("#display");
$("#display").val(Math.PI);
   });

               $("#back").click(function(){
    var valor = $("#display");
$("#display").val(n_anterior = n_anterior.substring(0, n_anterior.length-1));
   });


     
      $("#ember").click(function(){
    var valor = $("#display");
$("#display").val( n_anterior += '.');
   });

          $("#parenLeft").click(function(){
    var valor = $("#display");
$("#display").val( n_anterior += '(');
   });


  $("#inverse").click(function(){
            var valor = $("#display");
            $("#display").val(1 / valor.val());
        }); 

                    
      
          
  
    $("#equalsButton").click(function(){
        valorB = parseFloat($("#display").val());
    switch(operacao){
        case "+":  
           var resultado= (valorA)+(valorB);           
            break;

        case "-":
            var resultado=(valorA)-(valorB);
            break;

        case "*":
             var resultado=(valorA)*(valorB);           
            break;

        case "/":
             var resultado=(valorA)/(valorB);          
            break;

    }
     $("#display").val(resultado);

   

    });
});

//Operaçoessuplentes



   
  
   
