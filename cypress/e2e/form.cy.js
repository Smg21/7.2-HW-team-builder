describe("CYPRESSHW", ()=> {
    beforeEach(()=> {
        
    
    
        cy.visit("http://localhost:3000"); // CAREFUL needs to be same as what port it is at!
    })
 
    const nameInput = () => cy.get("input[name=name]");
    const emailInput = () => cy.get("input[name=email]");
    const passInput = () => cy.get("[name=pass]");
    const checkInput = () => cy.get("[type=checkbox]");

    const submitBtn = () => cy.get("input[type=submit]");
   
    it("sanity check to make sure tests work", ()=> {
      
        expect(1 + 2).to.equal(3)
    
    })

    it("the submit button enables when all inputs are filled out", () => {
        nameInput().type("Sabrina");
        emailInput().type("Smg21022@gmail.com");
        passInput().type("Student");
        submitBtn().should("not.be.disabled");
    })

    it("User can use the checkbox to agree to the terms and conditions", () => {
        cy.get("[type=checkbox]").check();
        cy.get("[type=checkbox]").should("be.checked");
        cy.get("[type=checkbox]").uncheck();
        cy.get("[type=checkbox]").should("not.be.checked");
    
    })
    
    it("the proper elements are showing", () => {
        nameInput().should("exist");
        emailInput().should("exist");
        passInput().should("exist");
        checkInput().should("exist");
    })
     
    describe("Filling out the inputs", ()=>{
       
    
        it("can type in the inputs", ()=>{
            nameInput()
                .should("have.value", "")
                .type("Sabrina")
                .should("have.value", "Sabrina");
            emailInput()
                .should("have.value", "")
                .type("Smg21022@gmail.com")
                .should("have.value", "Smg21022@gmail.com");
            passInput()
                .should("have.value", "")
                .type("Student")
                .should("have.value", "Student");
    
        })

        it("can submit the inputs", () => {
            nameInput().type("Sabrina");
            emailInput().type("Smg21022@gmail.com");
            passInput().type("Student");
            submitBtn().click();
        })
   
        })
     })