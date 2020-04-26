from rest_framework import serializers
from api.models import Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = 'id', 'name', 'image'

class ProductSerializer(serializers.Serializer):
    name = serializers.CharField()
    description = serializers.CharField()
    link = serializers.CharField()
    img_link = serializers.CharField()
    available = serializers.CharField()

    category = CategorySerializer()
    
    price = serializers.FloatField()
    rating = serializers.FloatField()

