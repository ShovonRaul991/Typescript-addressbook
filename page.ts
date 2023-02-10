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
let addressDetails : any = document.getElementById('ViewDetails');
let addresslist : any = document.getElementById('ContactListItems');
let inputForm : any = document.getElementById('InputForm');
let addBtn: any = document.getElementById('SubmitButton');
let saveBtn: any = document.getElementById('EditButton');
let entryName = (document.getElementById('NameEntry') as HTMLInputElement);
let entryEmail = (document.getElementById('EmailEntry') as HTMLInputElement);
let entryMobile = (document.getElementById('MobileEntry') as HTMLInputElement);
let entryLandline = (document.getElementById('LandlineEntry') as HTMLInputElement);
let entryWebsite = (document.getElementById('WebsiteEntry') as HTMLInputElement);
let entryAddress = (document.getElementById('AddressEntry') as HTMLInputElement);
let requiredName = (document.getElementById('RequiredName') as HTMLDivElement);
let requiredEmail = (document.getElementById('RequiredEmail') as HTMLDivElement);
let requiredMobile = (document.getElementById('RequiredMobile') as HTMLDivElement);
let requiredLandline = (document.getElementById('RequiredLandline') as HTMLDivElement);

let selectedAddress:any,selectedFullAddress:any;
let validName:boolean=false,validEmail:boolean=false,validMobile:boolean=false,validLandline:boolean=false;
let addressBook : Person[] = []; //empty array to store all the objects
//const person1 = new Person('Chandermani Arora','Chandermani@technovert.com',9192929292922,2334567890,'www.technovert.com','abc streat, some road, madhapur, hyderabad-500033');
//const person2 = new Person('Sash Pagadala','Chandermani@technovert.com',9192923452922,233456789,'www.keka.com','abc streat, some road, rajpur, hyderabad-500133');
//addressBook = [person1,person2];


function creatingContact(name:string,email:string,mobile:number,landline:number,website:string,address:string){
    let personObj:Person = new Person(name,email,mobile,landline,website,address);
    addressBook.push(personObj);
    
    /* address div list creation */
    
    
    let addressItem : any = document.createElement('div');
    addressItem.setAttribute('class','contact-list-item');
    addressItem.setAttribute('id',addressBook.length)

    let contactName : any = document.createElement('p');
    contactName.setAttribute('class','contact-name');
    contactName.innerText = personObj.name;

    let contactEmail : any = document.createElement('p');
    contactEmail.setAttribute('class','contact-email');
    contactEmail.innerText = personObj.email;

    let contactMobile: any = document.createElement('p');
    contactMobile.setAttribute('class','contact-mobile');
    contactMobile.innerText = '+91 '+personObj.mobile;

    addressItem.appendChild(contactName);
    addressItem.appendChild(contactEmail);
    addressItem.appendChild(contactMobile);

    addresslist?.appendChild(addressItem);
    let allAddress : any = addresslist.children;
    for(let i=0;i<allAddress.length;i++)
        {
            allAddress[i].style.backgroundColor = 'white';
            allAddress[i].style.overflowX = 'hidden';
        }
    addressItem.style.backgroundColor = '#CEE7F2';
    //let addressDetails : any = document.getElementById('ViewDetails');
    showDetails(addressBook[addressBook.length-1]);
    addressDetails.style.display= 'block';

    /* selection working */
    addressItem.addEventListener('click',function(){
        let allAddress : any = addresslist.children;
        selectedAddress = addressItem;
        for(let i=0;i<allAddress.length;i++)
        {
            allAddress[i].style.backgroundColor = 'white';
            allAddress[i].style.overflowX = 'hidden';
        }
        addressItem.style.backgroundColor = '#CEE7F2';
        makeScroll(addressItem);
        
        addressDetails.style.display= 'block';
        
        inputForm.style.display = 'None';
        showDetails(personObj);
        selectedFullAddress = personObj;
        document.querySelector('.icon-edit')?.addEventListener('click',function(){
            
            addressDetails.style.display= 'none';    
            
            inputForm.style.display = 'block';
            
            addBtn.style.display = 'None';
            
            saveBtn.style.display = 'block';    
            
            entryName.value = personObj.name;
            entryEmail.value = personObj.email;
            entryMobile.value = String(personObj.mobile);
            entryLandline.value = String(personObj.landline);
            entryWebsite.value = personObj.website;
            entryAddress.value = personObj.address;
        })
    })
    
}


function showDetails(obj: Person){
    let _name : any = document.getElementById('PersonName');
    _name.innerText = obj.name;
    let _email : any = document.getElementById('DetailEmail');
    _email.innerText = "Email: "+ obj.email;
    let _mobile : any = document.getElementById('DetailMobile');
    _mobile.innerText = "Mobile: "+'+91 '+obj.mobile;
    let _landline : any = document.getElementById('DetailLandline');
    _landline.innerText = "Landline: "+obj.landline;
    let _website : any = document.getElementById('DetailSite');
    _website.innerText = "Website: "+'https://'+obj.website;
    let _address : any = document.getElementById('DetailAddress');
    _address.innerText = "Address: "+ obj.address;
    
}

document.getElementById('AddAddress')?.addEventListener('click',function(){
    (document.getElementById('Formid') as any).reset();
    
    addressDetails.style.display= 'none';    
    
    inputForm.style.display = 'block';
    
    
    addBtn.style.display = 'block';
    
    
    saveBtn.style.display = 'none';  
});

