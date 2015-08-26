
module.exports = function() {

  this.Given("I have visited login page", function () {
    client.url(process.env.ROOT_URL || 'http://localhost:3000')
  });

  this.Then("I have signed in", function () {
    widgets.login.loginToApp()
  });

  this.Then("I am in", function () {
    client.click('.profile img')
    // client.debug()
    expect( client.getText('.logged-in-as h4') ).to.equal("LOGGED IN AS JEFF DEVINE")
  });
}