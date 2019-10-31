const getId = document.getElementById('get');
const setId = document.getElementById('set');
const removeId = document.getElementById('remove');
const result = document.getElementById('result');
const myInput = document.getElementById('myInput');

class Storage  {

    get() {
        // alert(1)
        const getData = localStorage.getItem('key');
        result.append(getData);
    }

    set(key) {
        // alert(2)
        const setData = localStorage.setItem('key',JSON.stringify(key));
        // localStorage.setItem('key',JSON.stringify(key));
        return result.append(setData);
    }

    remove() {
        // alert(3)
        const removeData = localStorage.removeItem('key');
        // localStorage.removeItem('key');
        return result.append(removeData);
    }
    
}

const myStorage = new Storage();

getId.addEventListener('click', myStorage.get);

setId.addEventListener('click', () => {
    myStorage.set(myInput.value)
})

removeId.addEventListener('click', myStorage.remove)


// getId.addEventListener('click', () => {
//     result.append(getData);
//     myStorage.get;
// });

// setId.addEventListener('click', () => {
//     result.append(setData);
//     myStorage.set(myInput.value)
// })

// removeId.addEventListener('click', () => {
//     result.append(removeData);
//     myStorage.remove;
// })

