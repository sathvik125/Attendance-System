import face_recognition
import cv2
import numpy as np
import pickle
def add(path,name):
    # print("called")
    img = cv2.imread(path)
    # img=cv2.imread(path)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    encode = face_recognition.face_encodings(img)[0]
    newstudentdatapath=str("./face_data/"+name+".pkl")
    f=open(newstudentdatapath,"wb")
    pickle.dump(encode,f)
    print("added"+name)
    return ""

    
    
