//your code here!
const scrollContainer = document.getElementById('infi-list');
let count = 1;
for (; count <= 10; count++) {
	const createItem = document.createElement('div');
	createItem.innerText = `Item ${count}`;
	createItem.className = "item";
	scrollContainer.appendChild(createItem);
}

scrollContainer.addEventListener('scroll',() => {
	let scrolledHeight = scrollContainer.scrollTop;
	let maxScrolledHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
	if(maxScrolledHeight - scrolledHeight < 10){
		addTwoMoreItems();
	}
});

function addTwoMoreItems() {
	const div1 = document.createElement('div');
	div1.innerText = `Item ${count++}`;
	div1.className = 'item';
	const div2 = document.createElement('div');
	div2.innerText = `Item ${count}`;
	div2.className = 'item';
	scrollContainer.append(div1, div2);
}