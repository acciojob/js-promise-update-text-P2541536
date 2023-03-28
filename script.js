//your JS code here. If required.
function updateOutput(){
	"Hello,world!" after 1 second
	const promise = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("Hello, world!");
		},1000);
	});

//Update the text of the HTML element with ID "output" when the promise resolve
	promise.then((result)=>{
		document.getElementByID("output").textContent=
			result;
	});


}

	
})