      //Function for the initial and recreation of the grid
      function genGrid(size){
      	main.style.grid = `repeat(${size}, 1fr)/repeat(${size}, 1fr)`;
        
        //Create cell and add characteristics
      	for(var i = 0; i < size*size; i++){

    			var div = document.createElement("div");
    			div.style.background = "#dcdee2";
    			div.className = "cell";
    			div.addEventListener("mouseover",function()
 				{
 					this.style.background = "black";
 				}, false);

    			main.appendChild(div);
    	}

      }

      //function creates new Grid on click of reset button
      function newGrid(){
      	var cells = Array.from(document.querySelectorAll(".main > *"));

      	cells.forEach(cell => main.removeChild(cell));
      	//prompt user to enter new grid size
      	var num = prompt("Please enter a new grid number: ");
      	genGrid(num);
      }
       
      //generate grid
      let main = document.querySelector(".main");
      genGrid(20);