let head = document.createElement("head")

let title = document.createElement("title")
let title_text = document.createTextNode("Pluto the Support Bot")
title.appendChild(title_text)

head.appendChild(title)

let body = document.createElement("body")

let p = document.createElement("p")
let p_text = document.createTextNode("This is a paragraph, idk why it's here.")

p.appendChild(p_text)
body.appendChild(p)