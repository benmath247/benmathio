import factory


class PostFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = "blog.Post"

    title = factory.Sequence(lambda n: f"Blog Post Title {n}")
    text = factory.Faker("text")
