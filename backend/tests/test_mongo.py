from pymongo import MongoClient

client = MongoClient("localhost", 27017, username="root", password="rootpassword")

db = client.db
users = db.users

# users.insert_one({'username': "Jane", 'password': "Doe", 'type': 'Student'})

print(users.find_one({"username": "Jane"}))

for k in users.find({"username": "Jane"}):
    print(k)

print(users.count_documents({"username": "Jane"}))
client.close()
