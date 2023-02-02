let addNav = document.querySelector('.AddAddress');
let addButton = document.querySelector('#submitButton') as HTMLInputElement;
let personName = (document.getElementById("NameEntry") as HTMLInputElement);
let personEmail = (document.getElementById("EmailEntry") as HTMLInputElement);
let personMobile = (document.getElementById('MobileEntry') as HTMLInputElement);
let personLandline = (document.getElementById("LandlineEntry") as HTMLInputElement);
let personWebsite = (document.getElementById("WebsiteEntry") as HTMLInputElement);
let personAddress = (document.getElementById("AddressEntry") as HTMLInputElement);
let inputform = (document.getElementById("input-form-hidden") as HTMLElement);
let addressview = (document.getElementById("view-details") as HTMLElement);
let form = (document.getElementById('form-id')) as HTMLFormElement;
let inputs = document.getElementsByTagName('input');
let contactlist = document.getElementById('contact-list-items') as HTMLElement;

class person{
    name:string;
    email:string;
    mobile:number;
    landline:number;
    website: string;
    address: string;
    constructor(name:string,email:string,mobile:number,landline:number,website:string,address:string){
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.landline = landline;
        this.website = website;
        this.address = address;
    }
}

let Identity : person[] = []; //empty array to store all the objects

function openInputForm(){
    addressview.style.display = 'none';
    inputform.style.display = 'block';
    
}

function addDetails(){
    if(personName.value && personEmail.value && (Number(personMobile.value)) && (Number(personLandline.value)) && personWebsite.value && personAddress.value){
        Identity.push(new person(personName.value,personEmail.value,Number(personMobile.value),Number(personLandline.value),personWebsite.value,personAddress.value));

        /* creating the list */

        const contact = document.createElement('div');
        contact.setAttribute('class', 'contact-list-item');

        const nameValue = document.createElement('p')
        nameValue.setAttribute('class','name')
        nameValue.innerHTML = personName.value;
        
        const emailValue = document.createElement('p');
        emailValue.setAttribute('class','email');
        emailValue.innerHTML = personEmail.value;

        const mobileValue = document.createElement('p')
        mobileValue.setAttribute('class','mobile');
        mobileValue.innerHTML = personMobile.value;
        
        contact.appendChild(nameValue);
        contact.appendChild(emailValue)
        contact.appendChild(mobileValue);

        contactlist.appendChild(contact);
    }


    inputform.style.display = 'none';
    addressview.style.display = 'block';
    form.reset();
}

function selectContact(){
    
}

function goBacktoHome(){
    inputform.style.display = 'none';
    addressview.style.display = 'block';
    form.reset();
}

function errorFilled(){
    if(personName.value =="")
     return false;
}
