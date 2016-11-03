function helloWorld() {
    var x = 5
    var y = ""
    y = 10
    console.log("obama")
}

function handleClick(){
    var text = $(this).text()
    alert(text)
}

// function whenPageIsReady(){
//     console.log("woooooo")
// }

$(document).ready(function(){
    $(".panel").click(handleClick)
})

//.click() is from jquery
//this is a selector: $()

//alert("error")
