from django.conf.urls import patterns, url

from django.contrib import admin
admin.autodiscover()


urlpatterns = patterns('customer.views',
                       url(r'get_customers/$', 'get_customers'),
                       url(r'add_customer/$', 'add_customer'),
                       url(r'get_customer/$', 'get_customer'),
                       url(r'update_customer/(?P<pk>[-\w]+)/$',
                           'update_customers'),
                       )
