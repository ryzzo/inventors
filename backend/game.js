// Generating three random numbers to choose inventor
function indexGenerator() {
    let i = 0;
    var indexes = [];
    while (i < 3) {
        var randIndex = Math.floor(Math.random() * (38 - 0 + 1) + 0);
        if (!indexes.includes(randIndex)){
            indexes.push(randIndex);
            i++;
        }
    }
    return indexes;
}

// getting inventors corresponding to the randIndex
const retrieveInventors = (indexes) =>{
    let data = indexes.map(getInventor);
    return data;
}

// get inventor data and store in array
function getInventor(idx){
    info = [];
    keys = ['name', 'description', 'image_url'];

    for (i=0; i<3; i++){
        let title = keys[i];
        let dt = inventors[idx][title];
        info.push(dt);
    }

    return info;
}

// get the three inventors used in the game
function inventorsGenerator(){
    var ind = indexGenerator();
    var data = retrieveInventors(ind);

    return data;
}

function displayInventors(inventor_array){
    const inventor_1 = document.querySelector('#inventor-1');
    inventor_1.textContent = inventor_array[0][0];

    const inventor_2 = document.querySelector('#inventor-2');
    inventor_2.textContent = inventor_array[1][0];

    const inventor_3 = document.querySelector('#inventor-3');
    inventor_3.textContent = inventor_array[2][0];

}

// select a random number between 1 and 3
const picked_index = () =>{
    let i = 0;
    var chosen = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    return chosen;
}

// select description and image for chosen
function selectContent(chosen, inventor_array){
    let description_url = inventor_array[chosen][1];
    let image_url = inventor_array[chosen][2];
    return [description_url, image_url];
}

// get the image url
const imageURL = (picked_inventor_idx, inventors) => {
    let info = selectContent(picked_inventor_idx, inventors);
    let url_refined = "../data/" + info[1]

    return url_refined
}

function displayImage(image_url) {
    const image_area = document.querySelector("img");
    image_area.src = image_url;
}

// main function
function main() {
    // generate three random index for inventors
    let ind = indexGenerator();

    // generate an array of the three inventors and display
    let inventors = retrieveInventors(ind);
    displayInventors(inventors);

    // pick one of the three inventors as subject
    let picked_inventor_idx = picked_index()
    let pick_inventor = selectContent(picked_inventor_idx, inventors)

    // get image url and display
    let image_url = imageURL(picked_inventor_idx, inventors);
    displayImage(image_url)
}

main()