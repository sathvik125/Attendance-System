import pickle,os
path="face_data"
known_face_encoding=[]
known_face_names=[]
def data():
    for file in os.listdir(path):
        # print(file)
        if(file[-1]=='l'):
            # f=open(file,"rb")
            filepath=os.path.join(path,file)
            encoding=pickle.load(open(filepath, "rb"))
            known_face_encoding.append(encoding)
            known_face_names.append(file[0:-8])
    return known_face_encoding,known_face_names
