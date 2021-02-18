//form element events

//clear the warning message when the firstName is entered

document.querySelector('#fName').addEventListener("blur", function(){
    if (this.value !== ""){
        fNameError.innerHTML = "";
    }
});

//clear the warning message when the lastName is entered

document.querySelector('#lName').addEventListener("blur", function(){
    if (this.value !== ""){
        lNameError.innerHTML = "";
    }
});

//clear the warning message when the address1 is entered

document.querySelector('#address1').addEventListener("blur", function(){
    if (this.value !== ""){
        address1Error.innerHTML = "";
    }
});

//clear the warning message when the city is entered

document.querySelector('#city').addEventListener("blur", function(){
    if (this.value !== ""){
        cityError.innerHTML = "";
    }
});

//clear the warning message when the province is selected

document.querySelector('#province').addEventListener("click", function(){
    if(profile.province.options.selectedIndex !== 0){
        provinceError.innerHTML = "";
    }
});

//clear the warning message when the country is selected

document.querySelector('#country').addEventListener("click", function(){
    if(profile.country.options.selectedIndex !== 0){
        countryError.innerHTML = "";
    }
});

//Add a submit event to the form to invoke the validateProfile() method when the form is submitted

// document.profile.addEventListener("submit", validateProfile)

document.profile.addEventListener("submit", validate.validateProfile);