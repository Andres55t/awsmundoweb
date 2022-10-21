var checkbox = document.querySelector("input[id=cboxcdm]");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
    document.getElementById('microempresas_users').disabled = false;
    document.getElementById('microempresas_users').style.visibility = "visible"
  } else {
    console.log("Checkbox is not checked..");
    
    document.getElementById('microempresas_users').disabled = true;
    document.getElementById('microempresas_users').style.visibility = "hidden"
  }
});


var checkbox1 = document.querySelector("input[id=cboxagdr]");

checkbox1.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
    document.getElementById('agenteretencion_users').disabled = false;
    document.getElementById('agenteretencion_users').style.visibility = "visible";
  } else {
    console.log("Checkbox is not checked..");
    
    document.getElementById('agenteretencion_users').disabled = true;
    document.getElementById('agenteretencion_users').style.visibility = "hidden"
  }
});