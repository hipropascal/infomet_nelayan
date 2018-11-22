from flask import Flask, render_template, jsonify, send_file, request
from io import BytesIO
import picamera

app = Flask(__name__, static_url_path="", static_folder="static")


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/get_capture/')
def get_capture():
    temp = BytesIO()
    with picamera.PiCamera() as camera:
        camera.capture(temp, format='jpeg')
        temp.seek(0)
    return send_file(temp, mimetype='image/jpeg')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
