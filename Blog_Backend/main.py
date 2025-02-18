from fastapi import FastAPI
from app.database import engine, Base
from app.config import get_settings

app = FastAPI()
settings = get_settings()
Base.metadata.create_all(bind=engine)

@app.get("/")
def read_root():
    return {
        "message": "Welcome to the EchoBlog",
        "app_name": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "debug": settings.DEBUG
    }

if __name__=='__main__':
    import uvicorn
    uvicorn.run()
    