from fastapi import APIRouter
from app.config import get_settings

root = APIRouter(
    prefix='',
    tags=['landing_page']
)
settings = get_settings()

@root.get("/")
def read_root():
    return {
        "message": "Welcome to the EchoBlog",
        "app_name": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "debug": settings.DEBUG
    }