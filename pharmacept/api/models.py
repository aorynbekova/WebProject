from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=666)
    image = models.CharField(max_length=666)
    

class Product(models.Model):
    name = models.TextField()
    description = models.TextField()
    link = models.TextField()
    img_link = models.TextField()
    available = models.TextField()

    category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True, null=True)
    
    price = models.FloatField()
    rating = models.FloatField()

class Order(models.Model):
    phone = models.CharField(max_length=100)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, blank=True, null=True)

class Manager(models.Model):
    username = models.TextField()
    password = models.TextField()