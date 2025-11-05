# train_model.py

import pandas as pd
from sklearn.tree import DecisionTreeClassifier
import joblib

# Step 1: Create dataset
data = {
    'math': [95, 60, 30, 85, 45, 70],
    'reading': [90, 65, 25, 80, 50, 72],
    'writing': [93, 60, 28, 88, 48, 75],
    'result': ['Excellent', 'Average', 'Needs Improvement', 'Excellent', 'Average', 'Good']
}

# Step 2: Convert to DataFrame
df = pd.DataFrame(data)

# Step 3: Define inputs (X) and output (y)
X = df[['math', 'reading', 'writing']]
y = df['result']

# Step 4: Create and train model
model = DecisionTreeClassifier()
model.fit(X, y)

# Step 5: Save trained model
joblib.dump(model, 'model.pkl')

print(" Model trained and saved as 'model.pkl'")
