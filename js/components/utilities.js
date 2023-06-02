// Refresh page

function resetPage() {
  setTimeout(function () {
    window.location.reload(true);
  }, 3000);
}

// regex for checking email
export function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

// Checking length of input against required length
export function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  }
}