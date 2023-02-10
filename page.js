"use strict";
var _a, _b, _c, _d, _e;
class Person {
    constructor(name, email, mobile, landline, website, address) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.landline = landline;
        this.website = website;
        this.address = address;
    }
}
let addressDetails = document.getElementById('ViewDetails');
let addresslist = document.getElementById('ContactListItems');
let inputForm = document.getElementById('InputForm');
let addBtn = document.getElementById('SubmitButton');
let saveBtn = document.getElementById('EditButton');
let entryName = document.getElementById('NameEntry');
let entryEmail = document.getElementById('EmailEntry');
let entryMobile = document.getElementById('MobileEntry');
let entryLandline = document.getElementById('LandlineEntry');
let entryWebsite = document.getElementById('WebsiteEntry');
let entryAddress = document.getElementById('AddressEntry');
let requiredName = document.getElementById('RequiredName');
let requiredEmail = document.getElementById('RequiredEmail');
let requiredMobile = document.getElementById('RequiredMobile');
let requiredLandline = document.getElementById('RequiredLandline');
let selectedAddress, selectedFullAddress;
let validName = false, validEmail = false, validMobile = false, validLandline = false;
let addressBook = []; //empty array to store all the objects
//const person1 = new Person('Chandermani Arora','Chandermani@technovert.com',9192929292922,2334567890,'www.technovert.com','abc streat, some road, madhapur, hyderabad-500033');
//const person2 = new Person('Sash Pagadala','Chandermani@technovert.com',9192923452922,233456789,'www.keka.com','abc streat, some road, rajpur, hyderabad-500133');
//addressBook = [person1,person2];
function creatingContact(name, email, mobile, landline, website, address) {
    let personObj = new Person(name, email, mobile, landline, website, address);
    addressBook.push(personObj);
    /* address div list creation */
    let addressItem = document.createElement('div');
    addressItem.setAttribute('class', 'contact-list-item');
    addressItem.setAttribute('id', addressBook.length);
    let contactName = document.createElement('p');
    contactName.setAttribute('class', 'contact-name');
    contactName.innerText = personObj.name;
    let contactEmail = document.createElement('p');
    contactEmail.setAttribute('class', 'contact-email');
    contactEmail.innerText = personObj.email;
    let contactMobile = document.createElement('p');
    contactMobile.setAttribute('class', 'contact-mobile');
    contactMobile.innerText = '+91 ' + personObj.mobile;
    addressItem.appendChild(contactName);
    addressItem.appendChild(contactEmail);
    addressItem.appendChild(contactMobile);
    addresslist === null || addresslist === void 0 ? void 0 : addresslist.appendChild(addressItem);
    let allAddress = addresslist.children;
    for (let i = 0; i < allAddress.length; i++) {
        allAddress[i].style.backgroundColor = 'white';
        allAddress[i].style.overflowX = 'hidden';
    }
    addressItem.style.backgroundColor = '#CEE7F2';
    //let addressDetails : any = document.getElementById('ViewDetails');
    showDetails(addressBook[addressBook.length - 1]);
    addressDetails.style.display = 'block';
    /* selection working */
    addressItem.addEventListener('click', function () {
        var _a;
        let allAddress = addresslist.children;
        selectedAddress = addressItem;
        for (let i = 0; i < allAddress.length; i++) {
            allAddress[i].style.backgroundColor = 'white';
            allAddress[i].style.overflowX = 'hidden';
        }
        addressItem.style.backgroundColor = '#CEE7F2';
        makeScroll(addressItem);
        addressDetails.style.display = 'block';
        inputForm.style.display = 'None';
        showDetails(personObj);
        selectedFullAddress = personObj;
        (_a = document.querySelector('.icon-edit')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            addressDetails.style.display = 'none';
            inputForm.style.display = 'block';
            addBtn.style.display = 'None';
            saveBtn.style.display = 'block';
            entryName.value = personObj.name;
            entryEmail.value = personObj.email;
            entryMobile.value = String(personObj.mobile);
            entryLandline.value = String(personObj.landline);
            entryWebsite.value = personObj.website;
            entryAddress.value = personObj.address;
        });
    });
}
function showDetails(obj) {
    let _name = document.getElementById('PersonName');
    _name.innerText = obj.name;
    let _email = document.getElementById('DetailEmail');
    _email.innerText = "Email: " + obj.email;
    let _mobile = document.getElementById('DetailMobile');
    _mobile.innerText = "Mobile: " + '+91 ' + obj.mobile;
    let _landline = document.getElementById('DetailLandline');
    _landline.innerText = "Landline: " + obj.landline;
    let _website = document.getElementById('DetailSite');
    _website.innerText = "Website: " + 'https://' + obj.website;
    let _address = document.getElementById('DetailAddress');
    _address.innerText = "Address: " + obj.address;
}
(_a = document.getElementById('AddAddress')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    document.getElementById('Formid').reset();
    addressDetails.style.display = 'none';
    inputForm.style.display = 'block';
    addBtn.style.display = 'block';
    saveBtn.style.display = 'none';
});
/* form validation */
entryName.addEventListener('keyup', function () {
    validName = false;
    let tempName = entryName.value;
    if (tempName.length == 0) {
        requiredName.innerHTML = 'Name is required';
    }
    else if (tempName.length > 0) {
        requiredName.innerHTML = '';
        validName = true;
    }
});
entryEmail.addEventListener('keyup', function () {
    validEmail = false;
    let tempEmail = entryEmail.value;
    if (tempEmail.length === 0) {
        requiredEmail.innerHTML = 'Email is required';
    }
    else if (tempEmail.length > 0) {
        let valideMail = /^[0-9a-z.\s+_]+@[0-9a-z-.+]+\.[a-z]{2,4}$/;
        if (tempEmail.match(valideMail)) {
            requiredEmail.innerHTML = '';
            validEmail = true;
        }
        else {
            requiredEmail.innerHTML = 'Email is incorrect';
        }
    }
});
entryMobile.addEventListener('keyup', function () {
    validMobile = false;
    let tempMobile = entryMobile.value;
    if (tempMobile.length == 0) {
        requiredMobile.innerHTML = 'Mobile Number is required';
    }
    else if (tempMobile.length != 10 || (Number(tempMobile) % 1) != 0) {
        requiredMobile.innerHTML = 'Mobile Number is incorrect';
    }
    else {
        requiredMobile.innerHTML = '';
        validMobile = true;
    }
});
entryLandline.addEventListener('keyup', function () {
    validLandline = false;
    let tempLandline = entryLandline.value;
    if (tempLandline.length == 0) {
        requiredLandline.innerHTML = 'Landline is required';
    }
    else if (tempLandline.length != 10 || (Number(tempLandline) % 1) != 0) {
        requiredLandline.innerHTML = 'Landline is incorrect';
    }
    else {
        requiredLandline.innerHTML = '';
        validLandline = true;
    }
});
(_b = document.getElementById('SubmitButton')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    if (validName && validEmail && validMobile && validLandline) {
        let enteredName = entryName.value;
        let enteredEmail = entryEmail.value;
        let enterdedMobile = Number(entryMobile.value);
        let enteredLandline = Number((entryLandline).value);
        let enteredWebsite = entryWebsite.value;
        let enteredAddress = entryAddress.value;
        creatingContact(enteredName, enteredEmail, enterdedMobile, enteredLandline, enteredWebsite, enteredAddress);
        alert('Address added successfully!!!');
        document.getElementById('InputForm').style.display = 'None';
    }
    else {
        alert('Please fill the form properly');
    }
});
(_c = document.getElementById('EditButton')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    saveBtn.style.display = 'block';
    addBtn.style.display = 'None';
    if (validName && validEmail && validMobile && validLandline) {
        let personId = addressBook.indexOf(selectedFullAddress);
        selectedAddress.querySelectorAll('p').forEach(function (element, index) {
            if (index == 0) {
                element.innerText = entryName.value;
                makeScroll(element);
                selectedFullAddress.name = element.innerText;
                addressBook[personId].name = element.innerText;
            }
            else if (index == 1) {
                element.innerText = entryEmail.value;
                makeScroll(element);
                selectedFullAddress.email = element.innerText;
                addressBook[personId].email = element.innerText;
            }
            else if (index == 2) {
                element.innerText = '+91 ' + (entryMobile.value);
                makeScroll(element);
                selectedFullAddress.mobile = element.innerText;
                addressBook[personId].mobile = Number(element.innerText.split(' ').pop());
            }
            selectedFullAddress.landline = addressBook[personId].landline = Number(entryLandline.value);
            selectedFullAddress.website = addressBook[personId].website = entryWebsite.value;
            selectedFullAddress.address = addressBook[personId].address = entryAddress.value;
        });
        alert('saved changes succesfully');
        document.getElementById('Formid').reset();
        document.getElementById('InputForm').style.display = 'None';
        showDetails(addressBook[personId]);
        addressDetails.style.display = 'block';
    }
    else {
        alert('Please fill the form properly');
    }
});
(_d = document.querySelector('.icon-delete')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
    let id = addressBook.indexOf(selectedFullAddress);
    addressBook.splice(id, 1);
    //let nextContact = contactList.nextSibling;
    //nextContact.style.backgroundColor = '#CEE7F2';
    let deletingNode = selectedAddress;
    if (addressBook.length > 2) {
        if (deletingNode.nextElementSibling) {
            deletingNode.nextElementSibling.style.backgroundColor = '#CEE7F2';
            showDetails(addressBook[id + 1]);
            addressDetails.style.display = 'block';
        }
        if (deletingNode.nextElementSibling) {
            deletingNode.nextElementSibling.style.backgroundColor = '#CEE7F2';
            showDetails(addressBook[id - 1]);
            addressDetails.style.display = 'block';
        }
    }
    else {
        addressDetails.style.display = 'None';
    }
    addresslist.removeChild(deletingNode);
});
(_e = document.getElementById('Home')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', function () {
    addressDetails.style.display = 'none';
});
/* Extra functions added lastly after the feedback */
function makeScroll(element) {
    if (isOverflown(element)) {
        selectedAddress.style.overflowX = "scroll";
    }
}
function isOverflown(tempElement) {
    return tempElement.scrollHeight > tempElement.clientHeight || tempElement.scrollWidth > tempElement.clientWidth;
}
