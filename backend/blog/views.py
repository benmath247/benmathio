from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework import viewsets, generics
from blog.models import Post, Category
from blog.serializers.post_serializer import PostSerializer
from blog.serializers.category_serializer import CategorySerializer
from blog.serializers.user_serializer import UserSerializer
from blog.serializers.post_serializer import PostSerializer
from blog.serializers.contactUs_serializer import ContactUsSerializer
from blog.permissions import IsOwnerOrReadOnly
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.mail import send_mail
from rest_framework import status
from django.conf import settings
from .helper.helper import send_email
from sendgrid.helpers.mail import Mail, Email, To, Content
from blog_backend.settings import SEND_GRID_FROM_EMAIL, LOGO_122_SERVER_PATH


# Create your views here.
class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        import pdb

        pdb.set_trace()
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


class UserContactView(APIView):
    serializer_class = ContactUsSerializer

    def post(self, request, *args, **kwargs):
        try:
            data = request.data
            serializer = ContactUsSerializer(data=data)
            # admin_email = Contact.objects.all().first()
            if serializer.is_valid():
                name = serializer.validated_data["name"]
                email = serializer.validated_data["email"]
                message = serializer.validated_data["message"]
                subject = serializer.validated_data["subject"]
                to_email = To(email)
                email_from = Email(SEND_GRID_FROM_EMAIL)
                admin_email = "ben@benmath.io"
                try:
                    admin_content = Content(
                        "text/html",
                        f'<div style="background:rgba(36,114,252,.06)!important"><table style="font:Arial,sans-serif;border-collapse:collapse;width:600px;margin:0 auto" width="600" cellpadding="0" cellspacing="0"><tbody><tr><td style="width:100%;margin:36px 0 0"><div style="padding:34px 44px;border-radius:8px!important;background:#fff;border:1px solid #dddddd5e;margin-bottom:50px;margin-top:50px"><div class="email-logo"><img src={LOGO_122_SERVER_PATH} /></div><a href="#"></a><div class="welcome-text" style="padding-top:20px"><h1 style="font:24px">Welcome to BenMath.io!</h1></div><div class="welcome-paragraph"><div style="padding:10px 0;font-size:16px;color:#384860">{name}, user wants to contact you regarding below query</div><div style="box-shadow:0 4px 40px rgb(36 114 252 / 6%);border-radius:0 8px 8px 0;margin-top:10px;display:flex"><div style="width:7px;background-color:#2472fc;border-radius:50px"></div><div><div style="padding:0 20px;height:100%;border-radius:0;border-left: 5px solid #15c;"><div></div><div></div><div style="font-size:16px;line-height:19px;color:rgba(0,0,0,.7);font-weight:700;padding:15px 0"><span style="padding:0 12px">Email:  {email}</span></div><div style="font-size:16px;line-height:19px;color:rgba(0,0,0,.7);font-weight:700;padding:15px 0"><span style="padding:0 12px">Subject:  {subject} </span></div><div style="font-size:16px;line-height:19px;color:rgba(0,0,0,.7);font-weight:700;padding:15px 0"><span style="padding:0 12px">Message:  {message}</span></div></div></div></div><div style="padding:20px 0;font-size:16px;color:#384860">Sincerely,<br>The BenMath.io Team</div></div><div style="padding:10px 0" class="email-bottom-para"><div style="padding:20px 0;font-size:16px;color:#384860">This email was sent by BenMath.io.</div><div style="font-size:16px;color:#384860">© 2023 BenMath.io</div></div></div></td></tr></tbody></table></div>',
                    )
                    user_content = Content(
                        "text/html",
                        f'<div style="background:rgba(36,114,252,.06)!important"><table style="font:Arial,sans-serif;border-collapse:collapse;width:600px;margin:0 auto" width="600" cellpadding="0" cellspacing="0"><tbody><tr><td style="width:100%;margin:36px 0 0"><div style="padding:34px 44px;border-radius:8px!important;background:#fff;border:1px solid #dddddd5e;margin-bottom:50px;margin-top:50px"><div class="email-logo"><img src={LOGO_122_SERVER_PATH} /></div><a href="#"></a><div class="welcome-text" style="padding-top:20px"><h1 style="font:24px">Welcome to BenMath.io!</h1></div><div class="welcome-paragraph"><div style="padding:10px 0;font-size:16px;color:#384860">{name}, thanks for sending your query</div><div style="box-shadow:0 4px 40px rgb(36 114 252 / 6%);border-radius:0 8px 8px 0;margin-top:10px;display:flex"><div style="width:7px;background-color:#2472fc;border-radius:50px"></div><div><div style="padding:0 20px;height:100%;border-radius:0;border-left: 5px solid #15c;"><div></div><div></div><div style="font-size:16px;line-height:19px;color:rgba(0,0,0,.7);font-weight:700;padding:15px 0"><span style="padding:0 12px">Email:  {email}</span></div><div style="font-size:16px;line-height:19px;color:rgba(0,0,0,.7);font-weight:700;padding:15px 0"><span style="padding:0 12px">Subject:  {subject} </span></div><div style="font-size:16px;line-height:19px;color:rgba(0,0,0,.7);font-weight:700;padding:15px 0"><span style="padding:0 12px">Message:  {message}</span></div></div></div></div><div style="padding:20px 0;font-size:16px;color:#384860">Sincerely,<br>The BenMath.io Team</div></div><div style="padding:10px 0" class="email-bottom-para"><div style="padding:20px 0;font-size:16px;color:#384860">This email was sent by BenMath.io.</div><div style="font-size:16px;color:#384860">© 2023 BenMath.io</div></div></div></td></tr></tbody></table></div>',
                    )

                    data = send_email(email_from, to_email, subject, user_content)

                    data = send_email(email_from, admin_email, subject, admin_content)

                    return Response(
                        {
                            "success": "Mail Sent Successfully ,thanks for your feedback",
                            "status": status.HTTP_200_OK,
                        },
                        status=status.HTTP_200_OK,
                    )
                except Exception as e:
                    pass
            else:
                return Response(
                    {
                        "message": serializer.errors,
                        "status": status.HTTP_400_BAD_REQUEST,
                    },
                    status=status.HTTP_400_BAD_REQUEST,
                )
        except KeyError as e:
            return Response(
                {"message": f"{e} is required", "status": status.HTTP_400_BAD_REQUEST},
                status=status.HTTP_400_BAD_REQUEST,
            )
