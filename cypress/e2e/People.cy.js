import login from './LoginCypress'
import methods from '../PageObjectModel/methods'
import locator from '../PageObjectModel/Locators'

describe('people account', () => {
    beforeEach(() => {
        cy.viewport('macbook-15');
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        login();

    });

    it('should navigate and interact with People filters correctly', () => {

        methods.Verifytext1(locator.allaccounts, 'All Accounts');
        methods.clickbyXpath(locator.accounts);
        methods.clickbyXpath(locator.people);
        methods.Verifytext1(locator.headerpeople, 'All People');

        methods.VisibilityofElement(locator.peopletab);
        methods.clickbyXpath(locator.filter);

        methods.Verifytext1(locator.title1, 'With properties');
        methods.Verifytext1(locator.title2, 'That matches these events');
        methods.clickbyXpath(locator.addnew);
        methods.VisibilityofElement(locator.addnewdropdown);
        methods.clickelement(locator.hubspotcontacts);
        methods.VisibilityofElement(locator.selectproperty_dropdown);
        methods.clickbyXpath(locator.searchinput);
        methods.typeInputxpath(locator.searchinput, 'Hubs');
        methods.clickbyXpath(locator.option1)
        methods.Verifytext2(locator.equals, 'equals');
        methods.clickelement(locator.equals);
        methods.clickelement(locator.notset);
        methods.isEnabled(locator.apply);
        methods.clickbyXpath(locator.apply);
        methods.isEnabled(locator.savechanges);
        methods.clickbyXpath(locator.savechanges);
        methods.Verifytext1(locator.newsegmentpopup, 'New Segment');
        methods.clickbyXpath(locator.saveasinput)
        methods.typeInputxpath(locator.saveasinput, 'Test')
        methods.clickbyXpath(locator.savebutton)
        methods.Verifytext1(locator.allsegments, 'All Segments')
        methods.clickbyXpath(locator.cursordropdown)
        methods.clickbyXpath(locator.deleteSegment)
        methods.Verifytext2(locator.deletepopupsegment, 'Are you sure you want to delete "Test"?')
        methods.clickbyXpath(locator.confirmDelete)
        methods.Verifytext2(locator.successfullydeletepopup)

    })
})