from sklearn import linear_model
from train_model import x_train, y_train, x_test, y_test
from sklearn.model_selection import cross_val_score
from train_model import predictAndResults, metrics
import pickle

class Linear:


    def trainLinear(self):
        lr = linear_model.LinearRegression()
        linear = cross_val_score(lr, x_train, y_train, scoring = 'neg_root_mean_squared_error' ,cv = 10)
        #model può essere utile se si vuole stampare i valori, e quindi calcolare la media, della cross validation
        model = lr.fit(x_train, y_train)
        return model

    def save_model(self, model):
        pickle.dump(model, open("models/linear.pkl", "wb"))

    def trainModel(self):
        lr = Linear()
        modello= lr.trainLinear()
        lr.save_model(modello)

lr = Linear()
lr.trainModel()



