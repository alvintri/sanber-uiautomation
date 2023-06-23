import Page from "../page";

class InventoryPage extends Page {
    //object => element
    //method function => element interaction
    //ELEMENT LIST
    //GET ELEMENT
    get productTitle () {
        return $('//span[contains(text(),"Products")]'
        );
    }

    async getProductTitle(){
        expect(this.productTitle).toBeExisting()
    }

    open () {
        return browser.url(`https://www.saucedemo.com`)
    }
}

export default new InventoryPage();