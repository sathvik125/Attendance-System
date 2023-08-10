import face_recognition
import cv2
import numpy as np
import os,pickle
from load_data import data
from flask import Flask, request,render_template,jsonify
from flask_cors import CORS
from flask_mysqldb import MySQL

app=Flask(__name__)
CORS(app)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Sathvik@1718'
app.config['MYSQL_DB'] = 'regform'
mysql= MySQL(app)
@app.route("/login",methods=['POST'])
def login():
    d=request.get_json()
    cur = mysql.connection.cursor()
    query1 = "SELECT * FROM form WHERE email='" + d['email'] + "' AND password='" + d['password'] + "'"
    print(query1)
    cur.execute(query1)
    data =cur.fetchall()
    # print(data[0])
    # return (data.email)
    if(data):
        return "yes"
    return "no"
@app.route("/signup",methods=['POST'])
def signup():
    d=request.get_json()
    try:

        query1="Insert into form values('"+d['email']+"','"+d['password']+"')"
        # query1="select * from form"
        print(query1)
        cur = mysql.connection.cursor()
        cur.execute(query1)
        print(cur.fetchall())
        mysql.connection.commit()
    except:
        return "false"
    return "true"


@app.route('/add_student',methods=['POST','GET'])
def add(path,name):
    # print("called")
    f = request.files['file_from_react']
    path = f.filename
    img = cv2.imread(path)
    # img=cv2.imread(path)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    encode = face_recognition.face_encodings(img)[0]
    newstudentdatapath=str("./face_data/"+name+".pkl")
    f=open(newstudentdatapath,"wb")
    pickle.dump(encode,f)
    print("added"+name)
    return ""
# @app.route('/mark_attendance',methods=['POST','GET'])
# def mark_attendance():

@app.route('/take_attendance',methods=['POST','GET'])
def take_attendance():
    while True:
        print("capture started")
        _,img=video_capture.read()#first value is signal which is not required for us
        cv2.imshow("attendence system",img)
        # small_frame=cv2.resize(frame,(0,0),fx=0.25,fy=0.25)
        # rgb_small_frame=small_frame[:,:,::-1]
        imgS = cv2.resize(img,(0,0),None,0.25,0.25)
        imgS = cv2.cvtColor(imgS, cv2.COLOR_BGR2RGB)
        face_locations=face_recognition.face_locations(imgS)
        face_encodings=face_recognition.face_encodings(imgS,face_locations)
        face_names=[]
        for face_encoding,face_loc in zip(face_encodings,face_locations):
            print("checking")
            matches=face_recognition.compare_faces(known_face_encoding,face_encoding)
            name=""
            face_distance=face_recognition.face_distance(known_face_encoding,face_encoding)
            best_match_index=np.argmin(face_distance)
            if matches[best_match_index] :
                name=known_face_names[best_match_index]
                print(name)
                # y1,x2,y2,x1 = face_loc
                # y1, x2, y2, x1 = y1*4,x2*4,y2*4,x1*4
                # cv2.rectangle(img,(x1,y1),(x2,y2),(0,255,0),2)
                # cv2.rectangle(img,(x1,y2-35),(x2,y2),(0,255,0),cv2.FILLED)
                # cv2.putText(img,name,(x1+6,y2-6),cv2.FONT_HERSHEY_COMPLEX,1,(255,255,255),2)
                # cv2.imshow("attendence system",img)
                # video_capture.release()
                cv2.destroyAllWindows()
                # cv2.waitKey(1)
                return name
        if cv2.waitKey(1) and 0xFF==ord('v'):
            break
    video_capture.release()
    cv2.destroyAllWindows()

    
if __name__=='__main__':
    video_capture=cv2.VideoCapture(0) #default webcam 1 for mobile(other devices)
    known_face_encoding,known_face_names=data()
    students=known_face_names.copy()
    face_locations=[]
    face_encoding=[]
    face_name=[]
    s=True
    app.run(debug=True)








