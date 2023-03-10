console.log('Initializing pyodide');

import { loadPyodide } from '../node_modules/pyodide/pyodide.mjs';

const pyodide = await loadPyodide();
await pyodide.loadPackage('pycparser');

onmessage = ev => {
	try{
		const result = pyodide.runPython(ev.data.script, ev.data.context);
		postMessage({ isError: false, result });
	}catch(err){
		postMessage({ isError: true, result: err });
	}
	
}

console.log('Initialized pyodide');