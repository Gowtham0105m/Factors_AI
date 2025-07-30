import login from './LoginCypress'
import methods from '../PageObjectModel/methods'
import locator from '../PageObjectModel/Locators'

describe('Attribution', () => {
    beforeEach(() => {
        cy.viewport('macbook-15');
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        login();
    })

    it('Attribution', () => {

        cy.wait(3000)
        methods.ScrollwithXpath(locator.allaccounts)
        methods.Verifytext1(locator.allaccounts, 'All Accounts')
        methods.MouseHover(locator.reportsdropdown)
        methods.clickbyXpath(locator.attribution)
        methods.VisibilityofElement2(locator.attributionreportab)
        methods.Verifytext1(locator.Attribution_Reports, 'Attribution Reports')
        methods.clickbyXpath(locator.Add_Report)
        methods.VisibilityofElement2(locator.Conversion_Goals)
        methods.clickbyXpath(locator.Add_KPI)
        methods.clickelement(locator.Hubspot_Deals)
        methods.clickElementIndexXpath(locator.Search, 0)
        cy.wait(3000)
        methods.clickbyXpath(locator.Add_a_property)
        methods.clickelement(locator.campaign)
        methods.clickbyXpath(locator.Add_Model)
        methods.clickelement(locator.First_Touch)
        methods.VisibilityofElement2(locator.datepicker)
        methods.clickelement(locator.datepicker)
        methods.clickElement0(locator.choosedatepicker, 4)
        cy.wait(3000)
        methods.clickbyXpath(locator.Run_Analysis)
        methods.VisibilityofElement2(locator.Unique_Users)
        methods.clickbyXpath(locator.Save)
        methods.Verifytext2(locator.Overwritemessage, 'Are you sure you want to overwrite these changes on the existing report?')
        methods.clickbyXpath(locator.it)


    })
});
