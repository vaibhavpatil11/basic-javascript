

//item controller
const itemController = (function () {

    const Item = function (id, name, calories) {

        this.id = id;
        this.name = name;
        this.calories = calories;

    }

    const data = {
        items: [
            // { id: 0, name: "abc", calories: 1 }
        ],
        currentItem: null,
        totalCalories: 0
    }

    return {
        getItem: function () {
            return data.items;
        }
        ,
        addItem: function (name, calories) {

            let Id;
            let totalCalories = Number.parseInt(calories);
            if (data.items.length > 0) {
                id = data.items[data.items.length - 1].id + 1;
                data.totalCalories = data.totalCalories + totalCalories;
            } else {
                id = 0;
                data.totalCalories = totalCalories;
            }
            const newItem = new Item(id, name, Number.parseInt(calories));
            data.items.push(newItem);
            return newItem;
        }
        ,
        getTotalCalories: function () {

            return data.totalCalories;
        }
        ,
        logItem: function () {
            console.log(data);
        }

        ,
        setCurrentElement: function (currentElement) {

            data.currentItem = currentElement;

        }
        ,
        getCurrentItem: function () {

            return data.currentItem;
        }
        ,
        updateItem: function (item) {

            let foundItem = null;
            data.items.forEach(element => {
                if (element.id === data.currentItem.id) {
                    data.totalCalories -= element.calories;
                    data.totalCalories += Number.parseInt(item.calories);
                    element.name = item.name;
                    element.calories = Number.parseInt(item.calories);
                    foundItem = element;
                }


            });
            return foundItem;
        },
        deleteItem: function () {

            let currentElementIndex = 0;
            data.items.forEach((element, index) => {
                if (element.id === data.currentItem.id) {

                    currentElementIndex = index;
                }

            });
            data.totalCalories -= Number.parseInt(data.currentItem.calories);
            data.items.splice(currentElementIndex);

        },
        clearData: function () {

            data.items.splice(0, data.items.length);
            data.calories = 0;
            data.currentItem = null;

        }
    }

})();

//ui controller

const uiController = (function () {


    const uiSelectors = {
        itemList: 'item-list',
        listItem: '#item-list li',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        clearBtn: '.clear-btn',
        itenName: 'item-name',
        itenCalories: 'item-calories',
        totalCalories: '.total-calories'
    }

    return {

        pupulateTotalCalores: function (calories) {
            document.querySelector(uiSelectors.totalCalories).textContent = calories;
        },
        pupulateItemList: function (items) {

            let html = "";
            items.forEach(element => {

                html += ` <li class="collection-item" id="item-${element.id}">
                  <strong> ${element.name}: </strong> <em>${element.calories} Calories</em>
                    <a href="#" class="secondary-content">
                  <i class="fa edit-item fa-pencil"></i>
                </a>
              </li>`

            });

            document.getElementById(uiSelectors.itemList).innerHTML = html;
        }
        ,
        getUiSelectors: function () {

            return uiSelectors;
        }
        ,

        getItemInput: function () {

            return {
                name: document.getElementById(uiSelectors.itenName).value,
                calories: document.getElementById(uiSelectors.itenCalories).value
            }

        },
        addListItem: function (item) {

            const li = document.createElement('li');
            li.className = 'collection-item';
            li.id = `item-${item.id}`;
            li.innerHTML = ` <strong> ${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
          <i class="fa edit-item fa-pencil"></i>
        </a>`;
            document.getElementById(uiSelectors.itemList).insertAdjacentElement('beforeend', li);
        }
        ,
        clearInput: function () {
            document.getElementById(uiSelectors.itenName).value = '';
            document.getElementById(uiSelectors.itenCalories).value = '';
        }
        ,
        clearEditState: function () {
            uiController.clearInput();
            document.querySelector(uiSelectors.updateBtn).style.display = 'none';
            document.querySelector(uiSelectors.deleteBtn).style.display = 'none';
            document.querySelector(uiSelectors.backBtn).style.display = 'none';
            document.querySelector(uiSelectors.addBtn).style.display = 'inline';

        }
        ,
        showEditStateItem: function () {

            document.getElementById(uiSelectors.itenName).value = itemController.getCurrentItem().name;
            document.getElementById(uiSelectors.itenCalories).value = itemController.getCurrentItem().calories;
            document.querySelector(uiSelectors.updateBtn).style.display = 'inline';
            document.querySelector(uiSelectors.deleteBtn).style.display = 'inline';
            document.querySelector(uiSelectors.backBtn).style.display = 'inline';
            document.querySelector(uiSelectors.addBtn).style.display = 'none';

        }
        ,
        updateItemList: function (item) {
            Array.from(document.querySelectorAll(uiSelectors.listItem)).forEach(element => {

                if (element.getAttribute('id') === `item-${item.id}`) {

                    document.querySelector(`#item-${item.id}`).innerHTML =
                        ` <strong> ${item.name}: </strong> <em>${item.calories} Calories</em>
                    <a href="#" class="secondary-content">
                    <i class="fa edit-item fa-pencil"></i>
                     </a>`;

                }
            });

        }
        ,
        deleteItem: function () {

            document.querySelector(`#item-${itemController.getCurrentItem().id}`).remove();
        }
        ,
        clear: function () {
            uiController.pupulateTotalCalores(0);
            Array.from(document.querySelectorAll(uiSelectors.listItem)).forEach(element => {
                element.remove();
            });

        }

    }

})();

//app 

const app = (function () {

    const loadEventListener = function () {

        const uiSelectors = uiController.getUiSelectors();


        document.querySelector(uiSelectors.addBtn).addEventListener('click', (e) => {
            const input = uiController.getItemInput();
            if (input.name !== '' && input.calories !== '') {
                const item = itemController.addItem(input.name, input.calories);
                uiController.addListItem(item);
                const totalCalories = itemController.getTotalCalories();
                uiController.pupulateTotalCalores(totalCalories);
                uiController.clearInput();

            }

            e.preventDefault();
        });


        document.getElementById(uiSelectors.itemList).addEventListener('click', (e) => {

            if (e.target.classList.contains('edit-item')) {

                const listid = e.target.parentNode.parentNode.id;
                const id = listid.split('-');

                itemController.getItem().forEach(element => {
                    if (element.id === Number.parseInt(id[1])) {

                        itemController.setCurrentElement(element);

                    }
                })

                uiController.showEditStateItem();

            }



            e.preventDefault();
        });

        document.querySelector(uiSelectors.updateBtn).addEventListener('click', (e) => {

            const input = uiController.getItemInput();
            const updatedItem = itemController.updateItem(input);

            uiController.updateItemList(updatedItem)
            uiController.pupulateTotalCalores(itemController.getTotalCalories());
            uiController.clearEditState();

            e.preventDefault();
        });

        document.querySelector(uiSelectors.backBtn).addEventListener('click', (e) => {
            uiController.clearEditState();
        });


        document.querySelector(uiSelectors.deleteBtn).addEventListener('click', (e) => {

            itemController.deleteItem();
            uiController.deleteItem();
            uiController.clearEditState();
            uiController.pupulateTotalCalores(itemController.getTotalCalories());

        });

        document.querySelector(uiSelectors.clearBtn).addEventListener('click', (e) => {

            itemController.clearData();
            uiController.clear();
            uiController.clearEditState();


        });
    }

    return {
        init: function () {

            const item = itemController.getItem();
            const totalCalories = itemController.getTotalCalories();
            uiController.pupulateItemList(item);
            uiController.pupulateTotalCalores(totalCalories);
            uiController.clearEditState();
            loadEventListener();
        }
    }

})();


app.init();