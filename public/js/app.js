$(document).foundation();

function check(vmName) {
  if (window.confirm('Would you like to start the ' + vmName + '?')) {
    this.disabled=true;
    return true;
  } else {
    return false;
  }
}
