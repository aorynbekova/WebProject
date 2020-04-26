from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.views import APIView

from api.serializers import CategorySerializer, ProductSerializer
from api.models import Category, Product

class CategoriesView(APIView):
    def get(self, request):
        try:
            categories = Category.objects.all()
            serializer = CategorySerializer(categories, many=True)
            return JsonResponse(serializer.data, safe=False)
        except:
            return JsonResponse(serializer.errors, safe=False)

    def post(self, request):
        try:
            Category.objects.create(name = request.data['name'])
            return JsonResponse({"asd": "created category"}, safe=False)
        except:
            return JsonResponse({"err": "error creating category"}, safe=False)

@api_view(['GET'])
def books_by_genre(request, id):
    try:
        category = Category.objects.get(id=id)
        return JsonResponse(CategorySerializer(category.product_set.all(), many=True).data, safe=False)
    except:
        return JsonResponse({"exception":"happened"}, safe=False)

class BookDetailedView(APIView):
    def get(self, request, id):
        try:
            return JsonResponse(ProductSerializer(Product.objects.get(id=id)).data, safe=False)
        except:
            return JsonResponse({"exception":"happened"}, safe=False)
