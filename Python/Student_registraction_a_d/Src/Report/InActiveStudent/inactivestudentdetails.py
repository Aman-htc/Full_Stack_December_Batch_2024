
import json
def get_load(path):
    
    with open(path,'r') as file:
        return json.load(file)
    
def inactive_student(path):
    try:
        
        data=get_load(path)
        for s in data:
            for key,value in s.items():
                if value == False:
                    print(json.dumps(s,indent=4))
    except Exception as e:
        print('technical issue wait')                