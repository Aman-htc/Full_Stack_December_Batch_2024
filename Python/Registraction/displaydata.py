
import time
import datetime
import logger






def data_read(path):
    try:
        
        with open(path,'r') as file:
            data=file.read()
            print('All add searching',end='')
            for n in range(4):
                time.sleep(1)
                print('.',end='')
            print()
        
            print(data)
    
    except Exception as e:
        date=datetime.datetime.now()
        error_data={'error':str(e),'funcation_name':'data_read()','datetime':date,'user_name':'Aman kushwaha'}
        logger.write_logs(str(error_data))
        print('technical issue after some time!')
                