var counter = 0;
var button = document.getElementById("enter");

function imprimir(){

		console.log("Se ha probado enter ");
		console.log(counter);
		console.log("veces")
};

button.addEventListener("click", function(){

	counter=counter+1;

	imprimir();
});
