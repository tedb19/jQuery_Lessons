from django.conf.urls import patterns, url

from django.contrib import admin
admin.autodiscover()


urlpatterns = patterns('orders.views',
                       url(r'get_orders/$', 'getOrders'),
                       )
