
const py = new Worker('./worker.js', { type: 'module' });

py.onmessage = evt => {
	if(evt.data.isError){
		console.error(evt.data.result);
	}else{
		console.log(evt.data.result);
	}
}

py.onerror = (evt, ...args) => {
	console.error('Pyodide worker error: ', evt, args);
}

py.postMessage({ 
	script: `from pycparser import __version__\nprint(__version__)`
});