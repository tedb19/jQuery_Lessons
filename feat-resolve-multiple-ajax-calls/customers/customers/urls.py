from django.conf.urls import patterns, url, include

from django.contrib import admin
admin.autodiscover()


urlpatterns = patterns('',
                       url(r'^$', 'customer.views.home', name='home'),
                       url(r'^customers/api/', include('customer.urls')),
                       url(r'^orders/api/', include('orders.urls')),
                       )
