
#-*- coding:utf-8 -*-

import re
import sys
import json
import requests
from urllib import request


api_url = 'https://waven-api.synedh.fr/'
headers = {'Content-Type': 'application/json', 'Authorization': 'Basic U3luZWRoOmVkYTI4Yjdm'}
elements = {
    'Air': '5be042b63fb2fa187ff753c0',
    'Eau': '5be042cf3fb2fa187ff753c2',
    'Feu': '5be042943fb2fa187ff753bf',
    'Terre': '5be042c43fb2fa187ff753c1'
}
classes = {
    'iop': '5bd8169e6baf1b6a02e8fec2',
    'xel': '5bd816496baf1b6a02e8fec1',
    'sram': '5c616d4ad6d2e31be49914cc',
    'osa': '5c66cd21967304335696a843',
    'eni': '5c70381762d9ae30adc37892'
}


def get(endpoint, id_data='', params = None):
    response = requests.get(
        api_url + endpoint + '/' + id_data,
        headers = headers,
        params = params
    )
    if response.status_code != 200:
        raise Exception('Incorrect status code : ' + str(response.status_code) + '\n' + response.text)
        # raise Exception('Incorrect status code : ' + response.json())
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
        raise Exception('Incorrect status code : %d for reason :\n%s' % (response.status_code, response))
        exit()
    return response.json()


def put(endpoint, id_data, data):
    response = requests.put(
        api_url + endpoint + '/' + id_data,
        headers = headers,
        data = json.dumps(data)
    )
    if response.status_code != 200:
        # raise Exception('Incorrect status code : ' + str(response.status_code))
        raise Exception('Incorrect status code : ' + response.json())
        exit()
    return response.json()


def delete(endpoint, id_data):
    response = requests.delete(
        api_url + endpoint + '/' + id_data,
        headers = headers
    )
    if response.status_code != 200:
        # raise Exception('Incorrect status code : ' + str(response.status_code))
        raise Exception('Incorrect status code : ' + str(response.json()))
        exit()
    return response.json()


def get_page(url):
    return ''.join([line.decode('utf-8') for line in request.urlopen(url).readlines()])


def get_weapons(html):
    matches = re.finditer(
        r'<li class=\"vignettehero\"?\">(?:[\s\S]*?)src=\"(.*)\?w(?:[\s\S]*?)<p>\s?(.*?)<\/p>(?:[\s\S]*?)<h6.*?>(.*)<\/h6>(?:[\s\S]*?)<h7>(?:\s?([0-9]+)PA\s?\|?\s?)?((?:\s?\+\s?[0-9]\s?(?:Air|Terre|Eau|Feu))+)?\s?\|?\s?(?:\s?\|?\s?\+\s?([0-9]+)\s?R.serve\s?\|?\s?)?(?:([0-9]+)\s?PO\s?\|?\s?)?(Ligne)?(?:.*)?<\/h7>(?:[\s\S]*?)src=\"(.*)\?w(?:[\s\S]*?)<div.*?>(.*)<\/div>(?:[\s\S]*?)<\/li>', 
        html.replace('&rsquo;', '\'').replace('<br />', ' ').replace('&nbsp;', '').replace('​', ''), 
        re.MULTILINE
    )
    weapons = []
    for match in matches:
        resources = []
        if match.group(5):
            resources_str = re.finditer(r'\+([0-9]+)\s([a-zA-Z]+)', match.group(5))
            for resource_str in resources_str:
                resource = {'element': elements[resource_str.group(2)], 'quantity': int(resource_str.group(1))}
                resources.append(resource)
        weapons.append({
            'name': '',
            'imageUrl': match.group(1),
            'passive': {
                'description': match.group(2)
            },
            'spell': {
                'name': match.group(3),
                'iconUrl': match.group(9),
                'description': match.group(10),
                'cost': int(match.group(4)) if match.group(4) else 0,
                'stockpile': int(match.group(6)) if match.group(6) else 0,
                'resources': resources,
                'range': int(match.group(7)) if match.group(7) else None,
                'line': True if match.group(8) else False
            }
        })
    return weapons


