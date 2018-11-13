var classes = [];

let walkDOM = function (node,func) {
        func(node);
        node = node.firstElementChild;
        while(node) {
            walkDOM(node,func);
            node = node.nextElementSibling;
        }
};

function recordClasses(node) {
	// console.log(node, typeof node);
	node.classList.forEach(token => {
		if (classes.indexOf(token) === -1) classes.push(token);
	});
}

function showClassesInConsole(classes) {
	console.info("%cThe following classes are in the DOM:", "font-family: Open Sans, sans-serif; font-weight: bold");
	console.table(classes);
	// classes.forEach(className => {
	// 	console.info(className);
	// });
}

walkDOM(document.querySelector('body'), recordClasses);
classes.sort();
showClassesInConsole(classes);