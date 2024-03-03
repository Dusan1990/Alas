Instructions how to download the project on your local machine and to run Cypress tests for TASK1
1. Create a folder where the repository will be cloned.
2. Open the terminal within that folder and run git clone https://github.com/Dusan1990/Alas.git.
3. After the folder is downloaded, open the terminal within the newly created folder and run npm install.
4. You can view the code, for example, in VS Code, where you can run tests through the terminal in several ways:
    - npx cypress open to see the UI where you can select the task1.js file where the tests are located.
    - npx cypress run --headed where the UI will be displayed only while the tests are running and will close afterwards.
    - npx cypress run where the UI will not be displayed.
    - npx cypress run --browser chrome to run tests in Chrome.
    - npx cypress run --browser firefox to use Firefox. Choose the method that suits you best.

Instructions for TASK2 
1. After downloading the project to your computer, open the downloaded folder, for example, newFolder/Alas/Task2_PostmanCollection. Within this folder, you will find the collection.json file.
2. Open Postman and navigate to your workspace. Click on "Import" in the top left corner.
3. Select "Import File" and locate the collection.json file you previously downloaded. Click on "Import", which will result in creating a new collection named "Alas_doo".
4. After that, click on "Run" in the top right corner, then choose "Run Alas_doo" if you want to manually run all the tests once.
5. Alternatively, you can set the tests to run automatically at a specific time.