import{ renderContent as renderContent } from './contentModule.js'
import{ addDragFunction as addDragFunction } from './dragModuleInputBoard.js'
import{ setStoreButton, setDeleteButton, setKeyDownEvent} from './buttonModule.js'

renderContent();
let inputBoard = document.querySelector('#inputBoard');
addDragFunction(inputBoard);

let deleteBoard = document.querySelector('#deleteBoard');
addDragFunction(deleteBoard);

let inputContent = document.querySelector('#inputContent');
setKeyDownEvent(inputContent);

let storeButton = document.querySelector('#storeButton');
setStoreButton(storeButton);

let deleteButton = document.querySelector('#deleteButton');
setDeleteButton(deleteButton);







