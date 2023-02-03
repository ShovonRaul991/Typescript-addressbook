let addNav = document.querySelector('.AddAddress');
let addButton = document.querySelector('#submitButton') as HTMLInputElement;
let personName = document.getElementById("NameEntry") as HTMLInputElement;
let personEmail = document.getElementById("EmailEntry") as HTMLInputElement;
let personMobile = document.getElementById('MobileEntry') as HTMLInputElement;
let personLandline = document.getElementById("LandlineEntry") as HTMLInputElement;
let personWebsite = document.getElementById("WebsiteEntry") as HTMLInputElement;
let personAddress = document.getElementById("AddressEntry") as HTMLInputElement;
let inputform = document.getElementById("input-form-hidden") as HTMLElement;
let addressview = document.getElementById("view-details") as HTMLElement;
let form = document.getElementById('form-id') as HTMLFormElement;
let inputs = document.getElementsByTagName('input');
let contactlist = document.getElementById('contact-list-items') as HTMLElement;
let nameHeader = document.getElementById('Person-Name') as HTMLElement;
let viewDetailsBody = document.getElementById("view-details-body") as HTMLElement;
let detailEmail = document.getElementById('detail-email-value') as HTMLSpanElement
let detailMobile = document.getElementById('detail-mobile-value') as HTMLSpanElement;
let detailLandline = document.getElementById('detail-landline-value') as HTMLSpanElement;
let detailWebSite = document.getElementById('detail-site-value') as HTMLSpanElement;
let detailAddress = document.getElementById('detail-address-value') as HTMLSpanElement;
let human1 = document.getElementById('1') as HTMLElement;
let buttons  = document.getElementsByClassName('contact-list-item');

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
const person1 = new person('Chandermani Arora','Chandermani@technovert.com',9192929292922,2334567890,'www.technovert.com','abc streat, some road, madhapur, hyderabad-500033');
const person2 = new person('Sash Pagadala','Chandermani@technovert.com',9192923452922,233456789,'www.keka.com','abc streat, some road, rajpur, hyderabad-500133');
Identity = [person1,person2];


nameHeader.innerHTML = person1.name;
detailEmail.innerHTML = person1.email;
detailMobile.innerHTML = String(person1.mobile);
detailLandline.innerHTML = String(person1.landline);
detailAddress.innerHTML = person1.address;
detailWebSite.innerHTML = person1.website;

function creatingContact(){
    let count = 1;
    Identity.forEach(human=>{
        const contact = document.createElement('div');
        contact.setAttribute('class', 'contact-list-item');
        contact.setAttribute('id',String(count)) 

        const nameValue = document.createElement('p')
        nameValue.setAttribute('class','name')
        nameValue.innerHTML = human.name;
        
        const emailValue = document.createElement('p');
        emailValue.setAttribute('class','email');
        emailValue.innerHTML = human.email;

        const mobileValue = document.createElement('p')
        mobileValue.setAttribute('class','mobile');
        mobileValue.innerHTML = String(human.mobile);
        
        contact.appendChild(nameValue);
        contact.appendChild(emailValue)
        contact.appendChild(mobileValue);

        contactlist.appendChild(contact);
        count++;

    })
}

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
        contact.setAttribute('id','human'+Identity.length);

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

    //creatingContact();
    inputform.style.display = 'none';
    //addressview.style.display = 'block';
    form.reset();
}






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




function goBacktoHome(){
    inputform.style.display = 'none';
    addressview.style.display = 'block';
    human1.style.backgroundColor = '#CEE7F2';
    form.reset();
    
}
