"use strict";
let addNav = document.querySelector('.AddAddress');
let addButton = document.querySelector('#submitButton');
let personName = document.getElementById("NameEntry");
let personEmail = document.getElementById("EmailEntry");
let personMobile = document.getElementById('MobileEntry');
let personLandline = document.getElementById("LandlineEntry");
let personWebsite = document.getElementById("WebsiteEntry");
let personAddress = document.getElementById("AddressEntry");
let inputform = document.getElementById("input-form-hidden");
let addressview = document.getElementById("view-details");
let form = document.getElementById('form-id');
let inputs = document.getElementsByTagName('input');
let contactlist = document.getElementById('contact-list-items');
let nameHeader = document.getElementById('Person-Name');
let viewDetailsBody = document.getElementById("view-details-body");
let detailEmail = document.getElementById('detail-email-value');
let detailMobile = document.getElementById('detail-mobile-value');
let detailLandline = document.getElementById('detail-landline-value');
let detailWebSite = document.getElementById('detail-site-value');
let detailAddress = document.getElementById('detail-address-value');
let human1 = document.getElementById('1');
let personInAddressbook = document.querySelector('.contact-list-item');
class person {
    constructor(name, email, mobile, landline, website, address) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.landline = landline;
        this.website = website;
        this.address = address;
    }
}
let Identity = []; //empty array to store all the objects
const person1 = new person('Chandermani Arora', 'Chandermani@technovert.com', 9192929292922, 2334567890, 'www.technovert.com', 'abc streat, some road, madhapur, hyderabad-500033');
const person2 = new person('Sash Pagadala', 'Chandermani@technovert.com', 9192923452922, 233456789, 'www.keka.com', 'abc streat, some road, rajpur, hyderabad-500133');
Identity = [person1, person2];
nameHeader.innerHTML = person1.name;
detailEmail.innerHTML = person1.email;
detailMobile.innerHTML = String(person1.mobile);
detailLandline.innerHTML = String(person1.landline);
detailAddress.innerHTML = person1.address;
detailWebSite.innerHTML = person1.website;
/*
personInAddressbook.addEventListener('click', function(){
    nameHeader.innerHTML = Identity[Number(personInAddressbook.id)-1].name;
    detailEmail.innerHTML = Identity[Number(personInAddressbook.id)-1].email;
    detailMobile.innerHTML = String(Identity[Number(personInAddressbook.id)-1].mobile);
    detailLandline.innerHTML = String(Identity[Number(personInAddressbook.id)-1].landline);
    detailAddress.innerHTML = Identity[Number(personInAddressbook.id)-1].address;
    detailWebSite.innerHTML = Identity[Number(personInAddressbook.id)-1].website;
})
*/
function creatingContact() {
    let count = 1;
    Identity.forEach(human => {
        const contact = document.createElement('div');
        contact.setAttribute('class', 'contact-list-item');
        contact.setAttribute('id', String(count));
        const nameValue = document.createElement('p');
        nameValue.setAttribute('class', 'name');
        nameValue.innerHTML = human.name;
        const emailValue = document.createElement('p');
        emailValue.setAttribute('class', 'email');
        emailValue.innerHTML = human.email;
        const mobileValue = document.createElement('p');
        mobileValue.setAttribute('class', 'mobile');
        mobileValue.innerHTML = String(human.mobile);
        contact.appendChild(nameValue);
        contact.appendChild(emailValue);
        contact.appendChild(mobileValue);
        contactlist.appendChild(contact);
        count++;
        contact.addEventListener('click', function () {
            nameHeader.innerHTML = human.name;
            detailEmail.innerHTML = human.email;
            detailMobile.innerHTML = String(human.mobile);
            detailLandline.innerHTML = String(human.landline);
            detailAddress.innerHTML = human.address;
            detailWebSite.innerHTML = human.website;
        });
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
        const contact = document.createElement('div');
        contact.setAttribute('class', 'contact-list-item');
        contact.setAttribute('id', String(Identity.length));
        const nameValue = document.createElement('p');
        nameValue.setAttribute('class', 'name');
        nameValue.innerHTML = personName.value;
        const emailValue = document.createElement('p');
        emailValue.setAttribute('class', 'email');
        emailValue.innerHTML = personEmail.value;
        const mobileValue = document.createElement('p');
        mobileValue.setAttribute('class', 'mobile');
        mobileValue.innerHTML = personMobile.value;
        contact.appendChild(nameValue);
        contact.appendChild(emailValue);
        contact.appendChild(mobileValue);
        contactlist.appendChild(contact);
        contact.addEventListener('click', function () {
            nameHeader.innerHTML = Identity[Number(contact.id) - 1].name;
            detailEmail.innerHTML = Identity[Number(contact.id) - 1].email;
            detailMobile.innerHTML = String(Identity[Number(contact.id) - 1].mobile);
            detailLandline.innerHTML = String(Identity[Number(contact.id) - 1].landline);
            detailAddress.innerHTML = Identity[Number(contact.id) - 1].address;
            detailWebSite.innerHTML = Identity[Number(contact.id) - 1].website;
        });
    }
    //creatingContact();
    inputform.style.display = 'none';
    addressview.style.display = 'block';
    form.reset();
}
/*
    for(let i =0;i<buttons.length;i++){
        buttons[i].addEventListener('click',function(){
            let index = Number(buttons[i].id);
            //console.log(Identity[index-1].name);
            nameHeader.innerHTML = Identity[index-1].name;
            detailEmail.innerHTML = Identity[index-1].email;
            detailMobile.innerHTML = String(Identity[index-1].mobile);
            detailLandline.innerHTML = String(Identity[index-1].landline);
            detailAddress.innerHTML = Identity[index-1].address;
            detailWebSite.innerHTML = Identity[index-1].website;
        }, false);
    }
*/
function goBacktoHome() {
    inputform.style.display = 'none';
    addressview.style.display = 'block';
    human1.style.backgroundColor = '#CEE7F2';
    form.reset();
}
