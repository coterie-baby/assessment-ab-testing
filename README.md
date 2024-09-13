# A/B Testing Interview Assessment

## Context

You are designing a system to bucket users into two testing categories, v0 and v1, based on their UTM parameters. Your goal is to ensure that users are properly bucketed and see the correct number of menu buttons depending on their bucket.

## Requirements:

### Bucket Assignment Rules:

- Users who visit the site with ‘google’ in their UTM parameters should be randomly assigned to either v0 or v1 with equal probability (50% chance for each).

- Users with UTM parameters that do not contain ‘google’ should be bucketed into v1.

- If any user has ‘shopping’ in their UTM parameters, bucket them into v0, regardless of whether or not they have ‘google’ in their params.

- If a user has neither ‘shopping’ nor ‘google’ in their UTMs, assign them to v1

### A/B Test purpose:

- Users in variant v0 get the current version as is.

- Users in variant v1 get an additional menu button to promote our new Pant product. The name of the menu button is “Our Pant“. Additionally, add a badge element with the word “NEW” to the new menu button.

### Implementation:

- You are free to structure the implementation however you prefer, using any frontend libraries, file structure, or component organization you deem necessary. Feel free to create new components or modify existing ones as needed.

- You may use any method for handling user state, session management, or UTM parameter retrieval. You can also store information using cookies, localStorage, sessionStorage, or any other form of browser storage that you find suitable.

- You should implement a system to randomly assign users into v0 or v1 based on the UTM parameters as described. This can be done using any algorithm or method of your choice.

- There are no restrictions on how you implement styling.

- Testing is encouraged. You can write any tests you want to validate the bucket assignment logic or UI behavior.

## Example Cases

**Case 1:** UTM contains ‘google’ but not ‘shopping’ \
UTM Parameter: ?utm_source=google&utm_medium=cpc \
Expected Behavior: Randomly assign the user to v0 or v1 with a 50% chance for each.

**Case 2:** UTM contains both ‘google’ and ‘shopping’ \
UTM Parameter: ?utm_source=google&utm_medium=shopping \
Expected Behavior: User should be assigned to v0 due to the presence of ‘shopping’ in their UTM parameters.

**Case 3:** UTM contains ‘shopping’ but not ‘google’ \
UTM Parameter: ?utm_source=referral&utm_medium=shopping \
Expected Behavior: User should be assigned to v0 because ‘shopping’ is present.

**Case 4:** UTM contains neither ‘google’ nor ‘shopping’ \
UTM Parameter: ?utm_source=facebook&utm_medium=cpc \
Expected Behavior: User should be assigned to v1 because neither ‘google’ nor ‘shopping’ is present.

**Case 5:** UTM contains ‘google’ and additional parameters but no ‘shopping’ \
UTM Parameter: ?utm_source=google&utm_medium=paid&utm_campaign=spring_sale \
Expected Behavior: Randomly assign the user to v0 or v1 with a 50% chance for each.

**Case 6:** UTM contains ‘shopping’ and additional parameters but no ‘google’ \
UTM Parameter: ?utm_source=referral&utm_medium=shopping&utm_> ampaign=holiday_sale \
Expected Behavior: User should be assigned to v0 due to the presence of ‘shopping’.
