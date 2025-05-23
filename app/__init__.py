from flask import Flask, render_template, request, redirect, session, url_for, flash
import os
from auth_utils import *
from db_utils import *
from chart import *

app = Flask(__name__)
app.secret_key = os.urandom(32)

DB_FILE = os.path.join(os.path.dirname(__file__), "database.db")

setup_db()

@app.route('/')
def home():
    return render_template('index.html', logged_in=is_logged_in(), user=get_logged_in_user())

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']
        # dob = request.form['dob']

        is_error = False

        if register_user(email, password):
            session['user'] = email
            return redirect(url_for('home'))
        else:
            flash("User already exists. Try logging in.", "danger")
            is_error = True
        if (not is_error):
            create_user(name, password, email, dob, json.dumps({}))
            flash("Successfully created account! Redirected to home")
            return redirect(url_for('home'))

    return render_template('signup.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if get_redirect(): # focus on displaying msg if you are being redirected
        print("got redirect")
        set_redirect(False)
        flash("You need to log in to access that page.", "danger")
    else:
        print("no redirect")
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        if authenticate_user(email, password):
            session['user'] = email
            return redirect(url_for('home'))
        else:
            flash("Invalid email or password. Please try again.", "danger")

    return render_template('login.html')

@app.route('/demo')
def demo():
    if not is_logged_in():
        set_redirect(True)
        return redirect(url_for('login'))
        
    anx_data = get_attribute('Anxiety Level (1-10)')
    age_data = get_attribute('Age')
    gender_data = get_attribute('Gender')
    occupation_data = get_attribute('Occupation')

    return render_template('demo.html', logged_in=is_logged_in(), user=get_logged_in_user(),
    anx_data = anx_data,
    age_data = age_data,
    gender_data = gender_data,
    occupation_data = occupation_data
    )

@app.route('/health')
def health():
    if not is_logged_in():
        set_redirect(True)
        return redirect(url_for('login'))

    anx_data = get_attribute('Anxiety Level (1-10)')
    family_data = get_attribute('Family History of Anxiety')
    medication_data = get_attribute('Medication')
    therapy_data = get_attribute('Therapy Sessions (per month)')    
    stress_data = get_attribute('Stress Level (1-10)')

    return render_template('health.html', logged_in=is_logged_in(), user=get_logged_in_user(),
    anx_data = anx_data,
    family_data = family_data,
    medication_data = medication_data,
    therapy_data = therapy_data,
    stress_data = stress_data
    )

@app.route('/lifestyle')
def lifestyle():
    if not is_logged_in():
        set_redirect(True)
        return redirect(url_for('login'))

    anx_data = get_attribute('Anxiety Level (1-10)')
    sleep_data = get_attribute('Sleep Hours')
    alcohol_data = get_attribute('Alcohol Consumption (drinks/week)')
    caf_data = get_attribute('Caffeine Intake (mg/day)')
    phys_data = get_attribute('Physical Activity (hrs/week)')
    
    return render_template("lifestyle.html", logged_in=is_logged_in(), user=get_logged_in_user(),
    anx_data = anx_data,
    sleep_data = sleep_data,
    caf_data =  caf_data,
    alcohol_data = alcohol_data,
    phys_data = phys_data
    )

@app.route('/stats')
def stats():
    anx_data = get_attribute('Anxiety Level (1-10)')
    sleep_data = get_attribute('Sleep Hours')
    therapy_data = get_attribute('Therapy Sessions (per month)')
    occupation_data = get_attribute('Occupation')
    family_data = get_attribute('Family History of Anxiety')

    return render_template("stats.html", logged_in=is_logged_in(), user=get_logged_in_user(),
    anx_data = anx_data,
    sleep_data = sleep_data,
    therapy_data = therapy_data,
    occupation_data = occupation_data,
    family_data = family_data
    )

@app.route('/logout')
def logout():
    session.pop('user', None)
    return redirect(url_for('home'))

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug = True)
