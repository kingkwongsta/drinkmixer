# pip install python-dotenv langchain "fastapi[all]" octoai-sdk 
# .venv\Scripts\Activate.ps1
# uvicorn main:app --reload

import uvicorn
from os import getenv
from api import app

if __name__ == "__main__":
    port = int(getenv("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port, reload=True)