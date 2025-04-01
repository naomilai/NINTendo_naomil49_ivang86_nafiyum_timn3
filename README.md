# p04 by NINTendo

## Roster
- Naomi Lai (Project Manager): JS
- Tim Ng: Database
- Naf Murtaza: HTML/CSS
- Ivan Gontchar: Python

## Description
Social anxiety, also known as social phobia, affects millions of people worldwide. This dataset was compiled using a combination of survey responses, observational studies, and self-reported data. Participants provided information on lifestyle habits, stress, social anxiety symptoms, and personal experiences with mental health. 

Our group will examine several features such as demographics, lifestyle, and mental health history to see how they relate to one another and affect social anxiety. This is important for finding trends in the dataset. 

We will communicate this information through an awesome website. Each category will be a separate page including a visualization and outlines of general trends. There will be a “General Information” page that simply displays the graphs with shorter descriptions, which logged-out users would be able to access. All category pages will be inaccessible for users who are not logged in. Log In/Sign up/Log out pages will be provided. Categorized pages will include much more in-depth information (i.e. the “Lifestyle” page would include detailed information on Sleep hours, Physical activity, Diet quality, etc.)


## Install Guide
  To install, go to the top of the page and click the green button that says "Code". In the dropdown that appears, click "Download Zip" at the bottom. Extract the zip from your downloads into your home directory. <br>

OR
  
  To clone the repository, go to the top of the page and click the green button that says "Code". In the dropdown that appears, choose either "HTTPS" or "SSH" under the "Clone" section and copy the provided URL. Open up your computer's terminal and type "git clone {URL HERE}"
  
## Launch Codes
  1. Make a python virtual environment

      a. Open up your device's terminal

      b. Type ```$ python3 -m venv {path name}``` or ```$ py -m venv {path name}```

      c. Type in one of the commands into your terminal for your specific OS to activate the environment

      - Linux: ```$ . {path name}/bin/activate```
    
      - Windows Command Prompt: ```> {path name}\Scripts\activate```

      - Windows PowerShell: ```> . .\{path name}\Scripts\activate```

      - MacOS: ```$ source {path name}/bin/activate```

      (If successful, the command line should display the name of your virtual environment: ```({path name})$ ```)

      d. When done, type ```$ deactivate``` to deactivate the virtual environment

  3. Ensure your virtual environment is activated

  4. Access the repository by typing ```$ cd APInsomniacs__amandat109_jacobl153_kishiw2_naomil49/```

  5. Type ```$ pip install -r requirements.txt``` to install the required modules

 - If terminal returns ```zsh: command not found: pip```, type ```$ pip3 install -r requirements.txt``` because ```$ pip``` is for python2.

  6. Navigate to app by typing ```$ cd app/```
    
  8. Type ```$ python3 __init__.py``` to run the application

  9. Copy / type "http://127.0.0.1:5000" or "http://localhost" onto a browser to view the website

----
Credit: Install Guide and Launch Codes from CoolBeans P00
