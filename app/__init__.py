from flask import Flask, render_template, request, redirect, session, url_for, flash
import os
from auth_utils import *
from db_utils import *

app = Flask(__name__)
app.secret_key = os.urandom(32)

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
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        if authenticate_user(email, password):
            session['user'] = email
            return redirect(url_for('home'))
        else:
            flash("Invalid email or password. Please try again.", "danger")

    return render_template('login.html')

@app.route('/logout')
def logout():
    session.pop('user', None)
    return redirect(url_for('home'))

if __name__ == "__main__":
    app.run(debug=True)
