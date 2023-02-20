from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    posts = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    username = serializers.CharField()

    class Meta:
        model = User
        fields = ["posts", "username"]
