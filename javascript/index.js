function seeDescription(id) {
    document.getElementById(id).style.display = "block"
    let array = ["sobre", "sonho", "hardskill", "softskill"]
    for (i in array){
        if (array[i] !== id){
            //console.log(array[i] , id);
            document.getElementById(array[i]).style.display = "none"
        }

    }
}