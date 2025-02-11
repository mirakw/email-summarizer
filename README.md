# **AI Email Summarizer 🚀**
### **An AI-powered tool that summarizes emails using ActivePieces and Bolt.**

![Email Summary UI](./screenshot.png)

## **📌 Overview**
This project automates **email summarization** by:
- **Fetching emails** via the Gmail API.
- **Processing and summarizing** them using OpenAI's GPT-4o.
- **Displaying the summary in a clean UI**, built with Bolt.

🛠️ **Built with:**
- **ActivePieces** for workflow automation.  
- **OpenAI GPT-4o** for text summarization.  
- **Bolt** for UI implementation.  

---

## **⚙️ How It Works**
### **1️⃣ ActivePieces Workflow**
The workflow is built in **ActivePieces** and consists of four steps:

| **Step**  | **Action** |
|-----------|-----------|
| **1. Catch Webhook** | Listens for a new request to summarize an email. |
| **2. Gmail API Call** | Retrieves the latest email using the Gmail API. |
| **3. Summarization (GPT-4o)** | Extracts key points, action items, and deadlines. |
| **4. Return Response** | Sends the summarized email as JSON. |

📌 **Webhook Endpoint:**
```
https://cloud.activepieces.com/api/v1/webhooks/81vJYa3c4AkY4B1U4lR9x/sync
```

### **2️⃣ Bolt UI Implementation**
I used **Bolt** to build a simple UI that fetches summaries from the webhook.

#### **🗒 Bolt Prompt**
> _"I built an AI tool that summarizes my email. Can you build the UI for it?  
> Here is the URL: `https://cloud.activepieces.com/api/v1/webhooks/81vJYa3c4AkY4B1U4lR9x/sync`  
> Here is the JSON response:_
> ```json
> { "summary": "{{step_2}} | default: 'No summary available' }}" }
> ```
👉 **Bolt generated a simple UI with:**
- A **button** to trigger the summary request.
- A **text display** for the summarized email.

---

## **🛠️ Installation & Setup**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/ai-email-summarizer.git
cd ai-email-summarizer
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Run the Application**
```bash
npm start
```

### **4️⃣ Test the API**
Use **cURL** to test the webhook manually:
```bash
curl -X POST "https://cloud.activepieces.com/api/v1/webhooks/81vJYa3c4AkY4B1U4lR9x/sync"
```

---

## **🛠️ Future Improvements**
- ✅ Add **OAuth-based Gmail authentication** for personalized email retrieval.
- ✅ Enhance UI with **real-time updates** when a new email is summarized.
- ✅ Enable **summary storage and history tracking**.

---

## **📸 Screenshots**
API Workflow using ActivePieces 
Bolt-UI

