const { password } = require("../../data/staticData");

exports.superadminPage = class superadminPage{

    constructor(page){

        this.page = page;
        this.userProfile =page.locator('.nav-link.dropdown-toggle.nav-user.me-0.waves-effect.waves-light')
        this.myAcc =page.getByRole('link' ,{name: 'My Account'})
        this.nameInput = page.locator('input[name="name"]')
        this.oldPass = page.locator('input[name="old_password"]')
        this.newPass = page.locator('input[name="password"]')
        this.newPassConfirm = page.locator('input[name="password_confirmation"]')
    }
    async saAdmin(){
        await this.userProfile.click()
    }
    async myAccount(){
    await this.myAcc.click() 
    }
    async changeName(Name) {
    await this.nameInput.fill(Name)
    }
    async oldPassword(Oldpassword){
    await this.oldPass.fill(Oldpassword)
    }
    async NewPassword(NewPassword){
    await this.newPass.fill(NewPassword)
    }
    async ConfirmPassword(confPassword){
        await this.newPassConfirm.fill(confPassword)
    }

}