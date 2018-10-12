## Challenge: Political Campaign

> Challenges are optional exercises that you should attempt only if you've completed the practice exercises and understand the concepts.

You have volunteered your time to a local political candidate, Elizabeth Sanger, who wants to become a US representative in Congress for your district. Unfortunately, the team discovered that you're a software developer, so they have begged you to build an application that lets them track volunteers, and store information about Elizabeth and her campaign.

Your job is to define the different objects and arrays, their structure, and the corresponding properties for each, to represent the following information about Elizabeth's campaign.

1. Her congressional district (_you can use yours here_)
1. Her platform statements for the following issues.
    1. Taxes
    1. Jobs
    1. Infrastructure
    1. Health care
    1. Crime and enforcement
1. URL for donation form
1. Calendar of events
1. Volunteer information
    1. Name
    1. Address
    1. Email
    1. Phone number
    1. Availability
    1. What activities each one is willing to do (e.g. answering phone calls, taking polls, etc.)
1. Biography
1. Image gallery
    1. Head shot
    1. Picture of family
    1. Picture of constituents
1. Mission statement
1. URL for registering to vote

## Advanced Challenge

> Advanced challanges are intended to be difficult and the expectation is for you to use your imagination, and research skills to make your own decisions about which code should be written.

After you have defined all the objects for representing the data about Elizabeth's campaign, write a corresponding function for each one whose purpose is to change the state of the object. Then use your functions to modify the existing data.

Things to think about.

- Am I modifying an array? Then the function argument should be added to the target array with the `push()` method.
- Am I modifying an object? Then I should pass both the key name to be modified, and its corresponding value.

This challenge is for you to practice writing functions, so the more you can write, the better. It helps make neural connections in your brain at this point since you're still building your software vocabulary.

Example:

```js
function addToImageGallery (newImage) {
    ...
}

function changeBiography (newBiography) {
    ...
}

function changePlatform (topic, newPlatformStatement) {
    ...
}
```