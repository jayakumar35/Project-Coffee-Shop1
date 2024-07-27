document.addEventListener('DOMContentLoaded',() =>{
    const loginBtn    = document.getElementById('loginBtn');
    const signupBtn   = document.getElementById('signupBtn');
    const loginPopup  = document.getElementById('loginPopup');
    const signupPopup = document.getElementById('signupPopup');
    const closeLogin  = document.getElementById('closeLogin');
    const closeSignup = document.getElementById('closeSignup');
    const loginForm   = document.getElementById('loginForm');
    const signupForm  = document.getElementById('signupForm');
  
//show the login popup when login button is clicked
   loginBtn .addEventListener('click',() =>{
   loginPopup.style.display ='block';
   
});
// show the signup popup when signup button is clicked
   signupBtn.addEventListener('click',() =>{
    signupPopup.style.display= 'block';

    
});
// Close the login popup when the close button in clicked
   closeLogin.addEventListener('click',() =>{
   loginPopup.style.display ='none';
   
});
// Close the signup popup when the close button in clicked
   closeSignup.addEventListener('click',() =>{
    signupPopup.style.display = 'none';
    
});
// close the login popup when clicking outside the popup content
   window.addEventListener('click',(event) =>{
    if(event.target == loginPopup){
        loginPopup.style.display ='none';
    
    }
});
//close the singup popup when clicking uutside the popup content 
   window.addEventListener('click', (event) =>{
    if(event.target == signupPopup){
        signupPopup.style.display ='none';
    }
});
//Handle login form submission
   loginForm.addEventListener('submit',(event) =>{
    event.preventDefault();
    const username = document.getElementById('loginUsername')
    const password = document.getElementById('loginPassword')

// perform your lform submission login here
    console.log('Login Username', username);
    console.log('Login password',password);

// close the login popup after form submission
    loginPopup.style.display ='none';

});

// hendle singnup form submission
    signupForm.addEventListener('submit',(event) =>{
    event.preventDefault();
 
    const username =document.getElementById('signupUsername');
    const email =document.getElementById('signupEmail');
    const password =document.getElementById('signupPassword');

//perform your dorm submission signup here
   console.log('signup Username', username);
   console.log('signup Email', email);
   console.log('signup passqord',password);

//Close the signup popup after form submission 
   signupPopup.style.display ='none'   
});


});