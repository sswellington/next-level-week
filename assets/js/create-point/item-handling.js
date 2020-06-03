// Item Handling
// --- --- --- --- 
// Ex.: create-point.html            
// <fieldset>
//     <legend>
//         <h2>Itens de coleta</h2>
//     </legend>
// </fieldset>

const itemsToCollect = (document.querySelectorAll('.items-grid li'));

for (item of itemsToCollect) {
    item.addEventListener('click', handleSelectedItem);
}

const collectedItems = (document.querySelector('[name=items]'));
let seletctedItems = [];

function handleSelectedItem(event) {
    const itemLi = event.target

    // Toggle the class status
    itemLi.classList.toggle('selected');

    const itemId = (itemLi.dataset.id);

    // Gets all selected items
    const alreadySelected = selectedItems.findIndex(item => {
        // Found item
        return (item == itemId);
    });

    // Toggle item status,
    // get value of item and 
    // reset value of item 
    if (alreadySelected != -1) {
        const filteredItems = seletctedItems.filter(item => {
            return (item != itemId);
        });
        seletctedItems = (filteredItems);
    } else {
        seletctedItems.push(itemId);
    }
    collectedItems.value = (seletctedItems);
}