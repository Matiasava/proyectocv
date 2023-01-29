
/*
 cada funcion agraga o quita la clase b1 en los elementos que quiero mostrar segun el boton
 donde se cliquea dejando como pretederminado el inicio donde dejo un resumen rapido de lo mas
 importante 
*/


/* esta funcioan agrega la clase b1 (display none) a todos los elementos caja 4 excepto op2 que la remueve */
function seleccion ()
 {
   document.getElementById("op1").classList.add("b1");
   document.getElementById("op3").classList.add("b1");
   document.getElementById("op4").classList.add("b1");
   document.getElementById("op5").classList.add("b1");
   document.getElementById("op6").classList.add("b1");
   document.getElementById("op7").classList.add("b1");
   document.getElementById("op2").classList.remove("b1");

 }

 document.getElementById("Pp").onclick = function () 
  {
    seleccion();
  }
   
  /* esta funcioan agrega la clase b1 (display none) a todos los elementos caja 4 excepto op3 que la remueve */

  
    function seleccion1 ()
    {

      document.getElementById("op1").classList.add("b1");
      document.getElementById("op2").classList.add("b1");
      document.getElementById("op4").classList.add("b1");
      document.getElementById("op5").classList.add("b1");
      document.getElementById("op6").classList.add("b1");
      document.getElementById("op7").classList.add("b1");
      document.getElementById("op3").classList.remove("b1");
     
     }
    
     document.getElementById("Ip").onclick = function ()
      {
        seleccion1();
      }

       /* esta funcioan agrega la clase b1 (display none) a todos los elementos caja 4 excepto op4 que la remueve */

        function seleccion2 ()
        {

          document.getElementById("op1").classList.add("b1");
          document.getElementById("op2").classList.add("b1");
          document.getElementById("op3").classList.add("b1");
          document.getElementById("op5").classList.add("b1");
          document.getElementById("op6").classList.add("b1");
          document.getElementById("op7").classList.add("b1");
          document.getElementById("op4").classList.remove("b1");
         }
         
         document.getElementById("Ca").onclick = function () 
          {
            seleccion2();
          }
           
          /* esta funcioan agrega la clase b1 (display none) a todos los elementos caja 4 excepto op5 que la remueve */
 
           function seleccion3 ()
            {

              document.getElementById("op1").classList.add("b1");
              document.getElementById("op2").classList.add("b1");
              document.getElementById("op4").classList.add("b1");
              document.getElementById("op3").classList.add("b1");
              document.getElementById("op6").classList.add("b1");
              document.getElementById("op7").classList.add("b1");
              document.getElementById("op5").classList.remove("b1");
             
             }
              
             document.getElementById("Cu").onclick = function ()
              {
                seleccion3();
              }
                
               /* esta funcioan agrega la clase b1 (display none) a todos los elementos caja 4 excepto op6 que la remueve */

               function seleccion4 ()
                 {

                  document.getElementById("op1").classList.add("b1");
                  document.getElementById("op2").classList.add("b1");
                  document.getElementById("op4").classList.add("b1");
                  document.getElementById("op5").classList.add("b1");
                  document.getElementById("op3").classList.add("b1");
                  document.getElementById("op7").classList.add("b1");
                  document.getElementById("op6").classList.remove("b1");
                            
                 }
                  
                 document.getElementById("Ex").onclick = function () 
                  {
                    seleccion4();
                  }
                    
                  /* esta funcioan agrega la clase b1 (display none) a todos los elementos caja 4 excepto op7 que la remueve */
 

                    function seleccion5 ()
                     {

                       document.getElementById("op1").classList.add("b1");
                       document.getElementById("op2").classList.add("b1");
                       document.getElementById("op4").classList.add("b1");
                       document.getElementById("op5").classList.add("b1");
                       document.getElementById("op6").classList.add("b1");
                       document.getElementById("op3").classList.add("b1");
                       document.getElementById("op7").classList.remove("b1");
                     
                     }
                     
                     document.getElementById("Co").onclick = function () 
                      {
                        seleccion5();
                      }
                        
                      /* esta funcioan agrega la clase b1 (display none) a todos los elementos caja 4 excepto op1 que la remueve */

                        function seleccion6 ()
                         {

                           document.getElementById("op3").classList.add("b1");
                           document.getElementById("op2").classList.add("b1");
                           document.getElementById("op4").classList.add("b1");
                           document.getElementById("op5").classList.add("b1");
                           document.getElementById("op6").classList.add("b1");
                           document.getElementById("op7").classList.add("b1");
                           document.getElementById("op1").classList.remove("b1");
                                            
                         }
                         
                         document.getElementById("In").onclick = function () 
                          {
                            seleccion6();
                          }