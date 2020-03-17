from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Category, Item
from .serializers import ItemSerializer, CategorySerializer

class CategoryList(APIView):
    
    def get(self, request):
        category = Category.objects.all()
        serializer = CategorySerializer(category, many=True)
        return Response(serializer.data)


class ItemList(APIView):
    
    def get(self, request, id):
        item = Item.objects.filter(Category = id)                    
        serializer = ItemSerializer(item, many=True)
        return Response(serializer.data)

class ItemDisplay(APIView):

    def get(self, request, id):
        item = Item.objects.filter(id = id)                    
        serializer = ItemSerializer(item, many=True)
        return Response(serializer.data)

class TrendingList(APIView):

    def get(self, request):
        item = Item.objects.filter(trending = 1)                    
        serializer = ItemSerializer(item, many=True)
        return Response(serializer.data)