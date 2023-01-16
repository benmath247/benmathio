"""blog_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from blog.views import (
    PostList,
    PostDetail,
    CategoryList,
    CategoryDetail,
    UserDetail,
    UserList,
    PostListFeatured,
    PostListUnfeatured,
    CategoryPostsList
)


urlpatterns = [
    path("admin/", admin.site.urls),
 
    # users
    path("users/<int:pk>/", UserDetail.as_view()),
    path("users/", UserList.as_view()),
 
    # posts
    path("posts/unfeatured", PostListUnfeatured.as_view()),
    path("posts/<slug:slug>/", PostDetail.as_view()),
    path("posts/featured", PostListFeatured.as_view()),
    path("posts/", PostList.as_view(), name="post-list"),

    # categories
    path("categories/posts/<str:name>", CategoryPostsList.as_view()),
    path("categories/", CategoryList.as_view(), name="category-list"),
    path("categories/<int:pk>/", CategoryDetail.as_view(), name="category-detail"),
    path("categories/", CategoryList.as_view()),
]
