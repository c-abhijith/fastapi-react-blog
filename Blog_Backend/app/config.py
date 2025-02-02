from dotenv import load_dotenv
from functools import lru_cache
import os

load_dotenv("D:\job_blog\Blog_Backend\app\.env")

class Settings:
    APP_NAME: str = os.getenv('APP_NAME', 'FastAPi Docs')
    APP_VERSION: str = os.getenv('APP_VERSION', '0.0.1')
    
    SERVER_HOST: str = os.getenv('SERVER_HOST', '0.0.0.0')
    SERVER_PORT: int = int(os.getenv('SERVER_PORT', '8000'))
    SERVER_WORKERS: int = int(os.getenv("WORKERS", "1"))
    
    
    SECRET_KEY: str = os.getenv("SECRET_KEY", "secret_key")
    DATABASE_URL:str = os.getenv("DATABASE_URL","postgresql://postgres:postgres@localhost/echoblog")    
    DEBUG = os.getenv('DEBUG', '0.0.1')
    

@lru_cache
def get_settings() -> Settings:
    return Settings()