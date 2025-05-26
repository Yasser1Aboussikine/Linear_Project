import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import Header from "../components/Header";

// Define each section of the Python code with a title
const codeSections = [
  {
    title: "1. Imports and Configuration",
    code: `import os
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from tqdm import tqdm
import cv2

from sklearn.decomposition import PCA
from sklearn.linear_model import LogisticRegression  # You can swap with SVC
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, classification_report, confusion_matrix

from tensorflow.keras.applications import ResNet50
from tensorflow.keras.applications.resnet50 import preprocess_input
from tensorflow.keras.preprocessing import image

# Configuration
vggface2_path = "/content/drive/MyDrive/LinearProject"  # Replace with your dataset path
MAX_PEOPLE = 10
MAX_IMAGES_PER_PERSON = 200
IMAGE_SIZE = (224, 224)  # ResNet requires 224x224 input

# Load ResNet50 model (pretrained)
resnet = ResNet50(weights='imagenet', include_top=False, pooling='avg')  # Output shape: (2048,)`,
  },
  {
    title: "2. Load Images and Extract ResNet Features",
    code: `# =======================================
# 📆 Load Images and Extract ResNet Features
# =======================================
def extract_resnet_features(path, image_size=(224, 224)):
    features = []
    labels = []
    label_map = {}
    current_label = 0
    image_paths = []  # Store paths to original images

    for celeb_folder in tqdm(sorted(os.listdir(path)), desc="Extracting"):
        if current_label >= MAX_PEOPLE:
            break
        celeb_path = os.path.join(path, celeb_folder)
        if not os.path.isdir(celeb_path):
            continue
        label_map[current_label] = celeb_folder
        count = 0
        for img_file in os.listdir(celeb_path):
            if count >= MAX_IMAGES_PER_PERSON:
                break
            img_path = os.path.join(celeb_path, img_file)
            try:
                img = image.load_img(img_path, target_size=image_size)
                img_array = image.img_to_array(img)
                img_array = np.expand_dims(img_array, axis=0)
                img_array = preprocess_input(img_array)

                feat = resnet.predict(img_array, verbose=0)
                features.append(feat.flatten())
                labels.append(current_label)
                image_paths.append(img_path)  # Save original image path
                count += 1
            except:
                continue
        current_label += 1

    return np.array(features), np.array(labels), label_map, image_paths

# Load data
X, y, label_map, image_paths = extract_resnet_features(vggface2_path, IMAGE_SIZE)
X_train, X_test, y_train, y_test, paths_train, paths_test = train_test_split(
    X, y, image_paths, test_size=0.25, stratify=y, random_state=42
)`,
  },
  {
    title: "3. PCA and Classifier Training",
    code: `# PCA
print("Applying PCA...")
pca = PCA(n_components=400)
X_train_pca = pca.fit_transform(X_train)
X_test_pca = pca.transform(X_test)

# Classifier
print("Training classifier...")
clf = LogisticRegression(max_iter=1000)  # Replace with SVC if needed
clf.fit(X_train_pca, y_train)
y_pred = clf.predict(X_test_pca)`,
  },
  {
    title: "4. Evaluation Metrics and Report",
    code: `# Evaluation
print("\n✅ Evaluation:")
print(f"Accuracy:  {accuracy_score(y_test, y_pred):.4f}")
print(f"Precision: {precision_score(y_test, y_pred, average='weighted'):.4f}")
print(f"Recall:    {recall_score(y_test, y_pred, average='weighted'):.4f}")
print(f"F1 Score:  {f1_score(y_test, y_pred, average='weighted'):.4f}")

# Label names
class_names = [label_map[i] for i in sorted(label_map)]

# Report
print("\n📋 Classification Report:")
print(classification_report(y_test, y_pred, target_names=class_names))

# Confusion Matrix
plt.figure(figsize=(10, 8))
sns.heatmap(confusion_matrix(y_test, y_pred), annot=True, fmt='d', cmap='Blues',
            xticklabels=class_names, yticklabels=class_names)
plt.title("Confusion Matrix")
plt.xlabel("Predicted")
plt.ylabel("Actual")
plt.show()`,
  },
  {
    title: "5. Visualization Functions",
    code: `# ============================
# 🧠 Visualize Original, PCA, and Prediction
# ============================
def visualize_complete_pipeline(index=0):
    # 1. Load and show original image
    img_path = paths_test[index]
    original_img = cv2.imread(img_path)
    original_img = cv2.cvtColor(original_img, cv2.COLOR_BGR2RGB)

    # 2. Get PCA representation
    img_features = X_test[index]
    img_pca = X_test_pca[index]

    # 3. Make prediction
    pred_label = clf.predict(img_pca.reshape(1, -1))[0]
    true_label = y_test[index]
    pred_name = label_map[pred_label]
    true_name = label_map[true_label]

    # Visualization
    plt.figure(figsize=(16, 5))

    # Original image
    plt.subplot(1, 3, 1)
    plt.imshow(original_img)
    plt.title("Original Image")
    plt.axis('off')

    # PCA components visualization
    plt.subplot(1, 3, 2)
    # Reshape PCA components for better visualization
    pca_visual = img_pca.reshape(20, 20) if len(img_pca) == 400 else img_pca[:400].reshape(20, 20)
    plt.imshow(pca_visual, cmap='viridis')
    plt.title(f"PCA Representation\n({len(img_pca)} components)")
    plt.colorbar(fraction=0.046, pad=0.04)

    # Find an example of the predicted class
    plt.subplot(1, 3, 3)
    pred_examples = [i for i, label in enumerate(y_train) if label == pred_label]
    if pred_examples:
        example_idx = pred_examples[0]
        example_path = paths_train[example_idx]
        predicted_img = cv2.imread(example_path)
        predicted_img = cv2.cvtColor(predicted_img, cv2.COLOR_BGR2RGB)
        plt.imshow(predicted_img)
        plt.title(f"Example of Predicted Class\nPredicted: {pred_name}\nTrue: {true_name}")
    else:
        plt.text(0.5, 0.5, "No example found", ha='center')
    plt.axis('off')

    plt.tight_layout()
    plt.suptitle(f"Face Recognition Pipeline Visualization", fontsize=16)
    plt.subplots_adjust(top=0.85)
    plt.show()

    # Show prediction confidence (probability distribution)
    plt.figure(figsize=(12, 4))
    probs = clf.predict_proba(img_pca.reshape(1, -1))[0]
    top_indices = np.argsort(probs)[-5:][::-1]  # Get top 5 predictions
    top_probs = probs[top_indices]
    top_names = [label_map[i] for i in top_indices]

    plt.bar(top_names, top_probs)
    plt.title("Top 5 Prediction Probabilities")
    plt.ylabel("Probability")
    plt.ylim(0, 1)
    plt.xticks(rotation=45, ha='right')
    plt.tight_layout()
    plt.show()

# Visualize multiple test examples
def visualize_multiple_examples(num_examples=5):
    indices = np.random.choice(len(X_test), min(num_examples, len(X_test)), replace=False)
    for idx in indices:
        visualize_complete_pipeline(index=idx)`,
  },
  {
    title: "6. Running Visualizations",
    code: `# Visualize a test image (you can change the index to see different examples)
print("\n🖼️ Visualizing test image and prediction:")
visualize_complete_pipeline(index=0)

# Visualize multiple test examples
print("\n🖼️ Visualizing multiple random test examples:")
visualize_multiple_examples(num_examples=3)`,
  },
];

const Code = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-700 to-black text-white px-4 sm:px-6 lg:px-8">
      <Header />
      <div className="max-w-4xl mx-auto pt-12 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-emerald-100">
          Project Implementation Code
        </h1>

        <div className="space-y-8">
          {codeSections.map((section, index) => (
            <section key={index}>
              <h2 className="text-2xl font-semibold mb-4 text-emerald-200">
                {section.title}
              </h2>
              <div className="bg-emerald-900/30 p-4 rounded-lg">
                <CodeBlock
                  text={section.code}
                  language="python"
                  theme={dracula}
                  showLineNumbers={true}
                />
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Code;
