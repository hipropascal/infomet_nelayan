from flask import Flask, render_template, jsonify, send_file,request
from src import misc
import shutil
import os
import json

app = Flask(__name__, static_url_path="", static_folder="client/app")

# Dashboard utama
@app.route('/')
def menu_dashboard():
    return render_template('index.html')


# API list group area
@app.route('/api/get_group_area/', methods=['GET', 'POST'])
def get_group_area():
    group_area_list = [w.replace('.json','') for w in misc.list_file('data/group_area/')]
    return jsonify({'group_area':group_area_list})


# API list area dalam group area
@app.route('/api/get_area_geojson/<group_area>', methods=['GET', 'POST'])
def get_area(group_area):
    return send_file('data/group_area/{}.json'.format(group_area))


# API untuk update area
# POST : Geojson baru yang telah di edit pada antarmuka
@app.route('/api/post_group_area/<group_area>', methods=['GET', 'POST'])
def post_group_area(group_area):
    if request.method == 'POST':
        f = request.files['geojson']
        tmp_file = 'data/tmp/tmp.json'
        f.save(tmp_file)
        target_file = 'data/group_area/{}.json'.format(group_area)
        os.remove(target_file)
        shutil.move(tmp_file,'data/group_area/{}.json'.format(group_area))
        return jsonify({'messege':'success'})


# API untuk hapus group area
@app.route('/api/remove_group_area/<group_area>', methods=['GET', 'POST'])
def remove_group_area(group_area):
    target_file = 'data/group_area/{}.json'.format(group_area)
    os.remove(target_file)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8182, debug=True)
