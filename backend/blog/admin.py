from django.contrib import admin
from blog.models import Post, Category

# Register your models here.
class PostAdmin(admin.ModelAdmin):
    list_display = ("title", "body")
    prepopulated_fields = {"slug": ("title",)}


class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "image")


admin.site.register(Post, PostAdmin)
admin.site.register(Category, CategoryAdmin)
