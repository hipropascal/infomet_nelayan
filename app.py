from flask import Flask, render_template, jsonify, send_file, request
from src import misc, dl_nc, nc_mask
import shutil
import os
import json
import time
import threading

app = Flask(__name__, static_url_path="", static_folder="client/app")


# Dashboard utama
@app.route('/')
def menu_dashboard():
    return app.send_static_file('index.html')


# API list geojson
@app.route('/api/get_wilayah/', methods=['GET', 'POST'])
def get_group_area():
    wilayah_list = [w.replace('.json', '')
                    for w in misc.list_file('data/wilayah/geojson/')]
    return jsonify({'geojson': wilayah_list})


# API list area dalam geojson
@app.route('/api/get_area_geojson/<wilayah>', methods=['GET', 'POST'])
def get_area(wilayah):
    return send_file('data/wilayah/geojson/{}.json'.format(wilayah))


# API untuk update area
# POST : Geojson baru yang telah di edit pada antarmuka
@app.route('/api/post_wilayah/<wilayah>', methods=['GET', 'POST'])
def post_group_area(wilayah):
    if request.method == 'POST':
        f = request.files['geojson']
        tmp_file = 'data/_tmp/_tmp.json'
        f.save(tmp_file)
        target_file = 'data/wilayah/geojson/{}.json'.format(wilayah)
        os.remove(target_file)
        shutil.move(tmp_file, 'data/wilayah/geojson/{}.json'.format(wilayah))
        return jsonify({'messege': 'success'})


# API untuk hapus geojson
@app.route('/api/remove_wilayah/<wilayah>', methods=['GET', 'POST'])
def remove_group_area(wilayah):
    target_file = 'data/wilayah/geojson/{}.json'.format(wilayah)
    os.remove(target_file)


# Triger to pull Inawave
@app.route('/trigger/inawave/')
def triger_inawave():
    threading.Thread(target=inawave_handler).start()
    return jsonify({'messege': 'success'})


def inawave_handler():
    dl_nc.inawave()
    time.sleep(5)
    nc_mask.generate()
    nc_mask.getval()


# API list wilayah pelayaran
@app.route('/api/get_wilayah_pelayaran/', methods=['GET', 'POST'])
def get_wilayah_pelayaran():
    return send_file('data/wilayah_pelayaran.json')


@app.route('/api/post_capture/', methods=['GET', 'POST'])
def post_capture():
    if request.method == 'POST':
        f = request.files['img']
        f.save('data/capture/{}'.format(f.filename))
        return jsonify({'messege': 'success'})


if __name__ == '__main__':
    # inawave_handler()
    app.run(host='0.0.0.0', port=8182, debug=True)
