//your JS code here. If required.
function updateOutput(){
	"Hello,world!" after 1 second
	const promise = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("Hello, world!");
		},1000);
	});
}
Hello().then(data=>{
	document.getElementById("output").textContent=data;
});

	
})