
function addDragStart(element){
    element.addEventListener('dragstart', function(event){
        let mx = event.x
        let my = event.y
        let dx = element.offsetLeft
        let dy = element.offsetTop
        let pointDict = {'mx':mx, 'my':my, 'dx':dx, 'dy':dy, 'inputMove':true, 'element':element.id}
        localStorage.setItem('pointDict', JSON.stringify(pointDict))
        localStorage.removeItem('draggedElementIndex')
        localStorage.removeItem('nodesLength')
        })
    };

function addDragEnter(){
    window.addEventListener('dragenter', function(event){
        event.preventDefault()
        event.stopPropagation()
        })
    };

function addDragOver(){
    window.addEventListener('dragover', function(event){
        event.preventDefault()
        event.stopPropagation()
        })
    };

function addDrop(element){
    window.addEventListener('drop', function(event){
        let pointDict = JSON.parse(localStorage.getItem('pointDict'))
        if (!pointDict['inputMove']){return false}
        if (pointDict['element']!==element.id){return false}
        let oldMx = pointDict['mx']
        let oldMy = pointDict['my']
        let oldDx = pointDict['dx']
        let oldDy = pointDict['dy']
        let newMx = event.x
        let newMy = event.y
        let newDx = (oldDx + (newMx - oldMx)).toString()
        let newDy = (oldDy + (newMy - oldMy)).toString()
        element.style.left = newDx+'px'
        element.style.top = newDy+'px'
        pointDict = {'mx':0, 'my':0, 'dx':0, 'dy':0, 'inputMove':false}
        localStorage.setItem('pointDict', JSON.stringify(pointDict))
        })
    };

export function addDragFunction(element){
    addDragStart(element)
    addDrop(element)
    addDragEnter()
    addDragOver()
    };