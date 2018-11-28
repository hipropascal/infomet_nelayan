import requests
import picamera
import time
import io

url = 'http://10.30.40.50:8182/api/post_capture/'
temp = io.BytesIO()

while True:
    with picamera.PiCamera() as camera:
        camera.capture(temp, format='jpeg')
        temp.seek(0)
    r = requests.post(
        url, files={'img': ('pi_1.jpeg', temp.getvalue(), 'image/jpeg')})
    print('status: ', r)
    time.sleep(0.5)
