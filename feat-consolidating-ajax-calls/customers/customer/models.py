from django.db import models


class Customer(models.Model):
    first_name = models.CharField(db_column='firstName', max_length=100)
    last_name = models.CharField(db_column='lastName', max_length=100)

    def __str__(self):
        return '{0} {1}'.format(self.first_name, self.last_name)
