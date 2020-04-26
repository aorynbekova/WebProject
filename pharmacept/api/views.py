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
def product_by_category(request, id):
    try:
        category = Category.objects.get(id=id)
        return JsonResponse(ProductSerializer(category.product_set.all(), many=True).data, safe=False)
    except:
        return JsonResponse({"exception":"happened"}, safe=False)

class ProductDetailedView(APIView):
    def get(self, request, id):
        try:
            return JsonResponse(ProductSerializer(Product.objects.get(id=id)).data, safe=False)
        except:
            return JsonResponse({"exception":"happened"}, safe=False)

@api_view(['POST'])
def product_create(request):
    category = Category.objects.get(name=request.data.get('category_name'))
    Product.objects.create(
        name = request.data.get('name'),
        description = request.data.get('description'),
        link = request.data.get('link'),
        img_link = request.data.get('image'),
        available = request.data.get('available'),
        category = category,
        price = request.data.get('price'),
        rating = request.data.get('rating')
    )
    return JsonResponse({"asd":"asd"}, safe=False)

@api_view(['PUT', 'DELETE'])
def product_update_delete(request):
    if request.method == 'PUT':
        product = Product.objects.get(id=request.data.get('id'))
        product.name = request.data.get('name'),
        product.description = request.data.get('description'),
        product.link = request.data.get('link'),
        product.img_link = request.data.get('image'),
        product.available = request.data.get('available'),
        product.category = category,
        product.price = request.data.get('price'),
        product.rating = request.data.get('rating')
        products.save()
        return JsonResponse({"asd":"asd"}, safe=False)
    elif request.method == 'DELETE':
        product = Product.objects.get(id=request.data.get('id'))
        product.delete()

