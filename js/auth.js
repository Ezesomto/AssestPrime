// Authentication JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initLoginForm();
    initSignupForm();
});

// Login Form
function initLoginForm() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            
            // Simulate login process
            const loginError = document.getElementById('loginError');
            const submitButton = this.querySelector('button[type="submit"]');
            
            // Show loading state
            submitButton.disabled = true;
            submitButton.classList.add('btn-loading');
            
            // Simulate API call
            setTimeout(() => {
                // Remove loading state
                submitButton.disabled = false;
                submitButton.classList.remove('btn-loading');
                
                // Simple validation
                if (email && password.length >= 8) {
                    // Successful login - redirect to dashboard
                    window.location.href = 'dashboard.html';
                    
                    // Save to localStorage if "Remember me" is checked
                    if (rememberMe) {
                        localStorage.setItem('rememberedEmail', email);
                    }
                } else {
                    // Show error
                    if (loginError) {
                        loginError.classList.remove('hidden');
                        
                        setTimeout(() => {
                            loginError.classList.add('hidden');
                        }, 5000);
                    }
                }
            }, 1500);
        });
    }
}

// Signup Form
function initSignupForm() {
    const signupForm = document.getElementById('signupForm');
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const agreeTerms = document.getElementById('agreeTerms').checked;
            
            // Simulate signup process
            const signupSuccess = document.getElementById('signupSuccess');
            const signupError = document.getElementById('signupError');
            const submitButton = this.querySelector('button[type="submit"]');
            
            // Show loading state
            submitButton.disabled = true;
            submitButton.classList.add('btn-loading');
            
            // Simulate API call
            setTimeout(() => {
                // Remove loading state
                submitButton.disabled = false;
                submitButton.classList.remove('btn-loading');
                
                // Simple validation
                if (firstName && lastName && email && password.length >= 8 && password === confirmPassword && agreeTerms) {
                    // Successful signup
                    if (signupSuccess) {
                        signupSuccess.classList.remove('hidden');
                        
                        // Redirect after delay
                        setTimeout(() => {
                            window.location.href = 'dashboard.html';
                        }, 2000);
                    }
                } else {
                    // Show error
                    if (signupError) {
                        signupError.classList.remove('hidden');
                        
                        setTimeout(() => {
                            signupError.classList.add('hidden');
                        }, 5000);
                    }
                }
            }, 1500);
        });
    }
}
     //Admin
function initLoginForm() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            
            // Simulate login process
            const loginError = document.getElementById('loginError');
            const submitButton = this.querySelector('button[type="submit"]');
            
            // Show loading state
            submitButton.disabled = true;
            submitButton.classList.add('btn-loading');
            
            // Simulate API call
            setTimeout(() => {
                // Remove loading state
                submitButton.disabled = false;
                submitButton.classList.remove('btn-loading');
                
                // Simple validation
                if (email && password.length >= 8) {
                    // Set session flag
                    sessionStorage.setItem('userLoggedIn', 'true');
                    
                    // If it's an admin email, set admin flag
                    if (email === "admin@gmail.com") {
                        localStorage.setItem('adminLoggedIn', 'true');
                    }
                    
                    // If "Remember me" is checked, save email
                    if (rememberMe) {
                        localStorage.setItem('rememberedEmail', email);
                    }
                    
                    // Successful login - redirect to dashboard
                    window.location.href = 'admin.html';
                    
                } else {
                    // Show error
                    if (loginError) {
                        loginError.classList.remove('hidden');
                        
                        setTimeout(() => {
                            loginError.classList.add('hidden');
                        }, 5000);
                    }
                }
            }, 1500);
        });
    }
}


