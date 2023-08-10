import face_recognition
import cv2
import numpy as np
import csv
import os
from datetime import datetime
import program_data 
video_capture=cv2.VideoCapture(0) #default webcam
print("encoding started")
p6621_image=cv2.cvtColor( cv2.imread("attendance dataset\P6621.jpg"), cv2.COLOR_BGR2RGB)
p6621_encoding=face_recognition.face_encodings(p6621_image)[0]

p6602_image=cv2.cvtColor( cv2.imread("attendance dataset\P6602.jpg"), cv2.COLOR_BGR2RGB)
p6602_encoding=face_recognition.face_encodings(p6602_image)[0]

p6603_image=cv2.cvtColor( cv2.imread("attendance dataset\P6603.jpg"), cv2.COLOR_BGR2RGB)
p6603_encoding=face_recognition.face_encodings(p6603_image)[0]
known_face_encoding=[
    p6621_encoding,
    p6602_encoding,
    p6603_encoding

]
print("encoding done")
known_face_names=[
    "p6621",
    "p6602",
    "p6603"

]

students=known_face_names.copy()
face_locations=[]
face_encoding=[]
face_name=[]
s=True
while True:
    print("capture started")
    _,img=video_capture.read()#first value is signal which is not required for us
    # small_frame=cv2.resize(frame,(0,0),fx=0.25,fy=0.25)
    # rgb_small_frame=small_frame[:,:,::-1]
    imgS = cv2.resize(img,(0,0),None,0.25,0.25)
    imgS = cv2.cvtColor(imgS, cv2.COLOR_BGR2RGB)
    face_locations=face_recognition.face_locations(imgS)
    face_encodings=face_recognition.face_encodings(imgS,face_locations)
    face_names=[]
    for face_encoding in face_encodings:
        print("checking")
        matches=face_recognition.compare_faces(known_face_encoding,face_encoding)
        name=""
        face_distance=face_recognition.face_distance(known_face_encoding,face_encoding)
        best_match_index=np.argmin(face_distance)
        if matches[best_match_index] :
            name=known_face_names[best_match_index]
            print(name)
            
           
            y1, x2, y2, x1 = y1*4,x2*4,y2*4,x1*4
            cv2.rectangle(img,(x1,y1),(x2,y2),(0,255,0),2)
            cv2.rectangle(img,(x1,y2-35),(x2,y2),(0,255,0),cv2.FILLED)
            cv2.putText(img,name,(x1+6,y2-6),cv2.FONT_HERSHEY_COMPLEX,1,(255,255,255),2)
    cv2.imshow("attendence system",img)
    if cv2.waitKey(1) and 0xFF==ord('q'):
        break
video_capture.release()
cv2.destroyAllWindows()








