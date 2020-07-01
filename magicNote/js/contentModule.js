import { addDragMain as contentAddDragMain } from './dragModuleContent.js'

function storeContent(content){
    let contentStorage = JSON.parse(window.localStorage.getItem('content'))
    if (contentStorage===null){
        contentStorage = [content]
        }else{
        contentStorage.push(content)
        }
    window.localStorage.setItem('content', JSON.stringify(contentStorage))
    };

export function renderContent(){
    let mainBoard = document.querySelector('#mainBoard')
    mainBoard.innerHTML = ''
    let contents = JSON.parse(window.localStorage.getItem('content'))
    if (contents !== null){
        contents.forEach((content, index) =>{
            let contentElementDiv = document.createElement('div')
            contentElementDiv.id = content+index
            contentElementDiv.draggable = 'true'
            contentElementDiv.innerHTML = '<h4>'+(index+1)+':'+content+'</h4>'
            contentAddDragMain(contentElementDiv)
            mainBoard.appendChild(contentElementDiv)
            })
        }
    };

export function mainAddContent(){
    let inputContentElement = document.querySelector('#inputContent');
    if(inputContentElement.value){
        storeContent(inputContentElement.value)
        renderContent()
        }
        inputContentElement.value = ''
    };



