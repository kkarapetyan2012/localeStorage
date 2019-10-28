const getId = document.getElementById('get');
const setId = document.getElementById('set');
const removeId = document.getElementById('remove');
const result = document.getElementById('result');
const myInput = document.getElementById('myInput');

class Storage  {

    get(data) {
        // alert(1)
        const getData = localStorage.getItem(data);
        result.append(getData)
    }

    set(data) {
        // alert(2)
        const setData = localStorage.setItem('data',JSON.stringify(data));
        result.append(setData);
    }

    remove(key) {
        // alert(3)
        const removeData = localStorage.removeItem(key);
        result.append(removeData);
    }
    
}

const myStorage = new Storage();

getId.addEventListener('click', myStorage.get);

setId.addEventListener('click', () => {
    myStorage.set(myInput.value)
})

removeId.addEventListener('click', myStorage.remove)

