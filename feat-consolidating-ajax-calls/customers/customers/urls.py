from django.conf.urls import patterns, url

from django.contrib import admin
admin.autodiscover()

urlBase = r'customers/api/'

urlpatterns = patterns('customer.views',
                       url(r'^$', 'home', name='home'),
                       url(urlBase + r'get_customers/$', 'get_customers'),
                       url(urlBase + r'add_customer/$', 'add_customer'),
                       url(urlBase + r'update_customer/(?P<pk>[-\w]+)/$',
                           'update_customers'),
                       )
