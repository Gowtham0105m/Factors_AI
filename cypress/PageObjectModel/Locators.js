class locator {

    constructor() {

        this.NewSeg_Btn = '//span[text()="New Segment"]';
        this.allaccounts = '//h1[text()="All Accounts"]';
        this.accounts = '(//h4[text()="Accounts"])[1]';
        this.people = '//h4[text()="People"]';
        this.headerpeople = '//div[@class="profiles-header"]';
        this.peopletab = '//tbody';
        this.filter = '//span[text()="Filter"]';
        this.title1 = '(//h1[contains(@class,"ant-typography fai-text")])[1]';
        this.title2 = '(//h1[contains(@class,"ant-typography fai-text")])[2]';
        this.addnew = '//span[text()="Add new"]';
        this.addevent = '//h4[text()="Add event"]';
        this.addnewdropdown = '//div[contains(@class,"fa-select-dropdown GroupSelect")]';
        this.hubspotcontacts = '[data-title="Hubspot Contacts"]';
        this.selectproperty_dropdown = '(//div[contains(@class,"FaFilterSelect__filter")])[4]';
        this.searchinput = '//input[@placeholder="Search"]';
        this.option1 = '(//div[contains(@class,"flex flex-col scrollable")]//following::div)[1]';
        this.equals = '[data-title="equals"]';
        this.notset = '[data-title="(Not Set)"]';
        this.apply = '//span[text()="Apply"]';
        this.savechanges = '//span[text()="Save Changes "]';
        this.newsegmentpopup = '//div[@class="ant-modal-body"]';
        this.saveasinput = '//input[@placeholder="Eg- Paid search visitors"]';
        this.savebutton = '//span[text()="Save"]';
        this.Save = '(//span[text()="Save"])[1]';
        this.allsegments = '//span[text()="All Segments"]';
        this.createdSegment = '//div[text()="Test"]';
        this.cursordropdown = '//div/following::div[@class="cursor-pointer"]';
        this.segmentOptions = '//div[text()="Test"]/following-sibling::button[contains(@class,"options-menu")]';
        this.deleteSegment = '//div[text()="Delete segment"]';
        this.deletepopupsegment = '.ant-modal-body';
        this.confirmDelete = '//span[text()="Confirm"]';
        this.successfullydeletepopup = '.ant-notification-notice-message';
        this.pathanalysis = '//h4[text()="Path Analysis"]';
        this.reportsdropdown = '#fa-at-link--journeys';
        this.pathtablist = '.fa-container';
        this.Create_New = '//span[text()="Create New"]';
        this.accountspageload = '//tbody';
        this.startwithaneventtitle = '[title="Start with an event"]';
        this.start_with_an_title = '//div[text()="Start with an event"]';
        this.Add_Event = '(//span[text()="Add Event"])[1]';
        this.HubspotCompanies = '[data-title="Hubspot Companies"]';
        this.SelectEvent = '//input[@placeholder="Select Event"]//following::div[@data-title]';
        this.pathanalysistab = '.mt-24';
        this.Add_new = '(//span[text()="Add new"])';
        this.others = '[data-title="OTHERS"]';
        this.Search = '//input[@placeholder="Search"]//following::div[@data-title]';
        this.datepicker = '.fa-custom-datepicker';
        this.monthtablist = '.ant-picker-panel-container';
        this.startdate = '[placeholder="Start date"]';
        this.enddate = '[placeholder="End date"]';
        this.startmonthdate = '//tbody//tr//td[6]';
        this.endmonthdate = '//tbody//tr[2]//td[6]';
        this.savebuild = '//span[text()="Save and Build"]';
        this.savereporttitle = '.ant-modal-title';
        this.name = '#basic_title';
        this.Attribution_Reports = '//h4[text()="Attribution Reports"]';
        this.description = '#basic_description';
        this.savedreport = '.ant-message-notice-content';
        this.savedpaths = '.ant-spin-nested-loading';
        this.deletesavedpaths = '//div//th//following::button';
        this.deletereport = '//a[text()="Delete Report"]';
        this.confirmtoproceed = '.ant-modal-confirm-content';
        this.yesbuttonclick = '//span[text()="Yes"]';
        this.deletepopupreport = '.ant-message-notice-content';
        this.attribution = '//h4[text()="Attribution"]';
        this.attributionreportab = '#card-2251799839000365';
        this.Add_Report = '//span[normalize-space()="Add Report"]';
        this.Conversion_Goals = '.query_composer';
        this.Add_KPI = '//span[text()="Add KPI"]';
        this.Hubspot_Deals = '[title="Hubspot Deals"]';
        this.Add_a_property = '//span[text()="Add a Property"]';
        this.campaign = '[title="Campaign"]';
        this.Add_Model = '//span[text()="Add Model"]';
        this.First_Touch = '[title="First Touch"]';
        this.choosedatepicker = '.ant-dropdown-menu-title-content';
        this.Run_Analysis = '//span[text()="Run Analysis"]';
        this.Unique_Users = '.mt-24';
        this.Overwritemessage = '.ant-popover-inner-content';
        this.it = '//span[text()="Yes, overwrite it"]';



    }
}

export default new locator();