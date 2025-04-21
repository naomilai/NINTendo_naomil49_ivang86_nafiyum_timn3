import csv
from flask import Flask, render_template

import os

cwd = os.getcwd()  # Get the current working directory (cwd)
files = os.listdir(cwd)  # Get all the files in that directory
print("Files in %r: %s" % (cwd, files))

def get_enchanced_anxiety(): # returns dataset information as a list
    with open("enhanceanxdataset.csv", "r") as file:
        arr = list(csv.reader(file))
        return arr

def get_attribute(attribute): # returns all attribute data
    data = get_enchanced_anxiety()
    n = data[0].index(attribute) # index of attribute in each row
    new_data = []
    for row in data[1:]:
        try:
            new_data.append(float(row[n]))
        except ValueError:
            new_data.append(row[n])
            continue
    return new_data

def view_attributes(): # prints list of names
    data = get_enchanced_anxiety()
    n = data[0]
    for item in n:
        print(item)

# view_attributes()

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def route():
    anx_data = get_attribute('Anxiety Level (1-10)')
    age_data = get_attribute('Age')
    gender_data = get_attribute('Gender')
    # occupation_data = get_attribute('Occupation')

    return render_template('testing_chart.html',
    anx_data = anx_data,
    age_data = age_data,
    gender_data = gender_data,
    # occupation_data = occupation_data
    )

if __name__ == "__main__":
    app.run(debug=True)
