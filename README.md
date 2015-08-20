##book search


###Description:
Developed a single page app using the MEAN.js (Angular and Node/Express specifically) scaffolding generated with Yeoman. While I could have optimized the project by storing already found books in a Mongo collection and making the openlibrary API requests from the frontend, the project spec called for making a request to node.js, which in turn makes a request to openlibrary's API and returns it's findings to the browser.

#####Note:
Initially, I included the angular smart table package to handle the asynchronous updates to the book collection and the table that rendered that data. However, given the scope of the project, I decided to simply use "dumb tables" to minimize the number of dependencies when I noticed that performance was pretty much the same for both tables.

Furthermore, I decided to only handle ISBN-10 and ISBN-13 identification codes.


###Installation:
1. Make sure bower, grunt, express, and mongo are installed on your machine
2. In terminal, cd into the `confer-coding-task` directory
3. Run `npm install`
4. Open two more tabs in terminal, and run the `mongod` and `mongo` commands 
5. In our first tab, run `grunt` and head over to `localhost:3000/#!/` in your browser of choice

###Usage:
booksearch handles multiple ISBN-10 and ISBN-13 searches that are comma-separated. Error messages will be rendered on the screen if a string with less than 10 characters is entered OR the call to openlibrary's API returns no book objects.


1. Enter 1 or more ISBN numbers (comma separated) into the search box and press the 'enter/return' key
2. Upon success, a table is populated including the following information for the requested ISBN numbers: title, sub-title (if available), pages, and url.
3. Upon error, the table will not be rendered and an error message is rendered in the browser.   