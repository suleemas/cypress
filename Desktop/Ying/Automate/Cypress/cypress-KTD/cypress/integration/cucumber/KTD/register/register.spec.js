import { Given,When,And,Then } from "cypress-cucumber-preprocessor/steps";

describe("Earn Transaction", () => {

    When ('I visit CRM website',() => {
        cy.visit('https://staging-cms.eggplatform.com/auth/login')
        cy.xpath("//form[@name='loginForm']").should('contain','กรุณา Log-in เพื่อเข้าสู่ระบบ')
        cy.xpath("//input[@id='email']").type('demo@eggdigital.com')
        cy.xpath("//input[@id='password']").type('1qaz@WSX')
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/form[1]/div[1]/div[2]/div[3]/div[1]/button[1]/span[1]").click()
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[1]/a[1]").should('contain','demo@eggdigital.com')
    })
    And ('I filter information to view report',() => {
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/ul[1]/li[2]/a[1]/div[1]").click()
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/ul[1]/li[2]/div[1]/div[1]/div[1]/ul[1]/li[1]/a[1]/div[1]").click()
    })

})