from django.test import TestCase
from blog.factories import PostFactory
from blog.models import Post
from django.contrib.auth.models import User
from django.shortcuts import reverse

# Create your tests here.
class PostListTestCase(TestCase):
    def test_post(self):
        self.user = User.objects.create_user(
            username="test",
            password="test",
            email="ben@ben.com",
            first_name="test",
            last_name="test",
        )
        self.client.force_login(self.user)
        data = {"title": "title", "body": "content", 'slug':'slug1', "owner": self.user}
        res = self.client.post(reverse("post-list"), data=data)
        self.assertEqual(res.status_code, 201)
        self.assertEqual(len(Post.objects.all()), 1)

    def test_post_get(self):
        self.user = User.objects.create_user(
            username="test1",
            password="test1",
            email="ben1@ben.com",
            first_name="test",
            last_name="test",
        )
        self.client.force_login(self.user)
        data1 = {"title": "hi", "body": "content3", "owner": self.user}
        res = self.client.post(reverse("post-list"), data=data1)

        self.assertEqual(len(Post.objects.all()), 1)

        data2 = {"title": "hi1", "body": "content2", "owner": self.user}
        res = self.client.post(reverse("post-list"), data=data2)
        res = self.client.get(reverse("post-list"))
        self.assertEqual(res.status_code, 200)
        self.assertEqual(res.json()['count'], 2)
