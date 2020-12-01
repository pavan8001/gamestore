import requests
from bs4 import BeautifulSoup as Soup
import os
import json
import shutil

def isForbidden(link: str):
    forbid = ['/share/', '/news/externalpost/', '/account/emailoptout/?*token=', '/login/?*guestpasskey=', '/join/?*redir=', '/account/ackgift/', '/email/', '/widget/']
    for sublink in forbid:
        if sublink in link:
            return 1
    return 0

def blockCategory( Block_soup, query):
    categories = {}
    for block in Block_soup.findAll(query['element'], {'class': query['class']}):
        for main in block.findChildren('div'):
            if main.text.strip() == query['text']:
                if query['text'] == 'Browse Categories':
                    element = main.findNext('div').findAll('a')
                else:
                    element = block.findAll('a')
                for link in element:
                    categories[link.text.strip()] = {'link': link.get('href')}
                break
    return {query['text']: categories}

def preview( cat_link, category, cat_code, min=0, max=10):
        preView = {}
        if isForbidden(cat_link):
            return {}
        Preview = requests.get(cat_link)
        soup_preview = Soup(Preview.text, "html.parser")
        rows = soup_preview.findAll('a', {'class': 'tab_item'})
        if rows==[]:
            rows = soup_preview.findAll('a', {'class': 'search_result_row'})
        for i,row in enumerate(rows):
            if i>=max:
                break
            if i>=min:
                preView.update({cat_code*1000+i: previewDetails(row, category)})
        return preView

def previewDetails(preSoup, category):
        details = {}

        details['link'] = preSoup.get('href')
        children = [x for x in preSoup if x != '\n' and x != ' ' and x != '']

        details['imgLink'] = children[0].find('img').get('src')
        if category=='Upcoming':
            details['date'] = children[1].text
        elif category=='Top Sellers':
            det = children[1].findChildren('div')
            details['name'] = det[0].span.text.strip()
            details['platforms'] = det[0].p.span.get('class')[1].strip()
            details['price'] = int(det[3].get('data-price-final').strip())/100
            return details
        else:
            if 'empty' in children[1].get('class'):
                details['price'] = ''
            else:
                details['price'] = int(children[1].get("data-price-final").strip())/100
        tab_item_content = children[2].findNext('div')
        details['name'] = tab_item_content.text.strip()
        platfrom_details = tab_item_content.findNext('div')
        details['platforms'] = [x.get('class')[1].strip() for x in platfrom_details.findAll('span', {'class': 'platform_img'})]
        tags_details = platfrom_details.findNext('div')
        details['tags'] = [x.text.replace(',', '').strip() for x in tags_details.findAll('span', {'class': 'top_tag'})]
        return details

def getPreviewDetails( cat_list, code):
        Category = {}
        for i, cate_gory in enumerate(cat_list.keys()):
            Category.update({cate_gory: preview(cat_list[cate_gory]['link'], cate_gory, int(str(code)+str(i+1)))})
        return Category

def getBlockCategory( html_soup, query):
    return blockCategory(html_soup, query)

def viewDetails(Link: str):
    view = {}
    if isForbidden(Link):
        return {}
    View = requests.get(Link)
    overview = Soup(View.text, 'html.parser')
    video_details = overview.find('div', {'class': 'highlight_player_item'})
    view['video_link'] = video_details.get('data-mp4-source')
    view['poster'] = video_details.get('data-poster')
    view['thumbnails'] = [thumb.img.get('src') for thumb in overview.findAll('div', {'class': 'highlight_strip_item'})]
    view['about'] = str(overview.find('div', {'id': 'game_area_description'}).encode('utf-8'), 'utf-8')
    view['system_req'] = str(overview.find('div', {'class': 'sys_req'}).encode('utf-8'), 'utf-8')
    return view

def Downloader(image, file_name):
    response = requests.get(image, stream=True)
    file = open(file_name, 'wb')

    response.raw.decode_content = True
    shutil.copyfileobj(response.raw, file)
    file.close()
    del response

if __name__=='__main__':

    base_url = "https://store.steampowered.com/"
    Steam = requests.get(base_url)
    Steam_soup = Soup(Steam.text, 'html.parser')
    top_cateories = ['Browse Categories', 'Browse by genre']

    q1 = {'element': 'div', 'class': 'home_page_gutter_block', 'text': top_cateories[0]}
    browse_cat = getBlockCategory( Steam_soup, q1 )
    q2 = {'element': 'div', 'class': 'home_page_gutter_block', 'text': top_cateories[1]}
    browse_genre = getBlockCategory( Steam_soup, q2 )
    preview_details = {top_cateories[0]: getPreviewDetails(browse_cat[top_cateories[0]], 1)}
    preview_details.update({top_cateories[1]: getPreviewDetails(browse_genre[top_cateories[1]], 2)})

    file1 = open("previewDetails.json", 'w')
    json.dump(preview_details, file1, indent=3)
    file1.close()
    details_json = {}
    for top_category in top_cateories:
        for category in preview_details[top_category]:
            for id in preview_details[top_category][category]:
                add_det = viewDetails(preview_details[top_category][category][id]['link'])
                add_det['name'] = preview_details[top_category][category][id]['name']
                add_det['platforms'] = preview_details[top_category][category][id]['platforms']
                try:
                    add_det['price'] = preview_details[top_category][category][id]['price']
                except:
                    add_det['price'] = 'NA'
                details_json.update({id: add_det})

                '''try:
                    Downloader(preview_details[top_category][category][id]['imgLink'], "preview/{}.jpg".format(id))
                except:
                    Downloader(details_json[id]['thumbnails'][0], "preview/{}.jpg".format(id))
                try:
                    Downloader(details_json[id]['poster'], "game_thumbnails/{}_poster.jpg".format(id))
                except:
                    Downloader(details_json[id]['thumbnails'][0], "game_thumbnails/{}_poster.jpg".format(id))
                dec = 0
                for i, link in enumerate(details_json[id]['thumbnails']):
                    try:
                        Downloader(link, "game_thumbnails/{}_thumbnail{}.jpg".format(id, i-dec+1))
                    except:
                        dec += 1'''

    file = open("FullDetails.json", 'w')
    json.dump(details_json, file, indent=3)
    file.close()
