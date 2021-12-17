package au.com.carguide.cucumber.stepdefs;

import au.com.carguide.pages.FindDealerPage;
import au.com.carguide.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FindDealers {
    @When("^I click on 'Find a Dealer' link$")
    public void iClickOnFindADealerLink() {
        new HomePage().clickOnFindDealer();
    }

    @Then("^I navigate to 'Car Dealers' page$")
    public void iNavigateToCarDealersPage() {
        new FindDealerPage().verifyNavigateToCarDealerPage("Car Dealers");
    }

    @And("^I should see the dealers names \"([^\"]*)\" are display on page$")
    public void iShouldSeeTheDealersNamesAreDisplayOnPage(String dealer) {
        new FindDealerPage().verifyDealerNames(dealer);
    }
}
