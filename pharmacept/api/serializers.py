from rest_framework import serializers
from api.models import Category, Manager

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = 'id', 'name', 'image'
class ManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manager
        fields = 'id', 'usename'

class ProductSerializer(serializers.Serializer):
    id=serializers.IntegerField(required=False)
    name = serializers.CharField()
    description = serializers.CharField()
    link = serializers.CharField()
    img_link = serializers.CharField()
    available = serializers.CharField()

    category = CategorySerializer()
    
    price = serializers.FloatField()
    rating = serializers.FloatField()

class OrderSerializer(serializers.Serializer):
    id = serializers.IntegerField(required=False)
    phone = serializers.CharField()
    product = ProductSerializer()

