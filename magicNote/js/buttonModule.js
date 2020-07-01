import{ mainAddContent as mainAddContent } from './contentModule.js'

export function setStoreButton(element){
    element.addEventListener('click', function(event){
        mainAddContent()
        })
    };
export function setDeleteButton(element){
    element.addEventListener('click', function(){
        let mainBoard = document.querySelector('#mainBoard')
        mainBoard.innerHTML = ''
        localStorage.removeItem('content')
        })
    };

export function setKeyDownEvent(element){
    element.addEventListener('keydown', function(event){
        if(event.key==='Enter'){
            event.preventDefault();
            mainAddContent()
            }
        })
    };


