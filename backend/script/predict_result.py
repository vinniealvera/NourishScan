
import os
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'
import tensorflow as tf
from keras_preprocessing import image
import numpy as np
from keras_models import models
import cv2
import keras


def predict(path_to_image): 

    try :
        path = f"{os.path.split(os.getcwd())[0]}/backend/models/multiclass_keras.h5"
        
        models =  keras.models.load_model(path)

        image = tf.io.read_file(path_to_image)
        image = tf.image.decode_image(image, channels=3)
        image = tf.image.resize(image, (224, 224))
        image = tf.expand_dims(image, 0)

        predictions = models.predict(image)
        class_probs = tf.nn.softmax(predictions)

        class_id = tf.argmax(class_probs, axis=1)

        classes = [
            'apple',
            'banana',
            'cabbage',
            'garlic'
        ]
        
        output = classes[class_id.numpy()[0]]
        return str(output)
    
    except Exception as err :
        return err