def get_spells(html):
    matches = re.finditer(
        r'<li class=\"sort\">[\s\S]*?<img.*?src=\"(.*?)\?[\s\S]*?<h6>(.+)<\/h6>[\s\S]*?<h7>(?:\s?([0-9]+)PA\s?\|?\s?)?((?:\s?\+\s?[0-9]\s?(?:Air|Terre|Eau|Feu))+)?\s?\|?\s?(?:\s?\|?\s?\+\s?([0-9]+)\s?R.serve\s?\|?\s?)?(?:([0-9]+)\s?PO\s?\|?\s?)?(Ligne)?(?:.*)?<\/h7>(.*?)<\/[\s\S]*?<\/li>',
        html.replace('&rsquo;', '\'').replace('​', ''),
        re.MULTILINE
    )
    spells = []
    for match in matches:
        resources = []
        if match.group(4):
            resources_str = re.finditer(r'\+([0-9]+)\s([a-zA-Z]+)', match.group(4))
            for resource_str in resources_str:
                resource = {'element': elements[resource_str.group(2)], 'quantity': int(resource_str.group(1))}
                resources.append(resource)
        spells.append({
            'name': match.group(2),
            'iconUrl': match.group(1),
            'description': match.group(8).replace('<br />', ' '), 
            'cost': int(match.group(3)) if match.group(3) else 0,
            'stockpile': int(match.group(5)) if match.group(5) else 0,
            'resources': resources,
            'range': int(match.group(6)) if match.group(6) else None,
            'line': True if match.group(7) else False
        })
    return spells


def post_weapons(weapons, class_id=None):
    posted_weapons = []
    for weapon in weapons:
        passive = post('passives', weapon['passive'])
        spell = post('spells', weapon['spell'])
        weaponSkin = post('weaponSkins', {
            'name': '',
            'imageUrl': weapon['imageUrl'],
            'iconUrl': '',
            'description': ''
        })
        posted_weapon = post('weapons', {
            'name': '',
            'iconUrl': '',
            'description': '',
            'imageUrl': weapon['imageUrl'],
            'passives': [passive['_id']],
            'spells': [spell['_id']],
            'weaponSkins': [weaponSkin['_id']],
            'life': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            'damage': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            'movement': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        })
        print('Successfully added weapon with id ' + posted_weapon['_id'])
        posted_weapons.append(posted_weapon['_id'])
    if class_id:
        weapons = get('classes', class_id)['weapons']
        weapons += posted_weapons
        put('classes', class_id, {'weapons': weapons})


def post_spells(spells, class_id=None):
    posted_spells = []
    for spell in spells:
        posted_spell = post('spells', spell)
        print('Successfully added spell ' + posted_spell['name'] + ' with id ' + posted_spell['_id'])
        posted_spells.append(posted_spell['_id'])
    if class_id:
        spells = get('classes', class_id)['spells']
        spells += posted_spells
        put('classes', class_id, {'spells': spells})


def update_weapons(weapons):
    for weapon in weapons:
        try:
            weapon_id = get('weapons', params={'name': weapon['name']})[0]['_id']
            put('weapons', weapon_id, data = weapon)
            print("weapon " + weapon['name'] + "successfully updated.")
        except IndexError as e:
            print('Could not find weapon ' + weapon['name'])


def update_spells(spells):
    for spell in spells:
        try:
            spell_id = get('spells', params={'name': spell['name']})[0]['_id']
            updated_spell = put('spells', spell_id, data = spell)
            print("Spell %s with id %s successfully updated." % (spell['name'], updated_spell['_id']))
        except IndexError as e:
            print('Could not find spell ' + spell['name'])


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


def delete_all_weapons():
    for weapon in get('weapons'):
        print(delete('weapons', weapon['_id'])['message'])
    for passive in get('passives'):
        print(delete('passives', passive['_id'])['message'])


if __name__ == '__main__':
    # delete_all_spells()
    # print(json.dumps(get_weapons(get_page('https://blog.waven-game.com/fr/fouet-dosamodas')), indent=4))
    post_spells(get_spells(get_page('https://blog.waven-game.com/fr/sablier-de-xelor')), classes['xel'])
    post_spells(get_spells(get_page('https://blog.waven-game.com/fr/coeur-de-iop')), classes['iop'])
    post_spells(get_spells(get_page('https://blog.waven-game.com/fr//ombre-de-sram')), classes['sram'])
    post_spells(get_spells(get_page('https://blog.waven-game.com/fr/fouet-dosamodas')), classes['osa'])
    post_spells(get_spells(get_page('https://blog.waven-game.com/fr/mains-deniripsa')), classes['eni'])
    # post_weapons(get_weapons(get_page('https://blog.waven-game.com/fr/mains-deniripsa')), classes['eni'])
    # post_spells(get_spells(get_page('https://blog.waven-game.com/fr/mains-deniripsa')), classes['eni'])
    # update_spells(get_spells(get_page('https://blog.waven-game.com/fr/sablier-de-xelor')))
    # delete_all_spells()
