import os
import sqlite3
from flask import session

users = {} # temporary for now

DB_FILE = os.path.join(os.path.dirname(__file__), "database.db")

def is_logged_in():
    return 'user' in session

def get_logged_in_user():
    return session.get('user', None)

def register_user(email, password):
    if email in users:
        return False
    users[email] = password
    return True

def authenticate_user(email, password):
    return email in users and users[email] == password
