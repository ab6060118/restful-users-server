enum CONDITION_TYPE {
  INCLUDE = 1,
    EXCLUDE =2,
}

interface IUser {
  id:number
  name:string
}

interface IDate {
  start:string
  end:string
}

interface IField {
  condition: CONDITION_TYPE
  value: string[]
}

interface IFilter {
  id:number
  severity:number
  name:string
  date:IDate
  time:number[][]
  users:IField
  ip:IField
  app:IField
  category:IField
  content:IField
}

export const users:IUser[] = [
  {id: 1, name: 'One'},
  {id: 2, name: 'Two'},
  {id: 3, name: 'Three'},
  {id: 4, name: 'Four'},
  {id: 5, name: 'Five'},
  {id: 6, name: 'Six'},
  {id: 7, name: 'Seven'},
  {id: 8, name: 'Eight'},
]

export const posts = [
  {userId: 1, id: 1,  name: 'O', content: '1' },
  {userId: 1, id: 2,  name: 'T', content: '2' },
  {userId: 1, id: 3,  name: 'T', content: '3' },
  {userId: 1, id: 4,  name: 'O', content: '4' },
  {userId: 1, id: 5,  name: 'T', content: '5' },
  {userId: 2, id: 6,  name: 'T', content: '6' },
  {userId: 2, id: 7,  name: 'O', content: '7' },
  {userId: 2, id: 8,  name: 'T', content: '8' },
  {userId: 2, id: 9,  name: 'T', content: '9' },
  {userId: 3, id: 10, name: 'O', content: '10' },
  {userId: 1, id: 11, name: 'T', content: '11' },
  {userId: 1, id: 12, name: 'T', content: '12' },
]

export const filters:IFilter[] = [
  {
    id: 1,
    severity:1,
    name: 'filter1',
    date: {
      start: '2018-10-10',
      end: '2018-10-10'
    },
    time: [[0,0],[23,59]],
    users: {
      condition: 1,
      value: ['admin', 'test', 'user']
    },
    ip: {
      condition: 1,
      value: ['192.168.0.100']
    },
    app: { condition: 1, value: ['AppCenter'] },
    category: { condition: 2, value: ['c001'] },
    content: { condition: 1, value: ['a', '2'] }
  },
  {
    id: 2,
    severity: 2,
    name: 'filter2',
    date: {
      start: '2018-10-10',
      end: '2018-10-10'
    },
    time: [[0,0],[23,59]],
    users: {
      condition: 1,
      value: ['admin', 'test', 'user']
    },
    ip: {
      condition: 1,
      value: ['192.168.0.100']
    },
    app: { condition: 1, value: ['AppCenter'] },
    category: { condition: 2, value: ['c001'] },
    content: { condition: 1, value: ['a', '2'] }
  }
]

