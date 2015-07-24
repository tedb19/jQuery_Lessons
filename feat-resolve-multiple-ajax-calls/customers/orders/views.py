import json

from django.shortcuts import render
from django.http import HttpResponse

from .models import Orders
from customer.models import Customer


def getOrders(request):
    if request.method == 'POST' and request.is_ajax():
        response_data = []
        order = {}
        try:
            customer = Customer.objects.get(pk=request.POST.get('customerID'))
            orders = Orders.objects.filter(customer=customer)
        except Orders.DoesNotExist:
            orders = None
        except Customer.DoesNotExist:
            customer = None

        if orders:
            for o in orders:
                order['order_item'] = o.order_item
                order['customer'] = o.customer.first_name + " " + o.customer.last_name
                response_data.append(order)


        return HttpResponse(json.dumps(response_data),
                            content_type="application/json")

             
        




