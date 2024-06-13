let t=document.body.firstElementChild.firstElementChild //table
console.log(t.rows) //to get all rows
console.log(t.caption) //to get caption
console.log(t.tHead)
console.log(t.tHead.firstElementChild)

console.log(t.tbody) //it can also be written like below:
console.log(t.getElementsByTagName("tbody"))

console.log(t.tbody.rows) //collection of <tr> inside 

console.log(t.tr.cells) //collection of td and th
console.log(t.tr.sectionRowIndex) //index of tr inside closing element
console.log(t.tr.rowIndex) //row number starting from zero
console.log(t.td.cellIndex) //number of cells inside enclosing <tr>




