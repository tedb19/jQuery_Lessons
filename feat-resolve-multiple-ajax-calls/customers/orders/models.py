from django.db import models
from customer.models import Customer

class Orders(models.Model):
    customer = models.ForeignKey(Customer, related_name='customer_orders')
    order_item = models.CharField(db_column='order_item', max_length=100)

    def __str__(self):
        return '{0} - {1}'.format(self.order_item, self.customer)
