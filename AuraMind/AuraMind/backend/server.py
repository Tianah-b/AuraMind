from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

client = OpenAI(api_key = "sk-proj-bXjdouMZLQ6oYimEFWLUT3BlbkFJJwz1YfdpGbnwopgjusFh")
model_name = "gpt-3.5-turbo"

users_db = {
    "admin": "1234"
}

@app.route('/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')
    if username in users_db and users_db[username] == password:
        return jsonify({"status": "success"})
    return jsonify({"status": "failure", "error": "Invalid username or password"}), 401

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message")
    system_message = {  #defining of model context
        "role": "system",
        "content": "You are a helpful assistant specializing in mental health. Only discuss topics related to mental health, therapy, stress management, and counseling. So, please try to recommend mental health resources based on the conversation context"
    }
 
    response = client.chat.completions.create(
        model=model_name, #model implementation
        messages=[system_message, {"role": "user", "content": user_message}]
    )

    chatbot_response = response.choices[0].message.content.strip() #response generation

    return jsonify({"response": chatbot_response})

# Run Flask server
if __name__ == '__main__':
    app.run(debug=True)