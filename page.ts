class Person{
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

let selectedAddress:any,totalSelectedAddress:any;
let validName:boolean=false,validEmail:boolean=false,validMobile:boolean=false;
let addressBook : Person[] = []; //empty array to store all the objects
//const person1 = new Person('Chandermani Arora','Chandermani@technovert.com',9192929292922,2334567890,'www.technovert.com','abc streat, some road, madhapur, hyderabad-500033');
//const person2 = new Person('Sash Pagadala','Chandermani@technovert.com',9192923452922,233456789,'www.keka.com','abc streat, some road, rajpur, hyderabad-500133');
//addressBook = [person1,person2];


function creatingContact(name:string,email:string,mobile:number,landline:number,website:string,address:string){
    let personObj:Person = new Person(name,email,mobile,landline,website,address);
    addressBook.push(personObj);

    /* address div list creation */
    let addresslist : any = document.getElementById('ContactListItems');
    let addressItem : any = document.createElement('div');
    addressItem.setAttribute('class','contact-list-item');

    let contactName : any = document.createElement('p');
    contactName.setAttribute('class','contact-name');
    contactName.innerText = personObj.name;

    let contactEmail : any = document.createElement('p');
    contactEmail.setAttribute('class','contact-email');
    contactEmail.innerText = personObj.email;

    let contactMobile: any = document.createElement('p');
    contactMobile.setAttribute('class','contact-mobile');
    contactMobile.innerText = personObj.mobile;

    addressItem.appendChild(contactName);
    addressItem.appendChild(contactEmail);
    addressItem.appendChild(contactMobile);

    addresslist?.appendChild(addressItem);

    /* selection working */
    addressItem.addEventListener('click',function(){
        let allAddress : any = addresslist.children;
        selectedAddress = addressItem;
        for(let i=0;i<allAddress.length;i++)
        {
            allAddress[i].style.backgroundColor = 'white';
        }
        addressItem.style.backgroundColor = '#CEE7F2';
        let addressDetails : any = document.getElementById('ViewDetails');
        addressDetails.style.display= 'block';
        let inputForm : any = document.getElementById('InputForm');
        inputForm.style.display = 'None';
        showDetails(personObj);
        totalSelectedAddress = personObj;
        document.querySelector('.icon-edit')?.addEventListener('click',function(){
            let addressDetails : any = document.getElementById('ViewDetails');
            addressDetails.style.display= 'none';    
            let inputForm : any = document.getElementById('InputForm');
            inputForm.style.display = 'block';
            let addBtn: any = document.getElementById('SubmitButton');
            addBtn.style.display = 'None';
            let saveBtn: any = document.getElementById('EditButton');
            saveBtn.style.display = 'block';    
            
            (document.getElementById('NameEntry') as HTMLInputElement).value = personObj.name;
            (document.getElementById('EmailEntry') as HTMLInputElement).value = personObj.email;
            (document.getElementById('MobileEntry') as HTMLInputElement).value = '+91 '+String(personObj.mobile);
            (document.getElementById('LandlineEntry') as HTMLInputElement).value = String(personObj.landline);
            (document.getElementById('WebsiteEntry') as HTMLInputElement).value = personObj.website;
            (document.getElementById('AddressEntry') as HTMLInputElement).value = personObj.address;
        })
    })
}


function showDetails(obj: Person){
    let _name : any = document.getElementById('PersonName');
    _name.innerText = obj.name;
    let _email : any = document.getElementById('DetailEmail');
    _email.innerText = "Email: "+ obj.email;
    let _mobile : any = document.getElementById('DetailMobile');
    _mobile.innerText = "Mobile: "+obj.mobile;
    let _landline : any = document.getElementById('DetailLandline');
    _landline.innerText = "Landline: "+obj.landline;
    let _website : any = document.getElementById('DetailSite');
    _website.innerText = "Website: "+obj.website;
    let _address : any = document.getElementById('DetailAddress');
    _address.innerText = "Address: "+ obj.address;
    
}

document.getElementById('AddAddress')?.addEventListener('click',function(){
    (document.getElementById('Formid') as any).reset();
    let addressDetails : any = document.getElementById('ViewDetails');
    addressDetails.style.display= 'none';    
    let inputForm : any = document.getElementById('InputForm');
    inputForm.style.display = 'block';
    
    let addBtn: any = document.getElementById('SubmitButton');
    addBtn.style.display = 'block';
    
    let saveBtn: any = document.getElementById('EditButton');
    saveBtn.style.display = 'none';  
});

/* form validation */
(document.getElementById('NameEntry') as HTMLInputElement).addEventListener('keyup', function(){
    validName = false;
    let tempName =(document.getElementById('NameEntry') as HTMLInputElement).value;
    if(tempName.length==0){
        (document.getElementById('RequiredName') as HTMLDivElement).innerHTML = 'Name is required';
    }
    else if(tempName.length>0){
    (document.getElementById('RequiredName') as HTMLDivElement).innerHTML = '';
    validName=true;
    }
});

(document.getElementById('EmailEntry') as HTMLInputElement).addEventListener('keyup',function(){
    validEmail = false;
    let tempEmail = (document.getElementById('EmailEntry') as HTMLInputElement).value;
    if(tempEmail.length===0){
        (document.getElementById('RequiredEmail') as HTMLDivElement).innerHTML = 'Email is required';
    }
    else if(tempEmail.length>0){
        let valideMail = /^[0-9a-z.\s+_]+@[0-9a-z-.+]+\.[a-z]{2,4}$/;
        if(tempEmail.match(valideMail)){
            (document.getElementById('RequiredEmail') as HTMLDivElement).innerHTML = '';
            validEmail = true;
        }
        else{
            (document.getElementById('RequiredEmail') as HTMLDivElement).innerHTML = 'Email is incorrect';
        }
    }
});
/*
(document.getElementById('MobileEntry') as HTMLInputElement).addEventListener('keyup',function(){
    validMobile = false;
    let tempMobile: any = (document.getElementById('MobileENtry') as HTMLInputElement).value;
    if(tempMobile.length==0){
        (document.getElementById('RequiredMobile') as HTMLDivElement).innerHTML = 'Mobile Number is required';
    }
    else if(tempMobile.length>0){
        
            (document.getElementById('RequiredMobile') as HTMLDivElement).innerHTML = 'Mobile Number is incorrect';
        }
    else{
        (document.getElementById('RequiredMobile') as HTMLDivElement).innerHTML = '';
    }

});
*/

document.getElementById('SubmitButton')?.addEventListener('click', function(){
    if(validName&&validEmail){
        let enteredName = (document.getElementById('NameEntry') as HTMLInputElement).value;
        let enteredEmail =   (document.getElementById('EmailEntry') as HTMLInputElement).value; 
        let enterdedMobile = Number((document.getElementById('MobileEntry') as HTMLInputElement).value); 
        let enteredLandline = Number((document.getElementById('LandlineEntry') as HTMLInputElement).value);
        let enteredWebsite =  (document.getElementById('WebsiteEntry') as HTMLInputElement).value; 
        let enteredAddress =  (document.getElementById('AddressEntry') as HTMLInputElement).value;

        creatingContact(enteredName,enteredEmail,enterdedMobile,enteredLandline,enteredWebsite,enteredAddress)
        alert('Address added successfully!!!');
        (document.getElementById('InputForm') as HTMLFormElement).style.display= 'None';
    }
    else{
        alert('Please fill the form properly');
    }
})

document.getElementById('EditButton')?.addEventListener('click',function(){
    (document.getElementById('EditButton') as HTMLButtonElement).style.display = 'block';
    (document.getElementById('SubmitButton') as HTMLButtonElement).style.display = 'None';
    if(validName&&validEmail){
        selectedAddress.querySelectorAll('p').forEach(function(element :any,index:number){
            if(index==0){
                element.innerText= (document.getElementById('NameEntry') as HTMLInputElement).value;
                totalSelectedAddress.name = element.innerText;
            }
            else if(index==1){
                element.innerText=(document.getElementById('EmailEntry') as HTMLInputElement).value;
                totalSelectedAddress.phone=element.innerText
            }
            else if(index==2){
                element.innerText=Number((document.getElementById('MobileEntry') as HTMLInputElement).value);
                totalSelectedAddress.phone=element.innerText
            }
            totalSelectedAddress.landline = Number((document.getElementById('LandlineEntry') as HTMLInputElement).value);
            totalSelectedAddress.website =  (document.getElementById('WebsiteEntry') as HTMLInputElement).value; 
            totalSelectedAddress.address = (document.getElementById('AddressEntry') as HTMLInputElement).value;
        })
        alert('saved changes succesfully');
        (document.getElementById('Formid') as HTMLFormElement).reset();
        (document.getElementById('InputForm') as HTMLFormElement).style.display = 'None';
    }
    else{
        alert('Please fill the form properly');
    }
})

document.querySelector('.icon-delete')?.addEventListener('click',function(){
    let id:number = addressBook.indexOf(totalSelectedAddress);
    addressBook.splice(id,1);
    let contactList:any = document.getElementById('ContactListItems');
    contactList.removeChild(selectedAddress);
    let addressDetails : any = document.getElementById('ViewDetails');
    addressDetails.style.display = 'none';

})