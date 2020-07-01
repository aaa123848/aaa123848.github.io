import {renderContent as renderContent } from './contentModule.js'

function addDragStart(element){
    element.addEventListener('dragstart', event => {
        event.stopPropagation()
        let nodes = Array.prototype.slice.call( document.getElementById('mainBoard').children );
        let draggedElementIndex = nodes.indexOf(event.target)
        let nodesLength = nodes.length
        localStorage.setItem('draggedElementIndex', JSON.stringify(draggedElementIndex))
        localStorage.setItem('nodesLength', JSON.stringify(nodesLength))
    });
};
function addDragEnter(element){
    element.addEventListener('dragenter', function(event){
        event.preventDefault()
        event.stopPropagation()
    })
};

function addDragOver(element){
    element.addEventListener('dragover', function(event){
        event.preventDefault()
        event.stopPropagation()
    })
};
function addDropSortedContent(element){
    element.addEventListener('drop', event => {
        event.stopPropagation()
        let oldDraggedElementIndex = JSON.parse(localStorage.getItem('draggedElementIndex'));
        if (typeof oldDraggedElementIndex !== 'number'){return false}
        let parentElement = document.getElementById('mainBoard');
        let nodes = Array.prototype.slice.call( parentElement.children );
        let newDraggedElementIndex = nodes.indexOf(event.target);
        let content = JSON.parse(window.localStorage.getItem('content'))
  
        if (newDraggedElementIndex > oldDraggedElementIndex){
            content.splice(newDraggedElementIndex+1, 0, content[oldDraggedElementIndex])
            content.splice(oldDraggedElementIndex, 1)
            }else{
                let keep_value = content[oldDraggedElementIndex]
                content.splice(oldDraggedElementIndex, 1)
                content.splice(newDraggedElementIndex, 0, keep_value)   
            }
        localStorage.setItem('content', JSON.stringify(content))
        localStorage.removeItem('draggedElementIndex')
        localStorage.removeItem('nodesLength')
        renderContent()
    })
};
function addDropDelete(element){
    let deleteBoard = document.querySelector('#deleteBoard')
    deleteBoard.addEventListener('drop', function(event){
        let oldnodesLength = JSON.parse(localStorage.getItem('nodesLength'));
        if (oldnodesLength){
            let draggedElementIndex = JSON.parse(localStorage.getItem('draggedElementIndex'));
            let content = JSON.parse(localStorage.getItem('content'))
            content.splice(draggedElementIndex, 1)
            localStorage.setItem('content', JSON.stringify(content))
            localStorage.removeItem('draggedElementIndex')
            localStorage.removeItem('nodesLength')
            renderContent()
        }
    })
};

export function addDragMain(element){
    addDragStart(element);
    addDragEnter(element);
    addDragOver(element);
    addDropSortedContent(element);
    addDropDelete(element);
};