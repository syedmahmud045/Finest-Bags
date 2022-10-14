function getBagBYId(cartId, TitleId){
	document.getElementById(cartId).addEventListener('click', function(){
		const listContainer = document.getElementById('list-container');
		const li = document.createElement('li');

		const textTitle = document.getElementById(TitleId);
		const text = textTitle.innerText;
		
		li.innerText = text;
		listContainer.appendChild(li); 

		const button = document.getElementById(cartId);
		button.disabled = true;
		
	})
}
getBagBYId('cart', 'title');
getBagBYId('cart2', 'title2');
getBagBYId('cart3', 'title3');
getBagBYId('cart4', 'title4');
getBagBYId('cart5', 'title5');
getBagBYId('cart6', 'title6');

function getTextElementById(element){
	const textelement = document.getElementById(element);
	const textElementString = textelement.innerText;
	const textElementAmount = parseFloat(textElementString);
	return textElementAmount;
}

function getInputElementById(element){
	const inputElement = document.getElementById(element);
	const inputElementstring = inputElement.value;
	const inputElementAmount = parseFloat(inputElementstring);
	return inputElementAmount;
}

document.getElementById('AllBagPrice').addEventListener('click', function(){
	
	const allLi = document.querySelectorAll("#list-container li").length;
	const countExp = allLi*1000;

	const bagexp = document.getElementById('bagExp');

	bagexp.innerText = countExp;
})

document.getElementById('totalCost').addEventListener('click', function(){

	const newBagExpAmount = getTextElementById('bagExp');

	const shipCostAmount = getInputElementById('ShipingCost');
	const commissionCostAmount = getInputElementById('CommissionCost');

	const totalAmount = document.getElementById('totalAmount');

	totalAmount.innerText = newBagExpAmount + shipCostAmount + commissionCostAmount;

})