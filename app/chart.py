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
    for row in data[1:]:
        try:
            add = float(row[n])
            new_data.append(add)
        except ValueError:
            continue
    return new_data

def view_attributes(): # prints list of names
    data = get_enchanced_anxiety()
    n = data[0]
    for item in n:
        print(item, "\n")

def todict(x, y):
    data = get_enchanced_anxiety()
    x1 = data[0].index(x) #index of x in each row
    y1 = data[0].index(y) # index of  y in each row
    
    new_x = []
    new_y = []
    for n in range(len(x)):
        d.append([x[n], y[n]])
    d = sorted(d)
    return d


# app = Flask(__name__)

# @app.route('/')
# def route():
#     anx_data = get_attribute('Anxiety Level (1-10)')
#     age_data = get_attribute('Age')
#     # d = todict('Anxiety Level (1-10)', 'Age')
#     # print(d)
#     return render_template('testing_chart.html', anx_data = anx_data, age_data = age_data)

# if __name__ == "__main__":
#     app.run(debug=True)
