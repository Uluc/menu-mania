from django.db import models
from restaurant.models import Restaurant
from customer.models import Customer

class Order(models.Model):
    restaurant = models.ForeignKey("restaurant.Restaurant", on_delete=models.CASCADE())
    customer = models.ForeignKey("customer.Customer" on_delete=models.CASCADE())
    time_ordered = models.DateTimeField(auto_now=True)
    time_delivered = models.DateTimeField()