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
let selectedAddress, totalSelectedAddress;
let validName = false, validEmail = false, validMobile = false, validLandline = false;
let addressBook = []; //empty array to store all the objects
//const person1 = new Person('Chandermani Arora','Chandermani@technovert.com',9192929292922,2334567890,'www.technovert.com','abc streat, some road, madhapur, hyderabad-500033');
//const person2 = new Person('Sash Pagadala','Chandermani@technovert.com',9192923452922,233456789,'www.keka.com','abc streat, some road, rajpur, hyderabad-500133');
//addressBook = [person1,person2];
function creatingContact(name, email, mobile, landline, website, address) {
    let personObj = new Person(name, email, mobile, landline, website, address);
    addressBook.push(personObj);
    /* address div list creation */
    let addresslist = document.getElementById('ContactListItems');
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
    /* selection working */
    addressItem.addEventListener('click', function () {
        var _a;
        let allAddress = addresslist.children;
        selectedAddress = addressItem;
        for (let i = 0; i < allAddress.length; i++) {
            allAddress[i].style.backgroundColor = 'white';
        }
        addressItem.style.backgroundColor = '#CEE7F2';
        let addressDetails = document.getElementById('ViewDetails');
        addressDetails.style.display = 'block';
        let inputForm = document.getElementById('InputForm');
        inputForm.style.display = 'None';
        showDetails(personObj);
        totalSelectedAddress = personObj;
        (_a = document.querySelector('.icon-edit')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            let addressDetails = document.getElementById('ViewDetails');
            addressDetails.style.display = 'none';
            let inputForm = document.getElementById('InputForm');
            inputForm.style.display = 'block';
            let addBtn = document.getElementById('SubmitButton');
            addBtn.style.display = 'None';
            let saveBtn = document.getElementById('EditButton');
            saveBtn.style.display = 'block';
            document.getElementById('NameEntry').value = personObj.name;
            document.getElementById('EmailEntry').value = personObj.email;
            document.getElementById('MobileEntry').value = String(personObj.mobile);
            document.getElementById('LandlineEntry').value = String(personObj.landline);
            document.getElementById('WebsiteEntry').value = personObj.website;
            document.getElementById('AddressEntry').value = personObj.address;
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
    let addressDetails = document.getElementById('ViewDetails');
    addressDetails.style.display = 'none';
    let inputForm = document.getElementById('InputForm');
    inputForm.style.display = 'block';
    let addBtn = document.getElementById('SubmitButton');
    addBtn.style.display = 'block';
    let saveBtn = document.getElementById('EditButton');
    saveBtn.style.display = 'none';
});
/* form validation */
document.getElementById('NameEntry').addEventListener('keyup', function () {
    validName = false;
    let tempName = document.getElementById('NameEntry').value;
    if (tempName.length == 0) {
        document.getElementById('RequiredName').innerHTML = 'Name is required';
    }
    else if (tempName.length > 0) {
        document.getElementById('RequiredName').innerHTML = '';
        validName = true;
    }
});
document.getElementById('EmailEntry').addEventListener('keyup', function () {
    validEmail = false;
    let tempEmail = document.getElementById('EmailEntry').value;
    if (tempEmail.length === 0) {
        document.getElementById('RequiredEmail').innerHTML = 'Email is required';
    }
    else if (tempEmail.length > 0) {
        let valideMail = /^[0-9a-z.\s+_]+@[0-9a-z-.+]+\.[a-z]{2,4}$/;
        if (tempEmail.match(valideMail)) {
            document.getElementById('RequiredEmail').innerHTML = '';
            validEmail = true;
        }
        else {
            document.getElementById('RequiredEmail').innerHTML = 'Email is incorrect';
        }
    }
});
document.getElementById('MobileEntry').addEventListener('keyup', function () {
    validMobile = false;
    let tempMobile = document.getElementById('MobileEntry').value;
    if (tempMobile.length == 0) {
        document.getElementById('RequiredMobile').innerHTML = 'Mobile Number is required';
    }
    else if (tempMobile.length != 10 || (Number(tempMobile) % 1) != 0) {
        document.getElementById('RequiredMobile').innerHTML = 'Mobile Number is incorrect';
    }
    else {
        document.getElementById('RequiredMobile').innerHTML = '';
        validMobile = true;
    }
});
document.getElementById('LandlineEntry').addEventListener('keyup', function () {
    validLandline = false;
    let tempLandline = document.getElementById('LandlineEntry').value;
    if (tempLandline.length == 0) {
        document.getElementById('RequiredLandline').innerHTML = 'Landline is required';
    }
    else if (tempLandline.length != 10 || (Number(tempLandline) % 1) != 0) {
        document.getElementById('RequiredLandline').innerHTML = 'Landline is incorrect';
    }
    else {
        document.getElementById('RequiredLandline').innerHTML = '';
    }
});
(_b = document.getElementById('SubmitButton')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    if (validName && validEmail && validMobile) {
        let enteredName = document.getElementById('NameEntry').value;
        let enteredEmail = document.getElementById('EmailEntry').value;
        let enterdedMobile = Number(document.getElementById('MobileEntry').value);
        let enteredLandline = Number(document.getElementById('LandlineEntry').value);
        let enteredWebsite = document.getElementById('WebsiteEntry').value;
        let enteredAddress = document.getElementById('AddressEntry').value;
        creatingContact(enteredName, enteredEmail, enterdedMobile, enteredLandline, enteredWebsite, enteredAddress);
        alert('Address added successfully!!!');
        document.getElementById('InputForm').style.display = 'None';
    }
    else {
        alert('Please fill the form properly');
    }
});
(_c = document.getElementById('EditButton')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    document.getElementById('EditButton').style.display = 'block';
    document.getElementById('SubmitButton').style.display = 'None';
    if (validName && validEmail && validMobile) {
        let personId = addressBook.indexOf(totalSelectedAddress);
        selectedAddress.querySelectorAll('p').forEach(function (element, index) {
            if (index == 0) {
                element.innerText = document.getElementById('NameEntry').value;
                totalSelectedAddress.name = element.innerText;
                addressBook[personId].name = element.innerText;
            }
            else if (index == 1) {
                element.innerText = document.getElementById('EmailEntry').value;
                totalSelectedAddress.email = element.innerText;
                addressBook[personId].email = element.innerText;
            }
            else if (index == 2) {
                element.innerText = '+91 ' + (document.getElementById('MobileEntry').value);
                totalSelectedAddress.mobile = element.innerText;
                addressBook[personId].mobile = Number(element.innerText.split(' ').pop());
            }
            totalSelectedAddress.landline = addressBook[personId].landline = Number(document.getElementById('LandlineEntry').value);
            totalSelectedAddress.website = addressBook[personId].website = document.getElementById('WebsiteEntry').value;
            totalSelectedAddress.address = addressBook[personId].address = document.getElementById('AddressEntry').value;
        });
        alert('saved changes succesfully');
        document.getElementById('Formid').reset();
        document.getElementById('InputForm').style.display = 'None';
        //(document.getElementById('ViewDetails') as HTMLDivElement).style.display = 'block';
    }
    else {
        alert('Please fill the form properly');
    }
});
(_d = document.querySelector('.icon-delete')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
    let id = addressBook.indexOf(totalSelectedAddress);
    addressBook.splice(id, 1);
    let contactList = document.getElementById('ContactListItems');
    contactList.removeChild(selectedAddress);
    let addressDetails = document.getElementById('ViewDetails');
    addressDetails.style.display = 'none';
});
(_e = document.getElementById('Home')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', function () {
    let addressDetails = document.getElementById('ViewDetails');
    addressDetails.style.display = 'none';
});
