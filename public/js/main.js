const deleteBtn = document.querySelectorAll('.del')
const carItem = document.querySelectorAll('span.not')
const carComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteCar)
})

Array.from(carItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(carComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteCar(){
    const carId = this.parentNode.dataset.id
    try{
        const response = await fetch('cars/deleteCar', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'carIdFromJSFile': carId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const carId = this.parentNode.dataset.id
    try{
        const response = await fetch('cars/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'carIdFromJSFile': carId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const carId = this.parentNode.dataset.id
    try{
        const response = await fetch('cars/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'carIdFromJSFile': carId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}