Array.from(document.getElementsByClassName("list")).forEach((node) =>
  node.addEventListener("click", toggleListContent)
);

function toggleListContent(e) {
  let childs = e.target.children;
  e.target.nextElementSibling.classList.toggle("show");
  // console.log(childs,e.target)
  // Array.from(childs).forEach(child=>child.contains('list-bottom')?child.classList.toggle('show'):'')
}
