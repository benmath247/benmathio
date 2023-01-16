from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework import viewsets, generics
from blog.models import Post, Category
from blog.serializers.post_serializer import PostSerializer
from blog.serializers.category_serializer import CategorySerializer
from blog.serializers.user_serializer import UserSerializer
from blog.serializers.post_serializer import PostSerializer
from blog.permissions import IsOwnerOrReadOnly

# Create your views here.
class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class PostListFeatured(generics.ListCreateAPIView):
    queryset = Post.objects.filter(featured=True)
    serializer_class = PostSerializer
    permission_classes = [IsOwnerOrReadOnly]


class PostListUnfeatured(generics.ListCreateAPIView):
    queryset = Post.objects.filter(featured=False)
    serializer_class = PostSerializer
    permission_classes = [IsOwnerOrReadOnly]


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.filter()
    serializer_class = PostSerializer
    permission_classes = [IsOwnerOrReadOnly]
    lookup_field = "slug"


# class CategoryList(generics.ListCreateAPIView):
#     queryset = Category.objects.all()
#     serializer_class = CategorySerializer


class CategoryPostList(generics.ListCreateAPIView):
    def get_queryset(self):
        category = self.kwargs["category"]
        return (
            Post.objects.filter(category1=category)
            .filter(category2=category)
            .filter(category3=category)
        )


# class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Category.objects.all()
#     serializer_class = CategorySerializer
#     lookup_field = "name"


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = "username"


class CategoryPostsList(generics.ListAPIView):
    # serializer_class = CategoryPostSerializer
    # lookup_field = "name"

    # def get_queryset(self):
    #     # import pdb; pdb.set_trace()
    #     category = Category.objects.get(name=self.kwargs["name"])
    #     return Post.objects.filter(category1=category)

    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)    


class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer