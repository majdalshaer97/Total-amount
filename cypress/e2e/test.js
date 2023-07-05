beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.log('Cache and cookies cleared');
    cy.reload()
});
/// <reference types = "Cypress"/>
describe('login', () => {
    it('login standard_user', () => {
        cy.visit("https://magento.softwaretestingboard.com/men/tops-men/hoodies-and-sweatshirts-men.html");
        //cy.get('a[href= "https://magento.softwaretestingboard.com/men/tops-men/hoodies-and-sweatshirts-men.html"]')
      //  cy.get('.categories-menu > :nth-child(2) > :nth-child(1) > a').click()

      cy.get(':nth-child(5) > .field > .control > #limiter').select('24')
        cy.get('.price-box .price-final_price').as("Item")
        cy.get('@Item').find('.price').invoke('text').as("Iteamprice")
        cy.get('@Iteamprice').then((pricetext)=>{

           let mylist = pricetext.split("$") 

           let total =0
           for (let i = 0; i < mylist.length; i++) {
           cy.log(mylist[i])

          total +=  Number(mylist[i])
          
           }
           cy.log(total)
        
        })

        
  

    //      cy.get('.product-item-info').as("Item")
    //   cy.get('@Item').find('.price').invoke('text').as("Iteamprice")
    //   cy.get('@Iteamprice').then((pricetext)=>{
    //     let mylist = pricetext.split("$")

    //     let total =0
    //     for (let i = 0; i < mylist.length; i++) {
    //         cy.log(mylist[i])
    //         total+=Number(mylist[i]) 
       // }
        //cy.log(total + "this the total") 
        // cy.get('.panel > .header > .authorization-link > a').click()
        // cy.get('#email').type("majd@alshaer.com")
        // cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("P@ssw0rd")
        // cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
      })
      
//       .each((element,index, list1)=>{
//  cy.log ("the" + element.text()+ "number" +index);


      //  });
  
    // it('log', () => {
    //     cy.visit("https://app.zenhr.com/en/users/sign_in")
    //     cy.get("input[type='text']").click({force: true}).type("malshaer@blessedtreeit.com")
    //     cy.get("input[type='password']").click({force: true}).type("Tahseennwaseemm9962067265")
    //     cy.get('.login-submit > .btn').click({force: true})
    //     cy.get('.pull-right.no-padding').click({force: true})
    //     cy.get('.web-view > span').click({force: true})
    //    // cy.get("[style='Login]").click({force: true}).click()
        
    //   // cy.get("id['user_login']").type("malshaer@blessedtreeit.com")
    //    //cy.get('.login-submit > .btn').click()
    });

//});
