function removeElements (elements) {
  const arr = Array.prototype.slice.call(elements, 0)
  for (var element of arr) {
    element.parentElement.removeChild(element)
  }
}

setInterval(() => {
  removeElements(document.getElementsByClassName('tp-modal'))
  removeElements(document.getElementsByClassName('tp-backdrop'))
  document.body.classList.remove('tp-modal-open')
}, 1000)
