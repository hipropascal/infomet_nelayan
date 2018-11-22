from flask import Flask, render_template, jsonify, send_file, request

app = Flask(__name__, static_url_path="", static_folder="static")


@app.route('/')
def index():
    return app.send_static_file('index.html')


if __name__ == '__main__':
    #     inawave_handler()
    app.run(host='0.0.0.0', port=8000, debug=True)