export const localSystemEventLog = [
  {
    "id": "65",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "15:50:17",
    "user": "System",
    "comp": "localhost",
    "desc": "[MalwareRemover] Scan completed.",
    "msgid": "0",
    "timet": 1528185017,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "64",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "15:49:38",
    "user": "System",
    "comp": "localhost",
    "desc": "[Notification Center] Created a Alert Notifications rule: Rule - 1.",
    "msgid": "9",
    "timet": 1528184978,
    "app_name": "Notification Center",
    "app_id": "A008",
    "category": "Notification Rules",
    "message_id": "---",
    "category_id": "C003"

  }, {
    "id": "63",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "15:49:19",
    "user": "System",
    "comp": "localhost",
    "desc": "[Notification Center] Created a Event Notifications rule: Rule - 1.",
    "msgid": "9",
    "timet": 1528184959,
    "app_name": "Notification Center",
    "app_id": "A008",
    "category": "Notification Rules",
    "message_id": "---",
    "category_id": "C003"

  }, {
    "id": "62",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "15:49:15",
    "user": "System",
    "comp": "localhost",
    "desc": "[Notification Center] Added Instant messenger: \"嘉宏 高\".",
    "msgid": "5",
    "timet": 1528184955,
    "app_name": "Notification Center",
    "app_id": "A008",
    "category": "Service Account and Device Pairing",
    "message_id": "---",
    "category_id": "C001"

  }, {
    "id": "61",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "15:48:32",
    "user": "System",
    "comp": "localhost",
    "desc": "[myQNAPcloud] CloudLink service for mobile and PC applications is ready.",
    "msgid": "0",
    "timet": 1528184912,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "60",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "15:48:30",
    "user": "System",
    "comp": "localhost",
    "desc": "[App Center] CloudLink enabled.",
    "msgid": "0",
    "timet": 1528184910,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "59",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "15:48:23",
    "user": "System",
    "comp": "localhost",
    "desc": "[myQNAPcloud] CloudLink service for myQNAPcloud web site is ready.",
    "msgid": "0",
    "timet": 1528184903,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "58",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "15:48:10",
    "user": "System",
    "comp": "localhost",
    "desc": "[App Center] CloudLink 2.1.4 has been installed in /share/CACHEDEV1_DATA/.qpkg/CloudLink successfully.",
    "msgid": "0",
    "timet": 1528184890,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "57",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "15:47:59",
    "user": "System",
    "comp": "localhost",
    "desc": "[myQNAPcloud] DDNS updated WAN IP address to \"122.146.88.200\".",
    "msgid": "15",
    "timet": 1528184879,
    "app_name": "myQNAPcloud",
    "app_id": "A041",
    "category": "My DDNS",
    "message_id": "---",
    "category_id": "C002"

  }, {
    "id": "56",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "15:47:50",
    "user": "System",
    "comp": "localhost",
    "desc": "[App Center] Installed Qsync Central 3.0.4 in /share/CACHEDEV1_DATA/.qpkg/QsyncServer.",
    "msgid": "46",
    "timet": 1528184870,
    "app_name": "App Center",
    "app_id": "A039",
    "category": "App Installation",
    "message_id": "---",
    "category_id": "C001"

  }, {
    "id": "55",
    "ip": "172.17.20.96",
    "type": "0",
    "date": "2018/06/05",
    "time": "15:47:49",
    "user": "admin",
    "comp": "localhost",
    "desc": "[myQNAPcloud] Changed device access control mode to \"public\".",
    "msgid": "7",
    "timet": 1528184869,
    "app_name": "myQNAPcloud",
    "app_id": "A041",
    "category": "myQNAPcloud Device",
    "message_id": "---",
    "category_id": "C006"

  }, {
    "id": "54",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "15:47:49",
    "user": "System",
    "comp": "localhost",
    "desc": "[App Center] Enabled Qsync Central.",
    "msgid": "22",
    "timet": 1528184869,
    "app_name": "App Center",
    "app_id": "A039",
    "category": "App Installation",
    "message_id": "---",
    "category_id": "C001"

  }, {
    "id": "53",
    "ip": "172.17.20.96",
    "type": "0",
    "date": "2018/06/05",
    "time": "15:47:29",
    "user": "admin",
    "comp": "localhost",
    "desc": "[myQNAPcloud] Enabled DDNS.",
    "msgid": "11",
    "timet": 1528184849,
    "app_name": "myQNAPcloud",
    "app_id": "A041",
    "category": "My DDNS",
    "message_id": "---",
    "category_id": "C002"

  }, {
    "id": "52",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "15:46:26",
    "user": "System",
    "comp": "localhost",
    "desc": "[MalwareRemover] Started scanning.",
    "msgid": "0",
    "timet": 1528184786,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "51",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "15:45:19",
    "user": "System",
    "comp": "localhost",
    "desc": "[Media Library] Media Library Server started.",
    "msgid": "0",
    "timet": 1528184719,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "50",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "15:42:38",
    "user": "System",
    "comp": "localhost",
    "desc": "[Network & Virtual Switch] Initialized Network & Virtual Switch.",
    "msgid": "---",
    "timet": 1528184558,
    "app_name": "Network & Virtual Switch",
    "app_id": "A202",
    "category": "reserved",
    "message_id": "0153",
    "category_id": "reserved"

  }, {
    "id": "49",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "15:42:30",
    "user": "System",
    "comp": "localhost",
    "desc": "System started.",
    "msgid": "0",
    "timet": 1528184550,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "48",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "15:36:51",
    "user": "System",
    "comp": "localhost",
    "desc": "[Network & Virtual Switch] Stopped Network & Virtual Switch.",
    "msgid": "---",
    "timet": 1528184211,
    "app_name": "Network & Virtual Switch",
    "app_id": "A202",
    "category": "reserved",
    "message_id": "0155",
    "category_id": "reserved"

  }, {
    "id": "47",
    "ip": "10.64.201.101",
    "type": "0",
    "date": "2018/06/05",
    "time": "15:36:30",
    "user": "admin",
    "comp": "---",
    "desc": "[Power] Restarting NAS.",
    "msgid": "1",
    "timet": 1528184190,
    "app_name": "Power",
    "app_id": "A007",
    "category": "NAS Power Status",
    "message_id": "---",
    "category_id": "C001"

  }, {
    "id": "46",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "15:35:21",
    "user": "System",
    "comp": "localhost",
    "desc": "[Firmware Update] Updated system from version 4.3.5.0595(20180604) to 4.3.5.0596(20180605).",
    "msgid": "28",
    "timet": 1528184121,
    "app_name": "Firmware Update",
    "app_id": "A009",
    "category": "Firmware Update",
    "message_id": "---",
    "category_id": "C001"

  }, {
    "id": "45",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "15:32:26",
    "user": "System",
    "comp": "localhost",
    "desc": "[Firmware Update] Started updating firmware.",
    "msgid": "30",
    "timet": 1528183946,
    "app_name": "Firmware Update",
    "app_id": "A009",
    "category": "Firmware Update",
    "message_id": "---",
    "category_id": "C001"

  }, {
    "id": "44",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "11:33:35",
    "user": "System",
    "comp": "localhost",
    "desc": "[MalwareRemover] Scan completed.",
    "msgid": "0",
    "timet": 1528169615,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "43",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "11:30:31",
    "user": "System",
    "comp": "localhost",
    "desc": "[App Center] Malware Remover enabled.",
    "msgid": "0",
    "timet": 1528169431,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "42",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "11:30:31",
    "user": "System",
    "comp": "localhost",
    "desc": "[App Center] Malware Remover 3.0.0 has been installed in /share/CACHEDEV1_DATA/.qpkg/MalwareRemover successfully.",
    "msgid": "0",
    "timet": 1528169431,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "41",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "11:30:26",
    "user": "System",
    "comp": "localhost",
    "desc": "[MalwareRemover] Started scanning.",
    "msgid": "0",
    "timet": 1528169426,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "40",
    "ip": "10.64.201.101",
    "type": "0",
    "date": "2018/06/05",
    "time": "11:29:55",
    "user": "admin",
    "comp": "localhost",
    "desc": "[App Center] Removed Malware Remover.",
    "msgid": "21",
    "timet": 1528169395,
    "app_name": "App Center",
    "app_id": "A039",
    "category": "App Installation",
    "message_id": "---",
    "category_id": "C001"

  }, {
    "id": "39",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "11:19:46",
    "user": "System",
    "comp": "localhost",
    "desc": "[MalwareRemover] Scan completed.",
    "msgid": "0",
    "timet": 1528168786,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "38",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "11:16:35",
    "user": "System",
    "comp": "localhost",
    "desc": "[App Center] Malware Remover enabled.",
    "msgid": "0",
    "timet": 1528168595,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "37",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "11:16:35",
    "user": "System",
    "comp": "localhost",
    "desc": "[App Center] Malware Remover 3.0.0 has been installed in /share/CACHEDEV1_DATA/.qpkg/MalwareRemover successfully.",
    "msgid": "0",
    "timet": 1528168595,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "36",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "11:16:29",
    "user": "System",
    "comp": "localhost",
    "desc": "[MalwareRemover] Started scanning.",
    "msgid": "0",
    "timet": 1528168589,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "35",
    "ip": "10.64.201.101",
    "type": "0",
    "date": "2018/06/05",
    "time": "11:15:25",
    "user": "admin",
    "comp": "localhost",
    "desc": "[App Center] Removed Malware Remover.",
    "msgid": "21",
    "timet": 1528168525,
    "app_name": "App Center",
    "app_id": "A039",
    "category": "App Installation",
    "message_id": "---",
    "category_id": "C001"

  }, {
    "id": "34",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "11:13:56",
    "user": "System",
    "comp": "localhost",
    "desc": "[MalwareRemover] Scan completed.",
    "msgid": "0",
    "timet": 1528168436,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "33",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "11:10:42",
    "user": "System",
    "comp": "localhost",
    "desc": "[App Center] Malware Remover enabled.",
    "msgid": "0",
    "timet": 1528168242,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "32",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "11:10:41",
    "user": "System",
    "comp": "localhost",
    "desc": "[App Center] Malware Remover 3.0.0 has been installed in /share/CACHEDEV1_DATA/.qpkg/MalwareRemover successfully.",
    "msgid": "0",
    "timet": 1528168241,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "31",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "11:10:36",
    "user": "System",
    "comp": "localhost",
    "desc": "[MalwareRemover] Started scanning.",
    "msgid": "0",
    "timet": 1528168236,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "30",
    "ip": "10.64.201.101",
    "type": "0",
    "date": "2018/06/05",
    "time": "11:08:45",
    "user": "admin",
    "comp": "localhost",
    "desc": "[App Center] Removed Malware Remover.",
    "msgid": "21",
    "timet": 1528168125,
    "app_name": "App Center",
    "app_id": "A039",
    "category": "App Installation",
    "message_id": "---",
    "category_id": "C001"

  }, {
    "id": "29",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "11:03:52",
    "user": "System",
    "comp": "localhost",
    "desc": "[MalwareRemover] Scan completed.",
    "msgid": "0",
    "timet": 1528167832,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "28",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "11:00:52",
    "user": "System",
    "comp": "localhost",
    "desc": "[App Center] Malware Remover enabled.",
    "msgid": "0",
    "timet": 1528167652,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "27",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "11:00:52",
    "user": "System",
    "comp": "localhost",
    "desc": "[App Center] Malware Remover 3.0.0 has been installed in /share/CACHEDEV1_DATA/.qpkg/MalwareRemover successfully.",
    "msgid": "0",
    "timet": 1528167652,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "26",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "11:00:46",
    "user": "System",
    "comp": "localhost",
    "desc": "[MalwareRemover] Started scanning.",
    "msgid": "0",
    "timet": 1528167646,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "25",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "10:54:02",
    "user": "System",
    "comp": "localhost",
    "desc": "[App Center] Installed Qsync Central 3.0.4 in /share/CACHEDEV1_DATA/.qpkg/QsyncServer.",
    "msgid": "46",
    "timet": 1528167242,
    "app_name": "App Center",
    "app_id": "A039",
    "category": "App Installation",
    "message_id": "---",
    "category_id": "C001"

  }, {
    "id": "24",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "10:54:02",
    "user": "System",
    "comp": "localhost",
    "desc": "[App Center] Enabled Qsync Central.",
    "msgid": "22",
    "timet": 1528167242,
    "app_name": "App Center",
    "app_id": "A039",
    "category": "App Installation",
    "message_id": "---",
    "category_id": "C001"

  }, {
    "id": "23",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "10:53:13",
    "user": "System",
    "comp": "localhost",
    "desc": "[App Center] Enabled Media Streaming Add-on.",
    "msgid": "47",
    "timet": 1528167193,
    "app_name": "App Center",
    "app_id": "A039",
    "category": "App Installation",
    "message_id": "---",
    "category_id": "C001"

  }, {
    "id": "22",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "10:52:57",
    "user": "System",
    "comp": "localhost",
    "desc": "[App Center] Installed Media Streaming Add-on 430.1.6.2 in /share/CACHEDEV1_DATA/.qpkg/QDMS.",
    "msgid": "46",
    "timet": 1528167177,
    "app_name": "App Center",
    "app_id": "A039",
    "category": "App Installation",
    "message_id": "---",
    "category_id": "C001"

  }, {
    "id": "21",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "10:51:41",
    "user": "System",
    "comp": "localhost",
    "desc": "[Media Library] Media Library Server started.",
    "msgid": "0",
    "timet": 1528167101,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "20",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "10:51:40",
    "user": "System",
    "comp": "localhost",
    "desc": "[Media Library] Database upgrade ended.",
    "msgid": "0",
    "timet": 1528167100,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "19",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "10:51:40",
    "user": "System",
    "comp": "localhost",
    "desc": "[Media Library] Database upgrade started.",
    "msgid": "0",
    "timet": 1528167100,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "18",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "10:51:21",
    "user": "System",
    "comp": "localhost",
    "desc": "[Web Server] Recovered PHP configuration files.",
    "msgid": "18",
    "timet": 1528167081,
    "app_name": "Web Server",
    "app_id": "A031",
    "category": "Web Server",
    "message_id": "---",
    "category_id": "C001"

  }, {
    "id": "17",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "10:51:21",
    "user": "System",
    "comp": "localhost",
    "desc": "[Web Server] Recovered configuration files.",
    "msgid": "17",
    "timet": 1528167081,
    "app_name": "Web Server",
    "app_id": "A031",
    "category": "Web Server",
    "message_id": "---",
    "category_id": "C001"

  }, {
    "id": "16",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "10:49:17",
    "user": "System",
    "comp": "localhost",
    "desc": "[Network & Virtual Switch] Initialized Network & Virtual Switch.",
    "msgid": "---",
    "timet": 1528166957,
    "app_name": "Network & Virtual Switch",
    "app_id": "A202",
    "category": "reserved",
    "message_id": "0153",
    "category_id": "reserved"

  }, {
    "id": "15",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "10:49:09",
    "user": "System",
    "comp": "localhost",
    "desc": "System started.",
    "msgid": "0",
    "timet": 1528166949,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "14",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "10:45:31",
    "user": "System",
    "comp": "localhost",
    "desc": "[Backup/Restore] System shut down on Tue Jun  5 10:45:31 CST 2018.",
    "msgid": "---",
    "timet": 1528166731,
    "app_name": "Backup/Restore",
    "app_id": "A010",
    "category": "C002",
    "message_id": "4",
    "category_id": "C002"

  }, {
    "id": "13",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "10:42:35",
    "user": "System",
    "comp": "localhost",
    "desc": "[App Center] Helpdesk enabled.",
    "msgid": "0",
    "timet": 1528166554,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "12",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "10:42:29",
    "user": "System",
    "comp": "localhost",
    "desc": "[App Center] Helpdesk 1.1.21 has been installed in /mnt/HDA_ROOT/update_pkg/helpdesk successfully.",
    "msgid": "0",
    "timet": 1528166549,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "11",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "10:41:25",
    "user": "System",
    "comp": "localhost",
    "desc": "[Storage & Snapshots] Finished ext4lazyinit. Volume: DataVol1, Storage pool: \"1\".",
    "msgid": "---",
    "timet": 1528166485,
    "app_name": "Storage & Snapshots",
    "app_id": "A002",
    "category": "C001",
    "message_id": "466",
    "category_id": "C001"

  }, {
    "id": "10",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "10:41:14",
    "user": "System",
    "comp": "localhost",
    "desc": "[Storage & Snapshots] Finished initializing volume/LUN \"DataVol1\". Type: Volume, Storage Pool: 1, Thin: No, Capacity: 364.17 GB, SSD Cache: Disable, Threshold: 80%, Shared folders: \"Multimedia\" \"Download\" \"Web\" \"Public\", Bytes per inode: 16384.",
    "msgid": "---",
    "timet": 1528166474,
    "app_name": "Storage & Snapshots",
    "app_id": "A002",
    "category": "C001",
    "message_id": "4",
    "category_id": "C001"

  }, {
    "id": "9",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "10:40:20",
    "user": "System",
    "comp": "localhost",
    "desc": "[Storage & Snapshots] Started ext4lazyinit. Volume: DataVol1, Storage pool: \"1\".",
    "msgid": "---",
    "timet": 1528166420,
    "app_name": "Storage & Snapshots",
    "app_id": "A002",
    "category": "C001",
    "message_id": "464",
    "category_id": "C001"

  }, {
    "id": "8",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "10:40:19",
    "user": "System",
    "comp": "localhost",
    "desc": "[Storage & Snapshots] Finished formatting volume \"DataVol1\". Storage pool: 1.",
    "msgid": "---",
    "timet": 1528166419,
    "app_name": "Storage & Snapshots",
    "app_id": "A002",
    "category": "C001",
    "message_id": "20",
    "category_id": "C001"

  }, {
    "id": "7",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "10:40:14",
    "user": "System",
    "comp": "localhost",
    "desc": "[Storage & Snapshots] Started formatting volume \"DataVol1\". Storage pool: 1.",
    "msgid": "---",
    "timet": 1528166414,
    "app_name": "Storage & Snapshots",
    "app_id": "A002",
    "category": "C001",
    "message_id": "19",
    "category_id": "C001"

  }, {
    "id": "6",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "10:39:44",
    "user": "System",
    "comp": "localhost",
    "desc": "[Storage & Snapshots] Started initializing volume/LUN \"DataVol1\". Type: Volume.",
    "msgid": "---",
    "timet": 1528166384,
    "app_name": "Storage & Snapshots",
    "app_id": "A002",
    "category": "C001",
    "message_id": "1",
    "category_id": "C001"

  }, {
    "id": "5",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "10:39:43",
    "user": "System",
    "comp": "localhost",
    "desc": "[Pool 1] Created storage pool successfully (Capacity: 1.81 TB, Threshold 0%) with RAID Group 1 ( Host Drive: 1, RAID Level: Single  ).",
    "msgid": "---",
    "timet": 1528166383,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "4",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "10:39:23",
    "user": "System",
    "comp": "localhost",
    "desc": "Started to create storage pool.",
    "msgid": "---",
    "timet": 1528166363,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "3",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "10:37:19",
    "user": "System",
    "comp": "localhost",
    "desc": "Host: Disk 1 plugged in.",
    "msgid": "0",
    "timet": 1528191439,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"

  }, {
    "id": "2",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "10:36:32",
    "user": "System",
    "comp": "localhost",
    "desc": "[myQNAPcloud] CloudLink service for myQNAPcloud web site is ready.",
    "msgid": "0",
    "timet": 1528191392,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"
  }, {
    "id": "1",
    "ip": "127.0.0.1",
    "type": "0",
    "date": "2018/06/05",
    "time": "10:35:24",
    "user": "System",
    "comp": "localhost",
    "desc": "System started.",
    "msgid": "0",
    "timet": 1528191324,
    "app_name": "---",
    "app_id": "---",
    "category": "---",
    "message_id": "---",
    "category_id": "---"
  }
]
