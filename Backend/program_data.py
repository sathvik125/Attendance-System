import numpy as np
import face_recognition
import os
from datetime import datetime
import cv2
# from PIL import ImageGrab
from face_data.addingstudent import add
# print(add("attendance dataset\6602.jpg","prateek"))
path="attendance dataset"
for file in os.listdir(path):
    filepath=os.path.join(path,file)
    add(filepath,file)
    
# print(os.listdir(path))

