import os
import os.path
import json
import sqlite3
from auth_utils import pass_hash, get_logged_in_user

DB_FILE = os.path.join(os.path.dirname(__file__), "database.db")

def setup_db():
    if not os.path.isfile(DB_FILE):
        db = sqlite3.connect(DB_FILE)
        create_tables(db)

        db.commit()
        db.close()

def create_tables(db):
    try:
        c = db.cursor()
        c.execute('''
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT
                name TEXT NOT NULL COLLATE NOCASE
                email TEXT NOT NULL UNIQUE COLLATE NOCASE
                hash TEXT NOT NULL
                dob DATE NOT NULL
                profile JSON NOT NULL
            );
        ''')
        c.execute('''
            CREATE TABLE IF NOT EXISTS visualization (
                record_id INTEGER PRIMARY KEY AUTOINCREMENT,
                category TEXT NOT NULL,
                factor TEXT NOT NULL,
                factor_value REAL NOT NULL,
                generated_at DATE NOT NULL
            );
        ''')
        c.execute('''
            CREATE TABLE IF NOT EXISTS survey_responses (
                response_id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL,
                age INTEGER NOT NULL,
                gender TEXT NOT NULL,
                stress_level INTEGER NOT NULL CHECK(stress_level BETWEEN 1 AND 10),
                anxiety_score INTEGER NOT NULL,
                sleep_hours REAL NOT NULL,
                social_interaction INTEGER NOT NULL,
                date_submitted DATE NOT NULL,
                FOREIGN KEY (user_id) REFERENCES users(id)
            );
        ''')

        db.commit()
    except sqlite3.Error as e:
        print(f"create_table: {e}")
    finally:
        c.close()


def print_table(db_name, table_name):
    try:
        conn = sqlite3.connect(db_name)
        cursor = conn.cursor()

        cursor.execute(f"SELECT * FROM {table_name}")
        rows = cursor.fetchall()

        cursor.execute(f"PRAGMA table_info({table_name})")
        columns = [column[1] for column in cursor.fetchall()]
        print("|".join(f"{col:15}" for col in columns))
        print("-" * (16 * len(columns) -1))

        for row in rows:
            print("|".join(f"{str(item):15}" for item in row))

    except sqlite3.Error as e:
        print(f"An error occurred: {e}")
    finally:
        if conn:
            conn.close()

#-----------------------------------------------------------------------------------------

def create_user(name, password, email, dob, profile):
    db = sqlite3.connect(DB_FILE)
    try:
        c = db.cursor()
        c.execute("INSERT INTO users (name, email, hash, dob, profile) VALUES (?, ?, ?, ?, ?)", (name, pass_hash(password)[0], email, dob, profile))
        db.commit()
    except sqlite3.IntegrityError as e:
        print(name_first, name_last)
        print(f"create user: {e}")
    finally:
        c.close()
