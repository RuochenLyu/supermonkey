import requests
import os
import json
import time

headers = {
    'authority': 'busi.supermonkey.com.cn',
    'pragma': 'no-cache',
    'cache-control': 'no-cache',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-user': '?1',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'sec-fetch-site': 'none',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
}


def load_json(file_name):
    try:
        with open(file_name, encoding='utf-8') as json_data:
            d = json.load(json_data)
            return d
    except Exception as e:
        return {}


def write_json(file_name, json_data):
    f = open(file_name, 'w')
    f.write('export default ' + json.dumps(json_data, ensure_ascii=False))
    f.close()


cities = [
    '深圳市',
    '广州市',
    '武汉市',
    '杭州市',
    '重庆市',
    '南京市',
    '上海市',
    '成都市',
    '北京市'
]

class_info = {}

for city in cities:
    params = (
        ('city', city),
    )
    response = requests.get(
        'https://busi.supermonkey.com.cn/wxClass/getClassSelectList4', headers=headers, params=params)
    data = response.json()['data']
    scheduleSmallMap = data['scheduleSmallMap']

    for scheduleList in data['main']['scheduleList']:
        for boxClassSchedulesList in scheduleList['boxClassSchedulesList']:
            for scheduleId in boxClassSchedulesList['classScheduleList']:
                scheduleId = str(scheduleId)
                scheduleData = requests.get(
                    'https://busi.supermonkey.com.cn/wxClass/getScheduleDetail?scheduleId=' + scheduleId + '&sk=' + str(scheduleSmallMap[scheduleId]['sk']), headers=headers).json()
                if 'data' in scheduleData and 'classinfoMap' in scheduleData['data']:
                    for classId, info in scheduleData['data']['classinfoMap'].items():
                        if str(classId) in class_info:
                            continue
                        class_info[str(classId)] = {
                            'className': info['className'],
                            'classIntroduce': info['classIntroduce'],
                            'video': info['video'],
                            'trainingEffect': info['trainingEffect'],
                            'suitablePeople': info['suitablePeople']
                        }
                        write_json('classinfo.js', class_info)
                        print(classId, 'done')
            print('sleeping...')
            time.sleep(5)
