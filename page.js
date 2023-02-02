var addNav = document.querySelector('.AddAddress');
var addButton = document.querySelector('#submitButton');
var personName = document.getElementById("NameEntry");
var personEmail = document.getElementById("EmailEntry");
var personMobile = document.getElementById('MobileEntry');
var personLandline = document.getElementById("LandlineEntry");
var personWebsite = document.getElementById("WebsiteEntry");
var personAddress = document.getElementById("AddressEntry");
var inputform = document.getElementById("input-form-hidden");
var addressview = document.getElementById("view-details");
var form = (document.getElementById('form-id'));
var inputs = document.getElementsByTagName('input');
var contactlist = document.getElementById('contact-list-items');
var person = /** @class */ (function () {
    function person(name, email, mobile, landline, website, address) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.landline = landline;
        this.website = website;
        this.address = address;
    }
    return person;
}());
var Identity = []; //empty array to store all the objects
function openInputForm() {
    addressview.style.display = 'none';
    inputform.style.display = 'block';
}
function addDetails() {
    if (personName.value && personEmail.value && (Number(personMobile.value)) && (Number(personLandline.value)) && personWebsite.value && personAddress.value) {
        Identity.push(new person(personName.value, personEmail.value, Number(personMobile.value), Number(personLandline.value), personWebsite.value, personAddress.value));
        /* creating the list */
        var contact = document.createElement('div');
        contact.setAttribute('class', 'contact-list-item');
        var nameValue = document.createElement('p');
        nameValue.setAttribute('class', 'name');
        nameValue.innerHTML = personName.value;
        var emailValue = document.createElement('p');
        emailValue.setAttribute('class', 'email');
        emailValue.innerHTML = personEmail.value;
        var mobileValue = document.createElement('p');
        mobileValue.setAttribute('class', 'mobile');
        mobileValue.innerHTML = personMobile.value;
        contact.appendChild(nameValue);
        contact.appendChild(emailValue);
        contact.appendChild(mobileValue);
        contactlist.appendChild(contact);
    }
    inputform.style.display = 'none';
    addressview.style.display = 'block';
    form.reset();
}
function goBacktoHome() {
    inputform.style.display = 'none';
    addressview.style.display = 'block';
    form.reset();
}
function errorFilled() {
    if (personName.value == "")
        return false;
}
