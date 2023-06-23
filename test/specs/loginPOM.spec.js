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

import homePage from "../pageobjects/sauce-demo/homePage"
import inventoryPage from "../pageobjects/sauce-demo/inventoryPage"
import utils from "../helper/utils"

describe('I Login to Sauce Demo Homepage',()=>{
    it('login with valid data', async () => {
        //BUKA URL
        await homePage.open()
        utils.pause(1)


        //INPUT EMAIL
        //await $('#user-name').setValue('standard_user')
        await homePage.inputUsername('standard_user')
        //INPUT PASSWORD
        //await $('#password').setValue()
        await homePage.inputPassword('secret_sauce')
        
        //CLICK LOGIN BUTTON
        //await $('#login-button').click()
        await homePage.clickLoginBtn()

        //SUCCESS LOGIN
        await inventoryPage.getProductTitle()
    })

    it('login with invalid password', async () => {
        //BUKA URL 
        // await browser.url("https://www.saucedemo.com")
        // await browser.pause(1)
        await homePage.open()
        utils.pause(1)

        //INPUT EMAIL
        // await $('#user-name').setValue('standard_user')
        // //INPUT PASSWORD
        // await $('#password').setValue('secret_sauce123')
        await homePage.login('standard_user','1234314')
        
        //CLICK LOGIN BUTTON
        //await $('#login-button').click()

        //FAILED LOGIN
        await homePage.getErrMsgIncorrectPass()

    })
})