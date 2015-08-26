global.widgets = {};


var rootSelector = 'body';
var selectors = {
  userField: '#user_username',
  passwordField: '#user_password',
  form: 'form'
};

widgets.login = {
  loginToApp: function(email, password) {
    client.setValue(selectors.userField, 'foo');
    client.setValue(selectors.passwordField, 'letMe1n');
    client.submitForm(selectors.form);
  }
}