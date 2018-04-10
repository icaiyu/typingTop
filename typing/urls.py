from django.conf.urls import url
from . import views
urlpatterns = [
    
    url(r'ajax_words',views.ajax_words),
    url(r'',views.index),
]