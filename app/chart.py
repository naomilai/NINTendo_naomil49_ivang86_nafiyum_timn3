# method: enhanced anxiety BIG !!
import csv
from flask import Flask, render_template

def get_enchanced_anxiety(): # returns dataset information as a list
    with open("enhanced_anxiety_dataset.csv", "r") as file:
        arr = list(csv.reader(file))
        return arr

def get_attribute(attribute): # returns all attribute data
    data = get_enchanced_anxiety()
    n = data[0].index(attribute) # index of attribute in each row
    new_data = []
    for row in data:
        try:
            add = row[n]
            new_data.append(add)
        except ValueError:
            continue
    return new_data

def view_attributes(): # prints list of names
    data = get_enchanced_anxiety()
    n = data[0]
    for item in n:
        print(item, "\n")

# view_attributes()


app = Flask(__name__)

@app.route('/')
def route():
    anx_data = get_attribute('Anxiety Level (1-10)')
    age_data = get_attribute('Age')
    print(age_data)
    return render_template('testing_chart.html')

if __name__ == "__main__":
    app.run(debug=True)
