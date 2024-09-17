# Time Tracking
- 10:45am - 12:00pm (1h 15m) - server/client setup for local production
- 12:00pm - 12:15pm (15m) - populate basic user list from proper backend API call
- 12:15pm - 12:30pm (15m) - successfully delete a user via button click
- 12:30pm - 12:50pm (20m) - began work on modals and modal state
- 12:50pm - 1:00pm (10m) - lunch break
- 1:00pm - 2:30pm (1h 30m) - finished figuring out modal state and stores for a singular modal shared across the whole app
- 2:30pm - 2:45pm (15m) - separated rendering states for "edit" vs. "create" user modals
- 2:45pm - 3:15pm (30m) - "Create" new user working
- 3:15pm - 3:18pm (3m) - "Edit" user working
- 3:18pm - 4:40pm (1h 22m) - Added "toasts" using npm module after attempting to build from scratch
- 4:40pm - 6:00pm (1h 20m) - First significant CSS styling pass, most styles in place
- 6:00pm - 6:20pm (20m) - Short break
- 6:20pm - 6:30pm (10m) - Added "No users found" state to user list table, explored other CSS improvements

## **Total: 7 hours, 15m (breaks not included)**

# Process I followed
Since many of the technologies were fairly new/unknown to me, I started by leveraging a Svelte + ExpressJS template I found (https://github.com/dj0nny/svelte-express-boilerplate) and tweaking it from there. I didn't particularly care for all of the excess "example" boilerplate included with it, so I stripped it out in the process of coding through the backend APIs.

I also leveraged ChatGPT to try and "jumpstart" my understanding of Svelte and ExpressJS in particular, though quickly abandoned it after getting a basic working prototype running (a simple page populated with a list of users in a table, no other functionality). Attempting to have ChatGPT assist me from there quickly proved to be more of a nuisance than anything since it'd often get Svelte syntax wrong or just not remember pieces of the environment I had tried to tell it about earlier. In any case, I'm grateful for the earlier portions of the project that I was able to leverage it for.

Otherwise, I did plenty of Google Searches for info and tried to drill down into the Figma doc to help me determine correct padding and margins. The Figma doc didn't really seem to give exact numbers on this and sometimes showed conflicting styles based on declared standards (such as Figma buttons showing a 700 font weight when the style standard wants "Regular" which is usually 400 font weight). I guesstimated as best able without becoming too cross-eyed in the process while staring at my screen.

I then ended the project by updating some of the package.json details and this README file (I didn't include the time I spent doing this, though it was about 15 to 20 minutes). It was tempting to continue working on it until I was 100% satisfied with the end result, but I also felt it would be useful to see what I could get done on new technologies within "a day's worth of work".

# TODO
1. **CSS Responsiveness**. Using table elements was quick and efficient, but it leaves much to be desired when looking at overall site responsiveness, particularly when the site is viewed on narrower viewports. I'd also like to check other visual circumstances such as incredibly long data values (names, email, etc) and how to handle display nuances for edge cases.
2. **Unit Testing**. I managed to make sure the code was generally working in a local environment with manual testing, but the project could use automated unit and end-to-end testing as well. I wanted to dive into some of the testing technologies mentioned in the job description, but decided to opt out of it for now in order to try and get this project done per request within a more reasonable time frame.
3. **Better Error Handling**. Most errors just lazily throw up a toast message when they are encountered, and don't necessarily provide more meaningful instructions for how the user could proceed when encountered.
4. **Improve Svelte**. It's awesome! I definitely want to dive in more to better understand its state/store handling. What I ended up with is probably sufficient (to some extent), but I still feel like there's probably a much better way of approaching several things.
5. **Cleanup APIs**. Getting a single user makes sense to have, but I didn't run into a relevant use-case for it over the coase of the project. Long term, it'd probably be best to keep even if the current state of the app doesn't require it, but I am curious to see if there are other ways I could've cleaned up the APIs too. I sometimes wonder how much "heavy lifting" the backend can/should do for the front-end without over-complicating the implementation (such as automatically assigning a new, relevant, unique userID when creating a new user rather than requiring the front-end to provide one).
6. **Better Toast Notifications**. Since the coding challenge didn't specify a style for toasts (other than mentioning that they should be there), I just went with the default look from an NPM module after an hour of failing to get my own custom solution 100% working. The NPM module in question seems to have a way to designate a template to pass in, but I decided to leave it alone for now for the sake of time. Ideally, it'd be best to have the toast notifications visually match the rest of what's on-screen (delineating between "success" and "error" messages/toasts are always tricky when a brand's primary color is RED, hah).
7. **Upload As Website**. I had contemplated uploading this to GitHub or some other "free" hosting service, but decided to omit that effort at this time. It's definitely something I'm interested in learning though as part of "closing the loop" for launching a functioning application from start to finish.
8. **Code Cleanup**. I put quite a bit of effort into organizing the code in a clean way, but I still feel like there's more that I could do on that front. I tried to settle for a "good enough for now" mindset so that I didn't end up wasting too much time making architectural decisions that would delay actual progress on the project.