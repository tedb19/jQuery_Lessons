from django.shortcuts import render
from django.http import HttpResponse, QueryDict
import json

from .models import Customer


def home(request):
    template_name = 'index.html'
    return render(request, template_name, locals())


def get_customers(request):
    if request.is_ajax():
        response_data = []
        customers = Customer.objects.all()
        if customers:
            for customer in customers:
                individual = {}
                individual['first_name'] = customer.first_name
                individual['last_name'] = customer.last_name
                response_data.append(individual)

        else:
            response_data.append("None")
        return HttpResponse(json.dumps(response_data),
                            content_type="application/json")


def update_customers(request, pk):
    if request.is_ajax() and pk and request.method == 'PUT':
        response_data = {}
        first_name = QueryDict(request.body).get('firstName')
        last_name = QueryDict(request.body).get('lastName')

        try:
            customer = Customer.objects.get(
                pk=int(QueryDict(request.body).get('id')))
        except Customer.DoesNotExist:
            customer = None

        if customer:
            customer.first_name = first_name
            customer.last_name = last_name
            customer.save()
            response_data['data'] = 'success'
        return HttpResponse(json.dumps(response_data),
                            content_type="application/json")


def add_customer(request):
    if request.is_ajax() and request.method == 'POST':
        response_data = {}
        first_name = request.POST.get('firstName')
        last_name = request.POST.get('lastName')
        customer = Customer(first_name=first_name,
                            last_name=last_name)
        customer.save()
        response_data['data'] = 'success'
        return HttpResponse(json.dumps(response_data),
                            content_type="application/json")
