## Statement of work

**You can find the complete statement of this work, in the last point of this document with the title (FINAL WORK: JAVASCRIPT).**

**'It is important to note that this is a fictional project used for educational and practice purposes'**

## Characteristics

Does not use a database: It is important to note that this project does not have a database. The data collected in the quote form is not permanently stored anywhere. This is simply a form simulation.

Server requirements: For its correct operation, the project must be executed from a server. For example, it is recommended to use XAMPP or another local server to host the application. This is essential so that certain features, such as the news section that uses requests, can be displayed correctly.

## Download and Configuration in Local Environment

**Requirements:**
Have installed on your PC: A local server of your choice (XAMPP is recommended).

**Steps:**

1. **Download the Project:**
Click the "Code" button in this repository and select "Download ZIP".

2. **Project Extraction:**
Create a new folder on your desktop.
Go to the downloads folder and drag the downloaded ZIP file to the new folder to extract it.

3. **Location on Local Server:**
Copy the extracted project folder and paste it into the folder on your local server. For example, in XAMPP, the folder is usually xampp/htdocs.

4. **Start Local Server:**
On Windows, access the XAMPP Control Panel from the start menu (Start > XAMPP > XAMPP Control Panel) and run it as administrator to ensure you have the necessary permissions. Start Apache from the control panel by pressing Start.

5. **Project View:**
Open your web browser and navigate to (localhost/put here the folder name of the extracted project), this will load the project in your browser and you can interact with it locally. Once the project has been displayed, the icons at the top right for navigation between sections of the home page may not initially be displayed. To do this, once the project is displayed, update and refresh the browser first and the icons will appear in their place. This is a small problem that I have to solve when I can.

# FINAL WORK: JAVASCRIPT 

## Instructions:

As the final exercise of the module, you must create a website.

It may be from a fictitious company, the information does not have to be real.

To carry out this exercise you must use: HTML5, CSS3, JavaScript, Ajax and the plugins or libraries that are needed.

## Realization of the website:

**o A home page that will be called `index.html`:**

This page will be the front page of the website and must contain a minimum of four sections, one of them being where news is loaded from an external file.

It is recommended that the external file be a JSON file, although it will also be considered valid if it is an XML.

**o A gallery page that will be called gallery.html:**

This page must incorporate a dynamic gallery using JavaScript or any JavaScript or jQuery library.

You can also use a plugin that is already created.

**o A budget page that will be called budget.html:**

This page must contain a form that is divided into two parts:

**1. Contact details:**

In this first part of the form, the user's contact information will be requested.

Contact details must be validated using JavaScript to meet the following criteria:

- Name: It may only contain letters and will have a maximum length of 15 characters.

- Surnames: It may only contain letters and will have a maximum length of 40 characters.

- Contact telephone number: It may only contain numbers and will have a maximum length of 9 digits.

- Email: Must meet email standards. Example: nnnnn_nnn@zzzzz.xxx

**2. Budget:**

In this second part of the form, the user will be asked to choose between several options to calculate a budget.

The options should be:

- Product: The relevant HTML tags must be used that allow the user to choose between several options. Each option will have an associated price. A minimum of three options must be entered.

- Term: An HTML tag (numeric input) must be used that allows the user to indicate the number of months or days in which they wish to receive the product. Depending on the value entered, a discount will be applied to the final budget.

- Extras: Several HTML tags must be used that allow the user to mark all the extra options that they want to add to the chosen product. Each option selected will increase the final budget by a certain amount.

- Budget: The relevant HTML tags should be used to show the user the final budget, based on the choices they have made. This field must be updated with any changes made to the product choices, months and extras, without using buttons or refreshing the page.
  
- Conditions and submission of the quote: In this section you must use an HTML tag that allows you to create an option to accept the privacy conditions of the page and a button that allows you to send the form. Additionally, a button can be created that allows the form to be reset.
Please note that in order to send the form, all fields must be completed (including the acceptance of the conditions) and all data in the contact section must be validated.

**o A contact page that will be called contact.html:**

On this page a dynamic map must be inserted that marks the location of the business and calculates the route to the customer's location. To do this, you can use an API such as Google Maps or OpenStreetMaps, as well as several JavaScript libraries.

In addition to the map, the contact information and location of the company must be specified. The location of these will be of free choice.

### Style and mandatory elements:

The site must have an attractive and current style.

You can select one color and its complementary color or a maximum of three colors in addition to black and white. It should be remembered that you can also get inspiration from real pages to create it.

In addition, each page of the site must contain the following elements:

- **Page name or logo:**

It should be located at the top of the pages or in the navigation bar.

- **Navigation bar:**

It should be located at the top of the pages that make up the website.

This bar must highlight, through the use of CSS styles, the menu page where the user is located within the website and must accompany the user in the vertical scroll.

That is, although the user can scroll vertically, the navigation bar must remain fixed at the top and always remain in view.

- **Footer:**

The footer will contain the logos of various social networks, the company address and the legal notice.


## Validation of HTML pages and appropriate use of their tags and properties:

The HTML of all pages must validate without errors or warnings.

Remember that you can check that it validates correctly, through: W3C Validator or by installing a validation plugin in the code editor (such as W3C Web Validator for Visual Studio Code).

In addition, HTML tags and their properties must be used correctly for each section.


## Project structure and comments:

The project should be organized with a folder structure as if it were a real project and include comments.
