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
        email = request.form['email']
        password = request.form['password']

        if register_user(email, password):
            session['user'] = email
            return redirect(url_for('home'))
        else:
            flash("User already exists. Try logging in.", "danger")

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
    # if not is_logged_in():
    #     set_redirect(True)
    #     return redirect(url_for('login'))
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
    return render_template('health.html', logged_in=is_logged_in(), user=get_logged_in_user())

@app.route('/lifestyle')
def lifestyle():
    if not is_logged_in():
        set_redirect(True)
        return redirect(url_for('login'))
    return render_template("lifestyle.html", logged_in=is_logged_in(), user=get_logged_in_user())

@app.route('/stats')
def stats():
    return render_template("stats.html", logged_in=is_logged_in(), user=get_logged_in_user())

@app.route('/logout')
def logout():
    session.pop('user', None)
    return redirect(url_for('home'))

if __name__ == "__main__":
    app.run(debug=True)
