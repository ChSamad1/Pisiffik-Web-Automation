exports.loginPage = class loginPage{

    constructor(page){
        this.page = page;
        this.logo = page.locator('.logo-lg').first()
        this.signInHeading = page.getByRole('heading',{name: 'Sign In'});
        this.forgotPassword = page.getByText('Forgot your password?')
        this.emailAddress = page.getByPlaceholder('Enter your email')
        this.password = page.getByPlaceholder('Enter your password')
        this.loginButton = page.getByRole('button',{name: 'Sign In'}) 
        this.logInToastrmsg = page.locator('#toast-container') 

        this.errorToastrMsg = page.locator('#error')
        
    }
    async gotoLoginPage(){
        await this.page.goto('/')
         
    }
    async Login(email,password){
            await this.emailAddress.fill(email)
            await this.password.fill(password)
            await this.loginButton.click()

    }
    async toastrmsg(){

       const tostmsg =  await this.logInToastrmsg.textContent()
        console.log(tostmsg)
}



    async errortoastrmsg(){
        const tostmsg1 =  await this.errorToastrMsg.textContent()
        
         console.log(tostmsg1)
 
   
}

}