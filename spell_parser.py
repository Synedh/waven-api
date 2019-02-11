#-*- coding:utf-8 -*-

import re
import sys
import json
import requests
from urllib import request


api_url = "https://waven-api.synedh.fr/"
headers = {"Content-Type": "application/json", "Authorization": "Basic U3luZWRoOmVkYTI4Yjdm"}
elements = {
    "Air": "5be042b63fb2fa187ff753c0",
    "Eau": "5be042cf3fb2fa187ff753c2",
    "Feu": "5be042943fb2fa187ff753bf",
    "Terre": "5be042c43fb2fa187ff753c1"
}


def get(endpoint, id_data='', params = None):
    response = requests.get(
        api_url + endpoint + '/' + id_data,
        headers = headers,
        params = params
    )
    if response.status_code != 200:
        raise Exception("Incorrect status code : " + str(response.status_code) + '\n' + response.text)
        raise Exception("Incorrect status code : " + response.json())
        exit()
    return response.json()


def post(endpoint, data):
    response = requests.post(
        api_url + endpoint + '/',
        headers = headers,
        data = json.dumps(data)
    )
    if response.status_code != 200:
        print(response.json())
        raise Exception("Incorrect status code : %d for reason :\n%s" % (response.status_code, response))
        exit()
    return response.json()


def put(endpoint, id_data, data):
    response = requests.put(
        api_url + endpoint + '/' + id_data,
        headers = headers,
        data = json.dumps(data)
    )
    if response.status_code != 200:
        raise Exception("Incorrect status code : " + str(response.status_code))
        raise Exception("Incorrect status code : " + response.json())
        exit()
    return response.json()


def delete(endpoint, id_data):
    response = requests.delete(
        api_url + endpoint + '/' + id_data,
        headers = headers
    )
    if response.status_code != 200:
        # raise Exception("Incorrect status code : " + str(response.status_code))
        raise Exception("Incorrect status code : " + str(response.json()))
        exit()
    return response.json()


def get_weapons(html):
    pass


def get_spells(html):
    regex = r"<li class=\"sort\">[\s\S]*?<img.*?src=\"(.*?)\?[\s\S]*?<h6>(.+)<\/h6>[\s\S]*?<h7>(?:\s?([0-9]+)PA\s\|\s?)?((?:\s?\+\s?[0-9] (?:Air|Terre|Eau|Feu))*)(?:\s?\|?\s?\+\s?([0-9]+) Réserve)?(?:.*)?<\/h7>(.*?)<\/[\s\S]*?<\/li>"
    matches = re.finditer(regex, html.replace('&rsquo;', '\''), re.MULTILINE)
    csv_string = "name;iconUrl;description;cost;stockpile;resources\n"
    csv_string = ""
    for match in matches:
        csv_string += ("%s;%s;%s;%s;%s;%s\n" 
            % (
                match.group(2),
                match.group(1),
                match.group(6).replace('<br />', ' '), 
                match.group(3) if match.group(3) else 0,
                match.group(5) if match.group(5) else 0,
                match.group(4) if match.group(4) else ''
            )
        )
    return csv_string


def get_page(url):
    html = ''.join([line.decode("utf8") for line in request.urlopen(url).readlines()])
    return get_spells(html)


def post_spells(filename=None, spells_csv=None, class_id=None):
    posted_spells = []
    if filename:
        with open(filename) as file:
            for line in file:
                line = line.split(';')
                if len(line) > 2:
                    resources_str = re.finditer(r'\+([0-9]+)\s([a-zA-Z]+)', line[-1])
                    resources = []
                    for resource_str in resources_str:
                        resource = {"element": elements[resource_str.group(2)], "quantity": int(resource_str.group(1))}
                        resources.append(resource)
                    spell = {
                        "name": line[0],
                        "iconUrl": line[1],
                        "description": line[2].replace('\u200b', ''),
                        "cost": line[3],
                        "stockpile": line[4],
                        "resources": resources,
                    }
                    posted_spell = post('spells', spell)
                    print('Successfully added spell ' + posted_spell['name'] + " with id " + posted_spell['_id'])
                    posted_spells.append(posted_spell['id'])
    elif spells_csv:
        for line in spells_csv.split('\n'):
            line = line.split(';')
            if len(line) > 2:
                resources_str = re.finditer(r'\+([0-9]+)\s([a-zA-Z]+)', line[-1])
                resources = []
                for resource_str in resources_str:
                    resource = {"element": elements[resource_str.group(2)], "quantity": int(resource_str.group(1))}
                    resources.append(resource)
                spell = {
                    "name": line[0],
                    "iconUrl": line[1],
                    "description": line[2].replace('\u200b', ''),
                    "cost": line[3],
                    "stockpile": line[4],
                    "resources": resources,
                }
                posted_spell = post('spells', spell)
                print('Successfully added spell ' + posted_spell['name'] + " with id " + posted_spell['_id'])
                posted_spells.append(posted_spell['_id'])
    if class_id:
        spells = get('classes', class_id)['spells']
        spells += posted_spells
        put('classes', class_id, {'spells': spells})


def delete_all_spells(class_id=None):
    if class_id:
        for spell in get('classes', class_id)['spells']:
            print(delete('spells', spell)['message'])
        print(put('classes', class_id, {'spells': []}))
    else:
        for spell in get('spells'):
            print(delete('spells', spell['_id'])['message'])
        for race in get('classes'):
            print(put('classes', race['_id'], {'spells': []}))
        for weaponType in get('WeaponTypes'):
            print(put('WeaponTypes', weaponType['_id'], {'spells': []}))



if __name__ == '__main__':
    # delete_all_spells()
    # post_spells(spells_csv = get_page('https://blog.waven-game.com/fr/coeur-de-iop'), class_id = '5bd8169e6baf1b6a02e8fec2')
    # post_spells(spells_csv = get_page('https://blog.waven-game.com/fr/sablier-de-xelor'), class_id = '5bd816496baf1b6a02e8fec1')
    # post_spells(spells_csv = get_page('https://blog.waven-game.com/fr/ombre-de-sram'), class_id = '5c616d4ad6d2e31be49914cc')
