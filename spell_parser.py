import re
import sys
from urllib import request


def get_weapons(html):
    pass


def get_spells(html):
    regex = r"<li class=\"sort\">[\s\S]*?<img.*?src=\"(.*?)\"[\s\S]*?<h6>(.+)</h6>[\s\S]*?<h7>([0-9]+)PA \| (.*?)(\s\+([0-9]+) Réserve)?</h7>(.*?)</[\s\S]*?<\/li>"
    matches = re.finditer(regex, html, re.MULTILINE)
    csv_string = "name;iconUrl;description;cost;stockpile&resources\n"
    for match in matches:
        csv_string += "%s;%s,%s;%s;%s;%s\n" % (match.group(2), match.group(1), match.group(7), match.group(3), match.group(6) if match.group(6) else '', match.group(4))
    print(csv_string)


def get_page(url):
    html = ''.join([line.decode("utf8") for line in request.urlopen(url).readlines()])
    get_spells(html)



if __name__ == '__main__':
    get_page(sys.argv[1])