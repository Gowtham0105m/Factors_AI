import login from './LoginCypress'
import methods from '../PageObjectModel/methods'
import locator from '../PageObjectModel/Locators'
import dayjs from 'dayjs';

describe('PathAnalysis', () => {
    beforeEach(() => {
        cy.viewport('macbook-15');
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        login();

    });

    it('Path_Analysis', () => {

        const Cur_Date = dayjs().format('H:m:s');
        const testing = `Test_${Cur_Date}`;
        const testingname = 'Testing is created';

        cy.wait(3000)
        methods.ScrollwithXpath(locator.allaccounts)
        methods.assertElementContainsTextbyxpath(locator.allaccounts, 'All Accounts')
        cy.wait(3000)
        methods.VisibilityofElement(locator.accountspageload)
        cy.wait(3000)
        methods.VisibilityofElement2(locator.reportsdropdown);
        cy.wait(3000)
        methods.clickelement(locator.reportsdropdown)
        methods.clickbyXpath(locator.pathanalysis)
        methods.VisibilityofElement2(locator.pathtablist)
        methods.clickbyXpath(locator.Create_New)
        methods.VisibilityofElement2(locator.pathtablist)
        methods.ClickandType(locator.startwithaneventtitle, 0)
        methods.clickbyXpath(locator.start_with_an_title)
        methods.clickbyXpath(locator.Add_Event)
        cy.wait(3000)
        methods.clickelement(locator.HubspotCompanies)
        methods.clickElementIndexXpath(locator.SelectEvent, 0)
        methods.VisibilityofElement2(locator.pathanalysistab)
        methods.clickbyXpath(locator.Add_new)
        methods.clickelement(locator.others)
        methods.clickElementIndexXpath(locator.Search, 0)
        methods.clickelement(locator.equals)
        methods.clickElementIndexXpath(locator.Search, 0)
        methods.clickbyXpath(locator.apply)
        methods.clickelement(locator.datepicker)
        methods.VisibilityofElement2(locator.monthtablist)
        methods.VisibilityofElement2(locator.startdate)
        methods.VisibilityofElement2(locator.enddate)
        methods.clickElementIndexXpath(locator.startmonthdate, 0)
        methods.clickElementIndexXpath(locator.endmonthdate, 0)
        methods.clickbyXpath(locator.savebuild)
        cy.wait(3000)
        methods.VisibilityofElement2(locator.deletepopupsegment)
        methods.assertElementContainsText(locator.savereporttitle, 'Save report')
        methods.typeInput2(locator.name, testing)
        methods.typeInput2(locator.description, testingname)
        methods.clickbyXpath(locator.savebutton)
        methods.VisibilityofElement2(locator.savedreport)
        methods.Verifytext2(locator.savedreport, 'Report saved!')
        methods.clickElementIndexXpath(locator.deletesavedpaths, 0)
        methods.clickbyXpath(locator.deletereport)
        methods.VisibilityofElement2(locator.deletepopupsegment)
        methods.Verifytext2(locator.confirmtoproceed, 'Please confirm to proceed')
        cy.wait(3000)
        methods.clickbyXpath(locator.yesbuttonclick)
        methods.VisibilityofElement2(locator.deletepopupreport)
        methods.Verifytext2(locator.deletepopupreport, 'Saved report removed!')





        // cy.xpath(`(//h4[text()="${ReportName}"]//following::span[@aria-label="more"])[1]`).click({ force: true })

    })


});