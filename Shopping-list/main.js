const items = document.querySelector('.items');
const newItemForm = document.querySelector('.new-item-form');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

newItemForm.addEventListener('submit', (event) => {
    //submit은 페이지를 새로고침하는 특성이 있어서 preventDefault해줌.
    event.preventDefault();
    onAdd();
});

function onAdd() {
    const text = input.value;
    if(text === ''){
        input.focus();
        return;
    }
    const item = creatItem(text);
    items.appendChild(item);
    item.scrollIntoView({Block:'center'});
    input.value = '';
    input.focus();
}

let id = 0;
function creatItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id);

    itemRow.innerHTML = `
        <div class="item">
            <span class="item__name">${text}</span>
                <button class="item__delete">
                    <i class="fas fa-trash-alt" data-id=${id}></i>
                </button>
            </span>
        </div>
        <div class="item__divider"></div>
    `;
    id++;
    /* const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const name = document.createElement('span');
    name.setAttribute('class', 'item__name');
    name.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow);
    })

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');

    item.appendChild(name);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider); */
    return itemRow;
}

items.addEventListener('click', (event) => {
    const id = event.target.dataset.id;
    if(id) {
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
        toBeDeleted.remove();
    }
});