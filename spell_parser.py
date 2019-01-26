import re
import sys
import requests
from urllib import request


api_url = "https://waven-api.synedh.fr/"
headers = {"Authorization": "Basic U3luZWRoOmVkYTI4Yjdm"}
elements = {
    "Air": "5be042b63fb2fa187ff753c0",
    "Eau": "5be042cf3fb2fa187ff753c2",
    "Feu": "5be042943fb2fa187ff753bf",
    "Terre": "5be042c43fb2fa187ff753c1"
}


def get(endpoint, id_data=''):
    response = requests.get(
        api_url + endpoint + '/' + id_data,
        headers = headers
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
        data = data
    )
    if response.status_code != 200:
        raise Exception("Incorrect status code : " + str(response.status_code))
        raise Exception("Incorrect status code : " + response.json())
        exit()
    return response.json()


def put(endpoint, id_data, data):
    response = requests.put(
        api_url + endpoint + '/' + id_data,
        headers = headers,
        data = data
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
        raise Exception("Incorrect status code : " + str(response.status_code))
        raise Exception("Incorrect status code : " + response.json())
        exit()
    return response.json()


def get_weapons(html):
    pass


def get_spells(html):
    regex = r"<li class=\"sort\">[\s\S]*?<img.*?src=\"(.*?)\?[\s\S]*?<h6>(.+)</h6>[\s\S]*?<h7>([0-9]+)PA \| (.*?)(\s\+([0-9]+) Réserve)?</h7>(.*?)</[\s\S]*?<\/li>"
    matches = re.finditer(regex, html, re.MULTILINE)
    csv_string = "name;iconUrl;description;cost;stockpile&resources\n"
    csv_string = ""
    for match in matches:
        csv_string += "%s;%s;%s;%s;%s;%s\n" % (match.group(2), match.group(1), match.group(7).replace('<br />', ' '), match.group(3), match.group(6) if match.group(6) else '', match.group(4))
    print(csv_string)


def get_page(url):
    html = ''.join([line.decode("utf8") for line in request.urlopen(url).readlines()])
    get_spells(html)


def post_every_spells():
    with open('spells.csv') as file:
        for line in file:
            line = line.split(';')
            resources_str = re.finditer(r'\+([0-9]+)\s([a-zA-Z]+)', line[-1])
            resources = []
            for resource_str in resources_str:
                resource = {"element": elements[resource_str.group(2)], "quantity": int(resource_str.group(1))}
                resources.append(post('resources', resource)['id'])
            spell = {
                "name": line[0],
                "iconUrl": line[1],
                "description": line[2].replace('\u200b', ''),
                "cost": line[3],
                "stockpile": line[4] if line[4] != '' else 0,
                "resources": resources,
            }
        posted_spell = post('spells', spell)
        spells = get('classes', '5bd816496baf1b6a02e8fec1')['spells']
        spells.append(posted_spell['id'])
        put('classes', {'spells': spells})



if __name__ == '__main__':
    # get_page(sys.argv[1])
    post_every_spells()

