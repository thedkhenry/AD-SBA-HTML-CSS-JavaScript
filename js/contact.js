const SELECT_OPTIONS = ['General Inquiry','Consult','Follow Up','New Patient','Physical','Virtual Visit'];

window.onload=function(){
    let selectElement = document.querySelector('#select-subject');
    for(element in SELECT_OPTIONS){
        var opt = document.createElement("option");
        opt.value= SELECT_OPTIONS[element];
        opt.innerHTML = SELECT_OPTIONS[element];
        selectElement.appendChild(opt);
    }
}