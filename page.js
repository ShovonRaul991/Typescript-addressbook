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
var form = document.getElementById('form-id');
var inputs = document.getElementsByTagName('input');
var contactlist = document.getElementById('contact-list-items');
var nameHeader = document.getElementById('Person-Name');
var viewDetailsBody = document.getElementById("view-details-body");
var detailEmail = document.getElementById('detail-email-value');
var detailMobile = document.getElementById('detail-mobile-value');
var detailLandline = document.getElementById('detail-landline-value');
var detailWebSite = document.getElementById('detail-site-value');
var detailAddress = document.getElementById('detail-address-value');
var human1 = document.getElementById('1');
var buttons = document.getElementsByClassName('contact-list-item');
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
var person1 = new person('Chandermani Arora', 'Chandermani@technovert.com', 9192929292922, 2334567890, 'www.technovert.com', 'abc streat, some road, madhapur, hyderabad-500033');
var person2 = new person('Sash Pagadala', 'Chandermani@technovert.com', 9192923452922, 233456789, 'www.keka.com', 'abc streat, some road, rajpur, hyderabad-500133');
Identity = [person1, person2];
nameHeader.innerHTML = person1.name;
detailEmail.innerHTML = person1.email;
detailMobile.innerHTML = String(person1.mobile);
detailLandline.innerHTML = String(person1.landline);
detailAddress.innerHTML = person1.address;
detailWebSite.innerHTML = person1.website;
function creatingContact() {
    var count = 1;
    Identity.forEach(function (human) {
        var contact = document.createElement('div');
        contact.setAttribute('class', 'contact-list-item');
        contact.setAttribute('id', String(count));
        var nameValue = document.createElement('p');
        nameValue.setAttribute('class', 'name');
        nameValue.innerHTML = human.name;
        var emailValue = document.createElement('p');
        emailValue.setAttribute('class', 'email');
        emailValue.innerHTML = human.email;
        var mobileValue = document.createElement('p');
        mobileValue.setAttribute('class', 'mobile');
        mobileValue.innerHTML = String(human.mobile);
        contact.appendChild(nameValue);
        contact.appendChild(emailValue);
        contact.appendChild(mobileValue);
        contactlist.appendChild(contact);
        count++;
    });
}
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
        contact.setAttribute('id', 'human' + Identity.length);
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
    //creatingContact();
    inputform.style.display = 'none';
    //addressview.style.display = 'block';
    form.reset();
}
var _loop_1 = function (i) {
    buttons[i].addEventListener('click', function () {
        var index = Number(buttons[i].id);
        //console.log(Identity[index-1].name);
        nameHeader.innerHTML = Identity[index - 1].name;
        detailEmail.innerHTML = Identity[index - 1].email;
        detailMobile.innerHTML = String(Identity[index - 1].mobile);
        detailLandline.innerHTML = String(Identity[index - 1].landline);
        detailAddress.innerHTML = Identity[index - 1].address;
        detailWebSite.innerHTML = Identity[index - 1].website;
    }, false);
};
for (var i = 0; i < buttons.length; i++) {
    _loop_1(i);
}
function goBacktoHome() {
    inputform.style.display = 'none';
    addressview.style.display = 'block';
    human1.style.backgroundColor = '#CEE7F2';
    form.reset();
}
