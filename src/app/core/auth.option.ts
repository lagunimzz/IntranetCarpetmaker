export const options = {
    theme: {
        logo: "../../favicon.png",
    },
    languageDictionary: {
        title: "Carpet Maker (Thailand)"
    },
    allowedConnections : ['Username-Password-Authentication','facebook'],
    additionalSignUpFields: [{
        name: "department",
        placeholder: "enter your department",
        // The following properties are optional
        icon: "https://example.com/assests/address_icon.png",
        validator: function(department) {
        return {
            valid: department.length > 0,
            hint: "Please enter department" // optional
        };
        }
    }]
}