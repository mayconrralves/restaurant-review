if("serviceWorker" in navigator){
	navigator.serviceWorker.register("service_worker.js")
	.then(function(){
		console.log("registrado!(Service Worker)");

	})
	.catch(function(){
		console.log("falhou o registro do serviceWorker");
	});
}