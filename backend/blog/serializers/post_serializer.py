from rest_framework import serializers
from blog.models import Post
from .user_serializer import UserSerializer
from .category_serializer import CategorySerializer


class PostSerializer(serializers.ModelSerializer):
    # posts = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    category = CategorySerializer()
    owner = UserSerializer(read_only=True)

    class Meta:
        model = Post
        fields = "__all__"
