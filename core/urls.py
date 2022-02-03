from django.urls import path
from . import views
urlpatterns =[
    path('updateDataApi',views.updateData),
    
    path('', views.Home, name='home'),
    path('speakers/', views.Speakers, name='speakers'),
    path('xperience/', views.Xperience, name='xperience'),
    path('about/', views.About, name='about'),
]