/* form validation */
entryName.addEventListener('keyup', function(){
    validName = false;
    let tempName =entryName.value;
    if(tempName.length==0){
        requiredName.innerHTML = 'Name is required';
    }
    else if(tempName.length>0){
    requiredName.innerHTML = '';
    validName=true;
    }
});

entryEmail.addEventListener('keyup',function(){
    validEmail = false;
    let tempEmail = entryEmail.value;
    if(tempEmail.length===0){
        requiredEmail.innerHTML = 'Email is required';
    }
    else if(tempEmail.length>0){
        let valideMail = /^[0-9a-z.\s+_]+@[0-9a-z-.+]+\.[a-z]{2,4}$/;
        if(tempEmail.match(valideMail)){
            requiredEmail.innerHTML = '';
            validEmail = true;
        }
        else{
            requiredEmail.innerHTML = 'Email is incorrect';
        }
    }
});

entryMobile.addEventListener('keyup',function(){
    validMobile = false;
    let tempMobile: any = entryMobile.value;
    if(tempMobile.length==0){
        requiredMobile.innerHTML = 'Mobile Number is required';
    }
    else if(tempMobile.length!=10 || (Number(tempMobile)%1)!=0){
        
            requiredMobile.innerHTML = 'Mobile Number is incorrect';
        }
    else{
        requiredMobile.innerHTML = '';
        validMobile = true;
    }

});

entryLandline.addEventListener('keyup',function(){
    validLandline = false;
    let tempLandline : any = entryLandline.value;
    if(tempLandline.length==0){
        requiredLandline.innerHTML = 'Landline is required';
    }
    else if(tempLandline.length!=10 || (Number(tempLandline)%1)!=0){
        requiredLandline.innerHTML = 'Landline is incorrect';
    }
    else{
        requiredLandline.innerHTML = '';
        validLandline = true;
    }
})

document.getElementById('SubmitButton')?.addEventListener('click', function(){
    if(validName&&validEmail&&validMobile&&validLandline){
        let enteredName = entryName.value;
        let enteredEmail =   entryEmail.value; 
        let enterdedMobile = Number(entryMobile.value); 
        let enteredLandline = Number((entryLandline).value);
        let enteredWebsite =  entryWebsite.value; 
        let enteredAddress =  entryAddress.value;

        creatingContact(enteredName,enteredEmail,enterdedMobile,enteredLandline,enteredWebsite,enteredAddress)
        alert('Address added successfully!!!');
        (document.getElementById('InputForm') as HTMLFormElement).style.display= 'None';
        
    }
    else{
        alert('Please fill the form properly');
    }
})


document.getElementById('EditButton')?.addEventListener('click',function(){
    saveBtn.style.display = 'block';
    addBtn.style.display = 'None';
    if(validName&&validEmail&&validMobile&&validLandline){
        let personId:number = addressBook.indexOf(selectedFullAddress);
        
        selectedAddress.querySelectorAll('p').forEach(function(element :any,index:number){
            if(index==0){
                element.innerText= entryName.value;
                makeScroll(element);
                selectedFullAddress.name = element.innerText;
                addressBook[personId].name = element.innerText;
                
            }
            else if(index==1){
                element.innerText=entryEmail.value;
                makeScroll(element);
                selectedFullAddress.email=element.innerText;
                addressBook[personId].email = element.innerText;
            }
            else if(index==2){
                element.innerText='+91 '+(entryMobile.value);
                makeScroll(element);
                selectedFullAddress.mobile=element.innerText;
                addressBook[personId].mobile = Number((element.innerText as string).split(' ').pop());
            }
            selectedFullAddress.landline = addressBook[personId].landline = Number(entryLandline.value);
            selectedFullAddress.website =  addressBook[personId].website = entryWebsite.value; 
            selectedFullAddress.address = addressBook[personId].address = entryAddress.value;
        })
        
        alert('saved changes succesfully');
        (document.getElementById('Formid') as HTMLFormElement).reset();
        (document.getElementById('InputForm') as HTMLFormElement).style.display = 'None';
        showDetails(addressBook[personId]);
        addressDetails.style.display = 'block';
    }
    else{
        alert('Please fill the form properly');
    }
})

document.querySelector('.icon-delete')?.addEventListener('click',function(){
    
    let id:number = addressBook.indexOf(selectedFullAddress);
    
    addressBook.splice(id,1);
    
    //let nextContact = contactList.nextSibling;
    //nextContact.style.backgroundColor = '#CEE7F2';
    let deletingNode = selectedAddress
    
    if(addressBook.length>2)
    {
        if(<HTMLDivElement>deletingNode.nextElementSibling)
        {
            (<HTMLDivElement>deletingNode.nextElementSibling).style.backgroundColor = '#CEE7F2';
            showDetails(addressBook[id+1]);
            addressDetails.style.display = 'block';
            
        }   
        if(<HTMLDivElement>deletingNode.nextElementSibling){
            (<HTMLDivElement>deletingNode.nextElementSibling).style.backgroundColor = '#CEE7F2';
            showDetails(addressBook[id-1]);
            addressDetails.style.display = 'block';
        }
    }
    else{
        
        addressDetails.style.display = 'None';
    }
    
    addresslist.removeChild(deletingNode);    

})

document.getElementById('Home')?.addEventListener('click',function(){
    
    addressDetails.style.display= 'none';    
})

/* Extra functions added lastly after the feedback */

function makeScroll(element:any){
    if(isOverflown(element)){
        selectedAddress.style.overflowX = "scroll"
    }
}

function isOverflown(tempElement:any) {
    return tempElement.scrollHeight > tempElement.clientHeight || tempElement.scrollWidth > tempElement.clientWidth;
  }