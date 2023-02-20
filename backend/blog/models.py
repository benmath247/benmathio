from django.db import models
from django.urls import reverse
from django.template.defaultfilters import slugify
from ckeditor.fields import RichTextField
import django
from datetime import date


# Create your models here.
class User(django.contrib.auth.models.User):
    def __str__(self):
        return self.first_name + " " + self.last_name


class Category(models.Model):
    name = models.CharField(max_length=100, blank=False, default="")
    posts = models.ManyToManyField("Post", related_name="categories", blank=True)
    image = models.URLField(null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "categories"


class Post(models.Model):
    created = models.DateField()
    title = models.CharField(max_length=100, blank=True, default="")
    description = models.CharField(max_length=180)
    body = RichTextField()
    category = models.ManyToManyField(Category, blank=True, related_name="category")
    featured = models.BooleanField(default=False)
    visible = models.BooleanField(default=True)
    owner = models.ForeignKey("auth.User", null=True, on_delete=models.CASCADE)
    imageSrc = models.URLField(default="https://dummyimage.com/600x400/000/fff")
    slug = models.SlugField(null=False, unique=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return f"/blog/{self.slug}/"

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        return super().save(*args, **kwargs)

    class Meta:
        ordering = ["created"]


class ContactUs(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=254)
    subject = models.CharField(max_length=20)
    message = models.TextField()

    def __str__(self):
        return self.subject
