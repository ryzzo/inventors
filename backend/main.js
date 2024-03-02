// main function
var p = [];
window.onload = function() {
    p = [];
    // generate three random index for inventors
    let ind = indexGenerator();

    // generate an array of the three inventors and display
    let inventors = retrieveInventors(ind);
    displayInventors(inventors);

    // pick one of the three inventors as subject
    let picked_inventor_idx = picked_index()
    let pick_inventor = selectContent(picked_inventor_idx, inventors)
    console.log(picked_inventor_idx);
    p.push(picked_inventor_idx);

    // get image url and displaly
    let image_url = imageURL(picked_inventor_idx, inventors);
    displayImage(image_url)

}

// function that compares the two results
function check(clicked, answer){
    if (parseInt(clicked) == answer){
        console.log("True");
        if (confirm(" CORRECT ")){
            window.location.reload();
        }
    }
    else {
        console.log("false");
        alert('wrong try again');
    }
}

var button_id = [];

function buttonClicked(clicked_id){
    button_id = [];
    console.log(clicked_id);
    button_id.push(clicked_id);
    console.log(button_id);

    check(button_id, p);
}

console.log(p);