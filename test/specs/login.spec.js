//TEST CASE
//BUKA SAUCE DEMO 
    //BUKA URL
//INPUT EMAIL
    //ID : user-name
//INPUT PASSWORD
    //ID : password
    //value : secret_sauce
//CLICK LOGIN BUTTON
    //ID : login-button
//SUCCESS LOGIN
    //XPATH : //span[contains(text(),'Products')]

describe('I Login to Sauce Demo Homepage',()=>{
    it('login with valid data', async () => {
        //BUKA URL
        await browser.url("https://www.saucedemo.com")
        await browser.pause(1)

        //INPUT EMAIL
        await $('#user-name').setValue('standard_user')
        //INPUT PASSWORD
        await $('#password').setValue('secret_sauce')
        
        //CLICK LOGIN BUTTON
        await $('#login-button').click()

        //SUCCESS LOGIN
        let productTitle = await $('//span[contains(text(),"Products")]')
        await expect(productTitle).toBeExisting()
    })

    it('login with invalid password', async () => {
        //BUKA URL 
        await browser.url("https://www.saucedemo.com")
        await browser.pause(1)

        //INPUT EMAIL
        await $('#user-name').setValue('standard_user')
        //INPUT PASSWORD
        await $('#password').setValue('secret_sauce123')
        
        //CLICK LOGIN BUTTON
        await $('#login-button').click()

        //FAILED LOGIN
        let errorMessage = await $('//*[contains(text(),"Username and password do not match")]')
        await expect(errorMessage).toBeExisting()
    })
})