# JSON - JavaScript Object Notation

**According to MDN website** (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON):
* JSON is purely a string with a specified data format ---> it contains only properties, NO method.
* It is used to used to exchange data to/from web server/network
* It needs to be converted to a **native JavaScript object** when you want to **access** the data.
* **'Parse'** simply means to interpret structured data formate like JSON
* There are two common method to handle JSON data and those are:
![image](https://github.com/asyikin22/JSON/assets/148519441/0779032d-7a9c-4835-ad06-171eee56a82c)

<br>

**SO WHY IS IT IMPORTANT TO PARSE JSON DATA INTO JAVASCRIPT OBJECT?**
* When we receive data from external source (API or file), it is usually in the form of string in JSON format.
* In JavaScript, you cannot directly work with this string data in a meaningful way until you parse it into JS object.
* The following points explain why parsing JSON data is important:
![image](https://github.com/asyikin22/JSON/assets/148519441/1fa5cd29-a321-48fa-bda6-c3f84d50004c)

**DEMONSTRATION**: I have uploaded 3 files to show how we can use JSON.parse(), JSON.stringify and fetch JSON data in javascript.

**JSON.parse()**
* In order to understand it meaningfully, I did not use dummy JSON data that we can get from the internet. I simply created a very basic JSON data in my  json file.
* I created JSON data that represents an array of objects, where each object contains information about a book.
* Each book object has four properties: title, author, rating, and publishedYear.
* It is important to note the syntax of JSON data object. It has: Curly braces {…}, double quotes "…",  comma " , " .
* Object is usually represented in curly bracket {...}
* [...] indicates that the collection of objects is an array
* Object has a key-pair value, in this example
* The key and value shoudl be wrapped inside (" ") double quote.
  ![image](https://github.com/asyikin22/JSON/assets/148519441/f96fe559-3961-45bb-8a0d-0b3a0342bd26)

* Inisde our javascript file we can create a variable that contains this JSON data array
* We can then use console.log to see those data in our console and incorporating JSON.parse() to change JSON data into JavaScript Object.
* Before we do that, we need to put the array inside a backtick (``) to turn them into string
* Once the objects are parsed into JS object, we can access the object using dot notation to retrieve wahtever information we needed from the array of objects.
* In this example, I wanted to see the title of the title of the third book as well as author of the second book. The code going to look like this:
  
  ![image](https://github.com/asyikin22/JSON/assets/148519441/a6e0f085-ac4d-4a8c-9b7d-df18b2dca1b1)
* Alternatively, we can also wriet it like this and it will display the same result:

  ![image](https://github.com/asyikin22/JSON/assets/148519441/7d541e42-cec2-474f-9ea5-c161d025ada0)

  **JSON.stringify()**
  * In my JSON file, i created 3 separate files for names(array), person (object with key-pair value) and people (collection of objects in an array)
  * In order to convert JavaScript object to to JSON string format, i declare all of the file in a varibale
  * JSON.stringify() function is called with 'people' as its argument
  * console.log(people): logs the original array or object (people) to the console. It outputs array or object as is, in its original JavaScript representation.
  * console.log(jsonString): logs the JSON string (jsonString) to the console. It displays a JSON string representation
  * Now that it's converted into a JSON format, we can then transmit them to other networks or server
    
    ![image](https://github.com/asyikin22/JSON/assets/148519441/06d8a9aa-70d9-45a4-aa3a-972dfddd7109)



  
