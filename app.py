from flask import Flask, render_template, jsonify
import json
from datetime import datetime

app = Flask(__name__)

def load_puzzles():
    with open("puzzles.json") as f:
        return json.load(f)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/puzzle")
def get_puzzle():
    puzzles = load_puzzles()

    today = datetime.now().strftime("%Y-%m-%d")

    for puzzle in puzzles:
        if puzzle["date"] == today:
            return jsonify(puzzle)

    # fallback (for testing)
    return jsonify(puzzles[0])

if __name__ == "__main__":
    app.run(debug=True)