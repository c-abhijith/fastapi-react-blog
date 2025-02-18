from fastapi import APIRouter
from app.database import get_db
from app.config import get_settings

settings = get_settings()
auth_route = APIRouter(
    prefix='/auth',
    tags=['auth']
)


@auth_route.post('/auth/signup')
def index():
    return {}