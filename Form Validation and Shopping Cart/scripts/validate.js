//validate module
var validate = (function(){

    //create private and public functions/objects/variables to validate the form

    let valObj = {};

    valObj.validateProfile = function(e){

        e.preventDefault();

        var valid = true;
    
        //display warning if firstName is not entered
        if (profile.firstName.value === "") {
            document.querySelector('#fNameError').innerHTML = 'Please enter a First Name';
            valid = false;
        } else {
            document.querySelector('#displayFName').innerHTML = profile.firstName.value;
        }
    
        //display warning if lastName is not entered
        if (profile.lastName.value === "") {
            document.querySelector('#lNameError').innerHTML = 'Please enter a Last Name';
            valid = false;
        } else {
            document.querySelector('#displayLName').innerHTML = profile.lastName.value;
        }
    
        //display warning if address1 is not entered
        if (profile.address1.value === "") {
            document.querySelector('#address1Error').innerHTML = 'Please enter an address';
            valid = false;
        } else {
            document.querySelector('#displayAddress').innerHTML = profile.address1.value;
        }
    
        //display warning if city is not entered
        if (profile.city.value === "") {
            document.querySelector('#cityError').innerHTML = 'Please enter a city';
            valid = false;
        } else {
            document.querySelector('#displayCity').innerHTML = profile.city.value;
        }
    
        //display warning if province is not selected
        if (profile.province.options.selectedIndex === 0) {
            document.querySelector('#provinceError').innerHTML = 'Please select a province';
            valid = false;
        } else {
            document.querySelector('#displayProvince').innerHTML = profile.province.value;
        }

        if (valid) {
            document.querySelector('#displayGender').innerHTML = profile.gender.value;
            document.querySelector('#displayAge').innerHTML = profile.age.value;
            document.querySelector('#displayCountry').innerHTML = profile.country.value;
        }
    
        //display warning if country is not selected
        // if (profile.country.value === 0) {
        //     document.querySelector('#countryError').innerHTML = 'Please select a country';
        //     valid = false;
        // }

        // if (profile.gender.checked == false) {
        //     document.querySelector('#genderError').innerHTML = 'Please select a gender';
        //     valid = false
        // }
    
        if (valid) {
            // document.querySelector('#message').innerHTML = "Thank you!"
            alert("Thank you");
        }
    
        return valid;

    }

    return valObj;
    
}());
