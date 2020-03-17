from django.urls import path
from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^category/$', views.CategoryList.as_view()),
    url(r'^category/(?P<id>\d+)/$', views.ItemList.as_view()),
    url(r'^item/(?P<id>\d+)/$', views.ItemDisplay.as_view()),
    url(r'^item/trending/$', views.TrendingList.as_view()),
] 