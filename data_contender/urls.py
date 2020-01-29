from data_contender.views import get_data,load_data_to_search_engine,search_data
from django.urls import path

urlpatterns = [
    path('get_data/',get_data),
    path('load_data/',load_data_to_search_engine),
    path('search/',search_data),
]
