from .database import Base
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy import Column, DateTime, Text, Boolean, String, Enum as SQLAEnum, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import uuid
from enum import Enum


class UserRole(str, Enum):
    USER = "user"
    ADMIN = "admin"


class BaseModel(Base):
    __abstract__ = True

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    created_at = Column(DateTime, default=func.now())
    updated_at = Column(DateTime, default=func.now(), onupdate=func.now())
    deleted_at = Column(DateTime, nullable=True)
    created_by = Column(UUID(as_uuid=True), ForeignKey('users.id'), nullable=True)
    updated_by = Column(UUID(as_uuid=True), ForeignKey('users.id'), nullable=True)
    deleted_by = Column(UUID(as_uuid=True), ForeignKey('users.id'), nullable=True)
    info = Column(Text, nullable=True)
    is_active = Column(Boolean, default=True)


class User(BaseModel):
    __tablename__ = 'users'

    username = Column(String(30), nullable=False, unique=True)
    email = Column(String(50), nullable=False, unique=True)
    password = Column(String(255), nullable=False)
    bio = Column(Text, nullable=True)
    title = Column(String(30), nullable=True)
    twitter_url = Column(String(500), nullable=True)
    instagram_url = Column(String(500), nullable=True)
    linkedin_url = Column(String(500), nullable=True)
    role = Column(SQLAEnum(UserRole), default=UserRole.USER, nullable=False)

    blogs = relationship("Blog", back_populates="user", cascade="all, delete-orphan")


class Blog(BaseModel):
    __tablename__ = 'blogs'

    title = Column(String(100), nullable=False)
    description = Column(Text, nullable=False)
    image_url = Column(String(500), nullable=True)
    user_id = Column(UUID(as_uuid=True), ForeignKey('users.id', ondelete='CASCADE'), nullable=False)

    user = relationship("User", back_populates="blogs")
