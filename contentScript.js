window.onload=init;
function init(){
  addButton()
}



function addButton(){
  var existingNode= document.getElementById('deleteButton')
  var refreshString='<button id="refreshButton" style="margin-top: 10px;" value="Dropdown" data-dropdown="" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" role="button" aria-disabled="false" data-refresh="off"><span class="ui-button-text">Refresh off</span></button>';
  existingNode.outerHTML=existingNode.outerHTML+refreshString
  var refreshBtn=document.getElementById('refreshButton').addEventListener('click', toggleRefresh, false)
}

function toggleRefresh(){
  var refreshBtn=document.getElementById('refreshButton')
  if(refreshBtn.getAttribute('data-refresh')=='on'){
    refreshBtn.setAttribute('data-refresh', 'off');
    refreshBtn.childNodes[0].innerHTML='Refresh off';
    clearInterval(handle);
  }else if(refreshBtn.getAttribute('data-refresh')=='off'){
    refreshBtn.setAttribute('data-refresh', 'on')
    refreshBtn.childNodes[0].innerHTML='Refresh on';
    handle = setInterval(startRefreshing, 20000);
  }else{
    console.log('Something wrong');
    clearInterval(handle);
  }

}

function startRefreshing(){
  document.getElementById('submitButton').click()
}
