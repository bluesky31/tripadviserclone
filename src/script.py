import json
import random

chars = "abcdefghijklmnopqrstuvwxyz ,.=*"

def rand_string(num):
    ret = ""
    for i in range(num):
        ret+=chars[random.randrange(0,len(chars))]
    return ret

data = []
for i in range(100):
    data.append({})
    x=data[i]
    x["title"] = rand_string(random.randrange(10,50))
    x["location"] = rand_string(random.randrange(10,50))
    x["images"] = []
    for i in range(5):
        t = random.randrange(1,9)
        x["images"].append(f"img{t}.jpg")
    x["bedroomNumber"] = random.randrange(1,100)
    x["sleepNumber"] = random.randrange(1,100)
    x["bathroomNumber"] = random.randrange(1,100)
    x["previousBookings"] = random.randrange(1,100)
    x["totalRatings"] = random.randrange(1,1000)
    x["rating"] = random.randrange(0,11)/2

with open("data-entries.json","w") as f:
    json.dump(data,f)
