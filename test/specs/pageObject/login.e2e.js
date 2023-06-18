import login2Page from "../../pageobjects/login2.page";
import inventoryPage from "../../pageobjects/inventory.page";


const baseURL = "https://www.saucedemo2.com"

describe('Test Suite Login sauceDemo',()=>{
    it('login with valid email',async ()=>{
        await browser.url(baseURL);
        await browser.pause(10)

        login2Page.login('','secret_sauce2')

        inventoryPage.containsProduct();

    })

    it('login with invalid email',async ()=>{
        await browser.url(baseURL);
        await browser.pause(10)

        await $("#user-name").setValue('standard_user2')
        await $("#password").setValue('12345')

        await $("//*[@id='login-button']").click()

        await $("//*[contains(text(),'Epic sadface: Username and password do not match any user in this service')]")

    })
})