from django.urls import path
from api import views
urlpatterns = [
    path('categories/', views.CategoriesView.as_view()),
    path('categories/<int:id>/products/', views.product_by_category),
    path('products/<int:id>/', views.ProductDetailedView.as_view()),
    path('products/create/', views.product_create),
    path('products/update/<int:id>/', views.product_update_delete),
    path('order/', views.order)
]