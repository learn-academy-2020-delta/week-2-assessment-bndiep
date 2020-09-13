# ASSESSMENT 2: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Why would you use the method `super()`?

  Your answer: The super() method allows you to access the methods that are in your parent class. You do also need to include the parameters that the parent class has between the parenthesis of the super() so that the child class can get access to the same variable placeholders. Otherwise, you child class will not understand what to do with arguments should the user include them.

  Researched answer: super() is called in the class's constructor to get a reference to or inherit the properties and methods defined in the parent class. Additional parameters can be added to the constructor BUT the super() must contain the parameters of the parent class so that the keyword 'this' can be used to include everything in the parent class and anything new defined in the child class. With this in mind, super() must be called to avoid a reference error. super() does not require any parameters but that means the 'this' must be defined for each property in the child class. super() can also be used without a constructor to reference the methods in a parent class. Also, super can be used as a function or as an object.



2. What is the DOM? What is the virtual DOM?

  Your answer: I can't remember what it stands for but I know that it is used to manipulate the HTML webpage through JavaScript. By using JS, we can find the element ID's or classes in the HTML and change them to fit our needs such as changing a default phrase to an updated phrase when a user presses a button. A virtual DOM exists in React, a JS library that is used to create user experience and user interfaces. It allows your React app to hot reload or refresh in real time as soon as the developer makes changes to their text editor and saves those changes. It keeps the developer at ease as it allows them to experiement with their code and not worry about constantly refreshing their browser to view the changes to their code.

  Researched answer: DOM stands for Document Object Model and is a programming interface for HTML, XML, and CSS documents. It looks at elements in an HTML document as nodes and objects and basically makes the HTML more dynamic. DOM updates itself are much slower to its counterpart. The virtual DOM is a virtual representation of a user interface and has all the same properties of a real DOM object. Whenever a JSX element is rendered in a React application, each change is quickly updated in the virtual DOM. A process called "diffing" occurs in which React com[ares the new virtual DOM to the previous version and knows exactly where which virtual DOM objects have been changed, saving a lot of time. Once React identifies those changes, it eill update those specific objects on the real DOM.



3. What is a higher-order function?

  Your answer: A high-order function can be many things. It can be a function that accepts a function as a argument. It can also be a function that calls back a function in the function body. Or it a can be a function that returns a function. An example of high-order-functions are the methods .map() and .filter() that only work on arrays and can be called on inside a function.

  Researched answer: High-order functions work with other functions such as taking them as arguments and returning them as an output. There are built in high-order functions in JavaScript like .reduce(). These types of functions are called abstractions in which they hide the details of how they work and give the ability to more complex problems.



4. What is JSX?

  Your answer: JSX is basically HTML with a JavaScipt language embedded in it. It is used in the React app. Because it is similar to HTML, the user must use curly braces to include the JavaScript language--just like using template literals in string interpolation.

  Researched answer: JSX is a syntax extension to JavaScript that is used in React. It stands for JavaScript XML. React contains components that contain both the JavaScript logic and the markup language to alter the markup language. Using JSX in React is not required but does help with finding error and warning messages. It also allows the developer to write elements in a JS file and put them in the DOM without having to use HTML DOM methods like appendChild().



5. What is React?

  Your answer: React is a JavaScript library that allows developers to create websites and implement UI/UX. It contents many components that can be accessed to create user friendly webpages and applications. 

  Researched answer: React is a JS library used in web development to build interactive elements on websites. It was created by an engineer at Facebook to make user interface development more efficient. The library itself comprises a bunch of pre-written JS that are commonly used to build a user interface in a website or an application. This can include buttons, search bars, and navigation menus. It includes two key features which are JSX and the virtual DOM. 



6. What is yarn? What file(s) are updated when you run `$ yarn`?

  Your answer: Yarn can be access through the terminal and puts the files in the React application together to make in run in the browser. The files updated are all the components and dependicies needed to make the application run. It adds the package.json file to your current working directory when yarn updates.

  Researched answer: Yarn is a JavaScript package manager that installs dependencies when yarn is typed in the terminal of the present working directory. It allows developers to use and share their JS code through a package or a module. The package has all the code being shared which also includes the package.json file that describes the package. Running yarn will upgrade all your dependencies as well as add the yarn.lock file if one hasn't already been made or if changes have been made to the dependencies. The yarn.lock filer is an identifier for all dependencies in the project, which is helpful in determining the exact version of the installed dependency.



7. What is localhost:3000? How do we use localhost:3000 in the development process?

  Your answer: It is the local location of the React app when the app runs in your browser. Once we run the app files in the Terminal, the browser will open up the application at localhost:3000. 

  Researched answer: The localhost in a network addess that represents your local machine/computer. It is also referred to as a loopback address which is basically an IP connection to the user's computer. In the browser, localhost:3000 is the port number it will communicate on. To have something appear in localhost:3000, you have to run the server (like Ruby on Rails) by using the command terminal which will connect to the default port 3000. This will allow the developer to see the running app and reload changes when modifications are made in the application files. It's important for developers because it simulates a server and allows them to test the functionality of their web application by loading their files to that server.



8. What is an iterable in JavaScript? What data types are iterables? How can this information useful to you as a developer?

  Your answer: An iterable is objects that the user can go through by using a for loop or even the .map() or .filter() methods. An example of iterables are objects and arrays. Strings are also an array of characters. These types of objects can allow the developer to access a single element in an organized variable. Instead of having several variables with different names, the developer can place several values in an array or key-pairs in a object to be accessed.

  Researched answer: An iterable is data structure that allow some function or process to access its elements in order that they appear. It should be clear that literal plain objects are not interable. It is able to do this by using the method keyword Symbol.iterator. An iterator like a for loop or map moves through the iterables sequentially. Iterable values include arrays, strings, maps, sets, and DOM data structures.



9. STRETCH: What is hoisting in JavaScript?

  Your answer: I'm sorry, I have not heard of this term before but I will make sure to research what hoisting is in the context of JavaScript.

  Researched answer: Hoisting is a JavaScript behavior that moves all declarations of a variable or a function--even if that variable hasn't been declared with the keyword var or let or const, to the top of your code. This means that variables can be intialized before they are declared and can still be recalled in function due to context execution in JavaScript. They don't move physically in the code but are put into memory during the compile phase so JavaScript recognizes it. Javascript can hoist declarations but not initilizations, so if a variable is declared with no value in one line and is initiliazed to some value in the next line, the function before the declaration cannot return any value.



10. STRETCH: What are closures in JavaScript?

  Your answer: Sorry again. I will make sure to look up closures. Based on the previous question as well, I know that I have a lot of research to do.

  Researched answer: A closure allows the user to access the outer function's scope from the inner function. The inner function will then have access to the variables in the outer function. Closures are created every time a function is created.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- React state - is a built in object that is intialized in the constructor of a class and allows the user to store property values that belongs to the React components. When it is changed, the component will re-render.
- React props - are properties are passed to the component like an argument in a function and returns a React element. React components can accept a single prop. 
- React lifecycle methods - there are 3 phases of a component lifecycle: mounting, updating, and unmounting. React has built in methods when mounitng a component such as constructor() and render().
- API - application programming interface which defines the interactions between two applications.
- e.preventDefault() - a method that cancels an event and prevents the default event from occuring
- DOM events - it allows JavaScript to execute event handlers, such as mouse clicks or keyboard button presses, on elements in an HTML document
