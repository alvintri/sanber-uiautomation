import Page from "../page";

class HomePage extends Page {
    //object => element
    //method function => element interaction
    //ELEMENT LIST

    //GET ELEMENT
    get usernameField () {
        return $('#user-name');
    }

    get passwordField () {
        return $('#password');
    }

    get btnSubmit () {
        return $('//*[@id="login-button"]');
    }    

    get errMsgIncorrectPass(){
        return $('//*[contains(text(),"Username and password do not match")]')
    }

    //Interaction
    async inputUsername(username){
        return this.usernameField.setValue(username)
    }

    async inputPassword(password){
        return this.passwordField.setValue(password)
    }

    async clickLoginBtn(){
        return this.btnSubmit.click()
    }

    async login (username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.btnSubmit.click();
    }

    async getErrMsgIncorrectPass(){
        await expect(this.errMsgIncorrectPass).toBeExisting()
    }

    open () {
        return browser.url(`https://www.saucedemo.com`)
    }
}

export default new HomePage()