from rest_framework import serializers
from blog.models import Category
from .user_serializer import UserSerializer


class CategorySerializer(serializers.ModelSerializer):
    posts = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    name = serializers.CharField(read_only=True)
    image = serializers.ImageField(read_only=True)

    class Meta:
        model = Category
        fields = ["id", "image", "name", "posts"]
